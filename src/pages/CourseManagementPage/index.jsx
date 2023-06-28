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
  }, [])
  const courses = useSelector((state) => state.getAllCourses?.courses?.allCourses)
  const demoCourses = useSelector((state) => state.getAllDemoCourse?.demoCourses?.allCourses)

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
  return (
    <div className='course-management-page container mt-6'>
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
            <button className="icon-teacher " type='button'
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
            </button>
          </div>

        </div>

      </div>

      <div className='course-management_table is-centered mr-5 mt-3'>
        {courses &&
          <div className='teacher-management_table is-centered mr-5 mt-3'>
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
                  <th>Thời lượng buổi học (ph)</th>
                  <th>Thời thời gian học (tháng)</th>
                  <th></th>
                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>
                {courses && courses
                .filter(item=>handleSearchCourse(item))
                .map((item) => (
                  <tr className='mb-2'>
                    <th>{courses.indexOf(item) + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.number_of_student}</td>
                    <td>{item.schedule}</td>
                    <td>{item.time_per_lesson}</td>
                    <td>{item.learning_period}</td>
                    <td>
                      <AiOutlineEdit onClick={() => handleGoToDetailCourse(item._id)}
                        style={{
                          color: '#008947',
                          cursor: 'pointer',
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: ".75rem",
                          marginTop: ".75rem"
                        }} />
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
            <button className="icon-teacher " type='button'
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
            </button>
          </div>

        </div>

      </div>
      <div className='demo_course-management_table is-centered mr-5 mt-3'>
        {demoCourses &&
          <div className='teacher-management_table is-centered mr-5 mt-3'>
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
                  <th>Thời lượng buổi học (ph)</th>
                  <th>Thời gian học (buổi)</th>
                  {/* <th></th> */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {demoCourses && demoCourses
                .filter(item=>handleSearchDemoCourse(item))
                .map((item) => (
                  <tr className='mb-2'>
                    <th>{demoCourses.indexOf(item) + 1}</th>
                    <td>{item.id_course&& item.id_course.name}</td>
                    <td>{item.id_course&&item.id_course.number_of_student}</td>
                    <td>{item.schedule}</td>
                    <td>{item.id_course&&item.id_course.time_per_lesson}</td>
                    <td>{item.learning_period}</td>
                    <td>
                      <AiOutlineEdit onClick={()=>handleGoToDetailDemoCourse(item._id)}
                        style={{
                          color: '#008947',
                          cursor: 'pointer',
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: ".75rem",
                          marginTop: ".75rem"
                        }} />
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