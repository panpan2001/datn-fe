import axios from "axios";
import { registerStart, registerSuccess, registerFailure } from "../../slices/Auth/registerSlice";
import { RegisterApi } from "../../../utils/BaseUrl";

const registerUser=async(user,dispatch,navigate)=>{
    dispatch(registerStart())
    try {
        const res= await axios.post(RegisterApi,user)
        dispatch(registerSuccess(res.data))
        navigate('/login')
    } catch (error) {
        dispatch(registerFailure(error))
        console.log(error)
    }
}

export default registerUser