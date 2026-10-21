---
name: video
description: >-
  Make a social video in the user's own brand with Remotion - a 1080x1080
  square for X and LinkedIn, or a 1080x1920 Reel or Short - from what the
  other skills already produced (the /ig-reel script and beats.py timings,
  hookscore.py rankings, READY cards, humanizer scores) and the user's own
  footage (talking head, screen recordings). Writes one props.json, shows it
  live in Remotion Studio and renders an MP4. Use when the user says "make a
  video", "turn this into a reel", "animate this", "cut my recording", "put my
  screen recording in", "launch video", or wants a Reel, a Short or a square
  video. Renders a file; the user posts it.
---

# video

Turns real output and real footage into a branded video, without writing
animation code for each one. You write a small `props.json`. The studio's
templates draw every frame.

The studio is a Remotion project that lives **in the user's own repo**, next
to their `voice.md`. It holds their brand, their footage and every video
they've made. Nothing is installed into this plugin: plugin updates replace
the plugin folder, and each user's brand belongs in their own copy.

```bash
bash setup.sh <workspace>/video                     # first time only
npx remotion studio                                  # live editor, http://localhost:3000
npx remotion still Reel out/f48.png --frame=48 --props=props.json
npx remotion render Reel out/my-video.mp4 --props=props.json
```

`setup.sh` is in this folder. Every other command runs inside the studio
folder.

## What it needs

This is the only skill in social-skills with dependencies. It needs **Node 18
or newer**. `npm install` brings in Remotion, about 250 MB in the studio's
`node_modules`. The first render also downloads Remotion's own headless
Chrome. It doesn't use the user's Chrome.

Remotion is source-available, not OSI open source. It's free for
individuals, for-profit companies with up to 3 employees, and non-profits.
Bigger companies need a company licence from remotion.pro. Remotion 5 will
count contractors toward the 3. Tell the user this once, at setup, if the
videos are for a company.

## Where the studio lives

Same lookup every skill uses for `voice.md`. Take the first that applies:

0. Whatever the project's `CLAUDE.md` maps `video` to.
1. A studio that already exists: `./video/` or `./<platform>/video/` with a
   `package.json` in it. **One studio per brand.** If the project already
   has one, use it for every platform.
2. A new one next to the voice file the video is for: `./<platform>/video/`
   when `./<platform>/voice.md` exists, `./video/` when `./voice.md` is this
   project's account, `~/.claude/video/` otherwise.

Then run `bash setup.sh <that folder>`. It copies the template, runs
`npm install` there and refuses to install anywhere inside the plugin. An
existing studio is left untouched, because it holds the user's own brand,
props and scenes. The studio's own `.gitignore` keeps `node_modules/`,
`out/` and `public/footage/` out of their git.

```
video/
├── brand.json        their colours, background, fonts, corner radius
├── brands/           preset looks: paper (the default), night, bloom
├── props.json        the video being made right now
├── videos/           props.json of every finished video, to render again
├── src/scenes.tsx    every scene template; add theirs here
├── public/fonts/     font files named in brand.json
├── public/footage/   their recordings (not committed)
└── out/              renders and stills (not committed)
```

## Brand first

A new studio starts in the paper-and-terracotta look. Make it theirs before
the first video:

- **Colours.** Ask, or read them off their site, profile or last carousel.
  Set `colors` in `brand.json`: `bg`, `ink` (text), `accent`, `muted`,
  `line`, `track`, `soft`, `card`, `good`, `bad`.
- **Background.** `background` takes any CSS background: a flat colour, a
  gradient, or the paper grain. For a ready-made look, copy a preset:
  `cp brands/night.json brand.json`.
- **Fonts.** Put `.woff2` files in `public/fonts/`, list them under `fonts`
  and name them in `type` (`display`, `body`, `mono`). Use only fonts they're
  allowed to ship. Google Fonts and anything under the OFL are fine.

Render one still and show it to them before making the first real video.

## Show it in the Studio

Start `npx remotion studio` in the background from the studio folder and give
the user http://localhost:3000. Everything you change in `props.json`,
`brand.json` or `src/` reloads there, so they can watch the video being put
together. They can scrub and play it, try changes in the props panel on the
right, and render from the Render button, which uses whatever the panel shows.
Panel changes aren't written back to `props.json`, because Remotion can only
save props written inline in the code. To keep one, ask what they changed (the
panel's JSON tab shows everything) and put it in `props.json` yourself.

## props.json

```json
{
  "format": "reel",
  "fps": 30,
  "chrome": {"title": "name */* show", "tag": "real runs", "footer": "one line", "strip": ["MON", "TUE"]},
  "beats": [{"start": 0, "end": 2.9, "text": "The hook, on screen at frame one."}],
  "scenes": [{"type": "bigtype", "start": 0, "end": 3.6, "data": {"text": "50 skills.\n*Free.*"}}],
  "brand": {"colors": {"accent": "#e4572e"}},
  "guides": true
}
```

- **format** is `square` (1080x1080, for X and LinkedIn), `reel` (1080x1920)
  or `short` (1080x1920, the reel with a channel-link ending). A list makes
  one file serve several. Give an item `"only": "short"` and it appears in
  that format alone. That's how one file ends "Link in my bio" as a Reel
  and "Link on my channel" as a Short.
- **fps** is 30 by default. Match the footage if there is any. The length is
  the last `end`, or set `duration` in seconds.
- **chrome** is the frame around the scenes: a title (`*x*` is the accent
  colour), a small tag, a footer line, and on square only a `strip` of labels
  that light up one per scene. All optional.
- **beats** become burned-in captions. See Captions below.
- **scenes** play between `start` and `end` seconds. Later scenes draw on top,
  so they can overlap: a card over a talking head, say.
- **brand** overrides `brand.json` for this one video.
- **guides** shades the areas a Reel's interface covers. Use it for checking,
  and take it out before the final render.

### Scene types

Every card takes `cmd` (the label, e.g. `/ig-viral`), `what` (the grey text
after it), `sub` (a mono line under it) and `foot` (a terracotta line at the
bottom). The rest of `data`:

| type | data | shows |
| --- | --- | --- |
| `card` | `lines: ["text", ...]` | a command label and a few lines of real output |
| `rows` | `rows: [{value, name, handle}]` | ranked rows: a multiple, a name, a masked handle |
| `week` | `days: [{day, time, kind, what}]` | a week plan; days with no `kind` are dim |
| `hooks` | `hooks: [{score, verdict, text, tag}]` | scores counting up, bars, STRONG / OK / WEAK pills |
| `ready` | `cards: [{title, fields: {label: value}}]` | THREAD READY, POST READY, REEL READY blocks |
| `human` | `before, after, from, to, pass, verdict` | the old line struck, the rewrite, the score counting up and flipping REVIEW to PASS at `pass` (70) |
| `lint` | `title, score, of, note, checks` | a title, its score, a check list (`"text"` or `{text, ok: false}`) |
| `rubric` | `rows: [{label, got, max}]` | rubric bars, red under 70% |
| `chips` | `chips: ["/ig-viral", ...]` | a grid of chips, e.g. every skill |
| `bigtype` | `text, size` | big type, `\n` for lines, `*word*` in the accent |
| `doc`, `fanout`, `chat` | `file, note` / `count, from, to` / `note` | plain graphics with grey bars, for beats with no real run |
| `end` | `line, button, sub` | the one ask: a button, and a cursor that stops short of it |
| `link` | `line, url` | where to find it |
| `clip` | `src, layout, from, muted, fit` | the user's footage, see below |

Handles in `rows` are masked on screen (`@ha•••`) whatever you pass in.

## Feed it what the other skills made

Copy real output across as it is. Don't retype numbers from memory.

| from | into |
| --- | --- |
| `/ig-reel` script, timed with `beats.py script.txt --json` | `beats`: paste the `beats` rows as they are. They carry `start` and `dur`, and that works too. |
| `/ig-reel` on-screen text list | `bigtype` scenes at those times, the hook card at `start: 0` |
| `hookscore.py hooks.txt --json` | `hooks`: the rows as they are (`hook`, `score`, `verdict`), `tag: "shipped"` on the one used |
| THREAD READY (`/x-thread`), POST READY (`/li-post`), REEL READY (`/ig-reel`) | `ready`: the title and each line as a field |
| `detect.py before.txt after.txt --json` and the humanizer's rewrite | `human`: `from` and `to` are the two `human_score`s, `verdict` the second verdict |
| `swipe.py` / `/ig-viral` `swipe.md` | `rows`: the multiple, the formula, the handle |
| `plan.md` from `/ig-plan`, `/li-plan`, `/x-plan` | `week` |
| `/ig-profile` or `/li-profile` rubric scores | `rubric` |
| `title.py` from `/yt-package` | `lint` |

## Their footage

When the user hands you a recording, copy it (never move it) into
`public/footage/` and use it as `"src": "footage/name.mp4"`. Check its length
with `npx remotion ffprobe public/footage/name.mp4`.

- `"layout": "full"` fills the frame: a talking head, with cards drawn over it.
- `"layout": "framed"` puts it in a card under a label: a screen recording.
- `"layout": "bubble"` is a face cam circle at the bottom left: pair it with a
  framed screen recording.

A clip plays in step with the timeline by default, so one long recording cut
into several scenes stays in sync with its own sound. Set `from` (seconds into
the file) to start somewhere else. Sound comes from the footage. Put
`"muted": true` on screen recordings.

## Captions

Burned in, because most people watch muted. Where they come from depends on
the video:

- **A script and no live speech** (motion graphics, a voice-over added
  later): `beats` from `beats.py`. The hook is whole at frame 1 and later
  lines come in word by word.
- **The user talking on camera:** leave `beats` out. `beats.py` only
  estimates timing from word count and would drift off their real speech.
  There's no speech-to-text here. Tell them to add captions in Instagram's
  Edits, CapCut or YouTube's editor before posting. All three do it free.

## Rules

- **Real output only.** Cards show only what came out of a run that actually
  happened, copied exactly. Never invent a score, a multiple, a count or a
  handle. A beat with no real run behind it gets a plain graphic (`bigtype`,
  `doc`, `fanout`, `chat`), never made-up output.
- **Safe zone.** On a Reel or Short, everything stays between y=230 and
  y=1440 and clear of the right 230px. The cards, captions and chrome already
  sit there. Check anything new, such as text in their footage, with
  `"guides": true`.
- **The hook is on screen at frame 1.** Anything starting at 0 doesn't fade in.
- **Captions** are burned in, or added in the app before posting. Never
  neither.
- **One ask at the end.** One `end` card or one `link` card, not both asking
  for different things.
- **Nothing posts.** This renders a file. The user posts it.

## The loop

1. **Find or set up the studio**, and do the brand if it's new.
2. **Gather the inputs:** the script and beats, the real outputs from earlier
   runs, the footage. If a beat needs a number nobody has run, it gets a plain
   graphic.
3. **Write `props.json`** and start the Studio so the user can watch.
4. **Check stills.** `npx remotion still <Square|Reel|Short> out/f<n>.png
   --frame=<n> --props=props.json` at frame 0, at a settled moment in every
   scene (about 70% of the way through it), and at the last frame. Look at
   every one. Fix text running out of a card, overlaps and anything in the
   shaded guides, then check again.
5. **Render.** `npx remotion render <Square|Reel|Short> out/<slug>.mp4
   --props=props.json`, then copy `props.json` to `videos/<slug>.json`.
6. **Print the block:**

```
VIDEO READY
file:      out/launch-reel.mp4  (1080x1920, 30.6s, 24 fps)
scenes:    12, every card from a real run
captions:  burned in, 13 beats from beats.py
ask:       link in bio
stills:    8 checked, nothing in the guides

Post it yourself. Talking on camera? Add captions in Edits first.
```

7. **Never publish.**

## Their own templates

- **A new kind of scene:** add a component to `SCENES` in their
  `src/scenes.tsx`. `props.json` then uses it by name. It's their copy, so
  their templates stay theirs.
- **They already have a Remotion project:** use it. Render its compositions
  with its own props. Don't copy this studio over it.
- **After a plugin update,** their studio doesn't change. To bring in new
  scene types, diff this folder's `template/src` against theirs and ask before
  merging anything.
