import React, { useEffect, useState } from 'react'

const  ImageInfo=()=> {
  const [images, setImages] = useState([])
  const [imageURLs, setImagesURLs] = useState([])
  const newImageURLs= []
  useEffect((()=>{
    if(images.length<1) return;
    
    images.forEach(image=>{
      newImageURLs.push(URL.createObjectURL(image))
      setImagesURLs(newImageURLs)
      
    })
    console.log(newImageURLs)
  }),[images])

const  onImageChange=(e)=>{
    setImages([...e.target.files])
  }
  return (
    <div>
      <p>Hello</p>
      <div className="columns is-centered">
        {/* <div className="column is-6 is-centered"> */}
        {imageURLs.map(imageSrc=><img src={imageSrc}/>)} 
        <input type="file" multiple accept="image/*" onChange={(e)=>onImageChange(e)} />
        {/* </div> */}
        {/* <div className="column is-6"></div> */}
      </div>
    
      </div>
  )
}

export default ImageInfo