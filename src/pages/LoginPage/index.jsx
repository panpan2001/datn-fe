import { ToastContainer } from 'react-toastify'
import '../../assets/styles/LoginPage.css'
import LoginForm from '../../components/LoginForm'
const LoginPage=({children})=>{
return (
    <div className="login-page_container container-fluid">
       <div className="columns">
        <div className="column login-page_images ">
                <img src={require('../../assets/images/18.jpg')} alt="plane"/>
        </div>
        <div className="column is-4 ">
            {children}
        </div>
        <div className="column login-page_images_2">
        <img src={require('../../assets/images/1.jpg')} alt="plane"/>

        </div>
       </div>
       <ToastContainer/>
    </div>
)
}

export default LoginPage