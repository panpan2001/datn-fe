import React, { useEffect, useState } from "react";
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux";
import getCourseCategoryById from "../../redux/actions/CourseCategory/GetCourseCategoryById";
import { BiChevronsUp, BiEditAlt, BiTrash } from "react-icons/bi";
import '../../assets/styles/StudentClassAccordion.css'
import cancelRegisterDemoCourse from "../../redux/actions/DemoCourseStudent/CancelRegisterDemoCourse";
import createAxiosJWT from "../../utils/createInstance";
import { cancelRegisterDemoCourseSuccess } from "../../redux/slices/DemoCourseStudent/cancelRegisterDemoCourse";
import { useNavigate } from "react-router-dom";
import getCoursebyId from "../../redux/actions/Course/GetCoursebyId";


const StudentDemoClassAccordion = ({ data, color }) => {
  // console.log("demo class",{data})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const register_date = new Date(data.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' });
  let time = ''
  let start_date = ''
  let end_date = ''
  const formatter = new Intl.NumberFormat({
    style: 'currency',
    currency: 'VND',

  });
  if (data) {
    time = data.id_demo_course.schedule.split(" - ")[0]
    time = time.split(":")[0] < 12 ? time + " AM" : time + " PM"
    start_date = moment(data.id_demo_course.start_date).format("DD/MM/YYYY")
    end_date = moment(data.id_demo_course.end_date).format("DD/MM/YYYY")

  }

  const [state, setState] = useState({ cardState: false });
  const toggleCardState = () => {
    setState({ cardState: !state.cardState });
  };
  const { cardState } = state;
  // useEffect(() => {
  //   getCoursebyId(data.id_demo_course.id_course, dispatch)
  // }, [])
  // const category = useSelector((state) => state.getCourseById.course?.currentCourse)
  // console.log({category},category.type,category.level)
  // const course= useSelector((state) => state.getCourseById.course?.currentCourse)
  const [show, setShow] = useState("none")
  const [warning, setWarning] = useState(false)
  const user = useSelector((state) => state.login.login?.currentUser)
  const accessToken = user?.accessToken
  let axiosJWT = createAxiosJWT(dispatch, user, cancelRegisterDemoCourseSuccess)
  const handleOpenModal = () => {
    const checkTime = (Date.now() - new Date(data.createdAt)) / (1000 * 60 * 60 * 24)

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
    cancelRegisterDemoCourse(data._id, dispatch, axiosJWT, accessToken, navigate)
    setShow("none")
  }

  return (
    <div className="column ">
      <div className="card "
        style={{
          // backgroundColor: " rgb(167 235 246)",
          backgroundColor: `${color}`
        }}
      >
        <header
          className="card-header"
          style={{ cursor: "pointer" }}
          onClick={toggleCardState}
        >
          <p className="card-header-title"
            style={{ alignItems: "baseline" }}
          >{data && data.id_demo_course.id_course.name}</p>

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




            <div class=" column is-6">
              <p><strong>Loại: </strong>{data.id_demo_course.id_course.category_id.type}</p>
            </div>
            <div class=" column is-6">
              <p><strong>Cấp độ: </strong>{data.id_demo_course.id_course.category_id.level}</p>
            </div>

            <div className=" column is-6">
              <p> <strong>Thời gian học (buổi): </strong>{data.id_demo_course.learning_period} </p>
            </div>
            <div className=" column is-6">
              <p><strong>Lịch học: </strong>{time} - {data.id_demo_course.schedule.split(" - ")[1]}</p>
            </div>
            <div className=" column is-6">
              <p><strong>Ngày bắt đầu: </strong>{start_date}</p>
            </div>
            <div className=" column is-6">
              <p><strong>Ngày kết thúc: </strong>{end_date}</p>
            </div>
            <div className=" column is-6">
              <p><strong>Giá tiền(VDN/ buổi): </strong>{formatter.format(data.id_demo_course.cost)}</p>
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
                {warning ?
                  <strong className='is-size-5'>Bạn chắc chắn muốn hủy khóa học này chứ? </strong> :
                  <strong className='is-size-5'>Đã quá 24h kể từ lúc đăng kí, bạn không thể hủy khóa học này! </strong>


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
};

export default StudentDemoClassAccordion
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

          //https://stackoverflow.com/questions/12821596/multiple-populates-mongoosejs 