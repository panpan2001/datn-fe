import React, { useEffect } from 'react'
import '../../assets/styles/TeacherCompleteInfoPage.css'
import { Outlet, useNavigate } from 'react-router-dom'
import TeacherCompleteInfoForm from '../../components/TeacherCompleteInfoForm'
import { useSelector } from 'react-redux'
import AcademicInfo from '../../components/TeacherCompleteInfoForm/AcademicInfo'
const TeacherCompleteInfoPage = () => {


  return (
      <div className="columns  is-multiline  "  id="teacher-complete-info-page">
<Outlet/>
      </div>

  )
}

export default TeacherCompleteInfoPage


{/* 
let user = useSelector((state) => state.signup.register?.currentUser)
  const navigate = useNavigate()

<div className="column is-2"></div> */}
{/* <div className="column is-5 ">
        {user.role_name === 'student' ? <StudentCompleteInfoForm /> :
          (user.role_name === 'teacher' ? <TeacherCompleteInfoForm /> :
            navigate('/profile'))}
      </div> */}
{/* <div className="column is-5 complete-info-page_column-6 ">
        <img className="complete-info-page_image" src={require('../../assets/images/2.jpg')} alt="" srcset="" />
        <div id="message-1">
          <strong>Bạn điền thêm thông tin để hoàn tất đăng kí nha!</strong>
        </div>
        <div id="message-2"></div>
        <div id="message-3"></div>
      </div> */}