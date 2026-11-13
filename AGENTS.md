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

### GitHub section on the home page

The home page builds its GitHub block from `github.username` in `daybook.yaml`. Its three parts come from three different sources, and each one fails separately:

- Profile card: public GitHub REST API. No token needed, always renders.
- Pinned repository cards: the repos pinned on the GitHub profile itself (GraphQL `pinnedItems`, up to 6). Zero pins on github.com means zero cards here. To change what shows, pin or unpin repos on the profile, then trigger a new build (a push to `personal` does it; re-running the last build in the Cloudflare dashboard also works). Pin changes never need a code change.
- Contributions graph: GraphQL `contributionsCollection`, which only answers to an authenticated request. `GITHUB_TOKEN` must exist as a BUILD variable in Cloudflare (daybook > Settings > Builds > Variables and secrets). A runtime variable under "Runtime variables and secrets" does not reach the build. When the token is missing, the build still succeeds and silently ships without the graph and without the pinned cards.

`daybook.yaml` reads the token name from `github.tokenEnv` (default `GITHUB_TOKEN`). If that key changes, rename the Cloudflare build variable to match.
