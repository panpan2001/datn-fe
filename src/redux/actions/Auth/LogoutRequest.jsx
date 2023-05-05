import { LogoutApi } from "../../../utils/BaseUrl"
// import { logoutFailure, logoutStart, logoutSuccess } from "../../slices/Auth/logoutSlice"

import { logoutFailure,logoutStart,logoutSuccess } from "../../slices/Auth/loginSlice"

const logoutUser= async (dispatch,id,accessToken,axiosJWT,navigate)=>{
dispatch(logoutStart())
try {
    await axiosJWT.post(LogoutApi,id,{
        headers:{token: `Bearer ${accessToken}`}
    })
    dispatch(logoutSuccess())
    navigate('/login')
} catch (error) {
    dispatch(logoutFailure(error))
    console.log(error)
}
}

export default logoutUser