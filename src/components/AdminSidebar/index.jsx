import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/styles/AdminSidebar.css'
import { AiOutlineLogout, AiOutlineHome, AiOutlineTeam, AiOutlineUser, AiOutlineSolution } from 'react-icons/ai'
function AdminSidebar() {
  const navigate = useNavigate()
  return (
    <section className='admin-side-bar_section container'>
      <header>
        <div className="side-bar-logo ">
          <Link to='/'>
            <img className='side-bar-logo_image' src={require('../../assets/images/logo.jpg')} alt="" srcset="" />
          </Link>
        </div>
      </header>
      <main className="columns is-multiline side-bar-column mt-6">
        <div className="column-1">

          <Link to='/admin'>
            <div className="columns icon-link_column">
              <div className="column is-3 is-narrow">
                <AiOutlineHome />
              </div>
              <div className="column icon-link_column_name">
                <p>Tổng quan</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="column-2">
          <Link to='/admin/student'>
            <div className="columns icon-link_column">
              <div className="column is-3 is-narrow">
              <AiOutlineTeam />
              </div>
              <div className="column icon-link_column_name">
              <p>Học sinh</p>
              </div>
            </div>
            </Link>
        </div>
        <div className="column-3">
          <Link to='/admin/teacher'>
          <div className="columns icon-link_column">
              <div className="column is-3 is-narrow">
              <AiOutlineUser />
              </div>
              <div className="column icon-link_column_name">
              <p>Giáo viên</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="column-4">
          <Link to='/admin/course'>
          <div className="columns icon-link_column">
              <div className="column is-3 is-narrow">
              <AiOutlineSolution />
              </div>
              <div className="column icon-link_column_name">
              <p >Khóa học</p>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <br />
      <footer className='mt-6'>
        <Link to={navigate('/')}>
          <AiOutlineLogout />
        </Link>

      </footer>

    </section>
  )
}

export default AdminSidebar 