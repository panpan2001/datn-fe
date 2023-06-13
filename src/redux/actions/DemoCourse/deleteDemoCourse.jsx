import { DemoCourseApi } from "../../../utils/BaseUrl"
import { deleteDemoCourseFailure, deleteDemoCourseStart, deleteDemoCourseSuccess } from "../../slices/DemoCourse/deleteDemoCourse"
import { getAllDemoCourseByTeacherIdSuccess } from "../../slices/DemoCourse/getAllDemoCourseByTeacherId"


const deleteDemoCourse= async (demo_course_id, account_id, dispatch, axiosJWT, accessToken)=>{
    dispatch(deleteDemoCourseStart())
    try {
        const res= await axiosJWT.delete(DemoCourseApi+ demo_course_id, {
            headers: {
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        // console.log("res data get all studen course action",res.data)
        dispatch(getAllDemoCourseByTeacherIdSuccess(res.data))
    } catch (error) {
        dispatch(deleteDemoCourseFailure(error))
        console.log(error)
    }
}

export default deleteDemoCourse