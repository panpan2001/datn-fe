import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import '../../assets/styles/TeacherManagementPage.css'
import getAllTeachers from '../../redux/actions/Teacher/GetAllTeachersInfo'
import { useDispatch, useSelector } from 'react-redux'
import VerifyStatusButton from '../../components/Button/VerifyStatusButton'
import Item from '../../components/Item'
import { AiFillEdit, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { CiCirclePlus } from 'react-icons/ci'
import { BsPersonCircle } from 'react-icons/bs'
import FilterCategory from '../../components/FilterCategory'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'
import createAxiosJWT from '../../utils/createInstance'
import { deleteTeacherSuccess } from '../../redux/slices/Teacher/DeleteTeacherSlice'
import deleteTeacher from '../../redux/actions/Teacher/DeleteTeacher'
import NotFound from '../NotFound'




function TeacherManagementPage() {
  
  useEffect(() => {
    getAllTeachers(dispatch)
  }, [])
  const teacher = useSelector((state) => state.getAllTeachers?.teachers?.infoTeacher)
  // console.log(teacher[0].id_degree.degree_status)

  const handleShowModal = () => {
    alert("hi")
  }
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const user = useSelector((state) => state.login.login?.currentUser)
  // console.log({user})
  const account_id = user?._id
  const access_token = user?.accessToken
  const axiosJWT = createAxiosJWT(dispatch, user, deleteTeacherSuccess)
  const handleDelete = (id) => {
    // account_id, teacher_id, dispatch, accessToken, axiosJWT
    // console.log({id},{account_id})
    deleteTeacher(account_id, id, dispatch, access_token, axiosJWT,navigate)
   
  }
  if(!teacher) return (<NotFound/>)
  else {
    console.log({teacher})
    return (
      <div className='teacher-management-page_container container is-centered'>
        <strong className="is-size-3">Quản lí giáo viên</strong>
  
        <div className="teacher-management-overview_div ">

          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "flex-end",
            marginRight: "4rem"
          }}>
  
            <div className="filter-teacher">
              {/* <FilterCategory /> */}
  
            </div>
            <button className="icon-teacher " type='button' onClick={handleShowModal}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                marginTop: ".5rem",
                cursor: "pointer",
                border: "none",
                backgroundColor: " #C2E7FF",
                width: "3rem",
                height: "3rem"
              }}>
              <CiCirclePlus style={{
                width: "2rem",
                height: "2rem",
                fill: "#29A3F0",
                // borderRadius: "50%",
              }} />
            </button>
          </div>
  
        </div>
      
          <div className='teacher-management_table is-centered mr-5'>
            <table className="table"
              style={{
                // backgroundColor:"#B2FFDA",
                padding: "1rem",
                borderRadius: "10px",
                textAlign: "left",
                boxShadow: "0px 0px 10px #ACEFF6"
              }}>
              <thead>
                <tr>
                  <th>STT</th>
                  <th className='img_th'>Ảnh</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Xác minh học vấn </th>
                  <th>Xác minh chứng chỉ</th>
                  <th>Tạo lúc</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
  
              <tbody>
              {teacher && teacher.map((item) => (
      <>
        <tr className='mb-2'>
          <>
            <th>
              <p className='teacher-table-content-index_p'>
                {teacher.indexOf(item) + 1}</p>
            </th>
            <td>
              <img src={item.personal_image} style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
              }} /></td>
            <td>
              <p className='teacher-table-content_p'>
                {item.account_id.full_name}
              </p></td>
            <td>
              <p className='teacher-table-content_p'>{item.account_id.email}
              </p>
            </td>
            <td>
              <p className='teacher-table-content_p'>
                {item.id_academic.academic_status ?
                  <VerifyStatusButton
                    name="Đã xác minh"
                    color="white"
                    backgroundColor="#00d1b2" />
                  :
                  <VerifyStatusButton
                    name="Đang xác minh"
                    color="black"
                    backgroundColor="#ffe08a" />

                }
              </p>
            </td>
            <td>
              <p className='teacher-table-content_p'>
                {item.id_degree.degree_status ?
                  <VerifyStatusButton
                    name="Đã xác minh"
                    color="white"
                    backgroundColor="#00d1b2" />
                  :
                  <VerifyStatusButton
                    name="Đang xác minh"
                    color="black"
                    backgroundColor="#ffe08a" />
                }
              </p></td>
            <td>
              <p className='teacher-table-content_p'>
                {moment(item.createdAt).format("DD/MM/YYYY")}
              </p>
            </td>
            <td  >
              <Link to={`/admin/teacher/${item._id}`}>
                <AiOutlineEdit
                  style={{
                    color: '#29A3F0',
                    cursor: 'pointer',
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: ".75rem",
                    marginTop: ".75rem"
                  }} />
              </Link>
            </td>
            <button className="button  " 
              onClick={()=>handleDelete(item._id)}
              style={{ cursor: 'pointer' ,
              border:"none",
              display:"block",
              marginTop:".75rem ",
              marginRight: ".75rem"}}>
              < AiOutlineDelete 
                style={{
                  color: '#ff357e',
                  cursor: 'pointer',
                  width: "1.5rem",
                  height: "1.5rem",
                  // marginTop: ".75rem",
                  // marginRight: ".75rem"
                }} />
              </button>
          </>
        </tr>
      </>
    ))}
              </tbody>
            </table>
          </div>
      </div>
    )
  }
  
}

export default TeacherManagementPage
{/* <td>
                      <Item icon={<AiOutlineEdit />} color={'#29A3F0'} />
                    </td>
                    <td>
                      <Item icon={<AiOutlineDelete />} color={'#ff357e'} />
                    </td> */}

                              {/* <strong className="is-size-5">Tong quan</strong>
          <div className="columns sum-teacher_div"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem"
            }}>
            <div className="column is-3" style={{
              backgroundColor: "#B2FFDA",
              borderRadius: "10px"
            }}>
               <div className='dashboard-section-1_column1'>
            <div className='dashboard-section-1_icon'>
              <BsPersonCircle style={{ width: "1.5rem", height: "1.5rem" }} />
              <strong className='is-size-5 ml-3'>a</strong>
            </div>
            <p className='is-size-6'>Tài khoản sử dụng</p>
          </div></div>
            <div className="column is-3">aa</div>
            <div className="column is-3">aaa</div>
          </div> */}