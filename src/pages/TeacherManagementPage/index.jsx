import React, { useEffect } from 'react'
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
function TeacherManagementPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    getAllTeachers(dispatch)
  }, [])
  const teacher = useSelector((state) => state.getAllTeachers?.teachers?.infoTeacher)
  // console.log(teacher[0].id_degree.degree_status)
  const handleShowModal=()=>{
    alert("hi")
  }
  return (
    <div className='teacher-management-page_container container is-centered'>
      <div className="teacher-management-overview_div "
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "1rem",
          marginTop: "2rem",
          textAlign: "left"
        }}
      >
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
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: "4rem"
        }}>
          <div className="filter-teacher">
            <FilterCategory/> 
            
          </div>
          <button className="icon-teacher " type='button'  onClick={handleShowModal}
          style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:"50%",
            marginTop:".5rem",
            cursor:"pointer",
            border:"none",
            backgroundColor:" #C2E7FF",
            width:"3rem",
            height:"3rem"
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
      {teacher &&
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
                <th>Ảnh</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Xác minh học vấn </th>
                <th>Xác minh chứng chỉ</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {teacher && teacher.map((item) => (
                <tr className='mb-2'>


                  <>
                    <th>{teacher.indexOf(item) + 1}</th>
                    <td> <img src={item.personal_image} style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                    }} /></td>
                    <td>{item.account_id.full_name}</td>
                    <td>{item.account_id.email}</td>
                    <td>{item.id_academic.academic_status ?
                      <VerifyStatusButton
                        name="Đã xác minh"
                        color="white"
                        backgroundColor="#00d1b2" />
                      :
                      <VerifyStatusButton
                        name="Đang xác minh"
                        color="black"
                        backgroundColor="#ffe08a" />

                    }</td>
                    <td>{item.id_degree.degree_status ?
                      <VerifyStatusButton
                        name="Đã xác minh"
                        color="white"
                        backgroundColor="#00d1b2" />
                      :
                      <VerifyStatusButton
                        name="Đang xác minh"
                        color="black"
                        backgroundColor="#ffe08a" />
                    }</td>
                     <td  >
                      <AiOutlineEdit 
                      style={{
                        color:'#29A3F0',
                        cursor:'pointer',
                        width:"1.5rem",
                        height:"1.5rem",
                        marginRight:".75rem",
                        marginTop:".75rem"}} /> 
                    </td>
                    <td>
                    < AiOutlineDelete onClick={handleShowModal}
                      style={{
                        color:'#ff357e',
                        cursor:'pointer',
                        width:"1.5rem",
                        height:"1.5rem",
                        marginTop:".75rem",
                        marginRight:".75rem"}} /> 
                    
                    </td>
                   
                  </>


                </tr>
              ))}


            </tbody>
          </table>

        </div>
      }

    </div>
  )
}

export default TeacherManagementPage 
 {/* <td>
                      <Item icon={<AiOutlineEdit />} color={'#29A3F0'} />
                    </td>
                    <td>
                      <Item icon={<AiOutlineDelete />} color={'#ff357e'} />
                    </td> */}