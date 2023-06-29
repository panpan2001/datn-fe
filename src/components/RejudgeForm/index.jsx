
import React, { useEffect, useState } from 'react'
import StudentJudgeForm from '../StudentJudgeForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateStudentRatingSuccess } from '../../redux/slices/StudentRating/updateStudentRatingSlice'
import { AttitudeNames, JudgeFormNames, KnowledgeNames, StudentPleasantNames, TeachingAbilityNames } from '../../data'
import createAxiosJWT from '../../utils/createInstance'
import StudentJudgeCategoryForm from '../StudentJudgeForm/StudentJudgeCategoryForm'
import { useFormik } from 'formik'
import * as Yup from "yup"
import getStudentRatingById from '../../redux/actions/StudentRating/GéttudentRatingById'
import moment from 'moment'
import UpdateStudentRating from '../../redux/actions/StudentRating/UpdateStudentRating'
function RejudgeForm() {
  const { idStudentRating } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.login.login?.currentUser)
  const axiosJWT = createAxiosJWT(dispatch, user, updateStudentRatingSuccess)
  const accessToken = user?.accessToken
  const account_id = user?._id
  useEffect(() => {
    getStudentRatingById(idStudentRating, dispatch)
  }, [])
  const studentRating = useSelector((state) => state.getStudentRatingById.ratings?.currentRating)
  console.log({ studentRating ,idStudentRating})
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  const [value4, setValue4] = useState(0)
  const [arr1, setArr1] = useState(Array(TeachingAbilityNames.length).fill(0))
  const [arr2, setArr2] = useState(Array(KnowledgeNames.length).fill(0))
  const [arr3, setArr3] = useState(Array(AttitudeNames.length).fill(0))
  const [arr4, setArr4] = useState(Array(StudentPleasantNames.length).fill(0))

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
    }),
    onSubmit: values => {
      const value = {
        // id_teacher: teacher._id,
        id_teacher: studentRating.id_teacher._id,
        id_student: studentRating.id_student._id,
        rating_avg_teacher: parseFloat(((value1 + value2 + value3 + value4) / (arr1.length + arr2.length + arr3.length + arr4.length)).toFixed(2)),
        rating_content_1: value1 / (arr1.length).toFixed(2),
        rating_content_2: value2 / (arr2.length).toFixed(2),
        rating_content_3: value3 / (arr3.length).toFixed(2),
        rating_content_4: value4 / (arr4.length).toFixed(2),
        comment: formik.values.comment,
        id_course: studentRating.id_course._id,
        isDemo: studentRating.isDemo,
        isBadJudge: !studentRating.isBadJudge,
        countBadJudge: studentRating.countBadJudge,
        messageFromSystem: studentRating.messageFromSystem,
        studentUpdatedAt: moment(new Date().getTime()).format("DD/MM/YYYY hh:mm:ss")
      }
      console.log("danh gia  lai (tren giao dien RejudgeForm)", { value },
      typeof value.studentUpdatedAt)
      //  ket qua moment.format("DD/MM/YYYY hh:mm:ss"):  29/06/2023 01:04:06
      // createStudentRating(account_id, value, dispatch, axiosJWT, accessToken, navigate)
      UpdateStudentRating(studentRating._id,account_id,value,axiosJWT,accessToken,dispatch,navigate)
    }

  })
  return (
    <div className='rejudge-form_container container '
      onSubmit={formik.handleSubmit}>
      <nav className="breadcrumb ml-4" aria-label="breadcrumbs" style={{ marginBottom: "0" }}>
        <ul>

          <li><a href={`/profile/${account_id}/judgeTeacher`}>Danh sách giáo viên </a></li>
          <li className="is-active"><a href="#" aria-current="page">Đánh giá lại</a></li>
        </ul>
      </nav>
      {/* <strong className='rejudge-form_title is-size-4'>Đánh giá lại</strong> */}

      {/* <div className='old-rating-info_container container'>
        <strong className='rejudge-form_title is-size-5'>Thông tin đánh giá bạn đã thực hiện: </strong>
      
      </div> */}
      <form>
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
  )
}

export default RejudgeForm