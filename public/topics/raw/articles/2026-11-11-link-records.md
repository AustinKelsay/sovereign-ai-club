---
title: Sovereign AI Club - November 11, 2026 - Link Records
created: 2026-11-02
updated: 2026-11-10
type: summary
tags: [source-record]
sources: []
---

# Sovereign AI Club - November 11, 2026 - Link Records

Event listings and Topic sources for [[Sovereign AI Club - November 11, 2026]]. Organizer requested on November 2 that the November 4 gathering move to November 11. Topic sources accessed November 10, 2026. X post text was read through the public FxTwitter mirror; canonical X destinations are preserved. Two openai.com pages returned HTTP 403 to automated fetches and were read through the news reports listed beside them. Maker benchmarks, licenses, incident attributions, and unconfirmed research claims stay attributed to the publisher. No full third-party text is archived.

Community: [Official public Signal group](https://signal.group/#CjQKIIM2H4OE6vOvrGqi5aMPOgQWPRU6boBJvVhJVhbb2N-pEhC1hNgAqbQ9Tc_7g5KeE3XR).

Listing verified November 3: [Austin Computer Club Meetup](https://www.meetup.com/austin-computer-club/events/317271436/), Wednesday, November 11, 2026, 5:30–7:30 PM CST, Bitcoin Park Austin. Created as a copy of the past October 21 listing; optional member announcement left unsent.

## Agent Infrastructure

### Revolut makes self-hosted GLM the default for 2,000 engineers

- **AI Engineer: How Revolut Cut AI Coding Costs 90% With Self-Hosted Open Models** — https://ai.engineer/talks/Ok6QdZHCcI8-revolut-cut-ai-coding-costs-90-self
  Type: talk page. Accessed: 2026-11-10. David Abitbol, Revolut AI operations. Roughly 2,000 engineers, $0.30 per million tokens with free cache hits, self-hosting invoice one-tenth of the earlier Anthropic and OpenAI bills, latency and cache targets, vision routed separately. The slide reports a 60% lead-time improvement without comparison windows.
- **Guillermo Flor's post** — https://x.com/guilleflorvs/status/2117379073785696395
  Type: X post. Accessed: 2026-11-10. Submitted post. November 2. Summarises the talk: about 2,000 engineers on self-hosted GLM, Claude Code and Codex on the exception list, 56 Nvidia B200s, a blended 30 cents per million tokens, lead time improved 70%. The 56 B200s and 70% figures are his; the talk page does not state them.

### FlashState more than doubles vLLM throughput on hybrid models

- **Weili Xu's announcement** — https://x.com/_weilix/status/2119837671946400165
  Type: X post. Accessed: 2026-11-10. Submitted post. November 9. Introduces FlashState and gives the GLM 5.3 Flash claims: more than double vLLM's throughput and provider profit, latency cut 3.7x, user cost cut 2.5x.
- **FutureMLS-Lab/FlashStates** — https://github.com/FutureMLS-Lab/FlashStates
  Type: GitHub repository. Accessed: 2026-11-10. README explains hybrid state, arbitrary state checkpointing, and the replay setup: 48 coding agents, GLM-5.3-Flash NVFP4, two B200 GPUs per engine.
- **FutureMLS-Lab/vllm** — https://github.com/FutureMLS-Lab/vllm
  Type: GitHub repository. Accessed: 2026-11-10. The vLLM fork that carries FlashState, linked from the FlashStates README.

### 1Password for Agents signs agents in without handing over the password

- **1Password for Agents** — https://1password.com/personal-ai-agent-integrations
  Type: product page. Accessed: 2026-11-10. The post's short link resolves here. Three-step flow: agent asks, you approve, 1Password autofills. Included in Individual and Family plans. Live integrations shown: Muse, SpaceXSI Grok Bot, Instinct, Town. FAQ says agents never see the credential and cannot read the rest of the vault.
- **1Password's announcement** — https://x.com/1password/status/2113276767582498943
  Type: X post. Accessed: 2026-11-10. Submitted post. October 22. Announces the 1Password for Agents platform and names partner companies. Says it is free and optional for personal and family accounts and that agents cannot touch a vault without opt-in.

## Models & Research

### Closed model releases

- **Google: Gemini 4 Carbon, our next frontier model** — https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
  Type: vendor blog. Accessed: 2026-11-10. October 28 announcement. Artificial Analysis Intelligence Index v5.0 score of 59, SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%, Fairwind Program rollout to cyber defenders, introductory $2 and $10 pricing with $4 and $20 after.
- **Google: Gemini 4 Carbon is now available** — https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/
  Type: vendor blog. Accessed: 2026-11-10. November 10. Available through the API in Google AI Studio and Gemini for business for paying developers and enterprises, and rolling out to AI Ultra subscribers. Previews /swarm in Google Antigravity.
- **Sundar Pichai's Carbon announcement** — https://x.com/sundarpichai/status/2115489219804352921
  Type: X post. Accessed: 2026-11-10. Submitted post. October 28. Gives the index score and the three cyber benchmark numbers and says trusted cyber defenders get access first.
- **Google's availability post** — https://x.com/Google/status/2120186185423159331
  Type: X post. Accessed: 2026-11-10. November 10. Gemini 4 Carbon is now available, positioned above Argon for the hardest problems.
- **OpenAI: Introducing GPT-6 Cyber** — https://openai.com/index/introducing-gpt-6-cyber/
  Type: vendor blog. Accessed: 2026-11-10. Linked from OpenAI's post. The page returned HTTP 403 to automated fetches on November 10, so its details were read through The Next Web's report.
- **OpenAI's GPT-6 Cyber announcement** — https://x.com/openai/status/2118390190246879554
  Type: X post. Accessed: 2026-11-10. Submitted post. November 5. Says the model powered the Linux kernel research announced the day before, names Mozilla, Palo Alto Networks, Calif, and Cisco as users, and limits access to select Daybreak Red customers.
- **The Next Web: OpenAI's GPT-6 Cyber found 81 new Firefox flaws and is rated Critical** — https://thenextweb.com/news/openai-gpt-6-cyber-launch-firefox-linux-daybreak-red
  Type: news report. Accessed: 2026-11-10. Reports the Critical Preparedness rating, Daybreak Red access through the API and Codex, ExploitGym 48.5%, ExploitGym Honeypot 99.93% in-scope without the safety prompt, 81 Firefox flaws, 1,724 kernel bugs reproduced with 948 exploited, and 304 critical Linux findings disclosed.
- **Google DeepMind: Genie 4, a new generation of world simulation** — https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/
  Type: vendor blog. Accessed: 2026-11-10. October 27. Real-time interactive world model with native audio, steering by text prompt, research preview for trusted testers, then AI Ultra subscribers in Project Genie and early access partners.
- **Google DeepMind's Genie 4 post** — https://x.com/googledeepmind/status/2115114028338962672
  Type: X post. Accessed: 2026-11-10. Submitted post. October 27. Launch video and one-line description.
- **Mirendil's Fern announcement** — https://x.com/mirendil/status/2114750800526446987
  Type: X post. Accessed: 2026-11-10. Submitted post. October 26. Fern is pretrained from scratch with up to 10 million tokens of context, aimed at AI R&D work like auditing training data and reading agent traces. Fern 0.1 is Mirendil-Base after short post-training, the first of three models, and is not yet available.
- **Mirendil: Introducing Fern** — https://mirendil.com/news/introducing-fern/
  Type: vendor blog. Accessed: 2026-11-10. Linked from Robert Lange's post. Last edited October 27 to correct two figures. The page is mostly script-rendered; details were read from the X posts.
- **Robert Lange on Fern 0.1** — https://x.com/RobertTLange/status/2114750025767219693
  Type: X post. Accessed: 2026-11-10. October 26. Says Mirendil-Base is a 0.1 to 0.5T coding model one researcher pretrained in 3.5 months for under $10M with agents writing over 99% of the code. Gives RULER results at 10M tokens and agentic scores including 6.1% on Terminal-Bench 4.0, and says two larger models are in training.
- **The Biological Computing Co. press release** — https://www.tbc.co/press-releases/neuron-derived-ai-video-model
  Type: press release. Accessed: 2026-11-10. October 30. mischief 1 is built on Wan 2.2, claims 5x faster generation at matching quality, costs half a cent per second, and is on fal and OpenRouter. TBC attributes the gains to efficiencies found in living neurons.
- **Alex Ksendzovsky's mischief 1 post** — https://x.com/AlexKsendzovsky/status/2116153410101944352
  Type: X post. Accessed: 2026-11-10. Submitted post. October 30. TBC's CEO announces the model, the price, and a coming AWS Marketplace listing.

### Open model releases

- **LongCat-2.5 model card** — https://huggingface.co/meituan-longcat/LongCat-2.5
  Type: model card. Accessed: 2026-11-10. MIT. 1.6 trillion total parameters, about 48 billion active per token, native multimodal MoE. Benchmark table marks which scores are in-house.
- **LongCat-2.5 tech blog** — https://longcat.ai/blog/longcat-2.5/
  Type: vendor blog. Accessed: 2026-11-10. Linked from the November 2 launch post and the model card. The page is script-rendered and was not read; claims are taken from the model card.
- **Meituan LongCat's weights release** — https://x.com/Meituan_LongCat/status/2119793531393040462
  Type: X post. Accessed: 2026-11-10. Submitted post. November 9. Weights released under MIT, quoting the November 2 launch post.
- **Nanbeige4.3-33B model card** — https://huggingface.co/Nanbeige/Nanbeige4.3-33B
  Type: model card. Accessed: 2026-11-10. Apache 2.0. Positioned as the teacher for smaller Nanbeige4.3 models. Benchmark table against Qwen3.8-27B, Muse-Glimmer-30B, and Gemma4-31B. Context up to 524,288 tokens.
- **Nanbeige's announcement** — https://x.com/nanbeige/status/2114328933181333798
  Type: X post. Accessed: 2026-11-10. Submitted post. October 25. Announces the 33B model and base weights and the plan for Nanbeige4.3-3B.
- **NVIDIA: Introducing Nemotron 3.5 Bolt E4B 4GB** — https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/
  Type: technical report. Accessed: 2026-11-10. Built on Gemma 4 E4B with Nemotron post-training. Multi-turn tool use, 64k context, 35 languages, about 4GB in target workloads. Benchmark tables are NVIDIA's.
- **Nemotron 3.5 Bolt E4B 4GB model card** — https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB
  Type: model card. Accessed: 2026-11-10. License listed as OpenMDW 1.1.
- **Unsloth's Bolt E4B post** — https://x.com/UnslothAI/status/2113658964365971681
  Type: X post. Accessed: 2026-11-10. Submitted post. October 23. Says the model runs locally on 6GB RAM and supports vision, and links GGUFs and a guide. Quotes NVIDIA AI's launch post.
- **NVIDIA AI's launch post** — https://x.com/NVIDIAAI/status/2113657112408785153
  Type: X post. Accessed: 2026-11-10. October 23. Reachy Mini demo with Bolt handling conversation and Cosmos handling vision on a Jetson Orin Nano 8GB.
- **Unsloth GGUFs for Nemotron 3.5 Bolt E4B** — https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF
  Type: model files. Accessed: 2026-11-10. Quantized builds linked from Unsloth's post.

### Latent Sparse Attention: cheaper attention at 10 million tokens

- **Latent Sparse Attention: Towards Subquadratic Ultra-Long Context Attention** — https://arxiv.org/abs/2610.42147
  Type: arXiv paper. Accessed: 2026-11-10. Abstract gives the method, the D-LSA and N-LSA variants, and the per-layer speedups at 10M tokens on GLM-5.3-Flash and Qwen-3.8-27B.
- **Prefrontal-AI/latent-sparse-attention** — https://github.com/Prefrontal-AI/latent-sparse-attention
  Type: GitHub repository. Accessed: 2026-11-10. Apache 2.0 code for the paper. README repeats the per-layer speedups and links the SGLang fork and Docker image that carry LSA.
- **James Whittington's announcement** — https://x.com/jcrwhittington/status/2117317159777177602
  Type: X post. Accessed: 2026-11-10. Submitted post. November 2. Says search takes 98% of the attention layer's time at 10M tokens and gives the 22.7x and 72.4x figures.

### Editing weights instead of retraining: Deletion Tuning, Astra, and Qwenputer

- **The Surprising Effectiveness of Deleting Weights in LLM Post-Training** — https://arxiv.org/abs/2611.10866
  Type: arXiv paper. Accessed: 2026-11-10. Submitted November 7, NeurIPS 2026. Abstract: zeroing fewer than 0.05% of weights matches full fine-tuning across RL with verifiable rewards, supervised fine-tuning, and on-policy distillation; the method learns a binary mask over gate projections; the mask is hundreds to thousands of times smaller than the full checkpoint; under RL, prior-task accuracy stays near base while full fine-tuning, LoRA, and random sparse fine-tuning lose up to 5.4 points.
- **Jack Lu's Deletion Tuning thread** — https://x.com/Jacklu_me/status/2120217064073830401
  Type: X post. Accessed: 2026-11-10. Submitted post. November 10. Co-lead author. The thread says under 0.1% of weights, a 30 MB mask matching full fine-tuning on a 61 GB, 30B MoE model, gains holding from 7B to 30B, and lab credit to NYU's Agentic Learning AI Lab and the University of Calgary. A reply says the mask should apply to FP8 or INT4 checkpoints but accuracy there is untested.
- **agentic-learning-ai-lab/deleting-weights** — https://github.com/agentic-learning-ai-lab/deleting-weights
  Type: GitHub repository. Accessed: 2026-11-10. Code linked from the thread.
- **Deletion Tuning trained masks** — https://huggingface.co/Jacklu0831/deletion-tuning-masks
  Type: model files. Accessed: 2026-11-10. The released masks.
- **Deletion Tuning project page** — https://agenticlearning.ai/deleting-weights/
  Type: project page. Accessed: 2026-11-10. Paper, poster, and code links.
- **Weight-Space Programming** — https://rikiyat.github.io/blog/weight-space-programming/
  Type: research blog. Accessed: 2026-11-10. Claims frontier LLMs can read and write network weights directly. The Qwen3.5-0.8B experiment edits 0.016% of weights, raising MATH-500 from 7.9% to 48.1% and IFEval by 3x at the same sampling settings.
- **Rikiya Takehi's post** — https://x.com/rikiyatakehi/status/2117313742891327994
  Type: X post. Accessed: 2026-11-10. Submitted post. November 2. Carries a community note saying the model was given weights as text, used code and forward passes, and mainly fixed repetition in thinking mode.
- **RikiyaT/lm_understand-logs** — https://github.com/RikiyaT/lm_understand-logs
  Type: GitHub repository. Accessed: 2026-11-10. Experiment logs cited by the blog and by the community note.
- **Edited Qwen3.5-0.8B weights** — https://huggingface.co/RikiyaT/Qwen3.5-0.8B-weight-space-programming
  Type: model card. Accessed: 2026-11-10. The edited model from the blog's math experiment.
- **Qwenputer: a RISC-V CPU inside Qwen3.5** — https://divagr.com/blog/qwenputer
  Type: research blog. Accessed: 2026-11-10. Explains using Gated DeltaNet state as exact, addressable RAM by setting the gate and write strength to 1 with one-hot keys, and compiling a CPU into added layers. Calls it an experimental model.
- **div's Qwenputer thread** — https://x.com/divagr1925/status/2115394340357116169
  Type: X post. Accessed: 2026-11-10. Submitted post. October 28. First of four posts. Gives the DeepMind math comparison for base, base with a Python tool, and Qwenputer.
- **divagr18/qwenputer** — https://github.com/divagr18/qwenputer
  Type: GitHub repository. Accessed: 2026-11-10. Code for the compiled CPU.
- **Qwen3.5-4B-Qwenputer model card** — https://huggingface.co/divagr1925/Qwen3.5-4B-Qwenputer
  Type: model card. Accessed: 2026-11-10. The released model.

### OpenAI claims three discoveries, including a refutation of ETH

- **OpenAI: Working with academic communities to build scientific understanding** — https://openai.com/index/building-scientific-understanding-with-academic-communities/
  Type: vendor blog. Accessed: 2026-11-10. Linked from Brockman's post. The page returned HTTP 403 to automated fetches on November 10; claims were read through Al Jazeera's report and the X posts.
- **Greg Brockman's announcement** — https://x.com/gdb/status/2114837059462627533
  Type: X post. Accessed: 2026-11-10. Submitted post. October 26. Announces three discoveries in harmonic analysis, complexity theory, and quantum field theory.
- **Dan Roberts on the release process** — https://x.com/danintheory/status/2114833683949764882
  Type: X post. Accessed: 2026-11-10. October 26. Says the manuscripts are best understood as raw research data and describes outside experts shepherding review.
- **Al Jazeera: AI makes discoveries in mathematics, computer science, physics, OpenAI says** — https://www.aljazeera.com/economy/2026/10/27/ai-makes-discoveries-in-mathematics-computer-science-physics-openai-says
  Type: news report. Accessed: 2026-11-10. October 27. Describes the three claims and quotes Alex Iosevich and Ryan Williams.

### An agent drove a gene-therapy injection into a mouse's brain

- **Gabriel Ocana-Santero's thread** — https://x.com/OcanaSantero/status/2115442964574908902
  Type: X post. Accessed: 2026-11-10. Submitted post. October 28. First post of the thread: 19 vectors, an epilepsy mouse model, a motorized rig with cameras, 250 nanolitres injected, a licensed vet gating irreversible steps with a physical kill switch.
- **LockerGnome write-up of the thread** — https://lockergnome.com/ai-agent-chose-drug-and-coordinates-for-mouse-brain-injection-and-refused-founders-override/
  Type: news report. Accessed: 2026-11-10. Quotes later posts in the thread: the chosen target and coordinates, the human-performed skull opening, the blocked 34 mm move, and the Opus 5.5, Opus 5, and Sonnet 5 account. Notes that no paper, video, or outside lab has confirmed it.

### Nous's Arete-27B retrains Qwen3.8-27B off the party line

- **Nous Research: Introducing Arete-27B** — https://nousresearch.com/arete
  Type: vendor blog. Accessed: 2026-11-10. Method, the 803-prompt eval across seven value categories, the results table, the training recipe (about 52.8 million tokens, two epochs, 1,202 steps), Hermes Bench 65.60% against 65.77% for base, and the caveats on provisional rows.
- **Arete-27B model card** — https://huggingface.co/NousResearch/Arete-27B
  Type: model card. Accessed: 2026-11-10. Apache 2.0 weights.
- **Propaganda_Eval dataset** — https://huggingface.co/datasets/NousResearch/Propaganda_Eval
  Type: dataset. Accessed: 2026-11-10. The 803 prompts with source articles, required facts, the judge prompt, and scoring scripts.
- **Nous Research's announcement** — https://x.com/nousresearch/status/2118822925445050435
  Type: X post. Accessed: 2026-11-10. Submitted post. November 6. Propaganda rate from 22% to 1% after roughly 53 million tokens of fine-tuning.

## Security

### Cohere says Qwen3.8-Flash-Next tried to upload to a Beijing bucket

- **Cohere: Concerning behavior from a popular open-weight AI model** — https://cohere.com/blog/concerning-behaviour-popular-open-weight-ai-model
  Type: vendor blog. Accessed: 2026-11-10. October 26. The CTI-REALM task, the reasoning trace, the commands, the under one-in-100,000 rate, the prefill table, the two explanations, and recommendations for security teams and governments.
- **Cohere's announcement** — https://x.com/cohere/status/2114752002370544004
  Type: X post. Accessed: 2026-11-10. Submitted post. October 26. Says the sandbox blocked the attempt, the root cause is undetermined, and Cohere is not asserting malicious intent.
- **Cohere releases the traces** — https://x.com/cohere/status/2114849246155260108
  Type: X post. Accessed: 2026-11-10. Submitted post. October 26. Replies to Clem Delangue's request, says the behavior appears without prefilling but rarely, and credits developers running Qwen3.8 locally with spotting the links.
- **Cohere Labs: Qwen investigation traces** — https://huggingface.co/datasets/CohereLabs/10-2026-qwen-investigation-traces
  Type: dataset. Accessed: 2026-11-10. Trace, raw tokens, and a minimal reproduction script.
- **Nic Carter on enterprise uptake** — https://x.com/nic_carter/status/2115208891097035023
  Type: X post. Accessed: 2026-11-10. October 27. Argues hidden phone-home instructions can live in weights and survive fine-tuning, so serious enterprises won't run Chinese open weights and a domestic class of open models is needed.
- **matthias's reply** — https://x.com/mmatthias/status/2115227035119595946
  Type: X post. Accessed: 2026-11-10. Submitted post. October 27. Disagrees: tool hooks, network proxies, eBPF filters, and observability can block this.
- **Cohere: The world's leading open models, fully under your control** — https://cohere.com/blog/open-source-model-vault
  Type: vendor blog. Accessed: 2026-11-10. November 3. Third-party open models on Model Vault and Model Vault Encrypted, naming DeepSeek V4.1 Flash, Gemma 4, GPT-OSS, and Phi, with zero data retention by default.
- **Cohere's Model Vault post** — https://x.com/cohere/status/2117694764665471270
  Type: X post. Accessed: 2026-11-10. Submitted post. November 3. Open models now available in Model Vault.

### Encrypted lockers can hide a capability inside model weights

- **AI Models Can Provably Hide Arbitrary Capabilities** — https://arxiv.org/abs/2610.13928
  Type: arXiv paper. Accessed: 2026-11-10. Submitted October 9, revised October 14, accepted at NeurIPS 2026. Abstract: encrypted networks embedded in host weights using digital lockers, resistant to fine-tuning, weight noising, gradient-based trigger search, and latent adversarial training on a chemical reaction prediction task. Models released for defense work.
- **Brian Roemmele's post** — https://x.com/BrianRoemmele/status/2110033611839910378
  Type: X post. Accessed: 2026-11-10. Submitted post. October 13. Summarises the paper, ties it to Thompson's 1984 lecture, and points to his checklist and audit prompt.
- **Brian Roemmele: The Locker In The Weights** — https://x.com/BrianRoemmele/status/2110015422443761940
  Type: X post. Accessed: 2026-11-10. October 13. Long walkthrough of the paper's threat model, results table, overhead, and detectability, with a ten-point model-provenance checklist. Paper figures in the Presenter Notes come from this walkthrough.

### Railway's final report: abliterated models and $740,000 of stolen AI spend

- **Railway: Incident Report, October 21st Security Attack** — https://blog.railway.com/p/incident-report-october-security-incident
  Type: incident report. Accessed: 2026-11-10. Published November 10, updated 18:02 UTC. Full attack path, customer impact (at most 1.85% of workspaces, 353 build histories, 1,852 users' linked tokens, about $740,000 unauthorized spend), attack intent, refund status by provider, and security changes.
- **Railway: Preliminary Report, Oct 21st Security Incident** — https://blog.railway.com/p/preliminary-report-october-security-incident
  Type: incident report. Accessed: 2026-11-10. Submitted link. October 22. First statement that the actor had abliterated models and substantial compute and wanted AI provider keys for distillation, with the initial timeline and an October 26 update.
- **Wiz: Black October for AI developer platforms** — https://www.wiz.io/blog/black-october-for-ai-developer-platforms
  Type: security research. Accessed: 2026-11-10. Running timeline of related incidents and Wiz's view that stolen AI credentials feed LLMjacking brokers and distillation. Railway says this is context and does not independently attribute its incident.

### Linux kernel TCP bug CVE-2026-98432 is rated 9.8

- **Ubuntu: CVE-2026-98432** — https://ubuntu.com/security/CVE-2026-98432
  Type: security advisory. Accessed: 2026-11-10. Published October 15, last updated November 10. Critical priority, CVSS 9.8. Description of the IPv4 use-after-free, per-release fix status, and the nftables mitigation.
- **Iván Pérez's warning** — https://x.com/IvanPerezF_/status/2115900137016848684
  Type: X post. Accessed: 2026-11-10. Submitted post, in Spanish. October 29. Network-reachable, no login, no user action; Ubuntu 16.04 through 26.10 and cloud kernels marked vulnerable with fixes mostly in preparation at the time.

## Big Tech Moves

### Jensen Huang admits an affair as Nvidia's board investigates spy allegations

- **CNBC: Nvidia investigates CEO Jensen Huang's relationship with alleged Chinese spy** — https://www.cnbc.com/2026/11/08/nvidia-jensen-huang-investigation-china-spy.html
  Type: news report. Accessed: 2026-11-10. November 8. The staff email, the board investigation, the reported intelligence concerns attributed to the New York Times and Financial Times, the Megaspeed link, the House request for a November 18 briefing, and earnings on November 17.
- **CNBC: Huang's email to staff and the board's statement** — https://www.cnbc.com/2026/11/08/nvidia-jensen-huang-email-board-of-directors-statement.html
  Type: news report. Accessed: 2026-11-10. November 8. Text of the email and of the board statement: a committee of independent directors with outside counsel, and no reason to believe national security or NVIDIA secrets were compromised.
- **TechCrunch: Nvidia will investigate CEO Jensen Huang's relationship with possible Chinese spy** — https://techcrunch.com/2026/11/08/nvidia-says-its-investigating-ceo-jensen-huangs-relationship-with-possible-chinese-spy/
  Type: news report. Accessed: 2026-11-10. November 8. Notes the email does not name Alice Huang, describes her as a former Megaspeed executive, and reports the memo claim about recruitment by China's Ministry of State Security.
- **CNBC: Huang's affair with alleged Chinese spy further complicates Nvidia's China problem** — https://www.cnbc.com/2026/11/10/jensen-huang-nvidia-china-ties.html
  Type: news report. Accessed: 2026-11-10. November 10. China export-control background, H200 licensing, the Megaspeed diversion allegations and its denial, China's smear response, Trump's remarks, and Patrick Moorhead's comments.
