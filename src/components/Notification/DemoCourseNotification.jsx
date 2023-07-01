import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAllDemoCourseByTeacherId from '../../redux/actions/DemoCourse/GetAllDemoCourseByTeacherId'
import { BsBookmarks } from 'react-icons/bs'
import { AiOutlineWarning } from 'react-icons/ai'

function DemoCourseNotification({ setShow, show, teacherId }) {
    console.log("DemoCourseNotification teacher id ", teacherId)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllDemoCourseByTeacherId(teacherId, dispatch)
    }, [])
    const demoCourse = useSelector((state) => state.getAllDemoCourseByTeacherId?.demoCourses?.currentCourse)
    console.log("DemoCourseNotification  ", demoCourse)

    return (
        <div style={{ display: `${show == 1 ? 'block' : 'none'}` }}>
            
            {demoCourse && demoCourse
            .filter((item) => item.countReportedTime >0)
            .map((item) => 
                <div className='card mb-2' style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 2rem',
                    cursor: 'pointer',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        flexDirection:'column',
                        textAlign: 'left',
                        marginRight: '5rem',
                        
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end',marginBottom: '1rem' }}>
                            <AiOutlineWarning fill={"#f1c40f"} style={{ width: '2rem', height: '2rem' ,}}/>
                        <strong className='is-size-5 mt-2 ml-2 has-text-warning is-dark'>Cảnh báo </strong>

                        </div>
                        <p>{`Khóa học  thử ${item.id_course.name}, bắt đầu vào ngày ${item.start_date}, kết thúc vào ngày ${item.end_date} bị báo cáo với nội dung như sau: `}</p>
                    <p>{item.reportedMessage.map(i=>
                        <li>{i}</li>)}</p>
                    </div>
                    <div>
                    <BsBookmarks/>
                    </div>
                </div>
            )}

        </div>
    )
}

export default DemoCourseNotification