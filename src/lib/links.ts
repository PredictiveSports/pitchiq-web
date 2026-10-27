// Which site this build is, and where it sends coaches. `main` builds prod for
// GitHub Pages; the `alpha` branch builds with NEXT_PUBLIC_SITE_ENV=alpha for
// Cloudflare Pages at pitchiq.alpha.predictivesports.io. Each points at the
// team console of its own environment. NEXT_PUBLIC_TEAMS_CONSOLE_URL overrides
// it, for a console running locally.

export const IS_ALPHA = process.env.NEXT_PUBLIC_SITE_ENV === "alpha";

const DEFAULT_CONSOLE_URL = IS_ALPHA ? "https://teams.alpha.predictivesports.io" : "https://teams.predictivesports.io";

export const CONSOLE_URL = (process.env.NEXT_PUBLIC_TEAMS_CONSOLE_URL ?? DEFAULT_CONSOLE_URL).replace(/\/+$/, "");

/** Coach sign-up. Adults only; players join in the app with a team code. */
export const COACH_SIGNUP_URL = `${CONSOLE_URL}/signup/`;
