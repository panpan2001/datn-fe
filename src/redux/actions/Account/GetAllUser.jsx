import axios from "axios"
import { getAccountFailure, getAccountStart, getAccountSuccess } from "../../slices/Account/accountSlice"


const getAllAccount = async (accessToken,dispatch) => {
    dispatch(getAccountStart())
    try {
        console.log("getAllAccount")
        const res= await axios.get("http://localhost:3001/api/accounts",{
            headers:{token:`Bearer ${accessToken}`}
        })
        dispatch(getAccountSuccess(res.data))
    } catch (error) {
        dispatch(getAccountFailure(error))
        console.log(error)
    }
}

export default getAllAccount