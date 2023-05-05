import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getAllAccounts from '../../redux/actions/Account/GetAllAccounts'
import axios from 'axios'
import { AccountApi, RefreshTokenApi } from '../../utils/BaseUrl'
import DelAccounts from '../../redux/actions/Account/DelAccounts'
import jwtDecode from 'jwt-decode'
import { loginSuccess } from '../../redux/slices/Auth/loginSlice'
import createAxiosJWT from '../../utils/createInstance'
const FindingTeacherPage=()=> {
    const accounts= useSelector(state=>state.login.login?.currentUser)
    const accountList= useSelector(state=>state.getAccount.accounts?.allAccounts)
    // console.log("account:",accounts)
    // console.log("accountlist:",accountList)

    // const students=user.map(student=>student.role_name=='student')
    // console.table(students)
    const dispatch= useDispatch()
    const navigate = useNavigate()
    let axiosJWT= createAxiosJWT(dispatch,accounts,loginSuccess)

const handleDelete=(id)=>{
    console.log(id)
    DelAccounts(accounts?.accessToken,dispatch,id,axiosJWT)

}

    useEffect(() => {
      if(!accounts) navigate('/login')
      if(!accounts.accessToken) console.log("failed to load user access tokens ")
      if(accounts.accessToken) getAllAccounts(accounts?.accessToken,dispatch,axiosJWT)
    },[])
  return (
    <div className='finding-teacher-page_container container-fluid'>
        <section className="finding-teacher-page_section-1">
            <p>section-1: accountList:</p>
            {accountList?.map((account)=>
            <>
                        <p>{account.role_name}</p>
<button onClick={()=>{handleDelete(account._id)}}>delete</button>
            </>
            )}
        </section>
        {/* <section className="finding-teacher-page_section-2">
            <p>section-2</p>
        </section> */}
        {/* <section className="finding-teacher-page_section-3">
            <p>section-3</p>
        </section>
        <section className="finding-teacher-page_section-4">
            <p>section-4</p>
        </section> */}
    </div>
  )
}

export default FindingTeacherPage