import { toast } from "react-toastify"
import { TeacherAcademicApi } from "../../../utils/BaseUrl"
import axios from "axios"
import { createTeacherAcademicFailure, createTeacherAcademicStart, createTeacherAcademicSuccess } from "../../slices/TeacherAcademic/createteacherAcademicSlice"

const createTeacherAcademic= async(dispatch, values,navigate)=>{
    dispatch(createTeacherAcademicStart())
    try{
        const res= await axios.post(TeacherAcademicApi, values)
        dispatch(createTeacherAcademicSuccess(res.data))
      console.log(res.data)
       navigate('/completeInfoTeacher/degree')
       toast.success('Thêm thông tin học vấn thành công!', {
           position: toast.POSITION.BOTTOM_RIGHT
       })
    }
    catch(err){
        dispatch(createTeacherAcademicFailure(err))
        console.log(err)
        toast.error('Thêm thông tin học vấn không thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}
export default createTeacherAcademic