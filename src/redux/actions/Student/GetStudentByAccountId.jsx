import { toast } from "react-toastify"
import { StudentApi } from "../../../utils/BaseUrl"
import { getStudentByAccountIdStart , getStudentByAccountIdSuccess, getStudentByAccountIdFailure} from "../../slices/Student/getStudentByAccountIdSlice"


const getStudentByAccountId = async ( dispatch,account_id,axiosJWT,accessToken) => {
    
    dispatch(getStudentByAccountIdStart())
    try {
        const res= await axiosJWT.get(StudentApi+'account/'+account_id,account_id,{
            withCredentials: true,
            headers:{token: `Bearer ${accessToken}`}
        })
        console.table("student info ",res.data)
        dispatch(getStudentByAccountIdSuccess(res.data))
       
    } catch (error) {
        dispatch(getStudentByAccountIdFailure(error))
        // toast.error('Ôi lỗi rồi !', {
        //     position: toast.POSITION.BOTTOM_RIGHT
        // });
    }
}

export default getStudentByAccountId