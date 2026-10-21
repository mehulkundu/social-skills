---
name: li-audit
description: >-
  Post-mortem on what the user has already published - which posts actually
  worked, why, and what to stop doing. Use when the user pastes their LinkedIn
  analytics or past posts and asks "what's working", "why did this flop", "read
  my analytics", "audit my content", or wants to know what to double down on.
---

# li-audit

The only honest source of what works for an account is that account. Every
rule in every LinkedIn guide, including the ones in this pack, is a prior. The
user's own last 30 posts are the evidence.

## Input

Ask for whichever the user has:

- The post analytics export (LinkedIn: Analytics -> Content -> Export). CSV.
- Or a screenshot per post with impressions, reactions, comments, reposts.
- Or just the posts and their reaction counts, which is enough for a first
  pass.

Also read `./linkedin/log.md` if it exists, since it records which
hook formula each post used.

## What to actually measure

Raw impressions are the least useful number on the page, because they are
mostly a function of how many people already follow the user. Compute these
instead, and show the working:

| metric | how | what it tells you |
| --- | --- | --- |
| **Engagement rate** | (reactions + comments + reposts) / impressions | whether the post earned its reach |
| **Comment ratio** | comments / reactions | whether it started something or just got a nod |
| **Reach multiple** | impressions / follower count | whether it travelled past the existing audience |
| **Save/send rate** | if available | the strongest single predictor of future reach |

Rank by engagement rate and reach multiple, not impressions. A post with 900
impressions and 40 comments beat the one with 12,000 impressions and 6.

## Then find the pattern

With the top 5 and bottom 5 side by side, look for what actually separates
them, and be willing to conclude something the user will not like:

- Hook formula. Which numbers from `hooks.json` are in the top 5?
- Format. Text, document, image, video.
- Length.
- Theme.
- Day and time - check this **last**, and only if the other four show nothing.
  It is almost never the cause, and it is where people want it to be.
- First-hour comments. Posts the user replied to inside an hour versus not.

State the finding as a claim with the evidence attached, and say how confident
it is. With 30 posts you can see a pattern; with 6 you cannot, and you should
say that instead of inventing one.

## Output

```
AUDIT  ·  31 posts  ·  Jun 12 - Sep 5

TOP 5 BY ENGAGEMENT RATE
  8.1%  #3  Mistake      "$18,000 is what no contract cost me"      1,940 imp
  6.4%  #20 Walk-Away    "I fired my highest-paying client"         2,210 imp
  ...

BOTTOM 5
  0.4%  #5  List         "7 tools every founder needs"             11,400 imp
  ...

WHAT THE DATA SAYS
1. Posts where you were the one who looked bad: mean 6.2% vs 1.1% for
   everything else. n=6. This is your strongest signal and it is not close.
2. Tool listicles get impressions and nothing else. High reach, no comments,
   no leads. Three of your bottom five.
3. Day of week shows nothing. Your Tuesday mean and your Friday mean are
   inside the noise. Stop optimising it.

STOP: listicles about tools.
DO MORE: the ones with a cost you paid, and a number.
```

Then hand the conclusions to `/li-plan` so next week's plan is built on the
user's own evidence rather than on defaults.

## Where files live

**Ground rule: one persona, one project.** A persona is one identity: a founder,
a DJ, an artist. Its accounts on Instagram, X, LinkedIn and YouTube are that
persona on different platforms. The format and the style change from platform
to platform, but the persona stays the same, so it never splits into a project
per account. Each platform is a folder inside the persona's project:

```
founder/
├── CLAUDE.md
├── persona.md        # true on every platform: facts, goals, positions, limits
├── story-bank.md     # stories every platform draws from
├── instagram/        # voice.md, profile.md, plan.md, swipe.md, log.md
├── x/
└── linkedin/
```

When a persona starts on a new platform, add a folder to its project. Don't
start a new project for it, and don't copy the persona's facts into the
platform's `voice.md`: that file only says how the persona sounds and what it
posts on that platform.

Paths like `./linkedin/voice.md` above mean the platform's folder, found in this
order so one persona's voice never leaks into another's:

0. Whatever the project's `CLAUDE.md` maps this platform to. A project (an
   Obsidian vault, say) can list its own file names for the voice, plan,
   log, swipe file, drafts folder and story bank. Use those exactly.
1. `./linkedin/` in the current project, if `./linkedin/voice.md` exists.
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this linkedin account (an older one-account repo:
   offer to move it into `./linkedin/`).
3. `~/.claude/linkedin/` otherwise, as a global default.

Read `./persona.md` before the voice file whenever it exists. On facts, the
persona file wins; on format and style, the platform's `voice.md` wins.
`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create `./linkedin/voice.md` from this plugin's
`templates/voice.md`, and put anything that is true on every platform in
`./persona.md` instead.
