import axios from "axios"
import {  DemoCourseStudentApi } from "../../../utils/BaseUrl"
import { getAllDemoCourseStudentFailure, getAllDemoCourseStudentStart, getAllDemoCourseStudentSuccess } from "../../slices/DemoCourseStudent/getAllDemoCourseStudent"


const getAllDemoCourseStudent= async(dispatch)=>{
    dispatch(getAllDemoCourseStudentStart())
    try {
        const res= await axios.get(DemoCourseStudentApi)
        dispatch(getAllDemoCourseStudentSuccess(res.data))
    } catch (error) {
        dispatch(getAllDemoCourseStudentFailure(error))
        console.log(error)
    }
}

export default getAllDemoCourseStudent