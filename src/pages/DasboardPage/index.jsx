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

function DashboardPage() {
  const user = useSelector((state) => state.login.login?.currentUser)
  const dispatch = useDispatch()
  const accessToken = user?.accessToken
  const axiosJWT = createAxiosJWT(dispatch, user, getAccountSuccess)
  useEffect(() => {
    getAllAccounts(accessToken, dispatch, axiosJWT)
    getAllCourses(dispatch)
    getAllDemoCourses(dispatch)
  }, [])
  const accounts = useSelector((state) => state.getAccount?.accounts?.allAccounts)
  const courses = useSelector((state) => state.getAllCourses?.courses?.allCourses)
  const demoCourses = useSelector((state) => state.getAllDemoCourse?.demoCourses?.allCourses)
  let numnber_of_student = 0
  let numnber_of_teacher = 0
  let student = null
  let teacher = null
  if (accounts) {
    numnber_of_student = accounts.filter((item) => item.role_name === "student").length
    numnber_of_teacher = accounts.filter((item) => item.role_name === "teacher").length
    student = accounts.filter((item) => item.role_name === "student").slice(0, 5)
    teacher = accounts.filter((item) => item.role_name === "teacher").slice(0, 4)
    console.log(teacher)
  }
  return (
    <div className='dashboard-page_container container-fluid'>
      {/* <AdminManagementLayout/> */}
      {accounts && courses && demoCourses &&

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
                  {student && student.map((item) => (
                    <tr className='mb-2'>
                      <th>{student.indexOf(item) + 1}</th>
                      <td>{item.full_name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone_number}</td>
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
                  {teacher && teacher.map((item) => (
                    <tr className='mb-2'>
                      <th>{teacher.indexOf(item) + 1}</th>
                      <td>{item.full_name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone_number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        </div>
      </section>
      <section className="dashboard_section-3 mb-3">

      </section>
      <section className="dashboard_section-4 mb-3"></section>
      <section className="dashboard_section-5 mb-3"></section>
    </div>
  )
}

export default DashboardPage