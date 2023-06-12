import axios from "axios"
import { getAllDemoCourseByCourseIdFailure, getAllDemoCourseByCourseIdStart, getAllDemoCourseByCourseIdSuccess } from "../../slices/DemoCourse/getAllDemoCourseByCourseId"
import { DemoCourseApi } from "../../../utils/BaseUrl"

const getAllDemoCourseByCourseId= async(id,dispatch)=>{
    dispatch(getAllDemoCourseByCourseIdStart())
    try {
        const res= await axios.get(DemoCourseApi+"course/"+id)
        dispatch(getAllDemoCourseByCourseIdSuccess(res.data))
        // console.log('demo class:', res.data)
    } catch (error) {
        dispatch(getAllDemoCourseByCourseIdFailure(error))
        console.log(error)
    }
}
export default getAllDemoCourseByCourseId