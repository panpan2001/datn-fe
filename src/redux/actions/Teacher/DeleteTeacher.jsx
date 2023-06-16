import { toast } from "react-toastify"
import { deleteTeacherFailure, deleteTeacherStart, deleteTeacherSuccess } from "../../slices/Teacher/DeleteTeacherSlice"
import { TeacherApi } from "../../../utils/BaseUrl"
import { getAllTeacherSuccess } from "../../slices/Teacher/GetAllTeachersSlice"


const deleteTeacher = async (account_id, teacher_id, dispatch, accessToken, axiosJWT,navigate) => {
    dispatch(deleteTeacherStart())
    // console.log('delete teacher token ', accessToken)
        
    try {
        const res = await axiosJWT.delete(TeacherApi + teacher_id, {
            headers:{
                token: `Bearer ${accessToken}`,
                account_id:account_id
            },
        })
        dispatch(getAllTeacherSuccess(res.data))
        console.log('delete teacher success', res.data)
        toast.success("Xoa giao vien thanh cong", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        navigate('/profile/'+account_id+'/teacher')
    } catch (error) {
        dispatch(deleteTeacherFailure())
        console.log(error)
        toast.error("Xoa giao vien khong thanh cong", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}
export default deleteTeacher