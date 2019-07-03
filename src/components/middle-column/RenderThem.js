import React, { useEffect, useState } from "react";

const RenderThem = props => {
  const [managerThatDidItem, setManagerThatDidItem] = useState("");

  useEffect(() => {
    setManagerThatDidItem(props.item.done);
  }, []);

  const toggleDone = (e, x) => {
    e.preventDefault();
    fetch(`https://roxberry-todo-backend.herokuapp.com/todo/${props.item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        done: x
      })
    })
      .then(() => {
        setManagerThatDidItem(x);
      })
      .catch(error => console.log(error));
  };

  const handleClick = e => {
    toggleDone(e, managerThatDidItem ? "" : props.managerInCharge);
    e.preventDefault();
  };

  return (
    <div
      className={`list-item-wrapper ${
        managerThatDidItem ? "done" : "not-done"
      }`}
      onClick={e => handleClick(e)}
    >
      <div className="manager-initials">
        {managerThatDidItem ? managerThatDidItem : ""}
      </div>

      <div className="list-item-title">{props.item.title}</div>
    </div>
  );
};

export default RenderThem;
