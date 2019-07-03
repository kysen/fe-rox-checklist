import React from "react";

const History = () => {
  return (
    <div>
      <button className="bootun" onClick={() => handleSave()}>
        Simulate day ending
      </button>
      <select
        name="Today"
        value={props.day}
        onChange={e => props.changeDay(e.target.value)}
      >
        <option value={0}>Today</option>
        <option value={1}>Yesterday</option>
        <option value={2}>
          {moment()
            .subtract(2, "days")
            .format("dddd")}
        </option>
        <option value={3}>
          {moment()
            .subtract(3, "days")
            .format("dddd")}
        </option>
        <option value={4}>
          {moment()
            .subtract(4, "days")
            .format("dddd")}
        </option>
        <option value={5}>
          {moment()
            .subtract(5, "days")
            .format("dddd")}
        </option>
        <option value={6}>
          {moment()
            .subtract(6, "days")
            .format("dddd")}
        </option>
        <option value={7}>
          {moment()
            .subtract(7, "days")
            .format("dddd")}
        </option>
      </select>
    </div>
  );
};

export default History;
