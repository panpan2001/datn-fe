import axios from "axios"
import { getTeacherByAccountIdFailure, getTeacherByAccountIdStart, getTeacherByAccountIdSuccess } from "../../slices/Teacher/GetTeacherByAccountIdSlice"
import { TeacherApi } from "../../../utils/BaseUrl"


const getTeacherByAccountId = async (id, dispatch) => {
    dispatch(getTeacherByAccountIdStart())
    await axios.get(TeacherApi + 'account/' + id)
        .then(res => {
            dispatch(getTeacherByAccountIdSuccess(res.data))

        })
        .catch(err => {
            dispatch(getTeacherByAccountIdFailure(err))
            console.log(err)
        })
}
export default getTeacherByAccountId