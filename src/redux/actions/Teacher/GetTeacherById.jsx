import axios from "axios"
import { TeacherApi } from "../../../utils/BaseUrl"
import { getTeacherByIdFailure, getTeacherByIdStart, getTeacherByIdSuccess } from "../../slices/Teacher/GetTeacherByIdSlice"


const getTeacherById= async(id,dispatch)=>{
    dispatch(getTeacherByIdStart())
    try {
        const res= await axios.get(TeacherApi+id)
        dispatch(getTeacherByIdSuccess(res.data))
        console.log("getTeacherByIdSuccess action ",res.data)
    }catch (error) {
        dispatch(getTeacherByIdFailure(error))
        console.log(error)
    }
}

export default getTeacherById