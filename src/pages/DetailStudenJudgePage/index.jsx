
import React, { useEffect, useState } from 'react'
import StudentJudgeForm from '../../components/StudentJudgeForm'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import getTeacherById from '../../redux/actions/Teacher/GetTeacherById'
import { AttitudeNames, JudgeFormNames, KnowledgeNames, StudentPleasantNames, TeachingAbilityNames } from '../../data'
import { useFormik } from 'formik'
import * as Yup from "yup"
import StudentJudgeCategoryForm from '../../components/StudentJudgeForm/StudentJudgeCategoryForm'
import createStudentRating from '../../redux/actions/StudentRating/CreateStudentRating'
import { createStudentRatingSuccess } from '../../redux/slices/StudentRating/createStudentRating'
import createAxiosJWT from '../../utils/createInstance'
import getCoursebyId from '../../redux/actions/Course/GetCoursebyId'
import getDemoCourseByStudentId from '../../redux/actions/DemoCourseStudent/GetDemoCourseStudentByStudentId'
import { getDemoCourseByStudentIdSuccess } from '../../redux/slices/DemoCourseStudent/getDemoCourseByStudentId'
import { getCourseStudentByStudentIdSuccess } from '../../redux/slices/CourseStudent/getCourseStudentByStudentId'
import getCourseStudentByStudentId from '../../redux/actions/CourseStudent/GetCourseStudentByStudentId'
function DetailStudentJudgepage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { idTeacher } = useParams()
    console.log({ idTeacher })
    const student = useSelector((state) => state.getStudentByAccountId.students?.infoStudent)
    const user = useSelector((state) => state.login.login?.currentUser)
    const axiosJWT = createAxiosJWT(dispatch, user, createStudentRatingSuccess)
    const accessToken = user?.accessToken
    const axiosJWTDemoCourse = createAxiosJWT(dispatch, user, getDemoCourseByStudentIdSuccess)
    const axiosJWTCourse = createAxiosJWT(dispatch, user, getCourseStudentByStudentIdSuccess)
    const account_id = user?._id
    useEffect(() => {
        getDemoCourseByStudentId(student._id, dispatch, accessToken, axiosJWTDemoCourse)
        getCourseStudentByStudentId(student._id, dispatch, accessToken, axiosJWTCourse)
        getTeacherById(idTeacher, dispatch)
    }, [])
    const demoClasses = useSelector((state) => state.getDemoCourseByStudentId.demoCourse?.currentDemoCourse)
    const officiaClasses = useSelector((state) => state.getCourseStudentByStudentId.officialCourses?.currentCourse)
        const teacher = useSelector((state) => state.getTeacherById?.teacher?.currentTeacher)
 
        
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [value4, setValue4] = useState(0)
    const [arr1, setArr1] = useState(Array(TeachingAbilityNames.length).fill(0))
    const [arr2, setArr2] = useState(Array(KnowledgeNames.length).fill(0))
    const [arr3, setArr3] = useState(Array(AttitudeNames.length).fill(0))
    const [arr4, setArr4] = useState(Array(StudentPleasantNames.length).fill(0))
    const [checked, setChecked] = useState(true)

    const handleAddValue = (valueAdd, arr, setValue, setArr, index) => {
        console.log({ valueAdd })
        const add = parseInt(valueAdd)
        const newArr1 = [...arr]
        newArr1[index] = add
        if (add >= 1 && add <= 5) {
            const sum = newArr1.reduce((a, b) => a + b, 0)
            setValue(sum)
            setArr(newArr1)
        }
    }
    const formik = useFormik({
        initialValues: {
            id_teacher: "",
            id_student: "",
            rating_avg_teacher: 0,
            rating_content_1: 0,
            rating_content_2: 0,
            rating_content_3: 0,
            rating_content_4: 0,
            comment: "",
            id_course: "",
            isDemo: ""
        },
        validationSchema: Yup.object({
            comment: Yup.string().required("Chưa điền vào trường này!").min(3, "Tối thiểu 3 kí tự."),
            isDemo: Yup.string().required("Chưa điền vào trường này!")
        }),
        onSubmit: values => {
            const value = {
                id_teacher: teacher._id,
                id_student: student._id,
                rating_avg_teacher: parseFloat(((value1 + value2 + value3 + value4) / (arr1.length + arr2.length + arr3.length + arr4.length)).toFixed(2)),
                rating_content_1: value1 / (arr1.length).toFixed(2),
                rating_content_2: value2 / (arr2.length).toFixed(2),
                rating_content_3: value3 / (arr3.length).toFixed(2),
                rating_content_4: value4 / (arr4.length).toFixed(2),
                comment: formik.values.comment,
                // id_course: course._id,
                isDemo: formik.values.isDemo==="true"?true:false
            }
            console.log("danh gia (tren giao dien)", { value })
            createStudentRating(account_id, value, dispatch, axiosJWT, accessToken, navigate)
        }

    })
    
    if (!teacher) return null;
    return (
        <div className='judge-teacher-container' style={{ display: "flex", flexDirection: "column", margin: '1rem' }}>
            <nav class="breadcrumb ml-4" aria-label="breadcrumbs" style={{ marginBottom: "0" }}>
                <ul>
                    {/* <Link to={navigate(-1)}>Giáo viên của tôi</Link> */}
                    {/* <li><a href="#">Đánh giá giáo viên</a></li> */}
                    <li><a href={`/profile/${account_id}/judgeTeacher`}>Giáo viên của tôi</a></li>
                    <li class="is-active"><a href="#" aria-current="page">Đánh giá giáo viên</a></li>
                </ul>
            </nav>
            <div className="create-class-select-option"
                    style={{
                        display: 'flex',
                        flexDirection: "row",
                        gap: "1rem",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <strong className="is-size-5">Bạn muốn: </strong>
                    <div className="control"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: ".25rem"
                        }}>
                            {demoClasses.filter(item=>item.id_demo_course.id_course.id_teacher._id== idTeacher) && 
                             <label className="radio">
                             <input
                                 type="radio"
                                 name="isDemo"
                                 id="false"
                                 // defaultChecked={true}
                                 value={"false"}
                                 onChange={formik.handleChange}
                             />
                             Đánh giá khóa học chính thức
                         </label>
                            }
                       {officiaClasses.filter(item=>item.id_course.id_teacher._id== idTeacher) &&
                       <label className="radio ml-6">
                       <input type="radio"
                           name="isDemo"
                           id="true"
                           // checked={!checked}
                           value={"true"}
                           onChange={formik.handleChange}
                       />
                       Đánh giá khóa học thử
                   </label>
                       }
                        
                        {formik.errors.isDemo && <div className="help is-danger is-size-6 ml-4">{formik.errors.isDemo}</div> }
                    </div>
                </div>
            <div style={{ display: "flex", flexDirection: "row", margin: '0 1rem', paddingBottom: "2rem" }}>
               
                <div className="column is-3 teacher-short-info pr-4">
                    <div class="card teacher-short-info_judge-card" style={{ position: "sticky", top: "2rem" }}>
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src={teacher.personal_image} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">

                                <div class="media-content">
                                    <p class="title is-4">{teacher.account_id.full_name}</p>

                                </div>
                            </div>

                            <div class="content" style={{ textAlign: "left", marginRight: "0rem" }}>
                                <p class="subtitle is-6"><strong>Email:</strong>{teacher.account_id.email}</p>
                                <p class="subtitle is-6"><strong>SDT: </strong>{teacher.account_id.phone_number}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="column is-9 teacher-judge-form pl-6 " onSubmit={formik.handleSubmit}>


                    {/* <div className="all-teachers_table">
                        <label className='label is-size-5'>{JudgeFormNames[0]}</label>
                        <table class="table is-fullwidth is-hoverable"
                            style={{
                                backgroundColor: "#B7E3FF",
                                borderRadius: "10px"
                            }}>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên tiêu chí</th>
                                    <th>Số điểm </th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: "left" }}>
                                {TeachingAbilityNames.map((formName, index) => (
                                    <tr>
                                        <th>{TeachingAbilityNames.indexOf(formName) + 1}</th>
                                        <th>{formName}</th>
                                        <td>
                                            <input
                                                id={formName.split(":")[0]}
                                                name={TeachingAbilityNames[0] + " " + formName.split(":")[0]}
                                                type="number"
                                                min={1}
                                                max={5}
                                                // valueAdd, arr, setValue,setArr,index
                                                onChange={(e) => handleAddValue(e.target.value, arr1, setValue1,setArr1, TeachingAbilityNames.indexOf(formName))}
                                            />
                                        </td>
                                    </tr>

                                ))}
                                <tr>
                                    <th></th>
                                    <th><strong>Tổng điểm</strong></th>
                                    <td>
                                        <strong>{value1}</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div> */}
                    {/* backgroundColor,table_label,judge_content,handleAddValue,arr1,setValue1,setArr1,value1 */}
                    <StudentJudgeCategoryForm
                        backgroundColor={"#B7E3FF"}
                        table_label={JudgeFormNames[0]}
                        judge_content={TeachingAbilityNames}
                        handleAddValue={handleAddValue}
                        arr1={arr1}
                        setValue1={setValue1}
                        setArr1={setArr1}
                        value1={value1}
                    />
                    {/* {value1} */}


                    <hr />
                    <StudentJudgeCategoryForm
                        backgroundColor={"#B2FFDA"}
                        table_label={JudgeFormNames[1]}
                        judge_content={KnowledgeNames}
                        handleAddValue={handleAddValue}
                        arr1={arr2}
                        setValue1={setValue2}
                        setArr1={setArr2}
                        value1={value2}
                    />
                    <hr />
                    <StudentJudgeCategoryForm
                        backgroundColor={"#FFEBB2"}
                        table_label={JudgeFormNames[2]}
                        judge_content={AttitudeNames}
                        handleAddValue={handleAddValue}
                        arr1={arr3}
                        setValue1={setValue3}
                        setArr1={setArr3}
                        value1={value3}
                    />
                    <hr />
                    <StudentJudgeCategoryForm
                        backgroundColor={"#BDC0FF"}
                        table_label={JudgeFormNames[3]}
                        judge_content={StudentPleasantNames}
                        handleAddValue={handleAddValue}
                        arr1={arr4}
                        setValue1={setValue4}
                        setArr1={setArr4}
                        value1={value4}
                    />
                    <div style={{
                        backgroundColor: "#FFC67E",
                        borderRadius: "10px",
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                        padding: "1rem",
                    }}>
                        <div>
                            <strong className=' is-size-5 mr-3'>
                                Tổng điểm đánh giá của bạn:
                            </strong>
                            <strong className=' is-size-5'>
                                {(value1 + value2 + value3 + value4)}
                            </strong>
                        </div>
                        <div>
                            <strong className=' is-size-5 mr-3'>
                                Trung bình điểm đánh giá của bạn:
                            </strong>
                            <strong className=' is-size-5'>
                                {((value1 + value2 + value3 + value4) / (arr1.length + arr2.length + arr3.length + arr4.length)).toFixed(2)}

                            </strong>
                        </div>

                    </div>

                    <div className='other-form_container is-centered mt-4' style={{
                        width: "100%",
                        padding: "0rem 0rem 0rem 1rem",
                    }} >
                        <label className='label is-size-5'>Bình luận của bạn </label>
                        <textarea
                            class="textarea is-info"
                            id="comment"
                            name="comment"
                            placeholder="Bình luận của bạn"
                            value={formik.values.comment}
                            onChange={formik.handleChange}
                        ></textarea>
                        {formik.errors.comment && <p className="help is-danger">{formik.errors.comment}</p>
                        }
                    </div>

                    <div className="field is-grouped is-grouped-centered mt-6" id="student-submit_button"
                        style={{ backgroundColor: "inherit" }}>
                        <button className="button is-info" type="submit" >Hoàn thành</button>
                        <button className="button is-danger" type="button" onClick={() => navigate(-1)}>Hủy</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default DetailStudentJudgepage