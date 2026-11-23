---
title: Sovereign AI Club - November 25, 2026 - Link Records
created: 2026-11-16
updated: 2026-11-23
type: summary
tags: [source-record]
sources: []
---

# Sovereign AI Club - November 25, 2026 - Link Records

Event listings and Topic sources for [[Sovereign AI Club - November 25, 2026]]. Organizer confirmed the reschedule from Wednesday, November 18 to Wednesday, November 25, 2026. Topic sources accessed and verified November 23, 2026. X post text was read through FxTwitter and verified against primary sources and Grok 4.7 X search; canonical URLs are preserved. Maker benchmarks, licenses, incident attributions, and unreviewed papers remain attributed to their publishers. No full third-party text is archived.

Community: [Official public Signal group](https://signal.group/#CjQKIIM2H4OE6vOvrGqi5aMPOgQWPRU6boBJvVhJVhbb2N-pEhC1hNgAqbQ9Tc_7g5KeE3XR).

Listings verified November 16: [Bitcoin Park Meetup](https://www.meetup.com/bitcoin-park-austin/events/317149461/) and [Austin Computer Club Meetup](https://www.meetup.com/austin-computer-club/events/317462120/), Wednesday, November 25, 2026, 5:30–7:30 PM CST, Bitcoin Park Austin.

## Agent Infrastructure

### Vercel ships a shared message board for agent swarms

- **Vercel: Introducing Vercel Board** — https://vercel.com/blog/introducing-vercel-board
  Type: blog post. Accessed: 2026-11-23. Launched November 18, 2026. Shared message log for people and agents with channels, threads, task claims, leases, and sync to Slack, GitHub, and Linear; notes v0 merges over 50% of PRs on Board and launch demo was scripted.
- **vercel/board** — https://github.com/vercel/board
  Type: GitHub repository. Accessed: 2026-11-23. Apache 2.0 CLI and protocol; supports local server (`npx @vercel/board serve`) though default points at Vercel's hosted API.
- **Guillermo Rauch's launch post** — https://x.com/rauchg/status/2123237505810178434
  Type: X post. Accessed: 2026-11-23. Frames Vercel Board as "headless Slack" / IRC for agent swarms.
- **Matt Pocock's critique** — https://x.com/mattpocockuk/status/2124797717834543167
  Type: X post. Accessed: 2026-11-23. Praises the primitive while arguing teams should build their own vendor-free queue and noting Board lacks an unread queue.

### Firecrawl Local rebuilds scraping in Rust at 11 MB idle

- **Firecrawl Local changelog** — https://www.firecrawl.dev/changelog/firecrawl-local
  Type: release notes. Accessed: 2026-11-23. November 18, 2026 launch of single Rust binary (`cargo install firecrawl-local`) serving Firecrawl v2 API on localhost:3002 and MCP; claims 37x faster and 11 MB idle.
- **firecrawl/firecrawl** — https://github.com/firecrawl/firecrawl
  Type: GitHub repository. Accessed: 2026-11-23. Licensed AGPL-3.0; `apps/local` holds local binary while search and Alexandria `find-tools` still hit Firecrawl Cloud unless disabled.
- **Firecrawl announcement** — https://x.com/firecrawl/status/2123096169630912637
  Type: X post. Accessed: 2026-11-23. Launch post for Firecrawl Local.

### Energy cuts agent sandbox bills 88% by moving to GKE

- **comp-work/gke-sandboxes** — https://github.com/comp-work/gke-sandboxes
  Type: GitHub repository. Accessed: 2026-11-23. Apache 2.0 gVisor-based agent sandboxes on GKE with Cloud Storage snapshots for sleeping containers and an idle sweeper.
- **Emil Ahlbäck's post** — https://x.com/emilahlback/status/2123112073517228286
  Type: X post. Accessed: 2026-11-23. Reports cutting Energy's sandbox cost from 16.6¢ (Daytona/E2B list price) to 1.9¢/sandbox-hour across 520 awake sandboxes on 12 GKE nodes.

### Vercel Labs' screen-relay streams desktops to agents at 120 fps

- **screen-relay documentation** — https://screen-relay.dev/docs
  Type: documentation. Accessed: 2026-11-23. Local H.264 desktop streaming and input API for macOS, Linux, and Windows; loopback by default, bearer token in URL when bound remotely.
- **vercel-labs/screen-relay** — https://github.com/vercel-labs/screen-relay
  Type: GitHub repository. Accessed: 2026-11-23. Apache 2.0 package linking system GPL x264 encoder; CLI, SDK, and HTTP/WebSocket control.
- **Lahfir's launch post** — https://x.com/lahfir/status/2123260406424838357
  Type: X post. Accessed: 2026-11-23. Introduces `screen-relay` with up to 120 fps streaming and agent input API.

### Pirate Face ships a CLI to torrent open models

- **Pirate Face** — https://pirateface.co
  Type: project site. Accessed: 2026-11-23. Torrent catalog and swarm tracker for open-weight models; self-reports ~37,000 indexed models and 30,000+ seeders.
- **pirateface/pirateface_cli** — https://github.com/pirateface/pirateface_cli
  Type: GitHub repository. Accessed: 2026-11-23. MIT CLI (`pip install pirateface`) with `pf download`, `pf seed`, and `pf work` for hash-checked torrent distribution and cached magnet fallback.
- **Pirate Face CLI launch post** — https://x.com/thepirateface/status/2122729928177385483
  Type: X post. Accessed: 2026-11-23. November 17 announcement of the Pirate Face CLI.

### Lastbook packs an offline survival library with local LLM chat

- **Lastbook** — https://lastbook.org
  Type: project site. Accessed: 2026-11-23. Offline desktop survival and rebuilding library with maps, videos, manuals, and llama.cpp chat.
- **Immortal-Protocols/lastbook** — https://github.com/Immortal-Protocols/lastbook
  Type: GitHub repository. Accessed: 2026-11-23. MIT code and docs (distributed bundles include GPL third-party components); optional Gemma 4 26B A4B model download.
- **farbood's post** — https://x.com/farbood/status/2122156054163366170
  Type: X post. Accessed: 2026-11-23. Reports first 48 hours of Lastbook downloads and invites agent-written PR contributions.

## Models & Research

### Closed model releases

- **OpenAI: Introducing GPT-6.2 Astra and GPT-6.2 Sol** — https://openai.com/index/introducing-gpt-6-2-astra-sol/
  Type: official blog. Accessed: 2026-11-23. November 17 launch; both rated Critical for cybersecurity, Astra first external OpenAI model rated High for AI self-improvement, 20% lower standard token pricing than GPT-6 Astra.
- **OpenAI GPT-6.2 launch post** — https://x.com/OpenAI/status/2122750130290131166
  Type: X post. Accessed: 2026-11-23. Announces GPT-6.2 Astra and GPT-6.2 Sol.
- **Google: Introducing Gemini 4 Neon** — https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
  Type: official blog. Accessed: 2026-11-23. November 18 launch of mid-tier Gemini 4 Neon at $3/$15 per million tokens with $0.15 cached input (95% discount) and 1M context.
- **Sundar Pichai on Gemini 4 Neon** — https://x.com/sundarpichai/status/2123167785790648751
  Type: X post. Accessed: 2026-11-23. Launch announcement for Gemini 4 Neon.
- **Google AI on Gemini 4 Neon** — https://x.com/GoogleAI/status/2123168242797809944
  Type: X post. Accessed: 2026-11-23. Details Gemini 4 Neon developer and Antigravity availability.
- **Qwen: Qwen4-Max** — https://qwen.ai/blog?id=qwen4-max
  Type: official blog. Accessed: 2026-11-23. November 16 launch of 2.4T backbone / 71B active flagship with native vision and 1M context at $1.50/$4.50 per million; smaller Qwen4 weights promised with no date.
- **Alibaba Qwen launch post** — https://x.com/Alibaba_Qwen/status/2122148127520289151
  Type: X post. Accessed: 2026-11-23. Announces Qwen4-Max.
- **Z.ai: GLM-5.4** — https://z.ai/blog/glm-5.4
  Type: official blog. Accessed: 2026-11-23. November 23 launch of Z.ai's first flagship Loop Transformer running 28 GLM-5 layers twice; Coding Plan only, API awaiting safety review, weights promised without a date, no benchmark table published.
- **Z.ai GLM-5.4 launch post** — https://x.com/Zai_org/status/2124811995912286352
  Type: X post. Accessed: 2026-11-23. Introduces GLM-5.4 Loop Transformer with vision and generalized coding.
- **SID AI: Models** — https://www.sid.ai/models
  Type: product page. Accessed: 2026-11-23. Closed-corpus bring-your-own-documents search model and multi-agent swarm API.
- **SID-2 Technical Report** — https://www.sid.ai/research/sid-2-technical-report
  Type: technical report. Accessed: 2026-11-23. Vendor benchmarks across 506 questions on 19 corpora comparing SID-2 and Swarms against Opus 5.5 and GPT-6 Astra.
- **Max Rumpf on SID-2** — https://x.com/maxrumpf/status/2122758430721204407
  Type: X post. Accessed: 2026-11-23. November 17 launch post claiming 8x faster and 20x cheaper search than Opus/Astra.

### Open model releases

- **Thinking Machines: Inkling 2 Small** — https://thinkingmachines.ai/news/inkling-2-small/
  Type: official blog. Accessed: 2026-11-23. Updated November 12 with Apache 2.0 weight release for 594B/17B-active multimodal MoE.
- **Hugging Face: thinkingmachines/Inkling-2-Small** — https://huggingface.co/thinkingmachines/Inkling-2-Small
  Type: model card. Accessed: 2026-11-23. Apache 2.0 NVFP4 weights requiring ~500 GB aggregate VRAM (plus MXFP8 twin).
- **Thinking Machines Inkling 2 Small weights post** — https://x.com/thinkymachines/status/2120982625582195011
  Type: X post. Accessed: 2026-11-23. Announces November 12 Apache 2.0 weight release.
- **Thinking Machines: End-to-End 4-Bit Training** — https://thinkingmachines.ai/blog/end-to-end-4-bit-training/
  Type: technical blog. Accessed: 2026-11-23. Details NVFP4 forward passes with MXFP8 backward passes used to pretrain Inkling 2 Small in 68 hours on GB300 NVL72.
- **Thinking Machines 4-bit training post** — https://x.com/thinkymachines/status/2121353292878110868
  Type: X post. Accessed: 2026-11-23. Shares the Connectionism native 4-bit training writeup.
- **Thinking Machines: Introducing Inkling 2 Mini** — https://thinkingmachines.ai/news/inkling-2-mini/
  Type: official blog. Accessed: 2026-11-23. November 20 launch of 26.4B total / 3.4B active looped MoE (middle 12 layers run 3x) aimed at 32 GB Macs and DGX Spark.
- **Hugging Face: thinkingmachines/Inkling-2-Mini** — https://huggingface.co/thinkingmachines/Inkling-2-Mini
  Type: model card. Accessed: 2026-11-23. Apache 2.0 weights (~20 GB NVFP4/MXFP8), 1M context, Ollama support.
- **Thinking Machines Inkling 2 Mini post** — https://x.com/thinkymachines/status/2123871643797995872
  Type: X post. Accessed: 2026-11-23. Announces Inkling 2 Mini with vendor 20.1 AA Index score.
- **Alex Robey on Inkling 2 Mini monitorability** — https://x.com/AlexRobey23/status/2123872680718082542
  Type: X post. Accessed: 2026-11-23. Explains opening looped-transformer weights so safety researchers can study loop monitorability.
- **Hugging Face: RadixArk/DaisyRose-27B** — https://huggingface.co/RadixArk/DaisyRose-27B
  Type: model card. Accessed: 2026-11-23. Apache 2.0 RL-only post-train of Qwen3.8-27B over 1,200 long-horizon agent tasks (18 days on 144 H200s); vendor reports Terminal-Bench 4.1 rising from 5.6% to 12.0%.
- **RadixArk DaisyRose-27B post** — https://x.com/radixark/status/2123115052127633536
  Type: X post. Accessed: 2026-11-23. November 18 launch post for DaisyRose-27B.
- **Plotly: DaisyRose-27B on Plotly Data Analytics Bench** — https://plotly.com/blog/daisyrose-27b-plotly-data-analytics-bench/
  Type: third-party benchmark. Accessed: 2026-11-23. Independent evaluation scoring DaisyRose-27B at 34/43 versus 38/43 for base Qwen3.8-27B.
- **Hugging Face: apple/FastFrames-L** — https://huggingface.co/apple/FastFrames-L
  Type: model card. Accessed: 2026-11-23. 14B interactive-latency text-to-video model distilled from Wan2.1-14B under non-commercial Apple AMLR license.
- **FastFrames paper (arXiv:2611.23226)** — https://arxiv.org/abs/2611.23226
  Type: paper. Accessed: 2026-11-23. Describes 1.3B FastFrames-S (1 GPU, ~36 ms/frame) and 14B FastFrames-L (profiled on 8 GPUs) using Causal Forcing++.
- **apple-aiml-research/ml-fastframes** — https://github.com/apple-aiml-research/ml-fastframes
  Type: GitHub repository. Accessed: 2026-11-23. Sample code for FastFrames under Apple Sample Code License.
- **Victor Mustar on Apple FastFrames** — https://x.com/victormustar/status/2122818132704124984
  Type: X post. Accessed: 2026-11-23. Highlights Apple's FastFrames-L drop on Hugging Face.

### Baseten and Magnitude push open-model speed from opposite ends

- **basetenlabs/deepseek-ultrafast** — https://github.com/basetenlabs/deepseek-ultrafast
  Type: GitHub repository. Accessed: 2026-11-23. From-scratch Rust + CUDA engine for DeepSeek V4.1-Flash under Elastic License 2.0 (no hosted/managed service); requires Blackwell GPUs and reports 1,740–2,060 tok/s on a single Tetris prompt with speculative decoding.
- **Baseten launch post** — https://x.com/baseten/status/2121373358717862213
  Type: X post. Accessed: 2026-11-23. November 13 announcement of Baseten's Rust+CUDA DeepSeek V4.1-Flash engine.
- **magnitudedev/magnitude** — https://github.com/magnitudedev/magnitude
  Type: GitHub repository. Accessed: 2026-11-23. Apache 2.0 auto-tuned local inference engine across Apple Silicon, NVIDIA, AMD, Intel, and CPU.
- **Tom Greenwald on SSD expert streaming** — https://x.com/tomgreenwald/status/2123875212093747663
  Type: X post. Accessed: 2026-11-23. Argues SSD streaming is the next frontier for ultra-sparse MoEs and teases DeepSeek V4.1-Flash at ~40+ tok/s on one gaming GPU.
- **Tom Greenwald schedule update** — https://x.com/tomgreenwald/status/2124890020263727264
  Type: X post. Accessed: 2026-11-23. Clarifies Monday's build lacked full SSD expert streaming and moves the release and benchmarks to Tuesday, November 24.

### Levent Alpöge and Claude produce a Lean-verified Riemann Hypothesis proof

- **Levent Alpöge: Remark** — https://alpo.ge/remark.pdf
  Type: note. Accessed: 2026-11-23. Four-page announcement from Anthropic's Levent Alpöge stating that he and Claude produced a Lean proof of the Riemann Hypothesis and Dirichlet GRH.
- **Lean Community: Lean verification of the Riemann Hypothesis** — https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
  Type: verification report. Accessed: 2026-11-23. November 21 certification by Lean FRO and Mathlib Initiative verifying the classical Riemann Hypothesis statement across 175,187 files / 17.4M lines using independent kernels.
- **leanprover-community/riemann-hypothesis** — https://github.com/leanprover-community/riemann-hypothesis
  Type: GitHub repository. Accessed: 2026-11-23. Public Lean verification repository for Alpöge's proof.
- **Ravi Vakil: Hurried Announcement (Alessandro Masullo GRH)** — https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/
  Type: blog post. Accessed: 2026-11-23. November 20 announcement of Masullo's ~940-page "all human" GRH draft, updated eight hours later to walk back endorsement after AI-assisted readers flagged problems.
- **Yifan Zhang's post** — https://x.com/yifanzhang_/status/2123789252756414577
  Type: X post. Accessed: 2026-11-23. Viral November 20 post linking `alpo.ge/remark.pdf`.
- **MTS on Vakil's Masullo release** — https://x.com/MTSlive/status/2123852228092195283
  Type: X post. Accessed: 2026-11-23. Notes AMS president Ravi Vakil's hurried release of Masullo's human GRH draft the same day.

### Praxis brings general witness encryption down to 8 GB

- **Praxis: Practical Witness Encryption for NP (IACR ePrint 2026/2971)** — https://eprint.iacr.org/2026/2971
  Type: preprint. Accessed: 2026-11-23. David Tse, Nikhil Vanjani, and Psi Vesely (Byzantine Research / Stanford). 7.88 GiB ciphertext at 100-bit security targeting a Groth16 BN254 verifier with Lean 4 correctness and extraction proofs; passed ePrint moderation, not peer reviewed.
- **David Tse's post** — https://x.com/dntse/status/2124858372386337089
  Type: X post. Accessed: 2026-11-23. Highlights motivation for non-interactive proof verification on Bitcoin without BitVM challengers and claims 10 orders of magnitude reduction over Hair and Sahai.

### Anthropic's FlashProve and UIUC's zkTransformer push provable inference

- **Anthropic: Provable inference for LLMs (FlashProve)** — https://www.anthropic.com/research/provable-inference
  Type: research post. Accessed: 2026-11-23. zkSNARK prototype proving 4-bit integer greedy decoding on 400B Llama 4 Maverick (~70–95x GPU time of vLLM, 19 MB proof, ~17s verify).
- **anthropics/FlashProve** — https://github.com/anthropics/FlashProve
  Type: GitHub repository. Accessed: 2026-11-23. Apache 2.0 research prototype explicitly marked "Not maintained."
- **Daniel Kang: zkTransformer** — https://ddkang.substack.com/p/zktransformer-making-it-10-faster
  Type: blog post. Accessed: 2026-11-23. CCS 2026 EinSumcheck and StructuredExp techniques speeding GPT-2 proving ~10x over prior sumcheck systems (~1.7s/token over 112 tokens).
- **uiuc-kang-lab/zkTransformer** — https://github.com/uiuc-kang-lab/zkTransformer
  Type: GitHub repository. Accessed: 2026-11-23. Apache 2.0 implementation of zkTransformer.
- **Daniel Kang's post** — https://x.com/ddkang/status/2123445796188443051
  Type: X post. Accessed: 2026-11-23. Summarizes zkTransformer in reply to Anthropic's FlashProve announcement.

### Google open-sources gBench to test local open models

- **google-deepmind/gbench** — https://github.com/google-deepmind/gbench
  Type: GitHub repository. Accessed: 2026-11-23. Apache 2.0 benchmark harness for Gemma and open-weight LLMs/VLMs with 86 eval suites, 16 Golden Set smoke tests including chat-template sensitivity pairs, and 60 Dockerized GemmaClaw/OpenClaw agent scenarios against any OpenAI-compatible endpoint (vLLM, Ollama).
- **PyPI: gbench** — https://pypi.org/project/gbench/
  Type: package page. Accessed: 2026-11-23. Python package distribution for Google DeepMind's gBench.
- **Google Gemma launch post** — https://x.com/googlegemma/status/2124935724999073902
  Type: X post. Accessed: 2026-11-23. November 23 announcement of gBench with OpenAI-compatible local endpoint support.

### Vals launches a public ledger of models caught cheating

- **Vals Misalignment Incidents** — https://www.vals.ai/incidents
  Type: public database. Accessed: 2026-11-23. 15 initial episodes across DeepSeek, Kimi, MiniMax, Beam, Muse, Mistral, Gemini, Grok, and Claude, with public incident submission form.
- **Vals AI blog: Misalignment Incidents** — https://www.vals.ai/blogs/misalignment-incidents
  Type: blog post. Accessed: 2026-11-23. Nikil Ravi explains the two-stage trace-screening method and stresses the set is a curated subset, not a per-model rate or ranking.
- **Vals AI launch post** — https://x.com/ValsAI/status/2123897329011085381
  Type: X post. Accessed: 2026-11-23. November 20 announcement of Vals Misalignment Incidents.
- **Nikil Ravi's thread** — https://x.com/nikilravi/status/2123917585381265719
  Type: X post. Accessed: 2026-11-23. Author context and call for outside misalignment incident reports.

### Uncensored models: most are repacks, and Pliny's 10-word hack misfired

- **The Aeon Forge: Where Uncensored Models Come From** — https://lotusmake.com/posts/where-uncensored-models-come-from
  Type: research blog. Accessed: 2026-11-23. November 21–22 census of 3,352 Hugging Face uncensored descendants of Qwen3.8-27B, Qwen3.6-27B, and Gemma 4 12B: 2,161 declared repacks, 189 silent copies, 177 distinct edits, 825 unmeasurable.
- **ÆON FORGE's post** — https://x.com/SpaceTimeViking/status/2124349653693190594
  Type: X post. Accessed: 2026-11-23. Shares the abliteration census and explains compute costs of original uncensored edits.
- **Pliny's "Vocab Surgery" claim** — https://x.com/elder_plinius/status/2124584972866498884
  Type: X post. Accessed: 2026-11-23. Viral November 22 post claiming editing 7 embedding and 10 unembedding rows on Inkling 2 Mini cut refusals near zero in under two minutes.
- **Pliny's same-evening correction** — https://x.com/elder_plinius/status/2124637991436173436
  Type: X post. Accessed: 2026-11-23. Discloses a baked-in prefill in the GGUF chat template did most of the work after his agent misread the template as stock.

### Viral agent-swarm demos: 1:1 Minecraft Earth and P=NP live

- **Worldcraft.gg** — https://worldcraft.gg
  Type: project site. Accessed: 2026-11-23. On-demand 1:1 Minecraft Earth server powered by OpenStreetMap and an algorithm tuned by ~250 agents ("program learning," no published weights or repo).
- **thijs's viral Minecraft Earth post** — https://x.com/cdngdev/status/2122416145517117463
  Type: X post. Accessed: 2026-11-23. 20M+ view launch video pitching a 1:1 world-to-Minecraft generator.
- **pequalnp.com** — https://pequalnp.com
  Type: project site. Accessed: 2026-11-23. Livestreamed multi-agent Lean-lemma dashboard built by Brilliant CEO Amichai Mantinband as an agent-hub stress test.
- **Amichai Mantinband's post** — https://x.com/amihai/status/2124634001381933448
  Type: X post. Accessed: 2026-11-23. Quote-post tracking viral Reddit attention for `pequalnp.com`.

## Security

### Canary prompts expose broken Zero Data Retention across AI routers

- **Dragos: AI Supply Chain Security: What Canary Tokens Found** — https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens
  Type: research blog. Accessed: 2026-11-23. HD Moore details two million canary-seeded prompts across July–November 2026 catching three compromised hosts, reseller prompt logging, stolen AWS keys, and ignored ZDR flags.
- **OpenRouter: Data Processing Incidents on Inference Providers** — https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/
  Type: vendor notice. Accessed: 2026-11-23. November 22 statement confirming OpenRouter was not breached, announcing three off-boarded providers and 125 stripped ZDR endpoints, and linking provider notices.
- **Prime Intellect Security Advisory PI-SA-2026-001** — https://www.primeintellect.ai/security/advisories/deepseek-v4-1-flash-model-substitution
  Type: security advisory. Accessed: 2026-11-23. Documents 53-hour unauthorized swap of DeepSeek V4.1-Flash to public abliterated weights (Nov 8–10); reports no evidence of prompt or key exfiltration.
- **Together AI: Security Event Prompt Leakage** — https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026
  Type: vendor postmortem. Accessed: 2026-11-23. November 21 disclosure that coding agent `xorl` committed a Hugging Face key to a public GitHub repo, exposing stored June–July prompt test samples including five Dragos canaries.
- **Axios: OpenRouter MiniMax customer data forwarding** — https://www.axios.com/2026/11/23/openrouter-minimax-china-customer-data
  Type: news report. Accessed: 2026-11-23. Confirms customer emails detailing Atlas Cloud, Novita, and StreamLake forwarding MiniMax traffic to MiniMax where canary URLs were later fetched.
- **The Hacker News: OpenRouter drops 3 providers** — https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html
  Type: news report. Accessed: 2026-11-23. Covers OpenRouter's provider removals and ZDR revocations following Dragos's canary findings.
- **HD Moore's post** — https://x.com/hdmoore/status/2123451306685661416
  Type: X post. Accessed: 2026-11-23. Summarizes Dragos's two-million-canary findings.
- **The Hacker News post on OpenRouter** — https://x.com/thehackersnews/status/2124369776827097236
  Type: X post. Accessed: 2026-11-23. Reports OpenRouter dropping three providers and 125 ZDR endpoints.
- **Theo on Prime Intellect disclosure** — https://x.com/theo/status/2123430257697157587
  Type: X post. Accessed: 2026-11-23. Surfaces OpenRouter's customer notice on the Prime Intellect compromise.
- **John Scott-Railton on neocloud/router breaches** — https://x.com/jsrailton/status/2123443503963267279
  Type: X post. Accessed: 2026-11-23. Connects the Prime Intellect model swap to broader prompt-theft risks on routers and neoclouds.
- **Michael Chomsky on MiniMax canary fetches** — https://x.com/michael_chomsky/status/2124008002571428224
  Type: X post. Accessed: 2026-11-23. Summarizes AtlasCloud/Novita/StreamLake forwarding MiniMax requests and secret links opening 40–130 hours later.
- **Michael Chomsky on GMI Cloud customer email** — https://x.com/michael_chomsky/status/2124326400803152021
  Type: X post. Accessed: 2026-11-23. Shares customer-reported notice of GMI Cloud's three-day retention compromise (unconfirmed publicly by GMI).
- **Vikram Singh's four-incident roundup** — https://x.com/vikramcantsingh/status/2124303418282086569
  Type: X post. Accessed: 2026-11-23. Lists Together AI, GMI Cloud, MiniMax resellers, and Prime Intellect across one week.

### Fireworks breach cascades into a fake Claude Code inside Cursor

- **Cursor: An update on our recent security incident** — https://cursor.com/blog/security-incident-update
  Type: vendor postmortem. Accessed: 2026-11-23. November 13 report tracing the October 29 malicious Claude Code extension builds (2.1.312/2.1.313, ~11 hours, up to 5,000 users) back to an access key exposed at Fireworks.
- **Fireworks AI Security Bulletins** — https://fireworks.ai/security-bulletins
  Type: security bulletin. Accessed: 2026-11-23. November 17 disclosure detailing two autumn incidents affecting account/billing data and select customer secrets and datasets.
- **Hari's breakdown of the Cursor report** — https://x.com/hrkrshnn/status/2121428647152095333
  Type: X post. Accessed: 2026-11-23. Five-step summary of the Fireworks → Cursor marketplace chain.
- **Cursor's announcement post** — https://x.com/cursor_ai/status/2121411147714970092
  Type: X post. Accessed: 2026-11-23. Links Cursor's November 13 security incident update.

### Anthropic moves 30-day safety logs to your cloud as "ZDR"

- **Anthropic: Zero data retention with Enterprise Frontier Safeguards** — https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards
  Type: official blog. Accessed: 2026-11-23. November 23 public beta moving 30-day Fable/Mythos cross-request monitoring storage into customer S3 or GCS buckets while Anthropic's automated monitor retains read access.
- **Anthropic: Enterprise Frontier Safeguards design overview** — https://www.anthropic.com/news/enterprise-frontier-safeguards
  Type: official blog. Accessed: 2026-11-23. Explains why Anthropic requires rolling multi-request monitoring for frontier models.
- **Austin Morrissey: When Should AI Labs Alert Police?** — https://austinpatrick.substack.com/p/when-should-ai-labs-alert-police
  Type: Substack essay. Accessed: 2026-11-23. Unverified second-hand account of a New Hampshire FBI visit following a Claude incognito joke; author explicitly notes he cannot attest to the events, while highlighting Anthropic's real ~30-day incognito retention policy.
- **Claude EFS beta announcement** — https://x.com/claudeai/status/2124929944530587712
  Type: X post. Accessed: 2026-11-23. Announces public beta of ZDR with Enterprise Frontier Safeguards.
- **Unicorn's viral retelling of the NH Claude story** — https://x.com/ohayou792/status/2124151555452719456
  Type: X post. Accessed: 2026-11-23. Chinese-language retelling of Morrissey's Substack post (~850k views).

### FBI warns on ARTEX while defenders build AI decoy mazes

- **FBI FLASH Advisory 20261113-001 (ARTEX)** — https://www.ic3.gov/CSA/2026/261113.pdf
  Type: government advisory. Accessed: 2026-11-23. November 13 warning that threat actors use the ARTEX pentest agent to reach privileged access in under three hours, citing ConnectWise and South Korean incidents.
- **Google Threat Intelligence Group: Agentic Threat Activity** — https://cloud.google.com/blog/topics/threat-intelligence/agentic-threat-activity-crosses-a-significant-threshold/
  Type: threat report. Accessed: 2026-11-23. November 16 report detailing `exploit_agent` found on an exposed server auto-diffing software patches into exploits, plus active use of ARTEX and peers.
- **OrcaRouter Shield documentation** — https://docs.orcarouter.ai/security/shield/overview
  Type: product docs. Accessed: 2026-11-23. Active-deception layer feeding offensive agents fake `.env`/`.git` mazes; vendor cites 87% diversion internally with no independent tests yet.
- **FBI Dallas post on ARTEX** — https://x.com/fbidallas/status/2122706613014323682
  Type: X post. Accessed: 2026-11-23. Summarizes FBI FLASH alert on ARTEX and ConnectWise downstream authentication attempts.
- **News from Google on GTIG report** — https://x.com/newsfromgoogle/status/2122446058370597070
  Type: X post. Accessed: 2026-11-23. Highlights automated patch-to-exploit LLMs and pitches Google AI Threat Defense.
- **Cloudforce One on ARTEX + Java4Shell** — https://x.com/cloudforce_one/status/2123098021596725484
  Type: X post. Accessed: 2026-11-23. Reports observing ARTEX and Java4Shell activity from the same IP on November 18.
- **OrcaRouter Shield launch post** — https://x.com/orcarouter/status/2123258076921053596
  Type: X post. Accessed: 2026-11-23. Demos Shield trapping ARTEX inside a synthetic decoy maze.

### Optimizely signup flaw injects malware across 178 major websites

- **Report URI: World's Largest Brands Infected With Malware via Optimizely** — https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/
  Type: security research. Accessed: 2026-11-23. Scott Helme documents malicious JavaScript in 188 of 1,611 checked Optimizely Web snippets across 178 organizations carrying card skimmers, crypto swaps, and iOS exploits.
- **Optimizely Web Experimentation Security Advisory** — https://support.optimizely.com/hc/en-us/articles/50521849710605-Security-Advisory-Web-Experimentation-Security-Incident-Updated-November-19-2026
  Type: vendor advisory. Accessed: 2026-11-23. Confirms signup-flow impersonation bug affecting under 5% of Web Experimentation customers and same-day November 16 remediation.
- **The Hormuz Letter post on Optimizely** — https://x.com/hormuzletter/status/2122535982591365248
  Type: X post. Accessed: 2026-11-23. Viral summary of Report URI's 178-organization Optimizely count.

### Patch list: nginx2root, Java4Shell, PHP, MySQL, and Microsoft PyPI

- **NGINX2Root by Xint** — https://nginx2root.com/
  Type: disclosure microsite. Accessed: 2026-11-23. Details five nginx CVEs (led by HTTP/2 memory corruption CVE-2026-123007) chained with a separate unpatched Linux SCTP local privilege escalation.
- **nginx news & security releases** — https://nginx.org/news.html
  Type: release notes. Accessed: 2026-11-23. Confirms November 18 patches in nginx 1.30.7 (stable) and 1.31.9 (mainline).
- **CISA Alert: Critical Java Vulnerability (Java4Shell)** — https://www.cisa.gov/news-events/alerts/2026/11/17/critical-java-vulnerability-requires-immediate-patching
  Type: government alert. Accessed: 2026-11-23. November 17 alert for CVE-2026-114938 in x86-64 HotSpot Base64 decoder (AVX-512 VBMI only; ARM64 unaffected).
- **NVD: CVE-2026-114952 (MySQL)** — https://nvd.nist.gov/vuln/detail/CVE-2026-114952
  Type: vulnerability record. Accessed: 2026-11-23. CVSS 9.1 unauthenticated MySQL client-programs flaw from Oracle's 10-patch November 17 update.
- **Wiz: Malicious version of Microsoft's agent-framework on PyPI** — https://www.wiz.io/blog/malicious-version-of-microsofts-agent-framework-published-to-pypi
  Type: security research. Accessed: 2026-11-23. Documents poisoned versions 1.26.1 and 1.26.2 using a `.pth` hook to steal cloud credentials on Python startup before quarantine within an hour.
- **The Hacker News: Microsoft Agent Framework PyPI hijack** — https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html
  Type: news report. Accessed: 2026-11-23. Covers the November 17 PyPI hijack of `agent-framework`.
- **The Hacker News: PHP November 19 critical flaws** — https://thehackernews.com/2026/11/php-warns-of-critical-security-flaws.html
  Type: news report. Accessed: 2026-11-23. Covers PHP 8.2.36–8.5.13 security releases addressing conditional RCE and crash bugs.
- **Brian Pak's nginx2root post** — https://x.com/brian_pak/status/2123071121553854545
  Type: X post. Accessed: 2026-11-23. Discloses nginx2root's five CVEs and links `nginx2root.com`.
- **CISA Cyber Java4Shell post** — https://x.com/cisacyber/status/2122821451635916849
  Type: X post. Accessed: 2026-11-23. Urges immediate patching of CVE-2026-114938.
- **cve.now MySQL alert** — https://x.com/cvedotnow/status/2122842326691201084
  Type: X post. Accessed: 2026-11-23. Flags MySQL CVE-2026-114952 (9.1).
- **The Hacker News Microsoft PyPI post** — https://x.com/thehackersnews/status/2122944680317067366
  Type: X post. Accessed: 2026-11-23. Alerts on malicious `agent-framework` 1.26.1 and 1.26.2.
- **The Hacker News PHP alert** — https://x.com/TheHackersNews/status/2123274064446017575
  Type: X post. Accessed: 2026-11-23. Alerts on PHP's November 19 critical patches.

### Mid-November outages spark a fight over AI-driven patching

- **Washington Sun: Bank CEOs, NSA tell Congress AI-driven patches behind outages** — https://www.washingtonsun.com/technology/bank-ceos-nsa-tell-congress-ai-driven-patches-behind-outages
  Type: news report. Accessed: 2026-11-23. November 18 report citing anonymous Wall Street and NSA sources blaming rushed patches for AI-found flaws.
- **FAA: Nationwide Ground Stop Q&A** — https://www.faa.gov/newsroom/nationwide-ground-stop-questions-and-answers
  Type: official statement. Accessed: 2026-11-23. Attributes November 13 ground stop to legacy FTI equipment flooding during a copper-to-fiber router swap, not an AI-vuln patch.
- **CNBC: DNI Jay Clayton warns of continued tech outages** — https://www.cnbc.com/2026/11/22/jay-clayton-tech-outages-faa-microsoft-thanksgiving.html
  Type: news report. Accessed: 2026-11-23. Covers Clayton's November 22 CNN warning of more "glitches, gaps, interruptions" during AI system upgrades after telling Congress outages weren't coordinated attacks.
- **Jeff Stein's post** — https://x.com/jstein_sun/status/2122854283536105498
  Type: X post. Accessed: 2026-11-23. Breaks the Washington Sun Congressional-briefing story.
- **The Hormuz Letter on DNI Clayton** — https://x.com/hormuzletter/status/2124598290163638623
  Type: X post. Accessed: 2026-11-23. Clips Jay Clayton's November 22 warning on ongoing outages.
- **Alex Stamos on bug-finding models and C/C++** — https://x.com/alexstamos/status/2123494169083552029
  Type: X post. Accessed: 2026-11-23. Argues humans can no longer write safe C/C++ against bug-finding models and custom enterprise vulns matter more than CVEs.
- **Andrew Howard's 30-day outage tally** — https://x.com/Andrew_J_Howard/status/2123457666525679979
  Type: X post. Accessed: 2026-11-23. Lists mid-October to mid-November outages across Google Cloud, hospitals, NYSE, Microsoft, Workday, FAA, AWS, Chase, NSA, and Apple.

### OpenAI and Cisco launch Shirudo for agent-written Linux shields

- **OpenAI: OpenAI and Cisco introduce Shirudo** — https://openai.com/index/introducing-shirudo/
  Type: official blog. Accessed: 2026-11-23. November 23 launch of BSD-2-Clause Linux runtime letting agents write signed eBPF shields without downtime; highlights Codex blocking Java4Shell on a live Elasticsearch server without restarting.
- **Cisco Isovalent: Shirudo announcement** — https://isovalent.com/blog/post/cisco-openai-shirudo/
  Type: official blog. Accessed: 2026-11-23. Partner post detailing Shirudo's signed eBPF upatches and boot-time enforcement.
- **shirudo-dev/shirudo** — https://github.com/shirudo-dev/shirudo
  Type: GitHub repository. Accessed: 2026-11-23. BSD-2-Clause pre-release runtime; README notes production targets require Shirudo's kernel patches (signed-loader ABI) and TPM 2.0.
- **OpenAI Shirudo launch post** — https://x.com/OpenAI/status/2124980590717911527
  Type: X post. Accessed: 2026-11-23. Announces Shirudo with Cisco as a first step toward self-defending Linux infrastructure.

## Big Tech Moves

### NVIDIA's board reinstates Jensen Huang eleven days after he resigned

- **NVIDIA: Board Reinstates Jensen Huang as President, CEO, and Board Director** — https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director
  Type: official press release. Accessed: 2026-11-23. November 23 unanimous board reinstatement following senior US government input; independent foreign-intelligence probe continues and NVIDIA creates a National Security and Export Control Committee.
- **NVIDIA Announces CEO Transition** — https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition
  Type: official press release. Accessed: 2026-11-23. November 12 announcement of Huang's resignation and CFO Colette Kress stepping in as interim CEO.

### Will DePue's weight forensics claim Chinese labs used Blackwell GPUs

- **Unemployment Labs: Checkpoint Forensics** — https://unemploymentlabs.com/checkpoint-forensics
  Type: research report. Accessed: 2026-11-23. November 12 report matching PyTorch cuRAND SM-count weight-init patterns in DeepSeek, Kimi, MiniMax, and Ant weights to NVIDIA Blackwell while noting init does not prove full training, location, or smuggling.
- **macrogrants/checkpoint-forensics** — https://github.com/macrogrants/checkpoint-forensics
  Type: GitHub repository. Accessed: 2026-11-23. Public verification code for DePue's weight-initialization forensics.
- **Will DePue's launch thread** — https://x.com/willdepue/status/2120992457630326841
  Type: X post. Accessed: 2026-11-23. Viral November 12 post (~41k likes) estimating $500M+ in export-controlled Blackwell clusters.
- **Daebak's technical teardown** — https://x.com/MyDaebakCafe/status/2121031084653637728
  Type: X post. Accessed: 2026-11-23. Points out PRNG init takes seconds on one node, one Adam step destroys bit-exact matches, and offshore cloud rental was legal for non-Entity-List labs.

### Washington squeezes Chinese open weights and overseas GPU rentals

- **BIS: Rule Addressing Remote Access to Advanced Semiconductors** — https://www.bis.gov/press-release/bis-issues-rule-addressing-remote-access-american-super-intelligence-technology
  Type: government rule. Accessed: 2026-11-23. Effective November 19; requires licenses for overseas data centers providing Chinese-headquartered firms over 12M aggregate TPP, rescinds Biden AI Diffusion Rule, and exempts US data centers.
- **Reuters: Trump administration weighs forcing US firms to disclose Chinese AI use** — https://www.reuters.com/world/china/trump-administration-weighs-forcing-us-firms-disclose-chinese-ai-use-2026-11-18/
  Type: news report. Accessed: 2026-11-23. November 18 exclusive on Treasury/OSTP proposal to require public website disclosure of Chinese open-weight models.
- **House Homeland Security & China Select Committee Joint Report** — https://homeland.house.gov/2026/11/20/chairmen-garbarino-moolenaar-release-joint-investigative-report-urging-removal-of-prc-open-weight-models-from-federal-systems-high-risk-critical-infrastructure/
  Type: congressional report. Accessed: 2026-11-23. November 20 report urging removal of PRC open-weight models from federal/critical infrastructure; Anysphere/Cursor told committees it plans to explore phasing them out.
- **Reuters: Trump, Xi agreed military AI decisions should involve humans, Bessent says** — https://www.reuters.com/world/china/trump-xi-agreed-that-military-ai-decisions-should-involve-humans-bessent-says-2026-11-20/
  Type: news report. Accessed: 2026-11-23. November 20 clarification of Trump's "joint guardrails" remark with no published treaty or technical text.
- **MTS on White House Chinese-model disclosure proposal** — https://x.com/mtslive/status/2123051208067928066
  Type: X post. Accessed: 2026-11-23. Flags Reuters' November 18 disclosure-proposal report.
- **Andrew Curran on Cursor's committee testimony** — https://x.com/andrewcurran_/status/2123841504242446572
  Type: X post. Accessed: 2026-11-23. Flags Cursor telling House committees it is considering phasing out Chinese open-weight models.
- **Marty Bent on overseas cloud GPU bans** — https://x.com/MartyBent/status/2123776359713431870
  Type: X post. Accessed: 2026-11-23. Questions how the US will enforce remote-access GPU export bans overseas.
- **Rob Hamilton on Trump–Xi joint guardrails** — https://x.com/rob1ham/status/2123869486969426416
  Type: X post. Accessed: 2026-11-23. Skeptical builder reaction quoting MTS's Trump–Xi guardrails post.

### Ninety AI figures sign "MisAnthropic" letter on Anthropic's IPO day

- **The MisAnthropic Statement** — https://misanthropicstatement.com
  Type: open letter. Accessed: 2026-11-23. November 18 CAIS-backed statement signed by ~90 AI figures on the day Anthropic priced its $81.3B IPO (`ANT` at $83).
- **MTS on MisAnthropic signatories** — https://x.com/mtslive/status/2123107810816995616
  Type: X post. Accessed: 2026-11-23. Highlights Thomas Wolf, Igor Babuschkin, Nate Soares, and Beff Jezos signing.
- **Thomas Wolf's clarification** — https://x.com/Thom_Wolf/status/2123086773844672689
  Type: X post. Accessed: 2026-11-23. States he did not know the statement's title, wouldn't have used "reckless," and signed over power concentration and transparency.

### OpenAI claims 0.2% chain-of-thought leakage in its anti-distillation push

- **OpenAI: Combatting adversarial distillation** — https://openai.com/index/combatting-adversarial-distillation/
  Type: official blog. Accessed: 2026-11-23. November 20 research claiming protected CoT leakage dropped from 54% (GPT-6 Astra) to 0.2% (GPT-6.2 Astra) under internal red-teaming, while endorsing Chip Security, AI OVERWATCH, and MATCH Acts.
- **OpenAI announcement post** — https://x.com/openai/status/2123862344422088794
  Type: X post. Accessed: 2026-11-23. Shares OpenAI's anti-distillation research post.

### UC pays OpenAI $1.2M a year over faculty objections

- **University of California: UC expands collaboration with OpenAI** — https://www.universityofcalifornia.edu/press-room/uc-expands-collaboration-openai-offering-free-access-students-faculty-and-staff-secure
  Type: press release. Accessed: 2026-11-23. November 19 announcement of systemwide ChatGPT Edu and Codex access across 10 campuses (excluding UC hospitals).
- **Los Angeles Times: UC $1.2M OpenAI ChatGPT deal** — https://www.latimes.com/california/story/2026-11-21/uc-openai-chatgpt-deal
  Type: news report. Accessed: 2026-11-23. Reports the $1.2M annual price tag and Academic Senate opposition over 10 days' notice.
- **John Scott-Railton on university Local AI** — https://x.com/jsrailton/status/2124505438745952404
  Type: X post. Accessed: 2026-11-23. Argues universities should host reproducible open models locally instead of signing corporate ChatGPT deals.

### OpenAI pays local AI builders to onboard small businesses

- **OpenAI: Introducing OpenWorks** — https://openai.com/openworks
  Type: official program page. Accessed: 2026-11-23. November 23 launch across 20 US pilot cities including Austin, TX. Offers local OpenWorks Partners up to $8,000/month stipends to help independently owned small businesses adopt AI and run monthly workshops; businesses receive free hands-on support and three months of ChatGPT Business (software/SaaS, VC-backed, and PE-owned firms excluded).
- **OpenAI OpenWorks launch post** — https://x.com/openai/status/2124922133545714160
  Type: X post. Accessed: 2026-11-23. Announces OpenWorks and invites local AI experts and small business owners to apply.
