import React, { useEffect } from 'react'
import '../../assets/styles/DetailClassModalForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { CourseApi } from '../../utils/BaseUrl'
import getCoursebyId from '../../redux/actions/Course/GetCoursebyId'
import moment from 'moment'

function DetailClassPage() {
    let weekdays = ""
    let time = ""
    let start_date = ""
    let end_date = ""
    const currentUser = useSelector((state) => state.login.login?.currentUser)
    const { idClass } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(idClass)
    useEffect(() => {
        getCoursebyId(idClass, dispatch)
    }, [])
    const data = useSelector((state) => state.getCourseById.course?.currentCourse)
    const formatter = new Intl.NumberFormat({
        style: 'currency',
        currency: 'VND',

    });
    if (data) {
        weekdays = data.schedule.split(" - ")[1].split(",")
        time = data.schedule.split(" - ")[0]
        time = time.split(":")[0] < 12 ? time + " AM" : time + " PM"

        start_date = moment(data.start_date).format("DD/MM/YYYY")
        end_date = moment(data.end_date).format("DD/MM/YYYY")
    }


    return (
        <div className="container " style={{
            marginBottom: "2rem",
            marginTop: "1rem",
            backgroundColor: "white",
        }}>

            {data && <div className="detail-class_wrap is-centered"

                style={{
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <header className="modal-card-head"
                    style={{ width: "100%", }}
                >
                    <p className="modal-card-title">Chi tiết khóa học</p>
                    <button className="modal-close is-large" aria-label="close" ></button>

                </header>
                <img
                    src={data.image} alt=""
                    style={{
                        width: '50%',
                        margin: 'auto',
                        display: 'block'
                    }}
                />

                <div className="detail-class-name ">
                    <strong className='is-size-5'>{data.name} </strong>

                    {data.isDemoClass ?
                        <button className="button course_label is-warning ml-3">Học thử</button> :
                        <button className="button course_label is-primary ml-3">Học chính thức</button>
                    }
                </div>
                <div className="columns detail-class_columns is-multiline is-centered">


                    <div className="content column detail-class_content is-6">
                        <p><strong>Loại: </strong>{data.category_id.type}</p>
                    </div>
                    <div className="content column detail-class_content is-6">
                        <p><strong>Cấp độ: </strong>{data.category_id.level}</p>
                    </div>
                    <div className="content column detail-class_content is-6">
                        <p><strong>Số lượng học viên: </strong>{data.number_of_student}</p>
                    </div>
                    <div className="content column detail-class_content is-6">
                        <p><strong>Thời lượng buổi học(ph): </strong>{data.time_per_lesson}</p>
                    </div>
                    <div className="content column detail-class_content is-6">
                        <p> <strong>Thời gian học: </strong>{data.learning_period} {data.isDemoClass ? 'buổi' : 'tháng'}</p>
                    </div>
                    <div className="content column detail-class_content is-6">
                        <p><strong>Lịch học: </strong>{time} - {data.schedule.split(" - ")[1]}</p>
                    </div>
                    <div className="content column detail-class_content is-6">
                        <p><strong>Ngày bắt đầu: </strong>{start_date}</p>
                    </div>
                    <div className="content column detail-class_content is-6">
                        <p><strong>Ngày kết thúc: </strong>{end_date}</p>
                    </div>
                    <div className="content column detail-class_content is-6">
                        <p><strong>Giá tiền(VDN/ buổi): </strong>{formatter.format(data.cost)}</p>
                    </div>
                    <div className="content column detail-class_content is-6">
                        <p><strong>Mô tả: </strong>{data.description}</p>
                    </div>
                </div>
                <div className="buttons is-centered"
                    id='detail-class_modal'
                    style={{ gap: '2rem' }}
                >
                    {currentUser ?
                        (currentUser.role_name == "teacher" ||  new Date(data.start_date).getTime() < new Date().getTime()  ?
                            <>
                            </> :
                            <>
                                {data.isDemoClass ?
                                    <Link to={`/registerCourse/${idClass}`}>
                                        <button className="button is-primary">Học thử </button>
                                    </Link> :
                                    <Link to={`/registerCourse/${idClass}`}>
                                        <button className="button is-info">Đăng kí  </button>
                                    </Link>
                                }

                            </>
                        ) :

                        (<>
                            <Link to='/login'>
                                <button className="button is-primary">Học thử </button>
                            </Link>
                            <Link to='/login'>
                                <button className="button is-info">Đăng kí  </button>
                            </Link>
                        </>)
                    }
                    <button className="button is-danger" onClick={() => navigate(-1)}>Thoát  </button>

                </div>
            </div>
            }


        </div>
    )
}

export default DetailClassPage

{/* <table className="table is-fullwidth is-hoverable"
                    style={{ marginBottom: "0" }}>
                    <thead>

                        <tr>
                            <th></th>
                            <th>Tên khóa học</th>
                            <th>Loại</th>
                            <th>Cấp độ</th>
                            <th>Số lượng<br /> (học sinh)</th>
                            <th>Đã đăng kí </th>
                            <th>Thời lượng <br /> (tiếng)</th>
                            <th>Thời gian học<br />(tháng)</th>
                            <th>Lịch học</th>
                            <th>Giờ bắt đầu</th>
                            <th>Giá tiền<br />(VDN/ buổi)</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "left" }}>

                        <tr key={data._id}>
                            <td>
                                {data.isDemoClass ?
                                    <button className="button course_label is-warning mr-3">Học thử</button> :
                                    <button className="button course_label is-primary mr-3">Học chính thức</button>
                                }
                            </td>
                            <td>{data.name}</td>
                            <td>{data.category_id.type}</td>
                            <td>{data.category_id.level}</td>
                            <td>{data.number_of_student} </td>
                            <th>... </th>
                            <td>{data.time_per_lesson} </td>
                            <td>{data.learning_period} </td>
                            <td>{weekdays.map((item) => <>{item}<br /></>)} </td>
                            <td>{time} </td>
                            <td>{formatter.format(data.cost)} </td>

                        </tr>

                    </tbody>
                </table> */}


{/* <p
                    style={{ textAlign: "left" }}
                ><strong>Mô tả: </strong>{data.description}</p> */}