import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderMarkdown } from "./markdown";

/**
 * Version of each legal document that users attest to at sign-up. Must match
 * `LegalDocument.termsOfServiceVersion` / `.privacyPolicyVersion` in the iOS app
 * (Packages/AuthService/Sources/AuthService/SignupCompliance.swift). Shown in the
 * page footer so a user can confirm the web copy matches what they agreed to.
 */
export const LEGAL_VERSIONS = {
  terms: "1.0",
  privacy: "1.0",
} as const;

export type LegalDoc = keyof typeof LEGAL_VERSIONS;

const FILENAMES: Record<LegalDoc, string> = {
  terms: "TermsOfService.md",
  privacy: "PrivacyPolicy.md",
};

/** Read + render a legal document at build time (static export). */
export async function loadLegalDoc(doc: LegalDoc): Promise<string> {
  const file = path.join(process.cwd(), "src", "content", FILENAMES[doc]);
  return renderMarkdown(await readFile(file, "utf8"));
}
