import { useState } from 'react'
import '../../assets/styles/TeacherAcademicDegreeInfoForm.css'

const TeacherAcademicDegreeInfoForm = () => {
  const [imageAcacdemic, setImageAcacdemic] = useState()
  const [imageDegree, setImageDegree] = useState()
  // const onImageChange = (e) => {
  //   setImageAcacdemic(e.target.files)
  // }
  return (
    <form className=' is-8 column ' id='teacher-complete-info_form'>

      <strong className='is-size-4'>Thông tin học vấn </strong>
      <div className="columns is-multiline teacher-academic-info">
        <div className="column is-5">
          <div className="field">
            <label className="label" >Tên trường </label>
            <input className="input" type="text" placeholder="Tên trường" />
          </div>
        </div>

        <div className="column is-5">
          <div className="field is-multiline">
            <label className="label" >Chuyên ngành</label>
            <input className="input" type="textarea" placeholder="Chuyên ngành" />
          </div>
        </div>

        <div className="column is-5">
          <div className="field">
            <label className="label" >Thời gian học </label>
            <input className="input" type="text" placeholder="Năm bắt đầu - Năm kết thúc" />
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
              <button type='button' className='button is-primary' id="choose-image-academic _button"
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
              <p> {imageAcacdemic && imageAcacdemic[0].name}</p>
            </div>

          </div>
        </div>

        <div className="column is-10">
          <div className="field">
            <label className="label">Mô tả học vấn</label>
            <textarea className="textarea is-info" placeholder="Mô tả học vấn"></textarea>
          </div>
        </div>
      </div>

      <hr />

      <strong className='is-size-4'>Thông tin chứng chỉ  </strong>
      <div className="columns is-multiline teacher-degree-info">
        <div className="column is-5">
          <div className="field">
            <label className="label" >Tên chứng chỉ </label>
            <input className="input" type="text" placeholder="Tên trường" />
          </div>
        </div>

        <div className="column is-5">
          <div className="field">
            <label className="label" >Thời gian học </label>
            <input className="input" type="text" placeholder="Năm bắt đầu - Năm kết thúc " />
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
          <input className="input" type="text" placeholder="TOEIC 800, IELTS 7.5,..." />

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
              <p> {imageDegree && imageDegree[0].name}</p>
            </div>

          </div>
        </div>
      </div>

      <div className="field is-grouped is-grouped-centered mt-3 " id='signup_button'>
        <button className="button is-link" type="submit">Tiếp</button>
      </div>

    </form>
  )

}

export default TeacherAcademicDegreeInfoForm 