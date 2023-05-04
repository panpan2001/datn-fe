import React from 'react'
import { Link } from 'react-router-dom'
const  ProfileSideBar=()=> {
  return (
    <>
    ProfileSideBar
    <Link to='/profile/'>personalInfo </Link>
    <Link to='/profile/registedClass'>registedClass </Link>
    <Link to='/profile/judgeTeacher'>judgeTeacher </Link>
    <Link to='/profile/setting'>setting </Link>
    </>
  )
}

export default ProfileSideBar