import axios from "axios"
import { TeacherApi } from "../../../utils/BaseUrl"
import { getTeacherByIdFailure, getTeacherByIdStart, getTeacherByIdSuccess } from "../../slices/Teacher/GetTeacherByIdSlice"


const getTeacherById= async(id,dispatch)=>{
    dispatch(getTeacherByIdStart())
    console.log("getTeacher by Id action :",id)
    await axios.get(TeacherApi+id)
    .then(res=>{
        dispatch(getTeacherByIdSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getTeacherByIdFailure(err))
        console.log(err)
    })
}

export default getTeacherById