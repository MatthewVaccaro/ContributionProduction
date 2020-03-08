import React from "react";
import ResourcesList from "../components/ResourcesList.js";

const Resources = () => {
  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </header>
      <div className="max-container">
        <div className="content-container">
          <section className="explainer">
            <h3>Resources</h3>
            <p>
              All of these amazing articles are owned by their perspective
              authors. The purpose of this page is to centralize and highlight
              content that would be helpful for designers to leverage learning
              UX skills.
            </p>
          </section>

          <ResourcesList />
        </div>
      </div>
    </>
  );
};
export default Resources;
