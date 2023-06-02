import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from '../layouts/ParentLayouts/UserLayout';
import AdminManagementLayout from '../layouts/ParentLayouts/AdminManagementLayout'
import LoginForm from '../components/LoginForm';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import { useSelector } from 'react-redux';
import StudentJudgeForm from '../components/StudentJudgeForm';
import AcademicInfo from '../components/TeacherCompleteInfoForm/AcademicInfo';
import DegreeInfo from '../components/TeacherCompleteInfoForm/DegreeInfo';
import ImageInfo from '../components/TeacherCompleteInfoForm/ImageInfo';
import TeacherAcademicDegreeInfoForm from '../components/TeacherCompleteInfoForm';
import CurrentClassForm from '../components/CurrentClassForm/StudentCurrentClassForm';
import TeacherCurrentClassForm from '../components/CurrentClassForm/TeacherCurrentClassForm ';
import StudentCurrentClassForm from '../components/CurrentClassForm/StudentCurrentClassForm';

const LandingPage = React.lazy(() => import('../pages/LandingPage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const SignUpPage = React.lazy(() => import('../pages/SignUpPage'));
const DashboardPage = React.lazy(() => import('../pages/DasboardPage'));
const FindingTeacherPage = React.lazy(() => import("../pages/FindingTeacherPage"));
const FindingCoursePage = React.lazy(() => import("../pages/FindingCoursePage"));
const ProfilePage = React.lazy(() => import('../pages/ProfilePage'))
const PersonalInfo = React.lazy(() => import('../components/PersonalInfo'))
const StudentCompleteInfoPage = React.lazy(() => import('../pages/CompleteInfoPage/Student'))
const TeacherCompleteInfoPage = React.lazy(() => import('../pages/CompleteInfoPage/Teacher'))
const DetailTeacherPage = React.lazy(() => import('../pages/DetailTeacherPage'))
const CreateClassPage = React.lazy(() => import('../pages/CreateClassPage'))
const DetailClassPage= React.lazy(() => import('../pages/DetailClassPage'))

const StudentManagementPage = React.lazy(() => import('../pages/StudentManagementPage'));
const CourseManagementPage = React.lazy(() => import('../pages/CourseManagementPage'));
const TeacherManagementPage = React.lazy(() => import('../pages/TeacherManagementPage'));


function ContainerRoutes() {
  const isLoggedIn = useSelector((state) => state.login.login?.isLoggedIn)
  const currentUSer = useSelector((state) => state.login.login?.currentUser)
  const student = useSelector((state) => state.getStudentById.students?.infoStudent)

  const isRegister = useSelector((state) => state.signup.register?.isRegister)
  // console.log(isRegister)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />} >
          {/* user vs non-user can access */}
          <Route index element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage children={<LoginForm />} />} />
          {/* <Route path="/forgotPassword" element={<LoginPage children={<ForgotPasswordForm />} />} /> */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path='/findingTeacher' element={<FindingTeacherPage />} />
          <Route path='/detailTeacher/:id' element={<DetailTeacherPage />} />
            <Route path='/detailTeacher/:id/detailClass/:id' element={<DetailClassPage />} />
           
          
          {/* <Route path='/findingCourse' element={<FindingCoursePage />} /> */}
          {/* user can access */}
          {isRegister && <>

          <Route path='/completeInfoStudent' element={<StudentCompleteInfoPage />} />
          <Route path='/completeInfoTeacher' element={<TeacherCompleteInfoPage />} >
            <Route index element={<AcademicInfo />} />
            <Route path='/completeInfoTeacher/degree' element={<DegreeInfo />} />
            <Route path='/completeInfoTeacher/description' element={<ImageInfo />} />
          </Route>
          </>}
          {isLoggedIn &&
            <>
              <Route path='/profile' element={<ProfilePage />}>
                <Route index element={<PersonalInfo />} />
                {
                  currentUSer.role_name && currentUSer.role_name == 'student' &&
                  <>
                    <Route path='/profile/myclass' element={<PersonalInfo />} />
                    <Route path='/profile/studentClass' element={<StudentCurrentClassForm />} />
                    <Route path='/profile/judgeTeacher' element={<StudentJudgeForm />} />
                  </>
                }
                {
                  currentUSer.role_name && currentUSer.role_name == 'teacher' &&
                  <>
                    <Route path='/profile/teacherClass' element={<TeacherCurrentClassForm />} />
                  </>
                }

              </Route>
              {
                currentUSer.role_name && currentUSer.role_name == 'teacher' &&
                <>
                  <Route path='/createClass' element={<CreateClassPage />} />
                </>
              }
            </>
          }
        </Route>
        {/* {isLoggedIn &&currentUSer.role_name && currentUSer.role_name == 'admin' &&
                // just  admin can access
                <Route path='/admin' element={<AdminManagementLayout />}>
                  <Route index element={<DashboardPage />} />
                  <Route path='/admin/student' element={<StudentManagementPage />} />
                  <Route path='/admin/teacher' element={<TeacherManagementPage />} />
                  <Route path='/admin/course' element={<CourseManagementPage />} />
                  <Route path="/admin/*" element={<NotFound />} />
                </Route>
              } */}

      </Routes>
    </BrowserRouter>
  )
}

export default ContainerRoutes

{/*
const StudentManagementPage = React.lazy(() => import('../pages/StudentManagementPage'));
const CourseManagementPage = React.lazy(() => import('../pages/CourseManagementPage'));
const TeacherManagementPage = React.lazy(() => import('../pages/TeacherManagementPage'));

<Route index element={<SignUpLayout img_singup_link={require('../assets/images/1.jpg')} signup_type_form={<StudentSignUpForm />} />} />
                          <Route path="/signup/teacher" element={<SignUpLayout img_singup_link={require('../assets/images/12.jpg')} signup_type_form={<TeacherSignUpForm />} />} />
                          <Route path="/signup/admin" element={<SignUpLayout img_singup_link={require('../assets/images/18.jpg')} signup_type_form={<AdminSignUpForm />} />} /> 
                        
                          {/* {isLoggedIn &&currentUSer.role_name && currentUSer.role_name == 'admin' &&
                // just  admin can access
                <Route path='/admin' element={<AdminManagementLayout />}>
                  <Route index element={<DashboardPage />} />
                  <Route path='/admin/student' element={<StudentManagementPage />} />
                  <Route path='/admin/teacher' element={<TeacherManagementPage />} />
                  <Route path='/admin/course' element={<CourseManagementPage />} />
                  <Route path="/admin/*" element={<NotFound />} />
                </Route>
              } */}

