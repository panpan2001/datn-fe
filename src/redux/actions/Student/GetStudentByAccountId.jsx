import { toast } from "react-toastify"
import { StudentApi } from "../../../utils/BaseUrl"
import { getStudentByAccountIdStart , getStudentByAccountIdSuccess, getStudentByAccountIdFailure} from "../../slices/Student/getStudentByAccountIdSlice"
import axios from "axios"


const getStudentByAccountId = async ( dispatch,account_id) => {
    console.log("tao dang get may do ")
    dispatch(getStudentByAccountIdStart())
    try {
       
        const res= await axios.get(StudentApi+'account/'+account_id)
        console.table("student info ",res.data)
        dispatch(getStudentByAccountIdSuccess(res.data))
       
    } catch (error) {
        dispatch(getStudentByAccountIdFailure(error))
        toast.error('getStudentByAccountId failed !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}

export default getStudentByAccountId