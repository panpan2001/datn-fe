import axios from "axios"
import { loginStart, loginSuccess, loginFailure } from "../../slices/Auth/loginSlice"
import { LoginApi } from "../../../utils/BaseUrl"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getStudentByAccountId from "../Student/GetStudentByAccountId";
import CheckCompleteInfoMiddware from "../../../middleware/CheckCompleteInfoMiddware";

const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(LoginApi, user)
        dispatch(loginSuccess(res.data))
        await console.log("login: data id ",res.data._id)
        // await CheckCompleteInfoMiddware(res.data.account_id)? navigate("/profile") : navigate('/completeInfo')
        // if(res.data.role_name == "student") 
        // { 
        //     res.data.parent_name ? navigate("/profile") : navigate('/completeInfo')
        // }
        // if(res.data.role_name == "teacher") 
        // { 
        //     res.data.personal_image ? navigate("/profile") : navigate('/completeInfo')
        // }
navigate("/profile")
        toast.success('Đăng nhập thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });

    }
    catch (err) {
        console.log("login failure")
        dispatch(loginFailure(err))
        console.log(err)
        toast.error('Đăng nhập thất bại !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}

export default loginUser