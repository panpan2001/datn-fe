import { toast } from "react-toastify"
import { createStudentFailure, createStudentStart , createStudentSuccess} from "../../slices/Student/createStudentSlice"
import axios from "axios"
import { StudentApi } from "../../../utils/BaseUrl"

const createStudent=async(values,dispatch,navigate)=>{
    dispatch(createStudentStart())
    try {
        
         console.log("tao tao may roi ne:")
        const res=await axios.post(StudentApi+ values.account_id,values)
        dispatch(createStudentSuccess(res.data))
        navigate('/login')
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