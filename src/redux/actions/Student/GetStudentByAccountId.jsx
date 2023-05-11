import { toast } from "react-toastify"
import { StudentApi } from "../../../utils/BaseUrl"
import { getStudentByAccountIdStart , getStudentByAccountIdSuccess, getStudentByAccountIdFailure} from "../../slices/Student/getStudentByAccountIdSlice"


const getStudentByAccountId = async ( dispatch, id,account_id,axiosJWT,accessToken) => {
    dispatch(getStudentByAccountIdStart())
    try {
        const res= await axiosJWT.get(StudentApi+'/account/'+id,account_id,{
            withCredentials: true,
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(getStudentByAccountIdSuccess(res.data))
        
    } catch (error) {
        dispatch(getStudentByAccountIdFailure(error))
    }
}

export default getStudentByAccountId