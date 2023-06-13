import React, { useEffect, useState } from 'react'
import '../../assets/styles/ClassCard.css'
import moment from 'moment/moment'
import '../../assets/styles/TeacherDemoClassCard.css'
import { useDispatch, useSelector } from 'react-redux'
import getAllDemoCourseStudent from '../../redux/actions/DemoCourseStudent/GetAllDemoCourseStudent'
import createAxiosJWT from '../../utils/createInstance'
import deleteDemoCourse from '../../redux/actions/DemoCourse/deleteDemoCourse'
import { deleteDemoCourseSuccess } from '../../redux/slices/DemoCourse/deleteDemoCourse'

function TeacherDemoClassCard({ item }) {
     console.log("demo course",item )

     let time = item.schedule.split(" - ")[0]
     time = time.split(":")[0] < 12 ? time + " AM" : time + " PM"

     const start_date = moment(item.start_date).format("DD/MM/YYYY")
     const end_date = moment(item.end_date).format("DD/MM/YYYY")
     const formatter = new Intl.NumberFormat({
          style: 'currency',
          currency: 'VND',

     });
useEffect(() => {
     getAllDemoCourseStudent(dispatch)
},[])
const DemoCourseStudent= useSelector((state) => state.getAllDemoCourseStudent?.demoCourseStudents?.currentDemoCourseStudent)

let number_register
if(!DemoCourseStudent) number_register= 0
  else number_register= DemoCourseStudent.filter((i) => i.id_demo_course._id === item._id).length
//   console.log("number_register",number_register)
const [show, setShow] = useState("none")
const dispatch = useDispatch()
const user = useSelector((state) => state.login.login?.currentUser)
const axiosJWT = createAxiosJWT(dispatch, user, deleteDemoCourseSuccess)
const handleDelete=()=>{
     deleteDemoCourse(item._id, user._id, dispatch, axiosJWT, user.accessToken)
     setShow("none")
}
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
                    <div className="content  column is-6">
                         <p><strong>Số lượng học viên: </strong>{item.id_course.number_of_student}</p>
                    </div>
                    <div className="content  column is-6">
                         <p><strong>Số lượng đăng kí: </strong>{number_register}</p>
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

               <button className="button is-danger" onClick={()=>setShow("block")}>Xóa </button>

               </div>

               <div className="modal " style={{
                         display: `${show}`,
                    }}>
                         <div className="modal-background"></div>

                         <div className="modal-content is-centered"
                              style={{
                                   margin: "30vh auto auto",
                                   display: "flex",
                                   flexDirection: "column",
                                   gap: "1rem",
                                   backgroundColor: "white",
                                   minWidth: "50vw",
                                   minHeight: "30vh",
                                   padding: "1rem",
                              }}
                         >
                              <header className="modal-card-head">
                                   <p className="modal-card-title">Cảnh báo</p>
                                   <button className="modal-close is-large" aria-label="close" onClick={() => setShow("none")}></button>

                              </header>
                              {number_register == 0 ?<>
                                   <strong className='is-size-5'>Bạn chắc chắn muốn xóa khóa học này chứ? </strong> 
                              <div >
                                   <button className="button is-warning mr-6" onClick={handleDelete}>Xóa  </button>
                                   <button className="button is-danger" onClick={() => setShow("none")}>Thoát  </button>
                              </div >

                              </>:
                              <>
                              <strong className='is-size-5'>Khóa học này đã có người đăng kí. Bạn không thể xóa </strong> 
                              <div >
                                   <button className="button is-danger" onClick={() => setShow("none")}>Thoát  </button>
                              </div >
                              </>
                              
                         }
                              
                              {/* } */}

                         </div>
                    </div>
          </div>

     )
}

export default TeacherDemoClassCard
