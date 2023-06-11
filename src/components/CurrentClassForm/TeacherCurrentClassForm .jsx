import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../assets/styles/CurrentClassForm.css'
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher'
import ClassCard from '../ClassCard/TeacherClassCard'
import getTeacherByAccountId from '../../redux/actions/Teacher/GetTeacherByAccountId'

function TeacherCurrentClassForm() {
    const user = useSelector((state) => state.login.login?.currentUser)
    const teacher = useSelector(state => state.getTeacherByAccountId.teacher?.currentTeacher)
    console.log(teacher._id)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllCourseByIdTeacher(teacher._id, dispatch)
    }, [])
    console.log("current teacher:", teacher)
    //chinh lai ve teacher.id_course 
    useEffect(() => {
        getAllCourseByIdTeacher(teacher._id, dispatch)
    }, [])

    const classes = useSelector((state) => state.getAllCourseByIdTeacher.courses?.currentCourses)
    console.log("classes:", classes)
    
    return (
        <div className='current-class_container container-fluid '>
            <strong className='is-size-4 is-centered'>Khóa học của tôi</strong>

            {/* <hr /> */}
            {classes ?
                <div className="current-class_form columns is-centered is-multiline ">

                    {classes.map((item) => (
                        <ClassCard data={item} />
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