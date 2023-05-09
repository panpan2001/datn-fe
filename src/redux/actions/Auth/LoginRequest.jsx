import axios from "axios"
import {loginStart, loginSuccess, loginFailure} from "../../slices/Auth/loginSlice"
import { LoginApi } from "../../../utils/BaseUrl"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginUser=async(user,dispatch,navigate)=>{
    dispatch(loginStart())
    try{
        const res=await axios.post(LoginApi,user)
       
        dispatch(loginSuccess(res.data))
        navigate("/completeInfo")
        toast.success('Đăng nhập thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    
    }
    catch(err){
        console.log("login failure")
        dispatch(loginFailure(err))
        console.log(err)
        toast.error('Đăng nhập thất bại !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}

export default loginUser