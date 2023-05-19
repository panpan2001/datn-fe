import '../../assets/styles/TeacherAcademicDegreeInfoForm.css'

import { useState } from "react"
import PersonalInfo from "./PersonalInfo"
import AcademicInfo from './AcademicInfo'
import ImageInfo from './ImageInfo'
import DegreeInfo from './DegreeInfo'
import { Link } from 'react-router-dom'
const TeacherAcademicDegreeInfoForm = () => {
    return ( 
         <form className=' is-8 column ' id='teacher-complete-info_form'>

    <strong className='is-size-4'>Thông tin học vấn </strong>
    <div className="columns is-multiline teacher-academic-info">
      <div className="column is-5">
        <div className="field">
          <label className="label" >Tên trường </label>
          <input className="input" type="text" placeholder="Tên trường" />
        </div>
      </div>

      <div className="column is-5">
        <div className="field is-multiline">
          <label className="label" >Chuyên ngành</label>
          <input className="input" type="textarea" placeholder="Chuyên ngành" />
        </div>
      </div>

      <div className="column is-5">
        <div className="field">
          <label className="label" >Thời gian học </label>
          <input className="input" type="text" placeholder="Thời gian học" />
        </div>
      </div>

      <div className="column is-5">
        <div className="field ">
          <label className="label" >Minh chứng học vấn </label>

          <button type='button' className='button is-primary' id="choose-image-academic _button"
            style={{ width: "145px" }}>
            <p id='upload-teacher-image_p'>Chọn ảnh</p>
            <input className="input-img"
              type="file"
              multiple accept="image/*"
              name="resume"
              id='input-img'
              style={{
                opacity: 0,

                width: "145px",
                marginLeft: "-18px",
                height: "40px",
              }}
            />
          </button>
        </div>
      </div>

      <div className="column is-10">
        <div className="field">
          <label className="label">Mô tả học vấn</label>
          <textarea className="textarea is-info" placeholder="Mô tả học vấn"></textarea>
        </div>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <strong className='is-size-4'>Thông tin chứng chỉ  </strong>
    <div className="columns is-multiline teacher-degree-info">
      <div className="column is-5">
        <div className="field">
          <label className="label" >Tên chứng chỉ </label>
          <input className="input" type="text" placeholder="Tên trường" />
        </div>
      </div>

      <div className="column is-5">
        <div className="field">
          <label className="label" >Thời gian học </label>
          <input className="input" type="text" placeholder="Thời gian học" />
        </div>
      </div>

      <div className="column is-5">
        <label className="label" id="level"  >Cấp độ </label>
        <div className=" field select ">
          <select >
            <option value="CEFR Level A1 - Beginner">CEFR Level A1 - Beginner</option>
            <option value="CEFR Level A2 - Pre-intermediate ">CEFR Level A2 - Pre-intermediate</option>
            <option value="CEFR Level B1 - Intermediate">CEFR Level B1 - Intermediate</option>
            <option value="CEFR Level B2 - Upper-Intermediate">CEFR Level B2 - Upper-Intermediate</option>
            <option value="CEFR Level C1 - 	Advanced">CEFR Level C1 - 	Advanced</option>
            <option value="CEFR Level C2 - Mastery">CEFR Level C2 - Mastery</option>
          </select>
        </div>
      </div>

      <div className="column is-5">
        <div className="field ">
          <label className="label" >Minh chứng chứng chỉ </label>

          <button type='button' className='button is-primary' id="choose-image-degree_button"
            style={{ width: "145px" }}>
            <p id='upload-teacher-image_p'>Chọn ảnh</p>
            <input className="input-img"
              type="file"
              multiple accept="image/*"
              name="resume"
              id='input-img'
              style={{
                opacity: 0,

                width: "145px",
                marginLeft: "-18px",
                height: "40px",
              }}
            />
          </button>
        </div>
      </div>
    </div>

    <div className="field is-grouped is-grouped-centered mt-3 " id='signup_button'>
      <button className="button is-link" type="submit">Tiếp</button>
    </div>
    
    </form>
    )
  
}

export default TeacherAcademicDegreeInfoForm 