import React, { useState, useEffect } from "react";

import BOnOpenGenerator from "./b-on-open-generator";

const BEvening = props => {
  const renderSubLists = () => {
    return props.timeOfDayLists.map((subList, index) => {
      return (
        <BOnOpenGenerator
          key={index}
          setOnOpenList={props.setOnOpenList}
          subList={subList}
          whichEvening={props.whichEvening}
          whichOpen={props.whichOpen}
          setWhichListOpen={props.setWhichListOpen}
          managerInCharge={props.managerInCharge}
        />
      );
    });
  };

  return (
    <div className="evening-wrapper">
      <div className="evening-header header">
        <div>{props.evening.replace(/([A-Z])/g, " $1").trim()}</div> {/*  */}
      </div>
      {renderSubLists()}
    </div>
  );
};

export default BEvening;
