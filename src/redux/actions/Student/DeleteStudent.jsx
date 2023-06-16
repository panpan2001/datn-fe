import { toast } from "react-toastify"
import { StudentApi } from "../../../utils/BaseUrl"
import { deleteStudentFailure, deleteStudentStart } from "../../slices/Student/deleteStudentSlice"
import { getAllStudentsSuccess } from "../../slices/Student/getAllStudentSlice"

const deleteStudent= async (account_id,student_id,accessToken,dispatch,axiosJWT)=>{
    dispatch(deleteStudentStart())
    try {
        const res= await axiosJWT.delete(StudentApi+student_id,{
            withCredentials: true ,
            headers:{
                token:`Bearer ${accessToken}`,
            account_id: account_id
        }
        })
        dispatch(getAllStudentsSuccess(res.data))
        toast.success("Xoa hoc vien thanh cong", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    
    } catch (error) {
        dispatch(deleteStudentFailure(error.response.data))
        console.log(error)
        toast.error("Xoa hoc vien khong thanh cong", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}
export default deleteStudent