import React, { useEffect, useState } from 'react'
import { AiOutlineProject, AiOutlineRead, AiOutlineTeam } from 'react-icons/ai'
import { BsBookmarks, BsPerson } from 'react-icons/bs'
import { Outlet } from 'react-router-dom'
import CourseNotification from './CourseNotification'
import DemoCourseNotification from './DemoCourseNotification'
import SystemNotification from './SystemNotification'
import getTeacherByAccountId from '../../redux/actions/Teacher/GetTeacherByAccountId'
import { useDispatch, useSelector } from 'react-redux'
import getStudentByAccountId from '../../redux/actions/Student/GetStudentByAccountId'

function StudentNotification() {
    const [show, setShow] = useState(3)
    const user = useSelector((state) => state.login.login?.currentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        getStudentByAccountId(dispatch,user._id)
    }, [])
    const student = useSelector((state) => state.getStudentByAccountId.students?.infoStudent)

    return (
        <div style={{ width: '100%' }}>
            <strong className='is-size-4 ' style={{marginBottom:"1rem"}}>Thông báo</strong>
            {/* <div className="tabs is-centered" style={{ width: '100%' }}>
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
            </div> */}
            {/*  style={{ display: `${show === 1 ? 'block' : 'none'}` }} */}
            {/* <DemoCourseNotification setShow={setShow} show={show} teacherId={student ? student._id : undefined} flag={user.role_name=='student'? 1:0} />
            <CourseNotification setShow={setShow} show={show} teacherId={student ? student._id : undefined} flag={user.role_name=='student'? 1:0}/> */}
            <SystemNotification 
            setShow={setShow} 
            show={show} 
            teacherId={student ? student._id : undefined} 
            flag={user.role_name=='student'? 1:0} 
            user={student}
            />

        </div>
    )
}

export default StudentNotification

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