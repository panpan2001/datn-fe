import React, { useEffect, useState } from 'react'
import '../../assets/styles/ImageInfo.css'
import uploadImage from '../../contexts/uploadImage';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import createTeacher from '../../redux/actions/Teacher/CreateTeacher';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ImageInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [images, setImages] = useState()
  const [url, setUrl] = useState('')

const academic= useSelector(state=> state.createTeacherAcademic.academic?.currentAcademic)
console.log("acacdemic",academic)
const degree= useSelector(state=> state.createTeacherDegree.degree?.currentDegree)
console.log("degree",degree)
const user = useSelector((state) => state.signup.register?.currentUser)
const account_id = user?._id
  useEffect(() => {
    uploadImage(images).then((res) => {
      setUrl(res)

    }).catch((err) => {
      console.log(err)
    })
  }, [images])
  console.log("url  ", url)
  const formik = useFormik({
    initialValues: {
      personal_description: "",
      personal_image: ""
    },
    validationSchema: Yup.object({
      personal_description: Yup.string()
      .required("Bạn chưa điền mô tả cá nhân!")
      .min(3, "Tối thiểu 3 kí tự."),
    }),
    onSubmit:(values)=>{
 
        values={
          account_id:account_id,
          personal_description:values.personal_description,
          personal_image:url,
          id_academic:academic._id,
          id_degree:degree._id

        }
        console.log(values)
if(url){
  createTeacher(dispatch,values,navigate)
}
        
    
    }
  })
  return (
    <form className='teacher-image-info_container container' onSubmit={formik.handleSubmit}>
      <div className="column is-7 is-centered" id="teacher-image-upload_column">
        <strong className='is-size-4'>Mô tả cá nhân </strong>
        <div className="column  teacher-image-upload_column-is-10">
          <div className="field teacher-image-upload_field" >
            <label className="label">Mô tả cá nhân</label>
                  <textarea className="textarea is-info"
            placeholder="Mô tả cá nhân"
            id='personal_description'
            name='personal_description'
            value={formik.values.personal_description}
            onChange={formik.handleChange}
          ></textarea>
          {formik.errors.personal_description && <p className="help is-danger" style={{textAlign:"left"}}>{formik.errors.personal_description}</p>}
          </div>
        </div>


        <div className="column teacher-image-upload_column-is-5">
          <div className="field teacher-image-upload_field " >
            <label className="label">Ảnh chân dung</label>
            <div style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center"
            }}>
              <button
                type='button ml-6'
                className='button is-primary'
                id="choose-image_button"
              //  style={{marginLeft:"1rem"}}

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
              >{images && (images[0] ? images[0].name : '')}</p>
            </div>
            {url ? "": <p className="help is-danger">Bạn chưa chọn ảnh</p>}
          </div>
        </div>

        <div className="field is-grouped is-grouped-centered mt-3 " id='signup_button'>
          <button className="button is-link"
            type="submit"
            disabled={url ? false : true}
          >Hoàn thành</button>
        </div>
      </div>
    </form>

  )
}

export default ImageInfo

{/* <input className=' is-centered' type="file" multiple accept="image/*" onChange={(e)=>onImageChange(e)} style={{opacity:0}}/>
        <button type='button' className='button is-primary'>Chọn ảnh</button> */}

{/* <div className="field">
          <label className="label">Ảnh chân dung</label>
          <button type='button' className='button is-primary' id="choose-image_button">
            <p id='upload-teacher-image_p'>Chọn ảnh</p>
            <input className="file-input"
              type="file"
              multiple accept="image/*"
              name="resume"
              onChange={(e) => onImageChange(e)} />
          </button>
          </div> */}

{/* <div className="teacher-image-sign-up_div" > */ }
{/* {imageURLs.map(imageSrc => <img src={imageSrc} />)} */ }
{/* </div> */ }