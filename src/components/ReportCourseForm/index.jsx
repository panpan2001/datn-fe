import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import createAxiosJWT from '../../utils/createInstance'

function ReportCourseForm({id, visible}) {
    const { idReportCourse } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.login.login?.currentUser)
//   const axiosJWT = createAxiosJWT(dispatch, user, updateStudentRatingSuccess)
  const accessToken = user?.accessToken
  const account_id = user?._id
  return (
    <div className='report-course-form_container container' style={{visibility:`${visible}`}}>
         <nav className="breadcrumb ml-4" aria-label="breadcrumbs" style={{ marginBottom: "0" }}>
        <ul>

          <li><a href={`/profile/${account_id}/judgeTeacher`}>Danh sách giáo viên </a></li>
          <li className="is-active"><a href="#" aria-current="page">Báo cáo khóa học</a></li>
        </ul>
      </nav>
      <strong className='report-course-form_title is-size-4'>Báo cáo khóa học{id}</strong>
      <div className='report-course-form_content'>
      <strong className=' is-size-5'>Báo cáo khóa học</strong>
      </div>
    </div>
  )
}

export default ReportCourseForm