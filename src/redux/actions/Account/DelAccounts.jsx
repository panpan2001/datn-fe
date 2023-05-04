import { delAccountStart, delAccountSuccess, delAccountFailure } from "../../slices/Account/DeleteAccountSlice"
import axios from "axios"
import { AccountApi } from "../../../utils/BaseUrl"

const DelAccounts= async(accessToken,dispatch,id,axiosJWT)=>{
    dispatch(delAccountStart())
    try {
        const res= await axiosJWT.delete(AccountApi.getAllAccount+id,{
            withCredentials: true ,
            headers:{token:`Bearer ${accessToken}`}
        })
        dispatch(delAccountSuccess(res.data))
    } catch (error) {
        dispatch(delAccountFailure(error.response.data))
    }
}

export default DelAccounts