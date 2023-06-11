import '../../assets/styles/StudentProfileForm.css'
import { Link } from 'react-router-dom'
import createAxiosJWT from '../../utils/createInstance'
import { getStudentByAccountIdStart, getStudentByAccountIdSuccess } from '../../redux/slices/Student/getStudentByAccountIdSlice'
import getStudentByAccountId from '../../redux/actions/Student/GetStudentByAccountId'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import getAccountById from '../../redux/actions/Account/GetAccountById'

const StudentProfileForm = () => {
    const user = useSelector((state) => state.login.login?.currentUser)
    console.log("student account  id:", user?._id)
    const dispatch = useDispatch()
    // const accessToken = user?.accessToken
    const account_id = user?._id
    // let axiosJWT = createAxiosJWT(dispatch, user, getStudentByAccountIdSuccess)
    
    useEffect(() => {
        // console.log("h get student by account id ne :")
      user.role_name==="student" ? 
            getStudentByAccountId(dispatch, account_id) :
            getAccountById(dispatch, account_id)
    }, [account_id])

    const valueGender = ['nam', 'nữ', 'khác']
    const studentPersonalInfo = useSelector((state) => state.getStudentByAccountId.students?.infoStudent)
    console.log("studentPersonalInfo:", studentPersonalInfo)

    return (
        <div className='student-profile-form_container container-fluid mr-6'>

            {(studentPersonalInfo || user) && <>
                <label className="label login-name_label is-size-3">
                    <strong className='is-size-4'>Hồ sơ cá nhân của bạn { user.full_name} </strong>
                </label>
                <div className="columns is-multiline">
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">Họ và tên</label>
                            <input
                                className="input"
                                type="text"
                                placeholder="Họ và tên"
                                disabled='true'
                                value={ user.full_name}
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
                                disabled='true'
                                value={ user.date_of_birth.split('T')[0]}
                            />
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="field gender-signup_form">
                            <label className="label">Giới tính</label>
                            <div className="control">
                                <div id="gender-1">
                                    <input type="radio" name="rsvp"
                                        value={valueGender[0]}
                                        id='nam'
                                        disabled={true}
                                        checked={ valueGender[0] == user.gender.split(" ").join("")
                                        }
                                    />
                                    <label className="radio ">Nam</label>
                                </div>
                                <div id="gender-2">
                                    <input type="radio" name="rsvp"
                                        value={valueGender[1]}
                                        id='nữ'
                                        disabled={true}
                                        checked={valueGender[1] == user.gender.split(" ").join("")}

                                    />
                                    <label className="radio ">Nữ</label>
                                </div>
                                <div id="gender-3">
                                    <input type="radio" name="rsvp"
                                        value={valueGender[2]}
                                        disabled={true}
                                        id='khác'
                                        checked={valueGender[2] == user.gender.split(" ").join("")}
                                    />
                                    <label className="radio ">Khác</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">Địa chỉ</label>
                            <input className="input"
                                type="text"
                                placeholder="Địa chỉ"
                                disabled='true'
                                value={ user.address}
                            />
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">Email</label>
                            <input className="input"
                                type="email"
                                placeholder="Email"
                                disabled='true'
                                value={ user.email}
                            />
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">Số điện thoại</label>
                            <input className="input"
                                type="text"
                                placeholder="Số điện thoại"
                                disabled='true'
                                value={ user.phone_number} />
                        </div>
                    </div>
                    {/* <div className="column is-6">
                                <div className="field">
                                    <label className="label">Mật khẩu </label>
                                    <input className="input" 
                                    type="text" 
                                    placeholder="Mật khẩu"
                                    disabled='true'
                                     value={studentPersonalInfo.account_id.password}

                                     />
                                </div>
                            </div> */}
                    {studentPersonalInfo ?
                        <>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Họ tên phụ huynh </label>
                                    <input className="input"
                                        type="text"
                                        placeholder="Họ tên phụ huynh"
                                        disabled='true'
                                        value={studentPersonalInfo.parent_name}
                                    />
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Số điện thoại phụ huynh </label>
                                    <input className="input"
                                        type="text"
                                        placeholder="Số điện thoại phụ huynh"
                                        disabled='true'
                                        value={studentPersonalInfo.parent_phone_number}
                                    />
                                </div>
                            </div>
                        </> : ""}

                </div>
            </>}


        </div  >
    )
}

export default StudentProfileForm

{/* <div className="field is-grouped is-grouped-centered" id='signup_button'>
                            <button className="button is-link" type="submit">Chỉnh sửa</button>
                        </div> */}
