import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//assets
import startPoint from "../assets/startPoint.svg";
import levelUp from "../assets/levelUp.svg";
import assistMode from "../assets/assistMode.svg";
import "../style/views.scss";

function Home() {
  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </header>

      <div className="max-container">
        <section className="hero-header">
          <div className="content-container">
            <h1>Gain The Experience You Need To Build Your Career</h1>
            <p>
              Everyone learns differently but we all grow the same, and that is
              through doing. Take on our UX challenges and create truly
              thoughtful pieces for your portfolio!
            </p>
            <div>
              <button>
                <Link to="/all_challenges">View UX Challenges</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="current-state">
          <div className="content-container">
            <h3>Getting Your First Job Is Super Difficult</h3>
            <h4>
              Most new designers are told “Practice learning the process and
              build your own stuff, then you’ll be able to land the job.” This
              is true, but this only opens up more questions. Namely, where do
              you start and what do companies care to see?
            </h4>
          </div>
        </section>

        <div className="content-container">
          <div className="section">
            <div className="content">
              <h3>The Start Point</h3>
              <p>
                Inspiration is hard, and design sites don’t offer the right
                starting point for creating a thoughtful project. All my
                challenges are hand crafted and give you a scenario, real data,
                & a final delieverable that will speak volumes to hiring
                managers!
              </p>
            </div>
            <div className="asset">
              <img src={startPoint} alt="asset" />
            </div>
          </div>

          <div className="section switch">
            <div className="asset">
              <img src={levelUp} alt="asset" />
            </div>
            <div className="content">
              <h3>Level Up +</h3>
              <p>
                We’re not offering you a simple way out, this will still be
                difficult. Each challenge requires hours of work, research, user
                testing, and more. This culminates into high quality portfolio
                pieces and true learnings through DOING! With the end goal of
                leveling up your UX game and getting you a sweet sweet design
                job!
              </p>
            </div>
          </div>
          <div className="section">
            <div className="content">
              <h3>For Any Skill Level</h3>
              <p>
                Yup, the challenges are hard but don’t worry! Every challenge
                has an assist mode with hand written tips, actionable steps, and
                links to lovely articles written by super smater people! Lastly,
                you’re not alone, feel free to DM{" "}
                <a href="https://twitter.com/UseContribution">
                  @UseContribution
                </a>{" "}
                and I’ll do my best to help!
              </p>
            </div>
            <div className="asset">
              <img src={assistMode} alt="asset" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
