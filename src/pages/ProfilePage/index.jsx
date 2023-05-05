import React from 'react'
import ProfileSideBar from '../../components/ProfileSidebar'
import { Outlet } from 'react-router-dom'

function ProfilePage() {
  return (
    <div className='profile-page_container container-fluid'>
    <div className="columns">
    <aside className='profile-page_aside column is-2'>
        <ProfileSideBar/>
    </aside>
    </div>
    <div className="column">
        <Outlet/>
    </div>
    </div>
  )
}

export default ProfilePage