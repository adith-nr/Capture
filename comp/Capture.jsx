import React, { useEffect, useState } from 'react'
import './Capture.css'

 import { IoCloudUploadOutline } from "react-icons/io5";

import './Captcha.css'
import axios from 'axios'


function Capture() {
    const [loading,setLoading] = useState(false)
    const [image, setImage] = useState(null)
    const [key, setKey] = useState(0)
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
        setImage(true)
    }

   function handleChange(e){
        setdata({
            filename : e.target.files[0].name,
            captcha : ""
        })
    }

    function handlesubmit(e){
        e.preventDefault()
            postAPI();
            setLoading(true);
        
    }

    useEffect(()=>{
        if (datafile?.captcha){
            setKey((prevkey) => prevkey + 1)
        }
    }, [datafile?.captcha])


  return (
    //onClick={() => document.querySelector(".img").click()}
    <form action="" className='capture' id='form' onSubmit={handlesubmit} onClick={(e) => {
        if (e.target.id != "btn"){
            document.querySelector(".img").click();
        }
    }}>
        
        <input type="file" className="img" name="img"  onChange={handleChange} accept="image/*" placeholder='Captcha' hidden />
        {image ?
            (<img src={`./backend/test/${datafile.filename}`} style={{ width: '350px', height: '200px' }} alt="Image" />
            )
            :
             (<IoCloudUploadOutline size = {80} />)
        }
        

        <div className="load">

       
            <h1 key={key} className='terminal'>{datafile.captcha}  </h1>
     
        </div>

        <button id='btn' type="submit">.Upload</button>
    </form>

  )
}

export default Capture
