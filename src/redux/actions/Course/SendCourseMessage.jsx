import { toast } from "react-toastify"
import { CourseApi, CourseStudentApi } from "../../../utils/BaseUrl"
import { getCourseByIdSuccess } from "../../slices/Course/getCourseById"
import { sendCourseMessageFailure, sendCourseMessageStart, sendCourseMessageSuccess } from "../../slices/Course/sendCourseReportMessageSlice"

const   sendCourseMessage = async(id, value, account_id, dispatch, axiosJWT, accessToken)=>{
    dispatch(sendCourseMessageStart())
    try {
        const res= await axiosJWT.patch(CourseApi+"report/"+id,value,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(getCourseByIdSuccess(res.data))
        toast.success("Gửi cảnh báo thành công", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    catch (error) {
        dispatch(sendCourseMessageFailure(error))
        console.log(error)
        toast.error(error.response.data, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}
export default sendCourseMessage
