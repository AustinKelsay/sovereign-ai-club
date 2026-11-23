# Voice and Format

Load this reference before writing or rewriting any Topic title, description, Release Roundup, Presenter Note, or Showcase.

## How the host uses a slide

Presentation Mode projects three text elements stacked in view: the **title**, the **description**, and the public **Presenter Notes** callout. The coordinator reads or paraphrases the slide aloud in real time to open a Socratic room discussion.

Write every slide as a **cue card**, not a wire-service summary. A good slide hands the host the real story in one breath and drops a live wire into the room.

## Find the turn

News summaries recite what was announced. Sovereign AI Club copy names the **turn**—what is actually happening underneath the headline:

- **Pitch vs. reality:** contrast the launch line with what the repo, license, architecture, or independent test actually shows (*runs locally on Mac, still locked inside a paid closed app*; *346k GitHub stars, yet an independent test beat it by telling Claude to install Ghidra*).
- **Behavior-changing numbers:** tie a number to what it unlocks or breaks (*at $0.30/M tokens, Revolut's engineers stopped rationing tokens*; *one email attachment roots the gateway through the feature meant to screen attachments*).
- **Power, exit, and trust boundaries:** name who gained control, who lost an exit, or where a safety boundary actually stops (*confidential enclaves protect memory from the host, not from a bug in the inference server running inside them*).

Attribute vendor or author claims in plain words (`its makers say`, `on its own eval`, `by his math`) so the room knows what is verified versus claimed without bureaucratic hedging.

## Titles

Write a **one-breath headline** (roughly 5–10 words) with a concrete actor or artifact, a plain active verb, and the hook or twist. Reading only the title should tell the host what happened before he looks at the body.

Strong house titles:

- `Claude gets its cloud-bill moment`
- `Grok Build uploaded the repo, not just the context`
- `Mythos 5 kept telling itself the internet was fake`
- `Palantir discovers AI sovereignty`
- `Models learn to please the grader, not the user`
- `One crafted email can root Cisco's email security gateway`
- `Revolut makes self-hosted GLM the default for 2,000 engineers`
- `DeepMind proves Signal's encryption holds down to the machine code`
- `Voters limited data centers in 40 of 41 local ballot measures`
- `Stop prompting agents, start designing loops`

Upgrade weak shapes on sight:
- **Bare noun labels** (`Cantina's apex-flash-1`, `OpenAI's hidden office recorder`) give the host no cue. Turn them into what happened (`Cantina trains an open bug-hunting model at $2.38 a run`; `OpenAI used its own models to catch an office leak`).
- **Colon-stacked spec lists** (`Editing weights instead of retraining: Deletion Tuning, Astra, and Qwenputer`, `Linux kernel TCP bug CVE-2026-98432 is rated 9.8`) clog the tongue. Lead with the sharpest move and let the description name the parts (`Three teams edit model weights directly instead of retraining`; `Critical Linux kernel TCP bug hits 9.8: update and reboot`).
- **Official Release Roundups** keep their exact canonical titles: `Closed model releases` and `Open model releases`.

## Slide descriptions (the cue card)

Write for the mouth, in plain everyday English:

- **1–2 short sentences, ~25–50 words.** Sentence 1 states what shipped, broke, or changed. Sentence 2 delivers the **turn**—the catch, contrast, or consequence that makes builders care.
- **Plain spoken verbs and contractions:** `ask for`, `sees`, `broke out of`, `fixes prefix caching`, `it's`, `doesn't`. Keep sentence structure flat—two short sentences beat one multi-clause mouthful.
- **One headline number on the slide:** keep the single figure that makes the room sit up, and evict secondary benchmarks, launch dates, sub-versions, and license minutiae into `notes`.
- **End on a sharp fact or tension:** let the coordinator open the floor live (skip printed Socratic questions at the end of slides).

### Example: wire recap → cue card + notes

Dense first-pass draft (too many clauses, buries the tension, hard to read aloud):
> On November 9 Amazon's AWS made Nitro Sandboxes available: each EKS pod, ECS task, or lightweight VM, including an agent running LLM-generated code, gets its own hardware-isolated Nitro VM on a shared EC2 instance, with attestation so secrets go only to sandboxes that prove their integrity, at no extra charge. The same day Google announced TPU 8tx for confidential inference, which keeps data and model weights protected even in memory while they're being processed.

Refined slide + Presenter Notes:
```md
- **AWS and Google make hardware isolation a default for agents** - AWS now gives every EKS pod or ECS task its own hardware-isolated Nitro VM at no extra charge, with attestation before secrets unlock. The same day, Google unveiled TPU 8tx to keep prompts and weights encrypted in memory—though NEAR AI's breach later on this board shows what hardware isolation still misses.
  Source: https://aws.amazon.com/about-aws/whats-new/2026/11/nitro-sandboxes-eks-ecs-ec2/
  Blog: https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/
  Post: https://x.com/kylegalbraith/status/2119843556051603752
```
Presenter Notes (`notes` in `src/data.js`):
> Turning Nitro Sandboxes on is a one-line EKS/ECS change with native Firecracker support. Google claims up to 2x lower latency on TPU 8tx than 8t, with no price or ship date yet.

## Release Roundups (`Closed model releases` / `Open model releases`)

Presentation Mode scrolls the full launch-post and link catalog directly below the text (`releaseRoundup: true`). Write the description as a **20-second host intro**, not a roll call of every link:

- **2–3 short sentences (~45–75 words).**
- Lead with the **shape of the wave** and the **2–4 standout launches** (e.g., cyber-gated frontier tiers, trillion-parameter open MoEs, laptop-sized specialists, or price drops).
- Name the **one catch** to watch while scrolling: access gates, weights promised-not-shipped, or restrictive non-OSI licenses.
- Move per-model pricing, parameter splits, and specific license carve-outs into `notes`.

## Presenter Notes (`notes` in `src/data.js`)

Presenter Notes render publicly on the slide right under the description. Treat them as the host's scannable overflow valve, never a second essay:

- **1–3 crisp sentences (under ~50 words for standard Topics; up to ~80 words for crowded Release Roundups).**
- Hold what was cut from the slide to keep it speakable: secondary numbers, exact caveats, license traps, skeptical pushback, cross-links to another slide, or live demo cues.
- Include only facts the host cannot infer from the title and description, written cleanly enough for public readers.

## Showcases

Casual, direct, and demo-oriented: 1–2 plain sentences naming who is presenting, what they built or run, and what the room will see live.

## Spoken-copy gate

Read every title, description, and note aloud once before finishing. Copy passes only when every check holds:

- **Title gives the story:** 5–10 words (except canonical Release Roundups), naming the actor/artifact and the move or twist so the host knows the story from the headline alone.
- **Carries the turn:** states what actually changed plus the catch, contrast, or builder consequence—never a bare press-release summary.
- **Cue-card length:** 1–2 short spoken sentences (~25–50 words) for standard Topics; 2–3 short sentences (~45–75 words) for Release Roundups summarizing the wave rather than reciting every model.
- **Speakable in one breath:** plain everyday verbs, flat clauses, no stiff jargon, and at most one headline number on the slide.
- **Clean ending:** lands on a concrete fact or tension so the host asks the room live.
- **Evidence-bound:** every claim, status, and number matches a linked source, with vendor or author claims plainly attributed.
- **Scannable notes:** `notes` stay brief (1–3 crisp sentences) and carry only evicted numbers, caveats, pushback, or host cues.
- **Direct Showcases:** state who is demoing and what the room will see.
