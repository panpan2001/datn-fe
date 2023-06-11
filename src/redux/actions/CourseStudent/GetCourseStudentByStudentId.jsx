import { CourseStudentApi } from "../../../utils/BaseUrl"
import { getCourseStudentByStudentIdFailure, getCourseStudentByStudentIdStart, getCourseStudentByStudentIdSuccess } from "../../slices/CourseStudent/getCourseStudentByStudentId"


const getCourseStudentByStudentId= async(id,dispatch,accessToken,axiosJWT)=>{
    dispatch(getCourseStudentByStudentIdStart())
    try {
        const res= await axiosJWT.get(CourseStudentApi+ 'student/'+id,{
            headers:{
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(getCourseStudentByStudentIdSuccess(res.data))
    } catch (error) {
        dispatch(getCourseStudentByStudentIdFailure())
        console.log(error)
    }
}


export default getCourseStudentByStudentId