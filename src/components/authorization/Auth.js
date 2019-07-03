import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = props => {
  const [userInput, handleChange] = useState("");
  const [whoSignedIn, setWho] = useState("");

  const handleSubmit = e => {
    let capitalUserInput = userInput.toUpperCase();
    props.changeManager(capitalUserInput);
    setWho(`'${capitalUserInput}' signed in`);
    e.preventDefault();
    handleChange("");
  };
  return (
    <div className="auth-wrapper">
      <div className="who-signed-in">
        {whoSignedIn ? whoSignedIn : "Log-In"}
      </div>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          className="input"
          placeholder="enter initials here"
          value={userInput}
          maxLength="3"
          onChange={event => handleChange(event.target.value)}
        />
        <FontAwesomeIcon
          className="sign-in-alt"
          icon="sign-in-alt"
          onClick={e => handleSubmit(e)}
        />
      </form>
    </div>
  );
};

export default Auth;
