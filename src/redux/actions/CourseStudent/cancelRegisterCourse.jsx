import { toast } from "react-toastify"
import { cancelRegisterCourseFailure, cancelRegisterCourseStart, cancelRegisterCourseSuccess } from "../../slices/CourseStudent/cancelRegisterCourse"
import { CourseStudentApi } from "../../../utils/BaseUrl"


const cancelRegisterCourse= async(id,dispatch,accessToken,axiosJWT,navigate)=>{
    dispatch(cancelRegisterCourseStart())
    try {
        const res= await axiosJWT.delete(CourseStudentApi+id,{
            headers:{
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(cancelRegisterCourseSuccess(res.data))
        navigate('/profile/studentClass')
    } catch (error) {
        dispatch(cancelRegisterCourseFailure())
        console.log(error)
        toast.error("Lỗi hệ thống! Không hủy được khóa học",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}

export default cancelRegisterCourse