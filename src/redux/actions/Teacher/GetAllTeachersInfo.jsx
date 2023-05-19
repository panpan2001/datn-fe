import axios from "axios"
import { getAllTeacherFailure, getAllTeacherStart, getAllTeacherSuccess } from "../../slices/Teacher/GetAllteachers"
import { TeacherApi } from "../../../utils/BaseUrl"
import { toast } from "react-toastify"


const getAllTeachers= async(dispatch)=>{
    console.log('getAllTeacher')
    dispatch(getAllTeacherStart())
    try {
        const res= await axios.get(TeacherApi)
        dispatch(getAllTeacherSuccess(res.data))
    } catch (error) {
        dispatch(getAllTeacherFailure(error))
        toast.error('Ôi lỗi rồi !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}

export default getAllTeachers