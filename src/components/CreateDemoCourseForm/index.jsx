import React, { useEffect, useState } from 'react'
import '../../assets/styles/CreateClassPage.css'
import { useDispatch, useSelector } from 'react-redux'
import getCourseCategory from '../../redux/actions/CourseCategory/GetCourseCategory'
import uploadImage from '../../contexts/uploadImage'
import { AiOutlineClose } from 'react-icons/ai'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import createAxiosJWT from '../../utils/createInstance'
import { useNavigate } from 'react-router-dom'
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher'
import createDemoCourse from '../../redux/actions/DemoCourse/createDemoCourse'
import { createDemoCourseSuccess } from '../../redux/slices/DemoCourse/createDemoCourse'

function CreateDemoCourseForm() {
  const weekdaysTags = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let teacher = useSelector(state => state.getTeacherByAccountId.teacher?.currentTeacher)
  console.log({ teacher })
  const user = useSelector((state) => state.login.login?.currentUser)
  const accessToken = user?.accessToken
  const id = user?._id
  let axiosJWT = createAxiosJWT(dispatch, user, createDemoCourseSuccess)

  useEffect(() => {
    getAllCourseByIdTeacher(teacher?._id, dispatch)

  }, [])
  const courses = useSelector(state => state.getAllCourseByIdTeacher?.courses?.currentCourses)
  console.log({ courses })
  const formik = useFormik({
    initialValues: {
      id_course: '',
      start_date: "",
      end_date: "",
      weekdays: '',
      time: '',
      learning_period: "",
      cost: '30000',
      link_video: [],
      link_meeting: []
    },
    validationSchema: Yup.object({

      learning_period: Yup.number().required('Thời gian học không được để trống')
        .min(1, "Thời gian học tối thiểu 1 buổi ").max(12, "Thời gian học tối đa 5 buổi"),
      start_date: Yup.string().required('Ngày bắt đầu không được để trống'),
      end_date: Yup.string().required('Ngày kết thúc không được để trống'),
      weekdays: Yup.string().required('Thứ không được để trống'),
      time: Yup.string().required('Giờ bắt đầu học không được để trống'),


    }),
    onSubmit: (values) => {

      let value = {
        id_course: values.id_course,
        cost: formik.initialValues.cost,
        schedule: values.time + " - " + values.weekdays,
        start_date: values.start_date,
        end_date: values.end_date,
        learning_period: values.learning_period,
        link_meeting: formik.initialValues.link_meeting,
        link_video: formik.initialValues.link_video

      }
      console.table("value",value)
      // account_id,value,dispatch,axiosJWT,accessToken,navigate
      createDemoCourse(id, value, dispatch, axiosJWT, accessToken,navigate)
    }
  })
  var st=[]
  useEffect(() => {
     st= courses.filter(course=>course._id==formik.values.id_course)
console.log("st",st[0])
  },[formik.values.id_course])

  // console.log(formik.values)
  return (
    <form className='create-class-page_container container  is-centered '
    onSubmit={formik.handleSubmit}
    >
      <div className='create-class-page_form is-centered ' >
        <strong className="is-size-5">Tạo khóa học thử</strong>
        {courses &&
          <div className="columns is-centered  is-multiline">

         
            <div className="column is-12"
              style={{ textAlign: "left" }}>
              <div className="field "  >
                <label className="label">Tên khóa học chính thức</label>

                <div className=" field select "
                  placeholder="Loại lớp học"
                  style={{ width: '100%' }}>
                  <select
                    style={{ width: '100%' }}
                    id="id_course"
                    name="id_course"
                  value={formik.values.id_course}
                  onChange={formik.handleChange}
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
                  {formik.errors.id_course && <p className="help is-danger">{formik.errors.id_course}</p>}
                </div>
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
                  min={new Date().toJSON().slice(0, 10)}
                  // max={st!= 0 && new Date(st.start_date).toJSON().slice(0, 10)  }//formik.values.id_course.start_date
                value={formik.values.start_date}
                onChange={formik.handleChange}
                />
                {formik.errors.start_date && <p className="help is-danger">{formik.errors.start_date}</p>}
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
                min={formik.values.start_date}
                // max={st!= 0 && new Date(st.start_date).toJSON().slice(0, 10)  }
                onChange={formik.handleChange}
                />
                {formik.errors.end_date && <p className="help is-danger">{formik.errors.end_date}</p>}
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
                    value={formik.values.weekdays}
                    onChange={formik.handleChange}
                    />
                    {formik.errors.weekdays && <p className="help is-danger">{formik.errors.weekdays}</p>}
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
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    />
                    {formik.errors.time && <p className="help is-danger">{formik.errors.time}</p>}
                  </div>
                </div>
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
                value={formik.values.learning_period}
                onChange={formik.handleChange}
                />
                {formik.errors.learning_period && <p className="help is-danger">{formik.errors.learning_period}</p>}
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
                value={ "30000"}
                disabled={true}
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
                value={formik.values.description}
                onChange={formik.handleChange}
                ></textarea>
                {formik.errors.description && <p className="help is-danger">{formik.errors.description}</p>}
              </div>

            </div>

          </div>
        }




        <div className="field is-grouped is-grouped-centered" id='signup_button'>
          <button className="button is-primary" type='submit' >Tạo khóa học thử</button>
        </div>
      </div>

    </form>
  )
}

export default CreateDemoCourseForm

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
