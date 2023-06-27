import { toast } from "react-toastify"
import { DemoCourseApi } from "../../../utils/BaseUrl"
import { addVideoDemoCourseFailure, addVideoDemoCourseStart } from "../../slices/DemoCourse/addVideoDemoCourse"
import { getDemoCourseByIdSuccess } from "../../slices/DemoCourse/getDemoCourseById"

const addLinkVideoDemoCourse= async (link, delLinkVideo, account_id, course_id, dispatch, axiosJWTLinkVideo, accessToken) => {
    dispatch(addVideoDemoCourseStart())
    try {
        console.log({link, delLinkVideo, account_id, course_id, dispatch, axiosJWTLinkVideo, accessToken})
        // link, account_id,data._id,dispatch,axiosJWTLinkVideo, user.accessToken
        const res = await axiosJWTLinkVideo.patch(DemoCourseApi+'linkVideo/'+ course_id,{
            link_video:link,
            del_link_video:delLinkVideo,
            type:"Video"
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
        dispatch(addVideoDemoCourseFailure(error))
        console.log(error)
        toast.error("Khong the them link video",{
            position:"bottom-right"
        })
    }
}
export default addLinkVideoDemoCourse