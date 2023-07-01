import { toast } from "react-toastify"
import { DemoCourseApi } from "../../../utils/BaseUrl"
import { getDemoCourseByIdSuccess } from "../../slices/DemoCourse/getDemoCourseById"
import { sendDemoCourseReportMessageFail, sendDemoCourseReportMessageStart } from "../../slices/DemoCourse/sendDemoCourseReportMessageSice"

const sendDemoCourseReportMessage= async(id,value,account_id,dispatch,axiosJWT,accessToken)=>{
    dispatch(sendDemoCourseReportMessageStart())
    try {
        const res= await axiosJWT.patch(DemoCourseApi+"report/"+ id,value,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(getDemoCourseByIdSuccess(res.data))
        toast.success("Gửi cảnh báo thành công", {
            position: toast.POSITION.TOP_RIGHT
        })
    } catch (error) {
        dispatch(sendDemoCourseReportMessageFail(error))
        console.log(error)
        toast.error(error.response.data, {
            position: toast.POSITION.TOP_RIGHT
        })
}
}

export default sendDemoCourseReportMessage