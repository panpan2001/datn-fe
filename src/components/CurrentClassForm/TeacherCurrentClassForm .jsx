import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../assets/styles/CurrentClassForm.css'
import getAllCourseByIdTeacher from '../../redux/actions/Course/GetAllCourseByIdTeacher'
import ClassCard from '../ClassCard/TeacherClassCard'
import getTeacherByAccountId from '../../redux/actions/Teacher/GetTeacherByAccountId'
import getAllDemoCourseByTeacherId from '../../redux/actions/DemoCourse/GetAllDemoCourseByTeacherId'
import TeacherDemoClassCard from '../ClassCard/TeacherDemoClassCard'
import SearchBar from '../SearchBar'
import { contextProvider } from '../../layouts/ParentLayouts/AdminManagementLayout'
import toLowerCaseNonAccentVietnamese from '../../contexts/toLowerCaseNonAccentVietnamese'
import FilterCategory from '../FilterCategory'

function TeacherCurrentClassForm() {
    const user = useSelector((state) => state.login.login?.currentUser)
    const teacher = useSelector(state => state.getTeacherByAccountId.teacher?.currentTeacher)
    console.log(teacher._id)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllCourseByIdTeacher(teacher._id, dispatch)
        getAllDemoCourseByTeacherId(teacher._id, dispatch)
    }, [])
    // console.log("current teacher:", teacher)

    const classes = useSelector((state) => state.getAllCourseByIdTeacher.courses?.currentCourses)
    const demoCourse = useSelector((state) => state.getAllDemoCourseByTeacherId?.demoCourses?.currentCourse)
    // console.log("classes:", classes)
    console.log("demo classes:", demoCourse)
    const formatter = new Intl.NumberFormat({
        style: 'currency',
        currency: 'VND',

    });
    const [search, setSearch] = useState("")
    const handleFilterDemoClass = (item) => {
        console.log("filter demo class ne ")
        return search == '' ? item :
            toLowerCaseNonAccentVietnamese(item.id_course.name).includes(toLowerCaseNonAccentVietnamese(search)) ? item : null
    }
    const handleFilterClass = (item) => {
        console.log("filter demo class ne ")
        return search == '' ? item :
            toLowerCaseNonAccentVietnamese(item.name).includes(toLowerCaseNonAccentVietnamese(search)) ? item : null
    }

    const [filterTypeClass, setFilterTypeClass] = useState("")
    const listTypeClass = [
        { value: 2, name: "Khóa học thử" },
        { value: 1, name: "Khóa học chính thức" },
    ]
    const handleFilterTypeClass = (item) => {
        if (filterTypeClass == '' || filterTypeClass == 'Loại khóa học') {
            return item
        }

        else {
            if (filterTypeClass == 'Khóa học chính thức') {
                return item
            }
            else return null
        }


    }
    const handleFilterTypeDemoClass = (item) => {
        if (filterTypeClass == '' || filterTypeClass == 'Loại khóa học') {
            return item
        }

        else {
            if (filterTypeClass == 'Khóa học thử') {
                return item
            }
            else return null
        }


    }
    return (
        <div className='teacher-current-class_container container-fluid '>
            <strong className='is-size-4 is-centered'>Khóa học của tôi</strong>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    // gap: "1rem",
                }}>
                <SearchBar
                style={{
                    marginTop:"1.25rem"
                }}
                    width={"30rem"}
                    setSearch={setSearch}
                    name="Tìm kiếm "
                    marginTop={'.3rem'}
                    marginLeft={"-2.5rem"}
                   
                />
                <FilterCategory
                    title={'Loại khóa học'}
                    filter={filterTypeClass}
                    setFilter={setFilterTypeClass}
                    list={listTypeClass}
                />
            </div>

            {/* <contextProvider.Provider value={search}  styles={{width:"30rem"}}> */}
            <strong className='is-size-5 ' style={{ textAlign: "left" }}>
                <button className='button is-size-5'
                    style={{ backgroundColor: "#FFC67E" }}
                >Khóa học thử</button>
            </strong>
            {demoCourse && demoCourse
                .filter((item) => handleFilterDemoClass(item))
                .filter(item => handleFilterTypeDemoClass(item))
                .map(item => (

                    <TeacherDemoClassCard key={item._id} item={item} />
                ))
            }
            <hr />
            <strong className='is-size-5 ' style={{ textAlign: "left" }}>
                <button className='button is-size-5'
                    style={{ backgroundColor: "#ff9aa7" }}
                >Khóa học chính thức</button>
            </strong>
            {classes ?
                <div className="current-class_form columns is-centered is-multiline ">

                    {classes
                        .filter((item) => handleFilterClass(item))
                        .filter(item => handleFilterTypeClass(item))
                        .map((item) => (
                            <ClassCard key={item._id} data={item} />
                        ))}
                </div> :
                <>
                    <img className="current-class_image" src={require('../../assets/images/no-class.jpg')} />
                    <strong className='is-size-5'>Bạn chưa có lớp học nào cả</strong>

                    <Link to='/createClass'>
                        <button className='button is-primary'>Tạo lớp học</button>
                    </Link>

                </>}
            {/* </contextProvider.Provider> */}
        </div>
    )
}

export default TeacherCurrentClassForm

{/* <table class="table is-fullwidth is-hoverable">
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
                                    
                                    {classes.map((item) => (
                                        
                                         <tr key={item._id}>
                                        
                                        <td>{item.name}</td>
                                        <td>{item.category_id.level}</td>
                                        <td>{item.number_of_student} </td>
                                        <td>{item.time_per_lesson} </td>
                                        <td>{item.learning_period} </td>
                                        <td>{item.schedule} </td>
                                        <td>{item.cost} </td>
                                    </tr>
                                        
                                    ))}

                                </tbody>
                                </table> */}