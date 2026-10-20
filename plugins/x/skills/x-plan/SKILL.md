---
name: x-plan
description: >-
  Plan a week on X (Twitter): what to post, when, which threads, and who to
  reply to. Use when the user says "plan my week on X", "what should I tweet",
  "content calendar for X", or "I have nothing to post".
---

# x-plan

## Input

Read `./x/voice.md`, `./x/log.md`, `./x/plan.md`, `./x/swipe.md` and
`./x/story-bank.md` if they exist, so the plan doesn't repeat a recent theme. If
they don't, ask for:

1. What actually happened this week: something shipped, an event, a decision, a
   mistake, a number. Posts come from here.
2. The three or four themes they want to be known for.
3. Their follower count.
4. 10 to 20 accounts worth being seen by.

## Cadence by size

| followers | posts / day | threads / week | replies / day |
| --- | --- | --- | --- |
| under 1K | 2 to 3 | 1 to 2 | 10 to 20 |
| 1K to 10K | 3 to 5 | 2 to 3 | 5 to 15 |
| 10K to 50K | 3 to 7 | 2 to 4 | 5 to 10 |

Consistency over bursts. Under 1K, replies do more than posts, so plan them like
posts.

## What to post

Mix the themes and the goals across the week. Never the same theme twice in a
row. Every slot gets an angle, not a topic: "design" isn't a plan, "the screen
we cut and why" is. Give each slot a formula from `../x-post/hooks.md`.

## When

Weekday mornings in the audience's timezone, a second window after lunch, and
late evening for builder crowds. Weekends for stories and recaps. Anchor the
times to the audience's timezone, not the user's. And say it: the first line
matters more than the hour.

## Replies

Reply to every real reply in the first 30 to 60 minutes after posting. Build a
list of 20 accounts: reach (bigger accounts to reply to early), peers (same size,
who reply back) and community (organisers, groups, regulars in the niche).

## Output

```
WEEK OF {date}
MON  9:30am  X3 confession  {angle}        + 15 replies
TUE  1:00pm  X5 mini-list   {angle}        + 15 replies
WED  9:30am  THREAD X10     {angle}
...
ENGAGE  8 reach / 8 peers / 4 community
Say "write Monday" and I'll draft it.
```

Write it to `./x/plan.md`. Nothing is scheduled or posted.

## Where files live

Paths like `./x/voice.md` above mean the account's workspace folder, found
in this order so one account's voice never leaks into another's:

1. `./x/` in the current project, if `./x/voice.md` exists (a project that
   runs several platforms or brands).
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this x account (a one-account repo).
3. `~/.claude/x/` otherwise, as a global default.

`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create one in the first location from this
plugin's `templates/voice.md`.
