import { delAccountStart, delAccountSuccess, delAccountFailure } from "../../slices/Account/DeleteAccountSlice"
import axios from "axios"
import { AccountApi } from "../../../utils/BaseUrl"
import { toast } from "react-toastify"
import { getAccountSuccess } from "../../slices/Account/GetAccountSlice"

const DelAccounts= async(accessToken,dispatch,id,axiosJWT)=>{
    dispatch(delAccountStart())
    try {
        const res= await axiosJWT.delete(AccountApi+id,{
            withCredentials: true ,
            headers:{token:`Bearer ${accessToken}`}
        })
        toast.success("Xoa tai khoan thanh cong", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        dispatch(getAccountSuccess(res.data))
    } catch (error) {
        dispatch(delAccountFailure(error.response.data))
        console.log(error)
        toast.error("Xoa tai khoan khong thanh cong", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}

export default DelAccounts