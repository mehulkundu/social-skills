---
name: li-hook
description: >-
  Reverse-engineer why a LinkedIn post worked, name its hook formula, and write
  two versions of the same shape on the user's topic. Use when the user pastes
  someone's post and says "why did this go viral", "steal this hook", "break
  this down", or wants a swipe file of what works in their niche.
---

# li-hook

## Input

Pasted posts, with their reactions, comments and reposts if the user has them,
and the author's follower count. Never scrape the feed with a browser.

## The breakdown

For each post:

1. **Formula,** matched against `../li-post/hooks.json`. If none fits, name the
   shape in a few words.
2. **The first 140 characters,** what shows before "see more" on mobile, and why
   it earned the tap.
3. **Line 2:** did it pay off line 1, or just set up line 3?
4. **The close,** and what kind of comment it invited.
5. **The multiple,** if follower counts are given: reactions plus comments
   divided by followers, so a big account's ordinary post doesn't look like a
   hit.

Be honest that this is a judgement about the text. The author's network,
timing and luck don't show up in a paste.

## Then make it theirs

Two versions of the same shape on the user's topic, in their voice
(`./linkedin/voice.md`), using only facts they've given or that are in the
story bank. Run both through `/li-human`.

Append each breakdown to `./linkedin/swipe.md` so `/li-plan` can lean on what
works in the niche.

## Where files live

Paths like `./linkedin/voice.md` above mean the account's workspace folder, found
in this order so one account's voice never leaks into another's:

0. Whatever the project's `CLAUDE.md` maps this platform to. A project (an
   Obsidian vault, say) can list its own file names for the voice, plan,
   log, swipe file, drafts folder and story bank. Use those exactly.
1. `./linkedin/` in the current project, if `./linkedin/voice.md` exists (a project that
   runs several platforms or brands).
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this linkedin account (a one-account repo).
3. `~/.claude/linkedin/` otherwise, as a global default.

`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create one in the first location from this
plugin's `templates/voice.md`.
