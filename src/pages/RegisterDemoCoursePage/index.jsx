import React, { useEffect } from 'react'
import '../../assets/styles/RegisterCoursePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import moment from 'moment'
import { createRegisterDemoCourseStart, createRegisterDemoCourseSuccess } from '../../redux/slices/DemoCourseStudent/createRegisterDemoCourse'
import registerDemoCourse from '../../redux/actions/DemoCourseStudent/RegisterDemoCourse'
import createAxiosJWT from '../../utils/createInstance'
import registerCourse from '../../redux/actions/CourseStudent/registerCourse'
import getAllDemoCourseByCourseId from '../../redux/actions/DemoCourse/GetAllDemoCourseByCourseId'
import getDemoCourseById from '../../redux/actions/DemoCourse/GetDemoCourseById'
function RegisterDemoCoursePage() {
    const { idDemoCourse } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const teacher = useSelector(state => state.getTeacherById.teacher?.currentTeacher)
    const studentPersonalInfo = useSelector((state) => state.getStudentByAccountId.students?.infoStudent)
    const user = useSelector((state) => state.login.login?.currentUser)
    const accessToken = user?.accessToken
    const account_id = user?._id
    let axiosJWT = createAxiosJWT(dispatch, user, createRegisterDemoCourseSuccess)
    const formatter = new Intl.NumberFormat({
        style: 'currency',
        currency: 'VND',

    });
   
    useEffect(() => {
        getDemoCourseById(idDemoCourse, dispatch)
  
    }, [])
    const demoCourse = useSelector((state) => state.getDemoCourseById?.demoCourse?.currentCourse)


    let time = ""
    let start_date = ''
    let end_date = ''
    let sum_price = ''
    if (demoCourse) {
        time = demoCourse.id_course.schedule.split(" - ")[0]
        time = time.split(":")[0] < 12 ? time + " AM" : time + " PM"
        start_date = moment(demoCourse.start_date).format("DD/MM/YYYY")
        end_date = moment(demoCourse.end_date).format("DD/MM/YYYY")
        sum_price = formatter.format(parseFloat(demoCourse.cost) * demoCourse.learning_period )

    }
    const formik = useFormik({
        initialValues: {
            id_demo_course: idDemoCourse,
            id_student: studentPersonalInfo._id,
        },
        onSubmit: (values) => {

            console.log({ values })
            registerDemoCourse(values, dispatch, navigate, accessToken, axiosJWT, account_id)
        }

    })

    return (
        <form className="register-course-page_form mt-1" onSubmit={formik.handleSubmit}>
            {demoCourse &&
                <div className="register-course-page_container container">
                    <strong className='is-size-4'>Đăng kí học thử </strong>
                    <section className="info-teacher_section ">
                        <strong className="is-size-5 ">Giáo viên của bạn</strong>
                        <div className="columns info-teacher_section-column mt-1 ml-1">
                            <div className="mr-3 info-teacher_section-left">
                                <img src={teacher.personal_image} style={{ height: "10rem" }} />
                            </div>
                            <div className="column is-9 info-teacher_section-right">
                                <div className="column is-12 ">
                                    <div className="field register-course_field">
                                        <label className="label">Tên giáo viên</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Tên giáo viên"
                                            name="full_name"
                                            id="full_name"
                                            disabled={true}
                                            value={teacher.account_id.full_name}
                                        />
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <div className="field register-course_field">
                                        <label className="label">Email</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Email"
                                            name="Email"
                                            id="Email"
                                            disabled={true}
                                            value={teacher.account_id.email}
                                        />
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <div className="field register-course_field">
                                        <label className="label">Số điện thoại</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Số điện thoại"
                                            name="phone_number"
                                            id="phone_number"
                                            disabled={true}
                                            value={teacher.account_id.phone_number}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br />
                    <section className="info-course_section ">
                        <strong className="is-size-5">Khóa học thử bạn chọn</strong>

                        <div className="columns is-multiline info-course_section-column mt-1 ml-1">

                            <div className="column is-12">
                                <div className="field register-course_field">
                                    <label className="label">Tên lớp học</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Tên lớp học"
                                        name="name"
                                        id="name"
                                        disabled={true}
                                        value={demoCourse.id_course.name}
                                    />
                                </div>
                            </div>

                        
                            <div className="column is-6">
                                <div className="field register-course_field">
                                    <label className="label">Lịch học</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Lịch học"
                                        name="schedule"
                                        id="schedule"
                                        disabled={true}
                                        value={`${time} -${demoCourse.schedule.split(' - ')[1]} `}
                                    />

                                </div>
                            </div>

                            <div className="column is-6">
                                <div className="field register-course_field">
                                    <label className="label">Ngày học</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Ngày học"
                                        name="time"
                                        id="time"
                                        disabled={true}
                                        value={`${start_date} - ${end_date}`}
                                    />
                                </div>
                            </div>

                            <div className="column is-6">
                                <div className="field register-course_field">
                                    <label className="label">Thời gian học (buổi)</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Thời gian học"
                                        name="learning_period"
                                        id="learning_period"
                                        disabled={true}
                                        value={demoCourse.learning_period}
                                    />
                                </div>
                            </div>

                            <div className="column is-6">
                                <div className="field register-course_field">
                                    <label className="label">Tổng tiền thanh toán (VND)
                                        {/* <br/>(bao gồm 10.000 VND phí thanh toán qua hệ thống ) */}
                                    </label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Tên lớp học"
                                        name="sum_price"
                                        id="sum_price"
                                        disabled={true}
                                        // value={sum_price}
                                        value={sum_price}
                                    />
                                </div>
                            </div>

                        </div>

                    </section>

                    <div className="register-course-group-buttons mt-6">
                        <button className="button is-primary" type='submit'  >Đăng kí</button>
                        <button className="button is-danger" onClick={() => navigate('/findingTeacher')}>Hủy</button>
                    </div>
                </div>

            }

        </form>
    )
}

export default RegisterDemoCoursePage

