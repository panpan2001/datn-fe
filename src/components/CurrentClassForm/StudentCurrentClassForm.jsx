import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../assets/styles/StudentCurrentClassForm.css'
import StudentClassCard from '../ClassCard/StudentClassCard'
import { getDemoCourseByStudentIdStart, getDemoCourseByStudentIdSuccess } from '../../redux/slices/DemoCourseStudent/getDemoCourseByStudentId'
import createAxiosJWT from '../../utils/createInstance'
import getDemoCourseByStudentId from '../../redux/actions/DemoCourseStudent/GetDemoCourseStudentByStudentId'
import StudentClassAccordion from '../Accordion/StudentClassAccordion'
import getCourseStudentByStudentId from '../../redux/actions/CourseStudent/GetCourseStudentByStudentId'
import StudentDemoClassAccordion from '../Accordion/StudentDemoClassAccordion'
import { getCourseStudentByStudentIdSuccess } from '../../redux/slices/CourseStudent/getCourseStudentByStudentId'

function StudentCurrentClassForm() {
    const dispatch = useDispatch()
    const studentPersonalInfo = useSelector((state) => state.getStudentByAccountId.students?.infoStudent)
    const user = useSelector((state) => state.login.login?.currentUser)
    const accessToken = user?.accessToken
    let axiosJWT = createAxiosJWT(dispatch, user, getDemoCourseByStudentIdSuccess)
  
    useEffect(() => {
        getDemoCourseByStudentId(studentPersonalInfo._id, dispatch, accessToken, axiosJWT)
        getCourseStudentByStudentId(studentPersonalInfo._id, dispatch, accessToken, axiosJWT)
    }, [])
    const demoClasses = useSelector((state) => state.getDemoCourseByStudentId.demoCourse?.currentDemoCourse)
    let officiaClasses = useSelector((state) => state.getCourseStudentByStudentId.officialCourses?.currentCourse)
    // const demoClasses2 = useSelector((state) => state.cancelRegisterCourse.demoCourse?.currentDemoCourse)
   console.log("officiaClasses",{officiaClasses})
    return (
        <div className='current-class_container'>
         
 <div className="student-current-class_form columns is-centered is-multiline ">
 <strong className='is-size-4 is-centered'>Khóa học của tôi</strong>
 <div>
     <strong className='is-size-5 current-class_title mb-2'>Khóa học thử</strong>

     {demoClasses &&
                demoClasses.map((item) => (
                    <StudentDemoClassAccordion key={item._id} color={"#B2FFDA"} data={item} />
                ))
    }
    <hr/>
    <br/>
     <strong className='is-size-5 current-class_title mt-4 mb-2'>Khóa học chính thức</strong>
     {officiaClasses && 
                officiaClasses.map((item) => (
                    <StudentClassAccordion key={item._id} data={item} />
                ))
               
    }
 </div>
</div>

          {demoClasses || officiaClasses? 
           <></>  :
          <div className='student-no-class_div'>
                    <img className="current-class_image" src={require('../../assets/images/no-class.jpg')} />
                    <strong className='is-size-5'>Bạn chưa có lớp học nào cả</strong>
                    <Link to='/findingTeacher'>
                        <button className='button is-primary'>Tìm kiếm </button>
                    </Link>

                </div>
             
            }     

            
        </div>
    )
}

export default StudentCurrentClassForm

{/* <table class="table is-fullwidth is-hoverable">
                 <thead>
                                    <tr>
                                        
                                        <th>Tên lớp học</th>
                                        <th>Cấp độ</th>
                                        <th>Số lượng (học sinh)</th>
                                        <th>Thời lượng (tiếng)</th>
                                        <th>Thời gian học(tháng)</th>
                                        <th>Lịch học</th>
                                        <th>Giá tiền(VDN/ buổi)</th>
                                       
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: "left" }}>
                                    
                                    {classes.map((item) => (
                                        
                                         <tr key={item._id}>
                                        
                                        <td>{item.name}</td>
                                        <td>{item.category_id.level}</td>
                                        <td>{item.number_of_student} </td>
                                        <td>{item.time_per_lesson} </td>
                                        <td>{item.learning_period} </td>
                                        <td>{item.schedule} </td>
                                        <td>{item.cost} </td>
                                    </tr>
                                        
                                    ))}

                                </tbody>
                                </table> */}

                                // {demoClasses && officiaClasses  ?

                                //     <></>:
                                //                     <>
                                //                         <img className="current-class_image" src={require('../../assets/images/no-class.jpg')} />
                                //                         <strong className='is-size-5'>Bạn chưa có lớp học nào cả</strong>
                                //                         <Link to='/findingTeacher'>
                                //                             <button className='button is-primary'>Tìm kiếm giáo viên</button>
                                //                         </Link>
                                    
                                //                     </> 
                                //     }