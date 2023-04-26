import '../../assets/styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar_container container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="logo" href="/">
            <img id='logo-brand' src={require("../../assets/images/logo.jpg")} />
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href='/'>
              Trang chủ
            </a>
            <a className="navbar-item" href="">
              Tìm kiếm giáo viên
            </a>
            <a className="navbar-item" href="">
              Tìm kiếm lớp học
            </a>
            <a className="navbar-item" href="/signup/teacher">
              Trở thành giáo viên
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button sign_up is-info" href="/signup">
                  Đăng kí
                </a>
                <a className="button log_in is-light" href='/login'>
                  Đăng nhập 
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <a role="button" class="navbar-burger" id="navbar-buger" aria-label="menu" aria-expanded="true">
                  <span aria-hidden="false"></span>
                  <span aria-hidden="false"></span>
                  <span aria-hidden="false"></span>
                </a>
      </nav>
    </div>
  )
}

export default Navbar