import React from 'react'
import '../../assets/styles/DetailClassModalForm.css'
function DetailClassModalForm({ show, setShow }) {

    return (
        <div class="modal " style={{ display: `${show}` }}>
            <div class="modal-background"></div>
            <div class="modal-content is-centered"
                style={{
                    margin: "2rem auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    backgroundColor:"white"
                }}
            >
                <p class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
                </p>
                <div className="buttons is-centered"
                id='detail-class_modal'
                style={{gap:'2rem'}}
                >
                    <button className="button is-primary">Học thử </button>
                    <button className="button is-info">Đăng kí  </button>
                    <button className="button is-danger">Thoát  </button>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={() => setShow("none")}></button>
        </div>
    )
}

export default DetailClassModalForm