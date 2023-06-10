import React, { useEffect, useState } from 'react'
import TeacherShortInfoRight from '../../components/TeacherShortInfoCard/TeacherShortInfoRight'
import '../../assets/styles/DetailTeacherPage.css'
import TeacherShortInfoLeft from '../../components/TeacherShortInfoCard/TeacherShortInfoLeft'
import { BsCurrencyDollar, BsFillCheckCircleFill, BsFillStarFill } from 'react-icons/bs'
import RegisterButton from '../../components/GroupButton/RegisterButton'
import ImageItem from '../../components/ImageItem'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import getTeacherById from '../../redux/actions/Teacher/GetTeacherById'
import getTeacherAcademicById from '../../redux/actions/TeacherAcademic/GetTeacherAcademicById'
import VerifyStatusButton from '../../components/Button/VerifyStatusButton'
import DetailTeacherCard from '../../components/DetailTeacherCard'
import DetailClassModalForm from '../../components/DetailClassModalForm'
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher'
function DetailTeacherpage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    console.table("teacher id :", id)
    useEffect(() => {
        getTeacherById(id, dispatch)
    }, [id])
    const teacher = useSelector(state => state.getTeacherById.teacher?.currentTeacher)

    console.table("teacher:", teacher)
    const [show, setShow] = useState("none")
    useEffect(() => {
        getAllCourseByIdTeacher(id, dispatch)
    }, [id])

    const classes = useSelector((state) => state.getAllCourseByIdTeacher.courses?.currentCourses)
    console.log({ classes })
    /// 
    return (
        < >
            {teacher &&
                <div className='detail-teacher-page container-fluid is-centered'>
                    <div className="detail-teacher column  is-centered  is-9">

                        <div className="info-teacher column ">
                            <strong className='is-size-6'>Về giáo viên</strong>
                            <hr />

                            <div className="is-multiline " style={{ width: "100%" }}>
                                {/* <div className="column is-3 info-teacher_image-button">
                                    <ImageItem image={teacher.personal_image} />

                                </div> */}
                                <div className="column  info-teacher-detail ">
                                    <p class="title is-6 columns info-teacher-detail_p ">
                                        <div className="column mt-1">{teacher.account_id.full_name}</div>
                                        {teacher.id_academic.degree_status ?
                                            <>
                                                <BsFillCheckCircleFill
                                                    className='detail-info-teacher_icon-fill' />
                                                <button class="button "
                                                    className='detail-info-teacher_verified-button'>Đã xác minh </button>
                                            </>
                                            :
                                            <></>}


                                    </p>
                                    <div className="columns ml-3  subtitle " id='teacher-detail-info_sub-title'>
                                        <div className="detail-info-left">
                                            <BsFillStarFill
                                                className='detail-info-teacher_icon'
                                                style={{
                                                    fill: "yellow",
                                                }} />
                                            <p className='is-size-6'>5</p>

                                        </div>
                                        <div className="detail-info-right">
                                            <BsCurrencyDollar
                                                className='detail-info-teacher_icon'
                                                style={{
                                                    fill: "#00c4a7",
                                                    marginTop: ".1rem"
                                                }} />
                                            <p className='is-size-6'>5-15/ 1.5 tiếng</p>
                                        </div>
                                    </div>
                                    <p className="teacher-description_paragraph"><strong>Email:</strong> {teacher.account_id.email}</p>
                                    <p className="teacher-description_paragraph"><strong>Số điện thoại:</strong> {teacher.account_id.phone_number}</p>
                                    <p className="teacher-description_paragraph"><strong>Giới thiệu: </strong>
                                        {/* {teacher.personal_description.split("." || "\n").map((item, index) => {
                                            return <p key={index}>{item}</p>
                                        })} */}
{teacher.personal_description}
                                    </p>

                                </div>

                            </div>
                        </div>

                        <div className="teacher-academic column  ">
                            <div className="columns ">
                                <strong className='is-size-6 mr-5'>Học vấn và chứng chỉ</strong>
                                {teacher.id_academic.degree_status ?
                                    <BsFillCheckCircleFill
                                        className='detail-info-teacher_icon-fill' /> : <></>}


                            </div>
                            <hr />
                            <table class="table is-fullwidth">
                                <tbody style={{ textAlign: "left" }}>
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

                        <div className="teacher-schedule  ">
                            <strong className='is-size-6'>Các khóa học</strong>
                            <hr />
                            <table class="table is-fullwidth is-hoverable">
                                <thead>
                                    <tr>
                                        {/* <th></th> */}
                                        <th>Tên khóa học</th>
                                        <th>Cấp độ</th>
                                        <th>Số lượng (học sinh)</th>
                                        <th>Đã đăng kí </th>
                                        <th>Thời lượng (ph)</th>
                                        <th></th>
                                        
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: "left" }}>
                                    {classes && classes.map((item) => (
                                        <>
                                            <tr key={item._id}>
                                                {/* <td>       
                                                {item.isDemoClass? 
                              <button className="button course_label is-warning mr-3">Học thử</button>:
                              <button className="button course_label is-primary mr-3">Học chính thức</button>
                              }
                                                </td> */}
                                                <td>{item.name}</td>
                                                <td>{item.category_id.level}</td>
                                                <td>{item.number_of_student} </td>
                                                <td>{}</td>
                                                <td>{item.time_per_lesson} </td>
                                                {/* <td>{item.learning_period} </td>
                                            <td>{item.schedule} </td> */}
                                                <td>
                                                    {/* <button className="button is-link" onClick={() => setShow("block")}>Chi tiết </button> */}
                                                    <Link to={`/detailTeacher/${teacher._id}/detailClass/${item._id}`}>
                                                        <button className="button is-link" >Chi tiết </button>
                                                    </Link>
                                                </td>
                                                {/* <td>
                                                    <button className="button is-primary" >Học thử </button>
                                                </td>
                                                <td>
                                                    <button className="button is-info" >Đăng kí  </button>
                                                </td> */}
                                            </tr>
                                            {/* <DetailClassModalForm id={item._id} data={item} show={show} setShow={setShow} /> */}
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="teacher_aside colunm is-3 is-multiline ">
                        <DetailTeacherCard data={teacher} />
                    </div>
                </div >
            }
        </>
    )
}

export default DetailTeacherpage

{/* <div className="more-teacher colunm is-3 is-multiline ">
               <div className='more-teacher-aside '>
               <TeacherShortInfoRight />
               </div>
                   
            </div> */}
{/* <button class="button "
                       style={{
                           backgroundColor: "#00c4a7",
                           width: "150px",
                           height: "32px",
                           borderRadius: "30px",
                           color: "white"
                       }}>Đã xác minh </button> */}