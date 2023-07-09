import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineWarning } from 'react-icons/ai';
import { BsBookmarks, BsFillBookmarkFill } from 'react-icons/bs';
import moment from 'moment';
import { getAllCourseStudentSuccess } from '../../redux/slices/CourseStudent/getAllCourseStudent';
import createAxiosJWT from '../../utils/createInstance';
import deleteCourseReport from '../../redux/actions/Course/DeleteCourseReport';
import { getAllCourseByIdTeacherSuccess } from '../../redux/slices/Course/getAllCourseByIdTeacher';

function CourseNotification({ setShow, show, teacherId, flag, course }) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.login.login?.currentUser)
    const axiosJWT= createAxiosJWT(dispatch, user, getAllCourseByIdTeacherSuccess)
    useEffect(() => {
        if (flag == 0) {
            getAllCourseByIdTeacher(teacherId, dispatch)

        }
        else {
            console.log("CourseNotification student", flag)
        }
    }, [])
    // const course = useSelector((state) => state.getAllCourseByIdTeacher?.courses?.currentCourses)
    // console.log({ course })
    const [seen, setSeen] = useState(new Array(course.length).fill(false))
    const handleSeen=(item)=>{
        const mark= seen.map((i, position) => item === position ? !i : i)
        // .filter(i => i == false)
        setSeen([...mark])
    }
   const  handleDeleteReport=(item)=>{
    // id, dispatch, account_id, axiosJWT, accessToken, flag
        deleteCourseReport(item._id, dispatch, user?._id, axiosJWT, user?.accessToken, flag,teacherId)
    }
    const courses = useSelector((state) => state.getAllCourseByIdTeacher?.courses?.currentCourses)
    return (
        <div style={{ display: `${show == 2 ? 'block' : 'none'}`, marginBottom: '2rem' }}>

            {course && course.filter((item) => item.countReportedTime > 0 && item.reportedMessage.length > 0).length > 0 ?
                course
                    .filter((item) => item.countReportedTime > 0 && item.reportedMessage.length > 0)
                    .map((item) =>
                        <div className='card mb-4' style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            padding: '1rem 2rem',
                            cursor: 'pointer',
                            flexDirection: 'row',
                            //  marginBottom: '2rem'
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
                                <p>{'Bị báo cáo với nội dung như sau:'}</p>
                                <p>{item.reportedMessage.map(i =>
                                    <li>{i}</li>)}
                                </p>
                                <hr />
                                <p>Nếu có kháng nghị về cảnh báo, vui lòng liên hệ trực tiếp đến quản trị viên qua email:
                                    <strong>qtvFindingTeacher@gmail.com</strong>  hoặc đường dây nóng: <strong>00112233</strong></p>
                            </div>
                            <div>
                                {/* <BsFillBookmarkFill
                                    onClick={() => handleSeen(demoCourse.indexOf(item))}
                                    style={{
                                        fill: `${seen[demoCourse.indexOf(item)] ? '#f1c40f' : '#000'}`,
                                    }}
                                /> */}


                            </div>
                            {/* {seen[demoCourse.indexOf(item)] ? */}
                            <button
                                className='button is-link is-light ml-4'
                                type='button'
                                onClick={() => handleDeleteReport(item)}
                            >Xóa</button>
                            {/* :
                             <></>    
                            } */}
                        </div>
                    ) :
                <p>Không có thông báo nào.</p>

            }

        </div>
    )
}

export default CourseNotification