import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import StudentProfileForm from '../StudentProfileForm'
function PersonalInfo() {
  const user = useSelector((state) => state.login.login?.currentUser)
 
    
  
  
  return (
    <div>
     {user.role_name=='student'?
     <StudentProfileForm user={user}/>:<></> } 
     {user.role_name=='teacher'?
     <p>{user.role_name}</p>:<></> } 
    </div>
  )
}

export default PersonalInfo