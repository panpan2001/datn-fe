import axios from "axios";
import { registerStart, registerSuccess, registerFailure } from "../../slices/Auth/registerSlice";
import { RegisterApi } from "../../../utils/BaseUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const registerUser=async(user,dispatch,navigate)=>{
    dispatch(registerStart())
    try {
        const res= await axios.post(RegisterApi,user)
        dispatch(registerSuccess(res.data))
        navigate('/completeInfo')
        toast.success('Đăng kí thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });

    } catch (error) {
        dispatch(registerFailure(error))
        console.log(error)
        toast.error('Đăng kí thất bại !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}

export default registerUser