---
name: curate-sovereign-ai-meetup
description: Curate Sovereign AI Club Meetup boards. Use when adding or researching Topics and Showcases, rewriting board copy, gardening the LLM Wiki around a Meetup, or mirroring a board into Meetup Data.
---

# Curate Sovereign AI Club Meetup

Run the **board loop** in order. Take the steps the request needs: add or research Topics and Showcases (1–5), rewrite board copy (1, 3, 5), garden the wiki (1, 4), mirror a board into Meetup Data (1, 5).

The dated Meetup at `public/topics/YYYY-MM-DD.md` is the source of record. The wiki supplies durable context. `src/data.js` is the Meetup Data rendering contract.

Tracks, the Sovereignty Lens (a Discussion Fit input; Open Source and Privacy Lenses are facets of it), and the glossary live in repo `CONTEXT.md`. Wiki frontmatter lives in `public/topics/SCHEMA.md`. Meetup Data topic item fields live in the README.

## 1. Orient

1. Work from the `AustinKelsay/sovereign-ai-club` root.
2. Read `CONTEXT.md` and the latest 2–3 dated Meetups. Read `public/topics/SCHEMA.md` when creating or gardening wiki pages. Read the README's topic item fields when mirroring.
3. Use the user-named date; otherwise choose the next upcoming authored Meetup.
4. If only a tentative slot exists, copy `public/topics/TEMPLATE.md` to `public/topics/YYYY-MM-DD.md`, apply `SCHEMA.md` frontmatter, and register it in `public/topics/README.md` and `public/topics/index.md`.
5. Search recent Meetups for every candidate subject. Revisit a covered story when a material new development supplies a **delta**.

**Complete when:** `public/topics/YYYY-MM-DD.md` exists and is listed in `public/topics/README.md` and `public/topics/index.md`; every candidate subject was searched in the last 2–3 Meetups; every revisit names a **delta**.

## 2. Build room questions

Treat each URL as a **Link**. Assign every Link one **disposition**: join an existing Topic, form a new Topic, become a Showcase, or drop as noise.

Choose the Track from the **room question** using `CONTEXT.md`. Score Discussion Fit with the Sovereignty Lens.

Shape Topics around room questions:

- Search the target Meetup for the company, product, model, concept, and destination URL before creating a Topic.
- Group launch posts, docs, repos, reactions, and reporting when they support the same question.
- Split Links when the room would discuss different questions.
- Combine adjacent company or product moves when the pattern is the story.
- Order Topics as a discussion: artifact before reaction, attack before response, examples before pattern. Keep explicit user ordering.
- Use `CONTEXT.md` Track order unless the story demands otherwise; keep Showcase last.

Build a **source chain** for each Topic, in this preference order:

1. High-signal X posts from builders, researchers, creators, or companies.
2. GitHub repos and exact folders/files/releases.
3. Hugging Face model, dataset, or paper pages.
4. Official creator, product, company, paper, benchmark, or documentation pages.
5. High-signal aggregators such as Digg.
6. General tech reporting for original reporting, missing context, corroboration, or useful mainstream framing.

Pair the durable artifact or official source with X posts that carry builder reaction or debate. Prefer the exact artifact over a repo root or generic homepage. Collapse tracking-parameter variants to one destination URL.

**Complete when:** every candidate has one **disposition**; every retained Link supports exactly one **room question**; every revisit names a **delta**; every Topic lists a primary or durable source plus a high-signal social Link when one exists.

## 3. Author the Markdown board

Write each Topic in the **house shape**: a title, one or two spoken sentences, then labeled Link lines.

```md
- **Topic title** - One or two sentences that frame why this belongs on the board
  Source: https://example.com
  Post: https://x.com/example/status/123
  Repo: https://github.com/org/repo
```

Label each Link's role with `Source`, `Post`, `Release`, `Blog`, `Video`, `Repo`, or `Dashboard`. Use multiple labels when they expose the **source chain**.

When adding or rewriting copy, read [references/voice-and-format.md](references/voice-and-format.md) and pass the **spoken-copy gate**. Name the real model, product, company, artifact, or vulnerability in the title. Verify names, dates, release status, numbers, and superlatives against the Links; qualify high-risk claims such as `first`, `largest`, `autonomous`, or `breach` to the evidence.

Showcase copy is casual and demo-oriented: say what the member will show. Authored past Meetups include only Tracks and Community Slots that have items.

**Complete when:** every Topic has a specific title, a description that passes the **spoken-copy gate**, a labeled **source chain**, claims that match the linked sources, a Track from `CONTEXT.md`, and a position that follows discussion flow or the user's explicit order.

## 4. Garden the wiki

Treat the wiki as durable context. The dated Meetup markdown is the source of record.

1. Add public-safe source records under `public/topics/raw/articles/` using the `SCHEMA.md` source policy.
2. Add `[[wikilinks]]` for central or recurring entities and concepts.
3. Search `entities/`, `concepts/`, and `index.md` before creating a page. Update an existing page when it represents the same subject; create one when the subject is central or likely to recur.
4. Add reciprocal Meetup entries to relevant entity, concept, and Track pages when current pages use them.
5. Update `index.md` for new pages. The log gets one concise dated entry for the gardening pass.
6. Wiki copy is factual and reusable. Board copy uses the **spoken-copy gate**.

**Complete when:** every durable source has a record under `raw/articles/`; every central recurring subject resolves to one page listed in `index.md`; reciprocal Meetup links are present on those pages; `log.md` has exactly one new dated entry for this pass.

## 5. Mirror the rendered board

When the board should render, mirror the authored Markdown into `src/data.js`. Topic item fields are in the README.

Keep the official source or artifact in `href`/`linkPair` and reactions in `embed`/`embeds`. Embed user-supplied X posts for rendered Topics unless a concrete rendering reason prevents it. Keep descriptions aligned with Markdown. Give Showcases direct titles, exact artifact links, useful visuals when available, and the presenter guidance needed to run the demo.

Public slides show host- and audience-useful labels. Include intro metadata, CTAs, instructions, and time labels when they help run the Meetup.

**Complete when:** every authored Topic has one matching Meetup Data entry; titles, descriptions, order, URLs, embeds, visuals, and notes match the Markdown or an intentional curated delta; every visible slide label is host- or audience-useful.

## 6. Generated artifacts

`npm run build` regenerates `public/meetups.json`, `public/calendar/*.ics`, and `public/wiki-manifest.json`. Those are generated artifacts; `public/topics/**` and `src/data.js` are tracked source.

- Stage generated files when event or wiki data actually changed.
- Leave timestamp-only `generatedAt` / `DTSTAMP` churn in `meetups.json` unstaged.
- Calendar ICS line endings are CRLF (`\r\n`); that is intentional.

When publish is requested, the commit contains the intended tracked source plus only understood generated artifacts.

**Complete when:** every generated-file delta is classified as a meaningful data change, timestamp-only churn (unstaged), or intentional calendar CRLF; if publish was requested, the commit contains tracked source plus only those understood generated artifacts.
