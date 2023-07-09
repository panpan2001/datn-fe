import { toast } from "react-toastify";
import { DemoCourseApi } from "../../../utils/BaseUrl";
import { deleteDemoCourseReportFailure, deleteDemoCourseReportStart } from "../../slices/DemoCourse/deleteDemoCourseReportSlice";
import { getAllDemoCourseByTeacherIdSuccess } from "../../slices/DemoCourse/getAllDemoCourseByTeacherId";

const deleteDemoCourseReport = async (id, dispatch, account_id, axiosJWT, accessToken, flag,teacherId)=>{
    // console.log("deleteDemoCourseReport",{id, dispatch, account_id, axiosJWT,accessToken,flag})
    dispatch(deleteDemoCourseReportStart())
    try {
        const res= await axiosJWT.patch(DemoCourseApi+"deleteDemoCourseReport/"+id,{
            id_teacher:teacherId
        },{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(getAllDemoCourseByTeacherIdSuccess(res.data))
    }
    catch (error) {
        dispatch(deleteDemoCourseReportFailure(error))
        toast.error(error.response.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}

export default deleteDemoCourseReport