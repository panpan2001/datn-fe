import { toast } from "react-toastify"
import { reportCourseStudentFail, reportCourseStudentStart, reportCourseStudentSuccess } from "../../slices/CourseStudent/reportedCourseStudent"
import { CourseStudentApi } from "../../../utils/BaseUrl"
import { getCourseStudentByStudentIdStart, getCourseStudentByStudentIdSuccess } from "../../slices/CourseStudent/getCourseStudentByStudentId"

const reportCourseStudent= async (id,value,dispatch,accessToken,axiosJWT,account_id)=>{
    dispatch(reportCourseStudentStart())
    try {
        const res= await axiosJWT.patch(CourseStudentApi +"report/"+ id,value,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
        }
    })
    dispatch(getCourseStudentByStudentIdSuccess(res.data))
    toast.success("Gửi cảnh báo thành công!", {
        position: "top-right",
    })
    } catch (error) {
        console.log(error)
        dispatch(reportCourseStudentFail())
        toast.error("Gửi cảnh báo thất bại!", {
            position: "top-right",
        })
    }
}

export default reportCourseStudent