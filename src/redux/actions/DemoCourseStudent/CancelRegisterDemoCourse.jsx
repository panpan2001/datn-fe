import { toast } from "react-toastify"
import { DemoCourseStudentApi } from "../../../utils/BaseUrl"
import { cancelRegisterDemoCourseFailure, cancelRegisterDemoCourseStart, cancelRegisterDemoCourseSuccess } from "../../slices/DemoCourseStudent/cancelRegisterDemoCourse"
import { getDemoCourseByStudentIdSuccess } from "../../slices/DemoCourseStudent/getDemoCourseByStudentId"

const cancelRegisterDemoCourse= async(id, dispatch, axiosJWT,accessToken,navigate)=>{
    // console.log("olala cancel demo course action :",axiosJWT)
  dispatch(cancelRegisterDemoCourseStart())
    try {
        const res= await axiosJWT.delete(DemoCourseStudentApi+id,{
            headers:{
                token: `Bearer ${accessToken}`
            }
        })

        dispatch(getDemoCourseByStudentIdSuccess(res.data))
        navigate('/profile/studentClass')
    } catch (error) {
        dispatch(cancelRegisterDemoCourseFailure(error))
        console.log(error)
        toast.error("Lỗi hệ thống! Không hủy được khóa học",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}
export default cancelRegisterDemoCourse