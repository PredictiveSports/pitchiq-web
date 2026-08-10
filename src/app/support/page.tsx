import type { Metadata } from "next";
import Link from "next/link";
import { PageChrome } from "../_components/PageChrome";

export const metadata: Metadata = {
  title: "Support — PitchIQ",
  description:
    "Get help with PitchIQ: account and sign-in issues, subscriptions and billing, account deletion, and parent/guardian questions.",
  alternates: { canonical: "/support" },
};

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Why do I need an account to play?",
    a: (
      <>
        <p>
          Pitch grading runs on our servers, and your progress — Pitch IQ, saved
          games, and badges — is stored with your account so it follows you to
          any device you sign in on. Creating an account is free and takes one
          screen.
        </p>
      </>
    ),
  },
  {
    q: "I can't sign in / I forgot my password.",
    a: (
      <p>
        Tap <strong>Forgot password</strong> on the sign-in screen and we&rsquo;ll
        email you a reset link. If the email doesn&rsquo;t arrive within a few
        minutes, check your spam folder, then write to{" "}
        <a href="mailto:support@predictivesports.io">
          support@predictivesports.io
        </a>{" "}
        from the address on the account and we&rsquo;ll sort it out.
      </p>
    ),
  },
  {
    q: "What does a PitchIQ Pro subscription include?",
    a: (
      <p>
        Your first session is free. PitchIQ Pro then unlocks unlimited play —
        every Standard Inning and every High Leverage session, with full 3D
        replay and grading on every pitch. It&rsquo;s offered as a monthly or
        annual auto-renewing subscription; the current price and renewal terms
        are always shown before you confirm a purchase.
      </p>
    ),
  },
  {
    q: "What are the two session modes?",
    a: (
      <>
        <p>
          <strong>Standard Inning</strong> is a half-inning from a clean slate —
          three outs to record. It&rsquo;s built for daily reps.
        </p>
        <p>
          <strong>High Leverage</strong> drops you into pressure: runners on,
          late innings, a tight score. Calls in these spots carry more weight
          toward your Pitch IQ.
        </p>
      </>
    ),
  },
  {
    q: "How do I cancel my subscription?",
    a: (
      <>
        <p>
          Subscriptions are billed by Apple, so they&rsquo;re cancelled through
          your Apple Account rather than inside PitchIQ:
        </p>
        <ol>
          <li>
            Open the <strong>Settings</strong> app on your iPhone or iPad.
          </li>
          <li>Tap your name at the top, then tap Subscriptions.</li>
          <li>Tap PitchIQ, then Cancel Subscription.</li>
        </ol>
        <p>
          You keep access until the end of the period you&rsquo;ve already paid
          for. Deleting the app does not cancel a subscription on its own.
        </p>
      </>
    ),
  },
  {
    q: "I subscribed but PitchIQ says I'm not subscribed.",
    a: (
      <p>
        Make sure you&rsquo;re signed in to the same Apple Account that made the
        purchase, then open the paywall in PitchIQ and tap{" "}
        <strong>Restore Purchases</strong>. If that doesn&rsquo;t restore access
        within a minute or two, email{" "}
        <a href="mailto:support@predictivesports.io">
          support@predictivesports.io
        </a>{" "}
        with your account email and the date of purchase.
      </p>
    ),
  },
  {
    q: "How do I request a refund?",
    a: (
      <p>
        Purchases are processed by Apple, so refunds are handled by Apple. Visit{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>
        , sign in with your Apple Account, and select the purchase.
      </p>
    ),
  },
  {
    q: "How do I delete my account and my data?",
    a: (
      <>
        <p>
          In the app, go to the <strong>Profile</strong> tab and choose{" "}
          <strong>Delete Account</strong>. This deletes your account on our
          servers, cascades to any child profiles held under a parent account,
          and revokes your sign-in credentials. The app will tell you if any part
          of the erase could not be completed.
        </p>
        <p>
          You can also request deletion by writing to{" "}
          <a href="mailto:privacy@predictivesports.io">
            privacy@predictivesports.io
          </a>{" "}
          from the email address on the account. Note that deleting your account
          does not cancel an active subscription — cancel that through your Apple
          Account, as described above.
        </p>
      </>
    ),
  },
  {
    q: "My child is under 13. How does that work?",
    a: (
      <p>
        PitchIQ is a mixed-audience app. A child under 13 does not create or hold
        their own account — a parent, guardian, or authorized coach creates and
        controls it, and the child plays under a non-identifying handle. We
        collect no personal information from the child and no analytics on
        under-13 accounts. Parents and guardians can review, correct, or delete
        that information at any time; see our{" "}
        <Link href="/parents">notice for parents and guardians</Link>, or write
        to{" "}
        <a href="mailto:privacy@predictivesports.io">
          privacy@predictivesports.io
        </a>
        .
      </p>
    ),
  },
  {
    q: "Does PitchIQ work offline?",
    a: (
      <p>
        No. Every pitch you call is graded by our prediction service, so PitchIQ
        needs an internet connection. The app shows a banner when you go offline.
        Sessions are saved once you finish them, so it&rsquo;s best to start one
        when you have a steady connection.
      </p>
    ),
  },
  {
    q: "What devices are supported?",
    a: (
      <p>
        iPhone and iPad running iOS or iPadOS 26.1 or later, with layouts built
        natively for each.
      </p>
    ),
  },
  {
    q: "I found a bug, or I have an idea.",
    a: (
      <p>
        Please send it to{" "}
        <a href="mailto:support@predictivesports.io">
          support@predictivesports.io
        </a>
        . Telling us your device, iOS version, and what you were doing when it
        happened makes it much faster to fix.
      </p>
    ),
  },
];

export default function SupportPage() {
  return (
    <PageChrome eyebrow="Support">
      <div className="doc">
        <h1>Support</h1>
        <p className="doc-lead">
          Questions, problems, or feedback about PitchIQ — start here. If you
          don&rsquo;t find your answer below, email us and a human will get back
          to you.
        </p>

        <div className="contact-card">
          <div>
            <span className="contact-label">General support</span>
            <a href="mailto:support@predictivesports.io">
              support@predictivesports.io
            </a>
          </div>
          <div>
            <span className="contact-label">Privacy &amp; data requests</span>
            <a href="mailto:privacy@predictivesports.io">
              privacy@predictivesports.io
            </a>
          </div>
          <div>
            <span className="contact-label">Legal</span>
            <a href="mailto:legal@predictivesports.io">
              legal@predictivesports.io
            </a>
          </div>
          <p className="contact-note">
            We aim to respond within two business days.
          </p>
        </div>

        <h2>Frequently asked</h2>
        {FAQS.map(({ q, a }) => (
          <section key={q} className="faq">
            <h3>{q}</h3>
            {a}
          </section>
        ))}

        <h2>Mailing address</h2>
        <p>
          Predictive Sports, LLC
          <br />
          116 Agnes Rd, Ste 200
          <br />
          Knoxville, TN 37919, USA
        </p>

        <p className="doc-links">
          <Link href="/privacy">Privacy Policy</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/terms">Terms of Service</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/parents">For Parents</Link>
        </p>
      </div>
    </PageChrome>
  );
}
