import axios from "axios"
import {loginStart, loginSuccess, loginFailure} from "../../slices/Auth/loginSlice"
import { LoginApi } from "../../../utils/BaseUrl"
const loginUser=async(user,dispatch,navigate)=>{
    dispatch(loginStart())
    try{
        const res=await axios.post(LoginApi,user)
        dispatch(loginSuccess(res.data))
        navigate("/")
        
    }
    catch(err){
        dispatch(loginFailure(err))
        console.log(err)
    }
}

export default loginUser