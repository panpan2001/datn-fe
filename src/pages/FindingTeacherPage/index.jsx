import React, { useEffect, useState } from 'react'
import '../../assets/styles/FindingTeacherPage.css'
import { useDispatch, useSelector } from 'react-redux'
import TeacherShortInfoLeft from '../../components/TeacherShortInfoCard/TeacherShortInfoLeft'
import TeacherShortInfoRight from '../../components/TeacherShortInfoCard/TeacherShortInfoRight'
import SearchBar from '../../components/SearchBar'
import FilterCategory from '../../components/FilterCategory'
import HowFTWorkAccordion from '../../components/Accordion/HowFTWorkAccordion'
import Pagination from '../../components/Pagination'
import getAllTeachers from '../../redux/actions/Teacher/GetAllTeachersInfo'
import axios from 'axios'
import getStudentRating from '../../redux/actions/StudentRating/GetStudentRating'
const FindingTeacherPage = () => {
    // console.table(teachers)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllTeachers(dispatch)
        getStudentRating(dispatch)
    }, [])
    const teachers = useSelector(state => state.getAllTeachers.teachers?.infoTeacher)
    const studentRating = useSelector(state => state.getStudentRating?.studentRatings?.currentRating)

    // let teacher_rating = teachers?.map(i => studentRating?.filter(j => j.id_teacher === i._id))
    // teacher_rating= teacher_rating.map(i=> i.map(j=>j.rating_avg_teacher).reduce((a,b)=>a+b,0)/i.length ||0  )
    // console.log("finding teacher ", { teacher_rating })

    const toLowerCaseNonAccentVietnamese = (str) => {
        str = str.toLowerCase().trim().replace(/[@!^&\/\\#,+()$~%.'":*?<>{}]/g, '')
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
        return str;
    }
    const [search, setSearch] = useState("")
    const handleSearch = (item) => {
        return search === "" ? item :
            toLowerCaseNonAccentVietnamese(item.account_id.full_name.toLowerCase()).includes(toLowerCaseNonAccentVietnamese(search))
    }
    const [filterGender, setFilterGender] = useState("")
    // const [filterMajor, setFilterMajor] = useState("")
    // const [filterUniversity, setFilterUniversity] = useState("")
    const [filterDegree, setFilterDegree] = useState("")
    const [filterRating, setFilterRating] = useState('')
    const [contentFilter, setContenFilter] = useState([])
    const listRating = [
        { value: 5, name: "4 - 5" },
        { value: 4, name: "3 - 4" },
        { value: 3, name: "2 - 3" },
        { value: 2, name: "1 - 2" },
        { value: 1, name: "0 - 1" },

    ]
    const listDegree = [
        { value: 5, name: "IELTS 9.0" },
        { value: 4, name: "IELTS 8.5" },
        { value: 3, name: "IELTS 8.0" },
        { value: 2, name: "IELTS 7.5" },
        { value: 1, name: "IELTS 7.0" },
        { value: 0, name: "IELTS 6.5" },
    ]
    const listGender = [

        { value: 2, name: "Nam" },
        { value: 1, name: "Nữ" },

    ]
    const handleFilterRating = (item) => {

        if (filterRating == "") return item
        else if (parseInt(filterRating.split(" - ")[0]) == 0) {
            const condition1 = parseInt(filterRating.split(" - ")[0])
            const condition2 = parseInt(filterRating.split(" - ")[1])
            let a = studentRating
                .filter(i => i.id_teacher._id == item._id)
            if (a.length == 0) return item
            else {
                let b = studentRating
                    .filter(i => i.id_teacher._id == item._id)
                    .map(i => i.rating_avg_teacher)
                b = b.reduce((a, b) => a + b, 0) / a.length
                return b > condition1 && b <= condition2 ? item : null
            }
        }
        else {
            console.log("filterRating", parseInt(filterRating.split(" - ")[0]))
            const condition1 = parseInt(filterRating.split(" - ")[0])
            const condition2 = parseInt(filterRating.split(" - ")[1])
            let a = studentRating
                .filter(i => i.id_teacher._id == item._id)
                .map(i => i.rating_avg_teacher)
            // console.log("a chua tinh", { a })
            if (a.length > 0) {
                a = a.reduce((a, b) => a + b, 0) / a.length
                // console.log("a tinh", { a })
                return a >= condition1 && a <= condition2 ? item : null
            }
            else {
                return null
            }

        }


    }
    const handleFilterDegree = (item) => {
        //    console.log("FilterDegree",filterDegree == "" ? item : item.id_degree.degree_level == filterDegree.trim())
        return filterDegree == "" ? item : item.id_degree.degree_level == filterDegree.trim()
    }
    const handleFilterGender = (item) => {
        // console.log("FilterGender",filterGender == "" ? item : item.account_id.gender == filterGender.trim().toLowerCase())
        return filterGender == "" ? item : item.account_id.gender == filterGender.trim().toLowerCase()
    }
    // let [teacherCopy, setTeacherCopy] = useState([...teachers])
   
    
    const handleResetFilter=()=>{
        console.log("reset")
        // const newTeachers = [...teachers]
    //    setTeacherCopy(teachers)
       setFilterRating('')
       setFilterDegree('')
       setFilterGender('')
       setSearch("")
    }

    return (
        <div className='finding-teacher-page_container container'>
            <div className="finding-teacher-page_hero">
                <div className="columns ">
                    <div className="column is-8 is-centered finding-teacher-page_hero-left">
                        <p> <strong className='is-size-3'>Tìm kiếm giáo viên tiếng Anh <br />và bắt đầu hành trình tuyệt vời của riêng bạn</strong> </p>
                        <br />
                        <SearchBar
                            width={'45rem'}
                            search={search}
                            setSearch={setSearch}
                            name="Tìm kiếm giáo viên"
                            marginTop={'.25rem'}
                            marginLeft={"-2.5rem"} />



                    </div>
                    <div className="column is-4">
                        <img className='finding-teacher_image ' src={require('../../assets/images/12.jpg')} alt="" />
                    </div>
                </div>
            </div>
            {/* <hr /> */}
            <br />
            <br />
            <br />
            <br />
            {teachers &&
                <>
                    <section className="finding-teacher-page_section-1 container is-centered show-teacher ">
                        <div className="columns is-multiline ">
                            <div className="column is-3">

                                <div className=" filter_container is-multiline "
                                    style={{ display: 'flex',
                                     flexDirection: 'column', 
                                    gap:"1rem"
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

                                        title={'Chứng chỉ'}
                                        filter={filterDegree}
                                        setFilter={setFilterDegree}
                                        list={listDegree}
                                    />
                                    <FilterCategory
                                        // styles={{minHeight: '30vh'}}

                                        title={'Giới tính'}
                                        filter={filterGender}
                                        setFilter={setFilterGender}
                                        list={listGender}
                                    />
                                    <button className='button '
                                        onClick={() => handleResetFilter()}
                                    >Đặt lại </button>
                                </div>
                            </div>
                            <div className="column is-8 ml-6 ">
                                {
                                   teachers.filter((item) => item.account_id.is_deleted==false)
                                   .filter((item) => handleSearch(item))
                                        .filter((item) => handleFilterRating(item))
                                        .filter((item) => handleFilterDegree(item))
                                        .filter((item) => handleFilterGender(item))
                                        // .filter((item) => handleResetFilter(item))
                                        // .slice(0, 2)
                                        .map((teacher) =>
                                            <>
                                                <TeacherShortInfoLeft
                                                    studentRating={studentRating && 
                                                        studentRating.filter(item => item.id_teacher._id == teacher._id
                                                            && item.isBadJudge == false)}
                                                    color="#b5e5ff" data={teacher} />
                                                <br />
                                                <br />
                                            </>
                                        )}
                                {/* <Pagination /> */}
                            </div>



                        </div>

                    </section>
                    <hr />

                    <section className="finding-teacher-page_section-2 container">
                        <br />
                        <strong className='is-size-4'>Giáo viên nổi bật</strong>
                        <br />
                        <br />

                        <div className="columns is-multiline">

                            <div className="column is-3">
                                <TeacherShortInfoRight
                                    studentRating={studentRating && studentRating.filter(item => item.id_teacher._id == teachers[0]._id)}

                                    data={teachers[0]} />
                            </div>

                            <div className="column is-3">
                                <TeacherShortInfoRight
                                    studentRating={studentRating && studentRating.filter(item => item.id_teacher._id == teachers[1]._id)}

                                    data={teachers[1]} />
                            </div>
                            <div className="column is-3">
                                <TeacherShortInfoRight
                                    studentRating={studentRating && studentRating.filter(item => item.id_teacher._id == teachers[2]._id)}

                                    data={teachers[2]} />
                            </div>
                            <div className="column is-3">
                                <TeacherShortInfoRight
                                    studentRating={studentRating && studentRating.filter(item => item.id_teacher._id == teachers[3]._id)}

                                    data={teachers[3]} />
                            </div>
                        </div>



                    </section>
                </>

            }
            <br />
            <hr />
            <section className="finding-teacher-page_section-3">
                <br />
                <strong className='is-size-4'>Làm sao để tham gia học? </strong>
                <br />
                <div className="columns">
                    <div className="column is-1"></div>

                    <div className="column is-2">
                        <img src={require('../../assets/images/logo.jpg')} alt=""
                        // style={{
                        //     width: "70%"
                        // }}
                        />
                    </div>
                    <div className="column is-8">
                        <HowFTWorkAccordion title="Lựa chọn giáo viên yêu thích của bạn">
                            <p >
                                Sử dụng thanh công cụ hoặc bộ lọc để tìm ra giáo viên bạn ưng ý nhất.
                            </p>
                        </HowFTWorkAccordion>
                        <HowFTWorkAccordion title="Tham gia học thử">
                            <p>
                                Lựa chọn thời gian học tốt nhất cho bạn và kết nối với giáo viên.
                            </p>
                        </HowFTWorkAccordion>
                        <HowFTWorkAccordion title="Đăng kí và bắt đầu ">
                            <p>
                                Đăng kí học và xây dựng hành trình của riêng bạn với sự hỗ trợ của giáo viên.
                                <br />
                                Bạn cũng có thể lựa chọn những giáo viên khác  theo ý muốn bất kì lúc nào.
                            </p>
                        </HowFTWorkAccordion>
                    </div>
                    <div className="column is-1"></div>
                </div>

            </section>
            <br />
            <br />
            {/* <hr />
            <br />
            <section className="finding-teacher-page_section-4">
                <p>section-4</p>
            </section> */}
        </div>
    )
}

export default FindingTeacherPage

// const accounts= useSelector(state=>state.login.login?.currentUser)
// const accountList= useSelector(state=>state.getAccount.accounts?.allAccounts)
// console.log("account:",accounts)
// console.log("accountlist:",accountList)

// const students=user.map(student=>student.role_name=='student')
// console.table(students)
// const dispatch= useDispatch()
// const navigate = useNavigate()
// let axiosJWT= createAxiosJWT(dispatch,accounts,loginSuccess)

// const handleDelete=(id)=>{
//     console.log(id)
//     DelAccounts(accounts?.accessToken,dispatch,id,axiosJWT)

// }

//     useEffect(() => {
//     if(!accounts ||accounts==null) navigate('/login')
//     if(!accounts.accessToken) {
//     console.log("failed to load user access tokens ")
// }
//     if(accounts.accessToken) getAllAccounts(accounts?.accessToken,dispatch,axiosJWT)
// },[])
{/* {accounts?.accountList?.map((account)=>
            <>
                        <p>{account.role_name}</p>
<button onClick={()=>{handleDelete(account._id)}}>delete</button>
            </>
            )} */}
{/* <div className="column is-3">
                        {teachers.map((teacher) => 
                            <>
                            <TeacherShortInfoRight data={teacher} />

                            <br />
                            <br />
                        </>      
                        )}
                        <br />
                        <br />
                       
                    </div> */}