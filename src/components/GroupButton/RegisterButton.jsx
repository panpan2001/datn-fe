import React from 'react'
import '../../assets/styles/RegisterButton.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function RegisterButton({id_teacher}) {
  // const isLoggedIn = useSelector((state) => state.login.login?.isLoggedIn)
  // const currentUser= useSelector((state) => state.login.login?.currentUser)
  return (
    <div className="buttons is-centered register_buttons"
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        gap: '1rem'
    }}
>
  <Link to={`/detailTeacher/${id_teacher}`}>
  <button className="button is-link">Học thử </button>

  </Link>
    {/* <button className="button is-primary">Đăng kí </button> */}
    <button className="button is-info">Liên hệ  </button>
    {/* <button className="button is-danger">Đánh giá  </button> */}
  
</div>
  )
}

export default RegisterButton