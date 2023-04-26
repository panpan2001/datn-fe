import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DasboardPage'
import StudentManagementPage from '../pages/StudentManagementPage/StudentManagementPage'
import NotFound from '../pages/NotFound'
import CourseManagementPage from '../pages/CourseManagementPage'
import TeacherManagementPage from '../pages/TeacherManagementPage'

function AdminRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<DashboardPage />}/>
        <Route index element={<DashboardPage />} />
        <Route path='/admin/student' element={<StudentManagementPage />} />
        <Route path='/admin/teacher' element={<TeacherManagementPage/>} />
        <Route path='/admin/course' element={<CourseManagementPage/>} />
        <Route path="/admin/*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AdminRoutes