import React, { useState } from 'react'
import StudentJudgeCategoryForm from './StudentJudgeCategoryForm'
import Other from './Other'
import { JudgeFormNames, TeachingAbilityNames, KnowledgeNames, StudentPleasantNames, AttitudeNames, LevelLabelNames,DecideLabelNames } from '../../data'
import '../../assets/styles/StudentJudgeForm.css'
function StudentJudgeForm() {

    const [page, setPage] = useState(0)
    const handleNext = () => {
        setPage((currentPage) => currentPage + 1)
    }
    const handlePre = () => {
        setPage((currentPage) => currentPage - 1)
    }
    return (
      
                <form className='student-judge-form_container'>

                    {/* <div className="header" id='student-judge-form_header'> */}

                        <label className="label student-judge-form_label is-size-3">
                            Phiếu đánh giá giáo viên dành cho học viên 
                        </label>

                    {/* </div> */}
                    {/* <div className="body" id='student-judge-form_body'> */}
                        {page == 0 ? <StudentJudgeCategoryForm formName={JudgeFormNames[page]} formContents={TeachingAbilityNames} judgeLevelLabels={LevelLabelNames}/> :
                            (page == 1 ? <StudentJudgeCategoryForm formName={JudgeFormNames[page]} formContents={KnowledgeNames} judgeLevelLabels={LevelLabelNames}/> :
                                (page == 2 ? <StudentJudgeCategoryForm formName={JudgeFormNames[page]} formContents={AttitudeNames} judgeLevelLabels={LevelLabelNames} /> :
                                    (page == 3 ? <StudentJudgeCategoryForm formName={JudgeFormNames[page]} formContents={StudentPleasantNames} judgeLevelLabels={DecideLabelNames}/> :
                                        <Other />)))}
                    {/* </div> */}
                    {/* <div className="footer " id='student-judge-form_footer'> */}
                        <div className="field is-grouped is-grouped-centered" id='student-pre-next_button'>
                            <button className="button is-grey-dark" type="button"
                                disabled={page == 0}
                                onClick={handlePre}>
                                Trước
                            </button>
                            {page <= JudgeFormNames.length - 1 &&
                                <button className="button is-grey-dark" type="button"
                                    disabled={page == JudgeFormNames.length - 1}
                                    onClick={handleNext}>
                                    Sau
                                </button>}

                        </div>
                        {page == JudgeFormNames.length - 1 &&
                            <div className="field is-grouped is-grouped-centered" id="student-submit_button">
                                <button className="button is-info" type="submit">Hoàn thành</button>
                                <button className="button is-danger" type="button">Hủy</button>

                            </div>

                        }
                    {/* </div> */}
                </form>
           

    )
}

export default StudentJudgeForm 