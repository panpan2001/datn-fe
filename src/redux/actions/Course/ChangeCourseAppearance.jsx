import { toast } from "react-toastify"
import { changeCourseAppearanceFailure, changeCourseAppearanceStart } from "../../slices/Course/changeCourseAppearance"
import { CourseApi } from "../../../utils/BaseUrl"

const changeCourseAppearance= async (id,hiddenStatus, account_id, dispatch, axiosJWTDemoCourse, accessToken,successReducer)=>{
    dispatch(changeCourseAppearanceStart())
    try {
        const res= await axiosJWTDemoCourse.patch(CourseApi+"changeAppearance/"+ id , hiddenStatus,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(successReducer(res.data))
        toast.success(`${hiddenStatus.isHidden==false? "Ẩn":"Hiện"} khoả học thành công`, {
            position: toast.POSITION.TOP_RIGHT
        })
    } catch (error) {
        console.log(error)
        dispatch(changeCourseAppearanceFailure(error))
        toast.error(`${hiddenStatus==false? "Ẩn":"Hiện"} khoả học thất bại`, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export default changeCourseAppearance