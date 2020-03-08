import React, { useState } from "react";

const Toggle = props => {
  const { toggleState, setToggleState } = props;

  const swtich = () => {
    setToggleState(!toggleState);
    console.log(toggleState);
  };

  return (
    <div className="toggle_section">
      <h5>Assist Mode</h5>
      <div
        className={toggleState ? "toggle_container on" : "toggle_container off"}
        onClick={swtich}
      >
        <div className={toggleState ? "disabled" : "textOff"}>OFF</div>
        <div className="swtich"></div>
        <div className={toggleState ? "textOn" : "disabled"}>ON</div>
      </div>
    </div>
  );
};
export default Toggle;
