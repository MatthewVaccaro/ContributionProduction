import React from "react";
import "../style/components.scss";

const Resources = props => {
  console.log(props.data.link);
  return (
    <>
      <a target="_blank" href={props.data.link}>
        <div className="resourceCard">
          <div className="tag">
            <span className="circle">• </span>
            {props.data.category}
          </div>
          <h3>{props.data.title}</h3>
          <p>By: {props.data.author} </p>
        </div>
      </a>
    </>
  );
};

export default Resources;
