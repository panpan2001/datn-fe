import React from 'react'
import '../../assets/styles/ClassCard.css'
function ClassCard ({data}) {
  return (
    <div className="column is-6 mb-2">
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={data.image} alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content class-card">
    <div class="content">
    <strong className='is-size-5'>{data.name} </strong>
    </div>
    <div class="content">
         <p><strong>Loại: </strong>{data.category_id.type}</p>
    </div>
    <div class="content">
         <p><strong>Cấp độ: </strong>{data.category_id.level}</p>
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
  <footer class="card-footer">
    {/* <button type='button' class="card-footer-item">Save</button> */}
    <button type='button' class="button is-link">Edit</button>
    <button type='button' class="button is-danger">Delete</button>
  </footer>
</div>
    </div>
  )
}

export default ClassCard 