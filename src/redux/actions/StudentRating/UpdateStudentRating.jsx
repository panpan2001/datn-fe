import { toast } from "react-toastify"
import { updateStudentRatingFailure, updateStudentRatingStart, updateStudentRatingSuccess } from "../../slices/StudentRating/updateStudentRatingSlice"
import { StudentRatingApi } from "../../../utils/BaseUrl"


const UpdateStudentRating= async(id,account_id,value,axiosJWT,accessToken,dispatch,navigate)=>{
    dispatch(updateStudentRatingStart())
    try {
        const res= await axiosJWT.put(StudentRatingApi+id,value,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(updateStudentRatingSuccess(res.data))
        toast.success("Cập nhật thành công",{
            position: "bottom-right",
        })
        navigate(`/profile/${account_id}/judgeTeacher`)
    } catch (error) {
        
        console.log(error)
        dispatch(updateStudentRatingFailure(error))
        toast.error(error.response.data,{
            position: "bottom-right",
        })
    }
}

export default UpdateStudentRating