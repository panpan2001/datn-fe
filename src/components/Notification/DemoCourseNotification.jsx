import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAllDemoCourseByTeacherId from '../../redux/actions/DemoCourse/GetAllDemoCourseByTeacherId'
import { BsBookmarks, BsFillBookmarkFill } from 'react-icons/bs'
import { AiOutlineWarning } from 'react-icons/ai'
import moment from 'moment'
import { getAllDemoCourseByTeacherIdSuccess } from '../../redux/slices/DemoCourse/getAllDemoCourseByTeacherId'
import createAxiosJWT from '../../utils/createInstance'
import deleteDemoCourseReport from '../../redux/actions/DemoCourse/deleteDemoCourseReport'

function DemoCourseNotification({ setShow, show, teacherId, flag,demoCourse }) {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.login.login?.currentUser)
    const axiosJWT= createAxiosJWT(dispatch, user, getAllDemoCourseByTeacherIdSuccess)
    useEffect(() => {
        if(flag==0){
            getAllDemoCourseByTeacherId(teacherId, dispatch)

        }
        else {
            console.log({flag})
        }
    }, [])
    const demoCourses = useSelector((state) => state.getAllDemoCourseByTeacherId?.demoCourses?.currentCourse)
    console.log("DemoCourses  ", demoCourses)

   const  handleDeleteReport=(item)=>{
        deleteDemoCourseReport(item._id, dispatch, user?._id, axiosJWT, user?.accessToken, flag,teacherId)
    }
    if(demoCourse){
    
        return (
            <div style={{ display: `${show == 1 ? 'block' : 'none'}`, marginBottom: '2rem' }}>
    
                {demoCourse && demoCourse.filter((item) => item.reportedMessage.length > 0).length > 0 ?
                 demoCourse
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
                                <p>{'Khóa học thử: '} <strong>{`${item.id_course.name}`}</strong></p>
                                <p>{'Ngày bắt đầu: '}<strong>{`${moment(item.start_date).format('DD/MM/YYYY')}`}</strong></p>
                                <p>{'Ngày kết thúc: '}<strong>{`${moment(item.end_date).format('DD/MM/YYYY')}`}</strong></p>
                                <p>{'Bị báo cáo với nội dung như sau:' }</p>
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
                            <button 
                            className='button is-link is-light ml-4'
                             type='button'
                             onClick={() => handleDeleteReport(item)}
                             >Xóa</button>
                           
                        </div>
                    ):
                    <p>Không có thông báo nào.</p>
                    
                    }
    
            </div>
        )
    }
   
}

export default DemoCourseNotification