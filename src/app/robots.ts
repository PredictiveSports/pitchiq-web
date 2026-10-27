import type { MetadataRoute } from "next";
import { IS_ALPHA } from "@/lib/links";

export const dynamic = "force-static";

/** Alpha stays out of search: it duplicates the real site, legal pages included. */
export default function robots(): MetadataRoute.Robots {
  return IS_ALPHA
    ? { rules: { userAgent: "*", disallow: "/" } }
    : { rules: { userAgent: "*", allow: "/" } };
}
