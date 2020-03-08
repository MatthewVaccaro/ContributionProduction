import React from "react";
import "../style/components.scss";
import Resources from "./Resources";
import { resourcesData } from "../data/resourcesData.js";

const ResourcesList = () => {
  return (
    <div className="max-container">
      <div className="grid_container">
        {resourcesData.map(cv => {
          return <Resources data={cv} key={cv.id} />;
        })}
      </div>
    </div>
  );
};

export default ResourcesList;
