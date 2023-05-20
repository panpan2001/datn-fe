import React, { useEffect, useState } from 'react'
import TeacherShortInfoRight from '../../components/TeacherShortInfoCard/TeacherShortInfoRight'
import '../../assets/styles/DetailTeacherPage.css'
import TeacherShortInfoLeft from '../../components/TeacherShortInfoCard/TeacherShortInfoLeft'
import { BsCurrencyDollar, BsFillCheckCircleFill, BsFillStarFill } from 'react-icons/bs'
import RegisterButton from '../../components/GroupButton/RegisterButton'
import ImageItem from '../../components/ImageItem'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import getTeacherById from '../../redux/actions/Teacher/GetTeacherById'
import getTeacherAcademicById from '../../redux/actions/TeacherAcademic/GetTeacherAcademicById'
import VerifyStatusButton from '../../components/Button/VerifyStatusButton'
function DetailTeacherpage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    // console.table("id teacher:", id)
    // const teachers = useSelector(state => state.getAllTeachers.teachers?.infoTeacher)
    // const teacher= teachers.filter(item => item._id == id)
    useEffect(() => {
        getTeacherById(id, dispatch)
    }, [])
    const teacher = useSelector(state => state.getTeacherById.teacher?.currentTeacher)

    // console.table("teacher:", teacher)
    return (
        <div className='detail-teacher-page container-fluid '>
            <div className="detail-teacher column ">
                <div className="info-teacher column is-centered is-9">
                    <strong className='is-size-5'>Về giáo viên</strong>
                    <hr />
                    {/* <TeacherShortInfoLeft /> */}
                    <div className="columns  ">
                        <div className="column is-3 info-teacher_image-button">
                            <ImageItem image={teacher.personal_image} />

                        </div>
                        <div className="column is-7 info-teacher-detail ">
                            <p class="title is-4 columns info-teacher-detail_p ">
                                <div className="column mt-1">{teacher.account_id.full_name}</div>
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
                                    <BsFillStarFill
                                        className='detail-info-teacher_icon'
                                        style={{
                                            fill: "yellow",
                                        }} />
                                    <p>5</p>

                                </div>
                                <div className="detail-info-right">
                                    <BsCurrencyDollar
                                        className='detail-info-teacher_icon'
                                        style={{
                                            fill: "#00c4a7",
                                        }} />
                                    <p>5-15/ 1.5 tiếng</p>
                                </div>
                            </div>
                            <p className="teacher-description_paragraph"><strong>Email:</strong> {teacher.account_id.email}</p>
                            <p className="teacher-description_paragraph"><strong>Số điện thoại:</strong> {teacher.account_id.phone_number}</p>
                            <p className="teacher-description_paragraph"><strong>Giới thiệu:</strong> {teacher.personal_description}
                            </p>
                            {/* <button class="button mt-4 "
                         style={{backgroundColor: "#5ee0edb5",
                            width:"150px",
                            height:"32px",
                            borderRadius:"30px",
                            color:"rgb(37 125 219)"
                            }}>Xem chi tiết </button> */}
                        </div>
                        <div className="column is-2 info-teacher-register_button">
                            <RegisterButton />
                        </div>
                    </div>
                </div>

                <div className="teacher-academic column is-9 ">
                    <div className="columns ">
                        <strong className='is-size-5 mr-5'>Học vấn và chứng chỉ</strong>
                        <BsFillCheckCircleFill
                            style={{
                                fill: "#00c4a7",
                                height: "1.45rem",
                                width: "1.45rem",
                                marginRight: "1rem"

                            }}
                        />
                        {/* <button class="button "
                            style={{
                                backgroundColor: "#00c4a7",
                                width: "150px",
                                height: "32px",
                                borderRadius: "30px",
                                color: "white"
                            }}>Đã xác minh </button> */}
                    </div>

                    <hr />


                    <table class="table is-fullwidth">

                        <tbody style={{textAlign:"left"}}>
                            <tr>
                                <th><strong>Học vấn</strong> </th>
                                <td>{teacher.id_academic.academic_major}</td>
                                <td>{teacher.id_academic.university_name}</td>
                                <td>{teacher.id_academic.academic_period}</td>
                                <td>{teacher.id_academic.academic_status ?
                                    <VerifyStatusButton
                                        name="Đã xác minh"
                                        color="white"
                                        backgroundColor="#00d1b2" />
                                    :
                                    <VerifyStatusButton
                                        name="Đang xác minh"
                                        color="white"
                                        backgroundColor="#ffe08a" />
                                }
                                </td>
                            </tr>
                            <tr>
                                <th><strong>Chứng chỉ</strong> </th>
                                <td>{teacher.id_degree.degree_name}</td>
                                <td>{teacher.id_degree.degree_level}</td>
                                <td>{teacher.id_degree.degree_period}</td>
                                <td>{teacher.id_academic.degree_status ?
                                    <VerifyStatusButton
                                        name="Đã xác minh"
                                        color="white"
                                        backgroundColor="#00d1b2" />
                                    :
                                    <VerifyStatusButton
                                        name="Đang xác minh"
                                        color="white"
                                        backgroundColor="#ffe08a" />
                                }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="teacher-schedule column is-9 ">
                    <strong className='is-size-5'>Các lớp học</strong>
                    <hr />
                    <table class="table is-fullwidth is-hoverable">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên lớp học</th>
                                <th>Cấp độ</th>
                                <th>Số lượng (học sinh)</th>
                                <th>Thời lượng (tiếng)</th>
                                <th>Giá tiền (VDN/ buổi)</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign:"left"}}>
                            <tr >
                                <td>1</td>
                                <td>TOEIC</td>
                                <td>Beginner</td>
                                <td>10 </td>
                                <td>1.5  </td>
                                <td>100,000 </td>
                            </tr>

                        </tbody>
                    </table>

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