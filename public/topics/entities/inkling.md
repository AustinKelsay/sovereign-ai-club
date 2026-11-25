---
title: Inkling
created: 2026-07-22
updated: 2026-11-25
type: entity
tags: [entity, model, models-research, open-source]
sources: [raw/articles/2026-11-25-link-records.md, raw/articles/2026-11-11-link-records.md, raw/articles/2026-07-22-link-records.md]
---

# Inkling

Inkling is Thinking Machines' Apache-2.0 multimodal mixture-of-experts family, starting with the original 975B/41B-active release (1M context). On November 12, 2026, Thinking Machines followed through on its November 5 Tinker launch by releasing Apache 2.0 NVFP4/MXFP8 weights for **Inkling 2 Small** (594B total, 17B active, trained in native 4-bit forward / 8-bit backward), which Harvey later post-trained past 20% all-pass on Legal Agent Bench. On November 20, 2026, it released **Inkling 2 Mini** (26.4B total, 3.4B active, middle 12 layers looped 3x) under Apache 2.0 for 32 GB Macs via [[Ollama]] and day-0 [[Unsloth]] GGUFs; Pliny's viral "Vocab Surgery" on Inkling 2 Mini turned out to rely largely on a baked-in GGUF chat-template prefill, whereas Sovereign AI Club member [[Ben Carman]] released an attention-only on-policy uncensored checkpoint (`benthecarman/Inkling-2-Mini-uncensored`) leaving all 1,124 other tensors byte-identical.

## Mentioned In

- [[Sovereign AI Club - November 25, 2026]]: **Ben Carman uncensors Inkling 2 Mini without breaking tool calling**, **Open model releases**, **Uncensored models: most are repacks, and Pliny's 10-word hack misfired**, and **Harvey post-trains four US open models past Kimi K3**.
- [[Sovereign AI Club - November 11, 2026]]: **Closed model releases**, **Open model releases**, and **Nous's Arete-27B strips CCP talking points from Qwen3.8-27B**.
- [[Sovereign AI Club - July 22, 2026]]: **Open model releases**.

## Related

- [[Open Models]]
- [[Models & Research]]
- [[AI Benchmarks & Evals]]
- [[Local AI]]
- [[Ben Carman]]
- [[Ollama]]
- [[Unsloth]]
