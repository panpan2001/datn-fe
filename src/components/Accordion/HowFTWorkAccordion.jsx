import React, { useState } from "react";

const HowFTWorkAccordion = (props) => {
  const [state, setState] = useState({ cardState: false });

  const toggleCardState = () => {
    setState({ cardState: !state.cardState });
  };

  const { title, children } = props;
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
          <p className="card-header-title">{title}</p>
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
          <div className="content">{children} </div>
        </div>
      </div>
    </div>
  );
};

export default HowFTWorkAccordion