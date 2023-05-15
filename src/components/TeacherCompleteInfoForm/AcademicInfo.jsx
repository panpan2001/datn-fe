import React from 'react'
import '../../assets/styles/AcademicInfo.css'
import { Link } from 'react-router-dom'
function AcademicInfo() {
  return (
    <div className='academic-info_container'>
      <div className="columns is-multiline">
        <div className="column is-6">
          <div className="field">
            <label className="label" >Tên trường </label>
            <input className="input" type="text" placeholder="Tên trường" />
          </div>
        </div>

        <div className="column is-6">
          <div className="field is-multiline">
            <label className="label" >Chuyên ngành</label>
            <input className="input" type="textarea" placeholder="Chuyên ngành" />
          </div>
        </div>

        <div className="column is-6">
          <div className="field">
            <label className="label" >Thời gian học </label>
            <input className="input" type="text" placeholder="Thời gian học" />
          </div>
        </div>

        <div className="column is-6">
          <div className="field ">
          <label className="label" >Minh chứng học vấn </label>

          <button type='button' className='button is-primary' id="choose-image_button"
      style={{width: "145px"}}>
            <p id='upload-teacher-image_p'>Chọn ảnh</p>
            <input className="input-img"
              type="file"
              multiple accept="image/*"
              name="resume"
              id='input-img'
              style={{opacity:0,
                
                width: "145px",
                marginLeft: "-18px",
                height: "40px",
              }}
               />
          </button>
          </div>
        </div>  

        <div className="column is-12">
          <div className="field">
            <label className="label">Mô tả học vấn</label>
            <textarea class="textarea is-info" placeholder="Mô tả học vấn"></textarea>
          </div>
        </div>
        <Link to='/completeInfoTeacher/degree'>
          <button type="submit"  className='button is-primary'>here</button>
          
        </Link>
      </div>
    </div>
  )
}

export default AcademicInfo