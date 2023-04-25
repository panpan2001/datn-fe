import React from 'react'
import '../../assets/styles/AcademicInfo.css'
function AcademicInfo() {
  return (
    <div className='academic-info_container'>
      <div className="columns is-multiline">
        <div className="column is-6">
          <div className="field">
            <label className="label" >Trình độ học vấn</label>
            <input className="input" type="text" placeholder="Trình độ học vấn" />
          </div>
        </div>
        
       
        <div className="column is-6">
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

        <div className="column ">
          <div className="field is-multiline">
            <label className="label" >Chứng chỉ</label>
            <input className="input" type="textarea" placeholder="Trình độ học vấn" />
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Mô tả cá nhân </label>
            <input className="input" type="textarea" placeholder="Mô tả cá nhân" />
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default AcademicInfo