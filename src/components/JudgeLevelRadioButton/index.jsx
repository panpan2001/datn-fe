import React from 'react'
import '../../assets/styles/JudgeLevelRadioButton.css'
function JudgeLevelRadioButton({ judgeLevelLabels }) {
  const label_names= judgeLevelLabels
  return (
    <div class="control " id='judge-level_control'>
      {label_names.map(label_name => 
         <label class="radio" id={label_name}>
         <input type="radio" name="judge-level_radio_button" />
         {label_name}
       </label>
      )}
     
    
    </div>
  )
}

export default JudgeLevelRadioButton 