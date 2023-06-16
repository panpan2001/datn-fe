import { toast } from "react-toastify"
import { TeacherDegreeApi } from "../../../utils/BaseUrl"
import { getTeacherDegreeByIdSuccess } from "../../slices/TeacherDegree/getTeacherDegreeByIdSlice"
import { updateTeacherDegreeFailure, updateTeacherDegreeStart } from "../../slices/TeacherDegree/upadateTeacherDegreeStatus"

const updateTeacherDegreeStatus= async (account_id, id,status, dispatch, accessToken, axiosJWT) => {
    dispatch(updateTeacherDegreeStart())
          
    try {
        const res = await axiosJWT.patch(TeacherDegreeApi + id,
            {
                degree_status:status
            }, 
             {
            headers:{
                token: `Bearer ${accessToken}`,
                account_id:account_id
            },
        })
        // dispatch(updateteacherDegreeSuccess(res.data)) 
        // tui sua day nha, ti chAY XEM DC KO 
        dispatch(getTeacherDegreeByIdSuccess(res.data))
        console.log('update  teacher degree action  success', res.data)
        // toast.success("Cap nhat giao vien thanh cong", {
        //     position: toast.POSITION.BOTTOM_RIGHT
        // })
    } catch (error) {
        dispatch(updateTeacherDegreeFailure())
        console.log(error)
        toast.error("Cap nhat giao vien khong thanh cong", {
            position: toast.POSITION.BOTTOM_RIGHT
        })      
    }
}

export default updateTeacherDegreeStatus