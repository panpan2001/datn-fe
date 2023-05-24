import React, { useEffect, useState } from 'react'
import '../../assets/styles/DegreeInfo.css'
import { Link } from 'react-router-dom'
import uploadImage from '../../contexts/uploadImage'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import createTeacherDegree from '../../redux/actions/TeacherDegree/CreateteacherDegree'
function DegreeInfo() {
  const [imageDegree, setImageDegree] = useState()
  const [imageDegreeUrl, setImageDegreeUrl] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
  
    uploadImage(imageDegree).then((res) => {
      setImageDegreeUrl(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [ imageDegree])
  console.log("url degree ", imageDegreeUrl)
  const formik = useFormik({
    initialValues: {
  
      degree_name: '',
      degree_period: '',
      degree_level: '',
      degree_evidence: '',
      degree_description: '',
      degree_status: false

    },
    validationSchema: Yup.object({


      degree_name: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự."),
      degree_period: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự."),
      degree_level: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự."),
      degree_description: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự."),


    }),
    onSubmit: (values) => {
     
      const degree = {
        degree_name: values.degree_name,
        degree_period: values.degree_period,
        degree_level: values.degree_level,
        degree_description: values.degree_description,
        degree_evidence: imageDegreeUrl,
        degree_status: values.degree_status
      }

      console.table(degree)
      createTeacherDegree(dispatch, degree, navigate)
    }
  })

  return (
    <form className='degree-info_container' onSubmit={formik.handleSubmit}>
     <strong className='is-size-4'>Thông tin chứng chỉ  </strong>
      <div className="columns is-multiline teacher-degree-info">
        <div className="column is-5">
          <div className="field">
            <label className="label" >Tên chứng chỉ </label>
            <input className="input"
              type="text"
              placeholder="Tên chứng chỉ"
              id='degree_name'
              name='degree_name'
              value={formik.values.degree_name}
              onChange={formik.handleChange}
            />
            {formik.errors.degree_name && <p className="help is-danger">{formik.errors.degree_name}</p>}
          </div>
        </div>

        <div className="column is-5">
          <div className="field">
            <label className="label" >Thời gian học </label>
            <input className="input"
              type="text"
              placeholder="Năm bắt đầu - Năm kết thúc "
              id="degree_period"
              name="degree_period"
              value={formik.values.degree_period}
              onChange={formik.handleChange}
            />
            {formik.errors.degree_period && <p className="help is-danger">{formik.errors.degree_period}</p>}
          </div>
        </div>

        <div className="column is-5">
          <label className="label" id="level"  >Cấp độ </label>
          {/* <div className=" field select "
          style={{width:"100%"}}>
            <select >
              <option value="CEFR Level A1 - Beginner">CEFR Level A1 - Beginner</option>
              <option value="CEFR Level A2 - Pre-intermediate ">CEFR Level A2 - Pre-intermediate</option>
              <option value="CEFR Level B1 - Intermediate">CEFR Level B1 - Intermediate</option>
              <option value="CEFR Level B2 - Upper-Intermediate">CEFR Level B2 - Upper-Intermediate</option>
              <option value="CEFR Level C1 - 	Advanced">CEFR Level C1 - 	Advanced</option>
              <option value="CEFR Level C2 - Mastery">CEFR Level C2 - Mastery</option>
            </select>
          </div> */}
          <input className="input"
            type="text"
            placeholder="TOEIC 800, IELTS 7.5,..."
            id="degree_level"
            name="degree_level"
            value={formik.values.degree_level}
            onChange={formik.handleChange}
          />
          {formik.errors.degree_level && <p className="help is-danger" style={{ textAlign: "left" }}>{formik.errors.degree_level}</p>}
        </div>

        <div className="column is-5">
          <div className="field ">
            <label className="label" >Minh chứng chứng chỉ </label>
            <div style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center"
            }}>
              <button type='button' className='button is-primary' id="choose-image-degree_button"
                style={{ width: "145px" }}>
                <p id='upload-teacher-image_p'>Chọn ảnh</p>
                <input className="input-img"
                  type="file"
                  multiple accept="image/*"
                  name="resume"
                  id='input-img'
                  style={{
                    opacity: 0,

                    width: "145px",
                    marginLeft: "-18px",
                    height: "40px",
                  }}
                  onChange={e => setImageDegree(e.target.files)}
                />
              </button>
              <p
                id='degree_evidence'
                name='degree_evidence'
                value={formik.values.degree_evidence}
                onChange={formik.handleChange}
              > {imageDegree && imageDegree[0].name}</p>
            </div>

          </div>
        </div>

        <div className="column is-10">
          <div className="field">
            <label className="label">Mô tả chứng chỉ</label>
            <textarea className="textarea is-info"
              placeholder="Mô tả chứng chỉ"
              id='degree_description'
              name='degree_description'
              value={formik.values.degree_description}
              onChange={formik.handleChange}
            ></textarea>
            {formik.errors.degree_description && <p className="help is-danger" style={{ textAlign: "left" }}>{formik.errors.degree_description}</p>}
          </div>
        </div>
      </div>

      <div className="field is-grouped is-grouped-centered mt-3 " id='signup_button'>
        <button className="button is-link"
          type="submit"
          disabled={ imageDegreeUrl ? false : true}
        >Tiếp</button>
        <></>
      </div>
      </form>
      )
}

      export default DegreeInfo