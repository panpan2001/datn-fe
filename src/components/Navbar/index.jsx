import '../../assets/styles/Navbar.css'
const Navbar=()=>{
return (
<div className="navbar_container container">
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="logo" href="/">
      <img id='logo-brand' src={require("../../assets/images/logo.png")} />
    </a>
  </div>

  <div  className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href='/'>
        Trang chủ
      </a>
      <a className="navbar-item">
        Tìm kiếm giáo viên
      </a>
      <a className="navbar-item">
        Tìm kiếm lớp học
      </a>
      <a className="navbar-item">
        Trở thành giáo viên 
      </a>
      </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-info">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light" href='/login'>
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
)
}

export default Navbar