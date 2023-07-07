import React, { useContext, useEffect, useState } from 'react'
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
import { getAllStudentsSuccess } from '../../redux/slices/Student/getAllStudentSlice'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import updateStudent from '../../redux/actions/Student/updateStudent'
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
  const searchValue = useContext(contextProvider)
  const user = useSelector((state) => state.login.login?.currentUser)
  const dispatch = useDispatch()
  const accessToken = user?.accessToken
  const axiosJWT = createAxiosJWT(dispatch, user, deleteStudentSuccess)
  const axiosJWTUpdate = createAxiosJWT(dispatch, user, getAllStudentsSuccess)
  const account_id = user?._id
  useEffect(() => {
    getAllStudents(dispatch)

  }, [])
  const student = useSelector((state) => state.getAllStudents?.students?.allStudents)
  // console.log("student trang management ",student)
  const handleSearch = (e) => {
    return searchValue == 0 ? e :
      (
        toLowerCaseNonAccentVietnamese(e.account_id.full_name)
          .includes(toLowerCaseNonAccentVietnamese(searchValue)) ?
          e :
          (toLowerCaseNonAccentVietnamese(e.account_id.email).includes(toLowerCaseNonAccentVietnamese(searchValue)) ?
            e :
            (
              moment(e.createdAt).format('DD/MM/YYYY').toString().includes(searchValue) ? e : (
                toLowerCaseNonAccentVietnamese(e.account_id.phone_number)
                  .includes(toLowerCaseNonAccentVietnamese(searchValue)) ?
                  e : (
                    (e.account_id.phone_number).includes(searchValue) ?
                      e : null
                  )
              )
            )
          )
      )
  }

  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState("none")
  const [data, setData] = useState(null)
  const [update, setUpdate] = useState(false)
  const handleDetail = (item) => {
    setData(item)
    setVisible(true)
    setShow("block")
  }

  const formik = useFormik({
    initialValues: {
      parent_name: '',
      parent_phone_number: ''
    },
    validationSchema: Yup.object({
      parent_name: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự.")
        .max(50, "Tối đa 50 kí tự."),
      parent_phone_number: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(10, "Tối thiểu 10 kí tự.")
        .max(20, "Tối đa 10 kí tự.")
        .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Sai định dạng !"),
    })
    ,
    onSubmit: (values) => {
      values = { ...values, account_id: data.account_id._id }
      console.log("h la submit form ", values)
      if (formik.values.parent_name !== "" && formik.values.parent_phone_number !== "") {
        // id, account_id, values, dispatch, axiosJWT, accessToken
        updateStudent(data._id, account_id, values, dispatch, axiosJWTUpdate, accessToken)
        handleReset()
      }
      else return null
    }
  })

  const handleReset = () => {
    setUpdate(false)
    setData(null)
    setVisible(false)
    setShow("none")
    formik.resetForm()
  }
  if (!student) return null
  else {

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
            {/* <button className="icon-teacher " type='button' onClick={handleShowModal}
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
          </button> */}
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
                <th>SDT</th>
                <th>Địa chỉ</th>
                <th>Họ tên phụ huynh</th>
                <th>SDT phụ huynh</th>
                <th></th>
                <th></th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              {student && student
                .filter((item) => handleSearch(item))
                .map((item) => (
                  <tr className='mb-2' onClick={() => { handleDetail(item) }}>
                    <th>
                      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {student.indexOf(item) + 1}
                      </div>
                    </th>

                    <td>{item.account_id && item.account_id.full_name}</td>
                    <td>
                      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {item.account_id && item.account_id.gender}
                      </div>
                    </td>
                    <td>
                      {item.account_id && item.account_id.email}
                    </td>
                    <td>{item.account_id && item.account_id.phone_number}</td>
                    <td>{item.account_id && item.account_id.address}</td>
                    <td>{item.parent_name}</td>
                    <td>{item.parent_phone_number}</td>
                    <td>
                      {item.account_id.is_deleted ?
                        <button
                          className='button is-danger is-small'
                          type='button'
                          style={{ marginTop: ".5rem" }}
                        >Bị khóa</button> :
                        <button
                          className='button is-primary is-small'
                          type='button'
                          style={{ marginTop: ".5rem" }}
                        >Hoạt động</button>
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="modal "
          onClick={formik.handleSubmit}
          style={{
            visibility: `${visible}`,
            display: `${show}`
          }}>
          <div className="modal-background"></div>

          <div className="modal-content is-centered "
           style={{ marginTop: "5rem",
            height: "70vh",
            width: "70rem",
             }}>
            <header className="modal-card-head">
              <p className="modal-card-title">{update == false ? "Chi tiết" : "Chỉnh sửa"} thông tin học viên </p>
              <button className="modal-close is-large" aria-label="close" onClick={() => setShow("none")}></button>

            </header>
            {/* <strong className='is-size-5'>Khóa học bạn muốn báo cáo: </strong> */}
            <div className="warning_content columns is-multiline"
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "left",
                padding: "1rem"
              }}
            >
               <div className="column is-6 ">
                <label className="label">Họ và tên</label>
                <input
                  className="input"
                  type="text"
                  name="Họ và tên"
                  id="Họ và tên"
                  disabled={ true }
                  value={data &&  data.account_id.full_name}
                />
              </div>
              <div className="column is-6 ">
                <label className="label">Giới tính</label>
                <input
                  className="input"
                  type="text"
                  name="Giới tính"
                  id="Giới tính"
                  disabled={ true }
                  value={data &&  data.account_id.gender}
                />
              </div>
              <div className="column is-6 ">
                <label className="label">Ngày sinh</label>
                <input
                  className="input"
                  type="text"
                  name="Họ và tên"
                  id="Họ và tên"
                  disabled={ true }
                  value={data &&  moment(data.account_id.date_of_birth).format("DD/MM/YYYY")}
                />
              </div>
              <div className="column is-6 ">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="text"
                  name="Email"
                  id="Email"
                  disabled={ true }
                  value={data &&  data.account_id.email}
                />
              </div>
              <div className="column is-6 ">
                <label className="label">Số điện thoại</label>
                <input
                  className="input"
                  type="text"
                  name="Số điện thoại"
                  id="Số điện thoại"
                  disabled={ true }
                  value={data && data.account_id.phone_number}
                />
              </div>
              <div className="column is-6 ">
                <label className="label">Địa chỉ</label>
                <input
                  className="input"
                  type="text"
                  name="Địa chỉ"
                  id="Địa chỉ"
                  disabled={ true }
                  value={data && data.account_id.address}
                />
              </div>
              <div className="column is-6">
                <label className="label">Tên phụ huynh</label>
                <input
                  className="input"
                  type="text"
                  placeholder={`${data && data.parent_name}`}
                  name="parent_name"
                  id="parent_name"
                  disabled={update == false ? true : false}
                  value={update == false ? (data ? data.parent_name : "") : formik.values.parent_name}
                  onChange={formik.handleChange}
                />
                {update && formik.errors.parent_name && <p className="help is-danger">{formik.errors.parent_name}</p>}
              </div>
              <div className="column is-6">
                <label className="label">Số điện thoại phụ huynh</label>
                <input
                  className="input"
                  type="text"
                  placeholder={`${data && data.parent_phone_number}`}
                  name="parent_phone_number"
                  id="parent_phone_number"
                  disabled={update == false ? true : false}
                  value={update == false ? (data ? data.parent_phone_number : "") : formik.values.parent_phone_number}
                  onChange={formik.handleChange}
                />
                {update && formik.errors.parent_phone_number && <p className="help is-danger">{formik.errors.parent_phone_number}</p>}
              </div>
              {/* <div className="column">
                <label className="label">Tên giáo viên</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Tên giáo viên"
                  name="Tên giáo viên"
                  id="Tên giáo viên"
                // value={data && (flag==1? data.id_demo_course.id_course.id_teacher.account_id.full_name 
                //     : data.id_course.id_teacher.account_id.full_name)}
                // readOnly={true}
                />
              </div> */}
            </div>
            {/* <strong className='is-size-5'>Nội dung bạn muốn báo cáo là? </strong> */}
            {/* <div className="warning_content"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                textAlign: "left",
                padding: "1rem"
              }}
            >

              <div className="field">
                <label className="label">Nội dung khác</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Nội dung khác"
                  name="other_content"
                  id="other_content"
                // value={inputValue}
                // onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            </div> */}
            <div >
              {
                update == false ?
                  <button className="button is-info mr-6" type="button" onClick={() => setUpdate(true)}>Chỉnh sửa </button> :

                  <button className="button is-warning mr-6" type="submit" >Hoàn thành </button>

              }
              <button className="button is-danger"
                type='button'
                onClick={() => {
                  handleReset()

                }}>Hủy  </button>
            </div >
          </div>
        </div>

      </div>
    )
  }
}

export default StudentManagementPage
{/* <td>
                    < AiOutlineDelete 
                    onClick={()=>handleShowModal(item._id)}
                      style={{
                        color:'#ff357e',
                        cursor:'pointer',
                        width:"1.5rem",
                        height:"1.5rem",
                        marginTop:".75rem",
                        marginRight:".75rem"}} /> 
                    
                    </td> */}

{/* <td>
                      {item.account_id.is_deleted ?
                        <button
                          className='button is-danger is-small'
                          type='button'
                          style={{ marginTop: ".5rem" }}
                        >Bị khóa</button> :
                        <button
                          className='button is-primary is-small'
                          type='button'
                          style={{ marginTop: ".5rem" }}

                        >Hoạt động</button>
                      }
                    </td> */}
{/* <td  >
                      <AiOutlineEdit 
                      style={{
                        color:'#008947',
                        cursor:'pointer',
                        width:"1.5rem",
                        height:"1.5rem",
                        marginRight:".75rem",
                        marginTop:".75rem"}} /> 
                    </td> */}