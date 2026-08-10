import type { Metadata } from "next";
import Link from "next/link";
import { PageChrome } from "./_components/PageChrome";

export const metadata: Metadata = {
  title: "Page not found — PitchIQ",
};

/** Exported by `next build` as 404.html, which GitHub Pages serves automatically. */
export default function NotFound() {
  return (
    <PageChrome>
      <div className="doc">
        <h1>Page not found</h1>
        <p className="doc-lead">
          That page doesn&rsquo;t exist. Try one of these instead.
        </p>
        <p className="doc-links">
          <Link href="/">Home</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/support">Support</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/privacy">Privacy Policy</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/terms">Terms of Service</Link>
        </p>
      </div>
    </PageChrome>
  );
}
