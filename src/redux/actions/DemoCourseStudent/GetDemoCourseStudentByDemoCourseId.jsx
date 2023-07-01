import axios from "axios"
import { DemoCourseStudentApi } from "../../../utils/BaseUrl"
import { getDemoCourseStudentByDemoCourseIdFailure, getDemoCourseStudentByDemoCourseIdStart, getDemoCourseStudentByDemoCourseIdSuccess } from "../../slices/DemoCourseStudent/getDemoCourseStudentByCourseId"


const getDemoCourseStudentByDemoCourseId = async(id,dispatch)=>{
    // console.log("id",{id})
    dispatch(getDemoCourseStudentByDemoCourseIdStart())
    try {
        const res = await axios.get(DemoCourseStudentApi+ 'demoCourse/'+id)
        dispatch(getDemoCourseStudentByDemoCourseIdSuccess(res.data))
        console.log("demo course student of: ",id,res.data)
    } catch (error) {
        dispatch(getDemoCourseStudentByDemoCourseIdFailure(error))
        console.log(error)
    }
}

export default getDemoCourseStudentByDemoCourseId