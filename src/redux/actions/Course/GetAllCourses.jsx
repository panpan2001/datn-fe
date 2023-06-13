import axios from "axios"
import { CourseApi } from "../../../utils/BaseUrl"
import { getAllCoursesFailure, getAllCoursesStart, getAllCoursesSuccess } from "../../slices/Course/getAllCourse"

const getAllCourses= async(dispatch)=>{
    dispatch(getAllCoursesStart())
    try {
        const res= await axios.get(CourseApi)
        // console.log("res data get all studen course action",res.data)
        dispatch(getAllCoursesSuccess(res.data))
        console.log("res",res.data)
    } catch (error) {
        dispatch(getAllCoursesFailure(error))
        console.log(error)
    }
}
export default getAllCourses