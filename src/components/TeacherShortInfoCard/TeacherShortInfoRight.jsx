import React from 'react'
import '../../assets/styles/TeacherShortInfoRight.css'
import { Link } from 'react-router-dom'
function TeacherShortInfoRight({data}) {
  return (
    <div className="card">
                            <div className="card-image">
                                <figure className="image ">
                                    <img src={data.personal_image} alt="Placeholder image" 
                                    style={{
                                        width: "100%",
                                        height: "12rem"
                                    }}
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                            <div className="media-content ">
                                        <p className="title is-4">{data.account_id.full_name}</p>
                                        <p className="subtitle is-6">{data.account_id.email}</p>
                                        <p className='teacher-short-info-right_media-content'>
                                            {data.personal_description}
                                        </p>
                                    </div>
                                    <div className="buttons is-centered mt-3">
                                      <Link to={`/teacher/${data._id}`}>
                                      <button className="button is-link">more info </button>

                                      </Link>
                                    </div>
                            </div>
                        </div>
  )
}

export default TeacherShortInfoRight