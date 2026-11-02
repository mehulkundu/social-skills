---
name: ig-plan
description: >-
  Build the week on Instagram - what to post, which format, when, and who to
  engage with. Use when the user says "plan my week", "what should I post",
  "content calendar", "I have nothing to post about", or wants a posting
  schedule and an engagement list.
---

# ig-plan

The control room. Everything else in this pack executes; this decides what gets
executed. Run it once a week, on the same day.

## Input

If `./instagram/voice.md`, `swipe.md` and `log.md` exist, read them.
The swipe file is the user's own evidence from `/ig-viral` about which formulas
are landing in their niche right now, and it outranks anything in this file.
The log stops the plan repeating a theme from the last fortnight.

If they do not exist, ask for four things and write them down:

1. What the user sells, and to whom.
2. The three or four themes they want to be known for.
3. What actually happened this week: a client call, a number, a mistake, a
   thing they built, an argument they had. This is where posts come from.
4. Ten accounts worth being visible to.
5. What they need most right now: more eyeballs, more followers, or more
   leads. If the files exist but none of them says, ask this one.

## What to post

Four to five posts a week, and at least three of them Reels. Reels are the only
format on Instagram that reliably reaches people who do not follow the account.
Carousels go deep with the people who already do. Stories are daily and are
planned separately.

Every post does one of three jobs. **Top** of the funnel is reach: as many new
eyeballs as possible. **Middle** turns a viewer into a follower. **Bottom**
turns a follower into a lead or a customer. A post that tries to do two does
neither.

| type | stage | job |
| --- | --- | --- |
| **Rank** | top | a ranking, a tier list or a Q&A that someone who has never heard of you can watch. Reel. |
| **Opinion** | top | a position that could lose you followers. Reel. |
| **Teach** | middle | one thing the viewer can do today. Reel or carousel. |
| **Story** | middle | your own story: a scene with a cost. Reel. |
| **Proof** | middle | behind the scenes of how you actually work, with a number. Reel. |
| **Deep dive** | bottom | niche and technical, for the ideal customer only. Everyone else scrolling past is the point. Carousel. |
| **Offer** | bottom | what you sell, said plainly, no apology. Carousel or stories. |

Every week gets at least one post from each stage. The goal moves the weights:

| goal | top / middle / bottom | at four posts | when |
| --- | --- | --- | --- |
| **Grow** | 3 / 1 / 1 | 2 / 1 / 1 | under 1K followers, or views are the problem |
| **Balanced** | 2 / 2 / 1 | 1 / 2 / 1 | the default, and right for most creators |
| **Sell** | 1 / 2 / 2 | 1 / 1 / 2 | the audience is there and nobody buys |

With one bottom slot, alternate Deep dive and Offer week to week.

If `log.md` has the numbers, they pick the goal. Few views: the top is failing,
go Grow. Views but no follows: the middle is failing, stay Balanced and give the
middle the week's best ideas. Followers but no DMs, leads or sales: the bottom
is failing, go Sell. Judge each post by its own stage's number. A Deep dive
with low views is working if it brought one lead.

Never two of the same type back to back. For each slot give: the stage, the
theme, the specific angle from what actually happened this week, the format,
and the hook formula number from `ig-reel/hooks.json`. Not a topic, an angle.
"AI" is not a plan. "The proposal we lost because the draft had an em dash in
it" is a Reel.

## When to post

Post when the user's audience is awake and not at work. For most consumer
audiences that is early evening local time; for a business audience, early
morning.

But say this plainly: **the hour matters far less than the first two seconds.**
Instagram will keep showing a Reel for days if it performs, and will bury a
well-timed one that does not. If the user is optimising posting times before
their hooks work, they are polishing the wrong thing, and you should say so.

Anchor times to the audience's timezone, not the user's, if those differ.

## The engagement round, which is not optional

20 minutes a day, before posting, not after. Build a list of 10:

- **5 reach** - accounts with an audience the user wants, where a good comment
  gets seen. Comment early, before the thread is 200 deep.
- **3 peers** - same size, same field. This is the group that reciprocates.
- **2 buyers** - people who could actually buy. Comment for weeks before any
  DM, and never pitch in a comment.

Hand the list to `/ig-comment`.

## Output

```
WEEK OF SEP 15
GOAL  balanced (2 top / 2 middle / 1 bottom) - views up, follows flat

MON  engage only  (20 min, list below)
TUE  7:30pm  REEL      MID  PROOF      #5  Time Collapse      - 5hr proposal to 20 min
WED  7:30pm  REEL      TOP  RANK       #11 Numbered Favourite - every proposal tool we tried, ranked
THU  7:00pm  CAROUSEL  BOT  DEEP DIVE  #10 If This, Then Watch - the 4-slide clause breakdown
FRI  7:30pm  REEL      TOP  OPINION    #2  Negative Command   - stop doing discovery calls
SAT  -
SUN  6:00pm  REEL      MID  STORY      #21 Mid-Sentence       - the refund email

STORIES  every day, 3 to 5 frames, question box on Thursday.

ENGAGE  (5 reach / 3 peers / 2 buyers)
  ...

Say "write Tuesday" and I will draft it.
```

Write the plan to `./instagram/plan.md` so the other skills can read
it. Nothing is scheduled or posted anywhere. This is a plan and the user runs
it.

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

Paths like `./instagram/voice.md` above mean the platform's folder, found in this
order so one persona's voice never leaks into another's:

0. Whatever the project's `CLAUDE.md` maps this platform to. A project (an
   Obsidian vault, say) can list its own file names for the voice, plan,
   log, swipe file, drafts folder and story bank. Use those exactly.
1. `./instagram/` in the current project, if `./instagram/voice.md` exists.
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this instagram account (an older one-account repo:
   offer to move it into `./instagram/`).
3. `~/.claude/instagram/` otherwise, as a global default.

Read `./persona.md` before the voice file whenever it exists. On facts, the
persona file wins; on format and style, the platform's `voice.md` wins.
`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create `./instagram/voice.md` from this plugin's
`templates/voice.md`, and put anything that is true on every platform in
`./persona.md` instead.
