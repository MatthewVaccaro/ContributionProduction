import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../style/prompts.scss";

const ChallengeFooter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <p className="paragraph ">
        If you're needing help,turn on the Assist Mode above for tips,
        direction, and resource links. You can also checkout our{" "}
        <Link to="/resources"> Resources </Link> page for content that will help
        you learn more about UX.
      </p>
      <p className="paragraph ">
        Feel free to reach out to us on Twitter at{" "}
        <a target="_blank" href="https://twitter.com/UseContribution">
          @UseContribution{" "}
        </a>{" "}
        for Feedback, User Testing, Help, or anything else!
      </p>
    </>
  );
};

export default ChallengeFooter;
