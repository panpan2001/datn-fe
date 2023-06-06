import { toast } from "react-toastify"
import { createRegisterDemoCourseFailure, createRegisterDemoCourseStart, createRegisterDemoCourseSuccess } from "../../slices/DemoCourse/createRegisterDemoCourse"
import axios from "axios"
import { DemoCourseStudentApi } from "../../../utils/BaseUrl"


const registerDemoCourse = async(value,dispatch,navigate,accessToken,axiosJWT)=>{
    dispatch(createRegisterDemoCourseStart())
    try {
        const res= await axiosJWT.post(DemoCourseStudentApi,value,{
            headers:{
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(createRegisterDemoCourseSuccess(res.data))
        toast.success("Đăng ký khóa học thử thành công",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
        navigate("/profile/studentClass")
    } catch (error) {
        dispatch(createRegisterDemoCourseFailure())
        console.log(error)
        toast.error("Đăng ký khóa học thử thất bại",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

}

export default registerDemoCourse