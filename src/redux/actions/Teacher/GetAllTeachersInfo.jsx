import axios from "axios"
import { getAllTeacherFailure, getAllTeacherStart, getAllTeacherSuccess } from "../../slices/Teacher/GetAllTeachersSlice"
import { TeacherApi } from "../../../utils/BaseUrl"
import { toast } from "react-toastify"


const getAllTeachers= async(dispatch)=>{
    console.log('getAllTeacher')
    dispatch(getAllTeacherStart())
    try {
        const res= await axios.get(TeacherApi)
        dispatch(getAllTeacherSuccess(res.data))
        console.log("teacher get all action:",res.data)
    } catch (error) {
        dispatch(getAllTeacherFailure(error))
        toast.error('Ôi lỗi rồi !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}

export default getAllTeachers