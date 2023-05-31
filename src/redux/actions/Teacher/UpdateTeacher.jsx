import { TeacherApi } from "../../../utils/BaseUrl"
import { updateTeacherFailure, updateTeacherStart, updateTeacherSuccess } from "../../slices/Teacher/UpdateTeacherSlice"


const updateTeacher = async (id, value, dispatch, axiosJWT,accessToken) => {
    dispatch(updateTeacherStart())
    try {
        const res = await axiosJWT.patch(TeacherApi + id, value, {
            headers: { token: `Bearer ${accessToken}` }
        })
        dispatch(updateTeacherSuccess(res.data))
        console.log("update teacher", res.data)

    } catch (error) {
        dispatch(updateTeacherFailure(error))
        console.log("updateTeacherFailure",error)
    }
}

export default updateTeacher