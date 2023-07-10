import { toast } from "react-toastify"
import { getCourseByIdFailure, getCourseByIdStart, getCourseByIdSuccess } from "../../slices/Course/getCourseById"
import { CourseApi } from "../../../utils/BaseUrl"
import { authToken } from "../../../data"
import getAllCourseByIdTeacher from "./GetAllCourseByIdTeacher"
import { getAllCourseByIdTeacherSuccess } from "../../slices/Course/getAllCourseByIdTeacher"

const saveLinkVideoCourse= async(meetingId,idClass,account_id, accessToken, axiosJWT, dispatch)=>{
dispatch(getCourseByIdStart())
try {
    const res= await  axiosJWT.patch(CourseApi+'saveLinkVideoRecord/'+idClass,{
        roomId:meetingId,
        authToken: authToken
    },{
        headers:{
            token: `Bearer ${accessToken}`,
            account_id: account_id
        }
    })
    dispatch(getAllCourseByIdTeacherSuccess(res.data))
    toast.success("Thêm link video  thành công ",{
      position: toast.POSITION.TOP_RIGHT
    })
} catch (error) {
    console.log(error)
    dispatch(getCourseByIdFailure(error))
    toast.error("Thêm link video không thành công",{
      position: toast.POSITION.TOP_RIGHT
    })
}
}

export default saveLinkVideoCourse