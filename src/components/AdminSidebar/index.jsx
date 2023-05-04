import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminSidebar () {
  const navigate=useNavigate()
  return (
    <div>
      <p>AdminSidebar </p>
      <br/>
      <Link to='/admin'>Dashboard</Link>
    <br/>
      <Link to='/admin/student'>Student</Link>
    <br/>
      
      <Link to='/admin/teacher'>Teacher</Link>
      <br/>
      <Link to='/admin/course'>Course </Link>
      <br/>
      {/* <Link to={navigate(-1)}>Back </Link> */}
     

    </div>
  )
}

export default AdminSidebar 