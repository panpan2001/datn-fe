import { toast } from "react-toastify"
import { addLinkVideoCourseFailure, addLinkVideoCourseStart, addLinkVideoCourseSuccess } from "../../slices/Course/addLinkVideoCourse"
import { CourseApi } from "../../../utils/BaseUrl"
import { getCourseByIdSuccess } from "../../slices/Course/getCourseById"

const addLinkVideoCourse= async (link,delLinkVideo,account_id,course_id,dispatch,axiosJWTLinkVideo, accessToken) => {
    dispatch(addLinkVideoCourseStart())
    try {
        // link, account_id,data._id,dispatch,axiosJWTLinkVideo, user.accessToken
        const res = await axiosJWTLinkVideo.patch(CourseApi+'linkVideo/'+ course_id,{
            link_video:link,
            del_link_video:delLinkVideo
        },  {
            headers:{
            token:`Bearer ${accessToken}`,
            account_id:account_id
        }})
        dispatch(getCourseByIdSuccess(res.data))
        toast.success("Thêm link video thành công",{
            position:"bottom-right"
        })
    }catch (error) {
        dispatch(addLinkVideoCourseFailure(error))
        console.log(error)
        toast.error("Khong the them link video",{
            position:"bottom-right"
        })
    }
}
export default addLinkVideoCourse