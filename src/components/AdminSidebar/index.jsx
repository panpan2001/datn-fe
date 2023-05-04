import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar () {
  return (
    <div>
      <p>AdminSidebar </p>
      <br/>
      <Link href='/admin'>Dashboard</Link>
    <br/>
      <Link href='/admin/student'>Student</Link>
    <br/>
      
      <Link href='/admin/teacher'>Teacher</Link>
      <br/>
      <Link href='/admin/course'>Course </Link>
     

    </div>
  )
}

export default AdminSidebar 