import React from 'react'
import { Link } from 'react-router-dom'

function DegreeInfo() {
  return (
    <div className='degree-info_container'>
         <div className="columns is-multiline">

        <div className="column is-6">
          <div className="field">
            <label className="label" >Tên chứng chỉ </label>
            <input className="input" type="text" placeholder="Tên trường" />
          </div>
        </div>
        
        <div className="column is-6">
          <div className="field">
            <label className="label" >Thời gian học </label>
            <input className="input" type="text" placeholder="Thời gian học" />
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

        
        <div className="column is-6">
          <div className="field ">
            <label className="label" >Minh chứng chứng chỉ (đường dẫn ảnh)</label>
            <input className="input" type="text" placeholder="Minh chứng chứng chỉ (đường dẫn ảnh)" />
          </div>
        </div>

        <Link to='/completeInfoTeacher/description'>
          <button type="submit"  className='button is-primary'>here</button>
          
        </Link>
        
        
      </div>
    </div>
  )
}

export default DegreeInfo