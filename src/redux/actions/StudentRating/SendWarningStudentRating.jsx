import { toast } from "react-toastify"
import { StudentRatingApi } from "../../../utils/BaseUrl"
import { updateStudentRatingFailure, updateStudentRatingStart, updateStudentRatingSuccess } from "../../slices/StudentRating/updateStudentRatingSlice"
import { getStudentRatingByIdSuccess } from "../../slices/StudentRating/géttudentratingByIdSlice"

const sendWarningStudentRating=async(id,account_id,value,dispatch,axiosJWT,accessToken)=>{
    dispatch(updateStudentRatingStart())
    console.log({value})
    try {
        const res= await axiosJWT.patch(StudentRatingApi+'sendWarning/'+id,value,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(getStudentRatingByIdSuccess(res.data))
        //         dispatch(getStudentRatingSuccess(res.data))

        // dispatch(updateStudentRatingSuccess(res.data))
        console.log(res.data)
        
    } catch (error) {
        dispatch(updateStudentRatingFailure(error))
        console.log(error)
        toast.error(error.response.data,{
            position: "bottom-right",
        })
    }

}

export default sendWarningStudentRating