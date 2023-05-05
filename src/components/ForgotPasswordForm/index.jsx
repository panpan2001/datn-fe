import '../../assets/styles/ForgotPasswordForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import loginUser from '../../redux/actions/Auth/LoginRequest'
import { useDispatch } from 'react-redux'
const ForgotPasswordForm = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const [password, setPassword] = useState('')
    const [resetPassword, setResetPassword] = useState('')
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password===resetPassword){
            console.log("reset pw: ",true,password)
        }
        else             console.log("reset pw: ",false)

        // const newUser={
        //     email:email,
        //     password:password
        // };
        // loginUser(newUser,dispatch,navigate)
    }

    return (
        <form className="login-form_container" onSubmit={handleSubmit}>
            <label className="label login-name_label is-size-3">
                <strong className='is-size-4'>Quên mật khẩu </strong>
            </label>
            <div className="field">
                <label className="label">Mật khẩu</label>
                <input className="input" type="password " placeholder="********"  onChange={e=>setPassword(e.target.value)}/>
            </div>
            <br />
            <div className="field">
                <label className="label">Nhắc lại mật khẩu</label>
                <input 
                className="input" 
                type="password " 
                placeholder="********"  
                onChange={e=>setResetPassword(e.target.value)}/>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered" id='login_button'>
                <button className="button is-link" type="submit">Đặt lại</button>
            </div>

        </form>
)
}

export default ForgotPasswordForm