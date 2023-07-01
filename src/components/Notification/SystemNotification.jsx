import React from 'react'

function SystemNotification({setShow, show, teacherId}) {
    console.log("SystemNotification",show)
  return (
    <div style={{ display: `${show == 3 ? 'block' : 'none'}` }}>SystemNotification</div>
  )
}

export default SystemNotification