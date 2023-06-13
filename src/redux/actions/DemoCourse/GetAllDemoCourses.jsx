import axios from "axios"
import { DemoCourseApi } from "../../../utils/BaseUrl"
import { getAllDemoCoursesFailure, getAllDemoCoursesStart, getAllDemoCoursesSuccess } from "../../slices/DemoCourse/getAllDemoCourseSlice"

const getAllDemoCourses= async(dispatch)=>{
    dispatch(getAllDemoCoursesStart())
    try {
        const res= await axios.get(DemoCourseApi)
        // console.log("res data get all studen course action",res.data)
        dispatch(getAllDemoCoursesSuccess(res.data))
        console.log("res demo",res.data)
    } catch (error) {
        dispatch(getAllDemoCoursesFailure(error))
        console.log(error)
    }
}

export default getAllDemoCourses