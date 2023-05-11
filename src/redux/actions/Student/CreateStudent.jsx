import { toast } from "react-toastify"
import { createStudentFailure, createStudentStart , createStudentSuccess} from "../../slices/Student/createStudentSlice"
import axios from "axios"
import { StudentApi } from "../../../utils/BaseUrl"

const createStudent=async(student,accessToken,axiosJWT,dispatch,navigate)=>{
    dispatch(createStudentStart())
    try {
        
        await console.log(student)
        const res=await axiosJWT.post(StudentApi+ student.account_id,student,{
            withCredentials: true,
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(createStudentSuccess(res.data))
        navigate('/profile')
        toast.success('Bạn đã hoàn thiện hồ sơ cá nhân!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
      
    } catch (error) {
        dispatch(createStudentFailure(error))
        toast.error('Thêm thông tin không thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        console.log(error)
    }
}

export default createStudent