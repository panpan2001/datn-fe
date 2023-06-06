import React, { useState } from "react";
import moment from 'moment'


const StudentClassAccordion = ({data}) => {
    const register_date= moment(data.createdAt).format('DD/MM/YYYY')

  const [state, setState] = useState({ cardState: false });

  const toggleCardState = () => {
    setState({ cardState: !state.cardState });
  };


  const { cardState } = state;

  return (
    <div className="column ">
      <div className="card " aria-hidden={cardState ? "false" : "true"}
       style={{
        backgroundColor: " rgb(167 235 246)",
    }}
      >
        <header
          className="card-header"
          style={{ cursor: "pointer" }}
          onClick={toggleCardState}
        >
          <p className="card-header-title">{data.id_course.name}</p>
          <a className="card-header-icon">
            <span
              className="icon"
              style={{
                transform: cardState ? null : "rotate(180deg)",
                transition: "transform 250ms ease-out"
              }}
            >
              <i className="fa fa-angle-up"></i>
            </span>
          </a>
        </header>
        <div
          className="card-content"
          style={{
            maxHeight: cardState ? 1000 : 0,
            padding: cardState ? null : 0,
            overflow: "hidden",
            transition: "max-height 250ms ease",
            transition: "padding 250ms ease"
          }}
        >
          <div className="content"
          style={{textAlign: 'left'}}
          >{data._id} </div>
        </div>
      </div>
    </div>
  );
};

export default StudentClassAccordion