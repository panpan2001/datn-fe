import { toast } from "react-toastify";
import { changeSeenMessageFailure, changeSeenMessageStart, changeSeenMessageSuccess } from "../../slices/Account/changeSeenMeassge"
import { AccountApi } from "../../../utils/BaseUrl";
import { getAccountByIdSuccess } from "../../slices/Account/getAccountByIdSlice";
import { getStudentByAccountIdSuccess } from "../../slices/Student/getStudentByAccountIdSlice";
import { getTeacherByAccountIdSuccess } from "../../slices/Teacher/GetTeacherByAccountIdSlice";

const changeSeenMessage = async (value, dispatch, account_id, axiosJWT,accessToken,flag) => {
    dispatch(changeSeenMessageStart())
    try {
        const res= await axiosJWT.patch(AccountApi+"changeSeenMessage/"+account_id,value,{
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
        console.log("res.data.seenMessage",res.data)
    } catch (error) {
        toast.error('changeSeenMessage failed !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        dispatch(changeSeenMessageFailure(error))
        console.log("error",error)
    }
}

export default changeSeenMessage