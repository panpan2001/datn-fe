import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import getStudentRating from '../../redux/actions/StudentRating/GetStudentRating'
import { useDispatch, useSelector } from 'react-redux'
import { CiCirclePlus } from 'react-icons/ci'
import { contextProvider } from '../../layouts/ParentLayouts/AdminManagementLayout'
import FilterCategory from '../../components/FilterCategory'
import { useNavigate } from 'react-router-dom'
import toLowerCaseNonAccentVietnamese from '../../contexts/toLowerCaseNonAccentVietnamese'

function StudentJudgeManagementPage() {
    const searchValue = useContext(contextProvider)
    const navigate = useNavigate()
    const user = useSelector((state) => state.login.login?.currentUser)
    const dispatch = useDispatch()
    const accessToken = user?.accessToken
    //   const axiosJWT = createAxiosJWT(dispatch, user, deleteStudentSuccess)
    const account_id = user?._id
    useEffect(() => {
        getStudentRating(dispatch)

    }, [])
    const studentRating = useSelector((state) => state.getStudentRating?.studentRatings?.currentRating)
    const handleSearch = (e) => {
        // console.log(e)
        return searchValue == "" ? e :
            (toLowerCaseNonAccentVietnamese(e.id_student.account_id.full_name)).includes(toLowerCaseNonAccentVietnamese(searchValue)) ? e :
                (toLowerCaseNonAccentVietnamese(e.id_teacher.account_id.full_name)).includes(toLowerCaseNonAccentVietnamese(searchValue)) ? e :
                    (toLowerCaseNonAccentVietnamese(e.id_course.name)).includes(toLowerCaseNonAccentVietnamese(searchValue)) ? e :
                        null
    }
    const [filterRating, setFilterRating] = useState('')
    const [filterTypeCourse, setFilterTypeCourse] = useState('')
    const [filterBadJudge, setFilterBadJudge] = useState(0)
    const listRating = [
        { value: 5, name: "4 - 5" },
        { value: 4, name: "3 - 4" },
        { value: 3, name: "2 - 3" },
        { value: 2, name: "1 - 2" },
        { value: 1, name: "0 - 1" },

    ]
    const listTypeCourse = [
        { value: 0, name: "Khóa học thử" },
        { value: 1, name: "Khoá học chính thức" },
    ]
    const listBadJudge = [
        { value: 0, name: 0 },
        { value: 1, name: 1 },
        { value: 2, name: 2 },
        // { value: 4, name: 3 },
    ]
    const handleFilterRating = (item) => {

        if (filterRating == "" || filterRating == 'Điểm đánh giá') return item

        else {
            console.log("filterRating", parseInt(filterRating.split(" - ")[0]))
            const condition1 = parseInt(filterRating.split(" - ")[0])
            const condition2 = parseInt(filterRating.split(" - ")[1])

            return item.rating_avg_teacher >= condition1 && item.rating_avg_teacher <= condition2 ? item : null
        }

    }
    const handleFiltertypeCourse = (item) => {


        if (filterTypeCourse == "" || filterTypeCourse == 'Số lần') return item
        else if (filterTypeCourse == "Khóa học thử") return item.isDemo ? item : null
        else if (filterTypeCourse == "Khoá học chính thức") return item.isDemo ? null : item

    }
    const handleFilterBadJudge = (item) => {
        if (filterBadJudge == "" || filterBadJudge == 'Đánh giá xấu') return item
        else {
            return item.countBadJudge==filterBadJudge ? item : null
        }
    }
    const handleMoveToEdit = (id) => {
        navigate(`/admin/studentJudge/${id}`)
    }
    const handleDelete = (id) => {
        alert(`Are you sure you want to delete ${id}`)
    }
    const handleResetFilter=()=>{
        setFilterRating('')
        setFilterTypeCourse('')
        setFilterBadJudge("")
    }
    return (
        <div className='student-management-page container mb-6'>
            <strong className="is-size-4">Đánh giá của học viên</strong>

            <div className="student-management-overview_div "
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
                    justifyContent: "flex-end",
                    marginRight: "4rem"
                }}>
                    <div className="filter-teacher"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            gap: '1rem',
                        }}>
                        <FilterCategory
                            // styles={{minHeight: '30vh'}}
                            title={'Điểm đánh giá'}
                            filter={filterRating}
                            setFilter={setFilterRating}
                            list={listRating}
                        />
                        <FilterCategory
                            // styles={{minHeight: '30vh'}}
                            title={'Loại khóa học'}
                            filter={filterTypeCourse}
                            setFilter={setFilterTypeCourse}
                            list={listTypeCourse}
                        />
                         <FilterCategory
                            // styles={{minHeight: '30vh'}}
                            title={'Đánh giá xấu'}
                            filter={filterBadJudge}
                            setFilter={setFilterBadJudge}
                            list={listBadJudge}
                        />
                    </div>

                    {/* <button className="icon-teacher " type='button'
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            marginTop: "1.75rem",
                            marginRight: ".5rem",
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
                    <button className='button is-primary is-light mr-2 '
                    style={{marginTop: "2rem"}}
                    onClick={()=>handleResetFilter()}
                     type='button'>
                        Đặt lại
                    </button>
                </div>

            </div>

            <div className='teacher-management_table is-centered mr-5 mt-3'>
                <table className="table"
                    style={{
                        backgroundColor: "#85CEFE",
                        padding: "1rem",
                        borderRadius: "10px",
                        textAlign: "left",
                        boxShadow: "0px 0px 10px #ACEFF6"
                    }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên học viên</th>
                            <th>Tên giáo viên</th>
                            <th>Tên khóa học</th>
                            <th>Đánh giá cho</th>
                            <th>Điểm đánh giá</th>
                            <th>Đánh giá xấu </th>
                            <th></th>
                            {/* <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {studentRating && studentRating.length > 0 &&
                            studentRating
                                .filter((item) => handleSearch(item))
                                .filter((item) => handleFilterRating(item))
                                .filter((item) => handleFiltertypeCourse(item))
                                .filter((item) => handleFilterBadJudge(item))
                                .map((item) => (
                                    <tr className='mb-2'>
                                        <th>{studentRating.indexOf(item) + 1}</th>
                                        <td>{item.id_student.account_id.full_name}</td>
                                        <td
                                        >{item.id_teacher.account_id.full_name}</td>
                                        <td
                                         style={{ width: "14rem",}}>{item.id_course.name}</td>
                                        <td>{item.isDemo ?
                                            <button className='button is-info '>Khóa học thử</button> :
                                            <button className='button is-primary '>Khóa học chính thức</button>}</td>
                                        <td
                                        style={{
                                            justifyContent: 'center',
                                            display: 'flex',
                                            height: '4rem',
                                            alignItems: 'center'
                                        }}>{item.rating_avg_teacher}</td>

                                        <td>{item.countBadJudge>0 ?
                                            <button className='button is-danger '>{item.countBadJudge}</button> :
                                            <button className='button is-primary is-light' >0</button>
                                        }</td>
                                        <td >
                                            <AiOutlineEdit onClick={() => {
                                                handleMoveToEdit(item._id)
                                            }}
                                                style={{
                                                    color: '#008947',
                                                    cursor: 'pointer',
                                                    width: "1.5rem",
                                                    height: "1.5rem",
                                                    marginRight: ".75rem",
                                                    marginTop: ".75rem",

                                                }} />
                                        </td>
                                        {/* <td>
                                            < AiOutlineDelete
                                            onClick={()=> handleDelete(item._id)}
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

        </div>
    )


}

export default StudentJudgeManagementPage 