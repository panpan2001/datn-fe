import { toast } from "react-toastify"
import { CourseStudentApi } from "../../../utils/BaseUrl"
import { registerCourseFailure, registerCourseStart, registerCourseSuccess } from "../../slices/CourseStudent/registerCourse"


const registerCourse=async (value,dispatch,navigate,accessToken,axiosJWT,account_id)=>{
    dispatch(registerCourseStart())
    try {
        const res= await  axiosJWT.post(CourseStudentApi,value,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id:account_id
            }
        })
        dispatch(registerCourseSuccess(res.data))
        toast.success("Đăng ký khóa học  thành công",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
        navigate(`/profile/${account_id}/studentClass`)
    } catch (error) {
        dispatch(registerCourseFailure())
        console.log({error})
        toast.error(error.response.data,{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}
export default registerCourse