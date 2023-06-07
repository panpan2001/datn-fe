import { DemoCourseStudentApi } from "../../../utils/BaseUrl"
import { cancelRegisterDemoCourseFailure, cancelRegisterDemoCourseStart, cancelRegisterDemoCourseSuccess } from "../../slices/DemoCourse/cancelRegisterDemoCourse"

const cancelRegisterDemoCourse= async(id, dispatch, axiosJWT,accessToken)=>{
  dispatch(cancelRegisterDemoCourseStart())
    try {
        const res= await axiosJWT.delete(DemoCourseStudentApi+id,{
            headers:{
                token: `Bearer ${accessToken}`
            }
        })

        dispatch(cancelRegisterDemoCourseSuccess(res.data))

    } catch (error) {
        dispatch(cancelRegisterDemoCourseFailure(error))
        console.log(error)
    }
}
export default cancelRegisterDemoCourse