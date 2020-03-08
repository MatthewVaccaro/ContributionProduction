import React from "react";
import "../style/components.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";

const Challenge = props => {
  return (
    <div>
      <div className="card">
        <div className="tag">
          <span className="circle">• </span>
          {props.data.industry}
        </div>
        <h3>{props.data.title}</h3>

        <p>{props.data.info}</p>

        <Link
          to={{
            pathname: `/challenge/${props.data.id}`
          }}
        >
          <button className="link_btn">View Challenge</button>
        </Link>
      </div>
    </div>
  );
};

export default Challenge;
