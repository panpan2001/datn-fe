import axios from "axios"
import { CourseStudentApi } from "../../../utils/BaseUrl"
import { getCourseStudentByCourseIdFailure, getCourseStudentByCourseIdStart, getCourseStudentByCourseIdSuccess } from "../../slices/CourseStudent/getCourseStudentByCourseIdSlice"

const getCourseStudentByCourseId = async(id, dispatch)=>{
    dispatch(getCourseStudentByCourseIdStart())
    try {
        const res= await axios.get(CourseStudentApi+"course/"+id)
        dispatch(getCourseStudentByCourseIdSuccess(res.data))
    }
    catch (error) {
        dispatch(getCourseStudentByCourseIdFailure(error))
        console.log(error)
    }
}

export default getCourseStudentByCourseId