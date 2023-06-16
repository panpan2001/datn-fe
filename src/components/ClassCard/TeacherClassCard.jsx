import React, { useEffect, useState } from 'react'
import '../../assets/styles/ClassCard.css'
import DetailClassModalForm from '../DetailClassModalForm'
import { useDispatch, useSelector } from 'react-redux'
import getCourseCategoryById from '../../redux/actions/CourseCategory/GetCourseCategoryById'
import moment from 'moment/moment'
import deleteCourse from '../../redux/actions/Course/DeleteCourse'
import createAxiosJWT from '../../utils/createInstance'
import { deleteCourseSuccess } from '../../redux/slices/Course/deleteCourse'
import { getAllDemoCourseByCourseIdFailure } from '../../redux/slices/DemoCourse/getAllDemoCourseByCourseId'
import getAllDemoCourseByCourseId from '../../redux/actions/DemoCourse/GetAllDemoCourseByCourseId'
import getAllCourseStudent from '../../redux/actions/CourseStudent/GetAllCourseStudent'

function ClassCard({ data }) {
     // console.log({ data })
     const [show, setShow] = useState("none")
     const dispatch = useDispatch()
     const user = useSelector((state) => state.login.login?.currentUser)
     const axiosJWT = createAxiosJWT(dispatch, user, deleteCourseSuccess)
     let time = data.schedule.split(" - ")[0]
     time = time.split(":")[0] < 12 ? time + " AM" : time + " PM"

     const start_date = moment(data.start_date).format("DD/MM/YYYY")
     const end_date = moment(data.end_date).format("DD/MM/YYYY")
     const formatter = new Intl.NumberFormat({
          style: 'currency',
          currency: 'VND',

     });

     useEffect(() => {
          getAllCourseStudent(dispatch)
          getAllDemoCourseByCourseId(data?._id, dispatch)
          // console.log("aaaaaaaaaaaaaaaaaa")
         
     }, [])
     const demoCourse = useSelector(state => state.getAllDemoCourseByCourseId?.demoCourses?.currentCourse)
     const courseStudent= useSelector(state => state.getAllCourseStudent?.courseStudents?.currentCourseStudent)
     // console.log({ courseStudent })
     
     // console.log({number_register})
     const handledelete = () => {
        
          deleteCourse(data._id, user._id, dispatch, axiosJWT, user.accessToken)
          setShow("none")
     }
     let number_register = null
     if(courseStudent){
          number_register =  courseStudent.filter(item => item.id_course._id=== data._id).length

     }
     return (
          <div className="column is-12 mb-2">
               <div className='class-card_container' >
                    {/* <div className='class-card_left  '>

                        
                      
                    </div> */}

                    <div className="card-content class-card columns is-multiline">

                         <img className="image class-card_image column is-5 is-16by9"
                              src={data.image} alt="Placeholder image"
                              style={{ paddingTop: "0" }}
                         />

                         <div className=" teacher_class_card_content column header">
                              <strong className='is-size-5'>{data.name} </strong>
                         </div>
                         <div className="content_container  columns is-multiline">

                              <div className=" teacher_class_card_content column  is-6">

                                   <p><strong>Loại: </strong>{data.category_id.type}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-6">
                                   <p><strong>Cấp độ: </strong>{data.category_id.level}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-6">
                                   <p><strong>Số lượng học viên: </strong>{data.number_of_student}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-6">
                                   <p><strong>Thời lượng buổi học(ph): </strong>{data.time_per_lesson}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-6">
                                   <p> <strong>Thời gian học: </strong>{data.learning_period} {data.isDemoClass ? 'buổi' : 'tháng'}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-6">
                                   <p><strong>Lịch học: </strong>{time} - {data.schedule.split(" - ")[1]}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-6">
                                   <p><strong>Ngày bắt đầu: </strong>{start_date}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-6">
                                   <p><strong>Ngày kết thúc: </strong>{end_date}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-6">
                                   <p><strong>Giá tiền(VDN/ buổi): </strong>{formatter.format(data.cost)}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-6">
                                   <p><strong>Số lượng học viên: </strong>{data.number_of_student}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-12">
                                   <p><strong>Số lượng đăng kí: </strong>{number_register}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-12">
                                   <p><strong>Link video: </strong>{data.link_video}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-12">
                                   <p><strong>Link meeting: </strong>{data.link_meeting}</p>
                              </div>
                              <div className=" teacher_class_card_content column  is-12">
                                   <p><strong>Mô tả: </strong>{data.description}</p>
                              </div>
                         </div>
                         {/* <div className=" teacher_class_card_content column column is-12">
                                   <p><strong>Các lớp học thử </strong></p>
                              </div>
                         */}
                         <div className="group-buttons mt-2">
                              <button type='button' className="button is-link" >Chỉnh sửa</button>
                              <button type='button' className="button is-danger" onClick={() => setShow("block")}>Xóa</button>

                         </div>
                    
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
                                   <button className="button is-warning mr-6" onClick={handledelete}>Xóa  </button>
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
                         </div>
                    </div>

               </div>
          </div>
     )
}

export default ClassCard
{/* <footer className="card-footer"> */ }
{/* <button type='button' className="card-footer-item">Save</button> */ }

{/* </footer> */ }
{/* <DetailClassModalForm data={data} show={show} setShow={setShow}/> */ }
{/* <div className=" teacher_class_card_content column column is-6">
                              {data.isDemoClass ?
                                   <button className="button course_label is-warning mr-3">Học thử</button> :
                                   <button className="button course_label is-primary mr-3">Học chính thức</button>
                              }
                         </div> */}