import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function VerifyItem() {
    return (
        <div className="columns ">
            <BsFillCheckCircleFill
                style={{
                    fill: "#00c4a7",
                    height: "1.45rem",
                    width: "1.45rem",
                    marginTop: ".25rem"
                }}
            />
            <button class="button "
                style={{
                    backgroundColor: "#00c4a7",
                    width: "150px",
                    height: "32px",
                    borderRadius: "30px",
                    color: "white"
                }}>Đã xác minh </button>
        </div>
    )
}

export default VerifyItem