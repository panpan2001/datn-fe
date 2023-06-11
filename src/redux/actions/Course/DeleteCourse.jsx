import { toast } from "react-toastify"
import { CourseApi } from "../../../utils/BaseUrl"
import { deleteCourseFailure, deleteCourseStart, deleteCourseSuccess } from "../../slices/Course/deleteCourse"
import { getAllCourseByIdTeacherSuccess } from "../../slices/Course/getAllCourseByIdTeacher"


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
        // dispatch(deleteCourseSuccess(res.data))
dispatch(getAllCourseByIdTeacherSuccess(res.data))
    } catch (error) {
        dispatch(deleteCourseFailure())
        console.log(error)
        toast.error(error.response.data,{
            position: "bottom-right",
        })

    }
}
export default deleteCourse
// 2 cach: 1 cach xoa roi gui lai danh sach course sau khi xoa roi update 
// trong dispatch get course by teacher id
//cach 2: lm thu xem nhu ong hd del account xem dc ko 