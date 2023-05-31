import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../assets/styles/CurrentClassForm.css'
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher'
import ClassCard from '../ClassCard'

function StudentCurrentClassForm() {
    // const currentUSer = useSelector((state) => state.login.login?.currentUser)
    
    const classes = null
    // console.log(classes)
    return (
        <div className='current-class_container'>
                    {/* <hr /> */}
            {classes ?
                <div className="current-class_form columns is-centered is-multiline ">
                                <strong className='is-size-4 is-centered'>Lớp học của tôi</strong>

                    {classes.map((item) => (
                       <ClassCard data={item} />
                    ))}
             </div> :
                <>
                    <img className="current-class_image" src={require('../../assets/images/no-class.jpg')} />
                    <strong className='is-size-5'>Bạn chưa có lớp học nào cả</strong>
                        <Link to='/findingTeacher'>
                            <button className='button is-primary'>Tìm kiếm giáo viên</button>
                        </Link>

                
                    

                </>}
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