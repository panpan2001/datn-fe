import axios from "axios"
import { CourseCategoryApi } from "../../../utils/BaseUrl"
import { getCourseCategoryFailure, getCourseCategoryStart, getCourseCategorySuccess } from "../../slices/CourseCategory/getCourseCategorySlice"


const getCourseCategory= async(dispatch)=>{
    dispatch(getCourseCategoryStart())
    try {
        const res = await axios.get(CourseCategoryApi)
        dispatch(getCourseCategorySuccess(res.data))
        // console.log('course categories: ', res.data)
    }
    catch (error) {
        dispatch(getCourseCategoryFailure())
        console.log("get course categories failure",error)
    }
}
export default getCourseCategory