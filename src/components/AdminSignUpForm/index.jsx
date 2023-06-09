import { Link } from "react-router-dom"
import '../../assets/styles/AdminSignUpForm .css'
const AdminSignUpForm=()=>{
    return(
        <form className='admin-signup-form_container container-fluid mr-6'>
            <label className="label login-name_label is-size-3">
                <strong>Đăng kí với vai trò là quản trị viên </strong>
            </label>
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
                        <label className="label">Địa chỉ</label>
                            <input className="input" type="text" placeholder="Địa chỉ" />
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
            <label className="label">Mật khẩu </label>
            <input className="input" type="text" placeholder="Mật khẩu" />
          </div>
        </div>

        <div className="column is-6">
          <div className="field">
            <label className="label">Nhắc lại mật khẩu </label>
            <input className="input" type="text" placeholder="Nhắc lại mật khẩu" />
          </div>
        </div>
            </div>
            <div className="field is-grouped is-grouped-centered" id='signup_button'>
                    <button className="button is-link" type="submit">Đăng kí</button>
            </div>

        </form >
    )
}
export default AdminSignUpForm