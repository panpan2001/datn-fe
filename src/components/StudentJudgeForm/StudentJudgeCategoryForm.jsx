import React from 'react'
import JudgeLevelRadioButton from '../JudgeLevelRadioButton'
import '../../assets/styles/StudentJudgeCategoryForm.css'
function StudentJudgeCategoryForm({ formName, formContents,judgeLevelLabels }) {

    return (
        <div className='student-judge-category-form'>
            <label className="label student-judge-category-form_label-name is-size-5 mt-3 mb-2">
                <strong>{formName} </strong>
            </label>

            <div class="table-container">
            <table class="table   is-striped is-narrow is-hoverable is-fullwidth ">
                {formContents.map(formContent =>
                            <tbody>
                                <tr className='mt-3 mb-3'>
                                    <td>
                                        <label className="label" id='student-judge-category-form_label-content' >{formContent}</label>
                                    </td>
                                    <td><JudgeLevelRadioButton  judgeLevelLabels={judgeLevelLabels}/></td>
                                </tr>
                            </tbody>
                )}
                  </table>
                </div>
            </div>

       
    )
}

export default StudentJudgeCategoryForm

function StudentJudgeForm({ formName, formContent }) {


}