import { toast } from "react-toastify"
import { createRegisterDemoCourseFailure, createRegisterDemoCourseStart, createRegisterDemoCourseSuccess } from "../../slices/DemoCourseStudent/createRegisterDemoCourse"
import axios from "axios"
import { DemoCourseStudentApi } from "../../../utils/BaseUrl"


const registerDemoCourse = async(value,dispatch,navigate,accessToken,axiosJWT,account_id)=>{
    dispatch(createRegisterDemoCourseStart())
    try {
        const res= await axiosJWT.post(DemoCourseStudentApi,value,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(createRegisterDemoCourseSuccess(res.data))
        toast.success("Đăng ký khóa học thử thành công",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
        navigate(`/profile/${account_id}/studentClass`)
    } catch (error) {
        dispatch(createRegisterDemoCourseFailure())
        console.log(error)
        toast.error(error.response.data,{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

}

export default registerDemoCourse