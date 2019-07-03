import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RenderThem from "./RenderThem";

const GetItems = props => {
  const [checklistArray, fillArray] = useState([]);

  useEffect(() => {
    props.setIsLoading(true);
    fetch("https://roxberry-todo-backend.herokuapp.com/todos")
      .then(response => response.json())
      .then(data => {
        data = data.filter(item => {
          if (item.category === props.category) {
            return item;
          }
        });
        data = data.sort(function(a, b) {
          return a.id - b.id;
        });
        fillArray(data);
        props.setIsLoading(false);
      });
  }, []);

  const renderitem = lis => {
    return lis.map(item => {
      return (
        <RenderThem
          managerInCharge={props.managerInCharge}
          key={item.id}
          item={item}
        />
      );
    });
  };

  return (
    <div>
      {renderitem(checklistArray)}
      {props.isLoading ? (
        <div className="content-loader">
          <FontAwesomeIcon icon="spinner" spin />
        </div>
      ) : null}
    </div>
  );
};

export default GetItems;
