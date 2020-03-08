import React, { useEffect, useRef } from "react";
import ResourcesList from "../components/ResourcesList.js";
import { gsap } from "gsap";

const Resources = () => {
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
            <h3 ref={animation => (line = animation)}>Resources</h3>
            <p ref={animation => (line2 = animation)}>
              All of these amazing articles are owned by their perspective
              authors. The purpose of this page is to centralize and highlight
              content that would be helpful for designers to leverage learning
              UX skills.
            </p>
          </section>
          <div ref={animation => (other = animation)}>
            <ResourcesList />
          </div>
        </div>
      </div>
    </>
  );
};
export default Resources;
