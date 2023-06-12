import React from 'react'
import Table from '../../components/Table'
import '../../assets/styles/TeacherManagementPage.css'
function TeacherManagementPage () {
  return (
    <div className='teacher-management-page_container container is-centered'>
      TeacherManagementPage
      <div className='teacher-management_table is-centered'>
      <Table  thead={["a","b"]} data={["aa","bb"]}/>

      </div>
       </div>
  )
}

export default TeacherManagementPage 