import { toast } from "react-toastify"
import { cancelRegisterCourseFailure, cancelRegisterCourseStart, cancelRegisterCourseSuccess } from "../../slices/CourseStudent/cancelRegisterCourse"
import { CourseStudentApi } from "../../../utils/BaseUrl"
import { getCourseStudentByStudentIdSuccess } from "../../slices/CourseStudent/getCourseStudentByStudentId"


const cancelRegisterCourse= async(id,dispatch,axiosJWT,accessToken,account_id)=>{
    console.log("olala cancel officail course action :",axiosJWT)
    dispatch(cancelRegisterCourseStart())
    try {
        const res= await axiosJWT.delete(CourseStudentApi+ id,{
            headers: {
                token: `Bearer ${accessToken}`,
                account_id:account_id
            }
        })
        // console.log("1")
        // dispatch(cancelRegisterCourseSuccess(res.data))
dispatch(getCourseStudentByStudentIdSuccess(res.data))
        // navigate('/profile/studentClass')
    } catch (error) {
        dispatch(cancelRegisterCourseFailure())
        console.log(error)
        toast.error("Lỗi hệ thống! Không hủy được khóa học",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}

export default cancelRegisterCourse