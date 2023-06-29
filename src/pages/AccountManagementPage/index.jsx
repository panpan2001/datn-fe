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



function AccountManagementPage() {
  const searchValue= useContext(contextProvider)
  console.log("search in account management",searchValue)

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
    return searchValue== 0 ? e : 
    (toLowerCaseNonAccentVietnamese(e.full_name)
    .includes(toLowerCaseNonAccentVietnamese(searchValue))?
    e :
    (toLowerCaseNonAccentVietnamese(e.email)
    .includes(toLowerCaseNonAccentVietnamese(searchValue)))?
    e :
    (moment(e.date_of_birth).format('DD/MM/YYYY').toString().includes(searchValue) ? e :
    moment(e.createdAt).format('DD/MM/YYYY').toString().includes(searchValue) ? e :
    (
        (e.phone_number).includes(searchValue)?
    e:null
      ) 
    ) 
    )
    
  }

  // const axiosJWTUpdateAccountStatus = createAxiosJWT(dispatch, user, getAccountSuccess)
// const [show, setShow] = useState("none")
  const handleChangeAccountStatus = (item) => {
    // dispatch,id,axiosJWT,accessToken,success,account_id
    updateAccountStatus(dispatch,item._id,item.is_deleted,axiosJWT,accessToken,getAccountSuccess,user?._id)
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
                { accounts.
                filter(item=>handleSearch(item))
                .map((item) => (
                  <>
                   <tr className='mb-2' key={item._id} style={{ background: `${checkColor(item.role_name)}` }}>
                    <th>{accounts.indexOf(item) + 1}</th>
                    <td>{item.full_name}</td>
                    <td>{item.gender}</td>
                    <td>{moment(item.date_of_birth).format('DD/MM/YYYY')}</td>
                    <td>{item.email}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.role_name}</td>
                    <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
                    <td>{item.is_deleted?
                  <button 
                  className='button is-danger is-small mt-2'
                   type='button'
                   onClick={()=>{
                    handleChangeAccountStatus(item)
                  }} 
                   >Bị khóa</button>  :
                   <button 
                  className='button is-primary is-small mt-2'
                   type='button'
                   onClick={()=>{
                    handleChangeAccountStatus(item)
                   }}
                    >Hoạt động</button>
                  }</td>
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
     
    </div>
  )
}

export default AccountManagementPage