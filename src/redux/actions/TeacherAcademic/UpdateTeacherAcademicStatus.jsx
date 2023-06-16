import { toast } from "react-toastify"
import { TeacherAcademicApi } from "../../../utils/BaseUrl"
import { getAllTeacherSuccess } from "../../slices/Teacher/GetAllTeachersSlice"
import { updateteacherAcademicFailure, updateteacherAcademicStart, updateteacherAcademicSuccess } from "../../slices/TeacherAcademic/updateTeacherAcademicStatusSl"
import { getTeacherAcademicByIdSuccess } from "../../slices/TeacherAcademic/getTeacherAcademicByIdSlice"

const updateTeacherAcademicStatus = async (account_id, teacher_id,status, dispatch, accessToken, axiosJWT) => {
    dispatch(updateteacherAcademicStart())
         
    try {
        console.log('academic_status ', status,typeof status)

        const res = await axiosJWT.patch(TeacherAcademicApi + teacher_id,{academic_status:status},  {
            headers:{
                token: `Bearer ${accessToken}`,
                account_id:account_id
            },
        })
        // dispatch(updateteacherAcademicSuccess(res.data)) 
        // tui sua day nha, ti chAY XEM DC KO 
        dispatch(getTeacherAcademicByIdSuccess(res.data))
        console.log('update  teacher academic action  success', res.data)
        // toast.success("Cap nhat giao vien thanh cong", {
        //     position: toast.POSITION.BOTTOM_RIGHT
        // })
    } catch (error) {
        dispatch(updateteacherAcademicFailure())
        console.log(error)
        toast.error("Cap nhat giao vien khong thanh cong", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}

export default updateTeacherAcademicStatus