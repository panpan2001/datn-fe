import { toast } from "react-toastify"
import { StudentApi } from "../../../utils/BaseUrl"
import { getAllStudentsSuccess } from "../../slices/Student/getAllStudentSlice"
import { updateStudentFailure, updateStudentStart } from "../../slices/Student/updateStudentSlice"

const updateStudent = async (id, account_id, values, dispatch, axiosJWT, accessToken) => {
    dispatch(updateStudentStart())
    try {
        const res = await axiosJWT.patch(StudentApi + id, values, {
            headers: {
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }

        })
        dispatch(getAllStudentsSuccess(res.data))
        toast.success("Cập nhật thông tin học viên thành công", {
            position: "bottom-right",
        })
    }
    catch (error) {
        dispatch(updateStudentFailure(error))
        console.log(error)
        toast.error(error.data.message, {
            position: "bottom-right",
        })
    }

}

export default updateStudent