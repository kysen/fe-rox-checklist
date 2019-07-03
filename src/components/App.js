import Checklist from "./nav-checklist/nChecklist";
import BChecklist from "./middle-column/bChecklist";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faSpinner,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  far,
  faBars,
  faSpinner,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faSignInAlt
);

const App = () => {
  const [managerInCharge, changeManager] = useState("");
  const [day, changeDay] = useState(0);
  const [whichEvening, setWhichEveningOpen] = useState("");
  const [whichOpen, setWhichListOpen] = useState("");

  const toD = {
    Morning: ["OnOpen", "BeforeLeaving"],
    MidShift: ["Checklist", "BeforeLeaving"],
    Closing: ["First", "Backroom", "Kitchen", "Bathroom", "Lobby", "Managers"]
  };

  return (
    <div className="App">
      <div className="left-column">
        <Checklist
          toD={toD}
          managerInCharge={managerInCharge}
          changeManager={changeManager}
          day={day}
          changeDay={changeDay}
          whichEvening={whichEvening}
          setWhichEveningOpen={setWhichEveningOpen}
        />
      </div>
      <BChecklist
        toD={toD}
        whichEvening={whichEvening}
        whichOpen={whichOpen}
        managerInCharge={managerInCharge}
        setWhichListOpen={setWhichListOpen}
      />
    </div>
  );
};

export default App;
