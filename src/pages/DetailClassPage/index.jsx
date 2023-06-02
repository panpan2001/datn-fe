import React, { useEffect } from 'react'
import '../../assets/styles/DetailClassModalForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { CourseApi } from '../../utils/BaseUrl'
import getCoursebyId from '../../redux/actions/Course/GetCoursebyId'
function DetailClassPage() {
    const { id } = useParams()
    const dispatch= useDispatch()
    const navigate= useNavigate()
    console.log(id)
    useEffect(() => {
        getCoursebyId(id,dispatch)
    }, [])
const data= useSelector((state)=>state.getCourseById.course?.currentCourse)
    return (
        <div class="container " style={{
            marginBottom: "2rem",
            marginTop:"1rem",
            backgroundColor: "white",
        }}>

            {data  && <div class=" is-centered"
              
                style={{padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            }}
            >
                <header class="modal-card-head">
                    <p class="modal-card-title">Chi tiết lớp học</p>
                    <button class="modal-close is-large" aria-label="close" ></button>

                </header>
                <img
                    src={data.image} alt=""
                    style={{
                        width: '50%',
                        margin: 'auto',
                        display: 'block'
                    }}
                />
                <table class="table is-fullwidth is-hoverable"
                    style={{ marginBottom: "0" }}>
                    <thead>

                        <tr>
                            <th>Tên lớp học</th>
                            <th>Loại</th>
                            <th>Cấp độ</th>
                            <th>Số lượng<br/> (học sinh)</th>
                            <th>Thời lượng <br/> (tiếng)</th>
                            <th>Thời gian học<br/>(tháng)</th>
                            <th>Lịch học</th>
                            <th>Giá tiền<br/>(VDN/ buổi)</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "left" }}>

                        <tr key={data._id}>

                            <td>{data.name}</td>
                            <td>{data.category_id.type}</td>
                            <td>{data.category_id.level}</td>
                            <td>{data.number_of_student} </td>
                            <td>{data.time_per_lesson} </td>
                            <td>{data.learning_period} </td>
                            <td>{data.schedule} </td>
                            <td>{data.cost} </td>

                        </tr>

                    </tbody>
                </table>
                <p
                style={{ textAlign: "left" }}
                ><strong>Mô tả: </strong>{data.description}</p>
                <div className="buttons is-centered"
                    id='detail-class_modal'
                    style={{ gap: '2rem' }}
                >
                    {/* {isLoggin==false ||user.role_name||  user.role_name=='student' &&  */}
                    <>
                        <button className="button is-primary">Học thử </button>
                        <button className="button is-info">Đăng kí  </button>
                        <button className="button is-danger" onClick={()=>navigate(-1)}>Thoát  </button>
                    </>
                    {/* } */}

                </div>
            </div>
 }
            

        </div>
    )
}

export default DetailClassPage