import { toast } from "react-toastify"
import { DemoCourseStudentApi } from "../../../utils/BaseUrl"
import { reportDemoCourseStudentFail, reportDemoCourseStudentStart, reportDemoCourseStudentSuccess } from "../../slices/DemoCourseStudent/reportDemoCourseStudent"
import { getDemoCourseByStudentIdSuccess } from "../../slices/DemoCourseStudent/getDemoCourseByStudentId"

const reportDemoCourseStudent= async (id,value,dispatch,accessToken,axiosJWT,account_id)=>{
    dispatch(reportDemoCourseStudentStart())
    try {
        const res= await axiosJWT.patch(DemoCourseStudentApi +"report/"+ id,value,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        
        dispatch(reportDemoCourseStudentSuccess(res.data))
        toast.success("Gửi cảnh báo thành công!", {
            position: "top-right",
        })
    } catch (error) {
        dispatch(reportDemoCourseStudentFail())
        toast.error("Gửi cảnh báo thất bại!", {
            position: "top-right",
        })
    }
}

export default reportDemoCourseStudent