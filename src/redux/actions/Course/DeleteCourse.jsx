import { toast } from "react-toastify"
import { CourseApi } from "../../../utils/BaseUrl"
import { deleteCourseFailure, deleteCourseStart, deleteCourseSuccess } from "../../slices/Course/deleteCourse"


const deleteCourse= async (id_course,account_id,dispatch,axiosJWT,accessToken)=>{
    dispatch(deleteCourseStart())
    try {
        const res= await axiosJWT.delete(CourseApi+ id_course,
        {
            headers:{
                token:`Bearer ${accessToken}`,
                account_id:account_id
            }
        }
        )
        dispatch(deleteCourseSuccess(res.data))
    } catch (error) {
        dispatch(deleteCourseFailure())
        console.log(error)
        toast.error(error.response.data,{
            position: "bottom-right",
        })

    }
}
export default deleteCourse