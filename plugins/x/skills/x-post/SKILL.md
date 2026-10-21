---
name: x-post
description: >-
  Write a single post for X (Twitter) from a raw idea, take, number or moment,
  using 11 hook formulas, in the user's own voice. Use when the user says
  "tweet this", "write a tweet", "post for X", "turn this into a tweet", or
  wants hook options for X.
---

# x-post

One idea into one tweet that sounds like the person who posts it.

## Before you write

1. Read `./x/voice.md` if it exists (see "Where files live" below). If it does
   not, ask for **three to six of the user's own tweets or posts**, infer the
   voice, and write the file from `templates/voice.md`. Do not invent a voice.
2. Read `./story-bank.md` if it exists. Take every concrete detail from there
   or from this conversation. **Never invent a number, date, quote, name or
   result.** If a draft needs one, ask, or leave `{{fact}}` and flag it.
3. Read `hooks.md` in this folder.

## The loop

1. **Get the goal.** Replies, reposts, likes or bookmarks. One, not all four.
2. **Pick the container.** One claim, one number or one moment is a tweet. A
   list with one short line per item can still be a tweet. Anything that needs
   teaching or has a build is a thread: hand it to `/x-thread`.
3. **Offer three hooks** from three different formulas that fit the goal, and
   say which you would ship and why, in one sentence.
4. **Draft** on the strongest one.
5. **Humanize** with `/x-human` before the user sees it.
6. **Print the card:**

```
TWEET READY
formula:  X2 Data point
goal:     bookmarks
length:   212 / 280  (emoji count as 2)
link:     none (put any link in a reply)
post at:  {from ./x/plan.md, or the window below}

Reply "yes" to log it, or tell me what to change.
```

On "yes", append the date, formula and first line to `./x/log.md`.

## Rules

- **The first line carries everything.** X has no "see more" fold to lean on.
- **280 characters on a standard account, emoji count as 2.** Ask once whether
  the user has Premium. Even then, tight beats long.
- **One idea per tweet.** Two ideas is two tweets.
- **No link in the tweet.** Links are reported to cut reach. Offer it as a reply.
- **0 or 1 hashtag, at the end. 0 or 1 emoji.** None on a serious take.
- **Lowercase sentence starts are fine** if the voice file allows them. Names of
  people, companies and products stay capitalised.
- **Close on a landing,** a specific question or a clean stop. Never "thoughts?"
  or "what do you think?".
- **Never post.** This skill writes. The user posts, at
  `https://x.com/compose/post`, unless they have their own posting tool set up
  and say "post".

## When

Weekday mornings in the audience's timezone are the default, with a second
window after lunch and a late-evening one for builder and developer crowds.
Weekends suit stories and recaps. Say plainly that the first line matters far
more than the hour.

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

Paths like `./x/voice.md` above mean the platform's folder, found in this
order so one persona's voice never leaks into another's:

0. Whatever the project's `CLAUDE.md` maps this platform to. A project (an
   Obsidian vault, say) can list its own file names for the voice, plan,
   log, swipe file, drafts folder and story bank. Use those exactly.
1. `./x/` in the current project, if `./x/voice.md` exists.
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this x account (an older one-account repo:
   offer to move it into `./x/`).
3. `~/.claude/x/` otherwise, as a global default.

Read `./persona.md` before the voice file whenever it exists. On facts, the
persona file wins; on format and style, the platform's `voice.md` wins.
`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create `./x/voice.md` from this plugin's
`templates/voice.md`, and put anything that is true on every platform in
`./persona.md` instead.
