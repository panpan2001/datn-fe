import React, { useEffect, useState } from "react";
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux";
import getCourseCategoryById from "../../redux/actions/CourseCategory/GetCourseCategoryById";
import { BiChevronsUp, BiEditAlt, BiTrash } from "react-icons/bi";
import '../../assets/styles/StudentClassAccordion.css'
import createAxiosJWT from "../../utils/createInstance";
import { useNavigate } from "react-router-dom";
import cancelRegisterCourse from "../../redux/actions/CourseStudent/cancelRegisterCourse";
import { cancelRegisterCourseSuccess } from "../../redux/slices/CourseStudent/cancelRegisterCourse";
import cancelRegisterDemoCourse from "../../redux/actions/DemoCourseStudent/CancelRegisterDemoCourse";
import { cancelRegisterDemoCourseSuccess } from "../../redux/slices/DemoCourseStudent/cancelRegisterDemoCourse";

const StudentClassAccordion = ({ data }) => {
  console.log("data StudentClassAccordion", {data})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const register_date = moment(data.createdAt).format("DD/MM/YYYY HH:mm:ss a")
  // new Date(data.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' });
  let time = ''
  let start_date = ''
  let end_date = ''
  const formatter = new Intl.NumberFormat({
    style: 'currency',
    currency: 'VND',

  });
  if (data) {
    // time = data.id_course.schedule.split(" - ")[0]
    // time = time.split(":")[0] < 12 ? time + " AM" : time + " PM"
    start_date = moment(data.id_course.start_date).format("DD/MM/YYYY")
    end_date = moment(data.id_course.end_date).format("DD/MM/YYYY")

  }
  const [state, setState] = useState({ cardState: false });
  const toggleCardState = () => {
    setState({ cardState: !state.cardState });
  };
  const { cardState } = state;
  // useEffect(() => {
  //   getCourseCategoryById(data.id_course.category_id._id, dispatch)
  // }, [])
  const category = useSelector((state) => state.getCourseById.course?.currentCourse)
  // console.log({category},category.type,category.level)
  const [show, setShow] = useState("none")
  const [warning, setWarning] = useState(false)
  const user = useSelector((state) => state.login.login?.currentUser)
  // console.log({user} )
  const accessToken = user?.accessToken
  const axiosJWT = createAxiosJWT(dispatch, user, cancelRegisterCourseSuccess)
  const id = user?._id

  // console.log({axiosJWT})
  const handleOpenModal = () => {
    const checkTime = (Date.now() - new Date(data.id_course.start_date +" "+data.id_course.schedule.split(" - ")[0])) / (1000 * 60 * 60 * 24)

    if (checkTime < 1) {

      setShow("block")
      setWarning(true)

    }
    else {
      setShow("block")
      setWarning(false)

    }
  }
  const handleCancelCourse = () => {

    cancelRegisterCourse(data._id, dispatch, axiosJWT, accessToken, id)
    setShow("none")


  }
if(data){
  return (
    <div className="column ">
      <div className="card "
        style={{
          backgroundColor: " rgb(167 235 246)",
        }}
      >
        <header
          className="card-header"
          style={{ cursor: "pointer" }}
          onClick={toggleCardState}
        >
          <p className="card-header-title"
            style={{ alignItems: "baseline" }}
          >{data.id_course.name}
            {/* <div class="content column is-6">
              {data.id_course.isDemoClass ?
                <button className="button course_label is-warning ml-3">Học thử</button> :
                <button className="button course_label is-primary ml-3">Học chính thức</button>
              }
            </div> */}
          </p>

          <div className="card-header-icon student-class_group-icon"
          >

            <BiChevronsUp
              style={{
                transform: cardState ? null : "rotate(180deg)",
                transition: "transform 250ms ease-out"
              }} />
          </div>
        </header>
        <div
          className="card-content"
          aria-hidden={cardState ? "false" : "true"}
          style={{
            maxHeight: cardState ? 1000 : 0,
            padding: cardState ? null : 0,
            overflow: "hidden",
            transition: "max-height 250ms ease",
            transition: "padding 250ms ease"
          }}
        >
          <div className=" columns is-multiline is-centered"
            style={{
              textAlign: 'left',
              flexDirection: "row"
            }}
          >


            {category &&
              <>
                <div class=" column is-6">
                  <p><strong>Loại: </strong>{data.id_course.category_id.type}</p>
                </div>
                <div class=" column is-6">
                  <p><strong>Cấp độ: </strong>{data.id_course.category_id.level}</p>
                </div>
              </>}

            <div className=" column is-6">
              <p><strong>Số lượng học viên: </strong>{data.id_course.number_of_student}</p>
            </div>
            <div className=" column is-6">
              <p><strong>Thời lượng buổi học(ph): </strong>{data.id_course.time_per_lesson}</p>
            </div>
            <div className=" column is-6">
              <p> <strong>Thời gian học: </strong>{data.id_course.learning_period} {data.id_course.isDemoClass ? 'buổi' : 'tháng'}</p>
            </div>
            <div className=" column is-6">
              <p><strong>Lịch học: </strong>{data.id_course.schedule.split(" - ")[0].split(":")[0] < 12 ? time + " AM" : time + " PM"} 
              - {data.id_course.schedule.split(" - ")[1]}</p>
            </div>
            <div className=" column is-6">
              <p><strong>Ngày bắt đầu: </strong>{start_date}</p>
            </div>
            <div className=" column is-6">
              <p><strong>Ngày kết thúc: </strong>{end_date}</p>
            </div>
            <div className=" column is-6">
              <p><strong>Giá tiền(VDN/ buổi): </strong>{formatter.format(data.id_course.cost)}</p>
            </div>

            <div className=" column is-16">
              <p><strong>Đăng kí lúc: </strong>{register_date}</p>
            </div>
            <div className="  column  is-12">
            <p><strong>Link meeting: </strong>{data.link_meeting}</p>
          </div>
          </div>
         
          <div className="student-class_button"
            style={{
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            <button className="button is-danger" type="button" onClick={() => handleOpenModal()}>Hủy đăng kí</button>
            <div class="modal " style={{
              display: `${show}`,
            }}>
              <div class="modal-background"></div>

              <div class="modal-content is-centered"
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
                <header class="modal-card-head">
                  <p class="modal-card-title">Cảnh báo</p>
                  <button class="modal-close is-large" aria-label="close" onClick={() => setShow("none")}></button>

                </header>
                { new Date (data.id_course.end_date).getTime() > Date.now()? 
                (warning ?

                
                <strong className='is-size-5'>Bạn chắc chắn muốn hủy khóa học này chứ? </strong> :
                  <strong className='is-size-5'>Hạn cuối để hủy khóa học là 24h trước khi khóa học bắt đầu. Hiện tại, bạn không thể hủy khóa học này! </strong>

                )
              :(<>
                                <strong className='is-size-5'>Khóa học đã kết thúc. Bạn không thể hủy khóa học này! </strong>

              </>)
                }
                <div >
                  {warning ?
                    <button className="button is-danger mr-6" onClick={handleCancelCourse}>Hủy  </button> :
                    <></>
                  }
                  <button className="button is-warning" onClick={() => setShow("none")}>Thoát  </button>
                </div >
                {/* } */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
 
};

export default StudentClassAccordion
{/* <button className="button is-info">
            <BiEditAlt className="student-class_icon"
             style={{color:"rgb(89 178 236)"}}/>
             
            </button> */}

{/* <BiTrash 
            className="student-class_icon"
            style={{color:"#d60909"}}/> 
           <div className=" column is-6">
              <p><strong>Mô tả: </strong>{data.id_course.description}</p>
            </div>
          
          */}