import { toast } from "react-toastify"
import { createRegisterDemoCourseFailure, createRegisterDemoCourseStart, createRegisterDemoCourseSuccess } from "../../slices/DemoCourseStudent/createRegisterDemoCourse"
import { CourseStudentApi } from "../../../utils/BaseUrl"


const registerCourse= (value,dispatch,navigate,accessToken,axiosJWT)=>{
    dispatch(createRegisterDemoCourseStart())
    try {
        const res= axiosJWT.post(CourseStudentApi,value,{
            headers:{
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(createRegisterDemoCourseSuccess(res.data))
        toast.success("Đăng ký khóa học  thành công",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
        navigate("/profile/studentClass")
    } catch (error) {
        dispatch(createRegisterDemoCourseFailure())
        console.log(error)
        toast.error(error.response.data,{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}
export default registerCourse