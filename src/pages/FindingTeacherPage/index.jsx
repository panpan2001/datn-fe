import React, { useEffect } from 'react'
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
const FindingTeacherPage = () => {
    // console.table(teachers)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllTeachers(dispatch)

    }, [])
    const teachers = useSelector(state => state.getAllTeachers.teachers?.infoTeacher)



    return (
        <div className='finding-teacher-page_container container'>
            <div className="finding-teacher-page_hero">
                <div className="columns ">
                    <div className="column is-8 is-centered finding-teacher-page_hero-left">
                        <p> <strong className='is-size-3'>Tìm kiếm giáo viên tiếng Anh <br />và bắt đầu hành trình tuyệt vời của riêng bạn</strong> </p>
                        <br />
                        <SearchBar />
                        <br />
                        <div className="columns is-multiline">
                            <FilterCategory />
                            <FilterCategory />
                            <FilterCategory />
                            <FilterCategory />
                        </div>
                    </div>
                    <div className="column is-4">
                        <img className='finding-teacher_image ' src={require('../../assets/images/12.jpg')} alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <br />
            {teachers &&
            <>
             <section className="finding-teacher-page_section-1 is-centered show-teacher ">
                {/* <br /> */}
                <strong className='is-size-4'>Tất cả giáo viên </strong>
                <br />
                <br />

                <div className="columns is-centered">
                    <div className="column is-10 ml-3">
                        {teachers && teachers.map((teacher) =>
                            <>
                                <TeacherShortInfoLeft data={teacher} />
                                <br />
                                <br />
                            </>
                        )}
                    </div>

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

                </div>
                <Pagination />
            </section>
            <hr />

            <section className="finding-teacher-page_section-2">
                <br />
                <strong className='is-size-4'>Giáo viên nổi bật</strong>
                <br />
                <br />
             
                    <div className="columns is-multiline">

                        <div className="column is-3">
                            <TeacherShortInfoRight data={teachers[0]} />
                        </div>

                        <div className="column is-3">
                            <TeacherShortInfoRight data={teachers[1]} />
                        </div>
                        <div className="column is-3">
                            <TeacherShortInfoRight data={teachers[2]} />
                        </div>
                        <div className="column is-3">
                            <TeacherShortInfoRight data={teachers[3]} />
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