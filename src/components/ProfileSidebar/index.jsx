import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/ProfileSidebar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import '../../assets/styles/ProfilePage.css'
import Item from '../Item'
import { motion } from 'framer-motion'
import { AiOutlineUser, AiOutlineSetting, AiOutlineBook, AiOutlineEdit, AiOutlineDatabase } from 'react-icons/ai'
import { useSelector } from 'react-redux'



const ProfileSideBar = () => {
  const currentUser = useSelector((state) => state.login.login?.currentUser)
  return (

    <div className="sidebar">
      <div className='profile'>
        <img id='profile_img'
          src={require('../../assets/images/1.jpg')}
          alt="profile_img" />
      </div>

      <div className="groups">
        <div className="group">
          <Item icon={<AiOutlineUser />} name={"Hồ sơ cá nhân"} navigate={'/profile'} />
          {currentUser.role_name &&
            currentUser.role_name == 'admin' ?
            <Item icon={<AiOutlineDatabase />} name={"Quản lí"} navigate={'/admin'} /> :
            (currentUser.role_name == 'student' ?
              <>
                <Item icon={<AiOutlineBook />} name={"Lớp học của tôi"} />
                <Item icon={< AiOutlineEdit />} name={"Đánh giá giáo viên"} navigate={'/profile/judgeTeacher'} />
              </> : ""

            )
          }
          <Item icon={<AiOutlineSetting />} name={"Cài đặt"} />
        </div>
      </div>

    </div>
  )
}

export default ProfileSideBar


