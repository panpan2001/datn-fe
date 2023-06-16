import React, { useEffect } from 'react'
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
function AccountManagementPage() {
  const user = useSelector((state) => state.login.login?.currentUser)
  const dispatch = useDispatch()
  const accessToken = user?.accessToken
  const axiosJWT = createAxiosJWT(dispatch, user, getAccountSuccess)
  useEffect(() => {
    getAllAccounts(accessToken, dispatch, axiosJWT)
   
  }, [])
  const accounts = useSelector((state) => state.getAccount?.accounts?.allAccounts)
  const handleShowModal=()=>{
    alert("hi")
  }
  const checkColor=(role)=>{
    if(role=="admin"){
      return " #ff9aa7"
    }
    else if(role=="teacher")return  "#C2E7FF"
    else return "#B2FFDA"
      }
  return (
    <div className='account-management-page container'>
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
{accounts && 
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
      //  style={{backgroundColor:"white",
      //   borderTopRightRadius:"10px",
      //   borderTopLeftRadius:"10px"
      //   }}
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
           <th></th>
         </tr>
       </thead>
       <tbody>
         {accounts && accounts.map((item) => (
           <tr className='mb-2' style={{background:`${checkColor(item.role_name)}`}}>
             <th>{accounts.indexOf(item) + 1}</th>
             <td>{item.full_name}</td>
             <td>{item.gender}</td>
             <td>{moment(item.date_of_birth).format('DD/MM/YYYY')}</td>
             <td>{item.email}</td>
             <td>{item.phone_number}</td>
             <td>{item.role_name}</td>
             <td>{moment(item.createAt).format('DD/MM/YYYY')}</td>
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
                    < AiOutlineDelete onClick={handleShowModal}
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
 }
</div>}

    </div>
  )
}

export default AccountManagementPage