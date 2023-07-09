import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import getDemoCourseById from '../../redux/actions/DemoCourse/GetDemoCourseById'
import moment from 'moment'
import { AiOutlineAlert, AiOutlineCheck, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
import getDemoCourseStudentByDemoCourseId from '../../redux/actions/DemoCourseStudent/GetDemoCourseStudentByDemoCourseId'
import { toast } from 'react-toastify'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import changeDemoCourseAppearance from '../../redux/actions/DemoCourse/changeDemoCourseAppearance'
import { getDemoCourseByIdSuccess } from '../../redux/slices/DemoCourse/getDemoCourseById'
import createAxiosJWT from '../../utils/createInstance'
import sendDemoCourseReportMessage from '../../redux/actions/DemoCourse/sendDemoCourseReportMessage'

function EditDemoCourseForm() {
  const { idDemoCourse } = useParams()
  const dispatch = useDispatch()
  const [show, setShow] = useState('none')

  // const [images, setImages] = useState("")
  const navigate = useNavigate()
  const user = useSelector((state) => state.login.login?.currentUser)
  const accessToken = user?.accessToken
  const axiosJWT = createAxiosJWT(dispatch, user, getDemoCourseByIdSuccess)
  const account_id = user?._id
  useEffect(() => {
    // console.log(idCourse)
    getDemoCourseById(idDemoCourse, dispatch)
    getDemoCourseStudentByDemoCourseId(idDemoCourse, dispatch)
  }, [])
  const demoCourses = useSelector(state => state.getDemoCourseById?.demoCourse?.currentCourse)
  const number_of_register = useSelector(state => state.getDemoCourseStudentByDemoCourseId?.demoCourses?.currentCourse)
  console.log({ number_of_register })

  const [inputValue, setInputValue] = useState('')
  const handleBack = () => {
    navigate('/admin/course')
  }

  const handleSave = () => {
    console.log("hello")
  }
  if (demoCourses && number_of_register) {
    console.log({ demoCourses })
    const handleDelete = (id) => {
      // alert("len",demoCourseStudents.lenght)

      if (number_of_register.length > 0) {
        toast.warning("Khóa học này đã có người đăng kí. Không thể xóa !", {
          position: "top-right",
        })
      }
      else {
        // deleteTeacher(account_id, id, dispatch, access_token, axiosJWT, navigate)
        console.log(id)
        toast.success("Xóa khóa học thành công !", {
          position: "top-right",
        })
      }
    }
    const number_of_report = number_of_register.filter(item => item.isReported == true)
    console.log({ number_of_report })
    let warningMesage = [... new Set(number_of_report.map(i => i.reportedMessage).flat())]

    const handleSendWarning = (id) => {
      const warningMessageSend = [...warningMesage]
      if (inputValue !== "") {
        warningMessageSend.push(inputValue)
      }
      setInputValue('')
      setShow('none')
      console.log({ warningMessageSend })
      ///send canh bao :account_id,value,dispatch,axiosJWT,accessToken
      const value = {
        reportedMessage: warningMessageSend,
        reportedDateTime: moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
      }
      console.table({ value })
      // id,value,account_id,dispatch,axiosJWT,accessToken
      sendDemoCourseReportMessage(id, value, account_id, dispatch, axiosJWT, accessToken,navigate)
    }


    return (
      <div className='detail-class-page_container   is-centered ' >
        <div className='detail-class-page_form is-centered ' style={{ margin: "auto 2rem" }}>
          <strong className="is-size-4"> Khóa học thử</strong>

          <div className="columns is-centered  is-multiline"
            style={{
              marginTop: "1rem",
              backgroundColor: "white",
              padding: "1rem",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              marginRight: "1rem",
              marginBottom: "2rem",
            }}>
            <div className="column is-6">
              <div className="field">
                <label className="label">Tên giáo viên</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Tên lớp học"
                  name="name"
                  id="name"
                  value={demoCourses.id_course.id_teacher.account_id.full_name}
                />
              </div>
            </div>

            <div className="column is-6">
              <div className="field">
                <label className="label">Tên lớp học chính thức</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Tên lớp học"
                  name="name"
                  id="name"
                  value={demoCourses.id_course.name}
                />
              </div>
            </div>

            <div className="column is-6">
              <div className="field "  >
                <label className="label">Loại lớp học</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Loại lớp học"
                  name="Loại lớp học"
                  id='Loại lớp học'
                  value={demoCourses.id_course.category_id.type}
                />

              </div>
            </div>
            <div className="column is-6">
              <div className="field "  >
                <label className="label">Cấp độ</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Cấp độ"
                  name="Level"
                  id='Level'
                  value={demoCourses.id_course.category_id.level}
                />

              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label className="label">Số lượng học viên</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Số lượng học viên"
                  name="number_of_student"
                  id='number_of_student'
                  value={demoCourses.id_course.number_of_student}
                />
              </div>
            </div>

            <div className="column is-6">
              <div className="field">
                <label className="label">Giá tiền(VND/buổi học) </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Giá tiền"
                  name="cost"
                  id='cost'
                  // disabled={formik.values.isDemoClass? true:false}
                  value={demoCourses.cost}
                />

              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label className="label">Ngày bắt đầu</label>
                <input
                  className="input"
                  type="date"
                  placeholder="Ngày bắt đầu"
                  name="start_date"
                  id='start_date'
                  min={demoCourses.start_date}
                  value={demoCourses.start_date}
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label className="label">Ngày kết thúc</label>
                <input
                  className="input"
                  type="date"
                  placeholder="Ngày kết thúc"
                  name="end_date"
                  id='end_date'
                  // min={new Date().toJSON().slice(0, 10)}
                  min={demoCourses.start_date}
                  value={demoCourses.end_date}
                />
              </div>
            </div>



            <div className="column is-6">
              <div className="field schedule_weekdays_filed">
                <label className="label">Lịch học </label>


                <input className=" input"
                  type="text"
                  name="weekdays"
                  id='weekdays'
                  value={demoCourses.schedule}
                />
              </div>
            </div>

            <div className="column is-6">
              <div className="field">
                <label className="label">Thời lượng buổi học(ph)</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Thời lượng buổi học(giờ)"
                  name="time_per_lesson"
                  id='time_per_lesson'
                  value={demoCourses.id_course.time_per_lesson}
                />
              </div>
            </div>

            <div className="column is-6">
              <div className="field">
                <label className="label">Thời gian học (buổi)</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Thời gian học (tháng)"
                  name="learning_period"
                  id='learning_period'
                  value={demoCourses.learning_period}
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label className="label">Ngày tạo</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Ngày tạo"
                  name="createdAt"
                  id='createdAt'
                  value={moment(demoCourses.createdAt).format('DD/MM/YYYY HH:mm:ss')}
                />
              </div>
            </div>
            <div className="column is-12 tooltip_column">
              <div className="field tooltip">
                <label className="label" style={{ display: "flex" }}>Mô tả khóa học </label>
                <textarea

                  className="textarea is-info"
                  placeholder="Mô tả lớp học"
                  id='description'
                  name='description'
                  value={demoCourses.id_course.description}
                ></textarea>
              </div>

            </div>
            <div className="column is-12 tooltip_column">
              <div className="field tooltip">
                <label className="label" style={{ display: "flex" }}>Link video: </label>
                {demoCourses.link_video && demoCourses.link_video.map((item, index) => (
                  <input
                    className="input mt-2"
                    type="text"
                    placeholder="link video "
                    name="link_video"
                    id={'link_video' + index}
                    value={item}
                  />
                ))}

              </div>

            </div>
          </div>
          {number_of_report.length > 0 &&
            <div  >
              <strong className="is-size-4"> Các báo cáo </strong>
              <div style={{
                marginTop: "1rem",

                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
              }}>
                <div className="column is-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    backgroundColor: "#ffe08a"
                  }}>
                  <label className="label ">Số người báo cáo</label>
                  <strong>{number_of_report.length}</strong>
                </div>
                <div className="column is-3 ml-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    backgroundColor: "#f14668",
                  }}>
                  <label className="label has-text-white">Số lần quản trị viên cảnh báo </label>
                  <strong className="has-text-white">{demoCourses.countReportedTime}</strong>
                </div>
              </div>
              <div className="columns is-centered  is-multiline mt-4"
                style={{
                  marginTop: "1rem",
                  backgroundColor: "white",
                  padding: "1rem",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  marginRight: "1rem",
                  marginBottom: "6.5rem",
                }}>
                {number_of_report.map((item, index) =>
                  <div className="columns is-multiline " style={{
                    marginTop: "1rem",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "left",

                  }}>
                    <div className="column">
                      <label className="label">Tên người báo cáo</label>
                      <input
                        className="input"
                        type="text"
                        placeholder="Tên người báo cáo"
                        name="name"
                        id="name"
                        readOnly={true}
                        value={item.id_student.account_id.full_name}
                      />
                    </div>
                    <div className="column ">
                      <label className="label">Số lần báo cáo </label>
                      <input
                        className="input"
                        type="text"
                        placeholder="Số lần báo cáo "
                        name="Số lần báo cáo "
                        id="Số lần báo cáo "
                        readOnly={true}
                        value={item.countReported}
                      />
                    </div>
                    <div className="column ">
                      <label className="label">Ngày báo cáo </label>
                      <input
                        className="Ngày báo cáo  input"
                        type="text"
                        placeholder="Ngày báo cáo"
                        name="Ngày báo cáo"
                        id="Ngày báo cáo"
                        readOnly={true}
                        value={item.reportedDateTime}
                      />
                    </div>
                    <div className="column is-12 ml-2" style={{ textAlign: 'left' }}>
                      <label className="label">Nội dung báo cáo: </label>
                      {item.reportedMessage.map(i =>
                      (<>
                        <li key={i}>{i}</li>

                      </>))}

                    </div>
                    <hr />
                  </div>
                )}

              </div>
            </div>}


        </div>
        <div className="group-buttons"
          style={{
            backgroundColor: "#f7f7f7",
            padding: "1rem",
            marginLeft: "1rem",
            border: "1px solid var(--border-color)",
            position: "fixed",
            bottom: "1rem",
            width: "79%",
          }}>

          <div className="button-left">

            {
              number_of_report.length > 0 &&
              <button
                type='button'
                className="button is-warning"
                onClick={() => setShow("block")}
              >
                <AiOutlineAlert
                  style={{
                    cursor: 'pointer',
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: ".25rem",
                    marginBottom: ".25rem",

                  }} /> Cảnh báo
              </button>
            }

          </div>
          <div className="button-right">
            <button className="button is-primary" type='submit' onClick={() => handleSave()}>
              <AiOutlineCheck style={{
                cursor: 'pointer',
                width: "1.5rem",
                height: "1.5rem",
                marginRight: ".25rem",

              }} /> Lưu
            </button>
            <button className="button is-warning is-light" type='button' onClick={handleBack}>
              <AiOutlineClose style={{
                cursor: 'pointer',
                width: "1.5rem",
                height: "1.5rem",
                marginRight: ".25rem",

              }} /> Thoát
            </button>
          </div>

        </div>
        <div className="modal "
          style={{
            display: `${show}`,
            // marginTop: "20rem",
          }}>
          <div className="modal-background"></div>

          <div className="modal-content is-centered"
            style={{ marginTop: "5rem" }}
          >
            <header className="modal-card-head">
              <p className="modal-card-title">Cảnh báo</p>
              <button className="modal-close is-large"
                aria-label="close"
                onClick={() => setShow("none")}>
              </button>
            </header>

            <strong className='is-size-5'>Nội dung cảnh báo: </strong>
            <div className="warning_content"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                textAlign: "left",
              }}
            >
              {warningMesage.map((item, index) =>
                <ol key={index}>{item}</ol>
              )}
              <div className="field">
                <label className="label">Thêm nội dung khác:</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Nội dung khác"
                  name="other_content"
                  id="other_content"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            </div>
            <div >
              <button
                className="button is-warning mr-6"
                type='submit'
                onClick={() => handleSendWarning(demoCourses._id)}>
                Hoàn thành
              </button>
              <button
                type='button'
                className="button is-danger"
                onClick={() => {
                  setShow("none")
                  // navigate('/admin/studentJudge')
                }}>
                Thoát
              </button>
            </div >

          </div>
        </div>
      </div >
    )
  }
}

export default EditDemoCourseForm

{/* <button className="button is-danger has-text-white" type='button'>
              < AiOutlineDelete onClick={() => handleDelete(demoCourses._id)}
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  width: "1.5rem",
                  height: "1.5rem",
                  marginTop: "-0.25rem",
                  marginRight: ".25rem",



                      // backgroundColor: "white",
                  // padding: "1rem",
                  // border: "1px solid var(--border-color)",
                  // borderRadius: "8px",
                  // marginRight: "1rem",
                  // marginBottom: "6.5rem",
                }} />
              Xóa</button> */}

{/* {demoCourses.isHidden == false ?
              <button className="button is-dark ml-3" type='button'>
                < BsEyeSlash onClick={() => handleHidden(demoCourses._id)}
                  style={{
                    color: 'white',
                    cursor: 'pointer',
                    width: "1.5rem",
                    height: "1.5rem",
                    marginTop: "-0.25rem",
                    marginRight: ".25rem",

                  }} />
                Ẩn</button>
              :
              <button className="button is-link ml-3" type='button'>

                < BsEye onClick={() => handleHidden(demoCourses._id)}
                  style={{
                    color: 'white',
                    cursor: 'pointer',
                    width: "1.5rem",
                    height: "1.5rem",
                    marginTop: "-0.25rem",
                    marginRight: ".25rem",

                  }} />
                Hiện</button>
            } 
          
               // const handleHidden = (id) => {
    //   if (number_of_report == 0) {
    //     toast.warning("Khóa học này không bị báo cáo . Không thể ẩn !", {
    //       position: "top-right",
    //     })
    //   }
    //   else {
    //     changeDemoCourseAppearance(id, { isHidden: demoCourses.isHidden }, account_id, dispatch, axiosJWTDemoCourse, accessToken, getDemoCourseByIdSuccess)
    //   }
    // }
   // const handleHidden = (id) => {
    //   if (number_of_report == 0) {
    //     toast.warning("Khóa học này không bị báo cáo . Không thể ẩn !", {
    //       position: "top-right",
    //     })
    //   }
    //   else {
    //     changeDemoCourseAppearance(id, { isHidden: demoCourses.isHidden }, account_id, dispatch, axiosJWTDemoCourse, accessToken, getDemoCourseByIdSuccess)
    //   }
    // }

          
          
          
          
          */}

{/* <div className="column is-12 mt-1  class-image-upload_column-is-5"
                style={{ width: "100%" }}>
                <div className="field class-image-upload_field " >
                  <label className="label">Ảnh đại diện</label>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <img 
                    style={{ width: "50%" }}
                    src={demoCourses.id_course.image? demoCourses.id_course.image: require('../../assets/images/no-class.jpg')}/>
                    <button
                      type='button ml-6'
                      className='button is-primary'
                      id="choose-image_button"
    
                    >
                      <p id='upload-teacher-image_p'>Chọn ảnh</p>
                      <input className="file-input"
                        type="file"
                        multiple accept="image/*"
                        name=""
                        onChange={(e) => setImages(e.target.files)} />
                    </button>
                    <p
                      id='personal_image'
                      name='personal_image'
                    ></p>
                  </div>
                </div>
              </div> */}
