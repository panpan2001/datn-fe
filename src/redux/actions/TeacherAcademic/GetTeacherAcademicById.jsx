import axios from "axios"
import { TeacherAcademicApi } from "../../../utils/BaseUrl"
import { getTeacherAcademicByIdFailure, getTeacherAcademicByIdStart, getTeacherAcademicByIdSuccess } from "../../slices/TeacherAcademic/getTeacherAcademicByIdSlice"


const getTeacherAcademicById= async(id, dispatch)=>{
    dispatch(getTeacherAcademicByIdStart())
    await axios.get(TeacherAcademicApi,id)
    .then(res=>{
        dispatch(getTeacherAcademicByIdSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getTeacherAcademicByIdFailure(err));
        console.log(err)
    })
}

export default getTeacherAcademicById