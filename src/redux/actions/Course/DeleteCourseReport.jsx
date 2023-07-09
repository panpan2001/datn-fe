import { toast } from "react-toastify"
import { CourseApi } from "../../../utils/BaseUrl"
import { deleteCourseReportFailure, deleteCourseReportStart } from "../../slices/Course/deleteCourseReportSlice"
import { getAllCourseStudentSuccess } from "../../slices/CourseStudent/getAllCourseStudent"
import { getAllCourseByIdTeacherSuccess } from "../../slices/Course/getAllCourseByIdTeacher"

const deleteCourseReport = async (id, dispatch, account_id, axiosJWT, accessToken, flag,teacherId)=>{
    // console.log("deleteDemoCourseReport",{id, dispatch, account_id, axiosJWT,accessToken,flag})
    dispatch(deleteCourseReportStart())
    try {
        const res= await axiosJWT.patch(CourseApi+"deleteCourseReport/"+id,{
            id_teacher:teacherId
        },{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(getAllCourseByIdTeacherSuccess(res.data))
    }
    catch (error) {
        dispatch(deleteCourseReportFailure(error))
        toast.error("deleteCourseReport failed !", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}

export default deleteCourseReport