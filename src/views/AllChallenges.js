import React from "react";
import ChallengesList from "../components/ChallengeList.js";
import "../style/views.scss";

const Challenges = () => {
  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </header>
      <div className="max-container">
        <div className="content-container">
          <section className="explainer">
            <h3>Challenges</h3>
            <p>
              Choose the challenge that most inspires you in the industry you’re
              curious about or the technology you aspire to design for. Don’t be
              dissuaded by challenges that seem too difficult, that's where
              you’ll learn the most!
            </p>
          </section>

          <ChallengesList />
        </div>
      </div>
    </>
  );
};

export default Challenges;
