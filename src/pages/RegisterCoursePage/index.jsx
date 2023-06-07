import React from 'react'
import '../../assets/styles/RegisterCoursePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import moment from 'moment'
import { createRegisterDemoCourseStart, createRegisterDemoCourseSuccess } from '../../redux/slices/DemoCourse/createRegisterDemoCourse'
import registerDemoCourse from '../../redux/actions/DemoCourse/RegisterDemoCourse'
import createAxiosJWT from '../../utils/createInstance'
function RegisterCoursePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const course = useSelector((state) => state.getCourseById.course?.currentCourse)
  const teacher = useSelector(state => state.getTeacherById.teacher?.currentTeacher)
  const studentPersonalInfo = useSelector((state) => state.getStudentByAccountId.students?.infoStudent)
  const user= useSelector((state) => state.login.login?.currentUser)
const accessToken = user?.accessToken
 let axiosJWT = createAxiosJWT(dispatch, user, createRegisterDemoCourseSuccess)
  const formatter = new Intl.NumberFormat({
    style: 'currency',
    currency: 'VND',

  });
  // const fee= parseInt(10000)
  // let sum_price= parseInt(course.cost)+ parseInt(fee) 
  // sum_price= formatter.format(sum_price) + " VNĐ"
  let time = course.schedule.split(" - ")[0]
  time = time.split(":")[0] < 12 ? time + " AM" : time + " PM"
  // console.log({course,teacher})


  const start_date = moment(course.start_date).format("DD/MM/YYYY")
  const end_date = moment(course.end_date).format("DD/MM/YYYY")
  
// const handleSubmit = () => {
//   const value={
//     id_course: course._id,
//     id_student: studentPersonalInfo._id,
//     isDeleted:false

//   }
//   registerDemoCourse(value,dispatch,navigate,accessToken,axiosJWT)
// }

const formik=useFormik({
    initialValues:{
        id_course:course._id,
        id_student:studentPersonalInfo._id,
        isDeleted:false
    },
    onSubmit:(values)=>{
      console.log(values)
      if(course.isDemoClass){
        registerDemoCourse(values,dispatch,navigate,accessToken,axiosJWT)
      }
      else {
        console.log("cho tao lm da nha ")
      }
    }
})

  return (
    <form className="register-course-page_form mt-1" onSubmit={formik.handleSubmit}>

      <div className="register-course-page_container container">
        <strong className='is-size-4'>Đăng kí {course.isDemoClass? "học thử":"học chính thức"} </strong>

        <section className="info-teacher_section ">
          <strong className="is-size-5 ">Giáo viên của bạn</strong>
          <div className="columns info-teacher_section-column mt-1 ml-1">
            <div className="mr-3 info-teacher_section-left">
              <img src={teacher.personal_image} />
            </div>
            <div className="column is-9 info-teacher_section-right">
              <div className="column is-12 ">
                <div className="field register-course_field">
                  <label className="label">Tên giáo viên</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Tên giáo viên"
                    name="full_name"
                    id="full_name"
                    disabled={true}
                    value={teacher.account_id.full_name}
                  />
                </div>
              </div>
              <div className="column is-12">
                <div className="field register-course_field">
                  <label className="label">Email</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Email"
                    name="Email"
                    id="Email"
                    disabled={true}
                    value={teacher.account_id.email}
                  />
                </div>
              </div>
              <div className="column is-12">
                <div className="field register-course_field">
                  <label className="label">Số điện thoại</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Số điện thoại"
                    name="phone_number"
                    id="phone_number"
                    disabled={true}
                    value={teacher.account_id.phone_number}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section className="info-course_section ">
          <strong className="is-size-5">Khóa học bạn chọn</strong>
          <div className="columns is-multiline info-course_section-column mt-1 ml-1">

            <div className="column is-12">
              <div className="field register-course_field">
                <label className="label">Tên lớp học</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Tên lớp học"
                  name="name"
                  id="name"
                  disabled={true}
                  value={course.name}
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="field register-course_field">
                <label className="label">Loại</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Loại"
                  name="type"
                  id="type"
                  disabled={true}
                  value={course.category_id.type}
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="field register-course_field">
                <label className="label">Cấp độ</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Cấp độ"
                  name="level"
                  id="level"
                  disabled={true}
                  value={course.category_id.level}
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="field register-course_field">
                <label className="label">Thời lượng buổi học (ph)</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Thời lượng"
                  name="time_per_lesson"
                  id="time_per_lesson"
                  disabled={true}
                  value={course.time_per_lesson}
                />
              </div>
            </div>

            <div className="column is-6">
              <div className="field register-course_field">
                <label className="label">Lịch học</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Lịch học"
                  name="schedule"
                  id="schedule"
                  disabled={true}
                  value={`${time} - ${course.schedule.split(" - ")[1]}`}
                />

              </div>
            </div>

            <div className="column is-6">
              <div className="field register-course_field">
                <label className="label">Ngày học</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Ngày học"
                  name="time"
                  id="time"
                  disabled={true}
                  value={`${start_date} - ${end_date}`}
                />
              </div>
            </div>
          

            
            <div className="column is-6">
              <div className="field register-course_field">
                <label className="label">Tổng tiền thanh toán (VND)
                  {/* <br/>(bao gồm 10.000 VND phí thanh toán qua hệ thống ) */}
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Tên lớp học"
                  name="sum_price"
                  id="sum_price"
                  disabled={true}
                  // value={sum_price}
                  value={formatter.format(course.cost)}
                />
              </div>
            </div>

          </div>

        </section>
        <div className="register-course-group-buttons mt-6">
          <button className="button is-primary" type='submit'  >Đăng kí</button>
          <button className="button is-danger" onClick={() => navigate('/findingTeacher')}>Hủy</button>
        </div>
      </div>

    </form>
  )
}

export default RegisterCoursePage

{/* <div className="column is-6">
              <div className="field register-course_field">
                <label className="label">Giờ bắt đầu</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Giờ bắt đầu"
                  name="time"
                  id="time"
                  disabled={true}
                  value={time}
                />
              </div>
            </div> */}

              {/* <div className="column is-6">
              <div className="field register-course_field">
                <label className="label">Ngày kết thúc</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Ngày kết thúc"
                  name="time"
                  id="time"
                  disabled={true}
                  value={end_date}
                />
              </div>
            </div> */}