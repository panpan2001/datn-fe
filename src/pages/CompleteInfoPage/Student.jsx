import React, { useEffect } from 'react'
import '../../assets/styles/CompleteInfoPage.css'
import { useDispatch, useSelector } from 'react-redux'
import createStudent from '../../redux/actions/Student/CreateStudent'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
const StudentCompleteInfoPage = () => {
  console.log("Hoho StudentCompleteInfoPage ")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.signup.register?.currentUser)
  const account_id = user?._id
  console.log("user id complete info student page: ",account_id)

  const formilk = useFormik({
    initialValues: {
      parent_name: '',
      parent_phone_number: ''
    },
    validationSchema: Yup.object({
      parent_name: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự.")
        .max(50, "Tối đa 50 kí tự."),
      parent_phone_number: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(10, "Tối thiểu 10 kí tự.")
        .max(20, "Tối đa 10 kí tự.")
        .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Sai định dạng !"),
    })
    ,
    onSubmit: (values) => {
      values={...values,account_id:account_id}
      console.log("h la submit form ", values)
      createStudent(values,dispatch, navigate)
    }

  })

  console.log("values ", formilk.values)

  return (
    <div className="columns complete-info-page">
      
      <form className='student-complete-info_form  is-centered' onSubmit={formilk.handleSubmit}>
          <div className=" field">
            <label className="label student-complete-info_label">Họ tên phụ huynh </label>
            <input
              className="input"
              type="text"
              placeholder="parent_name"
              name='parent_name'
              id='parent_name'
              value={formilk.values.parent_name}
              onChange={formilk.handleChange} />
            {formilk.errors.parent_name && <p className="help is-danger">{formilk.errors.parent_name}</p>}
          </div>
          <div className="field">
            <label className="label student-complete-info_label">Số điện thoại phụ huynh</label>
            <input
              className="input"
              type="text "
              placeholder="parent_phone_number"
              name='parent_phone_number'
              id='parent_phone_number'
              value={formilk.values.parent_phone_number}
              onChange={formilk.handleChange} />
            {formilk.errors.parent_phone_number && <p className="help is-danger">{formilk.errors.parent_phone_number}</p>}
          </div>
          <div className="field is-grouped is-grouped-centered mt-4" id='student-complete-info_button'>
           <button className="button is-link " type="submit">Hoàn thành </button>
          </div>
        </form>
    </div>

  )
}

export default StudentCompleteInfoPage


 {/* 
let user = useSelector((state) => state.signup.register?.currentUser)
  const navigate = useNavigate()

<div className="column is-2"></div> */}
      {/* <div className="column is-6 ">
        {user.role_name === 'student' ? <StudentCompleteInfoForm /> :
          (user.role_name === 'teacher' ? <TeacherCompleteInfoForm /> :
            navigate('/profile'))}
      </div> */}
      {/* <div className="column is-6 complete-info-page_column-6 ">
        <img className="complete-info-page_image" src={require('../../assets/images/2.jpg')} alt="" srcset="" />
        <div id="message-1">
          <strong>Bạn điền thêm thông tin để hoàn tất đăng kí nha!</strong>
        </div>
        <div id="message-2"></div>
        <div id="message-3"></div>
      </div> */}