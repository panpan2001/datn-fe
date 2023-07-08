
import React, { useEffect, useState } from 'react'
import '../../assets/styles/StudentJudgePage.css'
import { useDispatch, useSelector } from 'react-redux';
import getCourseStudentByStudentId from '../../redux/actions/CourseStudent/GetCourseStudentByStudentId';
import getDemoCourseById from '../../redux/actions/DemoCourse/GetDemoCourseById';
import { getDemoCourseByStudentIdSuccess } from '../../redux/slices/DemoCourseStudent/getDemoCourseByStudentId';
import { getCourseStudentByStudentIdSuccess } from '../../redux/slices/CourseStudent/getCourseStudentByStudentId';
import createAxiosJWT from '../../utils/createInstance';
import getDemoCourseByStudentId from '../../redux/actions/DemoCourseStudent/GetDemoCourseStudentByStudentId';
import { Link, Outlet } from 'react-router-dom';
import DetailStudentJudgepage from '../DetailStudenJudgePage';
import getStudentRatingByStudentId from '../../redux/actions/StudentRating/GetStudentRatingByIdStudent';
import { getStudentRatingByStudentIdSuccess } from '../../redux/slices/StudentRating/getStudentRatingByStudentIdSlice';
import moment from 'moment';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import ReportCourseForm from '../../components/ReportCourseForm';
import { reportContent } from '../../data';
import { toast } from 'react-toastify';
import reportDemoCourseStudent from '../../redux/actions/DemoCourseStudent/ReportDemoCourseStudent';
import { reportDemoCourseStudentSuccess } from '../../redux/slices/DemoCourseStudent/reportDemoCourseStudent';
import { reportCourseStudentSuccess } from '../../redux/slices/CourseStudent/reportedCourseStudent';
import reportCourseStudent from '../../redux/actions/CourseStudent/ReportCourseStudent';


function StudentJudgePage() {

    const dispatch = useDispatch()
    const student = useSelector((state) => state.getStudentByAccountId.students?.infoStudent)
    const user = useSelector((state) => state.login.login?.currentUser)
    const accessToken = user?.accessToken
    const axiosJWT = createAxiosJWT(dispatch, user, getStudentRatingByStudentIdSuccess)
    const axiosJWTDemoCourse = createAxiosJWT(dispatch, user, getDemoCourseByStudentIdSuccess)
    const axiosJWTCourse = createAxiosJWT(dispatch, user, getCourseStudentByStudentIdSuccess)
    const account_id = user?._id
    useEffect(() => {
        getDemoCourseByStudentId(student._id, dispatch, accessToken, axiosJWTDemoCourse)
        getCourseStudentByStudentId(student._id, dispatch, accessToken, axiosJWTCourse)
        getStudentRatingByStudentId(student._id, account_id, dispatch, axiosJWT, accessToken)
    }, [])
    const demoClasses = useSelector((state) => state.getDemoCourseByStudentId.demoCourse?.currentDemoCourse)
    const officiaClasses = useSelector((state) => state.getCourseStudentByStudentId.officialCourses?.currentCourse)
    console.log("democourse student", { demoClasses }, "course student", { officiaClasses })
    const studentRating = useSelector((state) => state.getStudentRatingByStudentId?.studentRating?.currentRating)
    console.log({ studentRating })
    const [visible, setVisible] = useState(false)
    const [show, setShow] = useState("none")
    const [data, setData] = useState(null)
    const [flag, setFlag] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [reportMessage, setReportMessage] = useState([])
    const [checkedState, setCheckedState] = useState(
        new Array(reportContent.length).fill(false)
    );
    if (!demoClasses && !officiaClasses) return null
    else {
        // let teacherofficialClasses = null
        // let teacherdemoClasses = null
        // if (demoClasses) teacherdemoClasses = demoClasses?.map((item) => item.id_demo_course.id_course.id_teacher)
        // else teacherdemoClasses = teacherdemoClasses
        // if (officiaClasses) teacherofficialClasses = officiaClasses?.map((item) => item.id_course.id_teacher)
        // else teacherofficialClasses = teacherdemoClasses
        // console.log({ teacherdemoClasses }, { teacherofficialClasses })
        // let teacher = [...teacherdemoClasses, ...teacherofficialClasses]
        // teacher = [...new Map(teacher.map(v => [JSON.stringify(v), v])).values()]
        // console.log({ teacher })

        const handleOpenForm = (data, flag) => {
            console.log({ data, flag })
            setFlag(flag)
            setData(data)
            setVisible(true)
            setShow("block")
        }

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : item
            );

            setCheckedState(updatedCheckedState);

            const newCheckedState = new Set([...reportMessage, reportContent[position]])

            setReportMessage([...newCheckedState])
        };

        const handleSubmit = (data, flag) => {
            if (data) {
                const reportMessageSend = [...reportMessage]
                if (inputValue !== "") {
                    reportMessageSend.push(inputValue)
                }
                setCheckedState(new Array(reportContent.length).fill(false))
                setInputValue('')
                setReportMessage([])
                setShow('none')
                console.log({ reportMessageSend })
                if (reportMessageSend.length > 0) {
                    const value = {
                        isReported: true,
                        reportedMessage: reportMessageSend,
                        reportedDateTime: moment(new Date().getTime()).format("DD/MM/YYYY hh:mm:ss")
                    }
                    console.log({ value, flag, data })
                    if (flag == 1) {
                        reportDemoCourseStudent(data._id, value, dispatch, accessToken, axiosJWTDemoCourse, account_id)
                    }
                    else {
                        reportCourseStudent(data._id, value, dispatch, accessToken, axiosJWTCourse, account_id)

                    }
                    // toast.success("Báo cáo đã được gửi!", {
                    //     position: "top-right",
                    // })
                }
                else {
                    toast.warning('Bạn chưa điền nội dung cho báo cáo. Hãy thực hiện lại!', {
                        position: "top-right",
                    })
                }
            }
            else {
                toast.error("Không có dữ liệu.", {
                    position: "top-right",
                })
            }

        }
        return (
            <div className='student-judge-page_container container-fluid columns' style={{ minHeight: "60vh" }}>
                <strong className='is-size-4'>Danh sách giáo viên</strong>
                {demoClasses || officiaClasses ?
                    <div className="all-teachers_table" style={{ padding: "0 2rem 0 2rem " }}>
                        <table class="table is-fullwidth " style={{ backgroundColor: "#B2FFDA" }}>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    {/* <th></th> */}
                                    <th>Tên giáo viên</th>
                                    <th>Tên lớp học</th>
                                    <th>Loại lớp học</th>
                                    {/* <th>Hạng mục</th> */}
                                    {/* <th>Cấp độ </th> */}
                                    <th>Ngày đánh giá </th>
                                    <th>Đánh giá</th>
                                    <th> </th>
                                    <th>Báo cáo </th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: "left" }}>
                                {/* -----------demo class ------------------------ */}
                                <>
                                    {demoClasses && demoClasses.map((item) =>
                                        <tr key={item._id}>
                                            <td>
                                                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    {demoClasses.indexOf(item) + 1}
                                                </div>
                                            </td>
                                            <td>{item.id_demo_course.id_course.id_teacher.account_id.full_name}</td>
                                            <td>{item.id_demo_course.id_course.name}</td>
                                            <td>Lớp học thử </td>
                                            {/* /check danh gia chua  */}
                                            {item.isJudged ?
                                                (<>
                                                    {studentRating && studentRating.length > 0 &&
                                                        studentRating
                                                            .filter(i => i.id_teacher._id == item.id_demo_course.id_course.id_teacher._id
                                                                && i.id_course._id == item.id_demo_course.id_course._id)
                                                            .filter(i => i.isDemo == true)
                                                            .map(i =>
                                                                <>
                                                                    {
                                                                        // xem bi danh gia xau ko 
                                                                        i.countBadJudge > 0 ?
                                                                            // co danh gia xau 
                                                                            <>
                                                                                {/* xem danh gia xau da dc danh gia lai chua  */}
                                                                                <td>
                                                                                    {/* da danh gia lai: hien thi ngay danh gia lai */}
                                                                                    {i.studentUpdatedAt ?
                                                                                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                            {i.studentUpdatedAt.split(' ')[0]}
                                                                                            <br />(đã cập nhật)
                                                                                        </div> :
                                                                                        // chua danh gia lai: ko hien 
                                                                                        ""
                                                                                    }
                                                                                </td>
                                                                                {/* danh gia xau dc danh gia lai chua  */}
                                                                                {
                                                                                    i.studentUpdatedAt ?
                                                                                        // da danh gia => hien nut da danh gia 
                                                                                        <td>
                                                                                            <div div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                                                <AiOutlineCheckCircle style={{
                                                                                                    color: "green",
                                                                                                    cursor: "pointer",
                                                                                                    width: "1rem",
                                                                                                    height: "1rem",
                                                                                                }} />
                                                                                            </div>
                                                                                        </td>
                                                                                        :
                                                                                        // chua danh gia =>link danh gia lai 
                                                                                        <td>
                                                                                            <div style={{ width: "100%", display: "flex", alignItems: "center", textAlign: "left" }}>
                                                                                                <Link to={`/profile/${account_id}/judgeTeacher/rejudge/${i._id}`}>Đánh giá lại </Link>
                                                                                            </div>
                                                                                        </td>
                                                                                }
                                                                                {/* hien thi thong bao khi bi danh gia xau */}
                                                                                <td className='has-text-danger'
                                                                                    style={{ width: "10rem" }}>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: 'column' }}>
                                                                                        Cảnh báo lần {i.countBadJudge}:<br />
                                                                                        {i.messageFromSystem.map(i =>
                                                                                            <li>
                                                                                                {i}
                                                                                            </li>)}
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                                        {/* <Link to={`/profile/${account_id}/judgeTeacher/reportCourse/${item.id_demo_course.id_course._id}`}> */}
                                                                                        <button className='button is-small is-warning' onClick={() => { handleOpenForm(item, 1) }}>Báo cáo </button>
                                                                                        {/* </Link> */}
                                                                                    </div>
                                                                                </td>
                                                                            </> :
                                                                            //ko co danh gia xau
                                                                            <>
                                                                                {/* hien thi ngay danh gia  va dau tick  */}
                                                                                <td>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                        {moment(i.createdAt).format("DD/MM/YYYY")}
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                                        <AiOutlineCheckCircle style={{
                                                                                            color: "green",
                                                                                            cursor: "pointer",
                                                                                            width: "1rem",
                                                                                            height: "1rem",
                                                                                        }} />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                                        {/* <Link to={`/profile/${account_id}/judgeTeacher/reportCourse/${item.id_demo_course.id_course._id}`}> */}
                                                                                        <button className='button is-small is-warning' onClick={() => { handleOpenForm(item, 1) }}>Báo cáo </button>
                                                                                        {/* </Link> */}
                                                                                    </div>
                                                                                </td>
                                                                            </>
                                                                    }
                                                                </>
                                                            )
                                                    }
                                                </>) :
                                                // chua danh gia 
                                                (<>

                                                    {/* check xem da dc danh gia chua, dc bao cao chua: phai het khoa hoc ms dc danh gia , bat dau khoa hoc thi dc bao cao  */}
                                                    {new Date(item.id_demo_course.end_date).getTime() <= Date.now() ?
                                                        <>
                                                            {/* // da dc danh gia do tg end demo be hon thoi gia hien tai */}
                                                            <td>
                                                            </td>
                                                            <td>
                                                                <div style={{ width: "100%", display: "flex", alignItems: "center", textAlign: "left" }}>
                                                                    <Link to={`/profile/${account_id}/judgeTeacher/${item.id_demo_course.id_course._id}`}>
                                                                        Đánh giá
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                    <button className='button is-small is-warning' onClick={() => { handleOpenForm(item, 1) }}>Báo cáo </button>
                                                                </div>
                                                            </td>
                                                        </>

                                                        :
                                                        // chua dc danh gia
                                                        <>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            {/* xem da bat dau chua, neu roi thi bao cao dc , chua thi ko dc bao caao */}
                                                            {new Date(item.id_demo_course.start_date).getTime() <= Date.now() ?
                                                            <td>
                                                                 <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                    <button className='button is-small is-warning' onClick={() => { handleOpenForm(item, 1) }}>Báo cáo </button>
                                                                </div>
                                                            </td>:
                                                            <td></td>
                                                            }
                                                            
                                                        </>

                                                    }

                                                </>)
                                            }
                                        </tr>
                                    )}

                                    {/* -----------official class ------------------------ */}
                                    {officiaClasses && officiaClasses.map((item) =>
                                        <tr key={item._id}>
                                            <td>
                                                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    {demoClasses ? (officiaClasses.indexOf(item) + 1 + demoClasses.length) : (officiaClasses.indexOf(item) + 1)}
                                                </div>
                                            </td>
                                            <td>{item.id_course.id_teacher.account_id.full_name}</td>
                                            <td>{item.id_course.name}</td>
                                            <td>Lớp học chính thức</td>
                                            {/* /check danh gia chua  */}
                                            {item.isJudged ?
                                                (<>
                                                    {studentRating && studentRating.length > 0 &&
                                                        studentRating
                                                            .filter(i => i.id_teacher._id == item.id_course.id_teacher._id
                                                                && i.id_course._id == item.id_course._id)
                                                            .filter(i => i.isDemo == false)
                                                            .map(i =>
                                                                <>
                                                                    {
                                                                        // xem bi danh gia xau ko 
                                                                        i.countBadJudge > 0 ?
                                                                            // co danh gia xau 
                                                                            <>
                                                                                {/* xem danh gia xau da dc danh gia lai chua  */}
                                                                                <td>
                                                                                    {/* da danh gia lai: hien thi ngay danh gia lai */}
                                                                                    {i.studentUpdatedAt ?
                                                                                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                            {i.studentUpdatedAt.split(' ')[0]}
                                                                                            <br />(đã cập nhật)
                                                                                        </div> :
                                                                                        // chua danh gia lai: ko hien 
                                                                                        ""
                                                                                    }
                                                                                </td>
                                                                                {/* danh gia xau dc danh gia lai chua  */}
                                                                                {
                                                                                    i.studentUpdatedAt ?
                                                                                        // da danh gia => hien nut da danh gia 
                                                                                        <td>
                                                                                            <div div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                                                <AiOutlineCheckCircle style={{
                                                                                                    color: "green",
                                                                                                    cursor: "pointer",
                                                                                                    width: "1rem",
                                                                                                    height: "1rem",
                                                                                                }} />
                                                                                            </div>
                                                                                        </td>
                                                                                        :
                                                                                        // chua danh gia =>link danh gia lai 
                                                                                        <td>
                                                                                            <div style={{ width: "100%", display: "flex", alignItems: "center", textAlign: "left" }}>
                                                                                                <Link to={`/profile/${account_id}/judgeTeacher/rejudge/${i._id}`}>Đánh giá lại </Link>
                                                                                            </div>
                                                                                        </td>
                                                                                }
                                                                                {/* hien thi thong bao khi bi danh gia xau */}
                                                                                <td className='has-text-danger'
                                                                                    style={{ width: "10rem" }}>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: 'column' }}>
                                                                                        Cảnh báo lần {i.countBadJudge}:<br />
                                                                                        {i.messageFromSystem.map(i =>
                                                                                            <li>
                                                                                                {i}
                                                                                            </li>)}
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                                        {/* <Link to={`/profile/${account_id}/judgeTeacher/reportCourse/${item.id_demo_course.id_course._id}`}> */}
                                                                                        <button className='button is-small is-warning' onClick={() => { handleOpenForm(item, 0) }}>Báo cáo </button>
                                                                                        {/* </Link> */}
                                                                                    </div>
                                                                                </td>
                                                                            </> :
                                                                            //ko co danh gia xau
                                                                            <>
                                                                                {/* hien thi ngay danh gia  va dau tick  */}
                                                                                <td>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                        {moment(i.createdAt).format("DD/MM/YYYY")}
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                                        <AiOutlineCheckCircle style={{
                                                                                            color: "green",
                                                                                            cursor: "pointer",
                                                                                            width: "1rem",
                                                                                            height: "1rem",
                                                                                        }} />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td>
                                                                                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                                        {/* <Link to={`/profile/${account_id}/judgeTeacher/reportCourse/${item.id_demo_course.id_course._id}`}> */}
                                                                                        <button className='button is-small is-warning' onClick={() => { handleOpenForm(item, 0) }}>Báo cáo </button>
                                                                                        {/* </Link> */}
                                                                                    </div>
                                                                                </td>
                                                                            </>
                                                                    }
                                                                </>
                                                            )
                                                    }
                                                </>) :
                                                // chua danh gia 
                                                (<>

                                                    {/* check xem da dc danh gia chua tg dc danh gi phai la sau khi bat dau khoa hoc chinh thuc */}
                                                    {new Date(item.id_course.start_date).getTime() <= Date.now() ?
                                                        <>
                                                            {/* // da dc danh gia do tg end demo be hon thoi gia hien tai */}
                                                            <td>
                                                            </td>
                                                            <td>
                                                                <div style={{ width: "100%", display: "flex", alignItems: "center", textAlign: "left" }}>
                                                                    <Link to={`/profile/${account_id}/judgeTeacher/${item.id_course._id}`}>
                                                                        Đánh giá
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                                        {/* <Link to={`/profile/${account_id}/judgeTeacher/reportCourse/${item.id_demo_course.id_course._id}`}> */}
                                                                                        <button className='button is-small is-warning' onClick={() => { handleOpenForm(item, 0) }}>Báo cáo </button>
                                                                                        {/* </Link> */}
                                                                                    </div>
                                                            </td>
                                                        </>

                                                        :
                                                        // chua dc danh gia
                                                        <>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            
                                                            <td>
                                                                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                                    <button className='button is-small is-warning' onClick={() => { handleOpenForm(item, 0) }}>Báo cáo </button>
                                                                </div>
                                                            </td>
                                                        </>

                                                    }

                                                </>)
                                            }
                                        </tr>
                                    )}
                                </>
                            </tbody>
                        </table>
                    </div >
                    : <>
                        <strong className='is-size-6'>Bạn không có giáo viên nào để đánh giá. Hãy tìm kiếm giáo viên và đăng kí học trước khi đánh giá nha!</strong>
                        <Link to='/findingTeacher'>
                            <button className='button is-primary'>Tìm kiếm giáo viên</button>
                        </Link>
                    </>
                }
                <Outlet />
                <div className="modal " style={{
                    visibility: `${visible}`,
                    display: `${show}`
                }}>
                    <div className="modal-background"></div>

                    <div className="modal-content is-centered " style={{ marginTop: "5rem", height: "70vh" }}>
                        <header className="modal-card-head">
                            <p className="modal-card-title">Báo cáo khóa học </p>
                            <button className="modal-close is-large" aria-label="close" onClick={() => setShow("none")}></button>

                        </header>
                        <strong className='is-size-5'>Khóa học bạn muốn báo cáo: </strong>
                        <button className='button is-warning is-light'>{data && data.countReported>0? `Đã báo cáo ${data.countReported} lần`:"Chưa báo cáo lần nào."}</button>
                        <div className="warning_content"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "left",
                                padding: "1rem"
                            }}
                        >
                            <div className="column ">
                                <label className="label">Tên khóa học</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Tên khóa học"
                                    name="Tên khóa học"
                                    id="Tên khóa học"
                                    value={data &&(flag==1? data.id_demo_course.id_course.name : data.id_course.name)}
                                    readOnly={true}
                                />
                            </div>
                            <div className="column ">
                                <label className="label">Loại khóa học</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Loại khóa học"
                                    name="Loại khóa học"
                                    id="Loại khóa học"
                                    value={flag==1? "Khóa học thử" : "Khóa học chính thức"}
                                    readOnly={true}
                                />
                            </div>
                            <div className="column">
                                <label className="label">Tên giáo viên</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Tên giáo viên"
                                    name="Tên giáo viên"
                                    id="Tên giáo viên"
                                    value={data && (flag==1? data.id_demo_course.id_course.id_teacher.account_id.full_name 
                                        : data.id_course.id_teacher.account_id.full_name)}
                                    readOnly={true}
                                />
                            </div>
                            </div>
                        <strong className='is-size-5'>Nội dung bạn muốn báo cáo là? </strong>
                        <div className="warning_content"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                textAlign: "left",
                                padding: "1rem"
                            }}
                        >
                            {reportContent && reportContent.map((content) =>
                                <label className="checkbox">
                                    <input type="checkbox"
                                        name={content}
                                        id={content}
                                        value={content}
                                        checked={checkedState[reportContent.indexOf(content)]}
                                        onChange={() => handleOnChange(reportContent.indexOf(content))}
                                    />
                                    {content}
                                </label>

                            )}

                            <div className="field">
                                <label className="label">Nội dung khác</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Nội dung khác"
                                    name="other_content"
                                    id="other_content"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div >
                            <button className="button is-warning mr-6" type="submit" onClick={() => handleSubmit(data, flag)}>Hoàn thành </button>
                            <button className="button is-danger" onClick={() => setShow("none")}>Hủy  </button>
                        </div >
                    </div>
                </div>
            </div >
        )
    }
}
export default StudentJudgePage

// {officiaClasses && officiaClasses.map((item) =>
//     <tr key={item._id}>
//         <td>
//             {demoClasses ? (officiaClasses.indexOf(item) + 1 + demoClasses.length) : (officiaClasses.indexOf(item) + 1)}
//         </td>
//         <td>{item.id_course.id_teacher.account_id.full_name}</td>
//         <td>{item.id_course.name}</td>
//         <td>Lớp học chính thức </td>
//         {/* <td>{item.id_course.category_id.type}</td> */}
//         {/* <td>{item.id_course.category_id.level}</td> */}
//         {item.isJudged ?
//             (<>
//                 {studentRating && studentRating.length > 0 &&
//                     studentRating
//                         .filter(i => i.id_teacher._id == item.id_course.id_teacher._id
//                             && i.id_course._id == item.id_course._id)
//                         .filter(i => i.isDemo == false)
//                         .map(i =>
//                             <>
//                                 {i.countBadJudge > 0 ?
//                                     <>

//                                         <td>{i.studentUpdatedAt ? <>
//                                             {i.studentUpdatedAt.split(' ')[0]}
//                                             <br />(đã cập nhật)
//                                         </> : ""}</td>
//                                         {
//                                             i.studentUpdatedAt ?

//                                                 <td>
//                                                     <AiOutlineCheckCircle style={{
//                                                         color: "green",
//                                                         cursor: "pointer",
//                                                         width: "1rem",
//                                                         height: "1rem",
//                                                     }} />
//                                                 </td>
//                                                 :
//                                                 <td>
//                                                     <div style={{ width: "100%", display: "flex", alignItems: "center",  textAlign:"left" }}>
//                                                         <Link to={`/profile/${account_id}/judgeTeacher/rejudge/${i._id}`}>Đánh giá lại </Link>
//                                                     </div>


//                                                 </td>


//                                         }

//                                         <td className='has-text-danger'
//                                             style={{ width: "19rem" }}
//                                         >Cảnh báo lần {i.countBadJudge}:<br />
//                                             {i.reportMessage.map(i =>
//                                                 <>
//                                                     {i}<br />
//                                                 </>)}</td>

//                                     </> :
//                                     <>
//                                         <td>{moment(i.createdAt).format("DD/MM/YYYY")} </td>

//                                         <td>
//                                             <AiOutlineCheckCircle style={{
//                                                 color: "green",
//                                                 cursor: "pointer",
//                                                 width: "1rem",
//                                                 height: "1rem",
//                                             }} />
//                                         </td>
//                                     </>
//                                 }
//                             </>
//                         )
//                 }
//             </>) :
//             (<>
//                 <td></td>

//                 <td>
//                     {new Date(item.id_course.start_date).getTime() <= Date.now() ?
//                         <div style={{ width: "100%", display: "flex", alignItems: "center",  textAlign:"left"}}>
//                             <Link to={`/profile/${account_id}/judgeTeacher/${item.id_course._id}`}>Đánh giá </Link>
//                         </div>
//                         :
//                         <></>

//                     }

//                 </td>
//                 <td></td>
//             </>)
//         }

//     </tr>
// )}