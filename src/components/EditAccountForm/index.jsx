import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getAccountById from '../../redux/actions/Account/GetAccountById'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { toast } from 'react-toastify'
import updateAccountStatus from '../../redux/actions/Account/UpdateAccountStatus'
import createAxiosJWT from '../../utils/createInstance'
import { getAccountByIdSuccess } from '../../redux/slices/Account/getAccountByIdSlice'

function EditAccountForm() {
    const { idAccount } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        getAccountById(dispatch, idAccount)
    }, [])
    const accounts = useSelector((state) => state.getAccountById?.account?.currentUser)
    // console.log({ accounts })
    const user = useSelector((state) => state.login.login?.currentUser)
    const accessToken = user?.accessToken
    const axiosJWT = createAxiosJWT(dispatch, user, getAccountByIdSuccess)
    const handleChangeAccountStatus = (item) => {
        if (item.role_name == 'admin') {
          toast.warning("Không thể khóa tài khoản của admin", {
            position: "top-right",
          })
        }
        else {
          // dispatch,id,axiosJWT,accessToken,success,account_id
          updateAccountStatus(dispatch, item._id, item.is_deleted, axiosJWT, accessToken, getAccountByIdSuccess, user?._id)
          navigate('/admin/account')
        }
    
      }
    return (
        <div>
            <strong className='is-size-4'>Thông tin tài khoản</strong>
            <div className="edit-account-content columns is-multiline" style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "left",
                padding: "1rem"
            }}>
                <div className="column is-6 ">
                    <label className="label">Họ và tên</label>
                    <input
                        className="input"
                        type="text"
                        name="full_name"
                        id="full_name"
                        readOnly={true}
                        value={accounts && accounts.full_name}
                    />
                </div>
                <div className="column is-6 ">
                    <label className="label">Giới tính</label>
                    <input
                        className="input"
                        type="text"
                        name="gender"
                        id="gender"
                        value={accounts && accounts.gender}
                    />
                </div>
                <div className="column is-6 ">
                    <label className="label">Ngày sinh</label>
                    <input
                        className="input"
                        type="text"
                        name="date_of_birth"
                        id="date_of_birth"
                        value={accounts && moment(accounts.date_of_birth).format('DD/MM/YYYY')}
                    />
                </div>
                <div className="column is-6 ">
                    <label className="label">Email</label>
                    <input
                        className="input"
                        type="text"
                        name="email"
                        id="email"
                        value={accounts && accounts.email}
                    />
                </div>
                <div className="column is-6 ">
                    <label className="label">Số điện thoại</label>
                    <input
                        className="input"
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        value={accounts && accounts.phone_number}
                    />
                </div>
                <div className="column is-6 ">
                    <label className="label">Địa chỉ</label>
                    <input
                        className="input"
                        type="text"
                        name="address"
                        id="address"
                        value={accounts && accounts.address}
                    />
                </div>
                <div className="column is-6 ">
                    <label className="label">Trạng thái tài khoản</label>
                    {accounts && accounts.is_deleted == true ?
                    <button className='button is-danger is-light'>Bị khóa</button>:
                    <button className='button is-primary is-light'>Hoạt động</button>}
                </div>

            </div>
            <div className="edit-account_buttons"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "left",
                    padding: "1rem",
                    justifyContent: "space-between",
                    alignContent: "center",
                }}>
                <div className="button-left"
                 style={{ display: "flex", 
                 flexDirection: "row",
                 alignItems: "center" }}>
                    {accounts && accounts.is_deleted == true ?
                <button className='button is-info is-light' type='button'
                onClick={() => {
                   handleChangeAccountStatus(accounts)
                 }}
               >Mở khóa tài khoản</button>:    
               <button className='button is-warning' type='button'
                     onClick={() => {
                        handleChangeAccountStatus(accounts)
                      }}
                    >Khóa tài khoản</button>
                }    
                </div>
                <div className="button-right" style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "left",
                    padding: "1rem",
                    justifyContent: "flex-end",
                    alignContent: "center",
                }}>
                    <button className='button is-primary' type='button'>Lưu</button>
                    <button className='button is-danger ml-3'
                        type='button'
                        onClick={() => { navigate('/admin/account') }}>Hủy</button>
                </div>

            </div>
        </div>
    )
}

export default EditAccountForm