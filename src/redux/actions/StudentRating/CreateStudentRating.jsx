import { toast } from "react-toastify"
import { createStudentRatingFailure, createStudentRatingStart, createStudentRatingSuccess } from "../../slices/StudentRating/createStudentRating"
import { StudentRatingApi } from "../../../utils/BaseUrl"

const createStudentRating= async( account_id,value,dispatch,axiosJWT,accessToken,navigate)=>{
dispatch(createStudentRatingStart())
console.log({value})
try {
    const res= await axiosJWT.post(StudentRatingApi,value,{
        headers:{
            token: `Bearer ${accessToken}`,
            account_id: account_id
        }
    })
    dispatch(createStudentRatingSuccess(res.data))
    toast.success("Đã đánh giá thành công!",{
        position: "bottom-right",
    })
    navigate(`/profile/${account_id}/judgeTeacher`)
} catch (error) {
    dispatch(createStudentRatingFailure(error))
    console.log(error)
    toast.error(error.response.data,{
        position: "bottom-right",
        
    })
}
}

export default createStudentRating