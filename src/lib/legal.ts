import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderMarkdown } from "./markdown";

const DOC_FILES = {
  terms: "TermsOfService.md",
  privacy: "PrivacyPolicy.md",
  parents: "ParentsNotice.md",
} as const;

export type LegalDoc = keyof typeof DOC_FILES;

/**
 * Version of each document users attest to at sign-up. Must match
 * `LegalDocument.termsOfServiceVersion` / `.privacyPolicyVersion` in the iOS app
 * (Packages/AuthService/Sources/AuthService/SignupCompliance.swift). Shown in the
 * page footer so a user can confirm the web copy matches what they agreed to.
 *
 * The parents notice is explanatory rather than attested, so it carries no version.
 */
export const LEGAL_VERSIONS = {
  terms: "1.0",
  privacy: "1.0",
} as const;

/** Read + render a document at build time (static export). */
export async function loadLegalDoc(doc: LegalDoc): Promise<string> {
  const file = path.join(process.cwd(), "src", "content", DOC_FILES[doc]);
  return renderMarkdown(await readFile(file, "utf8"));
}
