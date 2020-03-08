import React, { useEffect, useRef } from "react";
import ChallengesList from "../components/ChallengeList.js";
import "../style/views.scss";
import { gsap } from "gsap";

const Challenges = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let line = useRef(null);
  let line2 = useRef(null);
  let other = useRef(null);

  useEffect(() => {
    gsap.from([line, line2], {
      opacity: 0,
      delay: 0.5,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15
      }
    });
  }, [line, line2]);

  useEffect(() => {
    gsap.from([other], 1, {
      opacity: 0,
      delay: 1,
      ease: "power3.out",
      y: 15,
      stagger: {
        amount: 0.15
      }
    });
  }, [other]);
  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </header>
      <div className="max-container">
        <div className="content-container">
          <section className="explainer">
            <h3 ref={animation => (line = animation)}>Challenges</h3>
            <p ref={animation => (line2 = animation)}>
              Choose the challenge that most inspires you in the industry you’re
              curious about or the technology you aspire to design for. Don’t be
              dissuaded by challenges that seem too difficult, that's where
              you’ll learn the most!
            </p>
          </section>
          <div ref={animation => (other = animation)}>
            <ChallengesList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenges;
