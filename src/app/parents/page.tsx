import type { Metadata } from "next";
import { PageChrome } from "../_components/PageChrome";
import { loadLegalDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "For Parents — PitchIQ",
  description:
    "How PitchIQ handles information for children under 13, and the rights available to parents, guardians, and coaches.",
  alternates: { canonical: "/parents" },
};

export default async function ParentsPage() {
  const html = await loadLegalDoc("parents");

  return (
    <PageChrome eyebrow="For Parents">
      <article className="doc" dangerouslySetInnerHTML={{ __html: html }} />
    </PageChrome>
  );
}
