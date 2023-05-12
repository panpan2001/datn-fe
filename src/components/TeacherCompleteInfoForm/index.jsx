import '../../assets/styles/TeacherSignUpForm .css'

import { useState } from "react"
import PersonalInfo from "./PersonalInfo"
import AcademicInfo from './AcademicInfo'
import ImageInfo from './ImageInfo'
import DegreeInfo from './DegreeInfo'
import { Link } from 'react-router-dom'
const TeacherCompleteInfoForm = () => {
    const FormTitle = [ "Thông tin học vấn","Thông tin chứng chỉ", "Ảnh chân dung"]
    const [page, setPage] = useState(0)
    const handleNext = () => {
        setPage((currentPage) => currentPage + 1)
    }
    const handlePre = () => {
        setPage((currentPage) => currentPage - 1)
    }
    return (
        // <div className="teacher-singup_form">
            <form className='teacher-signup-form_container container-fluid mr-6'>
                <div className="header">
                    <label className="label login-name_label is-size-3">
                        <strong>Đăng kí với vai trò là giáo viên </strong>
                    </label>
                    <label className="label login-name_label is-size-5 mt-3 mb-2">
                        <strong>{FormTitle[page]} </strong>
                    </label>
                </div>
                <div className="body">
                   {page==0? <AcademicInfo/>:
                   (page==1? <DegreeInfo/>:<ImageInfo/>)
                    } 
                </div>
                <div className="footer" id='singup-button_footer'>
                    <div className="field is-grouped is-grouped-centered" id='signup_button'>
                        <button className="button is-link" type="button"
                            disabled={page == 0}
                            onClick={handlePre}>
                            Trước
                        </button>
                        {page < FormTitle.length - 1 &&
                            <button className="button is-link" type="button"
                                disabled={page == FormTitle.length - 1}
                                onClick={handleNext}>
                                Sau
                            </button>}
                        {page == FormTitle.length - 1 &&
                        <Link to='/login'>
                            <button className="button is-link" type="submit">Hoàn thành</button>
                            </Link>
                        }
                    </div>
                </div>
            </form >
        // </div>

    )
}

export default TeacherCompleteInfoForm 