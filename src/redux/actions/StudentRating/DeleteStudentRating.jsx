import { toast } from "react-toastify"
import { deleteStudentRatingFailure, deleteStudentRatingStart } from "../../slices/StudentRating/deleteStudentRatingSlice"
import { StudentRatingApi } from "../../../utils/BaseUrl"
import { getStudentRatingSuccess } from "../../slices/StudentRating/getAllStudentRating"

const deleteStudentRating = (id, dispatch, axiosJWT, accessToken,account_id, navigate) => {
    dispatch(deleteStudentRatingStart())
    try {
        const res = axiosJWT.delete(StudentRatingApi + id, {
            headers: {
                token: `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch( getStudentRatingSuccess(res.data))
        toast.success("Xóa đánh giá thành công ", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        navigate('admin/studentJudge',{replace:true})
    } catch (error) {
        console.log(error)
        dispatch(deleteStudentRatingFailure(error))
        toast.error(error.response.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        
    }
}

export default deleteStudentRating