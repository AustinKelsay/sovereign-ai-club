/**
 * Turns a wiki title, path, or alias into a stable URL-safe page id.
 * @param {unknown} value Title, relative path, or alias
 * @returns {string}
 */
export function normalizeWikiId(value) {
  return String(value ?? "")
    .trim()
    .replace(/\.(md|markdown)$/i, "")
    .replace(/^\.?\//, "")
    .replace(/\\/g, "/")
    .split("/")
    .pop()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Uses the current club name for meetup ids, accepting the former title as an alias.
 * Entity and concept ids are unchanged.
 * @param {unknown} title Page title or wikilink target
 * @returns {string}
 */
export function stabilizeWikiPageId(title) {
  const rewritten = String(title ?? "").replace(/^Austin AI Club\b/i, "Sovereign AI Club");
  return normalizeWikiId(rewritten);
}

/** Resolves bookmarked meetup ids to the current club name. */
export function canonicalizeWikiRouteId(id) {
  return String(id).replace(/^austin-ai-club-/, "sovereign-ai-club-");
}
