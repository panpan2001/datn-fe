import React, { useEffect, useState } from 'react'
import '../../assets/styles/CreateClassPage.css'
import { useDispatch, useSelector } from 'react-redux'
import getCourseCategory from '../../redux/actions/CourseCategory/GetCourseCategory'
import uploadImage from '../../contexts/uploadImage'
import { AiOutlineClose } from 'react-icons/ai'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { createCourseSuccess } from '../../redux/slices/Course/createCourse'
import createAxiosJWT from '../../utils/createInstance'
import createCourse from '../../redux/actions/Course/CreateCourse'
import { useNavigate } from 'react-router-dom'
import updateTeacher from '../../redux/actions/Teacher/UpdateTeacher'
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher'

function CreateDemoCourseForm() {
  const weekdaysTags = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let teacher = useSelector(state => state.getTeacherByAccountId.teacher?.currentTeacher)
  console.log({teacher})
  const user = useSelector((state) => state.login.login?.currentUser)
  const accessToken = user?.accessToken
  const id = user?._id
  let axiosJWT = createAxiosJWT(dispatch, user, createCourseSuccess)
  
  useEffect(() => {
getAllCourseByIdTeacher(teacher?._id,dispatch)
    
  }, [])
  const courses= useSelector(state => state.getAllCourseByIdTeacher?.courses?.currentCourses)
console.log({courses})
//   const formik = useFormik({
//     initialValues: {
//       id_teacher: '',
//       name: '',
//       category_id: '',
//       number_of_student: '',
//       time_per_lesson: '',
//       learning_period: '',
//       cost: '',
//       weekdays: '',
//       time: '',
//       start_date: "",
//       end_date: "",
//       description: '',
//       images: '',
//       isDemoClass: false

//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Tên lớp học không được để trống')
//         .min(3, "Tối thiểu 3 Kí tự").max(50, "Tối đa 50 kí tự"),
//       category_id: Yup.string().required('Loại lớp học không được để trống'),
//       number_of_student: Yup.number().required(' không được để trống'),
//       time_per_lesson: Yup.number().required('Thời lượng buổi học không được để trống')
//         .min(45, "Thời lượng tối thiểu 45 ph ").max(180, "Thời lượng tối đa 180 ph "),
//       learning_period: Yup.number().required('Thời gian học không được để trống')
//         .min(1, "Thời gian học tối thiểu 1 tháng hoặc 1 buổi ").max(12, "Thời gian học tối đa 12 tháng hoặc 12 buổi"),
//       cost: Yup.number().required('Giá tiền không được để trống')
//         .min(20000, 'Giá tiền tối thiểu 20.000 VND').max(5000000, 'Giá tiền tối đa 5.000.000 VND'),
//       weekdays: Yup.string().required('Thứ không được để trống'),
//       time: Yup.string().required('Giờ bắt đầu học không được để trống'),
//       start_date: Yup.string().required('Ngày bắt đầu không được để trống'),
//       end_date: Yup.string().required('Ngày kết thúc không được để trống'),
//       description: Yup.string().required('Mô tả không được để trống').min(5, "Mô tả ít nhất 5 từ"),
//       isDemoClass: Yup.string().required("Nhãn lớp học không được để trống"),

//     }),
//     onSubmit: (values) => {
//       const [type, level] = formik.values.category_id.split("-")
//       const course_category_id = courseCategories.filter(courseCategory => courseCategory.type === type && courseCategory.level === level)[0]?._id
//       const checkDemoClass = values.isDemoClass == 'true'
//       console.log(checkDemoClass)
// const cost= checkDemoClass == true ?  "50000" : values.cost
//       // console.log(values)
//       let value = {
//         id_teacher: teacher._id,
//         name: values.name,
//         category_id: course_category_id,
//         number_of_student: values.number_of_student,
//         time_per_lesson: values.time_per_lesson,
//         learning_period: values.learning_period,
//         cost: cost ,
//         schedule: values.time + " - " + values.weekdays,
//         start_date: values.start_date,
//         end_date: values.end_date,
//         description: values.description,
//         image: url,
//       }
//       console.log(value)
//        createCourse(axiosJWT,accessToken, value,dispatch,navigate,id)
//       // .then((res) => {
//       //   console.log("res createCourse in create class page:",res,typeof res)
//       //    updateTeacher( teacher._id,res,dispatch,axiosJWT,accessToken)
//       // })

//     }
//   })

  // console.log(formik.values)
  return (
    <form className='create-class-page_container container  is-centered ' 
    // onSubmit={formik.handleSubmit}
    >
      <div className='create-class-page_form is-centered ' >
        <strong className="is-size-5">Tạo khóa học thử</strong>
      
          <div className="columns is-centered  is-multiline">
        
            {/* <div className="column is-6">
              <div className="field">
                <label className="label">Bạn muốn tạo khóa học thử cho khóa học nào?</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Tên lớp học"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && <p className="help is-danger">{formik.errors.name}</p>}
              </div>
            </div> */}

            <div className="column is-12"
            style={{textAlign:"left"}}>
              <div className="field "  >
                <label className="label">Tên khóa học chính thức</label>

                <div className=" field select "
                  placeholder="Loại lớp học"
                  style={{ width: '100%' }}>
                  <select
                    style={{ width: '100%' }}
                    id="name"
                    name="name"
                    // value={formik.values.category_id}
                    // onChange={formik.handleChange}
                  >
                    <option value="">Tên khóa học chính thức</option>
                    {courses.map(course => (
                      <option
                        id={course._id}
                        name={course._id}
                        value={course._id}
                      >{course.name}</option>

                    ))}

                  </select>
                  {/* {formik.errors.category_id && <p className="help is-danger">{formik.errors.category_id}</p>} */}
                </div>
              </div>
            </div>
            {/* <div className="column is-6">
              <div className="field">
                <label className="label">Số lượng học viên</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Số lượng học viên"
                  name="number_of_student"
                  id='number_of_student'
                  value={formik.values.number_of_student}
                  onChange={formik.handleChange}
                />
                {formik.errors.number_of_student && <p className="help is-danger">{formik.errors.number_of_student}</p>}
              </div>
            </div> */}
           
           
            <div className="column is-6">
              <div className="field">
                <label className="label">Ngày bắt đầu</label>
                <input
                  className="input"
                  type="date"
                  placeholder="Ngày bắt đầu"
                  name="start_date"
                  id='start_date'
                  min={new Date().toJSON().slice(0, 10)}
                  // value={formik.values.start_date}
                  // onChange={formik.handleChange}
                />
                {/* {formik.errors.start_date && <p className="help is-danger">{formik.errors.start_date}</p>} */}
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
                  // min={formik.values.start_date}
                  // value={formik.values.end_date}
                  // onChange={formik.handleChange}
                />
                {/* {formik.errors.end_date && <p className="help is-danger">{formik.errors.end_date}</p>} */}
              </div>
            </div>
            
          

            <div className="column is-12">
              <div className="field schedule_weekdays_filed">
                {/* <label className="label">Lịch học </label> */}
                <div className="schedule_weekdays_container">
                  <div className="schedule_weekdays_item column is-12">
                    <label className="label">Thứ </label>
                    <input className=" input"
                      type="text"
                      placeholder={[...weekdaysTags]}
                      name="weekdays"
                      id='weekdays'
                      // value={formik.values.weekdays}
                      // onChange={formik.handleChange}
                    />
                    {/* {formik.errors.weekdays && <p className="help is-danger">{formik.errors.weekdays}</p>} */}
                  </div>
                  <div className="schedule_weekdays_item column is-12 ">
                    <label className="label">Giờ bắt đầu </label>
                    <input
                      className="  input"
                      type="time"
                      placeholder="Giờ vào "
                      min="06:00" max="22:00"
                      pattern="/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/"
                      name="time"
                      id='time'
                      // value={formik.values.time}
                      // onChange={formik.handleChange}
                    />
                    {/* {formik.errors.time && <p className="help is-danger">{formik.errors.time}</p>} */}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="column is-6">
              <div className="field">
                <label className="label">Thời lượng buổi học(ph)</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Thời lượng buổi học(giờ)"
                  name="time_per_lesson"
                  id='time_per_lesson'
                  value={formik.values.time_per_lesson}
                  onChange={formik.handleChange}
                />
                {formik.errors.time_per_lesson && <p className="help is-danger">{formik.errors.time_per_lesson}</p>}
              </div>
            </div> */}

            <div className="column is-6">
              <div className="field">
                <label className="label">Thời gian học (buổi)</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Thời gian học (tháng)"
                  name="learning_period"
                  id='learning_period'
                  // value={formik.values.learning_period}
                  // onChange={formik.handleChange}
                />
                {/* {formik.errors.learning_period && <p className="help is-danger">{formik.errors.learning_period}</p>} */}
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
                  // value={formik.values.isDemoClass? formik.values.cost="50000":formik.values.cost}
                  // onChange={formik.handleChange}
                />
                {/* {formik.values.isDemoClass? "":
                
                formik.errors.cost && <p className="help is-danger">{formik.errors.cost}</p>} */}
              </div>
            </div>
            
            <div className="column is-12 tooltip_column">
              <div className="field tooltip">
                <label className="label" style={{ display: "flex" }}>Mô tả khóa học thử </label>
                <textarea

                  className="textarea is-info"
                  placeholder="Mô tả khóa học thử"
                  id='description'
                  name='description'
                  // value={formik.values.description}
                  // onChange={formik.handleChange}
                ></textarea>
                {/* {formik.errors.description && <p className="help is-danger">{formik.errors.description}</p>} */}
              </div>

            </div>
          
          </div>
        

     
        <div className="field is-grouped is-grouped-centered" id='signup_button'>
          <button className="button is-primary" type='submit' >Tạo khóa học thử</button>
        </div>
      </div>

    </form>
  )
}

export default CreateDemoCourseForm 

