import React, { useEffect, useState } from 'react'
import '../../assets/styles/ClassCard.css'
import moment from 'moment/moment'
import '../../assets/styles/TeacherDemoClassCard.css'

function TeacherDemoClassCard({ item }) {


     let time = item.schedule.split(" - ")[0]
     time = time.split(":")[0] < 12 ? time + " AM" : time + " PM"

     const start_date = moment(item.start_date).format("DD/MM/YYYY")
     const end_date = moment(item.end_date).format("DD/MM/YYYY")
     const formatter = new Intl.NumberFormat({
          style: 'currency',
          currency: 'VND',

     });

     return (
          <div className= 'teacher-demo-class_card'>
               <div className="content_container columns is-multiline">

                    <div className="content  column is-6">

                         <p><strong>Tên khóa học thử: </strong>{item.id_course.name}</p>
                    </div>
                    <div className="content  column is-6">
                         <p> <strong>Thời gian học: </strong>{item.learning_period} buổi</p>
                    </div>
                    <div className="content  column is-6">
                         <p><strong>Lịch học: </strong>{time} - {item.schedule.split(" - ")[1]}</p>
                    </div>
                    <div className="content  column is-6">
                         <p><strong>Ngày bắt đầu: </strong>{start_date}</p>
                    </div>
                    <div className="content  column is-6">
                         <p><strong>Ngày kết thúc: </strong>{end_date}</p>
                    </div>
                    <div className="content  column is-6">
                         <p><strong>Giá tiền(VDN/ buổi): </strong>{formatter.format(item.cost)}</p>
                    </div>
                    <div className="content  column is-12">
                         <p><strong>Số lượng đăng kí: </strong></p>
                    </div>
                    <div className="content  column is-12">
                         <p><strong>Link video: </strong>{item.link_video}</p>
                    </div>
                    <div className="content  column is-12">
                         <p><strong>Link meeting: </strong>{item.link_meeting}</p>
                    </div>
               </div>
               <div>
               <button className="button is-link mr-3" >Chỉnh sửa </button>

               <button className="button is-danger" >Xóa </button>

               </div>




          </div>

     )
}

export default TeacherDemoClassCard
