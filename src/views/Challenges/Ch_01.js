import React, { useState } from "react";
import "../../style/prompts.scss";
import Toggle from "../../components/Toggle";
import ChallengeFooter from "../../components/challengeFooter";

const Ch_01 = () => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </header>

      <div className="max-container">
        <div className="content-container">
          <div className="challenge-header-container">
            <div className="challenge-header-content">
              <h2>New Funding, New Direction</h2>
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
              You're apart of a small start-up of 11 employees that's flagship
              app is a music streaming service. The app touts 37 million songs,
              9 Million artists, and thirty thousand daily users. The CEO
              recently announced through email that the company had just
              received a new round of funding of just under $3 million to
              completely pivot the the product. The email reads...
            </p>

            <div className={toggleState ? "hint" : "hidden"}>
              The company you work for has received a large amount of money to
              change the goals/north-star of the business AKA pivot. This pivot
              will change the complete direction of the company. This means your
              thinking needs to be beyond just music streaming! Imagine you're
              on a boat in the middle of the ocean, you can go any direction you
              want! You just need a strong reason why.
              <br />
              <br />
              Actionable Steps: 1. Start doing research 2. Be curious, why is
              this percentage low, medium, or high?
              <br />
              <br />
              Helpful UX articles: {""}
              <a href="https://usabilitygeek.com/how-to-conduct-ux-research/">
                {""} UX Research
              </a>
            </div>

            <p className="paragraph bar">
              Three weeks ago I had the opportunity to pitch our product to the
              amazing people over at Inducate. They really loved all the hard
              work we have put into the product and the culture we have built
              over the last 16 months. They however do have some doubts about
              our product and believe that a large streaming library is just not
              enough to fight against the giants around us like Spotify,
              Pandora, and Apple Music. What they do believe in is the people we
              have here, the work we have done, and the work we are capable of.
              They're investing $2.75 million into the company for us to pivot
              and find a niche space in the music industry to make our own! More
              details will follow in the coming weeks, thank you all for your
              hard-work thus far!
              <br />
              <br />
              Cheers,
              <br />
              Jarrod Malone
            </p>
            <div className={toggleState ? "hint" : "hidden"}>
              Don't worry about fighting other companies and their features.
              Focus on the market/people group you will identify and solve THEIR
              problems. Spotify or Apple Music might have a similar feature but
              if the problem is still being found then it's not solved or their
              is potential room in the market for you!
              <br />
              <br />
              Actionable Steps: 1. Identify your market/people group by doing
              research and user Interviews.
              <br />
              <br />
              Helpful UX articles: {""}
              <a href="https://www.bitcatcha.com/blog/how-to-define-your-users-find-them-solve-their-problems/">
                UX How to Identify a market
              </a>
              {""} | {""}
              <a href="https://medium.com/pragma-partners/step-by-step-designing-a-system-to-prioritise-ux-pain-points-9c9092414d65">
                Pain points
              </a>
            </div>
            <p className="paragraph">
              The next day you're pinged on Slack from the CEO, the message
              reads...
            </p>
            <p className="paragraph bar">
              I am sure by now the good news of the funding has reached you!
              With it, comes a lot of work and a lot of questions to be
              answered. namely, what direction to take this product! Now I want
              you to have the tools you need to succeed. After Inducate
              expressed their doubts I contacted Rachel and had her set up user
              interviews and start conducting research. I haven't had much of an
              opportunity to look at the data, but from what I saw it has some
              potential in guiding your next steps. This doesn't mean you can't
              do research on your own, in fact, I encourage it! I just want to
              help where I can. We're looking to move pretty quick, so I would
              like you to get started right away and present a case for the
              direction you propose. I am excited to see what you come up with!
            </p>
            <div className={toggleState ? "hint" : "hidden"}>
              The research below is minimal, it's not meant to give you the
              answer or even give you enough to start getting into pixels. use
              the data as a baseline below to start the discovery and research
              phase.
              <br />
              <br />
              Helpful UX articles: {""}
              <a href="https://www.userinterviews.com/ux-research-field-guide-chapter/ux-research-process-fundamentals">
                Getting started with Research & Discovery
              </a>
            </div>
          </section>
          {/* Data Ses & Reserch */}
          <section className="section-container">
            <h3>Data Sets & Research:</h3>
            <p className="paragraph">
              Over the last two weeks, your colleague Rachel has put together a
              lump sum of data. This data was obtained by interviewing users,
              survey answers, and other forms of research.
            </p>

            <h4>Artists Stats (Industry wide Stats)</h4>
            <ul>
              <li>90.7% of all artists are undiscovered</li>
              <li>6.8% are developing</li>
              <li>1.4% are mid sized</li>
              <li>0.9% are mainstream</li>
              <li>0.2% are considered megastars</li>
            </ul>

            <h4>Artists Earnings</h4>
            <ul>
              <li>The average musician only earns 6% from sound recordings</li>
              <li>
                Other revenue streams, such as touring and live performance
                (28%), teaching (22%), and salary as an employee of a symphony,
                band or ensemble(19%) represent the most lucrative income
                streams for the average musician. Session playing (featuring on
                music or filling in for live shows) (10%) Other, like Youtube
                live-streaming tips, and social media (7%) Songwriting /
                Composing (for other artists) (6%) Merchandise sales (2%)
              </li>
            </ul>
            <h4>Live Music Stats:</h4>
            <ul>
              <li>
                It is anticipated that live music revenue in the U.S will grow
                from $9.3 bilion in 2015 to $11.19 billion in 2020
              </li>
              <li>
                52% of Americans (~170 Million People)—attend live music events
                each year
              </li>
              <li>
                68% of live event attendees patronized a concert, 66% a free
                outdoor community event with music, 51 percent small live
                sessions at a bar or cafe, 44 percent a music festival and 43
                percent a club night with a live DJ
              </li>
              <li>
                81% of millennials attend music festivals specifically to engage
                with a like-minded community
              </li>
              <li>
                84% of millennials attend music festivals to escape the daily
                grind
              </li>
            </ul>
            <h4>Indie Artist Stats</h4>
            <ul>
              <li>
                Indie artists account for 34.5% of total sales, which leads the
                industry today.
              </li>
              <li>
                The average revenue generated by playing a 10 song album
                produced by an unsigned artist is just $0.01 on a streaming
                service.
              </li>
            </ul>

            <h4>Mental heath around music</h4>
            <ul>
              <li>
                Men are more likely to process negative feelings with music and
                react negatively to aggressive and sad artists/tracks.
              </li>
              <li>
                Research has demonstrated that this increased reliance on music
                during episodes of psychological distress does not always have
                positive mental health outcomes for the young people involved.
              </li>
            </ul>
            <h4>User Interviews</h4>
            <h5>When do you listen to music?</h5>
            <ul>
              <li>56% While Cooking </li>
              <li>36% At Work</li>
              <li>32% To fall asleep</li>
              <li>29% While Studying</li>
            </ul>

            <h5> Music listening frequency?</h5>
            <ul>
              <li>AVG listener spends: ~32 hours a week listening to music</li>
              <li>51% - Everyday</li>
              <li>20% - 2 to 3 Days a week </li>
              <li>11% - 1 - 2 Days a week</li>
              <li>11% - Less than 1 Day a week</li>
              <li>8% - Don't listen to music frequently</li>
            </ul>
            <div className={toggleState ? "hint" : "hidden"}>
              Above is six sets of data that you can take in different
              directions. You need to research each path and see where they
              lead. This doesn't mean just Google-ing, you need to go beyond
              that. You need to find users and talk to them (appropriately). You
              can utilize social media and do a survey, ask family members or if
              you're brave enough go talk to strangers!
              <br />
              <br />
              Actionable steps: 1. Start with a hypotheses, things you want to
              validate. 2. Create questions around your hypotheses, make sure
              every-question has a reason & and potential follow up. 3. Before
              testing PRACTICE! In the mirror or with a friend, it will help.
              <br />
              <br />
              Helpful UX Articles: {""}
              <a href="https://uxplanet.org/6-tips-for-better-user-interviews-ad925afc52df">
                User Testing
              </a>
              {""} | {""}
              <a href="https://www.nngroup.com/articles/empathy-mapping/">
                Synthesizing Data
              </a>
              {""} | {""}
              <a href="https://www.uxframeworks.design/frameworks/all-frameworks">
                Frameworks
              </a>
            </div>
          </section>
          {/* Data Ses & Reserch */}
          <section className="section-container">
            <h3>The Challenge</h3>
            <p className="paragraph ">
              As the sole designer apart of this startup you need to figure out
              where to position this product. You need to identify the market
              where the problem(s) lie and find a strong solution. You will then
              need to present your rationale and{" "}
              <a href="https://uxplanet.org/8-tips-for-writing-better-ux-case-studies-ff0b80079393">
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

export default Ch_01;
