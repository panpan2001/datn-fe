import { toast } from "react-toastify"
import { createCourseFailure, createCourseStart, createCourseSuccess } from "../../slices/Course/createCourse"
import { CourseApi } from "../../../utils/BaseUrl"
import updateTeacher from "../Teacher/UpdateTeacher"

const createCourse=async(axiosJWT,accessToken, value,dispatch,navigate)=>{
    dispatch(createCourseStart())
    try {
        const res= await axiosJWT.post(CourseApi,value,
            {
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(createCourseSuccess(res.data))
        console.log("action create course: ",res.data)
        // updateTeacher(value.id_teacher,res.data._id,dispatch,axiosJWT,accessToken)
        navigate('/profile/teacherClass')
        toast.success('Tạo lớp học thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        return res.data._id
    } catch (error) {
        dispatch(createCourseFailure())
        console.log(error)
        toast.error("Tạo lớp học thất bại",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
        
    }
}

export default createCourse