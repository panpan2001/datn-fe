import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar () {
  return (
    <div>
      <p>AdminSidebar </p>
      <br/>
      <a href='/admin'>Dashboard</a>
    <br/>
      <a href='/admin/student'>Student</a>
    <br/>
      
      <a href='/admin/teacher'>Teacher</a>
      <br/>
      <a href='/admin/course'>Course </a>
     

    </div>
  )
}

export default AdminSidebar 