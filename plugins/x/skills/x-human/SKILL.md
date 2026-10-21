---
name: x-human
description: >-
  Strip the machine fingerprint out of any X (Twitter) draft (em dashes, AI
  vocabulary, invisible characters, stock structures) and score it before it
  goes out. Use before any tweet, thread or reply is shown to the user, or when
  they say "humanize", "does this sound like AI", "de-slop this".
---

# x-human

Two scripts in this folder, both run with plain Python 3 and no dependencies.
Use them. Don't eyeball it.

```bash
python3 humanize.py draft.txt --report     # clean it, show what changed
python3 detect.py draft.txt                 # score it, five checks
python3 detect.py before.txt after.txt      # show the delta
```

Both read `slop.json`, the lexicon. Edit it if the user always uses a word it
strips.

## Fixed automatically

- **Invisible characters:** zero-width spaces and joiners, soft hyphens,
  byte-order marks, non-breaking spaces.
- **Typography:** em dash to comma, en dash to hyphen, curly quotes to
  straight, ellipsis to three dots.
- **The lexicon:** delve, leverage, robust, seamless, crucial and the rest,
  swapped for plain words.

## Fix by hand

The script flags these. Rewrite them yourself:

- "It's not just X, it's Y", "not only X but also Y"
- "here's what / here's how" as an opener, "The result?" as a reveal
- announced candour ("let me be honest", "not gonna lie") with no fact behind it
- "unpopular opinion:" on a popular take
- hollow rule-of-three triads
- ALL CAPS openers, emoji strings, two or more hashtags
- "thoughts?", "agree?", "what do you think?" as the close

## X-specific

- **Vocabulary by density.** One stock word in a tweet is English. Two is
  borderline, flag it. Three means rewrite the whole tweet.
- **Leave a single tweet's rhythm alone.** Short posts read fine with even
  sentences. Don't insert fragments for punch. The script's burstiness check
  means less on a 200-character tweet than on a long post.
- `..` is a native soft pause on X if the voice file uses it.
- Check the length after cleaning: 280, emoji count as 2.

## Say this honestly

These are local heuristics. They don't call any detector and can't promise any
detector's verdict. Never tell the user a draft is undetectable. Show the
cleaned text and the score together, never the score alone.

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
