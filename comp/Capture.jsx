import React, { useState } from 'react'
import './Capture.css'
function Capture() {
    const [file,setFile]=useState(null)
    const [loading,setLoading] = useState(true)

   function handleChange(e){
        console.log(e.target.files)
        setFile(e.target.files[0])
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(!file){
            alert('Upload please!')
            return
        }
        const fileData = new FormData()
        fileData.append('image',file)
        try{
            let response = await fetch('xyz.com',{
                method:'POST',
                body:fileData
            })
            const data = await response.json()
            console.log(data)
            setLoading(false)
        }
       
        catch(error){
            console.log('Error:',error)
        }
    }


  return (
    <div className='capture'>

        <form action="" onSubmit={handleSubmit} id='form'>
            <h3 id='ctitle'>Upload the image you want to capture:</h3>
            <input type="file" id="img" name="img"  onChange={handleChange} accept="image/*" />
            <button id='btn' type="submit">Upload</button>
        </form>
        <div className="load">
            {loading ? (
                <h3>Loading..</h3>
            ):(
                <h2>The text is{data}</h2>
            )   
            }
        </div>
        


      
    </div>
  )
}

export default Capture
