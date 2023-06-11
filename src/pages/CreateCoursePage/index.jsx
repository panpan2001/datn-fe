import React, { useEffect, useState } from 'react'
import '../../assets/styles/CreateClassPage.css'
import { useDispatch, useSelector } from 'react-redux'
import getCourseCategory from '../../redux/actions/CourseCategory/GetCourseCategory'
import uploadImage from '../../contexts/uploadImage'
import { AiOutlineClose } from 'react-icons/ai'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { createCourseSuccess } from '../../redux/slices/Course/createCourse'
import createAxiosJWT from '../../utils/createInstance'
import createCourse from '../../redux/actions/Course/CreateCourse'
import { useNavigate } from 'react-router-dom'
import updateTeacher from '../../redux/actions/Teacher/UpdateTeacher'
import CreateCourseForm from '../../components/CreateCourseForm'
import CreateDemoCourseForm from '../../components/CreateDemoCourseForm'

function CreateClassPage() {
const [showForm, setShowForm] = useState(true)
const [checked,setChecked]= useState(true)
// const [checked2,setChecked2]= useState(false)
const handleShowForm= ()=>{
  setShowForm(!showForm)
  setChecked(!checked)
  // setChecked2(!checked2)
}
  return (
    <div className='create-class-page_container container  is-centered ' >
     <div className="create-class-select-option"
     style={{
      display:'flex',
      flexDirection:"row",
      gap:"1rem",
      justifyContent:'center',
      alignItems:'center',
     }}>
     <strong className="is-size-5">Bạn muốn: </strong>
      <div className="control"
      style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        marginTop:".25rem"
      }}>
        <label className="radio">
          <input
            type="radio"
            name="type_of_course"
            checked={checked}
            onChange={()=>handleShowForm()}
          />
          Tạo khóa học chính thức
        </label>
        <label className="radio ml-6">
          <input type="radio"
            name="type_of_course"
            checked={!checked}
          onChange={()=>handleShowForm()}
             />
          Tạo khóa học thử
        </label>
      </div>
     </div>
     <div
      style={{
        display: checked ? 'block' : 'none'
      }}>
       <CreateCourseForm/>
      </div>
      <div style={{
        display: checked ? "none":"block"
      }}>
     
      <CreateDemoCourseForm  />
      </div>
    </div>
  )
}

export default CreateClassPage

