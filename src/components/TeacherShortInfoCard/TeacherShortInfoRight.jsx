import React from 'react'

function TeacherShortInfoRight() {
  return (
    <div class="card"
    // style={{
    //     backgroundColor: "#c2f8ff",
    // }}
    >
                            <div class="card-image">
                                <figure class="image ">
                                    <img src={require('../../assets/images/2.jpg')} alt="Placeholder image" 
                                    style={{
                                        width: "100%",
                                        height: "12rem"
                                    }}
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
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
                                    <div class="buttons is-centered">
                                      
                                        <button class="button is-link">more info </button>
                                    </div>
                            </div>
                        </div>
  )
}

export default TeacherShortInfoRight