import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/ProfileSidebar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import '../../assets/styles/ProfilePage.css'
import Item from '../Item'
import { motion } from 'framer-motion'



const ProfileSideBar = () => {

  return (

    <div className="sidebar">
      <div className='profile'>
        <img id='profile_img'
          src={require('../../assets/images/1.jpg')}
          alt="profile_img" />
      </div>

      <div className="groups">
        <div className="group">
          <Item icon={<GiHamburgerMenu />} name={"Dashboard"} />
          <Item icon={<GiHamburgerMenu />} name={"Performance"} />
        </div>
      </div>
      <div className="group">
        <Item icon={<GiHamburgerMenu />} name={"Sales"} />
        <Item icon={<GiHamburgerMenu />} name={"Checklist"} />{" "}
        <Item icon={<GiHamburgerMenu />} name={"Customers"} />
      </div>
      <div className="group">
        <Item icon={<GiHamburgerMenu />} name={"Segments"} />
        <Item icon={<GiHamburgerMenu />} name={"Themems"} />
      </div>
    </div>
  )
}

export default ProfileSideBar


  // const sideContainerVariants = {
  //   true: {
  //     width: '15rem',
  //   },
  //   false: {
  //     transition: {
  //       delay: 0.6
  //     }
  //   }
  // }

  // const sidebarVariants = {
  //   true: {},
  //   false: {
  //     with: '3rem',
  //     transition: {
  //       delay: 0.4
  //     }
  //   }
  // }

  // const profileVariants = {
  //   true: {
  //     alignSelf: 'center',
  //     with: '4rem',

  //   },
  //   false: {
  //     alignSelf: 'flex-start',
  //     marginTop: '2rem',
  //     with: '3rem',

  //   }
  // }