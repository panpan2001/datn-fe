import axios from "axios"
import {  TeacherDegreeApi } from "../../../utils/BaseUrl"
import { toast } from "react-toastify"
import { createTeacherDegreeFailure, createTeacherDegreeStart, createTeacherDegreeSuccess } from "../../slices/TeacherDegree/CreateTeacherDegreeSlice"


const createTeacherDegree = async(dispatch, values,navigate) => {
    dispatch(createTeacherDegreeStart())
    try {
        const res= await axios.post(TeacherDegreeApi, values)
        dispatch(createTeacherDegreeSuccess(res.data))
        navigate('/completeInfoTeacher/description')
        toast.success('Bạn đã hoàn thiện thông tin  chứng chỉ!', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        console.log(res.data)
    } catch (error) {
        dispatch(createTeacherDegreeFailure(error))
        console.log(error)
        toast.error('Thêm thông tin chứng chỉ không thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}

export default createTeacherDegree