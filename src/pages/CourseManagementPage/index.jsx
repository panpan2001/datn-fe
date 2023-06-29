import React, { useContext, useEffect } from 'react'
import getAllDemoCourses from '../../redux/actions/DemoCourse/GetAllDemoCourses'
import getAllCourses from '../../redux/actions/Course/GetAllCourses'
import { useDispatch, useSelector } from 'react-redux'
import { CiCirclePlus } from 'react-icons/ci'
import FilterCategory from '../../components/FilterCategory'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import deleteCourse from '../../redux/actions/Course/DeleteCourse'
import createAxiosJWT from '../../utils/createInstance'
import { getAllCoursesSuccess } from '../../redux/slices/Course/getAllCourse'
import { getAllDemoCoursesSuccess } from '../../redux/slices/DemoCourse/getAllDemoCourseSlice'
import adminDelCourse from '../../redux/actions/Course/AdminDelCourse'
import adminDelDemoCourse from '../../redux/actions/DemoCourse/adminDelDemoCourse'
import { useNavigate } from 'react-router-dom'
import { contextProvider } from '../../layouts/ParentLayouts/AdminManagementLayout'
import toLowerCaseNonAccentVietnamese from '../../contexts/toLowerCaseNonAccentVietnamese'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import getAllDemoCourseStudent from '../../redux/actions/DemoCourseStudent/GetAllDemoCourseStudent'
import getAllCourseStudent from '../../redux/actions/CourseStudent/GetAllCourseStudent'
function CourseManagementPage() {
  const searchValue= useContext(contextProvider)

  const user = useSelector((state) => state.login.login?.currentUser)
  const dispatch = useDispatch()
  const accessToken = user?.accessToken
  const axiosJWTCourse = createAxiosJWT(dispatch, user, getAllCoursesSuccess)
  const axiosJWTDemoCourse = createAxiosJWT(dispatch, user, getAllDemoCoursesSuccess)
  const account_id = user?._id
  const navigate=useNavigate()
  useEffect(() => {
    getAllDemoCourses(dispatch)
    getAllCourses(dispatch)
    getAllDemoCourseStudent(dispatch)
    getAllCourseStudent(dispatch)
  }, [])
  const courses = useSelector((state) => state.getAllCourses?.courses?.allCourses)
  const demoCourses = useSelector((state) => state.getAllDemoCourse?.demoCourses?.allCourses)
  const demoCourseStudents = useSelector((state) => state.getAllDemoCourseStudent?.demoCourseStudents?.currentDemoCourseStudent)
  const courseStudents = useSelector((state) => state.getAllCourseStudent?.courseStudents?.currentCourseStudent)
  const handleDeleteCourse = (id) => {
    adminDelCourse(id, account_id, dispatch, axiosJWTCourse, accessToken)
  }

  const handleDeleteDemoCourse = (id) => {
    adminDelDemoCourse(id, account_id, dispatch, axiosJWTDemoCourse, accessToken)
  }
const handleGoToDetailCourse = (id) => {
  console.log("id course ",id)
  navigate(`/admin/course/${id}`)
}
const handleGoToDetailDemoCourse = (id) => {
  console.log("id demo ",id)
  navigate(`/admin/course/demo/${id}`)
}
const handleSearchCourse = (e) => {
  return searchValue== 0 ? e : 
  (toLowerCaseNonAccentVietnamese(e.name)
  .includes(toLowerCaseNonAccentVietnamese(searchValue))?
  e :
  null
    ) 
  
  
}
const handleSearchDemoCourse = (e) => {
  return searchValue== 0 ? e : 
  (toLowerCaseNonAccentVietnamese(e.id_course.name)
  .includes(toLowerCaseNonAccentVietnamese(searchValue))?
  e :
  null
    )
}

const handleChangeAppearance = (e,flag) => {
  const hiddenStatus= e.isHidden
  if(flag==1){
  //  changeDemoCourseAppearance( hiddenStatus, account_id, dispatch, axiosJWTDemoCourse, accessToken)
alert(e._id)
  }
  else {
    // changeCourseAppearance( hiddenStatus, account_id, dispatch, axiosJWTCourse, accessToken)
  }
}

  return (
    <div className='course-management-page container mt-4'>
      <strong className='is-size-3'>Quản lí khóa học</strong>

      <div className="course-management-overview_div "
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "1rem",
          marginTop: "1rem",
          textAlign: "left"
        }}
      >

        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "4rem"
        }}>
          <button className='button  is-link'>Khóa học chính thức</button >

          <div className="filter-teacher" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: 'center'
          }}>
            {/* <FilterCategory /> */}
            {/* <button className="icon-teacher " type='button'
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                marginTop: ".5rem",
                cursor: "pointer",
                border: "none",
                backgroundColor: " #C2E7FF",
                width: "3rem",
                height: "3rem"
              }}>
              <CiCirclePlus style={{
                width: "2rem",
                height: "2rem",
                fill: "#29A3F0",
                // borderRadius: "50%",
              }} />
            </button> */}
          </div>

        </div>

      </div>

      <div className='course-management_table is-centered mr-5 mt-3'>
        {courses &&
          <div className='teacher-management_table is-centered mr-5 mt-3'
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <table className="table"
              style={{
                backgroundColor: "#FFEBB2",
                padding: "1rem",
                borderRadius: "10px",
                textAlign: "left",
                boxShadow: "0px 0px 10px #ACEFF6"
              }}>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên khóa học</th>
                  <th>Số lượng học viên</th>
                  <th>Lịch học</th>
                  {/* <th>Thời lượng <br/> buổi học (ph)</th> */}
                  <th>Thời gian học(tháng)</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {courses && courses
                .filter(item=>handleSearchCourse(item))
                .map((item) => (
                  <tr className='mb-2'>
                    <th>
                      <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                      {courses.indexOf(item) + 1}
                      </div>
                      </th>
                    <td>{item.name}</td>
                    <td>
                    <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>

                      {item.number_of_student}
                      </div>
                      </td>
                    <td>{item.schedule}</td>
                    {/* <td>
                    <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                      {item.time_per_lesson}
                      </div>
                      </td> */}
                    <td>
                    <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                      {item.learning_period}
                      </div>
                      </td>
                      <td>
                        {courseStudents && courseStudents.filter(course=>item._id===course.id_course._id && course.isReported==true).length>0 ?
                        <div  style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                          <button className='button  is-danger is-light is-small'>
                            {courseStudents.filter(course=>item._id===course.id_course._id && course.isReported==true).length}</button>
                        </div>:
                        <div  style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                          <button className='button  is-primary is-light is-small'>0</button>
                        </div>
                      }
                      </td>
                      <td>
                        <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                        {item.createdAt ?
                                                < BsEyeSlash style={{
                                                  width: "1.5rem",
                                                  height: "1.5rem",
                                                }}
                                                className='hide-student-rating_icon'
                                                />
                                                :
                                                < BsEye 
                                                style={{
                                                  width: "1.5rem",
                                                  height: "1.5rem",
                                                }}
                                                className='show-student-rating_icon'
                                                />
                                            }
                        </div>
                      </td>
                    <td>
                      <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                      <AiOutlineEdit onClick={() => handleGoToDetailCourse(item._id)}
                        style={{
                          color: '#008947',
                          cursor: 'pointer',
                          width: "1.5rem",
                          height: "1.5rem",
                          // marginRight: ".75rem",
                          // marginTop: ".75rem"
                        }} />
                      </div>
                    </td>
                    {/* <td>
                      < AiOutlineDelete onClick={() => handleDeleteCourse(item._id)}
                        style={{
                          color: '#ff357e',
                          cursor: 'pointer',
                          width: "1.5rem",
                          height: "1.5rem",
                          marginTop: ".75rem",
                          marginRight: ".75rem"
                        }} />
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      </div>
      <div className="course-management-overview_div "
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "1rem",
          marginTop: "1rem",
          textAlign: "left"
        }}
      >

        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "4rem"
        }}>
          <button className='button  is-primary mt-4'>Khóa học thử</button >

          <div className="filter-teacher" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: 'center'
          }}>
            {/* <FilterCategory /> */}
            {/* <button className="icon-teacher " type='button'
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                marginTop: ".5rem",
                cursor: "pointer",
                border: "none",
                backgroundColor: " #C2E7FF",
                width: "3rem",
                height: "3rem"
              }}>
              <CiCirclePlus style={{
                width: "2rem",
                height: "2rem",
                fill: "#29A3F0",
              }} />
            </button> */}
          </div>

        </div>

      </div>
      <div className='demo_course-management_table is-centered mr-5 mt-3'>
        {demoCourses &&
          <div className='teacher-management_table is-centered mr-5 mt-3'
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
          >
            <table className="table"
              style={{
                backgroundColor: "#FF9F7E",
                padding: "1rem",
                borderRadius: "10px",
                textAlign: "left",
                boxShadow: "0px 0px 10px #ACEFF6"
              }}>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên khóa học</th>
                  <th>Số lượng học viên</th>
                  <th>Lịch học</th>
                  {/* <th>Thời lượng<br/> buổi học (ph)</th> */}
                  <th>Thời gian học (buổi)</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {demoCourses && demoCourses
                .filter(item=>handleSearchDemoCourse(item))
                .map((item) => (
                  <tr className='mb-2'>
                    <th>
                      <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                      {demoCourses.indexOf(item) + 1}
                      </div>
                      </th>
                    <td>
                      {item.id_course&& item.id_course.name}</td>
                    <td>
                      <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                      {item.id_course&&item.id_course.number_of_student}
                      </div>
                      </td>
                    <td>{item.schedule}</td>
                    {/* <td>
                      <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                      {item.id_course&&item.id_course.time_per_lesson}
                      </div>
                      </td> */}
                    <td>
                    <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                    {item.learning_period}
                    </div>
                      </td>
                      <td>
                        { demoCourseStudents &&
                         demoCourseStudents
                         .filter(demoCourse=>item._id === demoCourse.id_demo_course._id && demoCourse.isReported==true).length>0?
                       <>
                        <div  style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                          <button className='button  is-danger is-light is-small'>
                            {demoCourseStudents.filter(demoCourse=>item._id === demoCourse.id_demo_course._id && demoCourse.isReported==true).length}
                            </button>
                        </div>
                        </>
                        :
                        <div  style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                          <button className='button  is-primary is-light is-small'>0</button>
                        </div>
                      }
                      </td>
                      <td>
                      <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                      {item.isHidden ?
                                                < BsEyeSlash 
                                                onClick={()=>handleChangeAppearance(item,1)}
                                                style={{
                                                  width: "1.5rem",
                                                  height: "1.5rem",
                                                }}
                                               
                                                />
                                                :
                                                < BsEye 
                                                onClick={()=>handleChangeAppearance(item,1)}
                                                style={{
                                                  width: "1.5rem",
                                                  height: "1.5rem",
                                                }}
                                                />
                                            }
                      </div>
                      </td>

                    <td>
                      <div style={{width:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                      <AiOutlineEdit onClick={()=>handleGoToDetailDemoCourse(item._id)}
                        style={{
                          color: '#008947',
                          cursor: 'pointer',
                          width: "1.5rem",
                          height: "1.5rem",
                        }} />
                      </div>
                    
                    </td>
                    {/* <td>
                      < AiOutlineDelete 
                      onClick={() => handleDeleteDemoCourse(item._id)}
                        style={{
                          color: '#ff357e',
                          cursor: 'pointer',
                          width: "1.5rem",
                          height: "1.5rem",
                          marginTop: ".75rem",
                          marginRight: ".75rem"
                        }} />
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  )
}

export default CourseManagementPage 