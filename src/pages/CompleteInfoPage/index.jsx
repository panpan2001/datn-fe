import React, { useEffect } from 'react'
import '../../assets/styles/CompleteInfoPage.css'
import StudentCompleteInfoForm from '../../components/StudentCompleteInfoForm'
import { useNavigate} from 'react-router-dom'
import TeacherCompleteInfoForm  from '../../components/TeacherCompleteInfoForm'
import { useSelector } from 'react-redux'
const CompleteInfoPage = () => {


let user= useSelector((state)=> state.signup.register?.currentUser)
const navigate=useNavigate()

  return (
    <div className="columns complete-info-page">
           <div className="column is-2"></div>
      <div className="column is-4 mr-6">
        {user.role_name==='student'?<StudentCompleteInfoForm />:(user.role_name==='teacher'?<TeacherCompleteInfoForm />:navigate('/profile'))}
      </div>
      <div className="column is-6 complete-info-page_column-6 ">
        <img className="complete-info-page_image" src={require('../../assets/images/2.jpg')} alt="" srcset="" />
        <div id="message-1">
          <strong>Bạn điền thêm thông tin để hoàn tất đăng kí nha!</strong>
        </div>
        <div id="message-2"></div>
        <div id="message-3"></div>
      </div>
    </div>

  )
}

export default CompleteInfoPage