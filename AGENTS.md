# PJ-NIRI-fo-daybook-vault
## Agent skills

### Issue tracker

GitHub Issues via gh CLI. External PRs are not triaged. See docs/agents/issue-tracker.md.
Prefix issue titles with the issue number and a separator: <number> - <descriptive title>.

### Triage labels

Canonical five-role triage vocabulary (
eeds-triage, 
eeds-info, 
eady-for-agent, 
eady-to-merge, wontfix). See docs/agents/triage-labels.md.

### Domain docs

Single-context repo layout (GLOSSARY.md + docs/adr/ at repo root). See docs/agents/domain.md.
### Writing voice

Any agent that writes vault content (notes, memos, pages) reads `.agents/skills/unslop/SKILL.md` first and applies it: plain words, active voice, whole sentences, no AI tells. Write like you are explaining something you already learned to a coworker you want to teach, in the author's voice, and never sign as a platform or agent.

`.agents/skills/bro/SKILL.md` is the self-check: on request or when a passage reads stiff, restate it in plain language, as one person talking to another.
