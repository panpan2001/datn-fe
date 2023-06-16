import { DemoCourseApi } from "../../../utils/BaseUrl"
import { adminDelDemoCourseFailure, adminDelDemoCourseStart } from "../../slices/DemoCourse/adminDelDemoCourse"
import { getAllDemoCoursesSuccess } from "../../slices/DemoCourse/getAllDemoCourseSlice"

const adminDelDemoCourse = async(id,account_id,dispatch,axiosJWTDemoCourse,accessToken) => {
    dispatch(adminDelDemoCourseStart())
    try {
        const res= await axiosJWTDemoCourse.delete(DemoCourseApi+"/admin/"+ id,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(getAllDemoCoursesSuccess(res.data))
        console.log("admin del demo course action success",id)
    } catch (error) {
        dispatch(adminDelDemoCourseFailure(error))
        console.log(error)
    }
}
export default adminDelDemoCourse