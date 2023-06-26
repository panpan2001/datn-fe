import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineCheck, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
import getStudentRatingById from '../../redux/actions/StudentRating/GéttudentRatingById'
import { JudgeFormNames } from '../../data'
import moment from 'moment/moment'

function StudentRatingDetailForm() {
    const { idRating } = useParams()
    const dispatch = useDispatch()
    const navigate= useNavigate()
    useEffect(() => {
        getStudentRatingById(idRating, dispatch)
    }, [])

    const studentRating = useSelector((state) => state.getStudentRatingById?.ratings?.currentRating)
    return (
        <div className='judge-teacher-form_container container is-centered'
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
                <div className="detail-judge-teacher_container"
                    style={{
                    //    margin:'auto',

                    }}>

                    <div className="content columns"
                        style={{
                            padding: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            margin: "auto",
                        }}>

                        <div className="columns is-multiline "
                            style={{
                                textAlign: "left",
                                backgroundColor: "white",
                                border: "1px solid var(--border-color)",
                                justifyContent: "center",
                                padding: "1rem",
                                borderRadius: "8px",

                            }}>
                            <strong className='is-size-5 mb-3'>Thông tin giáo viên</strong>

                            <div className=" column is-12  teacher_img"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }} >
                                <img src={studentRating.id_teacher.personal_image} />

                            </div>
                            <div className="column is-3">
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

                            <div className="column is-3">
                                <label className="label">Giới tính</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Giới tính"
                                    name="Giới tính"
                                    id='Giới tính'
                                    disabled={true}
                                    value={studentRating.id_teacher.account_id.gender}
                                />

                            </div>

                            <div className="column is-3">
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
                            <div className="column is-3 ">
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
                        <br />
                        <div className="columns is-multiline "
                            style={{
                                textAlign: "left",
                                backgroundColor: "white",
                                border: "1px solid var(--border-color)",
                                justifyContent: "center",
                                padding: "1rem",
                                borderRadius: "8px",
                                display: 'flex',
                                flexDirection: "column"
                            }}>
                            <strong className='is-size-5 mb-3'
                             style={{display: 'flex', justifyContent: "center"}} 
                            >Thông tin khóa học</strong>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                                <div className="column is-4 ">
                                    <label className="label">Tên khóa học</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Tên khóa học"
                                        name="phone_number"
                                        id='phone_number'
                                        disabled={true}
                                        value={studentRating.id_course.name}
                                    />
                                </div>
                                <div className="column is-4 ">
                                    <label className="label">Loại khóa học</label>

                                    {studentRating.isDemo ?
                                        <button className='button is-info'>Khóa học thử</button> :
                                        <button className='button is-primary'>Khóa học chính thức </button>
                                    }

                                </div>
                                <div className="column is-4 ">
                                    <label className="label">Cấp độ</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Loại khóa học"
                                        name="phone_number"
                                        id='phone_number'
                                        disabled={true}
                                        value={studentRating.id_course.category_id.level}

                                    />
                                </div>
                            </div>

                        </div>
                        <br />

                        <div className="columns is-multiline "
                            style={{
                                textAlign: "left",
                                backgroundColor: "white",
                                border: "1px solid var(--border-color)",
                                justifyContent: "center",
                                padding: "1rem",
                                borderRadius: "8px",
                                display: 'flex',
                                flexDirection: "column"
                            }}>
                            <strong className='is-size-5 mb-3'
                            style={{display: 'flex', justifyContent: "center"}}
                            >Thông tin đánh giá</strong>
                            <div className='columns is-multiline' 
                            style={{ display: 'flex', 
                            flexDirection: "row" ,
                            padding:'2rem'}}>
                                <div className="column is-6">
                                    <label className="label">Ngày đánh giá</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Ngày đánh giá"
                                        name="Ngày đánh giá"
                                        id='Ngày đánh giá'
                                        disabled={true}
                                        value={moment(studentRating.createdAt).format('DD/MM/YYYY HH:mm')}
                                    />
                                </div>
                                <div className="column is-6">
                                    <label className="label">Người đánh giá</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Ngày đánh giá"
                                        name="Ngày đánh giá"
                                        id='Ngày đánh giá'
                                        disabled={true}
                                        value={studentRating.id_student.account_id.full_name}
                                    />
                                </div>
                                <div className="column is-12"
                                style={{ 
                                    display: 'flex', 
                                    flexDirection: "column", 
                                    alignItems: "center" ,
                                    padding:'0rem'}}>
                                    <div className="column is-4"></div>
                                    <div className="column is-4"
                                      style={{
                                         display: 'flex', 
                                         flexDirection: "column", 
                                         alignItems: "center", 
                                         justifyContent: "center" ,
                                         padding:'1rem',
                                         borderRadius: "8px",
                                         border: "1px solid #FF9F7E",
                                         backgroundColor: "#FFC6B2"
                                         }}>
                                    <label className="label is-size-6">Điểm đánh giá trung bình</label>
                                   
                                   <strong className='is-size-5'>{studentRating.rating_avg_teacher}</strong>
                                    </div>
                                    <div className="column is-4"></div>
                                    
                                </div>
                                <div className="column is-6"
                                 style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                    <div 
                                     style={{ display: 'flex',
                                      flexDirection: "row",
                                       alignItems: "center",
                                       padding:'1rem',
                                       borderRadius: "8px",
                                       border: "1px solid #7EFEC0",
                                       backgroundColor: "#B2FFDA",
                                       justifyContent:'space-between',
                                       width:'100%'
                                        }}>
                                    <label className="label is-size-6">{JudgeFormNames[0]}</label>
                                    <strong className='is-size-5'>{studentRating.rating_content_1}</strong>
                                    </div>
                                 
                                </div>
                                
                                <div className="column is-6"
                                 style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                    <div 
                                     style={{ display: 'flex',
                                      flexDirection: "row",
                                       alignItems: "center",
                                       padding:'1rem',
                                       borderRadius: "8px",
                                       border: "1px solid #7EFEC0",
                                       backgroundColor: "#85CEFE",
                                       justifyContent:'space-between',
                                       width:'100%'
                                        }}>
                                    <label className="label is-size-6">{JudgeFormNames[1]}</label>
                                    <strong className='is-size-5'>{studentRating.rating_content_2}</strong>
                                    </div>
                                 
                                </div>
                                
                                <div className="column is-6"
                                 style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                    <div 
                                     style={{ display: 'flex',
                                      flexDirection: "row",
                                       alignItems: "center",
                                       padding:'1rem',
                                       borderRadius: "8px",
                                       border: "1px solid #FFDD7E",
                                       backgroundColor: "#FFEBB2",
                                       justifyContent:'space-between',
                                       width:'100%'
                                        }}>
                                    <label className="label is-size-6">{JudgeFormNames[2]}</label>
                                    <strong className='is-size-5'>{studentRating.rating_content_3}</strong>
                                    </div>
                                 
                                </div>
                               
                                <div className="column is-6"
                                 style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                    <div 
                                     style={{ display: 'flex',
                                      flexDirection: "row",
                                       alignItems: "center",
                                       padding:'1rem',
                                       borderRadius: "8px",
                                       border: "1px solid #9095FE",
                                       backgroundColor: "#BDC0FF",
                                       justifyContent:'space-between',
                                       width:'100%'
                                        }}>
                                    <label className="label is-size-6">{JudgeFormNames[3]}</label>
                                    <strong className='is-size-5'>{studentRating.rating_content_4}</strong>
                                    </div>
                                 
                                </div>
                                <div className="column is-12">
                                    <label className="label">Bình luận</label>
                                    <textarea
                                        className="textarea"
                                        type="text"
                                        placeholder="Bình luận"
                                        name="Bình luận"
                                        id='Bình luận'
                                        disabled={true}
                                        value={studentRating.comment}
                                    ></textarea>
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
                            {/* <button className="button is-primary" >
                                <AiOutlineCheck style={{
                                    cursor: 'pointer',
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    marginRight: ".25rem",

                                }} /> Lưu
                            </button> */}
                            <button className="button is-warning"
                             onClick={() => {
                                navigate('/admin/studentJudge')
                            }}
                             >
                                <AiOutlineClose
                                 style={{
                                    cursor: 'pointer',
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    marginRight: ".25rem",

                                }} /> Thoát
                            </button>
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default StudentRatingDetailForm