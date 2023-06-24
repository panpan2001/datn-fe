import axios from "axios"
import { StudentRatingApi } from "../../../utils/BaseUrl"
import { getStudentRatingByStudentIdFailure, getStudentRatingByStudentIdStart } from "../../slices/StudentRating/getStudentRatingByStudentIdSlice"
import { getStudentRatingByIdSuccess } from "../../slices/StudentRating/géttudentratingByIdSlice"

const getStudentRatingById = async(id,dispatch)=>{
    dispatch(getStudentRatingByStudentIdStart())
    try {
        const res= await axios.get(StudentRatingApi + id)
        dispatch(getStudentRatingByIdSuccess(res.data))
    } catch (error) {
        dispatch(getStudentRatingByStudentIdFailure(error))
        console.log(error)
    }
}
export default getStudentRatingById