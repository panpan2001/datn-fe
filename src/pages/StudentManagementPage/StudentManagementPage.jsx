import React, { useEffect } from 'react'
import getAllAccount from '../../redux/actions/Account/GetAllUser'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function StudentManagementPage() {
  const user= useSelector(state=>state.account.accounts)
  console.log(user)
  // const students=user.map(student=>student.role_name=='student')
  // console.table(students)
  const dispatch= useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if(!user) navigate('/login')
    if(!user.accessToken) console.log("failed to load user access tokens ")
    if(user.accessToken) getAllAccount(user.accessToken,dispatch)
    
  },[])

  return (
    <div className='student-management-page container'>StudentManagementPage
{/* {user.map(user=><>
{user.full_name}
</>)} */}
    </div>
  )
}

export default StudentManagementPage