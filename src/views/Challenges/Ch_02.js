import React, { useState, useEffect } from "react";
import Toggle from "../../components/Toggle.js";
import "../../style/prompts.scss";
import ChallengeFooter from "../../components/challengeFooter";

const Ch_02 = () => {
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
              <h2>Why are we all so disconnected</h2>
              <p className="paragraph">
                Industry <span>Life Style</span> | Device <span>Mobile</span>
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
              You're a freelance UX designer who has gained the attention of the
              LifeStyle magazine publisher "Mentive". For the last decade, they
              have made a name for themselves by talking about human connection,
              the lack of it in our world, mental health, and how we can better.
              Mentive is looking to step into the tech industry by launching a
              native mobile app. At this point, the company is unsure of the
              direction to take this application but know they want it to be
              centered around human connection. The VP over publishing & design
              emailed you her thoughts...
            </p>

            <div className={toggleState ? "hint" : "hidden"}>
              You're helping to introduce a non-tech company into the tech
              world. Their sole purpose is to improve people's lives through
              human connection - this piece is vital and is the keystone of your
              problems & solutions. Human connection has levels & Mentive is
              focusing on quality rather than quantity. A question to ask
              yourself is "How might I help people to have more high-quality
              connections in their life?" Lastly, these connections do not have
              to be in person!
              <br />
              <br />
              Actionable Steps: 1. Start doing research 2. Be curious! 3. Start
              making hypotheses & how you might test them.
              <br />
              <br />
              Helpful UX articles:{" "}
              <a href="https://usabilitygeek.com/how-to-conduct-ux-research/">
                {" "}
                UX Research
              </a>
            </div>

            <p className="paragraph bar">
              The world we live in is more emotionally and socially disconnected
              then it has ever been. Mentive was born out of the desire to help
              and be a voice to reconnect with each other! We have had great
              success over the last years 3 years and have built a very
              passionate community. As proud of our work as we are, there is
              much more we can do! We can write the best articles about mental
              health & how to connect more deeply but it has to resonate with
              thousands of people. We're ready to be more personal with our
              users and impact them as individuals. We don't know what this
              looks like but we want to help people connect deeper (platonic or
              otherwise). We also don't want to associate the magazine at all
              with this product. In preparation for kicking off this project I
              had Richard, my project manager gathers together some data we have
              collected about our readers over the last 6 months. By no means do
              you have to use this research. If you feel it's necessary, conduct
              more research. We're all excited to see where this product goes
              and the impact we can make!
              <br />
              <br />
              Cheers,
              <br />
              Juliann Van Brooks
            </p>

            <div className={toggleState ? "hint" : "hidden"}>
              Another goal for this product is to be personal, to help
              individuals in ways their magazine can not. This can be in the
              form of building stronger current relationships, cultivating new
              ones, helping people get out of their shell, helping with mental
              health and SO MUCH MORE! Use the data below to get started with
              your research but don't stop there, be curious and dig deeper.
              <br />
              <br />
              Actionable Steps: 1. Read through the provided data and group it
              into digestible pieces. Start capturing your questions, thoughts,
              and hypotheses. 3. Go wide, and go deep!
              <br />
              <br />
              Helpful UX Articles:
              <a href="https://medium.com/@evaschicker2012/why-the-double-diamond-is-the-most-precious-diagram-in-ux-design-40db0476e5d2">
                {""} Going Wide & Deep
              </a>
              {""} | {""}
              <a
                href="https://uxdesign.cc/synthesis-how-to-make-sense-of-your-design-research-d67ad79b684b
"
              >
                Synthesis Data
              </a>
            </div>
          </section>
          {/* Data Ses & Reserch */}

          <section className="section-container">
            <h3>Data Sets & Research</h3>

            <p className="paragraph ">
              Mentive has supplied you with some of their research to help you
              with your project. All data is real and can be leverage!
            </p>

            <h4>Friendship Linked to Health</h4>

            <ul>
              <li>
                Adults who have strong social relationships are less likely to
                die prematurely than isolated people. They also have a reduced
                risk of many significant health problems, including depression,
                high blood pressure, and an unhealthy body mass index.
              </li>
              <li>
                Poor social relationships were associated with a 29% increase in
                the risk of coronary heart disease and a 32% rise in the risk of
                stroke, studies have shown
              </li>
              <li>
                Older people's dementia risk increased with their feelings of
                loneliness.
              </li>
              <li>
                There is a 57% chance if, a single person in the friend group
                gained/lost weight, the other friends would follow in suit.
              </li>
            </ul>

            <h4>Making Friendships</h4>

            <ul>
              <li>
                45% of adults say they find it difficult to make new friends
              </li>
              <li>The average adult hasn’t made a new friend in 5 years</li>
              <li>
                42% of adults struggle to make friends is due to introversion or
                shyness.
              </li>
              <li>
                Other notable reasons adults can’t seem to make new friends:
                Commitments to family (29%) Not having any hobbies that allow
                them to meet new people (28%) Moving to a new city (21%)
              </li>
              <li>
                2.08 is the average number of friends people felt they could
                discuss important matters with.
              </li>
            </ul>

            <h4>Online Dating</h4>
            <ul>
              <li>40% of adults use online dating to find a relationship.</li>
              <li>
                53% of people lie on their online dating profile (age, weight,
                height, job, etc...)
              </li>
              <li>
                20% of women admitted to using an older photo from when they
                were younger and thinner.
              </li>
              <li>
                40% of men said they lied about their jobs to sound more
                successful.
              </li>
              <li>
                50% of people believe meeting someone online is a good idea
                while 23% say it's out of desperation.
              </li>
              <li>
                51% of online dating users are already in a relationship, yet
                are putting themselves out there as being single.
              </li>
              <li>
                33% of online daters have never met up in real life with someone
                from an app or site.
              </li>
              <li>63% of married couples met through a friend.</li>
            </ul>

            <h4>Mental Health</h4>
            <ul>
              <li>
                Individuals with less social connection have disrupted sleep
                patterns, altered immune systems, more inflammation and higher
                levels of stress hormones.
              </li>
              <li>
                found that isolation increases the risk of heart disease by 29
                percent and stroke by 32 percent.
              </li>
              <li>
                People with more long-lasting mental health problems often have
                relationships mainly with other people with mental health
                problems.
              </li>
              <li>20% of adults say they feel lonely or socially isolated</li>
              <li>
                54% of adults said they always or sometimes feel that "no one
                knows them well".
              </li>
              <li>
                42% of Millennial woman are more afraid of loneliness than a
                cancer diagnosis
              </li>
            </ul>

            <div className={toggleState ? "hint" : "hidden"}>
              There is a lot of data above, but not nearly enough to make any
              decisions. Each grouping and singular data point can give you an
              angle to look into. As you venture down these paths you need to
              ensure you're asking the right questions & thinking of ways to
              have your questions answered.
              <br />
              <br />
              Actionable Steps: 1. Prioritize your questions, answer the ones
              that will get the most value from. 2. Look into different
              frameworks to help prioritize & answer your questions & test
              hypothesis. 3. When ready start testing (don't wait too long, test
              early and test often!)
              <br />
              <br />
              Helpful UX articles:
              <a href="https://uxdesign.cc/designing-a-chair-a-story-about-junior-designers-vs-senior-designers-24be40b1d2cb">
                {""} Asking the right questions
              </a>{" "}
              |{" "}
              <a href="https://www.uxframeworks.design/frameworks/all-frameworks">
                Frameworks
              </a>{" "}
              {""} | {""}
              <a href="https://uxplanet.org/6-tips-for-better-user-interviews-ad925afc52df">
                User Interviews & Testing
              </a>
            </div>
          </section>

          <section className="section-container">
            <h3>The Challenge</h3>

            <p className="paragraph">
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

export default Ch_02;
