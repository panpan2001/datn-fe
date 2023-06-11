import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/styles/AdminSidebar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import Item from '../Item'
import { AiOutlineLogout, AiOutlineHome, AiOutlineTeam, AiOutlineUser, AiOutlineSolution, AiOutlineMacCommand } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'
function AdminSidebar() {
  const navigate = useNavigate()
  return (
    // <section className='admin-side-bar_section container'>
    //   <header>
    //     <div className="side-bar-logo ">
    //       <Link to='/'>
    //         <img className='side-bar-logo_image' src={require('../../assets/images/logo.jpg')} alt="" srcset="" />
    //       </Link>
    //     </div>
    //   </header>
    //   <main className="columns is-multiline side-bar-column">
    //     <div className="column-1">

    //       <Link to='/admin'>
    //         <div className="columns icon-link_column">
    //           <div className="column is-3 is-narrow ">
    //             <AiOutlineHome className='sidebar_icon-1' />
    //           </div>
    //           <div className="column icon-link_column_name">
    //             <p>Tổng quan</p>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="column-2">
    //       <Link to='/admin/student'>
    //         <div className="columns icon-link_column">
    //           <div className="column is-3 is-narrow">
    //           <AiOutlineTeam className='sidebar_icon-2' />
    //           </div>
    //           <div className="column icon-link_column_name">
    //           <p>Học sinh</p>
    //           </div>
    //         </div>
    //         </Link>
    //     </div>
    //     <div className="column-3">
    //       <Link to='/admin/teacher'>
    //       <div className="columns icon-link_column">
    //           <div className="column is-3 is-narrow">
    //           <AiOutlineUser className='sidebar_icon-3' />
    //           </div>
    //           <div className="column icon-link_column_name">
    //           <p>Giáo viên</p>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="column-4">
    //       <Link to='/admin/course'>
    //       <div className="columns icon-link_column">
    //           <div className="column is-3 is-narrow">
    //           <AiOutlineSolution className='sidebar_icon-4'/>
    //           </div>
    //           <div className="column icon-link_column_name">
    //           <p >Khóa học</p>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </main>
    //   <br />
    //   <footer className='mb-6'>
    //     <Link to={navigate('/')}>
    //       <AiOutlineLogout />
    //     </Link>

    //   </footer>

    // </section>
    <div className="admin-sidebar">
    <div className='profile'>
      <Link to='/profile'>
      <img id='admin_profile_img'
        src={require('../../assets/images/logo.jpg')}
        alt="profile_img" />
      </Link>
    
    </div>

    <div className="groups">
      <div className="group">
        
        <Item className='admin-sidebar_item' icon={<AiOutlineHome />} name={"Tổng quan"} navigate={'/admin'} />
      <Item icon={<AiOutlineMacCommand/>} name={"Tài khoản"} navigate={'/admin/account'}/>
        <Item icon={< AiOutlineTeam />} name={"Học viên"} navigate={'/admin/student'} />
        <Item icon={< AiOutlineUser />} name={"Giáo viên"} navigate={'/admin/teacher'}/>
        <Item icon={< AiOutlineSolution  />} name={"Khóa học"} navigate={'/admin/course'} />
      </div>
    </div>
    <Link to='/profile'>
    <BiExit style={{
      display: "block",
      bottom: "2rem",
      left: "4.5rem",
      position: "absolute",
      margin: "auto",
      color: "var(--toastify-color-info)",
      width: "2rem",
      height: "2rem",
    }}/>
    </Link>
    
  </div>
  )
}

export default AdminSidebar 