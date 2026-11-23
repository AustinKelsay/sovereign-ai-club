---
name: curate-sovereign-ai-meetup
description: Curate Sovereign AI Club Meetup boards: add or research Topics and Showcases, rewrite board copy, garden the LLM Wiki, or mirror a board into Meetup Data.
---

# Curate Sovereign AI Club Meetup

Run the **board loop** in order, taking the steps the request needs:
- Add or research Topics and Showcases: 1–6
- Rewrite board copy: 1, 3, 5, 6
- Garden the wiki: 1, 4, 6
- Mirror a board into Meetup Data: 1, 5, 6

`public/topics/YYYY-MM-DD.md` is the source of record. The wiki supplies durable context. `src/data.js` is the Meetup Data rendering contract.

## 1. Orient

1. Read `GLOSSARY.md` and the latest 2–3 dated Meetups.
2. Target the user-named date; otherwise choose the next upcoming authored Meetup.
3. If only a tentative Meetup Slot exists, copy `public/topics/TEMPLATE.md` to `public/topics/YYYY-MM-DD.md`, apply `public/topics/SCHEMA.md` frontmatter, and register it in `public/topics/README.md` and `public/topics/index.md`.
4. Search the latest 2–3 Meetups for every candidate subject. Revisit a covered story only when a material new development supplies a **delta**.

**Complete when:** `public/topics/YYYY-MM-DD.md` exists and is listed in `public/topics/README.md` and `public/topics/index.md`; every candidate subject was checked against the latest 2–3 Meetups; every revisit names a **delta**.

## 2. Shape Topics and find the turn

Treat each URL as a **Link** and assign it one **disposition**: join an existing Topic, form a new Topic, become a Showcase, or drop as noise.

Group Links around one **room angle**, choose the Track from `GLOSSARY.md`, and score Discussion Fit through the Sovereignty Lens. Route biweekly model launches in `Models & Research` into the official `Closed model releases` and `Open model releases` Release Roundups (conventions in `public/topics/README.md`).

For every Topic, identify the **turn** before drafting copy: what actually changed underneath the announcement, where vendor claims collide with the repo, license, or independent testing, or what control, cost, or trust-boundary tradeoff puts it in front of the room.

Shape and order Topics for a live discussion:

- Search the target Meetup for the company, product, model, concept, and destination URL before creating a Topic.
- Group launch posts, docs, repos, reactions, and reporting that serve the same **room angle**; split when the room would debate two different angles.
- Combine parallel company or product moves when the pattern is the story.
- Order Topics by discussion flow: artifact before reaction, attack before defense, examples before pattern. Keep explicit user ordering.
- Follow `GLOSSARY.md` Track order unless the board's story demands otherwise; keep the Community Slot last.

Build a **source chain** for each Topic, in this preference order:

1. High-signal X posts from builders, researchers, creators, or companies.
2. GitHub repos and exact folders, files, or releases.
3. Hugging Face model, dataset, or paper pages.
4. Official creator, product, company, paper, benchmark, or documentation pages.
5. High-signal aggregators such as Digg.
6. General tech reporting for original reporting, missing context, corroboration, or useful mainstream framing.

Pair the durable artifact or official source with X posts that carry builder reaction or skepticism. Prefer the exact artifact over a repo root or generic homepage, and strip tracking-parameter duplicates down to one destination URL.

**Complete when:** every candidate has one **disposition**; every retained Link supports one **room angle**; every Topic has a named **turn** (and a **delta** if revisiting); every Topic pairs a primary or durable source with a high-signal social Link when one exists.

## 3. Author the Markdown board

Read [references/voice-and-format.md](references/voice-and-format.md) before writing or rewriting any title, description, Release Roundup, or Showcase copy.

Write each Topic in the **house shape**: a sharp title, a spoken **cue card** description, and labeled Link lines.

```md
- **Topic title** - One or two short spoken sentences carrying what changed and the turn.
  Source: https://example.com
  Post: https://x.com/example/status/123
  Repo: https://github.com/org/repo
```

Label each Link's role with `Source`, `Post`, `Release`, `Blog`, `Paper`, `Video`, `Repo`, or `Dashboard`. Use multiple labels when they expose the **source chain**.

Verify every name, date, release status, number, and superlative against the linked sources. Attribute vendor or author claims plainly (`its makers say`, `on its own eval`) and qualify high-risk words (`first`, `largest`, `autonomous`, `breach`) to the evidence.

Omit empty standard Tracks; show an empty Community Slot only on the next upcoming Meetup.

**Complete when:** every Topic uses the **house shape**, passes every check in the **spoken-copy gate** ([references/voice-and-format.md](references/voice-and-format.md)), matches its linked evidence, sits in a `GLOSSARY.md` Track, and follows discussion flow or explicit user order.

## 4. Garden the wiki

Read `public/topics/SCHEMA.md` when creating or updating wiki pages. The wiki is durable context; the dated Meetup stays the source of record.

1. Add public-safe source records under `public/topics/raw/articles/`, grouped by Track and exact Topic Title (or Showcase Title) per `SCHEMA.md`.
2. Add `[[wikilinks]]` for central or recurring entities and concepts.
3. Search `entities/`, `concepts/`, and `index.md` before creating a page. Update an existing page for the same subject; create one when the subject is central or likely to recur.
4. Add reciprocal `Mentioned In` entries with bold exact Topic Titles on relevant entity, concept, and Track pages.
5. Register new pages in `index.md` and append one concise dated entry to `log.md` for the pass.
6. Keep wiki prose factual and reusable; reserve **cue card** voice for Meetup boards.

**Complete when:** every durable source has a record under `raw/articles/`; every central recurring subject resolves to one page in `index.md`; reciprocal `Mentioned In` entries use bold exact Topic Titles; `log.md` has one new dated entry for this pass.

## 5. Mirror the rendered board

Read the item-shape comments at the top of `src/data.js` before editing Meetup Data.

Mirror the authored Markdown into `src/data.js`:
- Put the official source or artifact in `href` / `linkPair` and builder reactions or user-supplied X posts in `embed` / `embeds` (unless a concrete rendering issue prevents embedding).
- Set `releaseRoundup: true` on `Closed model releases` and `Open model releases` and keep their full launch catalog intact.
- Keep titles and descriptions aligned with Markdown.
- Write **Presenter Notes** (`notes`) to the scannable-host standard in [references/voice-and-format.md](references/voice-and-format.md): move secondary numbers, dates, license traps, skeptical pushback, and cross-slide ties into `notes` so the slide stays effortless to read aloud.
- Keep Showcases direct with exact artifact links, visuals when available, and the cues needed to run the demo.
- Ensure every visible slide label, intro bullet, CTA, and pacing cue is useful to the host or room.

**Complete when:** every authored Topic has one matching Meetup Data entry; titles, descriptions, order, URLs, embeds, visuals, and `notes` match the Markdown or an intentional curated delta; every `notes` callout passes the **spoken-copy gate**; every visible slide label is host- or audience-useful.

## 6. Verify and classify generated artifacts

Run `npm run lint:wiki` (when wiki files changed) and `npm run build`.

`npm run build` regenerates `public/meetups.json`, `public/calendar/*.ics`, and `public/wiki-manifest.json`. `public/topics/**` and `src/data.js` are tracked source.

- Stage generated files only when event or wiki data actually changed.
- Leave timestamp-only `generatedAt` / `DTSTAMP` churn unstaged.
- Keep calendar ICS CRLF (`\r\n`) line endings intact.

**Complete when:** `npm run lint:wiki` (if applicable) and `npm run build` pass; every generated-file delta is classified as real data change, timestamp-only churn (unstaged), or intentional calendar CRLF; if publishing, the commit contains tracked source plus only those understood generated artifacts.
