---
title: Unsloth
created: 2026-10-21
updated: 2026-10-21
type: entity
tags: [entity, company, local-ai, open-source, inference-optimization]
sources: [raw/articles/2026-10-21-link-records.md]
---

# Unsloth

Unsloth publishes Dynamic GGUF quantizations and a desktop app for running open models locally. Its October 21 DeepSeek-V4.1-Flash-1017 packs are MIT. The run guide says the smallest 1-bit file targets 128 GB of RAM when the Engram table stays on SSD, and it tells you to build llama.cpp pull 30817 rather than stock llama.cpp. Unsloth's own long17k table lists the 250.4 GB UD-IQ1_M pack at 88.2% top-1 against its reading of DeepSeek's checkpoint. That figure is token agreement, not a task score, and it is a different measurement from Cruz's assistant-token checks on his EXL3 packs.

## Mentioned In

- [[Sovereign AI Club - October 21, 2026]]: **Community recipes squeeze DeepSeek and Qwen onto one machine**.

## Related

- [[Local AI]]
- [[Inference Optimization]]
- [[Open Models]]
- [[DeepSeek]]
- [[Qwen]]
- [[Strata]]
