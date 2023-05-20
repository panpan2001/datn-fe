import axios from "axios"
import { getTeacherAcademicFailure, getTeacherAcademicStart, getTeacherAcademicSuccess } from "../../slices/TeacherAcademic/getTeacherAcademicSlice"
import { TeacherAcademicApi } from "../../../utils/BaseUrl"


const getTeacherAcademicById= async(id, dispatch)=>{
    dispatch(getTeacherAcademicStart())
    await axios.get(TeacherAcademicApi,id)
    .then(res=>{
        dispatch(getTeacherAcademicSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getTeacherAcademicFailure(err));
        console.log(err)
    })
}

export default getTeacherAcademicById