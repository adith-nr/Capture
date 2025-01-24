import React, { useEffect, useState } from 'react'
import './Capture.css'

import './Captcha.css'
import axios from 'axios'


function Capture() {
    const [loading,setLoading] = useState(false)
    const [datafile, setdata] = useState({ filename: '', captcha: '' });

    const postAPI = async() =>{
        const form = new FormData();
        //console.log(datafile.name);
        form.append("filename", datafile.filename)
        form.append("captcha", "")

        const send  = await axios.post('http://127.0.0.1:8080/api/captcha', form, {
            headers: { "Content-Type": "multipart/form-data" },
            method : "POST",
        })

        //console.log(send.data)
        setdata(send.data)
    }

   function handleChange(e){
        setdata({
            filename : e.target.files[0].name,
            captcha : ""
        })
    }

    useEffect(() => {
        if (datafile.filename !== '') {
          postAPI()
          setLoading(true)
        }
      }, [datafile.filename])


  return (
    <div className='capture'>

        <form action="" id='form'>
            <h3 id='ctitle'>Upload the image you want to capture:</h3>
            <input type="file" id="img" name="img"  onChange={handleChange} accept="image/*" />
            <button id='btn' type="submit">Upload</button>
        </form>


        <div className="load">
            {!loading ? (
                <h3>Loading..</h3>
            ):(
                <h2>{datafile.filename} : {datafile.captcha}</h2>
            )   
            }
            <img src={`./backend/test/${datafile.filename}`} alt='blank'></img>
        </div>

    </div>

  )
}

export default Capture
