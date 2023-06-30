import { toast } from "react-toastify"
import { DemoCourseApi, DemoCourseStudentApi } from "../../../utils/BaseUrl"
import { changeDemoCourseAppearanceFailure, changeDemoCourseAppearanceStart } from "../../slices/DemoCourseStudent/changeDemoCourseAppearanceSlice"

const changeDemoCourseAppearance= async (id,hiddenStatus,account_id,dispatch,axiosJWT,accessToken,successReducer)=>{
    dispatch(changeDemoCourseAppearanceStart())
    try {
        const res= await axiosJWT.patch(DemoCourseApi +"changeAppearance/"+id,hiddenStatus,{
            headers:{
                token:`Bearer ${accessToken}`,
                account_id:account_id
            }
        })
        dispatch(successReducer(res.data))
        toast.success(`${hiddenStatus.isHidden==false? "Ẩn":"Hiện"} khoả học thành công`, {
            position: toast.POSITION.TOP_RIGHT
        })
    } catch (error) {
        console.log(error)
        dispatch(changeDemoCourseAppearanceFailure(error))
        toast.error(error.response.data, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export default changeDemoCourseAppearance