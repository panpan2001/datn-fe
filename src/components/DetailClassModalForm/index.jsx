import React from 'react'
import '../../assets/styles/DetailClassModalForm.css'
function DetailClassModalForm({ data, show, setShow }) {

    return (
        <div class="modal " style={{
            display: `${show}`,
        }}>
            <div class="modal-background"></div>

            <div class="modal-content is-centered"
                style={{
                    margin: "1rem auto auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    backgroundColor: "white",
                    minWidth: "80vw",
                    minHeight: "50vh",
                    padding: "1rem",
                }}
            >
                <header class="modal-card-head">
                    <p class="modal-card-title">Chi tiết lớp học</p>
                    <button class="modal-close is-large" aria-label="close" onClick={() => setShow("none")}></button>

                </header>
                <img
                    src={data.image} alt=""
                    style={{
                        width: '30%',
                        margin: 'auto',
                        display: 'block'
                    }}
                />
                <table class="table is-fullwidth is-hoverable"
                style={{marginBottom:"0"}}>
                    <thead>

                        <tr>
                            <th>Tên lớp học</th>
                            <th>Cấp độ</th>
                            <th>Số lượng (học sinh)</th>
                            <th>Thời lượng (tiếng)</th>
                            <th>Thời gian học(tháng)</th>
                            <th>Lịch học</th>
                            <th>Giá tiền(VDN/ buổi)</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "left" }}>

                        <tr key={data._id}>

                            <td>{data.name}</td>
                            <td>{data.category_id.level}</td>
                            <td>{data.number_of_student} </td>
                            <td>{data.time_per_lesson} </td>
                            <td>{data.learning_period} </td>
                            <td>{data.schedule} </td>
                            <td>{data.cost} </td>

                        </tr>

                    </tbody>
                </table>
                <p><strong>Mô tả: </strong>{data.description}</p>
                <div className="buttons is-centered"
                    id='detail-class_modal'
                    style={{ gap: '2rem' }}
                >
                    <button className="button is-primary">Học thử </button>
                    <button className="button is-info">Đăng kí  </button>
                    <button className="button is-danger" onClick={() => setShow("none")}>Thoát  </button>
                </div>
            </div>
        </div>
    )
}

export default DetailClassModalForm