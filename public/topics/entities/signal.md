---
title: Signal
created: 2026-08-26
updated: 2026-11-10
type: entity
tags: [entity, company, privacy, security]
sources: [raw/articles/2026-11-11-link-records.md, raw/articles/2026-08-26-link-records.md]
---

# Signal

Signal is the encrypted messaging service whose private contact discovery runs inside an Intel SGX enclave so the host is not supposed to learn users' address books. August 26 coverage is V12's disclosure that two patched memory-safety bugs let a malicious host leak the enclave key; Signal Protocol message encryption is a separate guarantee.

In November 2026, Google DeepMind said its AlphaProof Code agents proved security properties of libsignal's one-to-one PQXDH and Triple Ratchet code compiled to AArch64 machine code, with the Lean proofs open-sourced; Signal CTO Ehren Kret called it a major breakthrough.

## Mentioned In

- [[Sovereign AI Club - November 11, 2026]]: **DeepMind proves Signal's encryption holds down to the machine code**.
- [[Sovereign AI Club - August 26, 2026]]: **V12 breaks Signal's SGX contact-discovery enclave**.

## Related

- [[Privacy Tooling]]
- [[Security]]
