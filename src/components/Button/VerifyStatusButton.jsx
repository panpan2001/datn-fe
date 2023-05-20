import React from 'react'

function VerifyStatusButton({name,backgroundColor,color}) {
    return (
        <button class="button "
            style={{
                backgroundColor: `${backgroundColor}`,
                width: "150px",
                height: "32px",
                borderRadius: "30px",
                color: `${color}`
            }}>{name} </button>
    )
}

export default VerifyStatusButton