import axios from "axios"
import { getAccountFailure, getAccountStart, getAccountSuccess } from "../../slices/Account/GetAccountSlice"
import { AccountApi } from "../../../utils/BaseUrl"


const getAllAccounts = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getAccountStart())
    try {
        const res = await axiosJWT.get(AccountApi,
            {
                headers: { token: `Bearer ${accessToken}` }
            }
        )
        dispatch(getAccountSuccess(res.data))
    } catch (error) {
        dispatch(getAccountFailure(error))
        console.log(error)
    }
}

export default getAllAccounts