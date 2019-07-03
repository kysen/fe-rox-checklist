import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EveningList = props => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (props.whichEvening == props.evening) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.whichEvening]);

  const handleEveningChange = e => {
    e.preventDefault();
    if (props.whichEvening == props.evening) {
      props.setWhichEveningOpen("");
    } else {
      props.setWhichEveningOpen(props.evening);
    }
  };

  return (
    <div className="sb-evening-item-wrapper">
      <div
        className={`sb-evening-header ${active ? "active" : ""}`}
        onClick={e => handleEveningChange(e)}
      >
        {active ? (
          <FontAwesomeIcon className="evening-chev" icon="chevron-right" />
        ) : (
          <FontAwesomeIcon className="evening-chev" icon="chevron-down" />
        )}
        <div>{props.evening.replace(/([A-Z])/g, " $1").trim()}</div> {/*  */}
      </div>
    </div>
  );
};

export default EveningList;
