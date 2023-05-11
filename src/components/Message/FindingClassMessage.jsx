import React from 'react'

function FindingClassMessage({title,content,color}) {
  return (
    <div className="column is-3">
          <article class={`message ${color}`}>
    <div class="message-header">
      <p>{title}</p>
    </div>
    <div class="message-body">
        {content}
    </div>
  </article>
    </div>
  
  )
}

export default FindingClassMessage