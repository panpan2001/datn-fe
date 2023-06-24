import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AiOutlineCheck, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
import getStudentRatingById from '../../redux/actions/StudentRating/GéttudentRatingById'

function StudentRatingDetailForm() {
const {idRating}= useParams()
const dispatch= useDispatch()
useEffect(() => {
    getStudentRatingById(idRating, dispatch)
},[])

const studentRating= useSelector((state) => state.getStudentRatingById?.ratings?.currentRating)
  return (
    <div className='edit-teacher-form_container container is-centered'
    style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
    }}>
                <strong className='is-size-4'>Chi tiết đánh giá</strong>
                {studentRating &&
                <div className="detail-teacher-info_container">
                     <div className="   content-right" >
                            <img src={studentRating.id_teacher.personal_image} />
                            
                        </div>
                <div className="content columns">
                    
                        <div className="columns is-multiline ">
                       
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Họ và tên</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Họ và tên"
                                        name="full_name"
                                        id="full_name"
                                        disabled={true}
                                        value={studentRating.id_teacher.account_id.full_name}
                                    />
                                </div>
                            </div>
                            
                            <div className="column is-6">
                                <div className="field gender-signup_form" >
                                    <label className="label">Giới tính</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Giới tính"
                                        name="Giới tính"
                                        id='Giới tính'
                                        value={studentRating.id_teacher.account_id.email}
                                    />
                                   
                                </div>
                            </div>
                           
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Email</label>
                                    <input
                                        className="input"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        id='email'
                                        disabled={true}
                                        value={studentRating.id_teacher.account_id.email}
                                    />

                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Số điện thoại</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Số điện thoại"
                                        name="phone_number"
                                        id='phone_number'
                                        disabled={true}
                                        value={studentRating.id_teacher.account_id.phone_number}
                                    />
                                </div>
                            </div>
                            <div className="column one-fifth">
                                <div className="field">
                                    <label className="label">Điểm đánh giá trung bình</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Điểm đánh giá trung bình"
                                        name="Điểm đánh giá trung bình"
                                        id='Điểm đánh giá trung bình'
                                        disabled={true}
                                        value={studentRating.rating_avg_teacher}
                                    />
                                </div>
                            </div>
                            <div className="column one-fifth">
                                <div className="field">
                                    <label className="label">Điểm đánh giá nội dung 1</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Điểm đánh giá trung bình"
                                        name="Điểm đánh giá trung bình"
                                        id='Điểm đánh giá trung bình'
                                        disabled={true}
                                        value={studentRating.rating_content_1}
                                    />
                                </div>
                            </div>
                            <div className="column one-fifth">
                                <div className="field">
                                    <label className="label">Điểm đánh giá nội dung 2</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Điểm đánh giá trung bình"
                                        name="Điểm đánh giá trung bình"
                                        id='Điểm đánh giá trung bình'
                                        disabled={true}
                                        value={studentRating.rating_content_2}
                                    />
                                </div>
                            </div>
                            <div className="column one-fifth">
                                <div className="field">
                                    <label className="label">Điểm đánh giá nội dung 3</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Điểm đánh giá trung bình"
                                        name="Điểm đánh giá trung bình"
                                        id='Điểm đánh giá trung bình'
                                        disabled={true}
                                        value={studentRating.rating_content_3}
                                    />
                                </div>
                            </div>
                            <div className="column one-fifth">
                                <div className="field">
                                    <label className="label">Điểm đánh giá nội dung 4</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Điểm đánh giá trung bình"
                                        name="Điểm đánh giá trung bình"
                                        id='Điểm đánh giá trung bình'
                                        disabled={true}
                                        value={studentRating.rating_content_4}
                                    />
                                </div>
                            </div>
                            <div className="column is-12">
                                <div className="field">
                                    <label className="label">Bình luận</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Số điện thoại"
                                        name="phone_number"
                                        id='phone_number'
                                        disabled={true}
                                        value={studentRating.comment}
                                    />
                                </div>
                            </div>
                        </div>

                </div>
                <div className="group-buttons">

                    <div className="button-left">
                        <button className="button is-danger has-text-white" >
                            < AiOutlineDelete 
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
                        <button className="button is-primary" >
                            <AiOutlineCheck style={{
                                cursor: 'pointer',
                                width: "1.5rem",
                                height: "1.5rem",
                                marginRight: ".25rem",

                            }} /> Lưu
                        </button>
                        <button className="button is-warning" >
                            <AiOutlineClose style={{
                                cursor: 'pointer',
                                width: "1.5rem",
                                height: "1.5rem",
                                marginRight: ".25rem",

                            }} /> Hủy
                        </button>
                    </div>

                </div>
            </div>
                }
                
            </div>
  )
}

export default StudentRatingDetailForm