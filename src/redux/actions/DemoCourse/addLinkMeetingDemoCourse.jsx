import { toast } from "react-toastify"
import { DemoCourseApi } from "../../../utils/BaseUrl"
import { addLinkMeetingDemoCourseFailure, addLinkMeetingDemoCourseStart } from "../../slices/DemoCourse/addLinkMeetingDemoCourseSlice"
import { getDemoCourseByIdSuccess } from "../../slices/DemoCourse/getDemoCourseById"

const addLinkMeetingDemoCourse= async (link, delLinkVideo, account_id, course_id, dispatch, axiosJWTLinkVideo, accessToken) => {
    dispatch(addLinkMeetingDemoCourseStart())
    try {
        console.log({link, delLinkVideo, account_id, course_id, dispatch, axiosJWTLinkVideo, accessToken})
        // link, account_id,data._id,dispatch,axiosJWTLinkVideo, user.accessToken
        const res = await axiosJWTLinkVideo.patch(DemoCourseApi+'linkVideo/'+ course_id,{
            link_video:link,
            del_link_video:delLinkVideo,
            type:"Meeting"
        },  {
            headers:{
            token:`Bearer ${accessToken}`,
            account_id:account_id
        }})
        dispatch(getDemoCourseByIdSuccess(res.data))
        toast.success("Thêm link video thành công",{
            position:"bottom-right"
        })
    }catch (error) {
        dispatch(addLinkMeetingDemoCourseFailure(error))
        console.log(error)
        toast.error("Khong the them link video",{
            position:"bottom-right"
        })
}
}
export default addLinkMeetingDemoCourse