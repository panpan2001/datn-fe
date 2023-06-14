import axios from "axios"
import { getAllStudentsFailed, getAllStudentsStart, getAllStudentsSuccess } from "../../slices/Student/getAllStudentSlice"
import { StudentApi } from "../../../utils/BaseUrl"
import { DEFAULT_VERSION } from "redux-persist"

const getAllStudents= async(dispatch)=>{
    dispatch(getAllStudentsStart())
    try {
        const res= await axios.get(StudentApi)
        dispatch(getAllStudentsSuccess(res.data))
    } catch (error) {
        dispatch(getAllStudentsFailed(error))
        console.log(error)
    }
}

export default getAllStudents