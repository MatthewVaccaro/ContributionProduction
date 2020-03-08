import React, { useState, useEffect } from "react";
import Toggle from "../../components/Toggle.js";
import "../../style/prompts.scss";
import ChallengeFooter from "../../components/challengeFooter";

const Ch_03 = () => {
  const [toggleState, setToggleState] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </header>

      <div className="max-container">
        <div className="content-container">
          <div className="challenge-header-container">
            <div className="challenge-header-content">
              <h2>Breath New Life (Pair Project)</h2>
              <p className="paragraph">
                Industry <span>Music</span> | Device <span>Your Choice</span>
              </p>
            </div>
            <div>
              <Toggle
                toggleState={toggleState}
                setToggleState={setToggleState}
              />
            </div>
          </div>
          {/* Content Header Ends */}
          <section className="section-container">
            <h3>Project Overview:</h3>
            <p className="paragraph">
              Throughout the last two years, the company you work for has made a
              name for its self by being one of the first online-only banking
              applications. As time has caught up with the company more and more
              banks have followed in suit. The last six months have been very
              focused on refining the product but there has been no improvement
              in acquisition or retention. Based on decisions made by VPs and
              board members the company wants to make a large push to
              differentiate themselves and focus more on a particular
              market/people group to improve our offering. The news of this
              initiative is explained to you by your PM in this morning's
              meeting...
            </p>

            <div className={toggleState ? "hint" : "hidden"}>
              The company believes their lack of focus on a people group is what
              is making their numbers stagnate. Your set of features work for
              the generic public, but so does everyone else. The solution is not
              to build more features, but to find an under served people group
              and provide them value.
              <br />
              <br />
              Actionable Steps: 1. Understand you're current value prop. 2.
              Analyze the target market. 3. Identify different audiences &
              create different segments? 4. Repeat until you have a group of
              potential audiences.
              <br />
              <br />
              Helpful UX articles:{" "}
              <a href="https://www.bitcatcha.com/blog/how-to-define-your-users-find-them-solve-their-problems/">
                How To Define Your Users
              </a>{" "}
              |{" "}
              <a href="https://hackernoon.com/target-audience-research-users-research-part-1-8470753deb9e">
                Target Audience Research
              </a>
            </div>
            <p className="paragraph bar">
              I am sure by now you have heard something about the new
              initiative; it's very exciting and the board is pushing for it to
              start right away. The last few days, Jerry and I have had a few
              meetings with leadership and they have granted us a lot of leeway
              on how to go about this initiative.
              <br />
              <br />
              The majority of this project is around finding a new audience we
              can serve more directly. This doesn't mean we're removing any
              features, we will continue to still be a bank and serve the
              general public. On top of this, the board wants us to come up with
              a single or set of features as our first push for this new found
              audience.
              <br />
              <br />
              There is no timeline for this project just yet, but we want to
              treat this with a level of urgency. We also want all of you to
              pair up and tackle this project two by two. This doesn't mean
              splitting up the work, but going through each step together and
              having a constant feedback loop. Lastly, be prepared to make a
              case for your team's purposed audience and feature(s).
              <br />
              <br />
              In preparation, we have supplied some data for you all to use. If
              you feel it's necessary, conduct more research. I'll be around if
              anyone needs anything, best of luck!
            </p>
            <div className={toggleState ? "hint" : "hidden"}>
              Keep in mind you need to remain a banking application and do the
              things that is expected of a bank. When thinking about new
              features you must remember what a bank can & can't leverage.
              Lastly remember the feature is not the goal, providing value to
              your new audience is!
              <br />
              <br />
              Actionable Steps: 1. Define Your Audience. 2. Hypothesize the
              audience's major pain point(s). 3. Conduct user interviews to
              validate your assumptions and or learn more about your audience.
              <br />
              <br />
              Helpful UX Articles:
              <a href="https://www.interaction-design.org/literature/article/product-thinking-is-problem-solving">
                Product Thinking is Problem Solving
              </a>
            </div>
          </section>

          <section className="section-container">
            <h3>Data Sets & Research</h3>

            <p className="paragraph ">
              Abigale & Jerry have supplied you with some of their research to
              help you with your project. All data presented is real and can be
              sited and leveraged.
            </p>
            <h4>Savings & Debt</h4>

            <ul>
              <li>
                40% of couples with combined finances have committed{" "}
                <a href="https://en.wikipedia.org/wiki/Financial_infidelity">
                  financial infidelity
                </a>{" "}
              </li>
              <li>
                35% of adults have debt in collections reported for a credit
                card in their credit files
              </li>
              <li>
                36% of young adults (18-34)have received financial help from
                family not living in their household
              </li>
              <li>
                21 of adults have unpaid past-due medical bills & 28% skipped
                medical service due to fear of cost
              </li>
              <li>
                33% of adults struggle to scrounge up $1,000 for an emergency
              </li>
              <li>40% of adults have less than $10,000 saved for retirement</li>
            </ul>

            <h4>Budgeting</h4>

            <ul>
              <li>32% of adults have & maintain a household budget</li>
              <li>
                The average household spends 56% of their food budget on
                groceries and 44% on dining out
              </li>
              <li>
                40% of adults spend less than their earnings, 38% lived paycheck
                to paycheck and 18% consistently spend more than they earned.
              </li>
              <li>30% of adults have a long-term financial plan.</li>
            </ul>

            <h4>Education</h4>

            <ul>
              <li>
                30% of adults can answer three simple financial questions about
                inflation
              </li>
              <li>35% of adults don't comprehend the financial risk</li>
              <li>
                16.4% of students are required to take personal finance class in
                school
              </li>
              <li>
                76% of Millennial lack basic finical knowledge with 69% boasting
                high competency
              </li>
              <li>
                60% of adults say "They just don't know how to become
                financially secure"
              </li>
            </ul>

            <div className={toggleState ? "hint" : "hidden"}>
              There is a lot of data above, but not nearly enough to make any
              decisions. Each grouping and singular data point can give you an
              audience to think about. As you venture down these paths you need
              to ensure you're asking the right questions & thinking of ways to
              have your questions answered.
              <br />
              <br />
              Actionable Steps: 1. Synthesize the data given above into any
              framework of your choosing. 2. Capture your questions, hypotheses,
              and ideas. 3. Leverage everything you have captured and start
              exploring, looking for answers to your questions & hypotheses. 4.
              Repeat.
              <br />
              <br />
              Helpful UX articles:{" "}
              <a href="https://uxdesign.cc/designing-a-chair-a-story-about-junior-designers-vs-senior-designers-24be40b1d2cb">
                Asking the right questions
              </a>{" "}
              |{" "}
              <a href="https://www.uxframeworks.design/frameworks/all-frameworks">
                Frameworks
              </a>{" "}
              |{" "}
              <a href="https://uxplanet.org/6-tips-for-better-user-interviews-ad925afc52df">
                User Interviews & Testing
              </a>
            </div>
          </section>
          <section className="section-container">
            <h3>Flagship App Specs</h3>

            <p className="paragraph ">
              The banking app has basic finical features most modern
              institutions utilize. The online-only mobile app allows you to
              view, create, and close all accounts. See transaction history and
              specify date ranges for searching needs. View & pay loans
              associated with the bank. Lastly a support section with a robust
              FAQ and messaging portal for help with a unique problem. The
              application is available on all platforms and the web with the
              latest security.
            </p>

            <div className={toggleState ? "hint" : "hidden"}>
              Remember you're looking to provide value to an underserved
              audience. Take time to look at what you're competitors are doing.
              This doesn't mean you can't serve the same audience, but perhaps
              you can see why they're not serving them well enough.
              <br />
              <br />
              Helpful UX articles:{" "}
              <a href="https://usabilitygeek.com/how-to-do-ux-competitor-analysis/">
                Competitor Analysis
              </a>
            </div>
          </section>
          <section className="section-container">
            <h3>The Challenge</h3>

            <p className="paragraph ">
              As the sole designer apart of this startup you need to figure out
              where to position this product. You need to identify the market
              where the problem(s) lie and find a strong solution. You will then
              need to present your rationale and{" "}
              <a href="https://uxplanet.org/8-tips-for-writing-better-ux-case-studies-ff0b80079393">
                {" "}
                make a case for the direction you're purposing
              </a>
              . Although monetization isn't required, having a good idea of how
              money will be made will make your case that much stronger. Note
              ALL data above are true percentages.
            </p>
            <div className={toggleState ? "hint" : "hidden"}>
              Focus on the UX process and take it one step at a time. Start with
              the discovery and doing research. This can take form in looking
              competitors, reading blogs, talking to people on social media, and
              much more. Be curious and find opportunities to solve pain points.
              Make sure you don't stop after going down one path, go down as
              many as you can! There are many directions you can take this ship
              and you need to at least look at them all. Take your time, this is
              a big project and have fun!
              <br />
              <br />
              Helpful UX Articles:{" "}
              <a href="https://www.invisionapp.com/inside-design/how-to-write-a-ux-case-study/">
                How to write a UX case study
              </a>
            </div>
            <ChallengeFooter />
          </section>
        </div>
      </div>
    </>
  );
};

export default Ch_03;
