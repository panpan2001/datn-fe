import React, { useEffect, useState } from 'react'
import '../../assets/styles/EditTeacherForm.css'
import { AiOutlineCheck, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import getTeacherById from '../../redux/actions/Teacher/GetTeacherById'
import { useDispatch, useSelector } from 'react-redux'
import deleteTeacher from '../../redux/actions/Teacher/DeleteTeacher'
import createAxiosJWT from '../../utils/createInstance'
import { deleteTeacherSuccess } from '../../redux/slices/Teacher/DeleteTeacherSlice'
import VerifyStatusButton from '../Button/VerifyStatusButton'
import updateTeacherAcademicStatus from '../../redux/actions/TeacherAcademic/UpdateTeacherAcademicStatus'
import { updateteacherAcademicSuccess } from '../../redux/slices/TeacherAcademic/updateTeacherAcademicStatusSl'
import updateTeacherDegreeStatus from '../../redux/actions/TeacherDegree/UpdateteacherDegreeStatus'
import { updateTeacherDegreeSuccess } from '../../redux/slices/TeacherDegree/upadateTeacherDegreeStatus'

function EditTeacherForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.login.login?.currentUser)
    const { id } = useParams()
    const account_id = user?._id
    const access_token = user?.accessToken
    const axiosJWT = createAxiosJWT(dispatch, user, deleteTeacherSuccess)
    const axiosJWTAcademic = createAxiosJWT(dispatch, user, updateteacherAcademicSuccess)
    const axiosJWTDegree = createAxiosJWT(dispatch, user, updateTeacherDegreeSuccess)
    const handleShowModal = () => {
        alert("hi")
    }
    useEffect(() => {
        getTeacherById(id, dispatch)
        
    }, [])
    const teacher = useSelector(state => state.getTeacherById?.teacher?.currentTeacher)
    // console.log({teacher})
    const [image, setImages] = useState("")
    const valueGender = ['nam', 'nữ', 'khác']

    const handleBack = () => {
        navigate(-1)
    }
    const handleDelete = (id) => {
        deleteTeacher(account_id, id, dispatch, access_token, axiosJWT, navigate)

    }
    const [checkedAcademicStatus, setCheckedAcademicStatus] = useState("")
    const [checkedDegreeStatus, setCheckedDegreeStatus] = useState("")
    let checked = ""
    let checked2 = ""
    if (teacher.id_academic && teacher.id_degree) {
        checked = teacher.id_academic.academic_status
        checked2= teacher.id_degree.degree_status
        console.log("checked", checked)
        console.log("checked 2", checked2)
        const handleChangeAcademicStatus = (e) => {
            e = e == "true" ? true : false
            setCheckedAcademicStatus(e)
            // console.log("e1", e, typeof e)

        }
        const handleChangeDegreeStatus = (e) => {
            e = e == "true" ? true : false
            // console.log("e2",e)
            setCheckedDegreeStatus(e)
        }
        const handleSave = () => {
            if (checkedAcademicStatus != "") {
                console.log("academic status changed:", checkedAcademicStatus, typeof checkedAcademicStatus)
                updateTeacherAcademicStatus(account_id, teacher.id_academic._id, checkedAcademicStatus, dispatch, access_token, axiosJWTAcademic)
            } else {
                console.log("academic status not changed")
            }

            if (checkedDegreeStatus != "") {
                console.log("degree status changed",checkedDegreeStatus, typeof checkedDegreeStatus)
                updateTeacherDegreeStatus(account_id, teacher.id_degree._id, checkedDegreeStatus, dispatch, access_token, axiosJWTDegree)
            } else console.log("degree status not changed")


            navigate(-1)
        }
        return (
            <div className='edit-teacher-form_container container is-centered'>
                <strong className='is-size-4'>Chỉnh sửa thông tin giáo viên</strong>
                <div className="detail-teacher-info_container">
                    <div className="content columns">
                        <div className="column is-8 content-left mr-6">
                            <strong className='is-size-5 '>Thông tin cá nhân</strong>
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
                                            value={teacher.account_id.full_name}
                                        />
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Ngày sinh</label>
                                        <input
                                            className="input"
                                            type="date"
                                            placeholder="Ngày sinh "
                                            name="date_of_birth"
                                            id='date_of_birth'
                                            disabled={true}
                                            value={teacher.account_id.date_of_birth.split('T')[0]}
                                        />

                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="field gender-signup_form" >
                                        <label className="label">Giới tính</label>
                                        <div className="control" >
                                            <div id="gender-1">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id='nam'
                                                    value={valueGender[0]}
                                                    disabled={true}
                                                    checked={valueGender[0] == teacher.account_id.gender.split(" ").join("")}
                                                />
                                                <label className="radio is-size-6" >Nam</label>
                                            </div>
                                            <div id="gender-2">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="nữ"
                                                    value={valueGender[1]}
                                                    disabled={true}
                                                    checked={valueGender[1] == teacher.account_id.gender.split(" ").join("")}
                                                />
                                                <label className="radio is-size-6 ">Nữ</label>
                                            </div>
                                            <div id="gender-3">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id='khác'
                                                    value={valueGender[2]}
                                                    disabled={true}
                                                    checked={valueGender[2] == teacher.account_id.gender.split(" ").join("")}
                                                />
                                                <label className="radio is-size-6">Khác</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Địa chỉ</label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Địa chỉ"
                                            name="address"
                                            id='address'
                                            disabled={true}
                                            value={teacher.account_id.address}
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
                                            value={teacher.account_id.email}
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
                                            value={teacher.account_id.phone_number}
                                        />

                                    </div>
                                </div>


                            </div>
                            <hr />

                            <strong className='is-size-5 mt-3 mb-3'>Thông tin học vấn </strong>
                            <div className="column is-12">
                                <div className="field" style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: "2rem",
                                    marginLeft: "-.75rem"
                                }}>
                                    <label className="label" style={{ marginBottom: "0" }}>Xác thực học vấn: </label>
                                    <div className="control"
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: ".25rem"
                                        }}>
                                        <label className="radio" style={{
                                            display: "flex", gap: "1rem"
                                        }}>
                                            <input
                                                type="radio"
                                                name="type_of_course"
                                                id='academic_status_true'
                                                defaultChecked={checked ? true : false}
                                                // checked={checked=='true'? true : false}
                                                value={true}
                                                onChange={(e) => handleChangeAcademicStatus(e.target.value)}
                                            />
                                            <VerifyStatusButton
                                                name="Đã xác minh"
                                                color="white"
                                                backgroundColor="#00d1b2" />
                                        </label>
                                        <label className="radio ml-6" style={{
                                            display: "flex", gap: "1rem"
                                        }}>
                                            <input type="radio"
                                                name="type_of_course"
                                                id="academic_status_false"
                                                // checked={checked?  false: true}
                                                defaultChecked={checked ? false : true}
                                                value={false}
                                                onChange={(e) => handleChangeAcademicStatus(e.target.value)}
                                            />
                                            <VerifyStatusButton
                                                name="Đang xác minh"
                                                color="black"
                                                backgroundColor="#ffe08a" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-multiline">
                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label" >Tên trường </label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Tên trường"
                                            disabled={true}
                                            value={teacher.id_academic.university_name}
                                        />
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field is-multiline">
                                        <label className="label" >Chuyên ngành</label>
                                        <input
                                            className="input"
                                            type="textarea"
                                            placeholder="Chuyên ngành"
                                            disabled={true}
                                            value={teacher.id_academic.academic_major}
                                        />
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label" >Thời gian học </label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Thời gian học"
                                            disabled={true}
                                            value={teacher.id_academic.academic_period}
                                        />
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field ">
                                        <label className="label" >Minh chứng học vấn </label>
                                        {/* <input className="input"
                                    type="text"
                                    placeholder="Minh chứng học vấn"
                                    
                                    value={teacher.id_academic.academic_evidence}
                                /> */}
                                        <img src={teacher.id_academic.academic_evidence} />

                                    </div>
                                </div>

                                <div className="column is-12">
                                    <div className="field">
                                        <label className="label">Mô tả học vấn</label>
                                        <textarea
                                            class="textarea is-info"
                                            placeholder="Mô tả học vấn"
                                            disabled={true}
                                            value={teacher.id_academic.academic_description}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <strong className='is-size-5 mt-3 mb-3'>Thông tin chứng chỉ </strong>
                            <div className="column is-12">
                                <div className="field" style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: "2rem",
                                    marginLeft: "-.75rem"
                                }}>
                                    <label className="label" style={{ marginBottom: "0" }}>Xác thực chứng chỉ: </label>
                                    <div className="control"
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: ".25rem"
                                        }}>
                                        <label className="radio" style={{
                                            display: "flex", gap: "1rem"
                                        }}>
                                            <input
                                                type="radio"
                                                name="degree_status"
                                                id="degree_status"
                                                // checked={checkedDegreeStatus}
                                                defaultChecked={checked2? true : false}
                                                value={true}
                                                onChange={(e) => handleChangeDegreeStatus(e.target.value)}
                                            />
                                            <VerifyStatusButton
                                                name="Đã xác minh"
                                                id="degree_status"
                                                color="white"
                                                backgroundColor="#00d1b2" />
                                        </label>
                                        <label className="radio ml-6" style={{
                                            display: "flex", gap: "1rem"
                                        }}>
                                            <input type="radio"
                                                name="degree_status"
                                                defaultChecked={checked2? false : true}
                                                value={false}
                                                onChange={(e) => handleChangeDegreeStatus(e.target.value)}
                                            />
                                            <VerifyStatusButton
                                                name="Đang xác minh"
                                                color="black"
                                                backgroundColor="#ffe08a" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-multiline">
                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label" >Tên chứng chỉ </label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Tên chứng chỉ "
                                            disabled={true}
                                            value={teacher.id_degree.degree_name}
                                        />
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label" >Thời gian học </label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Thời gian học"
                                            disabled={true}
                                            value={teacher.id_degree.degree_period} />
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <label className="label" id="level"  >Cấp độ </label>
                                    <input className="input"
                                        type="text"
                                        placeholder="Cấp độ"
                                        disabled={true}
                                        value={teacher.id_degree.degree_level} />

                                </div>

                                <div className="column is-6">
                                    <div className="field ">
                                        <label className="label" >Minh chứng chứng chỉ</label>
                                        {/* <input
                                    className="input"
                                    type="text"
                                    placeholder="Minh chứng chứng chỉ"
                                    
                                    value={teacher.id_degree.degree_evidence} /> */}
                                        <img src={teacher.id_degree.degree_evidence} />
                                    </div>

                                </div>
                                <div className="column is-12">
                                    <div className="field">
                                        <label className="label">Mô tả chứng chỉ</label>
                                        <textarea
                                            class="textarea is-info"
                                            placeholder="Mô tả chứng chỉ"
                                            disabled={true}
                                            value={teacher.id_degree.degree_description}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" column is-3 is-centered  ">
                            <div className=" mt-2 mb-2  content-right">
                                <img className=" mt-2 mb-2" src={teacher.personal_image} />
                                <button
                                    type='button ml-6 mb-4'
                                    className='button is-primary'
                                    id="choose-image_button"
                                    style={{ display: "block", margin: "auto" }}
                                >
                                    <p id='upload-teacher-image_p' style={{ marginBottom: "0" }}>Chọn ảnh</p>
                                    <input className="file-input"
                                        type="file"
                                        multiple accept="image/*"
                                        name=""
                                        onChange={(e) => setImages(e.target.files)}
                                    />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="group-buttons">

                        <div className="button-left">
                            <button className="button is-danger has-text-white" >
                                < AiOutlineDelete onClick={() => handleDelete(teacher.id)}
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
                            <button className="button is-primary" onClick={() => handleSave()}>
                                <AiOutlineCheck style={{
                                    cursor: 'pointer',
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    marginRight: ".25rem",

                                }} /> Lưu
                            </button>
                            <button className="button is-warning" onClick={handleBack}>
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
            </div>
        )
    }

}

export default EditTeacherForm

{/* <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Mật khẩu </label>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Mật khẩu"
                                            name="password"
                                            id='password'
                                            value={teacher.account_id.password}
                                        />
                                    </div>
                                </div> */}