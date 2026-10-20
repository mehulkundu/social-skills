# social-skills

Fifty Claude Code skills for running Instagram, LinkedIn, X and YouTube accounts,
packaged as a plugin marketplace with one plugin per platform. Every skill is
generic: nothing about any one person or brand is baked in. Who you are lives
in a workspace folder you point the skills at, so the same skills work for any
account.

**Nothing gets posted.** These skills write. You post.

## Install

In Claude Code:

```
/plugin marketplace add mehulkundu/social-skills
/plugin install x@social-skills
/plugin install linkedin@social-skills
/plugin install youtube@social-skills
/plugin install instagram@social-skills
```

Install only the platforms you use. The repo is private, so Claude Code needs
GitHub access to it (it uses your normal `git` credentials).

## The plugins

| plugin | skills |
| --- | --- |
| `instagram` | ig-reel, ig-caption, ig-carousel, ig-story, ig-profile, ig-plan, ig-comment, ig-reply, ig-dm, ig-repurpose, ig-viral, ig-audit, ig-human |
| `linkedin` | li-post, li-carousel, li-comment, li-reply, li-dm, li-inbox, li-profile, li-plan, li-repurpose, li-audit, li-hook, li-interview, li-human |
| `x` | x-post, x-thread, x-reply, x-event, x-hook, x-profile, x-plan, x-repurpose, x-audit, x-interview, x-human |
| `youtube` | yt-script, yt-package, yt-shorts, yt-seo, yt-chapters, yt-edit, yt-comment, yt-community, yt-retention, yt-plan, yt-viral, yt-pivot, yt-audit |

Each skill is one folder with a `SKILL.md`, plus any Python tools it runs
(plain Python 3, no dependencies) and the data they read.

## Workspaces: where your voice lives

Every skill looks for the account's files in this order:

1. `./<platform>/voice.md` in the project you opened Claude Code in. Use this
   for a project that runs several accounts, like `workspaces/founder/` here.
2. `./voice.md` at the project root, when the project's `CLAUDE.md` says it is
   that platform's account. That is how the one-account repos work
   (`instagram-dj`, `instagram-art`).
3. `~/.claude/<platform>/voice.md` as a global default.

Plans, logs and swipe files are written next to the voice file. `story-bank.md`
sits at the project root and is shared by every platform. Each plugin ships a
`templates/voice.md` to start from.

`workspaces/founder/` is the workspace for the designer & founder accounts
(@KunduMehul, mehulkundu, @mehulkundu, @thatproductdude). Open Claude Code in
that folder and every skill picks up the right voice for its platform.

## Credits

Merged from four MIT-licensed skill packs, then extended:

- [Jakeschincariol/instagram-agent-skill](https://github.com/Jakeschincariol/instagram-agent-skill),
  [linkedin-agent-skill](https://github.com/Jakeschincariol/linkedin-agent-skill) and
  [youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill)
  by Jake Schincariol: the Instagram, LinkedIn and YouTube skills and their
  Python tools, copied with paths changed to the workspace layout above.
- [sergebulaev/x-skills](https://github.com/sergebulaev/x-skills),
  [linkedin-skills](https://github.com/sergebulaev/linkedin-skills) and
  [youtube-skills](https://github.com/sergebulaev/youtube-skills) by Sergey
  Bulaev: the X hook formulas, voice rules and heuristics, the story-bank
  interview, hook breakdowns and community posts. Rewritten here as draft-only
  skills with no posting service.
- [alirezarezvani/claude-skills x-twitter-growth](https://github.com/alirezarezvani/claude-skills/blob/main/marketing-skill/skills/x-twitter-growth/SKILL.md)
  by Alireza Rezvani: X profile checklist and cadence by account size.

New here: every `x-*` skill, `li-hook`, `li-interview`, `yt-community`,
`yt-pivot`, the workspace lookup and the founder workspace.

MIT. See `LICENSE`.
