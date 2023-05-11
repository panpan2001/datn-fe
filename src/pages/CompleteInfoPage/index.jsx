import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import createStudent from '../../redux/actions/Student/CreateStudent'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import createAxiosJWT from '../../utils/createInstance'
import { createStudentSuccess } from '../../redux/slices/Student/createStudentSlice'

const CompleteInfoPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.login.login?.currentUser)
  const accessToken = user?.accessToken
  const account_id = user?._id
  let axiosJWT = createAxiosJWT(dispatch, user, createStudentSuccess)
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
      const student={
        account_id:account_id,
        parent_name:values.parent_name,
        parent_phone_number:values.parent_phone_number
      }
      createStudent(student, accessToken, axiosJWT, dispatch, navigate)
        }

  })
  console.log("account id : ",account_id)
  return (
    <form onSubmit={formilk.handleSubmit}>
      <div className="field">
        <label className="label">Email</label>
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
        <label className="label">Mật khẩu</label>
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
      <div className="field is-grouped is-grouped-centered" id='login_button'>
        <button className="button is-link" type="submit">Hoàn thành </button>
      </div>
    </form>
  )
}

export default CompleteInfoPage