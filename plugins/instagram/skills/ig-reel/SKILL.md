---
name: ig-reel
description: >-
  Write an Instagram Reel from a raw idea - hook options off 26 formulas, the
  spoken script, the on-screen text, and a timed beat sheet - in the user's own
  voice and scored before they shoot it. Use whenever the user wants a Reel, a
  short-form video script, a hook, a voiceover, "make a reel about X", "what
  should I say in this video", or is about to record and does not have the
  first line yet.
---

# ig-reel

Turns one raw idea into a Reel that somebody finishes.

Two tools live in this folder and they both actually run. Use them. Do not
eyeball the hook and do not guess at the length.

```bash
python3 hookscore.py hooks.txt              # rank your hook options
python3 hookscore.py --hook "one line"      # score a single one
python3 beats.py script.txt --target 30     # timed beat sheet before you shoot
```

## Before you write

1. Read `./instagram/voice.md` if it exists. That is the user's voice
   profile: how they talk on camera, what they never say, who they are talking
   to. If it does not exist, ask for **three of their own reels**, transcribe or
   read them, infer the voice, and write the file. A script in the wrong voice
   is unusable, because they have to say it out loud.
2. Read `hooks.json` in this folder. 26 formulas, each with a template, a filled
   example, the on-screen version, what it is for, and how it gets ruined.
   Four of them are in there because they kept turning up in real hooks, not
   because they completed a pattern.
3. If the idea is thin, do not pad it. Ask one batched question: what happened,
   to whom, and what did it cost or return. A Reel needs one specific true
   thing. Get it before writing.
4. If `./instagram/swipe.md` exists, read it. `/ig-viral` writes that
   file, and it is the user's own evidence about which formulas are working in
   their niche right now. It beats the defaults in this file.

## The shape

A Reel is decided in the first two seconds and kept by the next five. The
opening is a triple hook: context, then the lean, then the snapback.

```
0:00 - 0:02   HOOK        context, then the lean, in one line. Spoken line and
                          on-screen line, written separately. Motion in the
                          first frame, not a static face.
0:02 - 0:05   SNAPBACK    one line that turns against the way they just leaned.
0:05 - ...    THE BODY    one idea per beat, and the frame changes every beat.
LAST 3s       THE PAYOFF  deliver what the hook promised, then the single ask.
LAST LINE     THE LOOP    echo one word from the hook so the replay lands clean.
```

Length: 15 to 45 seconds is the working range. Reels run to 3 minutes and
almost nobody should use it. Under 7 seconds the loop counts inflate and
nothing else does.

## The triple hook

Most hooks do one of these three things. The ones that hold do all three, in
this order.

**1. Context, in the first words.** People only stay for a topic they already
care about, so the first thing they get is what this video is about. Not in the
back half of the first sentence: at the front. Use every channel at once: say
it, put it on the frame-1 card, and have it in the shot. When the spoken line
has to open on a number, the card and the shot carry the context.

**2. The lean.** Now tip them forward, curious in one direction. Three ways in:
proof (a number or result that makes the coming claim believable), a pain they
have or a result they want, named specifically, or something they did not
expect. Read the first one or two sentences back on their own. Is it obvious
what this is about? Is there a reason to want the next sentence? Two yeses, or
it is not the hook.

**3. The snapback.** Then pull them the other way. The line after the hook
turns against the direction they were leaning: the answer they assumed is
wrong, the obvious fix is not the fix, the result came from somewhere nobody
looks. The lean opens a question; the snapback swaps it for a sharper one they
did not see coming, and that is what carries them into the body. It usually
starts with "but", "except", "it wasn't" or "turns out". Formulas #2, #7 and
#12 have one built in. It has to be true, and the body has to pay it off. A
snapback the video never explains is bait, and people can tell.

## The loop

**1. Pick three hooks, not one.** Run the idea through `hooks.json`, choose
three formulas that genuinely fit it, and write the spoken line plus the
on-screen line for each. Different formulas, not three rewrites of one. Then
write each one's snapback: a hook is not finished until it has one.

**2. Score them.** Put the three spoken lines in a file, one per line, and run
`hookscore.py`. Show the user the ranking. If the top one is under 50, you do
not have the hook yet and no amount of editing fixes that. The script scores
the hook line only, so leave the snapbacks out of the file. Then read each
opening back as a triple hook: context in the first words or on the frame-1
card, a lean, a snapback. A high score does not excuse a missing part. Fix it
before you pick.

**3. Write the script** on the winning hook. Plain spoken language, the way the
user actually talks. Contractions. Short lines. No sentence they would have to
rehearse.

**4. Time it.** Run `beats.py script.txt --target {length}`. Fix every flag:
a hook past 3 seconds, any beat over 4 seconds, a run of beats with nothing
concrete in them, no loop. Re-run until it is clean.

**5. Humanize it.** Run the script through `/ig-human` before showing it. A
written-sounding line is obvious the moment someone says it out loud.

**6. Print the block.** The script in a fenced block, the on-screen text as a
separate list with timings, and then:

```
REEL READY
hook:       #3 Nobody Tells You, scored 86 STRONG
triple:     context on the card, lean on a number, snapback at 0:02
length:     28.4s across 9 beats at 165 wpm
on-screen:  6 cards
humanizer:  4 artefacts stripped, human score 81 PASS
caption:    run /ig-caption next

Reply "yes" to log it, or tell me what to change.
```

**7. Never publish.** This skill produces a script. The user shoots it and
posts it. On "yes", append to `./instagram/log.md` with the date, the
hook formula used and the first line, so `/ig-audit` has a history later.

## On-screen text is a separate script

Write it separately, every time. It is read before it is heard.

- **Six words or fewer per card.** It is being read at arm's length by someone
  who is not listening yet.
- **The hook card is up at frame 1**, not after a beat of silence, and it says
  what the video is about. A card that would fit any video, "WATCH THIS" or
  "WAIT FOR IT", has spent the frame on nothing.
- **Keep it inside the safe zone.** On a 1080x1920 frame, nothing above y=230
  or below y=1440, and keep the right 230 pixels clear. The interface sits on
  top of everything outside that box: the caption, the action rail, the audio
  strip.
- **Never put the hook where the caption sits.** That is the bottom of the
  frame and it is covered.
- **Burn in captions for the body.** Most people watch muted first.

## Rules that make the difference

- **One idea per Reel.** If the script has two, you have two Reels. Say so.
- **Numbers over adjectives.** "$4,200" beats "a lot". If the user has not
  given a number, ask for one rather than writing around the hole.
- **Cut the intro.** No greeting, no "in this video", no name, no logo sting.
  The video starts at the sentence you would normally reach at second six.
- **Change the frame every beat.** A static shot for 8 seconds is where people
  leave, and `beats.py` will flag it.
- **One ask at the end.** Comment a keyword, save it, or follow. One.
- **Never fabricate.** No invented metrics, clients, revenue or outcomes under
  the user's name, even as a placeholder. If a number is needed and unknown,
  leave `{{your number}}` in the script and flag it.
- **Do not write a script around a trending audio the user cannot use.** If the
  idea needs the user's own voice, say so.

## Example

```
/ig-reel we cut proposal time from 5 hours to 20 minutes with one template
```

```
HOOKS  (scored, then read back as a triple hook)
  79  STRONG  #5  Time Collapse   "Proposals used to cost me five hours. Now they take twenty minutes."
                                  snapback:  "It wasn't AI. It was one template."
                                  on screen: PROPOSALS: 5 HOURS -> 20 MIN
  55  OK      #1  Cost Confession "I billed four hours a week for formatting. For two years."
                                  snapback:  "The fix wasn't working faster."
                                  on screen: 2 YEARS FORMATTING PROPOSALS
                                  context lands at word 7; the card has to carry it
  37  WEAK    #9  The Steal       "Steal the proposal template that did it."
                                  snapback:  none, and "it" is context they don't have yet
                                  on screen: STEAL THIS PROPOSAL TEMPLATE

Shooting #5: the context is the first word, the ratio is the lean, and "it
wasn't AI" snaps them off the answer they had already guessed. The number is
yours.
```

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
