import Link from "next/link";
import Image from "next/image";

/** Shared header/footer for the non-landing pages (legal + support). */
export function PageChrome({
  children,
  eyebrow,
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <>
      <div className="ambient" />

      <div className="page">
        <header className="page-head">
          <Link href="/" className="page-brand">
            <Image
              src="/icon-1024.png"
              alt=""
              width={34}
              height={34}
              aria-hidden="true"
            />
            <span>PitchIQ</span>
          </Link>
          {eyebrow ? <span className="page-eyebrow">{eyebrow}</span> : null}
        </header>

        <main className="page-body">{children}</main>

        <footer className="page-foot">
          <nav className="page-foot-nav">
            <Link href="/">Home</Link>
            <Link href="/support">Support</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/parents">For Parents</Link>
          </nav>
          <p>&copy; 2026 Predictive Sports, LLC</p>
        </footer>
      </div>
    </>
  );
}
