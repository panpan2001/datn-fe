import { toast } from "react-toastify"
import { StudentApi } from "../../../utils/BaseUrl"
import { getStudentByIdStart, getStudentByIdSuccess, getStudentByIdFailure } from "../../slices/Student/getStudentByIdSlice"

const getStudentById = async ( dispatch, id) => {
    dispatch(getStudentByIdStart())
    try {
        const res= await axios.get(StudentApi+id)
        dispatch(getStudentByIdSuccess(res.data))
        
    } catch (error) {
        dispatch(getStudentByIdFailure(error))
    }
}

export default getStudentById