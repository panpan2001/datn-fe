import React from 'react'
import '../../assets/styles/AcademicInfo.css'
function AcademicInfo() {
  return (
    <div className='academic-info_container'>
      <div className="columns is-multiline">
      {/* <div className="column is-6">
          <div className="field">
            <label className="label" >Trình độ học vấn</label>
            <input className="input" type="text" placeholder="Trình độ học vấn" />
          </div>
        </div> */}

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
            <label className="label" >Minh chứng học vấn (đường dẫn ảnh)</label>
            <input className="input" type="textarea" placeholder="Minh chứng học vấn (đường dẫn ảnh)" />
          </div>
        </div> 

        <div className="column is-12">
          <div className="field">
            <label className="label">Mô tả học vấn</label>
            <textarea class="textarea is-info" placeholder="Mô tả học vấn"></textarea>
          </div>
        </div>
      
        
        
      </div>
    </div>
  )
}

export default AcademicInfo