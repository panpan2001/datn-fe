import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineAlert, AiOutlineCheck, AiOutlineClear, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
import getStudentRatingById from '../../redux/actions/StudentRating/GéttudentRatingById'
import { JudgeFormNames } from '../../data'
import moment from 'moment/moment'
import { toast } from 'react-toastify'
import createAxiosJWT from '../../utils/createInstance'
import sendWarningStudentRating from '../../redux/actions/StudentRating/SendWarningStudentRating'
import { updateStudentRatingSuccess } from '../../redux/slices/StudentRating/updateStudentRatingSlice'
import { getStudentRatingByIdSuccess } from '../../redux/slices/StudentRating/géttudentratingByIdSlice'
import deleteStudentRating from '../../redux/actions/StudentRating/DeleteStudentRating'
import { deleteStudentRatingSuccess } from '../../redux/slices/StudentRating/deleteStudentRatingSlice'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import changeAppearanceStudentRating from '../../redux/actions/StudentRating/ChangeAppearanceStudentRating'

function StudentRatingDetailForm() {
    const { idRating } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState('none')
    const user = useSelector((state) => state.login.login?.currentUser)
    const accessToken = user?.accessToken
    const axiosJWT = createAxiosJWT(dispatch, user, getStudentRatingByIdSuccess)
    // const axiosJWTDel = createAxiosJWT(dispatch, user, deleteStudentRatingSuccess)
    useEffect(() => {
        getStudentRatingById(idRating, dispatch)
    }, [])

    const studentRating = useSelector((state) => state.getStudentRatingById?.ratings?.currentRating)
    console.log({ studentRating })
    const warningMesage = [
        //    "Đánh giá của bạn không trung thực. Hãy đánh giá lại.",
        // "Bình luận của bạn không phù hợp. Xin ghi lại bình luận khác."
        "Đánh giá của bạn không trung thực.",
        "Bình luận của bạn không phù hợp."
    ]
    const [inputValue, setInputValue] = useState('')
    const [messageFromSystem, setMessageFromSystem] = useState([])
    const [checkedState, setCheckedState] = useState(
        new Array(warningMesage.length).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const newCheckedState = new Set([...messageFromSystem, warningMesage[position]])

        setMessageFromSystem([...newCheckedState])
    };
    const handleSendWarning = (id) => {
        const warningMessageSend = [...messageFromSystem]
        if (inputValue !== "") {
            warningMessageSend.push(inputValue)
        }
        setCheckedState(new Array(warningMesage.length).fill(false))
        setInputValue('')
        setMessageFromSystem([])
        setShow('none')
        console.log(warningMessageSend)
        if (warningMessageSend.length > 0) {
            ///send canh bao :account_id,value,dispatch,axiosJWT,accessToken
            const value = {
                status: 1,
                messageFromSystem: warningMessageSend
            }
            sendWarningStudentRating(studentRating._id, user._id, value, dispatch, axiosJWT, accessToken)
            // navigate(-1)
            toast.success("Đã gửi cảnh báo thành công!", {
                position: "top-right",
            })
        }
        else {
            toast.warning('Bạn chưa điền nội dung cho cảnh báo. Hãy thực hiện lại!', {
                position: "bottom-right",
            })
        }
    }
    const handleResetJudge = (item) => {
        if (item.countBadJudge === 0) {
            toast.warning('Đánh giá này chưa bị cảnh báo!', {
                position: "top-right",
            })
        }
        else {
            const value = {
                status: 0,
                messageFromSystem: []
            }
            sendWarningStudentRating(studentRating._id, user._id, value, dispatch, axiosJWT, accessToken)
            toast.success("Đã xóa mọi cảnh báo!", {
                position: "top-right",
            })
            // navigate(-1)
        }

    }

    const handleDelete = (id) => {
        // xoa luon ne 
        deleteStudentRating(id, dispatch, axiosJWT, accessToken, user?._id, navigate)
        // truoc khi xoa thi luon hien form 
        console.log({ id, accessToken })
        // navigate('/admin/studentJudge')
        // toast.success("Xóa đánh giá thành công!", {
        //     position: "top-right",
        // })
    }
    const handleChangeAppearance = (id) => {
        if (studentRating.countBadJudge == 0) {
            toast.warning('Đánh giá này chưa bị báo xấu, không thể ẩn !', {
                position: "top-right",
            })
        }
        else {
            // an binh luan di, ko xoa, nhung binh luan bi an thi se ko tinh vao rating trung binh cua teacher
            //    dispatch, id, value, axiosJWT, accessToken, success, account_id
            appearance.current = !appearance.current
            //flag: 0 cap nhat 1 
            changeAppearanceStudentRating(dispatch, id, studentRating.isBadJudge, axiosJWT, accessToken, getStudentRatingByIdSuccess, user._id, 0)

        }

    }
    const appearance = useRef(studentRating)
    if (studentRating) {
        appearance.current = !studentRating.isBadJudge
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
                                marginBottom: "3rem"
                            }}>
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
                                <strong className='is-size-5'
                                    style={{
                                        display: 'flex',
                                        justifyContent: "center"
                                    }}
                                >Thông tin đánh giá</strong>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    marginTop: ".5rem"
                                }}>
                                    {studentRating.countBadJudge > 0 ?
                                        (
                                            <button className='button is-danger'>Cảnh báo lần {studentRating.countBadJudge} </button>
                                        ) : (<></>)
                                    }
                                </div>
                                <div className='columns is-multiline'
                                    style={{
                                        display: 'flex',
                                        flexDirection: "row",
                                        padding: '2rem'
                                    }}>
                                    <div className="column is-4">
                                        <label className="label">Ngày đánh giá</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Ngày đánh giá"
                                            name="Ngày đánh giá"
                                            id='Ngày đánh giá'
                                            readOnly={true}
                                            value={moment(studentRating.createdAt).format('DD/MM/YYYY ')}
                                        />
                                    </div>
                                    <div className="column is-4">
                                        <label className="label">Ngày cập nhật</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Ngày cập nhật"
                                            name="Ngày cập nhật"
                                            id='Ngày cập nhật'
                                            readOnly={true}
                                            value={studentRating.studentUpdatedAt ? studentRating.studentUpdatedAt.split(" ")[0] : moment(studentRating.createdAt).format('DD/MM/YYYY ')}
                                        />
                                    </div>
                                    <div className="column is-4">
                                        <label className="label">Người đánh giá</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Ngày đánh giá"
                                            name="Ngày đánh giá"
                                            id='Ngày đánh giá'
                                            readOnly={true}
                                            value={studentRating.id_student.account_id.full_name}
                                        />
                                    </div>
                                    <div className="column is-12"
                                        style={{
                                            display: 'flex',
                                            flexDirection: "column",
                                            alignItems: "center",
                                            padding: '0rem'
                                        }}>
                                        <div className="column is-4"></div>
                                        <div className="column is-4"
                                            style={{
                                                display: 'flex',
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: '1rem',
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
                                            style={{
                                                display: 'flex',
                                                flexDirection: "row",
                                                alignItems: "center",
                                                padding: '1rem',
                                                borderRadius: "8px",
                                                border: "1px solid #7EFEC0",
                                                backgroundColor: "#B2FFDA",
                                                justifyContent: 'space-between',
                                                width: '100%'
                                            }}>
                                            <label className="label is-size-6">{JudgeFormNames[0]}</label>
                                            <strong className='is-size-5'>{studentRating.rating_content_1}</strong>
                                        </div>

                                    </div>

                                    <div className="column is-6"
                                        style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: "row",
                                                alignItems: "center",
                                                padding: '1rem',
                                                borderRadius: "8px",
                                                border: "1px solid #7EFEC0",
                                                backgroundColor: "#85CEFE",
                                                justifyContent: 'space-between',
                                                width: '100%'
                                            }}>
                                            <label className="label is-size-6">{JudgeFormNames[1]}</label>
                                            <strong className='is-size-5'>{studentRating.rating_content_2}</strong>
                                        </div>

                                    </div>

                                    <div className="column is-6"
                                        style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: "row",
                                                alignItems: "center",
                                                padding: '1rem',
                                                borderRadius: "8px",
                                                border: "1px solid #FFDD7E",
                                                backgroundColor: "#FFEBB2",
                                                justifyContent: 'space-between',
                                                width: '100%'
                                            }}>
                                            <label className="label is-size-6">{JudgeFormNames[2]}</label>
                                            <strong className='is-size-5'>{studentRating.rating_content_3}</strong>
                                        </div>

                                    </div>

                                    <div className="column is-6"
                                        style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: "row",
                                                alignItems: "center",
                                                padding: '1rem',
                                                borderRadius: "8px",
                                                border: "1px solid #9095FE",
                                                backgroundColor: "#BDC0FF",
                                                justifyContent: 'space-between',
                                                width: '100%'
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
                                            readOnly={true}
                                            value={studentRating.comment}
                                        ></textarea>
                                    </div>
                                </div>

                            </div>
                            <div className="teacher-and-course-info_container" style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "1rem",
                                justifyContent: "left",
                                marginTop: "1rem",
                            }}>
                                <div className="columns is-6 is-multiline "
                                    style={{
                                        textAlign: "left",
                                        backgroundColor: "white",
                                        border: "1px solid var(--border-color)",
                                        justifyContent: "center",
                                        padding: "1rem",
                                        borderRadius: "8px",
                                        display: 'flex',
                                        flexDirection: "column",
                                        width: '50%'
                                    }}>
                                    <strong className='is-size-5'>Thông tin giáo viên</strong>

                                    <div className=" column is-12  teacher_img"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }} >
                                        {/* <img src={studentRating.id_teacher.personal_image} /> */}

                                    </div>
                                    <div className="column ">
                                        <label className="label">Họ và tên</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Họ và tên"
                                            name="full_name"
                                            id="full_name"
                                            readOnly={true}
                                            value={studentRating.id_teacher.account_id.full_name}
                                        />
                                    </div>

                                    <div className="column ">
                                        <label className="label">Giới tính</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Giới tính"
                                            name="Giới tính"
                                            id='Giới tính'
                                            readOnly={true}
                                            value={studentRating.id_teacher.account_id.gender}
                                        />

                                    </div>

                                    <div className="column ">
                                        <label className="label">Email</label>
                                        <input
                                            className="input"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            id='email'
                                            readOnly={true}
                                            value={studentRating.id_teacher.account_id.email}
                                        />
                                    </div>
                                    <div className="column ">
                                        <label className="label">Số điện thoại</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Số điện thoại"
                                            name="phone_number"
                                            id='phone_number'
                                            readOnly={true}
                                            value={studentRating.id_teacher.account_id.phone_number}
                                        />
                                    </div>


                                </div>
                                <br />
                                <div className="columns is-6 is-multiline "
                                    style={{
                                        textAlign: "left",
                                        backgroundColor: "white",
                                        border: "1px solid var(--border-color)",
                                        // justifyContent: "center",
                                        padding: "1rem",
                                        borderRadius: "8px",
                                        display: 'flex',
                                        flexDirection: "column",
                                        width: '50%'
                                    }}>
                                    <strong className='is-size-5 mb-3'
                                        style={{ display: 'flex', justifyContent: "flex-start" }}
                                    >Thông tin khóa học</strong>
                                    <div style={{ display: 'flex', flexDirection: "column" }}>
                                        <div className="column  ">
                                            <label className="label">Tên khóa học</label>
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Tên khóa học"
                                                name="phone_number"
                                                id='phone_number'
                                                readOnly={true}
                                                value={studentRating.id_course.name}
                                            />
                                        </div>
                                        <div className="column ">
                                            <label className="label">Loại khóa học</label>

                                            {studentRating.isDemo ?
                                                <button className='button is-info'>Khóa học thử</button> :
                                                <button className='button is-primary'>Khóa học chính thức </button>
                                            }

                                        </div>
                                        <div className="column  ">
                                            <label className="label">Cấp độ</label>
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Loại khóa học"
                                                name="phone_number"
                                                id='phone_number'
                                                readOnly={true}
                                                value={studentRating.id_course.category_id.level}

                                            />
                                        </div>
                                    </div>

                                </div>
                                <br />
                            </div>


                        </div>
                        <div className="group-btn"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "1rem",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "80.5%",
                                height: "5rem",
                                position: "fixed",
                                bottom: ".5rem",
                                backgroundColor: "#fef9f9",
                                border: " 1px solid #e4dcdc",
                                borderRadius: "8px",
                                padding: "2rem"
                            }}
                        >

                            <div className="button-left">
                                <button className="button is-danger has-text-white"
                                    onClick={() => handleDelete(studentRating._id,1)}
                                >
    
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
                                <button
                                    className="button is-warning"
                                    onClick={() => setShow("block")}
                                >
                                    <AiOutlineAlert
                                        style={{
                                            cursor: 'pointer',
                                            width: "1.5rem",
                                            height: "1.5rem",
                                            marginRight: ".25rem",
                                            marginBottom: ".25rem",

                                        }} /> Cảnh báo
                                </button>
                                <button
                                    className="button is-primary"
                                    onClick={() => handleResetJudge(studentRating)}
                                >
                                    <AiOutlineClear
                                        style={{
                                            cursor: 'pointer',
                                            width: "1.5rem",
                                            height: "1.5rem",
                                            marginRight: ".25rem",

                                        }} /> Xóa cảnh báo
                                </button>
                                <button className="button is-light"
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
                <div className="modal "
                    style={{
                        display: `${show}`,
                        // marginTop: "20rem",
                    }}>
                    <div className="modal-background"></div>

                    <div className="modal-content is-centered"
                        style={{ marginTop: "5rem" }}
                    >
                        <header className="modal-card-head">
                            <p className="modal-card-title">Cảnh báo</p>
                            <button className="modal-close is-large"
                                aria-label="close"
                                onClick={() => setShow("none")}>
                            </button>
                        </header>

                        <strong className='is-size-5'>Nội dung bạn muốn cảnh báo là gì ? </strong>
                        <div className="warning_content"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                textAlign: "left",
                            }}
                        >
                            <label className="checkbox">
                                <input type="checkbox"
                                    name={warningMesage[0]}
                                    id={warningMesage[0]}
                                    value={warningMesage[0]}
                                    checked={checkedState[0]}
                                    onChange={() => handleOnChange(0)}
                                />
                                {warningMesage[0]}
                            </label>
                            <label className="checkbox">
                                <input type="checkbox"
                                    name={warningMesage[1]}
                                    id={warningMesage[1]}
                                    value={warningMesage[1]}
                                    checked={checkedState[1]}
                                    onChange={() => handleOnChange(1)}
                                />
                                {warningMesage[1]}
                            </label>
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
                            <button
                                className="button is-warning mr-6"
                                type='submit'
                                onClick={() => handleSendWarning(studentRating._id)}>
                                Hoàn thành
                            </button>
                            <button
                                className="button is-danger"
                                onClick={() => {
                                    setShow("none")
                                    // navigate('/admin/studentJudge')
                                }}>
                                Thoát
                            </button>
                        </div >

                    </div>
                </div>
            </div>
        )
    }

}

export default StudentRatingDetailForm

/* 

 {studentRating.countBadJudge > 0 ?
                                    // (
                                    //     appearance== true  ?
                                    //     <button className="button is-dark ml-3"
                                    //         onClick={() => handleChangeAppearance(studentRating._id)}
                                    //     >

                                    //         < BsEyeSlash
                                    //             style={{
                                    //                 // color: 'white',
                                    //                 cursor: 'pointer',
                                    //                 width: "1.5rem",
                                    //                 height: "1.5rem",
                                    //                 marginTop: "-0.25rem",
                                    //                 marginRight: ".25rem",

                                    //             }} />
                                    //         Ẩn đánh giá </button> :

                                    //     <button className="button is-info ml-3"
                                    //         onClick={() => handleChangeAppearance(studentRating._id)}
                                    //     >
                                    //         < BsEye
                                    //             style={{
                                    //                 // color: 'white',
                                    //                 cursor: 'pointer',
                                    //                 width: "1.5rem",
                                    //                 height: "1.5rem",
                                    //                 // marginTop: "-0.25rem",
                                    //                 marginRight: ".25rem",

                                    //             }} />
                                    //         Hiện đánh giá </button>
                                    //     )
                                    <button className="button is-info ml-3"
                                        onClick={() => handleChangeAppearance(studentRating._id)}
                                    >
                                        < BsEye
                                            style={{
                                                // color: 'white',
                                                cursor: 'pointer',
                                                width: "1.5rem",
                                                height: "1.5rem",
                                                marginRight: ".25rem",

                                            }} />
                                        Ẩn/hiện đánh giá </button>
                                    :
                                    <></>
                                }









*/