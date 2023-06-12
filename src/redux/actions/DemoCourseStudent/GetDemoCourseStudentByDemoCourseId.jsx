import axios from "axios"
import { getDemoCourseStudentByCourseIdFailure, getDemoCourseStudentByCourseIdStart, getDemoCourseStudentByCourseIdSuccess } from "../../slices/DemoCourseStudent/getDemoCourseStudentByCourseId"
import { DemoCourseStudentApi } from "../../../utils/BaseUrl"


const getDemoCourseStudentByDemoCourseId = async(id,dispatch)=>{
    console.log("id",{id})
    dispatch(getDemoCourseStudentByCourseIdStart())
    try {
        const res = await axios.get(DemoCourseStudentApi+ 'demoCourse/'+id)
        dispatch(getDemoCourseStudentByCourseIdSuccess(res.data))
    } catch (error) {
        dispatch(getDemoCourseStudentByCourseIdFailure(error))
        console.log(error)
    }
}

export default getDemoCourseStudentByDemoCourseId