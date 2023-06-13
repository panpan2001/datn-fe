import axios from "axios"
import { getAllCourseStudentFailure, getAllCourseStudentStart, getAllCourseStudentSuccess } from "../../slices/CourseStudent/getAllCourseStudent"
import { CourseStudentApi } from "../../../utils/BaseUrl"


const getAllCourseStudent = async(dispatch)=>{
    // console.log("res data get all studen course action")
    dispatch(getAllCourseStudentStart())
    try {
        const res= await axios.get(CourseStudentApi)
        // console.log("res data get all studen course action",res.data)
        dispatch(getAllCourseStudentSuccess(res.data))
    } catch (error) {
        dispatch(getAllCourseStudentFailure(error))
        console.log(error)
    }
}
export default getAllCourseStudent