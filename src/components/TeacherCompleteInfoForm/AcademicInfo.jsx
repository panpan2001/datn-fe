import React, { useEffect, useState } from 'react'
import '../../assets/styles/AcademicInfo.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useDispatch } from 'react-redux'
import uploadImage from '../../contexts/uploadImage'
import createTeacherAcademic from '../../redux/actions/TeacherAcademic/CreateTeacherAcademic'
function AcademicInfo() {
  const [imageAcacdemic, setImageAcacdemic] = useState()
  const [imageAcademicUrl, setImageAcademicUrl] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    uploadImage(imageAcacdemic).then((res) => {
      setImageAcademicUrl(res)
    }).catch((err) => {
      console.log(err)
    })
   
  }, [imageAcacdemic])
  console.log("url academic ", imageAcademicUrl)
  const formik = useFormik({
    initialValues: {
      university_name: '',
      academic_major: '',
      academic_period: '',
      academic_evidence: '',
      academic_status: false,
      academic_description: '',
  

    },
    validationSchema: Yup.object({
      university_name: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự."),
      academic_major: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự."),

      academic_period: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự."),

      
      academic_description: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự."),

     

    }),
    onSubmit: (values) => {
      const academic = {
        university_name: values.university_name,
        academic_major: values.academic_major,
        academic_period: values.academic_period,
        academic_description: values.academic_description,
        academic_evidence: imageAcademicUrl,
        academic_status: values.academic_status
      };
      

      console.table(academic)
      createTeacherAcademic(dispatch, academic, navigate)
    
    }
  })


  return (
    <form  className='academic-info_container' onSubmit={formik.handleSubmit}>
       <strong className='is-size-4'>Thông tin học vấn </strong>
      <div className="columns is-multiline teacher-academic-info">
        <div className="column is-5">
          <div className="field">
            <label className="label" >Tên trường </label>
            <input className="input"
              type="text"
              placeholder="Tên trường"
              id='university_name'
              name='university_name'
              value={formik.values.university_name}
              onChange={formik.handleChange}
            />
            {formik.errors.university_name && <p className="help is-danger">{formik.errors.university_name}</p>}
          </div>

        </div>

        <div className="column is-5">
          <div className="field is-multiline">
            <label className="label" >Chuyên ngành</label>
            <input className="input"
              type="textarea"
              placeholder="Chuyên ngành"
              id="academic_major"
              name="academic_major"
              value={formik.values.academic_major}
              onChange={formik.handleChange}
            />
            {formik.errors.academic_major && <p className="help is-danger">{formik.errors.academic_major}</p>}

          </div>
        </div>

        <div className="column is-5">
          <div className="field">
            <label className="label" >Thời gian học </label>
            <input className="input"
              type="text"
              placeholder="Năm bắt đầu - Năm kết thúc"
              id="academic_period"
              name="academic_period"
              value={formik.values.academic_period}
              onChange={formik.handleChange}
            />
            {formik.errors.academic_period && <p className="help is-danger">{formik.errors.academic_period}</p>}

          </div>
        </div>

        <div className="column is-5">
          <div className="field ">
            <label className="label" >Minh chứng học vấn </label>
            <div style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center"
            }}>
              <button type='button' className='button is-primary'
                id="choose-image-academic _button"
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
                  onChange={(e) => setImageAcacdemic(e.target.files)}
                />

              </button>
              <p
                id='academic_evidence'
                name='academic_evidence'
                value={formik.values.academic_evidence}
                onChange={formik.handleChange}
              > {imageAcacdemic && imageAcacdemic[0].name}</p>
              {/* {formik.errors.academic_evidence && <p className="help is-danger">{formik.errors.academic_evidence}</p>} */}

            </div>
          </div>
        </div>

        <div className="column is-10">
          <div className="field">
            <label className="label">Mô tả học vấn</label>
            <textarea

              className="textarea is-info"
              placeholder="Mô tả học vấn"
              id='academic_description'
              name='academic_description'
              value={formik.values.academic_description}
              onChange={formik.handleChange}
            ></textarea>
            {formik.errors.academic_description && <p className="help is-danger" style={{ textAlign: "left" }}>{formik.errors.academic_description}</p>}

          </div>
        </div>
      </div>
      <div className="field is-grouped is-grouped-centered mt-3 " id='signup_button'>
        <button className="button is-link"
          type="submit"
          disabled={imageAcademicUrl  ? false : true}
        >Tiếp</button>
        <></>
      </div>
    </form >
  )
}

export default AcademicInfo