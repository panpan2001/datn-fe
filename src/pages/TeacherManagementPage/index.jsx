import React, { useEffect } from 'react'
import Table from '../../components/Table'
import '../../assets/styles/TeacherManagementPage.css'
import getAllTeachers from '../../redux/actions/Teacher/GetAllTeachersInfo'
import { useDispatch, useSelector } from 'react-redux'
import VerifyStatusButton from '../../components/Button/VerifyStatusButton'
import Item from '../../components/Item'
import { AiFillEdit, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
function TeacherManagementPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    getAllTeachers(dispatch)
  }, [])
  const teacher = useSelector((state) => state.getAllTeachers?.teachers?.infoTeacher)
  console.log(teacher[0].id_degree.degree_status)
  return (
    <div className='teacher-management-page_container container is-centered'>
      {teacher &&
        <div className='teacher-management_table is-centered mr-5'>
          <table className="table"
          style={{
            // backgroundColor:"#B2FFDA",
          padding:"1rem",
          borderRadius:"10px",
          textAlign:"left",
          boxShadow:"0px 0px 10px #ACEFF6"}}>
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
                    }}/></td>
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
                        color="white"
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
                        color="white"
                        backgroundColor="#ffe08a" />
                    }</td>
                    <td>
                      <Item icon={<AiOutlineEdit/>} color={'#29A3F0'}  />
                    </td>
                    <td>
                    <Item icon={<AiOutlineDelete/>} color={'#ff357e'}  />
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