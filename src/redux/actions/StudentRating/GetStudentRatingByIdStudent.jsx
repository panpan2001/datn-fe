import { StudentRatingApi } from "../../../utils/BaseUrl"
import { getStudentRatingByStudentIdFailure, getStudentRatingByStudentIdStart, getStudentRatingByStudentIdSuccess } from "../../slices/StudentRating/getStudentRatingByStudentIdSlice"

const getStudentRatingByStudentId= async (student_id,account_id,dispatch,axiosJWT,accessToken)=>{
    dispatch(getStudentRatingByStudentIdStart())
    try {
        const res= await axiosJWT.get(StudentRatingApi+"student/"+student_id,{
            headers:{
                token: `Bearer ${accessToken}`,
                account_id:account_id
            }
        })
        dispatch(getStudentRatingByStudentIdSuccess(res.data))
    } catch (error) {
        console.log(error)
        dispatch(getStudentRatingByStudentIdFailure(error))
    }
}
export default getStudentRatingByStudentId