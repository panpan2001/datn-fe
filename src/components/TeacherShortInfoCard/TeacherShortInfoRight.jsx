import React from 'react'
import '../../assets/styles/TeacherShortInfoRight.css'
import { Link } from 'react-router-dom'
import { BsCurrencyDollar, BsFillStarFill } from 'react-icons/bs'
function TeacherShortInfoRight({ studentRating, data,color }) {
  console.log({studentRating})
  if(studentRating === null) return null
  const rating_avg_teacher=studentRating.map(i=>i.rating_avg_teacher)
  let  avg= (rating_avg_teacher.reduce((a, b) => a + b, 0)/rating_avg_teacher.length).toFixed(2) 
  // console.log({avg}, )
  if(avg=="NaN") avg=0
  return (
    
    <div className="card teacher-short-info-right_card" style={{backgroundColor:`${color}`}}>
      {data &&
      <>
      <div className="card-image">
        <figure className="image "
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            
          }}
        >
          <img src={data.personal_image} alt="Placeholder image"
            style={{
              width: "10rem",
              height: "10rem",
              clipPath:"circle(50%)"
            }}
          />
        </figure>
      </div>
      <div className="card-content" style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div className="media-content ">
          <p className="title is-4">{data.account_id.full_name}</p>
          <p className="subtitle is-6">{data.account_id.email}</p>
          <div className="  subtitle teacher-short-info-left_sub-title" style={{
            // paddingLeft:"25%",
            marginBottom:".5rem"
}}>
            <div className="sub-title-left"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
            >
              <BsFillStarFill className='sub-title-right_icon'
               style={{ fill: "yellow",
              
               }} />
              <p className='is-size-5 '>{avg }/5</p>

            </div>
            {/* <div className="sub-title-right">
              <BsCurrencyDollar className='sub-title-right_icon' 
              style={{ fill: "#00c4a7",
            
              }} />
              <p className='is-size-6 mt-1'>5-15/ 1.5 tiếng</p>
            </div> */}
          </div>
        </div>
        <div className="buttons is-centered mt-3">
          <Link to={`/detailTeacher/${data._id}`}>
            <button className="button is-link">Xem chi tiết </button>
          </Link>
        </div>
      </div>
      </>
       }
      
      
    </div>
  )
}

export default TeacherShortInfoRight