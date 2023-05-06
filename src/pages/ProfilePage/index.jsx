import React from 'react'
import ProfileSideBar from '../../components/ProfileSidebar'
import { Outlet } from 'react-router-dom'
import '../../assets/styles/ProfilePage.css'

function ProfilePage() {
  return (

    <div className='profile-page_container container-fluid'>
      <div className="columns profile-page_container_columns ">
        <div className='column  profile-page_aside-links'>
          <ProfileSideBar />
        </div>
        <div className="column is-10 profile-page_content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

