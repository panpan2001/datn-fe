import { toast } from "react-toastify"
import { createStudentFailure, createStudentStart , createStudentSuccess} from "../../slices/Student/createStudentSlice"
import axios from "axios"
import { StudentApi } from "../../../utils/BaseUrl"

const createStudent=async(id,values,accessToken,axiosJWT,dispatch,navigate)=>{
    dispatch(createStudentStart())
    try {
        const res=await axiosJWT.post(StudentApi+id,id,{
            headers:{token: `Bearer ${accessToken}`}
        },
        values)
        console.log(res.data)
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