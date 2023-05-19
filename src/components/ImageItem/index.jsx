import React from 'react'

function ImageItem({ image }) {
  return (
    <figure className="image ">
    <img className="teacher_image " src={image} alt="Placeholder image"
        style={{
            width: "12rem",
            height: "12rem",
            clipPath: "circle(50% )",
            // border: "1px solid #000"
            borderRadius: '50%',
            border: '1px solid var(--border-color)'
        }}
    />
</figure>
  )
}

export default ImageItem