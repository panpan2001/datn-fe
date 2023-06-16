import { toast } from "react-toastify"
import { createDemoCourseFalure, createDemoCourseStart, createDemoCourseSuccess } from "../../slices/DemoCourse/createDemoCourse"
import { DemoCourseApi } from "../../../utils/BaseUrl"


const createDemoCourse= async(account_id,value,dispatch,axiosJWT,accessToken,navigate)=>{
    console.log({accessToken})
    dispatch(createDemoCourseStart())
    try{
        const res= await axiosJWT.post(DemoCourseApi,value, {
            headers:{
                token: `Bearer ${accessToken}`,
                account_id:account_id
            },
            
        })
        dispatch(createDemoCourseSuccess(res.data))
        navigate('/profile/'+account_id+'/teacherClass')
        toast.success('Tạo lớp học thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    catch(error){
        dispatch(createDemoCourseFalure(error))
        console.log(error)
        toast.error(error.response.data,{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}

export default createDemoCourse