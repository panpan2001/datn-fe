// const BASE_URL = "http://localhost:3001/api"
const BASE_URL = window.location.origin.replace(":3000",":3001/api")
console.log({ BASE_URL })
const UPLOAD_IMG_URL= "https://api.cloudinary.com/v1_1/djt76m22x/image/upload"

const VIDEO_SDK_URL= "https://api.videosdk.live/v2"

const LoginApi = BASE_URL + "/auth/login"
const RegisterApi = BASE_URL + "/auth/register"
const RefreshTokenApi = BASE_URL + "/auth/refresh"
const LogoutApi = BASE_URL + "/auth/logout"
const AccountApi = BASE_URL + "/accounts/"
const StudentApi = BASE_URL + "/students/"
const TeacherApi = BASE_URL + "/teachers/"
const TeacherAcademicApi = BASE_URL + "/teacherAcademics/"
const TeacherDegreeApi= BASE_URL + "/teacherDegrees/"
const CourseCategoryApi = BASE_URL + "/courseCategories/"
const CourseApi = BASE_URL + "/courses/"
const DemoCourseStudentApi= BASE_URL + "/demoCourseStudents/"
const CourseStudentApi= BASE_URL + "/courseStudents/"
const DemoCourseApi= BASE_URL+"/demoCourses/"
const StudentRatingApi= BASE_URL+"/studentRatings/"


export {
   UPLOAD_IMG_URL,
   VIDEO_SDK_URL,
   LoginApi,
   RegisterApi,
   AccountApi,
   RefreshTokenApi,
   LogoutApi,
   StudentApi,
   TeacherApi,
   TeacherAcademicApi,
   TeacherDegreeApi,
   CourseCategoryApi,
   CourseApi,
   DemoCourseStudentApi,
   CourseStudentApi,
   DemoCourseApi,
   StudentRatingApi
}