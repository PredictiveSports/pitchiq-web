import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="ambient" />

      <main className="simple">
        <div className="simple-inner">
          <div className="simple-brand">
            <Image
              src="/icon-1024.png"
              alt="PitchIQ app icon"
              width={92}
              height={92}
              priority
            />
          </div>

          <div className="eyebrow">
            <span className="tick" />
            iOS &middot; For Catchers &amp; Pitchers
          </div>

          <h1 className="simple-title">
            Read the game.
            <br />
            <span className="grad-accent">Call the pitch.</span>
          </h1>

          <p className="simple-lead">
            The training tool that helps catchers and pitchers think one pitch
            ahead — powered by real game data.
          </p>

          <div className="simple-cta">
            <button
              className="btn-store"
              type="button"
              aria-label="Download on the App Store — coming soon"
            >
              <span className="glyph">
                <i />
                <i className="lit" />
                <i />
                <i />
              </span>
              <span className="store-txt">
                <small>Download on the</small>
                <b>App&nbsp;Store</b>
              </span>
            </button>
          </div>

          <div className="simple-note">
            <span className="dotline" />
            <span>Coming soon to iPhone &amp; iPad</span>
            <span className="dotline" />
          </div>

          <a className="simple-contact" href="mailto:hello@predictivesports.io">
            hello@predictivesports.io
          </a>
        </div>

        <footer className="simple-footer">
          &copy; 2026 Predictive Sports
        </footer>
      </main>
    </>
  );
}
