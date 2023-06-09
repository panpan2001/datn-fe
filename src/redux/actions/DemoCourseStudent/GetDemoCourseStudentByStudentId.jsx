import { DemoCourseStudentApi } from "../../../utils/BaseUrl"
import { getDemoCourseByStudentIdFailure, getDemoCourseByStudentIdStart, getDemoCourseByStudentIdSuccess } from "../../slices/DemoCourseStudent/getDemoCourseByStudentId"


const getDemoCourseByStudentId = async(id,dispatch,accessToken,axiosJWT)=>{
    dispatch(getDemoCourseByStudentIdStart())

    try {
        const res= await axiosJWT.get(DemoCourseStudentApi+ 'student/'+id,{
            headers:{
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(getDemoCourseByStudentIdSuccess(res.data))

    } catch (error) {
        dispatch(getDemoCourseByStudentIdFailure())
        console.log(error)
    }
}

export default getDemoCourseByStudentId