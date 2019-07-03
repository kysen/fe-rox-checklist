import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Evening from "./nEvening";
// import HistoryCheck from "../history/history-check";
import Auth from "../authorization/Auth";

const NChecklist = props => {
  const [chevron, setChev] = useState(false);
  const renderTOD = () => {
    if (chevron) {
      let keys = Object.keys(props.toD);
      let values = Object.values(props.toD);
      return keys.map((key, index) => {
        return (
          <Evening
            key={key}
            evening={key}
            timeOfDayLists={values[index]}
            whichEvening={props.whichEvening}
            setWhichEveningOpen={props.setWhichEveningOpen}
          />
        );
      });
    }
  };

  return (
    <div className="side-bar-container">
      <div className="side-bar-top-bar">
        <Auth
          changeManager={props.changeManager}
          managerInCharge={props.managerInCharge}
        />
        <div className="side-bar-title-wrapper">
          <div className="title-click-box" onClick={() => setChev(!chevron)}>
            <div className="side-bar-title">Today</div>
            <div className="chevron-wrapper">
              {chevron ? (
                <FontAwesomeIcon className="chevron" icon="chevron-down" />
              ) : (
                <FontAwesomeIcon className="chevron" icon="chevron-up" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="sb-all-evening-wrapper">{renderTOD()}</div>
    </div>
  );
};

export default NChecklist;
