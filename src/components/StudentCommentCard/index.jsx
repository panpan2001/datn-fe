
import moment from 'moment'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

import '../../assets/styles/StudentCommentCard.css'

function StudentCommentCard({ data }) {
    return (
        <div class="column card" style={{ backgroundColor: "rgb(224, 251, 254)", border: "1px solid rgb(126, 222, 231)" }}>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        {/* <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure> */}
                    </div>
                    <div class="media-content">
                        <p class="title is-6">{data.id_student.account_id.full_name}</p>
                        {/* <time datetime={moment(data.createdAt).format('DD/MM/YYYY')}>{moment(data.createdAt).format('DD/MM/YYYY')}</time> */}

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: ".5rem"
                            }}>
                            <BsFillStarFill
                                className='star_icon'
                                style={{
                                    fill: "yellow",
                                    marginBottom: ".25rem",
                                    width: "1rem",
                                    height: "1rem"
                                }} />
                            <strong >{data.rating_avg_teacher}/5</strong>
                            {data.isDemo == true ?
                                <button className="button is-warning is-light is-small">Học thử</button> :
                                <button className="button is-primary is-light is-small">Học chính thức</button>
                            }
                        </div>

                    </div>
                </div>

                <div class="content student-comment_card-content" style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "15rem"
                }}>
                    <p style={{
                        width: "100%",
                        wordWrap: "break-word"
                    }}> {data.comment}</p>

                    {/* <br /> */}
                    {/* <time datetime={moment(data.createdAt).format('DD/MM/YYYY')}>{moment(data.createdAt).format('DD/MM/YYYY')}</time> */}
                </div>
            </div>
        </div>
    )
}

export default StudentCommentCard