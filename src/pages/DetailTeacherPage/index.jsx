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
import getAllDemoCourseByTeacherId from '../../redux/actions/DemoCourse/GetAllDemoCourseByTeacherId'
import getAllCourseStudent from '../../redux/actions/CourseStudent/GetAllCourseStudent'
import getStudentRating from '../../redux/actions/StudentRating/GetStudentRating'
import { JudgeFormNames } from '../../data'
import StudentCommentCard from '../../components/StudentCommentCard'
import getAllDemoCourseStudent from '../../redux/actions/DemoCourseStudent/GetAllDemoCourseStudent'
function DetailTeacherpage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    console.table("teacher id :", id)
    useEffect(() => {
        getTeacherById(id, dispatch)
        getStudentRating(dispatch)
        
    }, [id])
    const teacher = useSelector(state => state.getTeacherById.teacher?.currentTeacher)
    const user = useSelector((state) => state.login.login?.currentUser)
    let studentRating = useSelector(state => state.getStudentRating?.studentRatings?.currentRating)
    console.log({ studentRating })

    console.table("teacher:", teacher)
    const [show, setShow] = useState("none")
    useEffect(() => {
        getAllCourseByIdTeacher(id, dispatch)
        getAllDemoCourseByTeacherId(id, dispatch)
        getAllCourseStudent(dispatch)
        getAllDemoCourseStudent(dispatch)
    }, [id])

    const classes = useSelector((state) => state.getAllCourseByIdTeacher?.courses?.currentCourses)
    const demoCourses = useSelector((state) => state.getAllDemoCourseByTeacherId?.demoCourses?.currentCourse)
    const courseStudent = useSelector((state) => state.getAllCourseStudent?.courseStudents?.currentCourseStudent)
    const DemoCourseStudent = useSelector((state) => state.getAllDemoCourseStudent?.demoCourseStudents?.currentDemoCourseStudent)
    // console.log({DemoCourseStudent})
    console.log({ classes })
    console.log({ demoCourses })
    // console.log(teacher.personal_description.split('\n'))
    /// 

    if (studentRating && teacher) {
        studentRating = studentRating.filter(item => item.id_teacher._id == teacher._id)
        console.log({ studentRating })
        const rating_avg_teacher = studentRating.map(i => i.rating_avg_teacher)
        let avg = 0
        let rating_content_1 = 0
        let rating_content_2 = 0
        let rating_content_3 = 0
        let rating_content_4 = 0
        if (rating_avg_teacher.length > 0) {
            avg = (rating_avg_teacher.reduce((a, b) => a + b, 0) / rating_avg_teacher.length).toFixed(2)
            rating_content_1 = (studentRating.map(i => i.rating_content_1).reduce((a, b) => a + b, 0) / rating_avg_teacher.length).toFixed(2)
            rating_content_2 = (studentRating.map(i => i.rating_content_2).reduce((a, b) => a + b, 0) / rating_avg_teacher.length).toFixed(2)
            rating_content_3 = (studentRating.map(i => i.rating_content_3).reduce((a, b) => a + b, 0) / rating_avg_teacher.length).toFixed(2)
            rating_content_4 = (studentRating.map(i => i.rating_content_4).reduce((a, b) => a + b, 0) / rating_avg_teacher.length).toFixed(2)

        }
const handleFiterHiddenCourse=(item)=>{
    const course = classes.filter(i=>i._id==item.id_course._id)
    console.log("handleFiterHiddenCourse",course.isHidden==true? item:null)
    return course.isHidden==true? item:null
}
        return (
            < >
                {teacher &&
                    <div className='detail-teacher container is-centered mb-6'>
                        {/* <div className="detail-teacher column  is-centered "> */}
                        <div className="detail-info-left ">
                            <div className=" teacher-short-info_header">
                                <ImageItem image={teacher.personal_image} />
                                <div className=" teacher-head-info">
                                    <strong className="is-size-4 mb-4">{teacher.account_id.full_name}</strong>

                                    <p className="teacher-description_paragraph"><strong>Giới tính:</strong> {teacher.account_id.gender}</p>
                                    <p className="teacher-description_paragraph"><strong>Email:</strong> {teacher.account_id.email}</p>
                                    <p className="teacher-description_paragraph"><strong>Số điện thoại:</strong> {teacher.account_id.phone_number}</p>
                                </div>

                            </div>
                            <div className='rating-info ' >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "flex-end",
                                        padding:"1rem",
                                        border: "1px solid #7EDEE7",
                                        borderRadius: "8px",
                                        backgroundColor: "#E0FBFE"
                                    }}>
                                    <div className="rating-avg"
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginRight: ".5rem"

                                        }}>
                                        <BsFillStarFill
                                            className='detail-info-teacher_icon'
                                            style={{
                                                fill: "yellow",
                                                marginBottom: ".25rem",
                                                
                                            }} />
                                        <strong className=" is-size-4 mr-2">{avg}/5 </strong>
                                    </div>
                                    <p style={{ marginBottom: ".25rem" }}>({studentRating.length} đánh giá)</p>

                                </div>


                            </div>
                            <div className='rating-info-columns columns is-multiline'
                                style={{ width: "90%" }}>

                                <div className='rating-info column is-6' >
                                    <div className="rating-info-wrap"
                                        style={{
                                            border: "1px solid #85CEFE",
                                            borderRadius: "8px",
                                            backgroundColor: "#B7E3FF"
                                        }}
                                    >
                                        <strong className='is-size-6' style={{ marginRight: "12rem" }}>{JudgeFormNames[0]} </strong>
                                        <div className="rating-info_content">
                                            <BsFillStarFill
                                                className='detail-info-teacher_icon'
                                                style={{
                                                    fill: "yellow",
                                                    width: "1.5rem",
                                                    height: "1.5rem",

                                                }} />
                                            <strong className='is-size-5'>{rating_content_1}/5 </strong>

                                        </div>
                                    </div>


                                </div>

                                <div className='rating-info column is-6' >
                                    <div className="rating-info-wrap"
                                        style={{
                                           
                                            border: "1px solid #FF9F7E",
                                        borderRadius: "8px",
                                        backgroundColor: "#FFC6B2"
                                        }}
                                    >
                                        <strong className='is-size-6' style={{ marginRight: "1rem" }}>{JudgeFormNames[1]} </strong>
                                        <div className="rating-info_content">
                                            <BsFillStarFill
                                                className='detail-info-teacher_icon'
                                                style={{
                                                    fill: "yellow",
                                                }} />
                                            <strong className='is-size-5'>{rating_content_2}/5 </strong>

                                        </div>
                                    </div>


                                </div>

                                <div className='rating-info column is-6' >
                                    <div className="rating-info-wrap"
                                      style={{
                                        border: "1px solid #9095FE",
                                        borderRadius: "8px",
                                        backgroundColor: "#BDC0FF"
                                    }}>
                                        <strong className='is-size-6' style={{ marginRight: "5rem" }} >{JudgeFormNames[2]} </strong>
                                        <div className="rating-info_content" >
                                            <BsFillStarFill
                                                className='detail-info-teacher_icon'
                                                style={{
                                                    fill: "yellow",
                                                }} />
                                            <strong className='is-size-5'>{rating_content_3}/5 </strong>

                                        </div>
                                    </div>
                                </div>


                                <div className='rating-info column is-6' >
                                    <div className="rating-info-wrap"
                                    style={{
                                        border: "1px solid #7EFEC0",
                                        borderRadius: "8px",
                                        backgroundColor: "#B2FFDA",
                                    }}
                                    >
                                        <strong className='is-size-6' style={{ marginRight: "9rem" }}>{JudgeFormNames[3]} </strong>
                                        <div className="rating-info_content">
                                            <BsFillStarFill
                                                className='detail-info-teacher_icon'
                                                style={{
                                                    fill: "yellow",
                                                }} />
                                            <strong className='is-size-5'>{rating_content_4}/5 </strong>

                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>
                        <div className="info-teacher  " style={{ width: "100%" }}>
                            <strong className='is-size-6'>Giới thiệu</strong>
                            <hr />

                            <div className="is-multiline " >
                                {/* <div className="column is-3 info-teacher_image-button">
                            <ImageItem image={teacher.personal_image} />

                        </div> */}
                                <div className="column  info-teacher-detail ">
                                    {/* <p class="title is-6 columns info-teacher-detail_p ">
                                        {teacher.id_academic.academic_status ?
                                            <>
                                                <BsFillCheckCircleFill
                                                    className='detail-info-teacher_icon-fill' />
                                                <button class="button "
                                                    className='detail-info-teacher_verified-button'>Đã xác minh </button>
                                            </>
                                            :
                                            <></>}


                                    </p> */}
                                    <div className="columns ml-3  subtitle " id='teacher-detail-info_sub-title'>

                                        {/* <div className="detail-info-right">
                                    <BsCurrencyDollar
                                        className='detail-info-teacher_icon'
                                        style={{
                                            fill: "#00c4a7",
                                            marginTop: ".1rem"
                                        }} />
                                    <p className='is-size-6'>5-15/ 1.5 tiếng</p>
                                </div> */}
                                    </div>

                                    <p className="teacher-description_paragraph"><strong></strong>
                                        {teacher.personal_description.split("\n") &&
                                            teacher.personal_description.split("\n").map((item, index) =>
                                                <>
                                                    <p key={index}>{item}</p>
                                                </>

                                            )}
                                    </p>

                                </div>

                            </div>
                        </div>

                        <div className="teacher-academic  " style={{ width: "100%" }}>
                            <div className="columns ">
                                <strong className='is-size-6 mr-5'>Học vấn và chứng chỉ</strong>
                                {teacher.id_academic.academic_status ?
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
                                                color="black"
                                                backgroundColor="#ffe08a" />
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><strong>Chứng chỉ</strong> </th>
                                        <td>{teacher.id_degree.degree_name}</td>
                                        <td>{teacher.id_degree.degree_level}</td>
                                        <td>{teacher.id_degree.degree_period}</td>
                                        <td>{teacher.id_degree.degree_status ?
                                            <VerifyStatusButton
                                                name="Đã xác minh"
                                                color="white"
                                                backgroundColor="#00d1b2" />
                                            :
                                            <VerifyStatusButton
                                                name="Đang xác minh"
                                                color="black"
                                                backgroundColor="#ffe08a" />
                                        }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="teacher-schedule  " style={{ width: "100%" }}>
                            <strong className='is-size-6'>Các khóa học</strong>
                            <hr />
                            <table class="table is-fullwidth is-hoverable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Tên khóa học</th>
                                        <th>Cấp độ</th>
                                        <th>Số lượng (học sinh)</th>
                                        <th>Đã đăng kí </th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: "left" }}>
                                    {classes && classes
                                    .filter((item) => item.isHidden === false)
                                    .map((item) => (
                                        <>
                                            <tr key={item._id}>
                                                <td>
                                                    <button className="button course_label is-primary mr-3">Học chính thức</button>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.category_id.level}</td>
                                                <td>{item.number_of_student} </td>
                                                <td>{courseStudent && courseStudent.filter(i => i.id_course._id === item._id).length || 0}</td>

                                                <td>
                                                    {/* <button className="button is-link" onClick={() => setShow("block")}>Chi tiết </button> */}
                                                    {
                                                         new Date(item.start_date).getTime() > Date.now() &&
                                                         <Link to={`/detailTeacher/${teacher._id}/detailClass/${item._id}`}>
                                                         <button className="button is-link" >Chi tiết </button>
                                                     </Link>
                                                    }
                                                   
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
                                    {demoCourses && demoCourses
                                    // course bi an di thi demo course van hien dc nhưng nut dang ki course chinh thuc bi an la dc
                                    // .filter((item) => handleFiterHiddenCourse(item))
                                    .filter((item) => item.isHidden === false)
                                    .map((item) => (
                                        <>
                                            <tr key={item._id}>
                                                <td>
                                                    <button className="button course_label is-warning mr-3">Học thử</button>
                                                </td>
                                                <td>{item.id_course.name}</td>
                                                <td>{item.id_course.category_id.level}</td>
                                                <td>{item.id_course.number_of_student}</td>
                                                <td>{DemoCourseStudent && DemoCourseStudent.filter((i) => i.id_demo_course._id === item._id).length || 0}</td>
                                                {/* { user ?
                                     (user.role_name !== "teacher" &&
                                        new Date(item.start_date+ " " + item.time).getTime() < new Date().getTime() &&
                                        <td>
                                            <Link to={`/registerDemoCourse/${item._id}`}>
                                                <button className="button is-primary">Học thử </button>
                                            </Link>
                                        </td>):
                                        <></>
                                        
                                        } */}
                                                <td>
                                                    {
                                                        new Date(item.start_date).getTime() > Date.now() &&
                                                        <Link to={`/detailTeacher/${teacher._id}/detailClass/${item.id_course._id}`}>
                                                        <button className="button is-link" >Chi tiết </button>
                                                    </Link>
                                                    }
                                                   

                                                </td>

                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                        <div className='student-comment'style={{ width: "100%" }}>
                            <strong className='is-size-6'>Học sinh nói gì về giáo viên {teacher.account_id.full_name}</strong>
                            <hr/>
                            <div className='student-comment-content'>
                            {
                                studentRating && studentRating.slice(0, 3).map((item) => (
                                    <StudentCommentCard key={item._id} data={item} />
                                ))
                            }
                            </div>
                          
                        </div>
                    </div>

                }
            </>
        )
    }

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