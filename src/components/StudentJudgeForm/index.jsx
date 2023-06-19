import React, { useState } from 'react'
import StudentJudgeCategoryForm from './StudentJudgeCategoryForm'
import Other from './Other'
import { JudgeFormNames, TeachingAbilityNames, KnowledgeNames, StudentPleasantNames, AttitudeNames, LevelLabelNames, DecideLabelNames } from '../../data'
import '../../assets/styles/StudentJudgeForm.css'
import { useNavigate } from 'react-router-dom'
function StudentJudgeForm() {
const navigate= useNavigate()
const [count, setCount] = useState(0);

const handleClick = num => {
  // 👇️ take the parameter passed from the Child component
  setCount(current => current + num);

  console.log('argument from Child: ', num);
};
    return (
        <form className='student-judge-form_container'>
            <label className="label student-judge-form_label is-size-3">
                Đánh giá giáo viên
            </label>
            <StudentJudgeCategoryForm formName={JudgeFormNames[0]} formContents={TeachingAbilityNames} judgeLevelLabels={LevelLabelNames} radioLabel={JudgeFormNames[0]} handleClick={handleClick} />
            <hr/>
            <StudentJudgeCategoryForm formName={JudgeFormNames[1]} formContents={KnowledgeNames} judgeLevelLabels={LevelLabelNames} radioLabel={JudgeFormNames[1]}/>
            <hr/>
            <StudentJudgeCategoryForm formName={JudgeFormNames[2]} formContents={AttitudeNames} judgeLevelLabels={LevelLabelNames} radioLabel={JudgeFormNames[2]}/>
            <hr/>
            <StudentJudgeCategoryForm formName={JudgeFormNames[3]} formContents={StudentPleasantNames} judgeLevelLabels={DecideLabelNames} />
            <hr/>
            <Other />
            <br/>
            <div className="field is-grouped is-grouped-centered mt-3" id="student-submit_button">
                <button className="button is-info" type="submit">Hoàn thành</button>
                <button className="button is-danger" type="button" onClick={()=>navigate(-1)}>Hủy</button>
            </div>
        </form>


    )
}

export default StudentJudgeForm

//  <form className='student-judge-form_container'>

// <div className="header" id='student-judge-form_header'>

//     <label className="label student-judge-form_label is-size-3">
//         Phiếu đánh giá giáo viên dành cho học viên
//     </label>

//     {page == 0 ? <StudentJudgeCategoryForm formName={JudgeFormNames[page]} formContents={TeachingAbilityNames} judgeLevelLabels={LevelLabelNames}/> :
//         (page == 1 ? <StudentJudgeCategoryForm formName={JudgeFormNames[page]} formContents={KnowledgeNames} judgeLevelLabels={LevelLabelNames}/> :
//             (page == 2 ? <StudentJudgeCategoryForm formName={JudgeFormNames[page]} formContents={AttitudeNames} judgeLevelLabels={LevelLabelNames} /> :
//                 (page == 3 ? <StudentJudgeCategoryForm formName={JudgeFormNames[page]} formContents={StudentPleasantNames} judgeLevelLabels={DecideLabelNames}/> :
//                     <Other />)))}

//     <div className="field is-grouped is-grouped-centered" id='student-pre-next_button'>
//         <button className="button is-grey-dark" type="button"
//             disabled={page == 0}
//             onClick={handlePre}>
//             Trước
//         </button>
//         {page <= JudgeFormNames.length - 1 &&
//             <button className="button is-grey-dark" type="button"
//                 disabled={page == JudgeFormNames.length - 1}
//                 onClick={handleNext}>
//                 Sau
//             </button>}

//     </div>
//     {page == JudgeFormNames.length - 1 &&
//         <div className="field is-grouped is-grouped-centered" id="student-submit_button">
//             <button className="button is-info" type="submit">Hoàn thành</button>
//             <button className="button is-danger" type="button">Hủy</button>

//         </div>

//     }
// </form> 