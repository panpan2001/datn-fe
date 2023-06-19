import axios from "axios"
import { StudentRatingApi } from "../../../utils/BaseUrl"
import { getStudentRatingFailure, getStudentRatingStart, getStudentRatingSuccess } from "../../slices/StudentRating/getAllStudentRating"

const getStudentRating = async (dispatch)=>{
    console.log("getStudentRating")
    dispatch(getStudentRatingStart())
    try {
        const res= await axios.get(StudentRatingApi)
        dispatch(getStudentRatingSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        console.log(error)
        dispatch(getStudentRatingFailure(error))
        
    }

}

export default getStudentRating