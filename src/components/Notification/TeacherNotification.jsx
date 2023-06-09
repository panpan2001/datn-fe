import React, { useEffect, useState } from 'react'
import { AiOutlineProject, AiOutlineRead, AiOutlineTeam } from 'react-icons/ai'
import { BsBookmarks, BsPerson } from 'react-icons/bs'
import { Outlet } from 'react-router-dom'
import CourseNotification from './CourseNotification'
import DemoCourseNotification from './DemoCourseNotification'
import SystemNotification from './SystemNotification'
import getTeacherByAccountId from '../../redux/actions/Teacher/GetTeacherByAccountId'
import { useDispatch, useSelector } from 'react-redux'
import getAllDemoCourseByTeacherId from '../../redux/actions/DemoCourse/GetAllDemoCourseByTeacherId'
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher'

function TeacherNotification() {
    const [show, setShow] = useState(1)
    const user = useSelector((state) => state.login.login?.currentUser)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     getTeacherByAccountId(user._id, dispatch)
    // }, [])
    const teacher = useSelector((state) => state.getTeacherByAccountId.teacher?.currentTeacher)
    console.log({ teacher })
useEffect(() => {
    console.log("hola")
    getAllDemoCourseByTeacherId(teacher?._id, dispatch)
    getAllCourseByIdTeacher(teacher?._id, dispatch)

},[])
const demoCourse = useSelector((state) => state.getAllDemoCourseByTeacherId?.demoCourses?.currentCourse)
const course = useSelector((state) => state.getAllCourseByIdTeacher?.courses?.currentCourses)
console.log({course},{demoCourse})
    return (
        <div style={{ width: '100%' }}>
            <strong className='is-size-4'>Thông báo</strong>
            <div className="tabs is-centered" style={{ width: '100%' }}>
                <ul style={{ width: '100%' }}>
                    <li
                        onClick={() => setShow(1)}
                        className={`${show === 1 ? 'is-active' : ''} column is-3`} id={1}>
                        <a style={{ display: "flex", }}>
                            <AiOutlineProject />
                            <p className='ml-1' style={{ display: "flex", }}>Khóa học thử </p>
                        </a>
                    </li>
                    <li
                        onClick={() => setShow(2)}
                        className={`${show === 2 ? 'is-active' : ''} column is-3`} id={2}>
                        <a style={{ display: "flex", }}>
                            <AiOutlineRead />
                            <p className='ml-1' style={{ display: "flex", }}>Khóa học chính thức</p>
                        </a>
                    </li>
                    <li
                        onClick={() => setShow(3)}
                        className={`${show === 3 ? 'is-active' : ''} column is-3`} id={3}>
                        <a style={{ display: "flex", }}>
                            <AiOutlineTeam />
                            <p className='ml-1' style={{ display: "flex", }}>Hệ thống</p>
                        </a>
                    </li>
                </ul>
            </div>
            {/*  style={{ display: `${show === 1 ? 'block' : 'none'}` }} */}
            <DemoCourseNotification
             setShow={setShow} 
             show={show} 
             teacherId={teacher ? teacher._id : undefined} 
             flag={user.role_name=='student'? 1:0} 
             demoCourse={demoCourse}
             />
            <CourseNotification 
            setShow={setShow} 
            show={show} 
            teacherId={teacher ? teacher._id : undefined} 
            flag={user.role_name=='student'? 1:0}
            course={course}
            />
            <SystemNotification 
            setShow={setShow}
             show={show} 
             teacherId={teacher ? teacher._id : undefined} 
             flag={user.role_name=='student'? 1:0} 
             user={teacher}/>

        </div>
    )
}

export default TeacherNotification

/*

<li className=" column is-2">
                        <a style={{display:"flex"}}>
                            <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
                            <span>Videos</span>
                        </a>
                    </li>
                    <li className=" column is-2">
                        <a style={{display:"flex"}}>
                            <span className="icon is-small"><i className="far fa-file-alt" aria-hidden="true"></i></span>
                            <span>Documents</span>
                        </a>
                    </li>
*/