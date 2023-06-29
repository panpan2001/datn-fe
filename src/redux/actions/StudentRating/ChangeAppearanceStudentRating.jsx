import { toast } from "react-toastify"
import { updateStudentRatingFailure, updateStudentRatingStart } from "../../slices/StudentRating/updateStudentRatingSlice"
import { StudentRatingApi } from "../../../utils/BaseUrl"


const changeAppearanceStudentRating = async (dispatch, id, value, axiosJWT, accessToken, success, account_id,flag) => {
    dispatch(updateStudentRatingStart())
    try {
        const res = await axiosJWT.patch(StudentRatingApi + "changeAppearance/" + id, {
            isBadJudge: value,
            flag: flag
        },

            {
                headers: {
                    token: `Bearer ${accessToken}`,
                    account_id: account_id
                }
            })
        console.log("changeAppearanceStudentRating action ", res.data)
        // dispatch(getAccountSuccess(res.data))
        dispatch(success(res.data))
        toast.success(`${value? "Hiện":"Ẩn"}  đánh giá thành công`, {
            position: "top-right",
        })
    } catch (error) {
        dispatch(updateStudentRatingFailure(error))
        console.log(error)
        toast.error(error.response.data, {
            position: "top-right",
        })
    }
}

export default changeAppearanceStudentRating