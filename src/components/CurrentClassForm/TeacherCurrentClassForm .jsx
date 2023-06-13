import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../assets/styles/CurrentClassForm.css'
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher'
import ClassCard from '../ClassCard/TeacherClassCard'
import getTeacherByAccountId from '../../redux/actions/Teacher/GetTeacherByAccountId'
import getAllDemoCourseByTeacherId from '../../redux/actions/DemoCourse/GetAllDemoCourseByTeacherId'
import TeacherDemoClassCard from '../ClassCard/TeacherDemoClassCard'

function TeacherCurrentClassForm() {
    const user = useSelector((state) => state.login.login?.currentUser)
    const teacher = useSelector(state => state.getTeacherByAccountId.teacher?.currentTeacher)
    console.log(teacher._id)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllCourseByIdTeacher(teacher._id, dispatch)
        getAllDemoCourseByTeacherId(teacher._id, dispatch)
    }, [])
    console.log("current teacher:", teacher)
    
    const classes = useSelector((state) => state.getAllCourseByIdTeacher.courses?.currentCourses)
    const demoCourse= useSelector((state) => state.getAllDemoCourseByTeacherId?.demoCourses?.currentCourse)
    // console.log("classes:", classes)
    console.log("demo classes:", demoCourse)
    const formatter = new Intl.NumberFormat({
        style: 'currency',
        currency: 'VND',

   });
    return (
        <div className='teacher-current-class_container container-fluid '>
            <strong className='is-size-4 is-centered'>Khóa học của tôi</strong>
             <strong className='is-size-5 'style={{ textAlign: "left" }}>
                <button className='button is-size-5'
                style={{ backgroundColor: "#FFC67E"}}
                >Khóa học thử</button>
                </strong>
            {demoCourse && demoCourse.map(item=>(
            //         <table class="table is-fullwidth is-hoverable">
            //         <thead>
            //             <tr>
            //                 <th>STT</th>
            //                 <th>Tên</th>
            //                 <th>Số lượng đăng kí</th>
            //                 <th>Ngày bắt đầu</th>
            //                 <th>Ngày kết thúc</th>
            //                 <th>Giá tiền <br/>(VND/buổi)</th>
            //                 <th>Lịch học</th>
            //                 <th>Thời gian học (buổi)</th>
            //                 <th>Link video</th>
            //                 <th>Link meeting</th>
                            
            //             </tr>
            //         </thead>
            //         <tbody style={{ textAlign: "left" }}>
            //             {demoCourse && demoCourse.map((item) => (
            //                 <>
            //                     <tr key={item._id}>
            //                     <th>{demoCourse.indexOf(item) + 1}</th>
            //                     <td>{item.id_course.name}</td>
            //                     <td></td>
            //                         <td>{item.start_date}</td>
            //                         <td>{item.end_date}</td>
            //                         <td>{formatter.format(item.cost)} </td>
            //                         <td>{
            //                         parseInt(item.schedule.split(" - ")[0])<12 ? 
            //                         item.schedule.split(" - ")[0]+" AM" : 
            //                         item.schedule.split(" - ")[0]+" PM"} - 
            //                         {item.schedule.split(" - ")[1]}
            //                         </td>
            //                         <td>{item.learning_period} </td>
            //                     <td>{item.link_video} </td>
            //                     <td>{item.link_meeting} </td>
            //                         <td>
            //                             {/* <button className="button is-link" onClick={() => setShow("block")}>Chi tiết </button> */}
            //                                 <button className="button is-link" >Chi tiết </button>
            //                         </td>
            //                         {/* <td>
            //                             <button className="button is-primary" >Học thử </button>
            //                         </td>
            //                         <td>
            //                             <button className="button is-info" >Đăng kí  </button>
            //                         </td> */}
            //                     </tr>
            //                     {/* <DetailClassModalForm id={item._id} data={item} show={show} setShow={setShow} /> */}
            //                 </>
            //             ))}
            //         </tbody>
            //    </table>
<TeacherDemoClassCard item={item} />
            ))
            }
            <hr/>
            <strong className='is-size-5 'style={{ textAlign: "left" }}>
                <button className='button is-size-5'
                style={{ backgroundColor: "#ff9aa7"}}
                >Khóa học chính thức</button>
                </strong>
            {classes ?
                <div className="current-class_form columns is-centered is-multiline ">

                    {classes.map((item) => (
                        <ClassCard data={item}  />
                    ))}
                </div> :
                <>
                    <img className="current-class_image" src={require('../../assets/images/no-class.jpg')} />
                    <strong className='is-size-5'>Bạn chưa có lớp học nào cả</strong>

                    <Link to='/createClass'>
                        <button className='button is-primary'>Tạo lớp học</button>
                    </Link>

                </>}
        </div>
    )
}

export default TeacherCurrentClassForm

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