import React, { useEffect, useState } from 'react'
import '../../assets/styles/ClassCard.css'
import moment from 'moment/moment'
import '../../assets/styles/TeacherDemoClassCard.css'
import { useDispatch, useSelector } from 'react-redux'
import getAllDemoCourseStudent from '../../redux/actions/DemoCourseStudent/GetAllDemoCourseStudent'
import createAxiosJWT from '../../utils/createInstance'
import deleteDemoCourse from '../../redux/actions/DemoCourse/deleteDemoCourse'
import { deleteDemoCourseSuccess } from '../../redux/slices/DemoCourse/deleteDemoCourse'
import { getCourseByIdSuccess } from '../../redux/slices/Course/getCourseById'
import addLinkVideoCourse from '../../redux/actions/Course/AddLinkVideoCourse'
import { IoIosCloseCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function TeacherDemoClassCard({ item }) {
     console.log("demo course", item)

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
     }, [])
     const DemoCourseStudent = useSelector((state) => state.getAllDemoCourseStudent?.demoCourseStudents?.currentDemoCourseStudent)

     let number_register
     if (!DemoCourseStudent) number_register = 0

     //   console.log("number_register",number_register)
     const [show, setShow] = useState("none")
     const dispatch = useDispatch()
     const user = useSelector((state) => state.login.login?.currentUser)
     const axiosJWT = createAxiosJWT(dispatch, user, deleteDemoCourseSuccess)
     const account_id = user?._id
     const axiosJWTLinkVideo = createAxiosJWT(dispatch, user, getCourseByIdSuccess)
     const handleDelete = () => {
          deleteDemoCourse(item._id, user._id, dispatch, axiosJWT, user.accessToken)
          setShow("none")
     }

     const [inputValue, setInputValue] = useState("")
     const [showIconAdd, setShowIconAdd] = useState("block")
     const [showComponent, setShowComponent] = useState("none")


     // -----------------link video action ! --------------///
     const [linkVideo, setLinkVideo] = useState("")
     const [data_link_videos, setDataLinkVideo] = useState([...item.link_video])
     const [newLinkVideo, setNewLinkVideo] = useState([])
     const [delLinkVideo, setDelLinkVideo] = useState(new Set())
     if (DemoCourseStudent) {
          number_register = DemoCourseStudent.filter((i) => i.id_demo_course._id === item._id).length



          const handleAddLink = (inputValue) => {

               const add = inputValue.split()
               console.log("link video", add)
               setInputValue("")
               if (inputValue) {
                    const newList = [...newLinkVideo, ...add]
                    setNewLinkVideo(newList)
                    console.log("newLinkVideo", newLinkVideo)

               }
               else {
                    console.log("newLinkVideo", newLinkVideo)
               }

          }

          const handleDeleteLinkNew = (item) => {
               setShowComponent("block")
               setShowIconAdd('none')
               // const del= newLinkVideo[item]
               newLinkVideo.splice(item, 1)
               console.log(newLinkVideo)
               const updateNewLinkVideo = [...newLinkVideo]/// sao chep va gan tren mang ms-> use state lm tren mang ms , ko fai mang cu 
               setNewLinkVideo(updateNewLinkVideo)


          }
          //lay link bi xo tren giao dien de xoa trong db
          const handleDeleteLinkData = (item) => {
               setShowComponent("block")
               setShowIconAdd('none')
               console.log(item, data_link_videos[item])
               let del = data_link_videos.splice(item, 1).toString()
               const check = [...item.link_video].includes(del)
               if (check == false) {
                    console.log(del)
                    // setDataLinkVideo([...data_link_videos])
               }
               else {
                    ///lay link cu bi del 
                    const oldLinkDel = delLinkVideo.add(del)
                    setDelLinkVideo(oldLinkDel)
                    // console.log(del)
                    // console.log({ delLinkVideo }, typeof (delLinkVideo))
                    // lay link moi sau khi bo link bij del 
                    const newLinkVideoData = [...data_link_videos]
                    setDataLinkVideo(newLinkVideoData)
               }

          }

          const handleSaveLinkVideo = () => {
               //tong hop link cu da del va link ms dc them vao
               let link = [...new Set([...data_link_videos, ...newLinkVideo])]
               // del link tu set thanh array 
               let del_link = Array.from(delLinkVideo)
               console.log({ del_link }, typeof (del_link))
               setDataLinkVideo([...new Set(data_link_videos)])
               console.log({ link }, typeof (link))
               // console.log({ delLinkVideo }, typeof (delLinkVideo))
               // addLinkVideoCourse(link, del_link, account_id, item._id, dispatch, axiosJWTLinkVideo, user.accessToken)
               setShowComponent("none")
               setShowIconAdd('block')
          }


          return (
               <div className='teacher-demo-class_card'>
                    <div className="content_container columns is-multiline">

                         <div className=" teacher_demo_class_cars_content column column is-6">

                              <p><strong>Tên khóa học thử: </strong>{item.id_course.name}</p>
                         </div>
                         <div className=" teacher_demo_class_cars_content column column is-6">
                              <p> <strong>Thời gian học: </strong>{item.learning_period} buổi</p>
                         </div>
                         <div className=" teacher_demo_class_cars_content column column is-6">
                              <p><strong>Lịch học: </strong>{time} - {item.schedule.split(" - ")[1]}</p>
                         </div>
                         <div className=" teacher_demo_class_cars_content column column is-6">
                              <p><strong>Ngày bắt đầu: </strong>{start_date}</p>
                         </div>
                         <div className=" teacher_demo_class_cars_content column column is-6">
                              <p><strong>Ngày kết thúc: </strong>{end_date}</p>
                         </div>
                         <div className=" teacher_demo_class_cars_content column column is-6">
                              <p><strong>Giá tiền(VDN/ buổi): </strong>{formatter.format(item.cost)}</p>
                         </div>
                         <div className=" teacher_demo_class_cars_content column column is-6">
                              <p><strong>Số lượng học viên: </strong>{item.id_course.number_of_student}</p>
                         </div>
                         <div className=" teacher_demo_class_cars_content column column is-6">
                              <p><strong>Số lượng đăng kí: </strong>{number_register}</p>
                         </div>
                         <div className=" teacher_demo_class_cars_content column column is-12">
                              <p><strong>Link meeting: </strong>{item.link_meeting}</p>
                         </div>
                         <div className=" teacher_demo_class_cars_content column column is-12"
                              style={{
                                   display: "flex",
                                   flexDirection: "column",
                                   gap: "1rem",
                                   alignItems: "center",
                                   justifyContent: "space-between",
                                   paddingRight: "1rem"
                              }}>
                              <div className="link-video_container">
                                   <p><strong>Link video: </strong></p>

                                   {data_link_videos.map((item) =>
                                        <div id={item} key={data_link_videos.indexOf(item)} className='link-video-add-more-show_div'>
                                             <p className='link-add_p ' key={data_link_videos.indexOf(item)} id={item}>{item}</p>
                                             <button
                                                  className='button delete-link_button '
                                                  id={item}
                                                  key={data_link_videos.indexOf(item)}
                                                  onClick={() => handleDeleteLinkData(data_link_videos.indexOf(item))}>
                                                  <IoIosCloseCircleOutline className='add-link-video_icon-remove' />

                                             </button>

                                        </div >
                                   )
                                   }

                                   {newLinkVideo.map((item) =>
                                        <div id={item} key={newLinkVideo.indexOf(item)} className='link-video-add-more-show_div'>
                                             <p className='link-add_p ' key={newLinkVideo.indexOf(item)} id={item}>{item}</p>
                                             <button
                                                  className='button delete-link_button '
                                                  id={item}
                                                  key={newLinkVideo.indexOf(item)}
                                                  onClick={() => handleDeleteLinkNew(newLinkVideo.indexOf(item))}>
                                                  <IoIosCloseCircleOutline className='add-link-video_icon-remove'
                                                  style={{
                                                       // display: `${showIconAdd}`,
                                                       backgroundColor: "#F5FBFF",
                                                       fill: "#85CEFE",
                                                       boxShadow: "0 0 8px 2px #85CEFE"
                                                  }}
                                                  />

                                             </button>

                                        </div >
                                   )
                                   }

                              </div>
                              <div className='add-link-video_div-wrap'>
                                   <AiOutlinePlusCircle className='add-link-video_icon-plus'

                                        onClick={() => {
                                             setShowComponent("block")
                                             setShowIconAdd("none")
                                        }}
                                        style={{
                                             display: `${showIconAdd}`,
                                             backgroundColor: "#F5FBFF",
                                             fill: "#85CEFE",
                                             boxShadow: "0 0 8px 2px #85CEFE"
                                        }} />
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
                                             width: "3rem !important",
                                             height: "3rem !important",
                                             cursor: "pointer",
                                             backgroundColor: "#F5FBFF",
                                             fill: "#85CEFE",
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
                                        onClick={() => handleAddLink(inputValue)}>
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
<hr/>
                         </div>
                    </div>
                    <div>
                         <button className="button is-link mr-3" >Chỉnh sửa </button>

                         <button className="button is-danger" onClick={() => setShow("block")}>Xóa </button>

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
                              {number_register == 0 ? <>
                                   <strong className='is-size-5'>Bạn chắc chắn muốn xóa khóa học này chứ? </strong>
                                   <div >
                                        <button className="button is-warning mr-6" onClick={handleDelete}>Xóa  </button>
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

                              {/* } */}

                         </div>
                    </div>
               </div>

          )
     }

}

export default TeacherDemoClassCard
