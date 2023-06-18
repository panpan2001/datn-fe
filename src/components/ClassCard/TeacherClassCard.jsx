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
import { AiOutlineMinus, AiOutlinePlusCircle } from 'react-icons/ai'
import { right } from '@cloudinary/url-gen/qualifiers/textAlignment'
import { IoIosCloseCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'
import addLinkVideoCourse from '../../redux/actions/Course/AddLinkVideoCourse'
import { getCourseByIdSuccess } from '../../redux/slices/Course/getCourseById'
function ClassCard({ data }) {
     console.log({ data })
     const [show, setShow] = useState("none")
     const dispatch = useDispatch()
     const user = useSelector((state) => state.login.login?.currentUser)
     // console.log(user.accessToken)
     const axiosJWT = createAxiosJWT(dispatch, user, deleteCourseSuccess)
     const account_id = user?._id
     const axiosJWTLinkVideo = createAxiosJWT(dispatch, user, getCourseByIdSuccess)
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

     }, [])
     const demoCourse = useSelector(state => state.getAllDemoCourseByCourseId?.demoCourses?.currentCourse)
     const courseStudent = useSelector(state => state.getAllCourseStudent?.courseStudents?.currentCourseStudent)
     // console.log({ courseStudent })
     // console.log({number_register})
     const handledelete = () => {
          deleteCourse(data._id, user._id, dispatch, axiosJWT, user.accessToken)
          setShow("none")
     }
     let number_register = null
     if (courseStudent) {
          number_register = courseStudent.filter(item => item.id_course._id === data._id).length
     }
     const [inputValue, setInputValue] = useState("")
     const [showIconAdd, setShowIconAdd] = useState("block")
     const [showComponent, setShowComponent] = useState("none")


     // -----------------link video action ! --------------///
     const [linkVideo, setLinkVideo] = useState("")
     const [data_link_videos, setDataLinkVideo] = useState([...data.link_video])
     const [delLinkVideo, setDelLinkVideo] = useState(new Set())
     const handleAddLink = () => {
          console.log("link video", linkVideo)
          setInputValue("")
          if (linkVideo) {
               const addLink = linkVideo.split()
               const newListlink = [...data_link_videos, addLink]
               setDataLinkVideo(newListlink)
               console.log("data_link video", data_link_videos)
          }
          else {
               console.log("data_link video", data_link_videos)
          }

     }
     const handleDeleteLink = (item) => {
          setShowComponent("block")
          setShowIconAdd('none')
          console.log(item, data_link_videos[item])
          let del = data_link_videos.splice(item, 1).toString()
          const check = [...data.link_video].includes(del)
          if (check == false) {
               // console.log(del)
               setDataLinkVideo([...data_link_videos])
          }
          else {
               const linkDelAdd=delLinkVideo.add(del)
               setDelLinkVideo(linkDelAdd)
               // console.log(del)
               // console.log({ delLinkVideo }, typeof (delLinkVideo))
               setDataLinkVideo([...data_link_videos])
          }

     }

     const handleSaveLinkVideo = () => {
          let link = [...new Set(data_link_videos)]
          let del_link = Array.from(delLinkVideo)
          console.log({ del_link }, typeof (del_link))
          setDataLinkVideo([...new Set(data_link_videos)])
          console.log({ link }, typeof (link))
          console.log({ delLinkVideo }, typeof (delLinkVideo))
          addLinkVideoCourse(link, del_link, account_id, data._id, dispatch, axiosJWTLinkVideo, user.accessToken)
          setShowComponent("none")
          setShowIconAdd('block')
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
                              <div className=" teacher_class_card_content column  is-12"
                                   style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "1rem",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        paddingRight: "1rem"
                                   }}
                              >
                                   <p><strong>Link meeting: </strong>{data.link_meeting}</p>


                              </div>
                              <div className=" teacher_class_card_content column  is-12" style={{ paddingRight: "2rem" }}>
                                   <p><strong>Link video: </strong></p>
                                   <div className="link-video_container">
                                        {/* <div className='link-video-add-more_div'> */}
                                        {data_link_videos.map((item) =>
                                             <div id={item} key={data_link_videos.indexOf(item)} className='link-video-add-more-show_div'>
                                                  <p className='link-add_p ' key={data_link_videos.indexOf(item)} id={item}>{item}</p>
                                                  <button
                                                       className='button delete-link_button '
                                                       id={item}
                                                       key={data_link_videos.indexOf(item)}
                                                       onClick={() => handleDeleteLink(data_link_videos.indexOf(item))}>
                                                       <IoIosCloseCircleOutline className='add-link-video_icon-remove' />

                                                  </button>

                                             </div >
                                        )
                                        }
                                        {/* </div> */}
                                   </div>
                                   <div className='add-link-video_div-wrap'>
                                        <AiOutlinePlusCircle className='add-link-video_icon-plus' onClick={() => {
                                             setShowComponent("block")
                                             setShowIconAdd("none")
                                        }}
                                             style={{ display: `${showIconAdd}`, }} />
                                        <IoIosRemoveCircleOutline
                                             className='add-link-video_icon-remove'
                                             onClick={() => {
                                                  setShowComponent("none")
                                                  setShowIconAdd("block")
                                                  setDataLinkVideo([])
                                                  setInputValue("")
                                             }}

                                             style={{
                                                  display: `${showComponent}`,
                                                  cursor: "pointer",
                                                  borderRadius: "50%",

                                             }} />
                                        <input
                                             type="text"
                                             className='input'
                                             style={{ display: `${showComponent}` }}
                                             placeholder='Link video'
                                             value={inputValue}
                                             id={Math.random()}
                                             onChange={(e) => {
                                                  setLinkVideo(e.target.value)
                                                  setInputValue(e.target.value)
                                             }}
                                        />
                                        <button
                                             className='button is-link'
                                             style={{ display: `${showComponent}` }}
                                             onClick={() => handleAddLink()}>
                                             Thêm
                                        </button>

                                   </div>
                                   <div className='up-link-video_group-buttons' >
                                        <button className='button is-warning'
                                             style={{ display: `${showComponent}` }}
                                             onClick={() => handleSaveLinkVideo()}>Lưu</button>
                                        <button className='button is-danger'
                                             style={{ display: `${showComponent}` }}
                                             onClick={() => {
                                                  setShowComponent("none")
                                                  setShowIconAdd("block")
                                                  setDataLinkVideo([])
                                                  setInputValue("")
                                             }}>Hủy</button>
                                   </div>

                              </div>
                         </div>
                         <hr className='mr-6' />
                         <div className="group-buttons teacher-class-card_buttons ">
                              <button type='button' className="button is-link" >Chỉnh sửa</button>
                              <button type='button' className="button is-danger" onClick={() => setShow("block")}>Xóa</button>

                         </div>

                    </div>
                    <div className="modal " style={{
                         display: `${show}`,
                    }}>
                         <div className="modal-background"></div>

                         <div className="modal-content is-centered">
                              <header className="modal-card-head">
                                   <p className="modal-card-title">Cảnh báo</p>
                                   <button className="modal-close is-large" aria-label="close" onClick={() => setShow("none")}></button>

                              </header>
                              {number_register == 0 ? <>
                                   <strong className='is-size-5'>Bạn chắc chắn muốn xóa khóa học này chứ? </strong>
                                   <div >
                                        <button className="button is-warning mr-6" onClick={handledelete}>Xóa  </button>
                                        <button className="button is-danger" onClick={() => setShow("none")}>Thoát  </button>
                                   </div >

                              </> :
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
{/* <div className=" teacher_class_card_content column column is-12">
                                   <p><strong>Các lớp học thử </strong></p>
                              </div>
                         */}

{/* <div style={{ display: "flex", flexDirection: "column" }}>
                                             {
                                                a.length>0 &&  a.map(item =>
                                                       <div className='link-video-from-db_div'>
                                                            <p  id={a.indexOf(item)} key={a.indexOf(item)}>{item}</p>
                                                            <button key={a.indexOf(item)}
                                                                 className='button is-danger'
                                                                 onClick={() => {
                                                                      // data.link_video.pop(item)
                                                                      setA(a.splice(a.indexOf(item),1))
                                                                      console.log(item, a, typeof (a),a)
                                                                 }}>Xoa </button>
                                                       </div >)}
                                        </div> */}
{/* <button className='button is-danger'
                                             style={{ display: `${showComponent}` }}
                                             onClick={() => {
                                                  // setShowComponent("none")
                                                  setInputValue("")
                                             }}>Xoa</button> */}

