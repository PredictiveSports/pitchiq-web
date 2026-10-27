// `?ref=` attribution. Links we hand out (an email, a flyer's QR code, a
// tournament page) carry a short tag such as `?ref=pg-fall-classic`. The site
// remembers it for the browser session and passes it to the console's sign-up,
// which records it with the new account. Only a short slug survives cleaning,
// so nothing personal can ride along. The console cleans it the same way.

const KEY = "pitchiq-ref";

/** Lowercase letters, digits, `-` and `_`, at most 64 characters. Anything else is dropped. */
export function cleanRef(value: string | null | undefined): string | null {
  const ref = (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 64);
  return ref || null;
}

function refInUrl(): string | null {
  return cleanRef(new URLSearchParams(window.location.search).get("ref"));
}

/** Keeps the landing page's ref for the rest of the visit. The latest one wins. */
export function rememberRef() {
  const ref = refInUrl();
  if (!ref) return;
  try {
    sessionStorage.setItem(KEY, ref);
  } catch {
    // Blocked storage: the ref still reaches sign-up from the page it landed on.
  }
}

/** The ref on this page's URL, or the one the visit landed with. */
export function currentRef(): string | null {
  const ref = refInUrl();
  if (ref) return ref;
  try {
    return cleanRef(sessionStorage.getItem(KEY));
  } catch {
    return null;
  }
}
