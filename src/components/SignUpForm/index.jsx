import { Link } from "react-router-dom"
import '../../assets/styles/SignUpForm .css'
const SignUpForm=()=>{
    return(
        <form className='admin-signup-form_container container-fluid mr-6'>
                        <label className="label login-name_label is-size-3">
                            <strong className='is-size-4'>Đăng kí với vai trò là: </strong>
                            <div className="column is-12 role-signup_column">
                                <div className="field role-signup_field">
                                    <div class="control role-signup_control" id="role-signup_control">
                                        <div id="role-1">
                                            <input type="radio" name="role_radio-button" />
                                            <label class="radio is-size-5 " >Học viên</label>
                                        </div>
                                        <div id="role-2">
                                            <input type="radio" name="role_radio-button" />
                                            <label class="radio is-size-5 ">Giáo viên</label>
                                        </div>
                                        <div id="role-3">
                                            <input type="radio" name="role_radio-button" />
                                            <label class="radio is-size-5">Quản trị viên </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                <div className="field gender-signup_form" >
                                    <label className="label">Giới tính</label>
                                    <div class="control" >
                                        <div id="gender-1">
                                            <input type="radio" name="gender_radio-button"/>
                                            <label class="radio is-size-6" >Nam</label>
                                        </div>
                                        <div id="gender-2">
                                            <input type="radio" name="gender_radio-button" />
                                            <label class="radio is-size-6 ">Nữ</label>
                                        </div>
                                        <div id="gender-3">
                                            <input type="radio" name="gender_radio-button" />
                                            <label class="radio is-size-6">Khác</label>
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
export default SignUpForm