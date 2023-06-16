import { CourseApi } from "../../../utils/BaseUrl"
import { adminDelCourseFailure, adminDelCourseStart } from "../../slices/Course/adminDelCourse"
import { getAllCoursesSuccess } from "../../slices/Course/getAllCourse"
import { getAllDemoCoursesSuccess } from "../../slices/DemoCourse/getAllDemoCourseSlice"


const adminDelCourse= async(id,account_id,dispatch,axiosJWTCourse,accessToken)=>{
    dispatch(adminDelCourseStart())
    try {
        const res=await axiosJWTCourse.delete(CourseApi+'/admin/'+id,{
            headers:{
                token:`Bearer ${accessToken}`,
                account_id:account_id
            }
        })
        console.log("admin del course action success",res.data)
        dispatch(getAllCoursesSuccess(res.data.newcourses))
        console.log("res.data.newcourses",res.data.newcourses)
        dispatch(getAllDemoCoursesSuccess(res.data.newDemoCourses))
        console.log("res.data.newDemoCourses",res.data.newDemoCourses)
    } catch (error) {
        dispatch(adminDelCourseFailure(error))
        console.log(error)
    }
}
export default adminDelCourse