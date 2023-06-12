import axios from "axios"
import { getDemoCourseByIdFailure, getDemoCourseByIdStart, getDemoCourseByIdSuccess } from "../../slices/DemoCourse/getDemoCourseById"
import { DemoCourseApi } from "../../../utils/BaseUrl"


const getDemoCourseById= async(id,dispatch)=>{
    dispatch(getDemoCourseByIdStart())
    try {
        const res= await axios.get(DemoCourseApi+id)
        dispatch(getDemoCourseByIdSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        dispatch(getDemoCourseByIdFailure(error))
        console.log(error)
    }
}
export default getDemoCourseById