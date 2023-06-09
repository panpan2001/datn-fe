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
import validator from 'validator'
import { toast } from 'react-toastify'
import addLinkMeeting from '../../redux/actions/Course/AddLinkMeeting'
import { Link } from 'react-router-dom'

function ClassCard({ data }) {
     console.log("ClassCard", { data })
     console.log("data link meeting ", data.link_meeeting)
     const [show, setShow] = useState("none")
     const [show2, setShow2] = useState("none")
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



     // -----------------link video state ! --------------///
     const [inputValue, setInputValue] = useState("")
     const [showIconAdd, setShowIconAdd] = useState("block")
     const [showComponent, setShowComponent] = useState("none")

     const [linkVideo, setLinkVideo] = useState("")
     const [data_link_videos, setDataLinkVideo] = useState([...data.link_video])
     console.log({ data_link_videos })
     const [newLinkVideo, setNewLinkVideo] = useState([])
     const [delLinkVideo, setDelLinkVideo] = useState(new Set())

     // -----------------link meeting state ! --------------///
     const [inputValue2, setInputValue2] = useState("")
     const [showIconAdd2, setShowIconAdd2] = useState("block")
     const [showComponent2, setShowComponent2] = useState("none")

     const [linkMeeting, setLinkMeeting] = useState("")
     const [dataLinkMeeting, setDataLinkMeeting] = useState([...data.link_meeeting])
     const [newLinkMeeting, setNewLinkMeeting] = useState([])
     const [delLinkMeeting, setDelLinkMeeting] = useState(new Set())

     if (courseStudent) {
          // -----------------link video action ! --------------///
          const handleShowStart = () => {
               if (Date.now() > new Date(data.start_date).getTime()) {
                    setShowComponent("block")
                    setShowIconAdd("none")
               }
               else {
                    toast.warning('Khóa học này chưa bắt đầu, bạn không thể thêm link video vào khoá học', {
                         position: "bottom-right",
                    })
               }
          }

          const handleAddLink = (inputValue, newlinkArr, setNewLink, setInput) => {

               const add = inputValue.split()
               console.log("link video", add)
               setInput("")
               const newList = [...newlinkArr, ...add]
               setNewLink(newList)
               console.log("new link arr", newList)
               // if (validator.isURL(inputValue)) {
               //      const newList = [...newlinkArr, ...add]
               //      setNewLink(newList)
               //      console.log("new link arr", newList)

               // }
               // else {
               //      toast.error("Link video không hợp lệ",
               //           {
               //                position: "bottom-right",
               //           }
               //      )
               //      setInput("")
               // }

          }

          const handleDeleteLinkNew = (item, newLinkState, setNewLink, setShowComponent, setShowIconAdd) => {
               setShowComponent("block")
               setShowIconAdd('none')
               // const del= newLinkVideo[item]
               newLinkState.splice(item, 1)
               console.log(newLinkState)
               const updateNewLinkVideo = [...newLinkState]/// sao chep va gan tren mang ms-> use state lm tren mang ms , ko fai mang cu 
               setNewLink(updateNewLinkVideo)


          }
          //lay link bi xo tren giao dien de xoa trong db
          const handleDeleteLinkData = (item,
               dataLink,
               setDataLink,
               originArr,
               delLinkState,
               setDelLink,
               setShowComponent,
               setShowIconAdd) => {
               setShowComponent("block")
               setShowIconAdd('none')
               console.log(data, item, dataLink[item], originArr)
               let del = dataLink.splice(item, 1).toString()
               const check = [...originArr].includes(del)
               if (check == false) {
                    console.log(del)
                    // setDataLinkVideo([...data_link_videos])
               }
               else {
                    ///lay link cu bi del 
                    const oldLinkDel = delLinkState.add(del)
                    setDelLink(oldLinkDel)
                    // console.log(del)
                    // console.log({ delLinkVideo }, typeof (delLinkVideo))
                    // lay link moi sau khi bo link bij del 
                    const newLinkVideoData = [...dataLink]
                    setDataLink(newLinkVideoData)
                    toast.warning('Bạn mới xóa 1 link đã lưu trong hệ thống. Hãy nhấn nút "Lưu" để cập nhật thay đổi nhé!', {
                         position: "bottom-right",
                    })
               }

          }

          const handleSaveLinkVideo = (dataLinkState,
               newLinkState,
               deLinkState,
               checTypeOfLink,
               setShowComponent,
               setShowIconAdd,
               setDelLink
          ) => {
               //tong hop link cu da del va link ms dc them vao
               let link = [...new Set([...dataLinkState, ...newLinkState])]
               // del link tu set thanh array 
               let del_link = Array.from(deLinkState)
               // console.log({ del_link }, typeof (del_link))
               setDataLinkVideo([...new Set(dataLinkState)])
               console.log({ link }, typeof (link))
               if (checTypeOfLink == "Meeting") {
                    addLinkMeeting(link, del_link, account_id, data._id, dispatch, axiosJWTLinkVideo, user.accessToken)
                    console.log({ del_link }, typeof (del_link))
               }
               else {
                    addLinkVideoCourse(link, del_link, account_id, data._id, dispatch, axiosJWTLinkVideo, user.accessToken)
               }
               setDelLink(new Set())
               setShowComponent("none")
               setShowIconAdd('block')
          }
          // -----------------link meeting action ! --------------///
          const handleShowEnd = () => {
               if (Date.now() < new Date(data.end_date).getTime()) {
                    setShowComponent2("block")
                    setShowIconAdd2("none")
               }
               else {
                    toast.warning('Khóa học này đã  kết thúc, bạn không thể thêm link meeting vào khoá học', {
                         position: "bottom-right",
                    })
               }
          }


          return (
               <div className="column is-12 mb-2">
                    <div className='class-card_container' >
                         {/* <div className='class-card_left  '>
                    </div> */}
                         <div className="card-content class-card columns is-multiline">
                              {/* <img className="image class-card_image column is-5 is-16by9"
                                   src={data.image} alt="Placeholder image"
                                   style={{ paddingTop: "0" }}
                              /> */}


                              <div className="content_container  columns is-multiline">

                                   <div className=" teacher_class_card_content column  is-6">

                                        <p><strong>Tên khóa học: </strong>{data.name}</p>
                                   </div>
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
                                        <p><strong>Giá tiền(VDN/ buổi): </strong>{formatter.format(data.cost)}</p>
                                   </div>
                                   <div className=" teacher_class_card_content column  is-6">
                                        <p><strong>Ngày bắt đầu: </strong>{start_date}</p>
                                   </div>
                                   <div className=" teacher_class_card_content column  is-6">
                                        <p><strong>Ngày kết thúc: </strong>{end_date}</p>
                                   </div>
                                   <div className=" teacher_class_card_content column  is-6">
                                        <p><strong>Số lượng học viên: </strong>{data.number_of_student}</p>
                                   </div>
                                   <div className=" teacher_class_card_content column  is-6">
                                        <p><strong>Số lượng đăng kí: </strong>{number_register}

                                        </p>
                                   </div>
                                   {courseStudent.filter(item => item.id_course._id === data._id).length > 0 &&
                                   <div className=" teacher_class_card_content column  is-10">
                                   <table class="table is-fullwidth is-hoverable">
                                        <thead>
                                             <tr>

                                                  <th>Tên học viên</th>
                                                  <th>Email</th>
                                                  <th>SDT</th>


                                             </tr>
                                        </thead>
                                        <tbody style={{ textAlign: "left" }}>
                                             {courseStudent
                                                  .filter(item => item.id_course._id === data._id)
                                                  .map((item, index) => (
                                                       <tr key={index}>
                                                            <td>{item.id_student.account_id.full_name}</td>
                                                            <td>{item.id_student.account_id.email}</td>
                                                            <td>{item.id_student.account_id.phone_number}</td>
                                                       </tr>

                                                  ))}

                                        </tbody>
                                   </table>
                              </div>
                                   }
                                   <div className=" teacher_class_card_content column  is-12"
                                        style={{ paddingRight: "2rem" }}  >
                                        <div className="link-video_container" style={{ textAlign: "left" }}>
                                             <p><strong>Link meeting: </strong></p>
                                             <div style={{ display: "block" }}>
                                                  {
                                                       dataLinkMeeting.length == 0 ?
                                                            <div className='link-video-add-more-show_div'>
                                                                 {
                                                                      Date.now() < new Date(data.end_date).getTime() ?
                                                                           <Link to={`/getLinkMeeting/${data._id}?isDemo=false`} className='link-add_p ' key={1}>
                                                                                <button className='button is-success'>Tạo mã lớp học  </button>
                                                                           </Link>
                                                                           : <></>
                                                                 }

                                                            </div >
                                                            :
                                                            dataLinkMeeting.map((item) =>
                                                                 <div id={item} key={dataLinkMeeting.indexOf(item)} className='link-video-add-more-show_div'>
                                                                      {/* <button className='button is-success'> */}
                                                                      <Link to={`/joinClass/${data._id}/${item}?isDemo=false`} className='link-add_p ' key={dataLinkMeeting.indexOf(item)} id={item}>
                                                                           {/* <button className='button is-success'>Vào lớp học  </button> */}
                                                                           {item}
                                                                      </Link>

                                                                      {/* </button> */}
                                                                      <button
                                                                           className='button delete-link_button '
                                                                           id={item}
                                                                           key={dataLinkMeeting.indexOf(item)}
                                                                           // item, dataLink,setDataLink,originArr,delLinkState,setDelLink
                                                                           onClick={() =>
                                                                                handleDeleteLinkData(
                                                                                     dataLinkMeeting.indexOf(item),
                                                                                     dataLinkMeeting,
                                                                                     setDataLinkMeeting,
                                                                                     data.link_meeeting,
                                                                                     delLinkMeeting,
                                                                                     setDelLinkMeeting,
                                                                                     setShowComponent2,
                                                                                     setShowIconAdd2
                                                                                )}>
                                                                           <IoIosCloseCircleOutline className='add-link-video_icon-remove' />

                                                                      </button>

                                                                 </div >
                                                            )
                                                  }
                                             </div>

                                             <div>
                                                  {newLinkMeeting.map((item) =>
                                                       <div id={item} key={newLinkMeeting.indexOf(item)} className='link-video-add-more-show_div'>
                                                            <button className="button is-success">
                                                                 <Link to={`/joinClass/${item}`} className='link-add_p ' key={newLinkMeeting.indexOf(item)} id={item}>{item}</Link>

                                                            </button>
                                                            <button
                                                                 className='button delete-link_button '
                                                                 id={item}
                                                                 key={newLinkMeeting.indexOf(item)}
                                                                 onClick={() =>
                                                                      handleDeleteLinkNew(
                                                                           newLinkMeeting.indexOf(item),
                                                                           newLinkMeeting,
                                                                           setNewLinkMeeting,
                                                                           setShowComponent2,
                                                                           setShowIconAdd2)}>
                                                                 <IoIosCloseCircleOutline className='add-link-video_icon-remove'

                                                                 />

                                                            </button>

                                                       </div >
                                                  )
                                                  }
                                             </div>


                                        </div>
                                        <div className='add-link-video_div-wrap'>
                                             <AiOutlinePlusCircle className='add-link-video_icon-plus'

                                                  onClick={() => handleShowEnd()}
                                                  style={{
                                                       display: `${showIconAdd2}`,

                                                  }} />
                                             <IoIosRemoveCircleOutline
                                                  className='add-link-video_icon-remove'
                                                  onClick={() => {
                                                       setShowComponent2("none")
                                                       setShowIconAdd2("block")
                                                       setNewLinkMeeting([])
                                                       setInputValue2("")
                                                  }}

                                                  style={{
                                                       display: `${showComponent2}`,
                                                       width: "3rem !important",
                                                       height: "3rem !important",
                                                       cursor: "pointer",
                                                       borderRadius: "50%",
                                                       boxShadow: "0 0 8px 2px #85CEFE"

                                                  }} />
                                             <input
                                                  type="text"
                                                  className='input'
                                                  style={{ display: `${showComponent2}` }}
                                                  placeholder='Link video'
                                                  value={inputValue2}
                                                  id={Math.random()}
                                                  onChange={(e) => {
                                                       setLinkMeeting(e.target.value)
                                                       setInputValue2(e.target.value)
                                                  }}
                                             />
                                             <button
                                                  className='button is-link'
                                                  style={{ display: `${showComponent2}` }}
                                                  onClick={() => handleAddLink(inputValue2, newLinkMeeting, setNewLinkMeeting, setInputValue2)}>
                                                  Thêm
                                             </button>

                                        </div>
                                        <div className='up-link-video_group-buttons' >
                                             <button className='button is-warning'
                                                  style={{ display: `${showComponent2}` }}
                                                  // dataLinkState,newLinkState,deLinkState,checTypeOfLink
                                                  onClick={() => handleSaveLinkVideo(dataLinkMeeting,
                                                       newLinkMeeting, delLinkMeeting,
                                                       "Meeting",
                                                       setShowComponent2,
                                                       setShowIconAdd2,
                                                       setDelLinkMeeting
                                                  )}>Lưu</button>
                                             <button className='button is-danger'
                                                  style={{ display: `${showComponent2}` }}
                                                  onClick={() => {
                                                       setShowComponent2("none")
                                                       setShowIconAdd2("block")
                                                       setNewLinkMeeting([])
                                                       setInputValue2("")
                                                  }}>Hủy</button>
                                        </div>


                                   </div>
                                   <div className=" teacher_class_cars_content column column is-12"
                                        style={{ paddingRight: "2rem" }}  >
                                        <div className="link-video_container" style={{ textAlign: "left" }}>
                                             <p><strong>Link video: </strong></p>
                                             <div style={{ display: "block" }}>
                                                  {data_link_videos.map((item) =>
                                                       <div id={item} key={data_link_videos.indexOf(item)} className='link-video-add-more-show_div'>
                                                            <p className='link-add_p ' key={data_link_videos.indexOf(item)} id={item}>{item}</p>
                                                            <button
                                                                 className='button delete-link_button '
                                                                 id={item}
                                                                 key={data_link_videos.indexOf(item)}
                                                                 onClick={() => handleDeleteLinkData(
                                                                      data_link_videos.indexOf(item),
                                                                      data_link_videos,
                                                                      setDataLinkVideo,
                                                                      data.link_video,
                                                                      delLinkVideo,
                                                                      setDelLinkVideo,
                                                                      setShowComponent,
                                                                      setShowIconAdd
                                                                 )}>
                                                                 <IoIosCloseCircleOutline className='add-link-video_icon-remove' />

                                                            </button>

                                                       </div >
                                                  )
                                                  }
                                             </div>

                                             <div>
                                                  {newLinkVideo.map((item) =>
                                                       <div id={item} key={newLinkVideo.indexOf(item)} className='link-video-add-more-show_div'>
                                                            <p className='link-add_p ' key={newLinkVideo.indexOf(item)} id={item}>{item}</p>
                                                            <button
                                                                 className='button delete-link_button '
                                                                 id={item}
                                                                 key={newLinkVideo.indexOf(item)}
                                                                 onClick={() => handleDeleteLinkNew(newLinkVideo.indexOf(item), newLinkVideo, setNewLinkVideo, setShowComponent, setShowIconAdd)}>
                                                                 <IoIosCloseCircleOutline className='add-link-video_icon-remove'

                                                                 />

                                                            </button>

                                                       </div >
                                                  )
                                                  }
                                             </div>


                                        </div>
                                        <div className='add-link-video_div-wrap'>
                                             <AiOutlinePlusCircle className='add-link-video_icon-plus'

                                                  onClick={() => handleShowStart()}
                                                  style={{
                                                       display: `${showIconAdd}`,

                                                  }} />
                                             <IoIosRemoveCircleOutline
                                                  className='add-link-video_icon-remove'
                                                  onClick={() => {
                                                       setShowComponent("none")
                                                       setShowIconAdd("block")
                                                       setNewLinkVideo([])
                                                       setInputValue("")
                                                  }}

                                                  style={{
                                                       display: `${showComponent}`,
                                                       width: "3rem !important",
                                                       height: "3rem !important",
                                                       cursor: "pointer",
                                                       borderRadius: "50%",
                                                       boxShadow: "0 0 8px 2px #85CEFE"

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
                                                  onClick={() => handleAddLink(inputValue, newLinkVideo, setNewLinkVideo, setInputValue)}>
                                                  Thêm
                                             </button>

                                        </div>
                                        <div className='up-link-video_group-buttons' >
                                             <button className='button is-warning'
                                                  style={{ display: `${showComponent}` }}
                                                  onClick={() => handleSaveLinkVideo(
                                                       data_link_videos,
                                                       newLinkVideo,
                                                       delLinkVideo,
                                                       "Video",
                                                       setShowComponent,
                                                       setShowIconAdd,
                                                       setDelLinkVideo
                                                  )}>Lưu</button>
                                             <button className='button is-danger'
                                                  style={{ display: `${showComponent}` }}
                                                  onClick={() => {
                                                       setShowComponent("none")
                                                       setShowIconAdd("block")
                                                       setNewLinkVideo([])
                                                       setInputValue("")
                                                  }}>Hủy</button>
                                        </div>
                                   </div>
                                  
                                   
                              </div>
                              <hr className='mr-6' />
                              <div className="group-buttons teacher-class-card_buttons ">
                                   {/* <button type='button' className="button is-link" onClick={() => setShow2("block")}>Chỉnh sửa</button> */}
                                   <button type='button' className="button is-danger" onClick={() => setShow("block")}>Xóa</button>

                              </div>

                         </div>
                         {/* ====================delete course modal ======================= */}
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

                         {/* ===================update course modal ======================= */}

                         <div className="modal " style={{
                              display: `${show2}`,
                         }}>
                              <div className="modal-background"></div>

                              <div className="modal-content is-centered" style={{ marginTop: "2rem" }}>
                                   <header className="modal-card-head">
                                        <p className="modal-card-title">Chỉnh sửa thông tin khóa học</p>
                                        <button className="modal-close is-large" aria-label="close" onClick={() => setShow2("none")}></button>

                                   </header>
                                   {number_register == 0 ? <>
                                        {/* <strong className='is-size-5'>Bạn chắc chắn muốn chỉnh sửa khóa học này chứ? </strong> */}
                                        <div >
                                             <button className="button is-primary mr-6" onClick={handledelete}>Lưu  </button>
                                             <button className="button is-danger" onClick={() => setShow2("none")}>Hủy  </button>
                                        </div >

                                   </> :
                                        <>
                                             <strong className='is-size-5'>Khóa học này đã có người đăng kí. Bạn không thể sửa </strong>
                                             <div >
                                                  <button className="button is-danger" onClick={() => setShow2("none")}>Thoát  </button>
                                             </div >
                                        </>
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
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

