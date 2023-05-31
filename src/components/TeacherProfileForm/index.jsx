import React, { Suspense, useEffect } from 'react'
import getTeacherByAccountId from '../../redux/actions/Teacher/GetTeacherByAccountId'
import { useDispatch, useSelector } from 'react-redux'
import '../../assets/styles/TeacherProfileForm.css'
function TeacherProfileForm() {
    // console.log(user._id)
    const user = useSelector((state) => state.login.login?.currentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("hehe i vo dc ne ")
        getTeacherByAccountId(user?._id, dispatch)
    }, [user?._id])
    const teacher = useSelector(state => state.getTeacherByAccountId.teacher?.currentTeacher)

    console.log("current teacher:", teacher)
    const valueGender = ['nam', 'nữ', 'khác']
    return (
        <Suspense>
            <form className='teacher-profile-form_container container-fluid mr-6'>
                <label className="label login-name_label is-size-3">
                    <strong className='is-size-4'>Hồ sơ cá nhân của {user.full_name || ""} </strong>
                </label>

                <strong className='is-size-5 mt-3 mb-3'>Thông tin cá nhân  </strong>

                <div className="columns is-multiline">
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">Họ và tên</label>
                            <input
                                className="input"
                                type="text"
                                placeholder="Họ và tên"
                                name="full_name"
                                id="full_name"
                                disabled='true'
                                value={user.full_name}
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
                                disabled='true'
                                value={user.date_of_birth.split('T')[0]}
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
                                        checked={valueGender[0] == user.gender.split(" ").join("")}
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
                                        checked={valueGender[1] == user.gender.split(" ").join("")}
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
                                        checked={valueGender[2] == user.gender.split(" ").join("")}
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
                                disabled='true'
                                value={user.address}
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
                                disabled='true'
                                value={user.email}
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
                                disabled='true'
                                value={user.phone_number}
                            />

                        </div>
                    </div>

                    {/* <div className="column is-6">
                    <div className="field">
                        <label className="label">Mật khẩu </label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Mật khẩu"
                            name="password"
                            id='password'
                           />
                    </div>
                </div> */}
                </div>
                <hr />
                {teacher ? <>
                    <strong className='is-size-5 mt-3 mb-3'>Thông tin học vấn </strong>
                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <div className="field">
                                <label className="label" >Tên trường </label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Tên trường"
                                    disabled='true'
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
                                    disabled='true'
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
                                    disabled='true'
                                    value={teacher.id_academic.academic_period}
                                />
                            </div>
                        </div>

                        <div className="column is-6">
                            <div className="field ">
                                <label className="label" >Minh chứng học vấn </label>
                                <input className="input"
                                    type="text"
                                    placeholder="Minh chứng học vấn"
                                    disabled='true'
                                    value={teacher.id_academic.academic_evidence}
                                />

                            </div>
                        </div>

                        <div className="column is-12">
                            <div className="field">
                                <label className="label">Mô tả học vấn</label>
                                <textarea
                                    class="textarea is-info"
                                    placeholder="Mô tả học vấn"
                                    disabled='true'
                                    value={teacher.id_academic.academic_description}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <strong className='is-size-5 mt-3 mb-3'>Thông tin chứng chỉ </strong>
                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <div className="field">
                                <label className="label" >Tên chứng chỉ </label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Tên chứng chỉ "
                                    disabled='true'
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
                                    disabled='true'
                                    value={teacher.id_degree.degree_period} />
                            </div>
                        </div>

                        <div className="column is-6">
                            <label className="label" id="level"  >Cấp độ </label>
                            <input className="input"
                                type="text"
                                placeholder="Cấp độ"
                                disabled='true'
                                value={teacher.id_degree.degree_level} />

                        </div>

                        <div className="column is-6">
                            <div className="field ">
                                <label className="label" >Minh chứng chứng chỉ</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Minh chứng chứng chỉ"
                                    disabled='true'
                                    value={teacher.id_degree.degree_evidence} />

                            </div>

                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label">Mô tả chứng chỉ</label>
                                <textarea
                                    class="textarea is-info"
                                    placeholder="Mô tả chứng chỉ"
                                    disabled='true'
                                    value={teacher.id_degree.degree_description}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </> : ""}


            </form >
        </Suspense>

    )
}

export default TeacherProfileForm