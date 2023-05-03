import '../../assets/styles/LoginForm.css'
import { Link } from 'react-router-dom'
const LoginForm = () => {
    return (
        <form className="login-form_container">
            <label className="label login-name_label is-size-3">
                <strong className='is-size-4'>Đăng nhập </strong>
            </label>
            <div className="field">
                <label className="label">Email</label>
                <input className="input" type="text" placeholder="Email" />
            </div>
            <div className="field">
                <label className="label">Mật khẩu</label>
                <input className="input" type="text" placeholder="Password" />
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered" id='login_button'>
                <button className="button is-link" type="submit">Đăng nhập </button>
            </div>
            <label className="label sign-up_label ">
                <Link className=" is-size-6 mt-2 ">Quên mật khẩu?</Link>
            </label>
            <br />
            <label className="label sign-up_label ">
                <p className=" is-size-6 ">Chưa có tài khoản?   </p>
                <Link className=" is-size-6 " to="/signup">  Đăng kí ngay</Link>
            </label>

        </form>
)
}

export default LoginForm