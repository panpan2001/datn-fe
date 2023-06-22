import React from 'react'
import '../../assets/styles/TeacherShortInfoLeft.css'
import { AiOutlineStar } from 'react-icons/ai'
import { BsCurrencyDollar, BsFillCheckCircleFill, BsFillStarFill } from 'react-icons/bs'
import RegisterButton from '../GroupButton/RegisterButton'
import ImageItem from '../ImageItem'
import { Link } from 'react-router-dom'

function TeacherShortInfoLeft({ studentRating,data,color , setTeacherRating }) {
    // console.log({studentRating})
if(  studentRating !== null ){
    let  avg= 0

    const rating_avg_teacher=studentRating?.map(i=>i.rating_avg_teacher)
    console.log({rating_avg_teacher})
    if (rating_avg_teacher.length>0)  avg=(rating_avg_teacher?.reduce((a, b) => a + b, 0)/rating_avg_teacher.length).toFixed(2) 
    else  avg=0


// setTeacherRating(a=>[...a,avg])
// console.log("TeacherShortInfoLeft",data.account_id.full_name,{avg})
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
                            {/* <BsFillCheckCircleFill
                            className="teacher-short-nffo-left_icon-verified "/>
                               */}
                        </div>
                        
                        <div className="columns ml-1  subtitle teacher-short-info-left_sub-title">
                        
                            <div className="sub-title-left mt-4">
                                <BsFillStarFill className='sub-title-right_icon' style={{ fill: "yellow" }} />
                                <p>{avg }/5  ({studentRating && studentRating.length ||0} đánh giá)</p>

                            </div>
                            <div className="sub-title-left">
                              
                            </div>
                        </div>
                        <p><strong>Chuyên ngành:</strong>{data.id_academic.academic_major}  </p>
                        <p><strong>Trường:</strong>{data.id_academic.university_name}</p>
                                <p><strong>Chứng chỉ: </strong>{data.id_degree.degree_level}</p>
                        <p id='teacher-short-info-left_p'
                        >
                           <strong>Giới thiệu:</strong> {data.personal_description}
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