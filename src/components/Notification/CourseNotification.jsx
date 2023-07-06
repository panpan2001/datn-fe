import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineWarning } from 'react-icons/ai';
import { BsBookmarks, BsFillBookmarkFill } from 'react-icons/bs';
import moment from 'moment';

function CourseNotification({ setShow, show, teacherId }) {
    // console.log({ teacherId })
    // console.log("CourseNotification", show)
    const dispatch= useDispatch()
    const [seen, setSeen] = useState(false)
    useEffect(() => {
        getAllCourseByIdTeacher(teacherId, dispatch)
    }, [])
    const course = useSelector((state) => state.getAllCourseByIdTeacher?.courses?.currentCourses)
    console.log({ course })
    return (
        <div style={{ display: `${show == 2 ? 'block' : 'none'}` , marginBottom: '2rem'}}>

            {course && course
                .filter((item) => item.countReportedTime > 0)
                .map((item) =>
                    <div className='card mb-4' style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '1rem 2rem',
                        cursor: 'pointer',
                        flexDirection: 'row',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            textAlign: 'left',
                            marginRight: '5rem',

                        }}>
                            <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1rem' }}>
                                <AiOutlineWarning fill={"#f1c40f"} style={{ width: '2rem', height: '2rem', }} />
                                <strong className='is-size-5 mt-2 ml-2 has-text-warning is-dark'>Cảnh báo </strong>

                            </div>
                            <p>{'Khóa học: '} <strong>{`${item.name}`}</strong></p>
                            <p>{'Ngày bắt đầu: '}<strong>{`${moment(item.start_date).format('DD/MM/YYYY')}`}</strong></p>
                            <p>{'Ngày kết thúc: '}<strong>{`${moment(item.end_date).format('DD/MM/YYYY')}`}</strong></p>
                            <p>{'Bị báo cáo với nội dung như sau:' }</p>
                            <p>{item.reportedMessage.map(i =>
                                <li>{i}</li>)}
                                </p>
                                <hr/>
                                <p>Nếu có kháng nghị về cảnh báo, vui lòng liên hệ trực tiếp đến quản trị viên qua email: 
                                    <strong>qtvFindingTeacher@gmail.com</strong>  hoặc đường dây nóng: <strong>00112233</strong></p>
                        </div>
                        <div>
                            <BsFillBookmarkFill
                            onClick={()=> setSeen(!seen)}
                            style={{
                                fill:`${seen ? '#f1c40f' : '#000'}`,
                                color:`${seen ? '#f1c40f' : '#000'}`,
                            }}
                             />
                        </div>
                    </div>
                )}
           
        </div>
    )
}

export default CourseNotification