import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher';
import { useSelector } from 'react-redux';
import { AiOutlineWarning } from 'react-icons/ai';
import { BsBookmarks } from 'react-icons/bs';

function CourseNotification({setShow, show,teacherId}) {
    console.log({teacherId})
    console.log("CourseNotification",show)
    useEffect(()=>{
        getAllCourseByIdTeacher(teacherId, setShow)
    },[])
const course= useSelector((state) => state.getAllCourseByIdTeacher?.courses?.currentCourse)

  return (
    <div style={{ display: `${show == 2 ? 'block' : 'none'}` }}>
            
    {course && course
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
                <p>{`Khóa học  thử ${item.name}, bắt đầu vào ngày ${item.start_date}, kết thúc vào ngày ${item.end_date} bị báo cáo với nội dung như sau: `}</p>
            <p>{item.reportedMessage.map(i=>
                <li>{i}</li>)}</p>
            </div>
            <div>
            <BsBookmarks/>
            </div>
        </div>
    )}
{course && course
    .filter((item) => item.countReportedTime >0).length==0 ?
<p>Khóa học này không bị báo cáo. Không thể ẩn !</p>:""
}
</div>
  )
}

export default CourseNotification