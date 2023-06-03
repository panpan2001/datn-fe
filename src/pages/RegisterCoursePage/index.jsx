import React from 'react'
import '../../assets/styles/RegisterCoursePage.css'
import { useSelector } from 'react-redux'
function RegisterCoursePage() {
const course= useSelector((state)=>state.getCourseById.course?.currentCourse)
const teacher = useSelector(state => state.getTeacherById.teacher?.currentTeacher)
const formatter = new Intl.NumberFormat( {
  style: 'currency',
  currency: 'VND',

});
// const fee= parseInt(10000)
// let sum_price= parseInt(course.cost)+ parseInt(fee) 
// sum_price= formatter.format(sum_price) + " VNĐ"
const weekdays= course.schedule.split(" - ")[1].split(",")
let time= course.schedule.split(" - ")[0]
time= time.split(":")[0] <12? time+" AM" : time+" PM"
// console.log({course,teacher})
  return (
    <form className="register-course-page_form mt-1">
     
      <div className="register-course-page_container container">
      <strong className='is-size-4'>Đăng kí học thử </strong>
  
      <section className="info-teacher_section ">
      <strong className="is-size-5 ">Giáo viên của bạn</strong>
        <div className="columns info-teacher_section-column mt-1 ml-1">
          <div className="mr-3 info-teacher_section-left">
            <img src={teacher.personal_image}/>
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
      <br/>
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
                       
                    <div className=" field select "
                  placeholder="Loại lớp học"
                  style={{ width: '100%' }}>
                  <select
                    style={{ width: '100%' }}
                    id="weekdays"
                    name="weekdays"
                    
                  >
                    <option value="">Lịch học</option>
                    {weekdays.map(weekday => (
                      <option
                        id={weekday}
                        name={weekday}
                        value={weekday}
                      >{weekday}</option>

                    ))}

                  </select>
                </div>
                    </div>
                </div>
                <div className="column is-6">
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
        <button className="button is-primary">Đăng kí</button>
        <button className="button is-danger">Hủy</button>
      </div>
      </div>
     
    </form>
  )
}

export default RegisterCoursePage