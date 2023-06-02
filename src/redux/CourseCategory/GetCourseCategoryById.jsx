import axios from "axios"
import { CourseCategoryApi } from "../../utils/BaseUrl"
import { getCourseCategoryByIdFailure, getCourseCategoryByIdStart, getCourseCategoryByIdSuccess } from "../slices/CourseCategory/getCourseCategoryByIdSlice"


const getCourseCategoryById= async(id,dispatch)=>{
    dispatch(getCourseCategoryByIdStart())
    try {
        const res = await axios.get(CourseCategoryApi+id)
        dispatch(getCourseCategoryByIdSuccess(res.data))
        console.log('course categories by id : ', res.data)
    }
    catch (error) {
        dispatch(getCourseCategoryByIdFailure())
        console.log("get course categories failure",error)
    }
}
export default getCourseCategoryById