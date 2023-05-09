import React, { useEffect } from 'react'
import '../../assets/styles/FindingTeacherPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getAllAccounts from '../../redux/actions/Account/GetAllAccounts'
import axios from 'axios'
import { AccountApi, RefreshTokenApi } from '../../utils/BaseUrl'
import DelAccounts from '../../redux/actions/Account/DelAccounts'
import jwtDecode from 'jwt-decode'
import { loginSuccess } from '../../redux/slices/Auth/loginSlice'
import createAxiosJWT from '../../utils/createInstance'
import TeacherShortInfoLeft from '../../components/TeacherShortInfoCard/TeacherShortInfoLeft'
import TeacherShortInfoRight from '../../components/TeacherShortInfoCard/TeacherShortInfoRight'
import SearchBar from '../../components/SearchBar'
import FilterCategory from '../../components/FilterCategory'
import HowFTWorkAccordion from '../../components/Accordion/HowFTWorkAccordion'
const FindingTeacherPage = () => {

    return (
        <div className='finding-teacher-page_container container'>
            <hero className="finding-teacher-page_hero">
                <div className="columns">
                    <div className="column is-8">
                        <p> <strong className='is-size-4'>Tìm kiếm giáo viên tiếng Anh và bắt đầu hành trình tuyệt vời của riêng bạn</strong> </p>
                       <SearchBar/>
                        <div className="columns is-multiline">
                            <FilterCategory/> 
                            <FilterCategory/> 
                            <FilterCategory/> 
                            <FilterCategory/> 
                        </div>
                    </div>
                    <div className="column is-4">
                        <img src={require('../../assets/images/12.jpg')} alt="" srcset="" />
                    </div>
                </div>
            </hero>
            <hr />
            <section className="finding-teacher-page_section-1 show-teacher ">
            <br/>
            <strong>Show  Teacher</strong>
                <div className="columns">
                    <div className="column is-9">
                        <TeacherShortInfoLeft/>
                        <br/>
                        <br/>
                        <TeacherShortInfoLeft/>
                        <br/>
                        <br/>
                        <TeacherShortInfoLeft/>
                        <br/>
                        <br/>
                        <TeacherShortInfoLeft/>
                        <br/>
                        <br/>
                    </div>
                    <div className="column is-3">
                        <strong>New Teacher</strong>
                        <TeacherShortInfoRight/>
                        <br/>
                        <br/>
                        <TeacherShortInfoRight/>
                        <br/>
                        <br/>
                    </div>
                </div>

            </section>
            <hr/>
         
            <section className="finding-teacher-page_section-2">
            <br/>
                <strong>Top Teacher</strong>
                <div className="columns is-multiline">
                    <div className="column is-3">
                    <TeacherShortInfoRight/>
                    </div>
                    <div className="column is-3">
                    <TeacherShortInfoRight/>
                    </div>
                    <div className="column is-3">
                    <TeacherShortInfoRight/>
                    </div>
                    <div className="column is-3">
                    <TeacherShortInfoRight/>
                    </div>
                </div>
                
            </section>
           
            <br/>
            <hr/>
            <section className="finding-teacher-page_section-3">
            <br/>
            <strong>How FT work </strong>
            <div className="columns">
                <div className="column is-3">
                <img src={require('../../assets/images/logo.jpg')} alt="" srcset=""
                style={{
                    width: "70%"
                }}
                />
                </div>
                <div className="column is-9">
                <HowFTWorkAccordion title="Title 1"> 
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
                </HowFTWorkAccordion>
                <HowFTWorkAccordion title="Title 1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse elementum mauris et porta mattis.
                </p>
                    </HowFTWorkAccordion>
                    <HowFTWorkAccordion title="Title 1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse elementum mauris et porta mattis.
                </p>
                    </HowFTWorkAccordion>
                </div>
            </div>
                
            </section>
            <hr/>
            <br/>
            <section className="finding-teacher-page_section-4">
                <p>section-4</p>
            </section>
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