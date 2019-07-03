import React, { useState, useEffect } from "react";

import BEvening from "./bEvening";

const BChecklist = props => {
  const renderAll = () => {
    let keys = Object.keys(props.toD);
    let values = Object.values(props.toD);
    return keys.map((key, index) => {
      if (key === props.whichEvening) {
        return (
          <BEvening
            key={index}
            evening={key}
            timeOfDayLists={values[index]}
            whichEvening={props.whichEvening}
            whichOpen={props.whichOpen}
            setWhichListOpen={props.setWhichListOpen}
            managerInCharge={props.managerInCharge}
          />
        );
      }
    });
  };

  return <div className="checklist-container">{renderAll()}</div>;
};

export default BChecklist;
