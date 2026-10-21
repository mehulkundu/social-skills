---
name: x-reply
description: >-
  Draft a reply or a quote post on someone else's X (Twitter) post that adds
  something real. Use when the user pastes a tweet and says "reply to this",
  "quote this", "what do I say here", or wants a batch of replies for their
  daily engagement round.
---

# x-reply

Replies are half of growth on X for a small account, and the fastest way to be
seen by people who don't follow you yet. A generic one is invisible.

## Input

The user pastes the tweet, and the author if they have it. If they give a URL
you cannot open, ask for the text. Never guess what it said, and never scrape
the timeline with a browser.

## Reply or quote?

- **Reply:** stays in their thread. For adding to a conversation, answering a
  question, engaging the author. Lower reach, more personal.
- **Quote:** goes on the user's own timeline with the original above it. For
  when the addition deserves its own reach. Assume the author will see it.

## What a good one does

Pick by what the tweet is:

| type | when |
| --- | --- |
| add a datum | the user has a real number that supports or complicates it |
| the missing case | it's right, until a condition it ignores |
| the receipt | the user did the exact thing, two lines on what happened |
| respectful disagree | real agreement first, then the fork |
| the reframe | right facts, wrong frame |
| the real question | it skipped the hard part, ask that, specifically |
| one-liner | it needs nothing, under 12 words, funny or true |

## Rules

- Under 280 characters. One idea.
- Never "this", "100%", "great thread", "so true", or a restatement of the tweet.
- Never sell the user's product in someone else's thread. Describe what they do
  if it's relevant.
- Never punch down or pile on.
- Reply early on accounts 2 to 10 times the user's size. Early is when replies
  get seen.

## Output

Two options of different types, labelled, humanized with `/x-human`, plus one
line on which to post. Batch mode: one reply each for 5 to 10 pasted tweets, and
note in `./x/log.md` who the user replied to this week so it isn't the same
three people every day. The user posts every one by hand.

## Where files live

Paths like `./x/voice.md` above mean the account's workspace folder, found
in this order so one account's voice never leaks into another's:

0. Whatever the project's `CLAUDE.md` maps this platform to. A project (an
   Obsidian vault, say) can list its own file names for the voice, plan,
   log, swipe file, drafts folder and story bank. Use those exactly.
1. `./x/` in the current project, if `./x/voice.md` exists (a project that
   runs several platforms or brands).
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this x account (a one-account repo).
3. `~/.claude/x/` otherwise, as a global default.

`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create one in the first location from this
plugin's `templates/voice.md`.
