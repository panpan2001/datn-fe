
import { toast } from "react-toastify";
import { updateAccountFailure, updateAccountStart } from "../../slices/Account/updateAccountSlice";
import { AccountApi } from "../../../utils/BaseUrl";

const updateAccountStatus = async(dispatch,id,value,axiosJWT,accessToken,success,account_id)=>{
    console.log({id,accessToken})
    dispatch(updateAccountStart())
    try {
        const res= await axiosJWT.patch(AccountApi+"changeStatus/"+id,{
            is_deleted:value
        },
       
        {
            headers:{
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        console.log("updateAccountStatus action ",res.data)
        // dispatch(getAccountSuccess(res.data))
        dispatch(success(res.data))
        toast.success("Cập nhật trạng thái tài khoản thành công",{
            position: "bottom-right",
        })
    } catch (error) {
        dispatch(updateAccountFailure(error))
        console.log(error)
        toast.error(error.data.message,{
            position: "bottom-right",
        })
    }
    
}
export default updateAccountStatus