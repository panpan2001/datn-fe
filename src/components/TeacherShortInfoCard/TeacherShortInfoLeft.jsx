import React from 'react'
import '../../assets/styles/TeacherShortInfoLeft.css'
import { AiOutlineStar } from 'react-icons/ai'
import { BsCurrencyDollar, BsFillCheckCircleFill, BsFillStarFill } from 'react-icons/bs'
import RegisterButton from '../GroupButton/RegisterButton'
import ImageItem from '../ImageItem'
import { Link } from 'react-router-dom'

function TeacherShortInfoLeft({ data,color }) {
    // console.log("elo: ",data.personal_description.split("\n"))
    return (
        <div className="card teacher-short-info-left_card"
            style={{
                // backgroundColor: "#c2f8ff",
                backgroundColor: `${color}`
            }}
        >
            <div className="card-content teacher-short-info-left_card-content">
                <div className="media teacher-short-info-left_media">
                    <div className="media-left teacher-short-info-left_media-left">
                        <ImageItem image={data.personal_image} />
                    </div>
                    <div className="media-content teacher-short-info-left_media-content">
                        <div className="title is-4 columns ">
                            <div className="column ">{data.account_id.full_name}</div>
                            {/* <div className="column"> */}
                            <BsFillCheckCircleFill
                            className="teacher-short-nffo-left_icon-verified "/>
                              
                        </div>
                        <div className="columns ml-1  subtitle teacher-short-info-left_sub-title">
                            <div className="sub-title-left">
                                <BsFillStarFill className='sub-title-right_icon' style={{ fill: "yellow" }} />
                                <p>5</p>

                            </div>
                            <div className="sub-title-right">
                                <BsCurrencyDollar className='sub-title-right_icon' style={{ fill: "#00c4a7" }} />
                                <p>5-15/ 1.5 tiếng</p>
                            </div>
                        </div>
                        <p id='teacher-short-info-left_p'
                        >
                            {data.personal_description}
                        </p>
                        
                        <Link to={`/detailTeacher/${data._id}`}>
                        <button className="button mt-4 "
                            style={{
                                backgroundColor: "#5ee0edb5",
                                width: "150px",
                                height: "32px",
                                borderRadius: "30px",
                                color: "rgb(37 125 219)"
                            }}>Xem chi tiết </button>
                        </Link>
                        
                    </div>
                    {/* <div className="media-right teacher-short-info-left_media-right">
                    <RegisterButton id_teacher={data._id} />
                    </div> */}

                </div>


            </div>
        </div>
    )
}

export default TeacherShortInfoLeft

  {/* <button className="button "
                                    style={{
                                        backgroundColor: "#00c4a7",
                                        width: "140px",
                                        height: "30px",
                                        borderRadius: "30px",
                                        color: "white "
                                    }}>Đã xác minh </button>
                                <button className="button " 
                             style={{backgroundColor: "yellow",
                            width:"140px",
                            height:"30px",
                            borderRadius:"30px",
                            color:"black "
                            }}>Đã xác minh </button> */}
                            {/* </div> */}