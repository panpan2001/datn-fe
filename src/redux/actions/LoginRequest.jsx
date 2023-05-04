import axios from "axios"
import {loginStart, loginFailure, loginSuccess } from "../slices/authSlice"

const loginUser=async(user,dispatch,navigate)=>{
    dispatch(loginStart())
    try{
        const res=await axios.post("http://localhost:3001/api/auth/login",user)
        dispatch(loginSuccess(res.data))
        navigate("/")
    }
    catch(err){
        dispatch(loginFailure(err))
        console.log(err)
    }
}

export default loginUser