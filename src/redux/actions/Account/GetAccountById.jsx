import axios from "axios"
import { AccountApi } from "../../../utils/BaseUrl"
import { getAccountByIdStart, getAccountByIdSuccess, getAccountByIdFailure } from "../../slices/Account/getAccountByIdSlice"

const getAccountById = async ( dispatch,account_id) => {
    console.log("account info ",account_id)
    dispatch(getAccountByIdStart())
    try {
        const res= await axios.get(AccountApi+account_id,account_id,)
        dispatch(getAccountByIdSuccess(res.data))
        // console.table("account info ",res.data)
        return res.data
    } catch (error) {
        console.log("get account id error",error)
        dispatch(getAccountByIdFailure(error))
    }
}

export default getAccountById