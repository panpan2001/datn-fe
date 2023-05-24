import { TeacherDegreeApi } from "../../../utils/BaseUrl"
import { getTeacherDegreeByIdFailure, getTeacherDegreeByIdStart, getTeacherDegreeByIdSuccess } from "../../slices/TeacherDegree/getTeacherDegreeByIdSlice"

const getTeacherDegreeById = async(id, dispatch) => {
    dispatch(getTeacherDegreeByIdStart())
    await axios.get(TeacherDegreeApi + id)
        .then(res => {
            dispatch(getTeacherDegreeByIdSuccess(res.data))
        })
        .catch(err => {
            dispatch(getTeacherDegreeByIdFailure(err))
            console.log(err)
        })
}
export default getTeacherDegreeById