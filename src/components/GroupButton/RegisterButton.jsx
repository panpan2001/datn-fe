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
    <button className="button is-primary">Học thử </button>
    <button className="button is-link">Đăng kí </button>
    <button className="button is-info">Liên hệ  </button>
</div>
  )
}

export default RegisterButton