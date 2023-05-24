import { useEffect, useState } from 'react'
import '../../assets/styles/TeacherAcademicDegreeInfoForm.css'
import uploadImage from '../../contexts/uploadImage'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import createTeacher from '../../redux/actions/Teacher/CreateTeacher'
import createTeacherAcademic from '../../redux/actions/TeacherAcademic/CreateTeacherAcademic'
import createTeacherDegree from '../../redux/actions/TeacherDegree/CreateteacherDegree'

const TeacherAcademicDegreeInfoForm = () => {
  const [imageAcacdemic, setImageAcacdemic] = useState()
  const [imageDegree, setImageDegree] = useState()
  const [imageAcademicUrl, setImageAcademicUrl] = useState('')
  const [imageDegreeUrl, setImageDegreeUrl] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    uploadImage(imageAcacdemic).then((res) => {
      setImageAcademicUrl(res)
    }).catch((err) => {
      console.log(err)
    })
    uploadImage(imageDegree).then((res) => {
      setImageDegreeUrl(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [imageAcacdemic, imageDegree])
  console.log("url academic ", imageAcademicUrl)
  console.log("url degree ", imageDegreeUrl)
  const formik = useFormik({
    initialValues: {
      university_name: '',
      academic_major: '',
      academic_period: '',
      academic_evidence: '',
      academic_status: false,
      academic_description: '',
      degree_name: '',
      degree_period: '',
      degree_level: '',
      degree_evidence: '',
      degree_description: '',
      degree_status: false

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

      // imageAcademic: Yup.string()
      //   .required("Bạn chưa có minh chứng học vấn!")
      //   .min(3, "Tối thiểu 3 kí tự."),

      academic_description: Yup.string()
        .required("Bạn chưa điền vào trường này!")
        .min(3, "Tối thiểu 3 kí tự."),

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
      // imageDegree: Yup.string()
      //   .required(" Bạn chưa có minh chứng chứng chỉ!")

    }),
    onSubmit: (values) => {
      // if (imageAcademicUrl && imageDegreeUrl) {
      const academic = {
        university_name: values.university_name,
        academic_major: values.academic_major,
        academic_period: values.academic_period,
        academic_description: values.academic_description,
        academic_evidence: imageAcademicUrl,
        academic_status: values.academic_status
      };
      const degree = {
        degree_name: values.degree_name,
        degree_period: values.degree_period,
        degree_level: values.degree_level,
        degree_description: values.degree_description,
        degree_evidence: imageDegreeUrl,
        degree_status: values.degree_status
      }

      console.table(academic)
      console.table(degree)
      createTeacherAcademic(dispatch, academic)
      // createTeacherDegree(dispatch, degree, navigate)
      // }
    }
  })


  // }
  return (
    <form className=' is-8 column ' id='teacher-complete-info_form' onSubmit={formik.handleSubmit}>

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

      <hr />

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
              {/* {imageDegree && <p className="help is-danger">{formik.errors.imageDegree}</p>} */}
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
          disabled={imageAcademicUrl && imageDegreeUrl ? false : true}
        >Tiếp</button>
        <></>
      </div>

    </form>
  )

}

export default TeacherAcademicDegreeInfoForm 