import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import createAxiosJWT from '../../utils/createInstance'
import { getStudentByAccountIdStart, getStudentByAccountIdSuccess } from '../../redux/slices/Student/getStudentByAccountIdSlice'
import getStudentByAccountId from '../../redux/actions/Student/GetStudentByAccountId'
function PersonalInfo() {
  const user = useSelector((state) => state.login.login?.currentUser)
  const student= useSelector((state)=>state.getStudentById.students?.infoStudent)
  console.log("user:",user)
  console.log("student:",student)
  const dispatch=useDispatch()
  const accessToken= user?.accessToken
const account_id= user?._id
let axiosJWT= createAxiosJWT(dispatch,user,getStudentByAccountIdSuccess)
  
useEffect(() => {
  getStudentByAccountId(dispatch,student._id,account_id,axiosJWT,accessToken)
},[])

  return (
    <div>
{student._id}
    </div>
  )
}

export default PersonalInfo