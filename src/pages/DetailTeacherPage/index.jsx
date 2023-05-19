import React from 'react'
import TeacherShortInfoRight from '../../components/TeacherShortInfoCard/TeacherShortInfoRight'
import '../../assets/styles/DetailTeacherPage.css'
import TeacherShortInfoLeft from '../../components/TeacherShortInfoCard/TeacherShortInfoLeft'
import { BsCurrencyDollar, BsFillCheckCircleFill, BsFillStarFill } from 'react-icons/bs'
import RegisterButton from '../../components/GroupButton/RegisterButton'
import ImageItem from '../../components/ImageItem'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
function DetailTeacherpage() {
    const {id}= useParams()
    const teachers = useSelector(state => state.getAllTeachers.teachers?.infoTeacher)
    const teacher= teachers.filter(item => item._id == id)

    return (
        <div className='detail-teacher-page container-fluid '>
            <div className="detail-teacher column ">
                <div className="info-teacher column is-centered is-10">
                    <strong className='is-size-5'>Về giáo viên</strong>
                    <hr />
                    {/* <TeacherShortInfoLeft /> */}
                    <div className="columns  ">
                        <div className="column is-3 info-teacher_image-button">
                            <ImageItem />
                            <RegisterButton />
                        </div>
                        <div className="column info-teacher-detail ">
                            <p class="title is-4 columns info-teacher-detail_p ">
                                <div className="column mt-1">{teacher[0].account_id.full_name}</div>
                                <BsFillCheckCircleFill
                                    style={{
                                        fill: "#00c4a7",
                                        height: "1.45rem",
                                        width: "1.45rem"
                                    }}
                                />
                                <button class="button "
                                    style={{
                                        backgroundColor: "#00c4a7",
                                        width: "150px",
                                        height: "32px",
                                        borderRadius: "30px",
                                        color: "white"
                                    }}>Đã xác minh </button>

                            </p>
                            {/* <p class="subtitle is-6">@johnsmith</p> */}
                            <div className="columns ml-3  subtitle teacher-detail-info_sub-title">
                                <div className="detail-info-left">
                                    <BsFillStarFill style={{
                                        fill: "yellow",
                                        height: "1.45rem",
                                        width: "1.45rem",
                                    }} />
                                    <p>5</p>

                                </div>
                                <div className="detail-info-right">
                                    <BsCurrencyDollar
                                        style={{
                                            fill: "#00c4a7",
                                            height: "1.45rem",
                                            width: "1.45rem"
                                        }} />
                                    <p>5-15/ 1.5 tiếng</p>
                                </div>
                            </div>
                            <p className="teacher-description_paragraph">Email: 123@gmail.com</p>
                            <p className="teacher-description_paragraph">Số điện thoại: 0125475119</p>
                            <p className="teacher-description_paragraph">Giới thiệu:
                                Hello, my name is Jessica and I'm from the US! I'm 23 years old and a lover of learning and teaching languages.
                                I speak English, French, and Spanish, and am currently studying Brazilian Portuguese.
                                I've been tutoring ESL for two years. I studied French language and literature in college, and then continued my studies in language with Spanish after graduation.
                                As an ESL tutor, I speak mostly Latin American Spanish with my students.
                                I've studied French, Spanish, and Portuguese, and I use these experiences to help my students learn English. I know what it's like to learn a new language, so I use my own experiences in my lessons!
                                Book a trial lesson with me and we can discuss your goals in learning English and where you would like to start. :)


                            </p>
                            {/* <button class="button mt-4 "
                         style={{backgroundColor: "#5ee0edb5",
                            width:"150px",
                            height:"32px",
                            borderRadius:"30px",
                            color:"rgb(37 125 219)"
                            }}>Xem chi tiết </button> */}
                        </div>

                    </div>
                </div>

                <div className="teacher-academic column is-10 ">
                    <div className="columns ">
                        <strong className='is-size-5 mr-5'>Học vấn và chứng chỉ</strong>
                        <BsFillCheckCircleFill
                            style={{
                                fill: "#00c4a7",
                                height: "1.45rem",
                                width: "1.45rem",
                                marginRight:"1rem"

                            }}
                        />
                        <button class="button "
                            style={{
                                backgroundColor: "#00c4a7",
                                width: "150px",
                                height: "32px",
                                borderRadius: "30px",
                                color: "white"
                            }}>Đã xác minh </button>
                    </div>

                    <hr />

                </div>
              
                <div className="teacher-schedule column is-10 ">
                    <strong className='is-size-5'>Lịch học</strong>
                    <hr />
                </div>
            </div>
            {/* <div className="more-teacher colunm is-3 is-multiline ">
               <div className='more-teacher-aside '>
               <TeacherShortInfoRight />
               </div>
                   
            </div> */}
        </div>
    )
}

export default DetailTeacherpage