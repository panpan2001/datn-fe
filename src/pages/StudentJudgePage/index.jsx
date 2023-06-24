
import React, { useEffect, useState } from 'react'
import '../../assets/styles/StudentJudgePage.css'
import { useDispatch, useSelector } from 'react-redux';
import getCourseStudentByStudentId from '../../redux/actions/CourseStudent/GetCourseStudentByStudentId';
import getDemoCourseById from '../../redux/actions/DemoCourse/GetDemoCourseById';
import { getDemoCourseByStudentIdSuccess } from '../../redux/slices/DemoCourseStudent/getDemoCourseByStudentId';
import { getCourseStudentByStudentIdSuccess } from '../../redux/slices/CourseStudent/getCourseStudentByStudentId';
import createAxiosJWT from '../../utils/createInstance';
import getDemoCourseByStudentId from '../../redux/actions/DemoCourseStudent/GetDemoCourseStudentByStudentId';
import { Link, Outlet } from 'react-router-dom';
import DetailStudentJudgepage from '../DetailStudenJudgePage';
import getStudentRatingByStudentId from '../../redux/actions/StudentRating/GetStudentRatingByIdStudent';
import { getStudentRatingByStudentIdSuccess } from '../../redux/slices/StudentRating/getStudentRatingByStudentIdSlice';
import moment from 'moment';
import { AiOutlineCheckCircle } from 'react-icons/ai';
function StudentJudgePage() {

    const dispatch = useDispatch()
    const student = useSelector((state) => state.getStudentByAccountId.students?.infoStudent)
    const user = useSelector((state) => state.login.login?.currentUser)
    // console.log({user} )
    const accessToken = user?.accessToken
    const axiosJWT = createAxiosJWT(dispatch, user, getStudentRatingByStudentIdSuccess)
    const axiosJWTDemoCourse = createAxiosJWT(dispatch, user, getDemoCourseByStudentIdSuccess)
    const axiosJWTCourse = createAxiosJWT(dispatch, user, getCourseStudentByStudentIdSuccess)
    const account_id = user?._id
    useEffect(() => {
        getDemoCourseByStudentId(student._id, dispatch, accessToken, axiosJWTDemoCourse)
        getCourseStudentByStudentId(student._id, dispatch, accessToken, axiosJWTCourse)
        getStudentRatingByStudentId(student._id, account_id, dispatch, axiosJWT, accessToken)
    }, [])
    const demoClasses = useSelector((state) => state.getDemoCourseByStudentId.demoCourse?.currentDemoCourse)
    const officiaClasses = useSelector((state) => state.getCourseStudentByStudentId.officialCourses?.currentCourse)
    console.log({ demoClasses }, { officiaClasses })
    const studentRating = useSelector((state) => state.getStudentRatingByStudentId?.studentRating?.currentRating)
    console.log({ studentRating })
    if (!demoClasses && !officiaClasses) return null
    else {
        // let teacherofficialClasses = null
        // let teacherdemoClasses = null
        // if (demoClasses) teacherdemoClasses = demoClasses?.map((item) => item.id_demo_course.id_course.id_teacher)
        // else teacherdemoClasses = teacherdemoClasses
        // if (officiaClasses) teacherofficialClasses = officiaClasses?.map((item) => item.id_course.id_teacher)
        // else teacherofficialClasses = teacherdemoClasses
        // console.log({ teacherdemoClasses }, { teacherofficialClasses })
        // let teacher = [...teacherdemoClasses, ...teacherofficialClasses]
        // teacher = [...new Map(teacher.map(v => [JSON.stringify(v), v])).values()]
        // console.log({ teacher })

        return (
            <div className='student-judge-page_container container-fluid columns' style={{ minHeight: "60vh" }}>
                <strong className='is-size-4'>Danh sách giáo viên</strong>
                {demoClasses || officiaClasses ?
                    <div className="all-teachers_table" style={{ padding: "0 3rem 0 3rem " }}>
                        <table class="table is-fullwidth " style={{ backgroundColor: "#B2FFDA" }}>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    {/* <th></th> */}
                                    <th>Tên giáo viên</th>
                                    <th>Tên lớp học</th>
                                    <th>Loại lớp học</th>
                                    <th>Hạng mục</th>
                                    <th>Cấp độ </th>
                                    <th>Ngày đánh giá </th>
                                    <th>Đã đánh giá </th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: "left" }}>
                                <>
                                    {demoClasses && demoClasses.map((item) =>

                                        <tr key={item._id}>

                                            <td>
                                                {demoClasses.indexOf(item) + 1}
                                            </td>
                                            <td>{item.id_demo_course.id_course.id_teacher.account_id.full_name}</td>
                                            <td>{item.id_demo_course.id_course.name}</td>

                                            <td>Lớp học thử </td>
                                            <td>{item.id_demo_course.id_course.category_id.type}</td>
                                            <td>{item.id_demo_course.id_course.category_id.level}</td>
                                            {item.isJudged ?
                                                (<>
                                                    <td>
                                                    {studentRating && studentRating.length > 0 &&
                                                        studentRating
                                                        .filter(i => i.id_teacher._id == item.id_demo_course.id_course.id_teacher._id
                                                            && i.id_course._id == item.id_demo_course.id_course._id)
                                                            .filter(i => i.isDemo == true)
                                                            .map(i =>
                                                                    <p>{moment(i.createdAt).format("DD/MM/YYYY")} </p>
                                                               )
                                                    }
                                                    </td>
                                                    
                                                    <td>
                                                                        <AiOutlineCheckCircle style={{
                                                                            color: "green",
                                                                            cursor: "pointer",
                                                                            width: "1.5rem",
                                                                            height: "1rem",
                                                                        }} />
                                                                    </td>
                                                </>) :
                                                (<>
                                                    <td></td>
                                                    <td>
                                                        <Link to={`/profile/${account_id}/judgeTeacher/${item.id_demo_course.id_course._id}`}>Đánh giá </Link>

                                                    </td>
                                                </>)
                                            }
                                        </tr>

                                    )}
                                    {officiaClasses && officiaClasses.map((item) =>

                                        <tr key={item._id}>

                                            <td>
                                                {demoClasses ? (officiaClasses.indexOf(item) + 1 + demoClasses.length) : (officiaClasses.indexOf(item) + 1)}
                                            </td>
                                            <td>{item.id_course.id_teacher.account_id.full_name}</td>
                                            <td>{item.id_course.name}</td>

                                            <td>Lớp học chính thức </td>
                                            <td>{item.id_course.category_id.type}</td>
                                            <td>{item.id_course.category_id.level}</td>
                                            {item.isJudged ?
                                                (<>
                                                    <td>
                                                        {studentRating && studentRating.length > 0 &&
                                                            studentRating.filter(i => i.id_teacher._id == item.id_course.id_teacher._id
                                                                && i.id_course == item.id_course._id)
                                                                .filter(i => i.isDemo == false)
                                                                .map(i =>
                                                                    
                                                                        <p>{moment(i.createdAt).format("DD/MM/YYYY")} </p>

                                                                   )
                                                        }
                                                    </td>

                                                    <td>
                                                        <AiOutlineCheckCircle style={{
                                                            color: "green",
                                                            cursor: "pointer",
                                                            width: "1.5rem",
                                                            height: "1rem",
                                                        }} />
                                                    </td>
                                                </>) :
                                                (<>
                                                    {/* <td> Chưa đánh giá </td> */}
                                                    <td></td>
                                                    <td>
                                                        <Link to={`/profile/${account_id}/judgeTeacher/${item.id_course._id}`}>Đánh giá </Link>

                                                    </td>
                                                </>)
                                            }
                                            {/* <td>{item.isJudged? "Đã đánh giá" : "Chưa đánh giá"}</td>
                                            {studentRating &&
                                              studentRating.filter(i => i.id_teacher == item.id_course.id_teacher._id).length >0?
                                              studentRating.filter(i => i.id_teacher == item.id_course.id_teacher._id)
                                              .filter(i => i.isDemo==false)
                                              .map(i=>
                                                <>
                                                    <td>{moment(i.createdAt).format("DD/MM/YYYY")} </td>
                                                    <td>Đã đánh giá  </td>
                                                </>)
                                                :
                                                <>
                                                <td> </td>
                                                <td>
                                                    <Link to={`/profile/${account_id}/judgeTeacher/${item.id_course.id_teacher._id}`}>Đánh giá </Link>

                                                </td>
                                            </>
                                                
                                                 
                                            } */}
                                        </tr>

                                    )}

                                </>


                            </tbody>
                        </table>

                    </div>

                    : <>
                        <strong className='is-size-6'>Bạn không có giáo viên nào để đánh giá. Hãy tìm kiếm giáo viên và đăng kí học trước khi đánh giá nha!</strong>
                        <Link to='/findingTeacher'>
                            <button className='button is-primary'>Tìm kiếm giáo viên</button>

                        </Link>
                    </>
                }




                <Outlet />

            </div>
        )
    }


}

export default StudentJudgePage

// {demoClasses || officiaClasses ? 
//     <div className="all-teachers_table"style={{padding:"0 3rem 0 3rem "}}>
//     <table class="table is-fullwidth is-hoverable" style={{backgroundColor:"#B2FFDA"}}>
//         <thead>
//             <tr>
//                 <th>STT</th>
//                 <th>Tên gv</th>
//                 <th>ten lop hoc</th>
//                 <th>Loai lop hoc</th>
//                 <th>Hang muc</th>
//                 <th>Cap do</th>
//                 <th>Ngày đánh giá </th>
//                 <th>Đánh giá </th>
//             </tr>
//         </thead>
//         <tbody style={{ textAlign: "left" }}>
//             <>
//                 {demoClasses && demoClasses.map((item) =>
//                     <tr key={item._id}>

//                         <td>
//                             {demoClasses.indexOf(item) + 1}
//                         </td>
//                         <td>{item.id_demo_course.id_course.id_teacher.account_id.full_name}</td>
//                         <td>{item.id_demo_course.id_course.name}</td>

//                         <td>Lớp học thử </td>
//                         <td>{item.id_demo_course.id_course.category_id.type}</td>
//                         <td>{item.id_demo_course.id_course.category_id.level}</td>

//                         <td>Ngày đánh giá </td>

//                         <td>
//                             {Date.now()>= new Date(item.id_demo_course.end_date+" "+ item.id_demo_course.schedule.split(" - ")[0]).getTime()?
//                              <Link to={`/profile/${account_id}/judgeTeacher/${item.id_demo_course.id_course.id_teacher._id}`}>Đánh giá </Link>:<p>Đánh giá</p>
//                             }

//                               </td>
//                     </tr>
//                 )}

//             </>

//             {officiaClasses&& officiaClasses.map((item) =>

//                 <tr key={item._id}>

//                     <td>
//                         {officiaClasses.indexOf(item) + 1 + demoClasses.length}
//                     </td>
//                     <td>{item.id_course.id_teacher.account_id.full_name}</td>
//                     <td>{item.id_course.name}</td>

//                     <td>Lớp học chính thức </td>
//                     <td>{item.id_course.category_id.type}</td>
//                     <td>{item.id_course.category_id.level}</td>

//                     <td>Ngày đánh giá </td>
//                     <td>
//                          {Date.now()>= new Date(item.id_course.start_date+" "+ item.id_course.schedule.split(" - ")[0]).getTime()?
//                              <Link to={`/profile/${account_id}/judgeTeacher/${item.id_course.id_teacher._id}`}>Đánh giá </Link>:<p>Đánh giá </p>
//                             } 
//                             </td>
//                 </tr>

// )}
//         </tbody>
//     </table>

// </div>

{/* <td>{item.id_demo_course.id_course.id_teacher.account_id.full_name}</td>
                                    <td>{item.id_demo_course.id_course.name}</td>
    
                                    <td>Lớp học thử </td>
                                    <td>{item.id_demo_course.id_course.category_id.type}</td>
                                    <td>{item.id_demo_course.id_course.category_id.level}</td> */}


{/* {studentRating.length >0 &&   studentRating.filter(i=>i.id_teacher==item.id_demo_course.id_course.id_teacher._id && i.isDemo==true )? */ }
{/* <>
                                <td>{moment(studentRating.createdAt).format("DD/MM/YYYY")} </td>
                                <td>Đã đánh giá </td>
                                </>   : */}
{/* <>
                                <td> </td>
                                <td>
                                <Link to={`/profile/${account_id}/judgeTeacher/${item.id_demo_course.id_course.id_teacher._id}`}>Đánh giá </Link>

                                     </td>
                                </>  */}
{/* } */ }

{/* {officiaClasses&& officiaClasses.map((item) =>
    
                            <tr key={item._id}>
    
                                <td>
                                    {demoClasses? (officiaClasses.indexOf(item) + 1 + demoClasses.length): (officiaClasses.indexOf(item) + 1)}
                                </td>
                                <td>{item.id_course.id_teacher.account_id.full_name}</td>
                                <td>{item.id_course.name}</td>
    
                                <td>Lớp học chính thức </td>
                                <td>{item.id_course.category_id.type}</td>
                                <td>{item.id_course.category_id.level}</td>
    
                                {studentRating.length>0 && studentRating.isDemo==false &&  studentRating.filter(i=>i.id_teacher==item.id_course.id_teacher._id)?
                                <>
                               
                                <td>{moment(studentRating.createdAt).format("DD/MM/YYYY")} </td>
                                <td>Đã đánh giá  </td>
                                </>   :
                                <>
                                <td> </td>
                                <td>
                                <Link to={`/profile/${account_id}/judgeTeacher/${item.id_course.id_teacher._id}`}>Đánh giá </Link>

                                     </td>
                                </> 
                                }
                            </tr>
    
    )} */}