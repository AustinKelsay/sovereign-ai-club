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

- **Anthropic: Introducing Claude Fable 5.2 and Claude Mythos 5.2** — https://www.anthropic.com/claude-fable-and-mythos-5-2
  Type: vendor blog. Accessed: 2026-11-10. November 9. Fable and Mythos are the same underlying model; Fable carries cyber and biology safeguards for all users, Mythos goes to organizations in the Cyber and Life Sciences Verification Programs. $8 in and $40 out per million tokens (fast mode $16 and $80), outputs up to 30% faster than 5.1. FrontierCode 2.0 49.1% at Xhigh vs Opus 5.5 45.5%; SWE v2 69.9%; Mythos 5.2 used out-of-sandbox credentials or files in 3.1% of adversarial scenarios vs 21% for Mythos 5.1. Vendor benchmarks.
- **Claude's launch post** — https://x.com/claudeai/status/2119867114450268322
  Type: X post. Accessed: 2026-11-10. November 9. Introduces Fable 5.2 and Mythos 5.2 with gains in coding, reasoning, and vision.
- **BleepingComputer: OpenAI launches GPT-6.1 Terra** — https://www.bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing/
  Type: news report. Accessed: 2026-11-10. October 26. $1 in and $5 out per million tokens, 50% below GPT-5.6 Terra and GPT-6.1 Sol; aimed at computer use, visual reasoning, and everyday work; Terminal-Bench 4.0 50.3% at maximum effort vs 21.5% for GPT-5.6 Terra; OpenAI still recommends GPT-6.1 Sol or GPT-6 Astra for the hardest coding. Read here because openai.com blocks automated fetches.
- **OpenAI's Terra post** — https://x.com/OpenAI/status/2114780720170164735
  Type: X post. Accessed: 2026-11-10. October 26. Rolling out to Plus, Pro, Enterprise, and Edu in ChatGPT Work and Codex, and in the API as gpt-6.1-terra; links openai.com/index/introducing-gpt-6-1-terra.
- **OpenAI's Images 2.6 post** — https://x.com/OpenAI/status/2118124944928432327
  Type: X post. Accessed: 2026-11-10. November 4. ChatGPT Images 2.6 adds GIFs and reusable reference images; two API models, GPT-Image-2.6 Flare and Sunburst, with 50% faster generation.
- **Mark Zuckerberg's Muse Ember post** — https://x.com/finkd/status/2119851180948152590
  Type: X post. Accessed: 2026-11-10. November 9. Meta's smallest Muse model, for token-heavy agent work such as tool calls, routing, extraction, and long document parsing; on the Meta Model API and in Muse Code.
- **Runtime Wire: Meta launches Muse Ember at $0.10 per million input tokens** — https://runtimewire.com/article/meta-launches-muse-ember-and-prices-it-at-0-10-per-million-input-tokens-for
  Type: news report. Accessed: 2026-11-10. November 9. $0.10 per million input tokens, positioned as the cheap default in Muse Code and the API with Muse Wonder handling planning. Other coverage reports $0.50 output and a 1M-token context; Meta published no blog post.
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

- **Kimi K3.1 Pro model card** — https://huggingface.co/moonshotai/Kimi-K3.1-Pro
  Type: model card. Accessed: 2026-11-10. Public and ungated; weights posted November 4 after the October 23 API launch. 2.8T total, 104B active MoE, 1M context, text and image input, MXFP4 weights. Kimi K3.1-Pro License: MIT-style, but a Model-as-a-Service business above $20 million in 12-month revenue needs a separate agreement, and products over 100 million monthly users or $20 million monthly revenue must display the name; internal use is exempt. Benchmarks are Moonshot's own, run in the Claude Code harness.
- **Kimi's weights post** — https://x.com/Kimi_Moonshot/status/2118010528123773297
  Type: X post. Accessed: 2026-11-10. November 4. Releases the Kimi K3.1 Pro weights on Hugging Face.
- **Mistral: Mistral Large 4 (Le Chonk) is now open weight** — https://mistral.ai/news/mistral-large-4-oss/
  Type: vendor blog. Accessed: 2026-11-10. October 29 weight release after the October 6 preview. Mistral Ecosystem Open-Weight license, a modified MIT license: Model-as-a-Service businesses need a separate commercial license. About 1 trillion parameters; vLLM and SGLang; self-reported Terminal-Bench 4.0 41%, up 13 points from the preview.
- **Mistral Large 4 model card** — https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B
  Type: model card. Accessed: 2026-11-10. 49B active per token (52B with embeddings and output layers), trained on 3,800 Grace Blackwell GPUs in Mistral's European datacenters; FP8 checkpoint plus a separate NVFP4 checkpoint; embedded DSpark speculative-decoding head.
- **Artificial Analysis on Large 4** — https://x.com/ArtificialAnlys/status/2115820547103952925
  Type: X post. Accessed: 2026-11-10. October 29. Scores 26 on its Intelligence Index v5, one point ahead of Muse Spark Open, narrowly the top open-weights model developed outside China.
- **LFM3-1.7B model card** — https://huggingface.co/LiquidAI/LFM3-1.7B
  Type: model card. Accessed: 2026-11-10. October 27 family release. 1.73B parameters, tri-hybrid 24 layers (13 gated short convolutions, 5 sliding-window, 6 global attention), 256K context, about 1 GB at 4-bit, LFM Open License v1.0. Family adds VL, Audio, and Omni 2B models and d1-2B and d1-Omni-2B decision models. Not recommended for agentic coding.
- **Liquid AI's LFM3 post** — https://x.com/liquidai/status/2115128329003303107
  Type: X post. Accessed: 2026-11-10. October 27. Introduces the six LFM3 models across text, vision, audio, omni, and decision.
- **Microsoft Mage-VL-Cowork model card** — https://huggingface.co/microsoft/Mage-VL-Cowork
  Type: model card. Accessed: 2026-11-10. October 30. Apache 2.0, about 4.7B parameters by safetensors count; one vision-language policy that mixes GUI clicks and bash, trained from a 4B Mage-VL checkpoint on 293,806 synthesized tasks.
- **Baidu Unlimited-OCR-2 model card** — https://huggingface.co/baidu/Unlimited-OCR-2
  Type: model card. Accessed: 2026-11-10. October 27. MIT, about 3.3B parameters; ultra-long document parsing with the MarathonDocBench benchmark released alongside.
- **Tencent Hy-Nomas model card** — https://huggingface.co/tencent/Hy-Nomas
  Type: model card. Accessed: 2026-11-10. October 21. Apache 2.0 interactive video world model, 720x1280 at 24 FPS with 8 denoising steps; a separate INT8 configuration with CPU offload targets a single RTX 4090.
- **Baidu: Introducing ERNIE 5.5 Flash Preview** — https://ernie.baidu.com/release/ernie-5-5-flash-preview/
  Type: vendor blog. Accessed: 2026-11-10. November 11. First post-trained model on the ERNIE 5.5 Flash Base. 280B total, 14B active, 1M-token context; API on Qianfan now, weights to be open-sourced under Apache 2.0. Demos include an Unreal Engine 5.8 game written in one 11-hour agent run. Benchmarks are Baidu's own.
- **Baidu's ERNIE 5.5 Flash Preview post** — https://x.com/Baidu_Inc/status/2120391732248637734
  Type: X post. Accessed: 2026-11-10. Submitted post. November 11. Says generation runs above 200 tokens per second and weights will be released by November 25.
- **ERNIE 5.5 Flash Base model card** — https://huggingface.co/baidu/ERNIE-5.5-Flash-Base
  Type: model card. Accessed: 2026-11-10. October 21. End-of-pretraining checkpoint, 280B total and 14B active, trained on 33.5T tokens; FP8 and BF16 builds under Baidu's ERNIE 5.5 Flash Base Model License v1.0.
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

### Lazarus and encrypted lockers hide backdoors in model weights

- **Lazare, veni foras: Reprogramming Dormant Neurons to Backdoor AI Agents** — https://github.com/anadim/anadim.github.io/blob/master/papers/Lazarus.pdf
  Type: research paper. Accessed: 2026-11-10. Microsoft Research and Microsoft AI Red Team (Zeng, Bullwinkel, Severi, Horvitz, Papailiopoulos). On Nemotron-Terminal-8B, seven of 12,000+ neurons fitted on 23 trajectories fire the payload on at least 98.8% of triggered runs with no observed leakage on benign ones; Qwen3.6-27B and Gemma-4-31B-IT are also vulnerable. Agent-built defenses with no reference model flag 91.4% of edited checkpoints at a 9.7% false-positive rate. Says Claude Code with Opus 4.5 found the core idea in February 2026. The paper's github.com/microsoft/lazarus repo returned 404 on November 10.
- **Alex Dimakis's post** — https://x.com/AlexGDimakis/status/2120298640753533045
  Type: X post. Accessed: 2026-11-10. Submitted post. November 10. Quotes Papailiopoulos and summarises the attack: an LLM weight-programs another so a trigger string makes it run a destructive command, using neurons that rarely fire.
- **Dimitris Papailiopoulos: Reprogramming Dormant Neurons to Backdoor AI Agents** — https://x.com/DimitrisPapail/status/2120245027804705121
  Type: X article. Accessed: 2026-11-10. November 10. The original March write-up with November edits: how Claude Code found dormant SwiGLU neurons usable as trigger classifiers, chaining neurons to force a multi-token payload, a curl-pipe-shell demo in a Terminus-2 harness, Microsoft Foundry's provenance controls, and recommendations to scan weights against the base model, declare base models on hubs, and stop harnesses from executing output blindly. Credits Anthropic's agentic-backdoor paper (arXiv 2610.37741) and the Astra weight-space programming work as the two public ingredients.
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
- **Railway's post on the preliminary report** — https://x.com/Railway/status/2113671961624682722
  Type: X post. Accessed: 2026-11-10. October 23. Railway's own announcement of the preliminary report, the one that first named abliterated models and distillation.
- **The Hacker News on the final report** — https://x.com/TheHackersNews/status/2120424080700854541
  Type: X post. Accessed: 2026-11-10. November 11. Summarises the final report: about $740,000 in unauthorized AI charges from stolen keys, a build isolation flaw, lateral movement through internal cloud systems, decrypted customer secrets, and Railway covering what providers won't refund.

### NEAR AI's confidential inference was breached through an SGLang bug

- **NEAR AI: Security Incident, SGLang Vulnerability** — https://near.ai/blog/security-incident-report-sglang-vulnerability
  Type: incident report. Accessed: 2026-11-10. Published November 9. One inference server compromised through a remote code execution vulnerability in SGLang; requests in processing on that server could be observed on November 8, including confidential ones; about 100 users' account details (emails, names, some plan and balance data) downloaded; 18 legacy agents outside the TEE accessed; two Cloud API keys exposed in logs and revoked; no indication stored Private Chat conversations or files were accessed. States that confidential computing protects data from the operator and the host but not from a vulnerability in software running inside the environment. Private Chat taken offline. No CVE, endpoint, or SGLang version named.
- **NEAR AI's update** — https://x.com/near_ai/status/2120043366444601458
  Type: X post. Accessed: 2026-11-10. November 10. Says the attacker used an SGLang vulnerability on November 8, access is closed and fixed, and affected users were contacted. Follows its November 9 post pausing NEAR AI Cloud inference.
- **Illia Polosukhin's post** — https://x.com/ilblackdragon/status/2120092118349729863
  Type: X post. Accessed: 2026-11-10. November 10. NEAR co-founder: inference providers are under attack and are a honey pot for data and for injecting actions through agents; the SGLang bug ran inside an enclave; NEAR AI will tighten dependency security and detect abnormal code running inside the TEE, and already red-teams with abliterated models.
- **The Hacker News: SGLang RCE exploit breaches NEAR AI** — https://thehackernews.com/2026/11/sglang-rce-exploit-breaches-near-ai.html
  Type: news report. Accessed: 2026-11-10. November 10. Summary of the incident report; notes NEAR AI has not said whether Brave Leo traffic, which runs in a NEAR AI TEE, passed through the affected server.

### DeepMind proves Signal's encryption holds down to the machine code

- **Google DeepMind: formally verifying the Signal protocol** — https://deepmind.google/blog/formal-verification-signal-protocol
  Type: research announcement. Accessed: 2026-11-10. November 10. Pushmeet Kohli and Swarat Chaudhuri. AlphaProof Code is a multi-LLM framework where human experts decide what to prove and agents write the proofs; Gemini Carbon agents generated over six million lines of Lean in four weeks, with about one percent flagged for human review. Two previously fixed bugs re-inserted into an isolated copy were proved insecure. Quotes Signal CTO Ehren Kret calling it a major breakthrough.
- **AlphaProof Code: Verifying Signal's Security at the Machine-Code Level** — https://google-deepmind.github.io/code-verification
  Type: technical report and Lean development. Accessed: 2026-11-10. November 10. Target: libsignal v0.105.4 and spqr v1.6.0 built with stock rustc 1.98.1 for AArch64 Linux user mode. Ten symbolic theorems (forward secrecy, post-compromise security, authentication, handshake secrecy) plus a computational bound for one-to-one PQXDH and Triple Ratchet sessions. About 6.5 million lines of Lean proof on about 26,000 trusted lines of specifications and AArch64 semantics. Excludes side channels, group messaging, quantum attackers, and multi-device state; assumes standard hardness of the primitives.
- **google-deepmind/code-verification** — https://github.com/google-deepmind/code-verification
  Type: GitHub repository. Accessed: 2026-11-10. Open-sourced formal specifications and verification artifacts. No license stated on the project page when read.
- **Pushmeet Kohli's post** — https://x.com/pushmeet/status/2120127611137634376
  Type: X post. Accessed: 2026-11-10. Submitted post. November 10. Announces the result, says similar efforts could take teams decades and this took a month, and names the team.
- **WIRED's post** — https://x.com/WIRED/status/2120020045464002780
  Type: X post. Accessed: 2026-11-10. November 10. Links WIRED's story; DeepMind's stated stretch goal is to do the same for all the software of the world.

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
- **Fox Business's post** — https://x.com/FoxBusiness/status/2119550916248445104
  Type: X post. Accessed: 2026-11-10. November 8. Quotes Huang's staff apology ("I was unfaithful to my wife... There is no excuse for what I did"), the board investigation, and Nvidia's statement that it has no reason to believe secrets were compromised.
- **Ed Zitron's post** — https://x.com/edzitron/status/2120216275020288334
  Type: X post. Accessed: 2026-11-10. November 10. Skeptical take: says Megaspeed imported $4.8 billion in chips and that Nvidia knew about Megaspeed and Alice Huang as far back as 2024, linking his own write-up. His claims, not confirmed by the board.

### Voters limited data centers in 40 of 41 local ballot measures

- **Ballotpedia: Voters favored limiting data center development in 40 of 41 local ballot measures** — https://news.ballotpedia.org/2026/11/06/voters-favored-limiting-data-center-development-in-40-of-41-local-ballot-measures-on-nov-3/
  Type: election results. Accessed: 2026-11-10. November 6. Approved limits: 5 full bans (California, Florida, three in Ohio), 12 partial bans, 3 six-month moratoriums in Maine, 2 Adams County zoning measures, 2 Illinois advisory measures, voter-approval requirements in Grove City, Ohio and Janesville, Wisconsin, and a financial-guarantee measure in Perry, Ohio. Defeated: 13 support or pro-development measures. The exception was Harwood, North Dakota, where voters defeated a review requirement.
- **Ballotpedia: Voters in ten states will vote on data center-related ballot measures** — https://news.ballotpedia.org/2026/11/03/voters-in-ten-states-will-vote-on-data-center-related-ballot-measures-november-3/
  Type: election preview. Accessed: 2026-11-10. November 3. 41 measures in 10 states: Ohio 21, Illinois 7, Maine 4, Kansas 3, and one each in California, Florida, Nevada, New Jersey, North Dakota, and Wisconsin, with power, water, land, and tax-incentive thresholds.
- **J.D. Capelouto on Piqua, Ohio** — https://x.com/jdcapelouto/status/2117821128991494330
  Type: X post. Accessed: 2026-11-10. November 4. Piqua voters passed a ban on data centers over 25 MW and recalled the mayor and two commissioners who backed a proposed 1,400 MW Meta data center.
- **CBS News's post** — https://x.com/CBSNews/status/2118504080192450606
  Type: X post. Accessed: 2026-11-10. November 6. Counts 47 restriction measures nationwide, 44 passed, one failed, two undecided; exit polling found 56% of voters said AI and data centers were a factor in their vote.
- **Michael Eisenberg's post** — https://x.com/mikeeisenberg/status/2117954174469955732
  Type: X post. Accessed: 2026-11-10. November 4. Investor counterpoint: measures went 70 to 80% against in red and blue towns alike, and he argues the backlash hands an advantage to China and to allies that can scale compute.
