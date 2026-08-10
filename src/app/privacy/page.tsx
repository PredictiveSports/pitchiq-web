import type { Metadata } from "next";
import { PageChrome } from "../_components/PageChrome";
import { loadLegalDoc, LEGAL_VERSIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — PitchIQ",
  description:
    "How PitchIQ collects, uses, and protects information, including our COPPA commitments for children under 13.",
  alternates: { canonical: "/privacy" },
};

export default async function PrivacyPage() {
  const html = await loadLegalDoc("privacy");

  return (
    <PageChrome eyebrow="Legal">
      <article className="doc" dangerouslySetInnerHTML={{ __html: html }} />
      <p className="doc-version">Version {LEGAL_VERSIONS.privacy}</p>
    </PageChrome>
  );
}
