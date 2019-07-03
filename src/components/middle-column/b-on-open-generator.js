import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GetItems from "./GetItems";

const BOnOpenGenerator = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    console.log(props.whichOpen);
    console.log(props.subList);
    if (props.whichOpen == props.subList) {
      setHamburger(true);
    } else {
      setHamburger(false);
    }
  }, [props.whichOpen]);

  const handleOnOpenChange = e => {
    e.preventDefault();
    if (props.whichOpen == props.subList) {
      props.setWhichListOpen("");
    } else {
      props.setWhichListOpen(props.subList);
    }
  };

  const renderEachItem = () => {
    if (hamburger) {
      return (
        <GetItems
          key={props.subList}
          managerInCharge={props.managerInCharge}
          category={`${props.whichEvening}-${props.whichOpen}`}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      );
    }
  };

  return (
    <div className="on-open-wrapper">
      <div
        className="header on-open-header"
        onClick={e => {
          handleOnOpenChange(e);
        }}
      >
        <FontAwesomeIcon className="bars" icon="bars" />
        <h3>{props.subList.replace(/([A-Z])/g, " $1").trim()}</h3>
      </div>
      <div>{renderEachItem()}</div>
    </div>
  );
};

export default BOnOpenGenerator;
