import '../../assets/styles/LoginForm.css'
import { Link } from 'react-router-dom'
const LoginForm = () => {
    return (
        <div className="login-form_container">
            <label className="label login-name_label is-size-3">
                <strong>Đăng nhập </strong>
            </label>
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Username" />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Password" />
                </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <button className="button is-link">Đăng nhập </button>
                </div>
            </div>
            <label className="label  ">
                <Link>Quên mật khẩu?</Link>
            </label>
            {/* <hr /> */}
           
            <label className="label sign-up_label">
                <p>Chưa có tài khoản?   </p>
                {/* <p>Đăng kí với vai trò:   </p> */}

                <Link to="/signup/student">  Đăng kí ngay</Link>
            </label>
            {/* <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <button className="button is-info">Học sinh </button>
                </div>
                <div className="control">
                    <button className="button is-gray">Giáo viên </button>
                </div>
            </div> */}

        </div>)
}

export default LoginForm