import { toast } from "react-toastify"
import { DemoCourseStudentApi } from "../../../utils/BaseUrl"
import { cancelRegisterDemoCourseFailure, cancelRegisterDemoCourseStart, cancelRegisterDemoCourseSuccess } from "../../slices/DemoCourseStudent/cancelRegisterDemoCourse"

const cancelRegisterDemoCourse= async(id, dispatch, axiosJWT,accessToken,navigate)=>{
    console.log("olala")
  dispatch(cancelRegisterDemoCourseStart())
    try {
        const res= await axiosJWT.delete(DemoCourseStudentApi+id,{
            headers:{
                token: `Bearer ${accessToken}`
            }
        })

        dispatch(cancelRegisterDemoCourseSuccess(res.data))
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