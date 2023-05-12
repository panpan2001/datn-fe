import React, { useEffect, useState } from 'react'
import '../../assets/styles/ImageInfo.css'
const ImageInfo = () => {
  const imageLabelNames = ["Ảnh cá nhân", "Ảnh bằng cấp", "Ảnh chứng chỉ"]
  const [images, setImages] = useState([])
  const [imageURLs, setImagesURLs] = useState([])
  const newImageURLs = []
  useEffect((() => {
    if (images.length < 1) return;

    images.forEach(image => {
      newImageURLs.push(URL.createObjectURL(image))
      setImagesURLs(newImageURLs)

    })
    console.log(newImageURLs)
  }), [images])

  const onImageChange = (e) => {
    setImages([...e.target.files])
  }
  return (
    <div className='image-info_container'>
        <div className="column is-7 is-centered" id="display-teacher-image-upload_column">
          <button type='button' className='button is-primary' id="choose-image_button">
            <p id='upload-teacher-image_p'>Chọn ảnh</p>
            <input className="file-input"
              type="file"
              multiple accept="image/*"
              name="resume"
              onChange={(e) => onImageChange(e)} />
          </button>
          <div className="teacher-image-sign-up_div" >
          {imageURLs.map(imageSrc => <img src={imageSrc} />)}
          </div>

        </div>
      </div>

  )
}

export default ImageInfo

{/* <input className=' is-centered' type="file" multiple accept="image/*" onChange={(e)=>onImageChange(e)} style={{opacity:0}}/>
        <button type='button' className='button is-primary'>Chọn ảnh</button> */}