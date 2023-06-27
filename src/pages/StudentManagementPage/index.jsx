import React, { useContext, useEffect } from 'react'
import getAllAccounts from '../../redux/actions/Account/GetAllAccounts'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterCategory from '../../components/FilterCategory'
import { CiCirclePlus } from 'react-icons/ci'
import getAllStudents from '../../redux/actions/Student/GetAllStudent'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import Item from '../../components/Item'
import deleteStudent from '../../redux/actions/Student/DeleteStudent'
import { deleteStudentSuccess } from '../../redux/slices/Student/deleteStudentSlice'
import createAxiosJWT from '../../utils/createInstance'
import { contextProvider } from '../../layouts/ParentLayouts/AdminManagementLayout'
import toLowerCaseNonAccentVietnamese from '../../contexts/toLowerCaseNonAccentVietnamese'
import moment from 'moment'

const StudentManagementPage = () => {
  // const user= useSelector(state=>state.account.accounts)
  // console.log(user)
  // const students=user.map(student=>student.role_name=='student')
  // console.table(students)
  // const dispatch= useDispatch()
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if(!user) navigate('/login')
  //   if(!user.accessToken) console.log("failed to load user access tokens ")
  //   if(user.accessToken) getAllAccounts(user.accessToken,dispatch)

  // },[])
  const searchValue= useContext(contextProvider)

  const user = useSelector((state) => state.login.login?.currentUser)
  const dispatch = useDispatch()
  const accessToken = user?.accessToken
  const axiosJWT = createAxiosJWT(dispatch, user, deleteStudentSuccess)
  const account_id= user?._id
  useEffect(() => {
    getAllStudents(dispatch)

  }, [])
  const student = useSelector((state) => state.getAllStudents?.students?.allStudents)
  // console.log("student trang management ",student)
  const handleShowModal = (id) => {
    deleteStudent(account_id,id,accessToken,dispatch,axiosJWT)
  }

  const handleSearch = (e) => {
    return searchValue== 0 ? e :
    (
      toLowerCaseNonAccentVietnamese(e.account_id.full_name)
    .includes(toLowerCaseNonAccentVietnamese(searchValue))?
    e :
    (toLowerCaseNonAccentVietnamese(e.account_id.email).includes(toLowerCaseNonAccentVietnamese(searchValue))?
    e :
    (
      moment(e.createdAt).format('DD/MM/YYYY').toString().includes(searchValue) ? e :(
        toLowerCaseNonAccentVietnamese(e.account_id.phone_number)
    .includes(toLowerCaseNonAccentVietnamese(searchValue))?
    e:(
      (e.account_id.phone_number).includes(searchValue)?
    e:null
    )
      ) 
    )
    )
    )
  }

  if(!student) return null
  else {
// console.table(student)
  
  return (
    <div className='student-management-page container mb-6'>
              <strong className="is-size-3">Quản lí học viên</strong>

      <div className="student-management-overview_div "
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "1rem",
          marginTop: "1rem",
          textAlign: "left"
        }}
      >
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
    
        <div className='teacher-management_table is-centered mr-5 mt-3'>
          <table className="table"
            style={{
              backgroundColor: "#85CEFE",
              padding: "1rem",
              borderRadius: "10px",
              textAlign: "left",
              boxShadow: "0px 0px 10px #ACEFF6"
            }}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Giới tính</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Họ tên phụ huynh</th>
                <th>SDT phụ huynh</th>
                <th></th>
                <th></th>

              </tr>
            </thead>
            <tbody>
            {student && student
            .filter((item)=>handleSearch(item))
            .map((item) => (
                <tr className='mb-2'>
                  <th>{student.indexOf(item) + 1}</th>
                  <td>{item.account_id && item.account_id.full_name}</td>
                   <td>{item.account_id && item.account_id.gender}</td>
                  <td>{item.account_id && item.account_id.email}</td>
                  <td>{item.account_id && item.account_id.phone_number}</td>
                   <td>{item.account_id && item.account_id.address}</td>
                  <td>{item.parent_name}</td>
                  <td>{item.parent_phone_number}</td>
                  <td  >
                      <AiOutlineEdit 
                      style={{
                        color:'#008947',
                        cursor:'pointer',
                        width:"1.5rem",
                        height:"1.5rem",
                        marginRight:".75rem",
                        marginTop:".75rem"}} /> 
                    </td>
                    <td>
                    < AiOutlineDelete onClick={()=>handleShowModal(item._id)}
                      style={{
                        color:'#ff357e',
                        cursor:'pointer',
                        width:"1.5rem",
                        height:"1.5rem",
                        marginTop:".75rem",
                        marginRight:".75rem"}} /> 
                    
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  )
}
}

export default StudentManagementPage