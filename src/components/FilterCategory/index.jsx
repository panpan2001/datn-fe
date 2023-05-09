import React from 'react'

function FilterCategory () {
  return (
    <div className="column is-3">
                                <p>danh gia</p>
                                <div className=" field select ">
                                    <select >
                                        <option value="CEFR Level A1 - Beginner">CEFR Level A1 - Beginner</option>
                                        <option value="CEFR Level A2 - Pre-intermediate ">CEFR Level A2 - Pre-intermediate</option>
                                        <option value="CEFR Level B1 - Intermediate">CEFR Level B1 - Intermediate</option>
                                        <option value="CEFR Level B2 - Upper-Intermediate">CEFR Level B2 - Upper-Intermediate</option>
                                        <option value="CEFR Level C1 - 	Advanced">CEFR Level C1 - 	Advanced</option>
                                        <option value="CEFR Level C2 - Mastery">CEFR Level C2 - Mastery</option>
                                    </select>
                                </div>
                            </div>
  )
}

export default FilterCategory 