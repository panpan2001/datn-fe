import React from 'react'

function PersonalInfo() {
  return (
    <div className='personal-info_container'>
      <div className="columns is-multiline">
        <div className="column is-6">
          <div className="field">
            <label className="label">Họ và tên</label>
            <input className="input" type="text" placeholder="Họ và tên" />
          </div>
        </div>
        <div className="column is-6">
          <div className="field">
            <label className="label">Ngày sinh</label>
            <input className="input" type="date" placeholder="Ngày sinh " />
          </div>
        </div>
        <div className="column is-6">
          <div className="field gender-signup_form">
            <label className="label">Giới tính</label>
            <div class="control">
              <div id="gender-1">
                <input type="radio" name="rsvp" />
                <label class="radio " >Nam</label>
              </div>
              <div id="gender-2">
                <input type="radio" name="rsvp" />
                <label class="radio ">Nữ</label>
              </div>
              <div id="gender-3">
                <input type="radio" name="rsvp" />
                <label class="radio ">Khác</label>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="field">
            <label className="label">Địa chỉ nhà riêng</label>
            <input className="input" type="text" placeholder="Địa chỉ nhà riêng" />
          </div>
        </div>
        <div className="column is-6">
          <div className="field">
            <label className="label">Email</label>
            <input className="input" type="email" placeholder="Email" />
          </div>
        </div>
        <div className="column is-6">
          <div className="field">
            <label className="label">Số điện thoại</label>
            <input className="input" type="text" placeholder="Số điện thoại" />
          </div>
        </div>
        <div className="column is-6">
          <div className="field">
            <label className="label">Tên đăng nhập </label>
            <input className="input" type="text" placeholder="Tên đăng nhập" />
          </div>
        </div>
        <div className="column is-6">
          <div className="field">
            <label className="label">Mật khẩu </label>
            <input className="input" type="text" placeholder="Mật khẩu" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo