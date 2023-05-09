import React from 'react'

function TeacherShortInfoLeft() {
    return (
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image ">
                            <img src={require('../../assets/images/1.jpg')} alt="Placeholder image"
                                style={{
                                    width: "12rem",
                                    height: "12rem",
                                    clipPath: "circle(50% )",
                                    // border: "1px solid #000"
                                }}
                            />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                        <p>
                            From Namibia
                            Living in Amagasaki, Japan (03:30 UTC+09:00)
                            Certified & Skilled English Teacher in Japan ☆✧ Adapting to students' diverse learning styles.
                            About Me
                            italki teacher since Mar 31, 2022
                            Reading is like breathing while writing is like exhaling.


                        </p>
                    </div>
                    <div class="buttons is-centered"
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            gap:'1rem'
                        }}
                    >
                        <button class="button is-primary">Book trial </button>
                        <button class="button is-link">Contact me </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TeacherShortInfoLeft