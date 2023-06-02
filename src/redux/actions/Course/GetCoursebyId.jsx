import axios from "axios"
import { getCourseByIdFailure, getCourseByIdStart, getCourseByIdSuccess } from "../../slices/Course/getCourseById"
import { CourseApi } from "../../../utils/BaseUrl"


const getCoursebyId = async(id, dispatch)=>{
    dispatch(getCourseByIdStart())
    try {
        const res= await axios.get(CourseApi +id )
        dispatch(getCourseByIdSuccess(res.data))
    } catch (error) {
        dispatch(getCourseByIdFailure(error))
        console.log(error)
    }
}

export default getCoursebyId