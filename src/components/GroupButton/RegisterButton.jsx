import React from 'react'
import '../../assets/styles/RegisterButton.css'
function RegisterButton() {
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
    <button className="button is-link">Học thử </button>
    {/* <button className="button is-primary">Đăng kí </button> */}
    <button className="button is-info">Liên hệ  </button>
    {/* <button className="button is-danger">Đánh giá  </button> */}
</div>
  )
}

export default RegisterButton