import { LogoutApi } from "../../../utils/BaseUrl"
// import { logoutFailure, logoutStart, logoutSuccess } from "../../slices/Auth/logoutSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logoutFailure,logoutStart,logoutSuccess } from "../../slices/Auth/loginSlice"

const logoutUser= async (dispatch,id,accessToken,axiosJWT,navigate)=>{
dispatch(logoutStart())
try {
    await axiosJWT.post(LogoutApi,id,{
        headers:{token: `Bearer ${accessToken}`}
    })
    dispatch(logoutSuccess())
    navigate('/login')
    toast.success('Đăng xuất thành công!', {
        position: toast.POSITION.BOTTOM_RIGHT
    });

} catch (error) {
    dispatch(logoutFailure(error))
    console.log(error)
    toast.error('Đăng xuất thất bại !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
}
}

export default logoutUser