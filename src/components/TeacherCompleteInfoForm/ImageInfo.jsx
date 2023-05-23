import React, { useEffect, useState } from 'react'
import '../../assets/styles/ImageInfo.css'
import uploadImage from '../../contexts/uploadImage';

const ImageInfo = () => {
  const [images, setImages] = useState()
  const [url, setUrl]= useState('')
  const onImageChange = (e) => {
    e.preventDefault()
    setImages(e.target.files)
   
  }
  
  
     useEffect(() => {
       uploadImage(images).then((res)=>{
        setUrl(res)
        // console.log("res",res)
        // console.log("url vs check url useEffect a",url)
        // console.log("res vs url",res==url)
       })
     },[images])
    console.log("url end ",url)
  
 
  return (
    <div className='teacher-image-info_container container'>
      <div className="column is-7 is-centered" id="teacher-image-upload_column">
        <strong className='is-size-4'>Mô tả cá nhân </strong>
        <div className="column  teacher-image-upload_column-is-10">
          <div className="field teacher-image-upload_field" >
            <label className="label">Mô tả cá nhân</label>
            <textarea className="textarea is-info" placeholder="Mô tả cá nhân"></textarea>
          </div>
        </div>


        <div className="column teacher-image-upload_column-is-5">
          <div className="field teacher-image-upload_field " >
            <label className="label">Ảnh chân dung</label>
            <div style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems:"center"
            }}>
              <button
               type='button ml-6'
               className='button is-primary' 
               id="choose-image_button"
              //  style={{marginLeft:"1rem"}}
               >
                <p id='upload-teacher-image_p'>Chọn ảnh</p>
                <input className="file-input"
                  type="file"
                  multiple accept="image/*"
                  name="resume"
                  onChange={(e) => onImageChange(e)} />
              </button>
             <p>{images && (images[0] ? images[0].name : '')}</p>
            </div>

          </div>
        </div>
        {/* <div className="field">
          <label className="label">Ảnh chân dung</label>
          <button type='button' className='button is-primary' id="choose-image_button">
            <p id='upload-teacher-image_p'>Chọn ảnh</p>
            <input className="file-input"
              type="file"
              multiple accept="image/*"
              name="resume"
              onChange={(e) => onImageChange(e)} />
          </button>
          </div> */}

        {/* <div className="teacher-image-sign-up_div" > */}
        {/* {imageURLs.map(imageSrc => <img src={imageSrc} />)} */}
        {/* </div> */}
        <div className="field is-grouped is-grouped-centered mt-3 " id='signup_button'>
          <button className="button is-link" 
          type="submit"
          disabled={url? false:true}
          >Hoàn thành</button>
        </div>
      </div>
    </div>

  )
}

export default ImageInfo

{/* <input className=' is-centered' type="file" multiple accept="image/*" onChange={(e)=>onImageChange(e)} style={{opacity:0}}/>
        <button type='button' className='button is-primary'>Chọn ảnh</button> */}