import type { Metadata } from "next";
import Link from "next/link";
import { PageChrome } from "../_components/PageChrome";

export const metadata: Metadata = {
  title: "For Coaches — PitchIQ",
  description:
    "Put your whole team on PitchIQ. Players call pitches in real game situations, and you see who's putting in the reps and how their decisions are improving.",
  alternates: { canonical: "/coaches" },
};

/** The team console. Sign-up there is adults only; players join in the app. */
const START_URL = "https://teams.predictivesports.io/signup/";

/**
 * Annual team plans, as the console's catalog lists them. The console's
 * checkout is the source of truth: change both together.
 */
const PLANS = [
  { name: "Starter", players: 10, price: 199 },
  { name: "Squad", players: 25, price: 449 },
  { name: "Club", players: 60, price: 899 },
];

const STEPS = [
  {
    title: "Create your team",
    body: "Sign up on the web, name your team, and pick a plan for the number of players you carry.",
  },
  {
    title: "Share the code",
    body: "Every team gets a short join code and a link. Send it to your group chat or put it on the whiteboard.",
  },
  {
    title: "Players train in the app",
    body: "Players download PitchIQ, enter the code, and they're covered. No one on your roster pays for the app.",
  },
];

const FEATURES = [
  {
    title: "Roster and Pitch IQ",
    body: "Every player's Pitch IQ, recent sessions, and when they last trained, on one screen.",
  },
  {
    title: "Leaderboard",
    body: "Sessions this week and call accuracy, ranked across your team. Reps you can actually see.",
  },
  {
    title: "Team activity",
    body: "A running feed of finished innings and earned badges, so you know who's working between practices.",
  },
  {
    title: "Strengths and gaps",
    body: "Where each player's calls hold up and where they don't: two-strike counts, runners in scoring position, late innings.",
  },
  {
    title: "Assistant coaches",
    body: "Add your staff so they see the same roster and activity you do.",
  },
  {
    title: "Seats that manage themselves",
    body: "Players take a seat when they join. Remove a player and the seat opens back up.",
  },
];

export default function CoachesPage() {
  return (
    <PageChrome eyebrow="For Coaches">
      <section className="coach-hero">
        <h1 className="coach-title">
          Every player calls the pitch.
          <br />
          <span className="grad-accent">You see who&rsquo;s learning.</span>
        </h1>
        <p className="coach-lead">
          PitchIQ puts catchers and pitchers in real game situations and grades
          every call. With a team plan, your whole roster trains on it, and you
          get a dashboard of who&rsquo;s putting in the reps and how their
          decisions are improving.
        </p>
        <div className="coach-cta">
          <a className="btn-primary" href={START_URL}>
            Start your team
          </a>
          <a className="btn-ghost" href="mailto:hello@predictivesports.io?subject=PitchIQ%20for%20my%20team">
            Talk to us
          </a>
        </div>
      </section>

      <section className="coach-section">
        <h2 className="coach-h2">How it works</h2>
        <ol className="coach-steps">
          {STEPS.map((step, i) => (
            <li key={step.title} className="coach-card">
              <span className="coach-step-n">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="coach-section">
        <h2 className="coach-h2">What you see</h2>
        <div className="coach-grid">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="coach-card">
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="coach-section">
        <h2 className="coach-h2">Built for youth teams</h2>
        <div className="coach-card coach-wide">
          <p>
            Teams can include players of any age, 12U included. A player under
            13 joins only after a parent approves, and teammates and coaches see
            that player by an anonymous handle, never a name. There&rsquo;s no
            chat and no free text. Parents can stop sharing at any time.
          </p>
          <p>
            <Link href="/parents">How we handle children&rsquo;s information</Link>
          </p>
        </div>
      </section>

      <section className="coach-section">
        <h2 className="coach-h2">Team plans</h2>
        <p className="coach-sub">
          One price per team for the season, billed yearly. Every player on the
          roster gets full PitchIQ: unlimited sessions, 3D replay, and grading
          on every pitch. Coaches don&rsquo;t take a seat.
        </p>
        <div className="coach-plans">
          {PLANS.map((plan) => (
            <div key={plan.name} className="coach-card coach-plan">
              <span className="coach-plan-name">{plan.name}</span>
              <span className="coach-plan-price">
                ${plan.price}
                <small>/year</small>
              </span>
              <span className="coach-plan-seats">Up to {plan.players} players</span>
            </div>
          ))}
        </div>
        <p className="coach-note">
          Pay by card through Stripe when you set up your team. Have a promotion
          code? Enter it at checkout. Running a club with several teams?{" "}
          <a href="mailto:hello@predictivesports.io?subject=PitchIQ%20for%20our%20club">
            Write to us
          </a>
          .
        </p>
      </section>

      <section className="coach-section">
        <div className="coach-card coach-wide coach-founding">
          <h2 className="coach-h2">Founding teams</h2>
          <p>
            We&rsquo;re working closely with a small group of teams for the
            spring 2027 season and building PitchIQ around what their coaches
            need. If that sounds like your team, tell us about it.
          </p>
          <p>
            <a href="mailto:hello@predictivesports.io?subject=Founding%20team">
              hello@predictivesports.io
            </a>
          </p>
        </div>
      </section>

      <section className="coach-section coach-final">
        <h2 className="coach-h2">Ready when your team is</h2>
        <p className="coach-sub">
          Setup takes a few minutes. Players need an iPhone or iPad.
        </p>
        <div className="coach-cta">
          <a className="btn-primary" href={START_URL}>
            Start your team
          </a>
        </div>
      </section>
    </PageChrome>
  );
}
