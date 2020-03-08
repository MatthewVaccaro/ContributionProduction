import React from "react";
import "../style/components.scss";
import Challenge from "./Challenge.js";
import { challengesData } from "../data/challengesData.js";

const ChallengeList = () => {
  return (
    <div className="card_container">
      {challengesData.map(cv => {
        return <Challenge data={cv} key={cv.id} />;
      })}
    </div>
  );
};

export default ChallengeList;
