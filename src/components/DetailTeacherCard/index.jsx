import React from 'react'
import '../../assets/styles/TeacherShortInfoRight.css'
import { Link } from 'react-router-dom'
import { BsCurrencyDollar, BsFillStarFill } from 'react-icons/bs'
import RegisterButton from '../GroupButton/RegisterButton'


function DetailTeacherCard({ data }) {
    return (
        <div className="card "
            style={{
                position: "sticky",
                top: "6rem",
                boxShadow: "0 0 8px 0 #a0a6a7"
            }}
        >
            <div className="card-image">
                <figure className="image "
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: ".5rem",

                    }}
                >
                    <img src={data.personal_image} alt="Placeholder image"
                        style={{
                            width: "8rem",
                            height: "8rem",
                            clipPath: "circle(50%)"
                        }}
                    />
                </figure>
            </div>
            <div className="card-content mt-0" >
                <div className="media-content "
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <strong className="is-size-6  ">{data.account_id.full_name}</strong>
                    <p className="is-6 mb-4">{data.account_id.email}</p>
                    <div className="columns teacher-short-info-left_sub-title ">
                        <div className="sub-title-left">
                            <BsFillStarFill className='sub-title-right_icon'
                                style={{
                                    fill: "yellow",

                                }} />
                            <p className='is-size-6 mt-1'>5</p>

                        </div>
                        <div className="sub-title-right">
                            <BsCurrencyDollar className='sub-title-right_icon'
                                style={{
                                    fill: "#00c4a7",
                                    marginTop: ".25rem"
                                }} />
                            <p className='is-size-6 mt-1'>5-15/ 1.5 tiếng</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="buttons is-centered ">
                <div className="buttons is-centered register_buttons mt-3 mb-3"
                    style={{
                        display: 'flex',
                        flexDirection: 'row ',
                    }}
                >
                    {/* <button className="button is-link">Đăng kí </button> */}
                    <button className="button is-info">Liên hệ  </button>
                    <button className="button is-danger">Đánh giá  </button>
                </div>
            </div>
        </div>
    )
}

export default DetailTeacherCard 