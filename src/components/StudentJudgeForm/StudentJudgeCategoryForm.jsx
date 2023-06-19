import React, { useState } from 'react'
import JudgeLevelRadioButton from '../JudgeLevelRadioButton'
import '../../assets/styles/StudentJudgeCategoryForm.css'
function StudentJudgeCategoryForm({backgroundColor,table_label,judge_content,handleAddValue,arr1,setValue1,setArr1,value1}) {
return(
    <div className="all-teachers_table">
    <label className='label is-size-5'>{table_label}</label>
    <table class="table is-fullwidth is-hoverable"
        style={{
            backgroundColor: backgroundColor,
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
            {judge_content.map((formName, index) => (
                <tr>
                    <th>{judge_content.indexOf(formName) + 1}</th>
                    <th>{formName}</th>
                    <td>
                        <input
                            id={formName.split(":")[0]}
                            name={judge_content[0] + " " + formName.split(":")[0]}
                            type="number"
                            min={1}
                            max={5}
                            // valueAdd, arr, setValue,setArr,index
                            onChange={(e) => handleAddValue(e.target.value, arr1, setValue1,setArr1, judge_content.indexOf(formName))}
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
            <tr>
                <th></th>
                <th><strong>Trung bình:</strong></th>
                <td>
                    <strong>{value1/arr1.length}</strong>
                </td>
            </tr>
        </tbody>
    </table>

</div>

)
   
}

export default StudentJudgeCategoryForm

// function StudentJudgeForm({ formName, formContent }) {
    // return (
    //     <div className='student-judge-category-form'>
    //         <label className="label student-judge-category-form_label-name is-size-5 mt-3 mb-2">
    //             <strong>{formName} </strong>
    //         </label>

            {/* <div class="table-container"> */}
            {/* <table class="table   is-striped is-narrow is-hoverable is-fullwidth "> */}
                // {formContents.map(formContent =>
                //     <>
                //      <label className="label" id='student-judge-category-form_label-content' onClick={()=>handleClick(num)}>{formContent}</label>
                //      <JudgeLevelRadioButton handleClick1={handleClick1}
                //                          judgeLevelLabels={judgeLevelLabels} 
                //                          formContent={radioLabel+": "+ formContent.split(":")[0]}
                //                          />
                //     </>
                
                            // <tbody>
                            //     <tr className='mt-3 mb-3'>
                            //         <td>
                            //             <label className="label" id='student-judge-category-form_label-content' >{formContent}</label>
                            //         </td>
                                    // <td>
                                        // <JudgeLevelRadioButton 
                                        //  judgeLevelLabels={judgeLevelLabels} 
                                        //  formContent={formContent.split(":")[0]+radioLabel}
                                        //  />
                                        //  </td>
                            //     </tr>
                            // </tbody>
                // )}
                  {/* </table> */}
                {/* </div> */}
//             </div>

       
//     )

// }