import React from 'react'
import ProfileSideBar from '../../components/ProfileSidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useSelector } from 'react-redux'

function ProfilePage() {
  
  return (
    <div className='profile-page_container container-fluid'>
      <div className="columns">
        <aside className='profile-page_aside column is-2'>
          <ProfileSideBar />
        </aside>
      </div>
      <div className="column">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProfilePage