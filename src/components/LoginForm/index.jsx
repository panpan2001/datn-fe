import '../../assets/styles/LoginForm.css'
import { Link } from 'react-router-dom'
const LoginForm = () => {
    return (
        <form className="login-form_container">
            <label className="label login-name_label is-size-3">
                <strong>Đăng nhập </strong>
            </label>
            <div className="field">
                <label className="label">Tên đăng nhập</label>
                <input className="input" type="text" placeholder="Username" />
            </div>
            <div className="field">
                <label className="label">Mật khẩu</label>
                <input className="input" type="text" placeholder="Password" />
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered" id='login_button'>
                <button className="button is-link" type="submit">Đăng nhập </button>
            </div>
            <label className="label  ">
                <Link>Quên mật khẩu?</Link>
            </label>
            <br />
            <label className="label sign-up_label">
                <p>Chưa có tài khoản?   </p>
                <Link to="/signup">  Đăng kí ngay</Link>
            </label>

        </form>
)
}

export default LoginForm