---
name: li-plan
description: >-
  Build the week on LinkedIn - what to post, when to post it, and who to engage
  with. Use when the user says "plan my week", "what should I post", "content
  calendar", "I have nothing to post about", or wants a posting schedule and an
  engagement list.
---

# li-plan

The control room. Everything else in this pack executes; this decides what
gets executed. Run it once a week, on the same day.

## Input

If `./linkedin/voice.md` and `log.md` exist, read them - the plan
should not repeat a theme from the last fortnight. If they do not exist, ask
for four things and write them down:

1. What the user sells, and to whom.
2. The three or four themes they want to be known for.
3. What actually happened this week - a client call, a number, a mistake, a
   thing they built, an argument they had. This is where posts come from.
4. Ten to twenty people or companies worth being visible to.
5. What they need most right now: more eyeballs, more followers, or more
   leads. If the files exist but none of them says, ask this one.

## What to post

Four posts a week beats seven. Consistency is a floor, not a target, and the
fifth post of a week is almost always the weak one that drags the average.

Every post does one of three jobs. **Top** of the funnel is reach: as many new
eyeballs as possible. **Middle** turns a reader into a follower. **Bottom**
turns a follower into a lead or a customer. A post that tries to do two does
neither.

| type | stage | job |
| --- | --- | --- |
| **Rank** | top | a ranking, a tier list or a Q&A that someone outside the niche can follow |
| **Opinion** | top | a position that could lose you followers |
| **Teach** | middle | one thing the reader can do today |
| **Story** | middle | your own story: a scene with dialogue and a cost |
| **Proof** | middle | behind the scenes of how you actually work, with a number |
| **Deep dive** | bottom | niche and technical, for the ideal customer only. Everyone else scrolling past is the point |
| **Offer** | bottom | what you sell, said plainly, no apology |

Every week gets at least one post from each stage. The goal moves the weights:

| goal | top | middle | bottom | when |
| --- | --- | --- | --- | --- |
| **Grow** | 2 | 1 | 1 | under 1K followers, or impressions are the problem |
| **Balanced** | 1 | 2 | 1 | the default, and right for most creators |
| **Sell** | 1 | 1 | 2 | the audience is there and nobody buys |

With one bottom slot, alternate Deep dive and Offer week to week.

If `log.md` has the numbers, they pick the goal. Few impressions: the top is
failing, go Grow. Impressions but no follows: the middle is failing, stay
Balanced and give the middle the week's best ideas. Followers but no DMs, leads
or calls: the bottom is failing, go Sell. Judge each post by its own stage's
number. A Deep dive with low impressions is working if it brought one lead.

Never two of the same type back to back. For each slot give: the stage, the
theme, the specific angle drawn from what actually happened this week, and the
hook formula number from `li-post/hooks.json` that fits it. Not a topic - an
angle. "AI" is not a plan. "The proposal we lost
because our AI draft had an em dash in it" is a post.

## When to post

Post when the user's audience is at a desk. For a B2B audience in one
timezone, Tuesday to Thursday, 7:30-9:30am local, is the working default, with
Monday afternoon and Friday morning as the second tier. Weekends are for
personal-story posts or nothing.

But state this plainly: **the day and hour matter far less than whether the
first line is good.** If the user is optimising posting times before their
hooks work, they are polishing the wrong thing, and you should say so.

Anchor the times to their audience's timezone, not the user's, if those
differ.

## Who to engage with

Build a list of 10, split three ways:

- **5 reach** - people with an audience the user wants, whose posts they can
  genuinely add to. Comment before they have 20 comments or nobody sees it.
- **3 peers** - same level, same field. This is the group that reciprocates.
- **2 buyers** - people who could actually buy. Comment on their posts for
  weeks before any DM, and never pitch in a comment.

20 minutes a day, before posting, not after. Comments on other people's posts
are what makes the user's own post land.

## Output

```
WEEK OF SEP 8
GOAL  balanced (1 top / 2 middle / 1 bottom) - no numbers in log.md yet

MON  engage only  (20 min, list below)
TUE  8:15am  MID  PROOF      #17 Time Anchor   - the 5hr -> 20min proposal rebuild
WED  engage only
THU  8:00am  TOP  OPINION    #1  Contrarian    - why we killed the discovery call
FRI  8:30am  BOT  DEEP DIVE  #21 Direct Value  - the 4-line reopen email, line by line
SAT  -
SUN  4:00pm  MID  STORY      #9  Cold Open     - the "going with someone cheaper" email

ENGAGE  (5 reach / 3 peers / 2 buyers)
  ...

Say "write Tuesday" and I will draft it.
```

Write the plan to `./linkedin/plan.md` so the other skills can read it.
Nothing is scheduled or posted anywhere - this is a plan, and the user runs it.

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
