const BASE_URL = "http://localhost:3001/api"
const UPLOAD_IMG_URL= "https://api.cloudinary.com/v1_1/djt76m22x/image/upload"


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


export {
   UPLOAD_IMG_URL,
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
   DemoCourseStudentApi
}