import React, { useContext, useEffect, useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import FilterCategory from '../../components/FilterCategory'
import { useDispatch, useSelector } from 'react-redux'
import getAllAccounts from '../../redux/actions/Account/GetAllAccounts'
import createAxiosJWT from '../../utils/createInstance'
import { Link } from 'react-router-dom'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineLogin } from 'react-icons/ai'
import { getAccountSuccess } from '../../redux/slices/Account/GetAccountSlice'
import moment from 'moment/moment'
import Item from '../../components/Item'
import { delAccountSuccess } from '../../redux/slices/Account/DeleteAccountSlice'
import DelAccounts from '../../redux/actions/Account/DelAccounts'
import toLowerCaseNonAccentVietnamese from '../../contexts/toLowerCaseNonAccentVietnamese'
import { contextProvider } from '../../layouts/ParentLayouts/AdminManagementLayout'
import { getAllStudentsSuccess } from '../../redux/slices/Student/getAllStudentSlice'
import updateAccountStatus from '../../redux/actions/Account/UpdateAccountStatus'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import CryptoJS from 'crypto-js'

function AccountManagementPage() {
  const searchValue = useContext(contextProvider)
  // console.log("search in account management", searchValue)

  const user = useSelector((state) => state.login.login?.currentUser)
  const dispatch = useDispatch()
  const accessToken = user?.accessToken
  const axiosJWT = createAxiosJWT(dispatch, user, getAccountSuccess)
  const axiosJWTDel = createAxiosJWT(dispatch, user, delAccountSuccess)
  const id = user?._id
  useEffect(() => {
    getAllAccounts(accessToken, dispatch, axiosJWT)

  }, [])
  const accounts = useSelector((state) => state.getAccount?.accounts?.allAccounts)
  const handleDelete = (id) => {
    DelAccounts(accessToken, dispatch, id, axiosJWTDel)
  }
  const checkColor = (role) => {
    if (role == "admin") {
      return " #ff9aa7"
    }
    else if (role == "teacher") return "#C2E7FF"
    else return "#B2FFDA"
  }
  // console.log({accounts})
  const handleSearch = (e) => {
    return searchValue == 0 ? e :
      (toLowerCaseNonAccentVietnamese(e.full_name)
        .includes(toLowerCaseNonAccentVietnamese(searchValue)) ?
        e :
        (toLowerCaseNonAccentVietnamese(e.email)
          .includes(toLowerCaseNonAccentVietnamese(searchValue))) ?
          e :
          (moment(e.date_of_birth).format('DD/MM/YYYY').toString().includes(searchValue) ? e :
            moment(e.createdAt).format('DD/MM/YYYY').toString().includes(searchValue) ? e :
              (
                (e.phone_number).includes(searchValue) ?
                  e : null
              )
          )
      )

  }

  // const axiosJWTUpdateAccountStatus = createAxiosJWT(dispatch, user, getAccountSuccess)
  // const [show, setShow] = useState("none")
  const handleChangeAccountStatus = (item) => {
    if (item.role_name == 'admin') {
      toast.warning("Không thể khóa tài khoản của admin", {
        position: "top-right",
      })
    }
    else {
      // dispatch,id,axiosJWT,accessToken,success,account_id
      updateAccountStatus(dispatch, item._id, item.is_deleted, axiosJWT, accessToken, getAccountSuccess, user?._id)
    }

  }

  const [decrypt, setDecrypt] = useState("")

  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState("none")
  const [data, setData] = useState(null)
  const [update, setUpdate] = useState(false)
  const handleDetail = (item) => {
    setData(item)
    setVisible(true)
    setShow("block")
  }

  const handleReset = () => {
    setUpdate(false)
    setData(null)
    setVisible(false)
    setShow("none")
  }



  return (
    <div className='account-management-page container mb-6'>
      <strong className="is-size-3">Quản lí tài khoản</strong>

      <div className="account-management-overview_div "
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
        </div>
      </div>
      <div className="table_container">
        {accounts &&
          <div className='teacher-management_table is-centered mr-5 mt-3'>
            <table className="table"
              style={{
                //  backgroundColor: "#B2FFDA",
                padding: "1rem",
                borderRadius: "10px",
                textAlign: "left",
                boxShadow: "0px 0px 10px #ACEFF6"
              }}>
              <thead

              >
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Giới tính</th>
                  <th>Ngày sinh</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Vai trò </th>
                  <th>Ngày tạo</th>
                  <th></th>
                  {/* <th></th> */}
                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>
                {accounts.
                  filter(item => handleSearch(item))
                  .map((item) => (
                    <>
                      <tr
                        className='mb-2'
                        key={item._id}
                        style={{ background: `${checkColor(item.role_name)}` }}
                        // onClick={() => handleDetail(item)} 
                        >
                        <th>
                          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {accounts.indexOf(item) + 1}
                          </div>
                        </th>
                        <td>
                          {item.full_name}
                        </td>
                        <td>
                          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {item.gender}
                          </div>
                        </td>
                        <td>{moment(item.date_of_birth).format('DD/MM/YYYY')}</td>
                        <td>{item.email}</td>
                        <td>{item.phone_number}</td>
                        <td>
                          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {item.role_name}
                          </div>
                        </td>
                        <td>
                          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {moment(item.createdAt).format('DD/MM/YYYY')}
                          </div>
                        </td>
                        <td>
                          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {item.is_deleted ?
                              <button
                                className='button is-danger is-small '
                                type='button'
                                onClick={() => {
                                  handleChangeAccountStatus(item)
                                }}
                              >Bị khóa</button> :
                              <button
                                className='button is-primary is-small '
                                type='button'
                                onClick={() => {
                                  handleChangeAccountStatus(item)
                                }}
                              >Hoạt động</button>
                            }
                          </div>
                        </td>
                        {/* <td  >
                      <AiOutlineEdit
                        style={{
                          color: '#008947',
                          cursor: 'pointer',
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: ".75rem",
                          marginTop: ".75rem"
                        }} />
                    </td> */}
                        {/* <td>
                      < AiOutlineDelete 
                      // onClick={() => handleDelete(item._id)}
                        style={{
                          color: '#ff357e',
                          cursor: 'pointer',
                          width: "1.5rem",
                          height: "1.5rem",
                          marginTop: ".75rem",
                          marginRight: ".75rem"
                        }} />

                    </td>
                    */}
                      </tr>

                    </ >

                  ))}
              </tbody>
            </table>
          </div>
        }
      </div>
      <div className="modal "
        // onSubmit={formik.handleSubmit}
        style={{
          visibility: `${visible}`,
          display: `${show}`
        }}>
        <div className="modal-background"></div>

        <div className="modal-content is-centered "
          style={{
            marginTop: "5rem",
            height: "70vh",
            width: "70rem",
          }}>
          <header className="modal-card-head">
            <p className="modal-card-title">{update == false ? "Chi tiết" : "Chỉnh sửa"} thông tin tài khoản </p>
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
                name="full_name"
                id="full_name"
                readOnly={true}
                value={data && data.full_name}
              />
            </div>
            <div className="column is-6 ">
              <label className="label">Giới tính</label>
              <input
                className="input"
                type="text"
                name="gender"
                id="gender"
                readOnly={true}
                value={data && data.gender}
              />
            </div>
            <div className="column is-6 ">
              <label className="label">Ngày sinh</label>
              <input
                className="input"
                type="text"
                name="date_of_birth"
                id="date_of_birth"
                readOnly={true}
                value={data && moment(data.date_of_birth).format('DD/MM/YYYY')}
              />
            </div>
            <div className="column is-6 ">
              <label className="label">Email</label>
              <input
                className="input"
                type="text"
                name="email"
                id="email"
                readOnly={true}
                value={data && data.email}
              />
            </div>
            <div className="column is-6 ">
              <label className="label">Số điện thoại</label>
              <input
                className="input"
                type="text"
                name="phone_number"
                id="phone_number"
                readOnly={true}
                value={data && data.phone_number}
              />
            </div>
            <div className="column is-6 ">
              <label className="label">Địa chỉ</label>
              <input
                className="input"
                type="text"
                name="address"
                id="address"
                readOnly={true}
                value={data && data.address}
              />
            </div>
            <div className="column is-6 ">
                    <label className="label">Trạng thái tài khoản</label>
                    {data && data.is_deleted == true ?
                    <button className='button is-danger is-light'>Bị khóa</button>:
                    <button className='button is-primary is-light'>Hoạt động</button>}
                </div>
          </div>
          <div >
            {data && <Link to={`/admin/account/${data._id}`}>
              <button className="button is-info mr-6" type="button" >Chỉnh sửa</button>
            </Link>}

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

export default AccountManagementPage

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

{/* <strong className='is-size-5'>Nội dung bạn muốn báo cáo là? </strong> */ }
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
{/* <button className="icon-teacher " type='button'
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