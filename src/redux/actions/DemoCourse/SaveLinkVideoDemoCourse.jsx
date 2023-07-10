import { toast } from "react-toastify"
import { getCourseByIdStart, getCourseByIdSuccess } from "../../slices/Course/getCourseById"
import { CourseApi, DemoCourseApi } from "../../../utils/BaseUrl"
import { authToken } from "../../../data"
import { getDemoCourseByIdFailure, getDemoCourseByIdSuccess } from "../../slices/DemoCourse/getDemoCourseById"
import { getAllDemoCourseByTeacherIdSuccess } from "../../slices/DemoCourse/getAllDemoCourseByTeacherId"

const saveLinkVideoDemoCourse= async(meetingId,idClass,account_id, accessToken, axiosJWT, dispatch)=>{
dispatch(getDemoCourseByIdSuccess())
try {
    const res= await  axiosJWT.patch(DemoCourseApi+'saveLinkVideoRecord/'+idClass,{
        roomId:meetingId,
        authToken: authToken
    },{
        headers:{
            token: `Bearer ${accessToken}`,
            account_id: account_id
        }
    })
    dispatch(getAllDemoCourseByTeacherIdSuccess(res.data))
    toast.success("Thêm link video  thành công ",{
      position: toast.POSITION.TOP_RIGHT
    })
} catch (error) {
    dispatch(getDemoCourseByIdFailure(error))
    console.log(error)
    toast.error("Thêm link video không thành công",{
      position: toast.POSITION.TOP_RIGHT
    })
}
}

export default saveLinkVideoDemoCourse