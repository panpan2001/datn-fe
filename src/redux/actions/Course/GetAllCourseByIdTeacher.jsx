import axios from "axios"
import { getAllCourseByIdTeacherFailure, getAllCourseByIdTeacherStart, getAllCourseByIdTeacherSuccess } from "../../slices/Course/getAllCourseByIdTeacher"
import { CourseApi } from "../../../utils/BaseUrl"


const getAllCourseByIdTeacher=async(id,dispatch)=>{
    dispatch(getAllCourseByIdTeacherStart())
    try {
        const res= await axios.get(CourseApi+"teacher/"+id)
        dispatch(getAllCourseByIdTeacherSuccess(res.data))

    }
    catch (error) {
        dispatch(getAllCourseByIdTeacherFailure(error))
        console.log(error)
    }
    
}

export default getAllCourseByIdTeacher