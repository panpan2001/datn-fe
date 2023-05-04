import '../../assets/styles/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [user, setUser] = useState(null)
  return (
    <div className="navbar_container container ">
      <nav className="navbar " role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="logo" href="/">
            <img id='logo-brand' src={require("../../assets/images/logo.jpg")} />
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            {user ?
              <Link className="navbar-item" to='/'>
              Trang cá nhân 
            </Link>
            :
              <Link className="navbar-item" to='/'>
              Trang chủ
            </Link> 
            }
           
            <Link className="navbar-item" to="/findingTeacher">
              Tìm kiếm giáo viên
            </Link>
            <Link className="navbar-item" to="/findingCourse">
              Tìm kiếm lớp học
            </Link>
            {user!=='student'? 
             <Link className="navbar-item" to="/signup">
             Trở thành giáo viên
           </Link>: ""
           }
            {user=='teacher' && 
            <Link className="navbar-item" to="/">
              Tạo lớp học
            </Link>}
          </div>

          <div className="navbar-end">
            {user ?
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button log_in is-light" href='/'>
                    Thoát
                  </a>
                </div>
              </div> :
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button sign_up is-info" to="/signup">
                    Đăng kí
                  </Link>
                  <Link className="button log_in is-light" to='/login'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            }

          </div>
        </div>
        {/* <a role="button" class="navbar-burger" id="navbar-buger" aria-label="menu" aria-expanded="true">
          <span aria-hidden="false"></span>
          <span aria-hidden="false"></span>
          <span aria-hidden="false"></span>
        </a> */}
      </nav>
    </div>
  )
}

export default Navbar