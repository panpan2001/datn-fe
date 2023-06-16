import React, { useEffect } from 'react'
import '../../assets/styles/DashboardPage.css'
import { BiSearch } from 'react-icons/bi'
import { CiUser } from 'react-icons/ci'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineLogin, AiOutlineUser, AiTwotoneDatabase } from 'react-icons/ai'
import { BsFillFileSpreadsheetFill, BsFillPersonLinesFill, BsFillPersonVcardFill, BsPersonCircle, BsReceipt } from 'react-icons/bs'
import Table from '../../components/Table'
import getAllAccounts from '../../redux/actions/Account/GetAllAccounts'
import { useDispatch, useSelector } from 'react-redux'
import createAxiosJWT from '../../utils/createInstance'
import { getAccountSuccess } from '../../redux/slices/Account/GetAccountSlice'
import getAllCourses from '../../redux/actions/Course/GetAllCourses'
import getAllDemoCourses from '../../redux/actions/DemoCourse/GetAllDemoCourses'
import Item from '../../components/Item'
import VerifyStatusButton from '../../components/Button/VerifyStatusButton'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'
import getAllTeachers from '../../redux/actions/Teacher/GetAllTeachersInfo'
import getAllStudents from '../../redux/actions/Student/GetAllStudent'

function DashboardPage() {
  const user = useSelector((state) => state.login.login?.currentUser)
  const dispatch = useDispatch()
  const accessToken = user?.accessToken
  const axiosJWT = createAxiosJWT(dispatch, user, getAccountSuccess)
  useEffect(() => {
    getAllAccounts(accessToken, dispatch, axiosJWT)
    getAllCourses(dispatch)
    getAllDemoCourses(dispatch)
    getAllTeachers(dispatch)
    getAllStudents(dispatch)
  }, [])
  const accounts = useSelector((state) => state.getAccount?.accounts?.allAccounts)
  const courses = useSelector((state) => state.getAllCourses?.courses?.allCourses)
  const demoCourses = useSelector((state) => state.getAllDemoCourse?.demoCourses?.allCourses)
  const teacher= useSelector((state) => state.getAllTeachers?. teachers?.infoTeacher)
  const student= useSelector((state) => state.getAllStudents?. students?.allStudents)
  let numnber_of_student = 0
  let numnber_of_teacher = 0
  let some_accounts=null
  
  const checkColor=(role)=>{
if(role=="admin"){
  return " #ff9aa7"
}
else if(role=="teacher")return  "#C2E7FF"
else return "#B2FFDA"
  }
  if (accounts && teacher) {
    some_accounts= accounts.slice(0,5)
    numnber_of_student = student.length
    numnber_of_teacher = teacher.length
    return (
      <div className='dashboard-page_container container-fluid'>
        {accounts && teacher && student&& courses && demoCourses &&
  
          <section className="dashboard_section-1 mb-3">
            <strong className='is-size-4'>Tổng quan</strong>
  
            <div className="columns is-multiline mt-4">
              <div className="column one-fifth ">
                <div className='dashboard-section-1_column1'>
                  <div className='dashboard-section-1_icon'>
                    <BsPersonCircle style={{ width: "1.5rem", height: "1.5rem" }} />
                    <strong className='is-size-5'>{accounts.length}</strong>
                  </div>
                  <p className='is-size-6'>Tài khoản sử dụng</p>
                </div>
              </div>
              <div className="column one-fifth ">
                <div className='dashboard-section-1_column2'>
                  <div className='dashboard-section-1_icon'>
                    <BsFillPersonVcardFill style={{ width: "1.5rem", height: "1.5rem" }} />
                    <strong className='is-size-5'>{numnber_of_student}</strong>
  
                  </div>
                  <p className='is-size-6'>Học viên</p>
  
                </div>
              </div>
              <div className="column one-fifth ">
                <div className='dashboard-section-1_column3'>
                  <div className='dashboard-section-1_icon'>
                    <BsFillPersonLinesFill style={{ width: "1.5rem", height: "1.5rem" }} />
                    <strong className='is-size-5'>{numnber_of_teacher}</strong>
  
                  </div>
                  <p className='is-size-6'>Giáo viên</p>
  
                </div></div>
              <div className="column one-fifth ">
                <div className='dashboard-section-1_column4'>
                  <div className='dashboard-section-1_icon'>
                    <BsFillFileSpreadsheetFill style={{ width: "1.5rem", height: "1.5rem" }} />
                    <strong className='is-size-5'>{courses.length}</strong>
  
                  </div>
                  <p className='is-size-6'>Khóa học chính thức</p>
  
                </div>
              </div>
              <div className="column one-fifth ">
                <div className='dashboard-section-1_column5'>
                  <div className='dashboard-section-1_icon'>
                    <BsReceipt style={{ width: "1.5rem", height: "1.5rem" }} />
                    <strong className='is-size-5'>{demoCourses.length}</strong>
  
                  </div>
                  <p className='is-size-6'>Khóa học thử</p>
  
                </div>
              </div>
            </div>
          </section>
        }
  
        <section className="dashboard_section-2 mb-3 mt-6">
        <div className="table_container ">
            <div className="table_header">
              <strong className='is-size-4 '>Tài khoản</strong>
              <Link to="/admin/account"
              style={{
                display: "flex",
                color: "#29A3F0",
                cursor: "pointer",
                gap: "0.5rem",
              }}><p>Xem thêm </p>
                <AiOutlineLogin style={{
                  width: "1.5rem", height: "1.5rem",
                  borderRadius: "50%",
                  fill: "#29A3F0",
                  boxShadow: "0 0 8px 0 var(--border-color)"
                }} /> </Link>
  
            </div>
              <div className='account-management_table is-centered mr-5 mt-3'>
                <table className="table"
                  style={{
                    backgroundColor: "#FFF",
                    padding: "1rem",
                    borderRadius: "10px",
                    textAlign: "left",
                    boxShadow: "0px 0px 10px #ACEFF6"
                  }}>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên </th>
                      <th>Giới tính</th>
                      <th>Ngày sinh</th>
                      <th>Email</th>
                      <th>SDT</th>
                      <th>Vai trò</th>
                      <th>Ngày tạo</th>
                    </tr>
                  </thead>
                  <tbody>
                    { some_accounts.map((item) => (
                    
                      <tr className='mb-2'
                      
                      style={{backgroundColor:`${checkColor(item.role_name)}`}}
                      >
                        <th>{some_accounts.indexOf(item) + 1}</th>
                        <td>{item.full_name}</td>
                        <td>{item.gender}</td>
                        <td>{moment(item.date_of_birth).format("DD/MM/YYYY")}</td>
                        <td>{item.email}</td>
                        <td>{item.phone_number}</td>
                        <td>{item.role_name}</td>
                        <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            
          </div>
        </section>
        <section className="dashboard_section-3 mb-3 mt-6">
        <div className="table_container">
            <div className="table_header">
              <strong className='is-size-4 '>Học viên</strong>
              <Link to="/admin/student"
              style={{
                display: "flex",
                color: "#29A3F0",
                cursor: "pointer",
                gap: "0.5rem",
              }}><p>Xem thêm </p>
                <AiOutlineLogin style={{
                  width: "1.5rem", height: "1.5rem",
                  borderRadius: "50%",
                  fill: "#29A3F0",
                  boxShadow: "0 0 8px 0 var(--border-color)"
                }} /> </Link>
  
            </div>
            {student &&
              <div className='teacher-management_table is-centered mr-5 mt-3'>
                <table className="table"
                  style={{
                    backgroundColor: "#B2FFDA",
                    padding: "1rem",
                    borderRadius: "10px",
                    textAlign: "left",
                    boxShadow: "0px 0px 10px #ACEFF6"
                  }}>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
  
                    </tr>
                  </thead>
                  <tbody>
                    { student.slice(0,5).map((item) => (
                      <tr className='mb-2'>
                        <th>{student.indexOf(item) + 1}</th>
                        <td>{item.account_id.full_name}</td>
                        <td>{item.account_id.email}</td>
                        <td>{item.account_id.phone_number}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          </div>
  
          <div className="table_container">
            <div className="table_header">
              <strong className='is-size-4 '>Giáo viên</strong>
              <Link to="/admin/teacher" 
              style={{
                display: "flex",
                color: "#29A3F0",
                cursor: "pointer",
                gap: "0.5rem",
              }}><p>Xem thêm </p>
                <AiOutlineLogin style={{
                  width: "1.5rem", height: "1.5rem",
                  borderRadius: "50%",
                  fill: "#29A3F0",
                  boxShadow: "0 0 8px 0 var(--border-color)"
                }} /> </Link>
            </div>
            {teacher &&
              <div className='teacher-management_table is-centered mr-5 mt-3'>
                <table className="table"
                  style={{
                    backgroundColor: " #C2E7FF",
                    padding: "1rem",
                    borderRadius: "10px",
                    textAlign: "left",
                    boxShadow: "0px 0px 10px #ACEFF6"
                  }}>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
  
                    </tr>
                  </thead>
                  <tbody>
                    {teacher && teacher.slice(0,5).map((item) => (
                      <tr className='mb-2'>
                        <th>{teacher.indexOf(item) + 1}</th>
                        <td>{item.account_id.full_name}</td>
                        <td>{item.account_id.email}</td>
                        <td>{item.account_id.phone_number}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          </div>
        </section>
        <section className="dashboard_section-4 mb-3 mt-6">
        <div className="table_container">
            <div className="table_header">
              <strong className='is-size-4 '>Khóa học chính thức</strong>
              <Link to="/admin/course"
              style={{
                display: "flex",
                color: "#29A3F0",
                cursor: "pointer",
                gap: "0.5rem",
              }}><p>Xem thêm </p>
                <AiOutlineLogin style={{
                  width: "1.5rem", height: "1.5rem",
                  borderRadius: "50%",
                  fill: "#29A3F0",
                  boxShadow: "0 0 8px 0 var(--border-color)"
                }} /> </Link>
  
            </div>
            {courses &&
              <div className='teacher-management_table is-centered mr-5 mt-3'>
                <table className="table"
                  style={{
                    backgroundColor: "#FFEBB2",
                    padding: "1rem",
                    borderRadius: "10px",
                    textAlign: "left",
                    boxShadow: "0px 0px 10px #ACEFF6"
                  }}>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên khóa học</th>
                      <th>Số lượng học viên</th>
                      <th>Lịch học</th>
                      <th>Thời lượng buổi học (ph)</th>
                      <th>Thời thời gian học (tháng)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses && courses.map((item) => (
                      <tr className='mb-2'>
                        <th>{courses.indexOf(item) + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.number_of_student}</td>
                        <td>{item.schedule}</td>
                        <td>{item.time_per_lesson}</td>
                        <td>{item.learning_period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          </div>
  
        
        </section>
        <section className="dashboard_section-5 mb-3 mt-6">
        <div className="table_container ">
            <div className="table_header">
              <strong className='is-size-4 '>Khóa học thử</strong>
              <Link to="/admin/course"
              style={{
                display: "flex",
                color: "#29A3F0",
                cursor: "pointer",
                gap: "0.5rem",
              }}><p>Xem thêm </p>
                <AiOutlineLogin style={{
                  width: "1.5rem", height: "1.5rem",
                  borderRadius: "50%",
                  fill: "#29A3F0",
                  boxShadow: "0 0 8px 0 var(--border-color)"
                }} /> </Link>
  
            </div>
            {demoCourses &&
              <div className='teacher-management_table is-centered mr-5 mt-3'>
                <table className="table"
                  style={{
                    backgroundColor: "#FF9F7E",
                    padding: "1rem",
                    borderRadius: "10px",
                    textAlign: "left",
                    boxShadow: "0px 0px 10px #ACEFF6"
                  }}>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên khóa học</th>
                      <th>Số lượng học viên</th>
                      <th>Lịch học</th>
                      <th>Thời lượng buổi học (ph)</th>
                      <th>Thời gian học (buổi)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoCourses && demoCourses.map((item) => (
                      <tr className='mb-2'>
                        <th>{demoCourses.indexOf(item) + 1}</th>
                        <td>{item.id_course.name}</td>
                        <td>{item.id_course.number_of_student}</td>
                        <td>{item.schedule}</td>
                        <td>{item.id_course.time_per_lesson}</td>
                        <td>{item.learning_period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          </div>
        </section>
      </div>
    )
  }
 
}

export default DashboardPage