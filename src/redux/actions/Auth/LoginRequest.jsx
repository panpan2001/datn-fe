import axios from "axios"
import {loginStart, loginSuccess, loginFailure} from "../../slices/Auth/loginSlice"

const loginUser=async(user,dispatch,navigate)=>{
    dispatch(loginStart())
    try{
        const res=await axios.post("http://localhost:3001/api/auth/login",user)
        dispatch(loginSuccess(res.data))
        navigate("/admin")
    }
    catch(err){
        dispatch(loginFailure(err))
        console.log(err)
    }
}

export default loginUser