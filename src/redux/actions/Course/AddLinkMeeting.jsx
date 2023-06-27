import { toast } from "react-toastify"
import { CourseApi } from "../../../utils/BaseUrl"
import { addLinkMeetingFailure, addLinkMeetingStart } from "../../slices/Course/addLinkMeetingSlice"
import { getCourseByIdSuccess } from "../../slices/Course/getCourseById"

const addLinkMeeting= async (link, delLinkVideo, account_id, course_id, dispatch, axiosJWTLinkVideo, accessToken) => {
    dispatch(addLinkMeetingStart())
    try {
        // console.log({link, delLinkVideo, account_id, course_id, dispatch, axiosJWTLinkVideo, accessToken})
        // link, account_id,data._id,dispatch,axiosJWTLinkVideo, user.accessToken
        const res = await axiosJWTLinkVideo.patch(CourseApi+'linkVideo/'+ course_id,{
            link_video:link,
            del_link_video:delLinkVideo,
            type:"Meeting"
        },  {
            headers:{
            token:`Bearer ${accessToken}`,
            account_id:account_id
        }})
        dispatch(getCourseByIdSuccess(res.data))
        toast.success("Thêm link meeting thành công",{
            position:"bottom-right"
        })
    }catch (error) {
        dispatch(addLinkMeetingFailure(error))
        console.log(error)
        toast.error("Khong the them link meeting",{
})
    }
}
export default addLinkMeeting