import '../../assets/styles/Navbar.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logoutUser from '../../redux/actions/Auth/LogoutRequest'
import createAxiosJWT from '../../utils/createInstance'
import { logoutSuccess } from '../../redux/slices/Auth/logoutSlice'
const Navbar = () => {
  const user = useSelector(state => state.login.login?.currentUser)
  const isLoggedIn = useSelector(state => state.login.login?.isLoggedIn)
  const isLoggedOut = useSelector(state => state.logout.logout?.isLoggedOut)
  console.log("user: ", user)
  console.log("login?: ", isLoggedIn)
  console.log('logout?: ', isLoggedOut)
const dispatch= useDispatch()
const navigate= useNavigate()
const accessToken= user?.accessToken
const id= user?._id
let axiosJWT= createAxiosJWT(dispatch,user,logoutSuccess)
  const handleLogout=()=>{
    logoutUser(dispatch,id,accessToken,axiosJWT,navigate)
  }

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
            {isLoggedIn ?
              <Link className="navbar-item" to='/profile'>
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
            {isLoggedIn ?
              // (user.role_name == 'admin' ?
              //   <Link className="navbar-item" to="/signup">
              //     Trở thành giáo viên
              //   </Link> : ""
              // ) :
              "":<Link className="navbar-item" to="/signup">
                Trở thành giáo viên
              </Link>
            }
            {isLoggedIn && user.role_name == 'teacher' &&
              <Link className="navbar-item" to="/">
                Tạo lớp học
              </Link>}
          </div>

          <div className="navbar-end">
            {isLoggedIn ?
              <div className="navbar-item">
                <div className="buttons">
                  {/* {user.role_name == 'admin' ?
                    <Link className="button log_in is-dark" to='/admin'>
                      Quan lí
                    </Link> : ""} */}
                  <Link className="button log_in is-light" to='/' onClick={handleLogout}>
                    Đăng xuất
                  </Link>
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