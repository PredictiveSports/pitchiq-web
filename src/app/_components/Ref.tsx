"use client";

import { useEffect, useSyncExternalStore } from "react";
import { COACH_SIGNUP_URL } from "@/lib/links";
import { currentRef, rememberRef } from "@/lib/ref";

/** Rendered once in the layout: notes the `?ref=` a visit lands with. */
export function RefCapture() {
  useEffect(rememberRef, []);
  return null;
}

const noSubscribe = () => () => {};

/**
 * A link to coach sign-up that carries the visit's ref. The static HTML has the
 * bare URL; the ref is added once the page is running in the browser.
 */
export function CoachSignupLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useSyncExternalStore(noSubscribe, currentRef, () => null);
  const href = ref ? `${COACH_SIGNUP_URL}?ref=${encodeURIComponent(ref)}` : COACH_SIGNUP_URL;
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
