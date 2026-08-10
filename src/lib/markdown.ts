/**
 * Minimal Markdown -> HTML renderer for the bundled legal documents.
 *
 * Deliberately not a general-purpose Markdown library: it supports exactly the
 * subset used by `src/content/*.md` (headings, horizontal rules, bullet lists,
 * bold/italic, links, paragraphs). Keeping it in-repo avoids a dependency for
 * two static pages, and mirrors `MarkdownBlock.parse` in the iOS app
 * (AuthServiceUI/LegalDocumentView.swift) so both renderers agree.
 *
 * Input is trusted (our own checked-in files), but it is HTML-escaped anyway so
 * the output is safe to pass to dangerouslySetInnerHTML.
 */

/** Delimiter for extracted-link placeholders. Cannot occur in the source text. */
const SENTINEL = "\u0000";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** GitHub-style anchor slug, so sections can be deep-linked (e.g. #2-eligibility). */
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/**
 * Inline formatting on a single already-line-joined chunk of text.
 *
 * Markdown links are pulled out to sentinel-delimited placeholders first, so the
 * bare-email autolinker further down can't rewrite the inside of an href it just
 * created. The sentinel is NUL rather than something like " 0 " precisely because
 * the legal text contains bare numerals ("within thirty (30) days").
 */
function inline(text: string): string {
  const escaped = escapeHtml(text);
  const links: string[] = [];

  let out = escaped.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_match, label: string, href: string) => {
      links.push(`<a href="${href}">${label}</a>`);
      return `${SENTINEL}${links.length - 1}${SENTINEL}`;
    },
  );

  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  out = out.replace(
    /\b([\w.+-]+@[\w-]+\.[\w.-]+)\b/g,
    '<a href="mailto:$1">$1</a>',
  );

  return out.replace(
    new RegExp(`${SENTINEL}(\\d+)${SENTINEL}`, "g"),
    (_m, i: string) => links[Number(i)],
  );
}

export function renderMarkdown(markdown: string): string {
  // Strip HTML comments (the sync banner at the top of each content file).
  const source = markdown.replace(/<!--[\s\S]*?-->/g, "");

  const html: string[] = [];
  let listItems: string[] = [];
  let paragraphLines: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    html.push(`<ul>${listItems.map((li) => `<li>${li}</li>`).join("")}</ul>`);
    listItems = [];
  };

  // Consecutive non-empty lines form one paragraph, joined with <br> so the
  // multi-line mailing-address blocks keep their line breaks.
  const flushParagraph = () => {
    if (paragraphLines.length === 0) return;
    html.push(`<p>${paragraphLines.join("<br />")}</p>`);
    paragraphLines = [];
  };

  const flushAll = () => {
    flushList();
    flushParagraph();
  };

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (line === "") {
      flushAll();
      continue;
    }

    if (/^(---|\*\*\*|___)$/.test(line)) {
      flushAll();
      html.push("<hr />");
      continue;
    }

    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    if (heading) {
      flushAll();
      const level = heading[1].length;
      const content = heading[2];
      html.push(
        `<h${level} id="${slugify(content)}">${inline(content)}</h${level}>`,
      );
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      listItems.push(inline(line.replace(/^[-*]\s+/, "")));
      continue;
    }

    flushList();
    paragraphLines.push(inline(line));
  }

  flushAll();
  return html.join("\n");
}
