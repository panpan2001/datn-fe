import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import getDemoCourseById from '../../redux/actions/DemoCourse/GetDemoCourseById'
import moment from 'moment'
import { AiOutlineCheck, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'

function EditDemoCourseForm() {
    const {idDemoCourse}= useParams()
    const dispatch = useDispatch()
const [images, setImages] = useState("")
const navigate= useNavigate()

    useEffect(()=>{
        // console.log(idCourse)
        getDemoCourseById(idDemoCourse, dispatch)
    },[])
    const demoCourses= useSelector(state => state.getDemoCourseById?.demoCourse?.currentCourse)
    const handleBack = () => {
        navigate('/admin/course')
    }
    const handleDelete = (id) => {
        // deleteTeacher(account_id, id, dispatch, access_token, axiosJWT, navigate)
  console.log(id)
    }
    const handleSave = () => {
        console.log("hello")
    }
  if(demoCourses){
    console.log({demoCourses})
    // setImages(course.image)
    return (
        <form className='detail-class-page_container   is-centered ' >
        <div className='detail-class-page_form is-centered ' style={{margin:"auto 2rem"}}>
          <strong className="is-size-4"> Khóa học thử</strong>
          <div className="column is-12 mt-1  class-image-upload_column-is-5"
                style={{ width: "100%" }}>
                <div className="field class-image-upload_field " >
                  <label className="label">Ảnh đại diện</label>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <img 
                    style={{ width: "50%" }}
                    src={demoCourses.id_course.image? demoCourses.id_course.image: require('../../assets/images/no-class.jpg')}/>
                    {/* <button
                      type='button ml-6'
                      className='button is-primary'
                      id="choose-image_button"
    
                    >
                      <p id='upload-teacher-image_p'>Chọn ảnh</p>
                      <input className="file-input"
                        type="file"
                        multiple accept="image/*"
                        name=""
                        onChange={(e) => setImages(e.target.files)} />
                    </button>
                    <p
                      id='personal_image'
                      name='personal_image'
                    ></p> */}
                  </div>
                </div>
              </div>
            <div className="columns is-centered  is-multiline">
            
            <div className="column is-6">
                <div className="field">
                  <label className="label">Tên giáo viên</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Tên lớp học"
                    name="name"
                    id="name"
                    value={demoCourses.id_course.id_teacher.account_id.full_name}
                  />
                </div>
              </div>

              <div className="column is-6">
                <div className="field">
                  <label className="label">Tên lớp học chính thức</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Tên lớp học"
                    name="name"
                    id="name"
                    value={demoCourses.id_course.name}
                  />
                </div>
              </div>
    
              <div className="column is-6">
                <div className="field "  >
                  <label className="label">Loại lớp học</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Loại lớp học"
                    name="Loại lớp học"
                    id='Loại lớp học'
                    value={demoCourses.id_course.category_id.type}
                  />
                 
                </div>
              </div>
              <div className="column is-6">
                <div className="field "  >
                  <label className="label">Cấp độ</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Cấp độ"
                    name="Level"
                    id='Level'
                    value={demoCourses.id_course.category_id.level}
                  />
                 
                </div>
              </div>
              <div className="column is-6">
                <div className="field">
                  <label className="label">Số lượng học viên</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Số lượng học viên"
                    name="number_of_student"
                    id='number_of_student'
                    value={demoCourses.id_course.number_of_student}
                  />
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
                    // disabled={formik.values.isDemoClass? true:false}
                    value={demoCourses.cost}
                  />
                  
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
                    min={demoCourses.start_date}
                    value={demoCourses.start_date}
                  />
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
                    min={demoCourses.start_date}
                    value={demoCourses.end_date}
                  />
                </div>
              </div>
              
            
    
              <div className="column is-6">
                <div className="field schedule_weekdays_filed">
                  <label className="label">Lịch học </label>
              
                   
                      <input className=" input"
                        type="text"
                        name="weekdays"
                        id='weekdays'
                        value={demoCourses.schedule}
                      />
                </div>
              </div>
    
              <div className="column is-6">
                <div className="field">
                  <label className="label">Thời lượng buổi học(ph)</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Thời lượng buổi học(giờ)"
                    name="time_per_lesson"
                    id='time_per_lesson'
                    value={demoCourses.id_course.time_per_lesson}
                  />
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
                    value={demoCourses.learning_period}
                  />
                </div>
              </div>
              <div className="column is-6">
                <div className="field">
                  <label className="label">Ngày tạo</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ngày tạo"
                    name="createdAt"
                    id='createdAt'
                    value={moment(demoCourses.createdAt).format('DD/MM/YYYY HH:mm:ss')}
                  />
                </div>
              </div>
              <div className="column is-12 tooltip_column">
                <div className="field tooltip">
                  <label className="label" style={{ display: "flex" }}>Mô tả khóa học </label>
                  <textarea
    
                    className="textarea is-info"
                    placeholder="Mô tả lớp học"
                    id='description'
                    name='description'
                    value={demoCourses.id_course.description}
                  ></textarea>
                </div>
    
              </div>
              <div className="column is-12 tooltip_column">
                <div className="field tooltip">
                  <label className="label" style={{ display: "flex" }}>Link video: </label>
                  {demoCourses.link_video && demoCourses.link_video.map((item, index) => (
                       <input
                       className="input mt-2"
                       type="text"
                       placeholder="link video "
                       name="link_video"
                       id={'link_video' + index}
                       value={item}
                     />
                  ))}
                 
                </div>
    
              </div>
            </div>
          
    
          
        </div>
        <div className="group-buttons">

<div className="button-left">
    <button className="button is-danger has-text-white" >
        < AiOutlineDelete onClick={() => handleDelete(demoCourses._id)}
            style={{
                color: 'white',
                cursor: 'pointer',
                width: "1.5rem",
                height: "1.5rem",
                marginTop: "-0.25rem",
                marginRight: ".25rem",

            }} />
        Xóa</button>
</div>
<div className="button-right">
    <button className="button is-primary" onClick={() => handleSave()}>
        <AiOutlineCheck style={{
            cursor: 'pointer',
            width: "1.5rem",
            height: "1.5rem",
            marginRight: ".25rem",

        }} /> Lưu
    </button>
    <button className="button is-warning" type='button' onClick={handleBack}>
        <AiOutlineClose style={{
            cursor: 'pointer',
            width: "1.5rem",
            height: "1.5rem",
            marginRight: ".25rem",

        }} /> Hủy
    </button>
</div>

</div>
      </form>
      )
  }
}

export default EditDemoCourseForm