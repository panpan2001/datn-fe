import axios from "axios"
import { createTeacherFailure, createTeacherStart, createTeacherSuccess } from "../../slices/Teacher/CreateTeacherSlice"
import { TeacherApi } from "../../../utils/BaseUrl"
import { toast } from "react-toastify"


const createTeacher = async(dispatch, values,navigate)=>{
    dispatch(createTeacherStart())
    try{
        const res= await axios.post(TeacherApi+values.account_id, values)
        dispatch(createTeacherSuccess(res.data))
        navigate('/login')
        toast.success('Bạn đã hoàn thiện hồ sơ cá nhân!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
    catch(err){
        dispatch(createTeacherFailure(err))
        console.log(err)
        toast.error('Thêm thông tin không thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    
   

}

export default createTeacher