# PitchIQ

Landing page and App Store support/legal pages for PitchIQ — the training tool
that helps catchers and pitchers think one pitch ahead.

Live at [pitchiq.predictivesports.io](https://pitchiq.predictivesports.io)

## Pages

| Route      | Purpose                                                                 |
| ---------- | ----------------------------------------------------------------------- |
| `/`        | Landing page                                                            |
| `/support` | Support URL filed in App Store Connect (required, must stay reachable)  |
| `/privacy` | Privacy Policy URL filed in App Store Connect (required)                |
| `/terms`   | Terms of Service — linked from the in-app paywall and sign-up screen    |
| `/parents` | COPPA notice for parents / Adult Sponsors of under-13 players           |

This site is the **canonical home for PitchIQ legal documents**. The company site
(`predictivesports-web`) previously served copies at `/pitchiq/privacy|terms|kids-privacy`;
those routes now redirect here and should not be revived.

`/privacy` and `/terms` are rendered from `src/content/*.md`, which are **copies of
the documents the iOS app bundles** in
`PitchIQ/Packages/AuthService/Sources/AuthServiceUI/Resources/`. Users attest to a
specific version at sign-up, so the two copies must not drift:

1. Edit the document in the iOS repo (source of truth).
2. Copy it here, keeping the sync banner at the top of the file.
3. Bump `LegalDocument.termsOfServiceVersion` / `.privacyPolicyVersion` in
   `AuthService/SignupCompliance.swift` and the matching entry in `src/lib/legal.ts`.

Markdown is rendered by `src/lib/markdown.ts`, a small in-repo renderer covering the
subset those documents use. It mirrors `MarkdownBlock.parse` in the app's
`LegalDocumentView.swift` so both surfaces render the text the same way.

## Development

```bash
npm install
npm run dev
```

## Deployment

Static export (`output: "export"`), deployed to GitHub Pages on push to `main` via
`.github/workflows/deploy.yml`. `trailingSlash: true` makes the export emit
`privacy/index.html` rather than `privacy.html`, which is what GitHub Pages resolves
unambiguously.

The custom domain comes from `public/CNAME`. It requires a DNS record at the
`predictivesports.io` zone:

```
pitchiq   CNAME   predictivesports.github.io.
```

Without it the domain does not resolve, even though the Pages build succeeds.
After DNS propagates, enable **Enforce HTTPS** in the repo's Pages settings.
