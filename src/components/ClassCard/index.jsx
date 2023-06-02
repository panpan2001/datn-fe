import React, { useEffect, useState } from 'react'
import '../../assets/styles/ClassCard.css'
import DetailClassModalForm from '../DetailClassModalForm'
import { useDispatch, useSelector } from 'react-redux'
import getCourseCategoryById from '../../redux/CourseCategory/GetCourseCategoryById'
function ClassCard({ data }) {
     console.log(data.category_id)
     const [show, setShow] = useState("none")
     const dispatch = useDispatch()
     const user = useSelector((state) => state.login.login?.currentUser)
     // useEffect(() => {
     //      console.log("hele")
     //      getCourseCategoryById(data.category_id, dispatch)
     // }, [])
     // const category = useSelector(state => state.getCourseCategoryById.courseCategory?.category)
     // console.log({ category })


     const handledelete = () => {

     }
     return (
          <div className="column is-12 mb-2">
               <div className='class-card_container' >
                    <div className='class-card_left column is-5'>
                 
                         <figure class="image class-card_image is-16by9">
                              <img src={data.image} alt="Placeholder image" />
                         </figure>
                         <div className="group-buttons mt-2">
                         <button type='button' class="button is-link" onClick={() => setShow("block")}>Edit</button>
                         <button type='button' class="button is-danger" onClick={handledelete}>Delete</button>
                   
                    </div>
                    </div>
                   
                    <div class="card-content class-card column">
                         <div class="content">
                              <strong className='is-size-5'>{data.name} </strong>
                         </div>
                         <div class="content">
                              
                              <p><strong>Loại: </strong>{data.category_id.type}</p>
                              {/* <p><strong>Loại: </strong>{category && category.type}</p> */}
                         </div>
                         <div class="content">
                              
                              <p><strong>Loại: </strong>{data.category_id.level}</p>

                              {/* <p><strong>Cấp độ: </strong>{category && category.level}</p> */}
                         </div>
                         <div className="content">
                              <p><strong>Số lượng học viên: </strong>{data.number_of_student}</p>
                         </div>
                         <div className="content">
                              <p><strong>Thời lượng buổi học(ph): </strong>{data.time_per_lesson}</p>
                         </div>
                         <div className="content">
                              <p> <strong>Thời gian học: </strong>{data.learning_period}</p>
                         </div>
                         <div className="content">
                              <p><strong>Lịch học: </strong>{data.schedule}</p>
                         </div>
                         <div className="content">
                              <p><strong>Giá tiền(VDN/ buổi): </strong>{data.cost}</p>
                         </div>
                         <div className="content">
                              <p><strong>Mô tả: </strong>{data.description}</p>
                         </div>

                    </div>
                    {/* <footer class="card-footer"> */}
                         {/* <button type='button' class="card-footer-item">Save</button> */}
                        
                    {/* </footer> */}
               </div>
               {/* <DetailClassModalForm data={data} show={show} setShow={setShow}/> */}
          </div>
     )
}

export default ClassCard 