import axios from "axios"
import { getAllDemoCourseByTeacherIdFailure, getAllDemoCourseByTeacherIdStart, getAllDemoCourseByTeacherIdSuccess } from "../../slices/DemoCourse/getAllDemoCourseByTeacherId"
import { DemoCourseApi } from "../../../utils/BaseUrl"


const getAllDemoCourseByTeacherId= async(id,dispatch)=>{
    console.log("id",id)
    dispatch(getAllDemoCourseByTeacherIdStart())
    try {
        const res= await axios.get(DemoCourseApi+"teacher/"+id)
        dispatch(getAllDemoCourseByTeacherIdSuccess(res.data))
    } catch (error) {
        dispatch(getAllDemoCourseByTeacherIdFailure(error))
        console.log(error)
    }
}

export default getAllDemoCourseByTeacherId