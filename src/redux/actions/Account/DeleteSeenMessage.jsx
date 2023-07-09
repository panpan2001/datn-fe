import { toast } from "react-toastify"
import { AccountApi } from "../../../utils/BaseUrl"
import { deleteSeenMessageFailure, deleteSeenMessageStart } from "../../slices/Account/deleteSeenMessageSlice"
import { getStudentByAccountIdSuccess } from "../../slices/Student/getStudentByAccountIdSlice"
import { getTeacherByAccountIdSuccess } from "../../slices/Teacher/GetTeacherByAccountIdSlice"

const deleteSeenMessage=async (item, dispatch, account_id, axiosJWT,accessToken,flag)=>{
    console.log("deleteSeenMessage",{item, dispatch, account_id, axiosJWT,accessToken,flag})
    dispatch(deleteSeenMessageStart())
    try {
        const res= await axiosJWT.patch(AccountApi+"deleteSeenMessage/"+account_id,{
            seenMessage:item},
            {
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        if(flag==1){
            dispatch(getStudentByAccountIdSuccess(res.data))
        }
        else {
            dispatch(getTeacherByAccountIdSuccess(res.data))
        }
        console.log(res.data)
    } catch (error) {
        console.log(error)
        toast.error('deleteSeenMessage failed !', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        dispatch(deleteSeenMessageFailure(error))
    }
}
export default deleteSeenMessage