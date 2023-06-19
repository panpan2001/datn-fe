import React from 'react'
import '../../assets/styles/JudgeLevelRadioButton.css'
function JudgeLevelRadioButton({ judgeLevelLabels,formContent,handleClick1 }) {
  const label_names= judgeLevelLabels
  
  return (
    <div class="control " id='judge-level_control'>
      {label_names.map(label_name => 
        //  <label class="radio" id={label_name}>
        <>
        <input type="radio" name={formContent} value={label_names.indexOf(label_name)+1}
         onChange={(e)=>handleClick1(e.target.value)}
         />
         {label_names.indexOf(label_name)+1}
        </>
         
      //  </label>
      )}
     
    
    </div>
  )
}

export default JudgeLevelRadioButton 