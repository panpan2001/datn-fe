import React from 'react'
import '../../assets/styles/StudentClassCard.css'
import moment from 'moment'
function StudentClassCard({data}) {
    const register_date= moment(data.createdAt).format('DD/MM/YYYY')
  return (
    <div className='student-class-card container '>
<div className="course-content">
    
</div>
<div className="course-content"></div>
<div className="course-content"></div>
<div className="course-content"></div>
<div className="course-content"></div>
    </div>
  )
}

export default StudentClassCard