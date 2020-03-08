import React, { useState, useEffect } from "react";
import "../../style/prompts.scss";
import Toggle from "../../components/Toggle";
import ChallengeFooter from "../../components/challengeFooter";

const Ch_04 = () => {
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
              <h2>The Incubator</h2>
              <p className="paragraph">
                Industry <span>Productivity</span> | Device{" "}
                <span>Your Choice</span>
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
              In the last two years, Pickly has exploded with growth. Starting
              as a small agency that worked with low to mid-tier clients. Pickly
              took a chance by stopping their agency work to focus on one of
              their employee's ideas that really took off and now helps fund the
              company. Since then the company has launch two more child products
              and now works with two internal incubators that go simultaneously,
              cycling teams in and out every six months. Today the CEO announced
              at the all-hands, the project focus and handed picked you along
              with 7 others to be a part of the team for the newest incubator!
            </p>

            <div className={toggleState ? "hint" : "hidden"}>
              Remember you're a solo designer in a fast-paced environment, you
              need to focus heavily on solving the main pain point to keep your
              MVP small enough to be built in time.
              <br />
              <br />
              Helpful UX articles:{" "}
              <a href="https://www.bitcatcha.com/blog/how-to-define-your-users-find-them-solve-their-problems/">
                {" "}
                MVP in UX
              </a>
            </div>
            <p className="paragraph bar">
              Thank you all for being here, I am always excited to announce the
              start of a new incubator project! We're always incredibly hopeful
              to launch yet another amazing product. We have decided for the
              focus of this incubator to be, Productivity and how we might
              improve it either externally or internally...
            </p>
            <p className="paragraph">
              After the all-hands meeting, your manager grabs you and your
              future team for a meeting to go over the full project.
            </p>
            <p className="paragraph bar">
              Tomorrow is the first day of the incubator and I know you're all
              very excited! Let's go over the project details, shall we? The
              focus of this new product will be improving productivity
              internally for companies or externally for individuals. With this,
              we need to figure out a few key pieces. One, what is our main pain
              point we want to solve for MVP. Two, who are we solving for and
              why. Three, why is this the most important pain point to solve. We
              will also want to do some thinking around where the product will
              go, how it might scale, and ideas around monetization. Once we
              have achieved these things we can present this to the leadership
              team to have finally buy-in and launch this product!
              <br />
              <br />
              We always want to start these projects off on the right foot, so
              Arron & Rochelle hooked us up with some data to start with. This
              should hopefully be enough to jump-start the discovery phase and
              get the team moving! Let's get to work!
            </p>
            <div className={toggleState ? "hint" : "hidden"}>
              Above are the key delivery points you must hit to get your product
              onto the development rails to be created. Before anything can be
              solved you must use discovery practices to find the target you're
              building for. (Internally or external?)
              <br />
              <br />
              Actionable Steps: 1. Research both paths of making an internal and
              external tool, choose the path that makes the most sense. 2.
              Utilize UX practices to identify the market/users' main pain
              points. 3. Scope your MVP to ensure you'll solve the most
              important problem using the smallest feature set.
              <br />
              <br />
              Helpful UX articles:{" "}
              <a href="https://careerfoundry.com/en/blog/ux-design/how-to-conduct-user-experience-research-like-a-professional/#1-what-is-ux-research">
                How to conduct user research
              </a>{" "}
              |{" "}
              <a href="https://www.netsolutions.com/insights/build-minimum-viable-product-with-ux-principles/">
                Minimum Viable Product
              </a>
            </div>
          </section>
          <section className="section-container">
            <h3>Data Sets & Research</h3>

            <p className="paragraph">
              Abigale & Jerry have supplied you with some of their research to
              help you with your project. All data presented is real and can be
              sited and leveraged.
            </p>

            <h4>Work Stats</h4>
            <ul>
              <li>
                The average commute time is 27 minutes one way (54 minutes round
                trip)
              </li>
              <li>
                On average 15% - 20% of employees are late to their place of
                work regularly
              </li>
              <li>
                The average employee spends 31 hours a month in meetings. When
                surveyed 91% said they daydream during meetings, 73% said they
                did other work, and 45% felt overwhelmed by the sheer number of
                meetings they have to attend.
              </li>
              <li>
                The average employee spends 4.1 hours a day checking their
                email.
              </li>
              <li>
                The average person receives a 15% productivity increase when
                they exercise before work
              </li>
              <li>
                A study found that productivity and performance are at their
                peak during uninterrupted 90-minute intervals.
              </li>
            </ul>

            <h4>Home Stats</h4>
            <ul>
              <li>
                The average person spends 83 minutes on streaming
                services(Netflix, Hulu, etc...) of the 83 minutes, 20% (19
                Minutes) is used on finding content to watch. The remaining 80%
                (64 Minutes) spent watching content.
              </li>
              <li>
                On average, people spend 153 minutes on social media per day.
              </li>
              <li>
                The average person watches 2 hours & 46 minutes of TV per day.
              </li>
              <li>
                The average person spends 6 hours a each week playing games.
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
              |
              <a href="https://uxplanet.org/6-tips-for-better-user-interviews-ad925afc52df">
                User Interviews & Testing
              </a>
            </div>
          </section>

          <section className="section-container">
            <h3>The Challenge</h3>

            <p className="paragraph ">
              You're tasked with figuring out which path makes the most sense to
              take. Internally tools to help employees/employers be more
              productive or focus on the individual who can make better use of
              their time. Once you've figured out your path, dial into who your
              target user is, what is their biggest pain point, and how can you
              solve it! Remember this is a fast paced incubator with only six
              months to launch a product so be mindful of your MVP. You're final
              deliverable with be a{" "}
              <a href="https://uxplanet.org/8-tips-for-writing-better-ux-case-studies-ff0b80079393">
                case for the direction you're purposing
              </a>{" "}
              Make your case even stronger by explaining monetization, scaling,
              how it might affect the business and even ways you've reduced dev
              work.
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

export default Ch_04;
