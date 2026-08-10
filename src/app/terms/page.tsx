import type { Metadata } from "next";
import { PageChrome } from "../_components/PageChrome";
import { loadLegalDoc, LEGAL_VERSIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — PitchIQ",
  description:
    "The terms that govern your use of PitchIQ, including eligibility, subscriptions, and dispute resolution.",
  alternates: { canonical: "/terms" },
};

export default async function TermsPage() {
  const html = await loadLegalDoc("terms");

  return (
    <PageChrome eyebrow="Legal">
      <article className="doc" dangerouslySetInnerHTML={{ __html: html }} />
      <p className="doc-version">Version {LEGAL_VERSIONS.terms}</p>
    </PageChrome>
  );
}
