<div align="center">

# social-skills

**Give your AI agent these 50 skills and it runs your Instagram, LinkedIn, X and YouTube. It finds what's working, plans the week, writes every post, drafts the replies and audits what flopped, in your own voice.**

It does everything except press post.

[![MIT License](https://img.shields.io/badge/license-MIT-black.svg)](LICENSE)
[![Claude Code plugin](https://img.shields.io/badge/Claude_Code-plugin_marketplace-d97757.svg)](https://code.claude.com/docs/en/plugins)
[![50 skills](https://img.shields.io/badge/skills-50-black.svg)](#whats-inside)
[![No dependencies](https://img.shields.io/badge/python-no_dependencies-black.svg)](#the-tools)

[Install](#install) · [What's inside](#whats-inside) · [Video add-on](#optional-add-on-video) · [Set up your voice](#set-up-your-voice) · [FAQ](#faq)

</div>

---

Most people use AI to write one post. social-skills hands your agent the rest
of the job.

- **Finds what's working.** `/ig-viral` and `/yt-viral` rank the reels and videos in your niche by how far each one beat its own account's median, and name the hook behind it.
- **Plans the week:** what to post, in which format, when, and who to engage with.
- **Makes the posts** off 11 to 26 hook formulas per platform. Tweets and threads, LinkedIn posts and carousel PDFs, reel scripts with timed beat sheets, 1080x1350 carousel slides, YouTube scripts, titles, thumbnail text, descriptions and chapters.
- **Repurposes.** One long video becomes Shorts, an edit list for the dead air, and a week of posts for every other platform.
- **Engages.** Comments on other people's posts, replies to yours sorted by which deserve one, DMs, and a LinkedIn inbox sorted into leads, recruiters, peers and spam.
- **Audits.** Profiles scored out of 100 on a 12-part rubric, post-mortems on what to stop, and where viewers really leave in a YouTube retention export.

And it sounds like you. Every skill starts from a `voice.md` built from 3 to 6 of
your own past posts and takes facts only from you. It'll leave a `{{fact}}` gap
before it invents a number. Then a humanizer scores each draft before you see it
and strips or flags the AI accent: the em dashes, "delve", "it's not just X,
it's Y".

- **One plugin per platform.** Install only the ones you use.
- **Draft-only.** No API keys, no logins, no posting service. Nothing leaves your machine unless you copy it.
- **Generic.** Nothing about any person or brand is baked in. Your voice lives in a folder you own, so one install runs any number of accounts.
- **Real tools, not vibes.** 16 small Python scripts score hooks, lint titles, find dead air and catch AI tells. Plain Python 3, zero dependencies.

## Install

You need [Claude Code](https://claude.com/claude-code). Then, in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/mehulkundu/social-skills/main/install.sh | bash
```

That adds the marketplace and installs all four platforms. To pick some:

```bash
curl -fsSL https://raw.githubusercontent.com/mehulkundu/social-skills/main/install.sh | bash -s -- x linkedin
```

<details>
<summary><b>Prefer to do it inside Claude Code?</b></summary>

```
/plugin marketplace add mehulkundu/social-skills
/plugin install x@social-skills
/plugin install linkedin@social-skills
/plugin install youtube@social-skills
/plugin install instagram@social-skills
```

Or from the terminal without the script:

```bash
claude plugin marketplace add mehulkundu/social-skills
claude plugin install x@social-skills
```

</details>

Restart Claude Code (or run `/reload-plugins`), then type `/x-post`, `/li-post`,
`/ig-reel` or `/yt-script` and give it an idea.

**Update** by running the install command again, or `/plugin marketplace update social-skills`.
**Remove** with `/plugin uninstall x@social-skills`.

## See it work

You give it an idea. It asks for your goal, offers three hooks from three
different formulas, drafts the strongest, humanizes it and hands you a card:

```
TWEET READY
formula:  X2 Data point
goal:     bookmarks
length:   212 / 280  (emoji count as 2)
link:     none (put any link in a reply)
post at:  Tue 9:10am, from ./x/plan.md

Reply "yes" to log it, or tell me what to change.
```

The humanizer is the part people notice. Here is a real run on a draft that
sounds like every LinkedIn post you've scrolled past:

```
$ python3 detect.py draft.txt

  SLOP DENSITY  ........................   0.0
                6 stock terms, 27.3 per 100 words (delve into, in today's fast-paced world, leveraging, ...)
  FINGERPRINT   ........................   0.0
                0 invisible, 1 em dash, 0 curly quote, 0 ellipsis, 0 hard space
  HUMAN SCORE   ####....................  18.0   FLAGGED

  Weakest signal: SLOP DENSITY. Fix that first.
```

It fixes the mechanical tells (em dashes, invisible watermark characters, 100+
stock phrases) and flags the structural ones like "It's not just X, it's Y" for
you to rewrite, because a find-and-replace can't fix a sentence shape.

And the YouTube title linter catches what you miss at 1am:

```
$ python3 title.py --title "I Let AI Run My Channel for 30 Days" --thumb "AI RAN IT"

  "I Let AI Run My Channel for 30 Days"
  35 chars   score 94/100
    x  duplicate    thumbnail repeats the title on ai - the thumbnail should say what the title does not
    ok              35 characters, inside the 60-character desktop cut
    ok              carries a concrete figure (30)
```

## What's inside

Every skill is a slash command. Type it, or just describe what you want and
Claude picks the right one.

<details open>
<summary><b>X (Twitter)</b>, 11 skills</summary>

| skill | what it does |
| --- | --- |
| `/x-post` | One idea into one tweet, off 11 hook formulas |
| `/x-thread` | Listicle, story, curiosity-gap or teardown threads where every tweet stands alone |
| `/x-reply` | Replies and quote posts that add something real |
| `/x-event` | A live post from the room and a recap for any meetup, talk or launch |
| `/x-hook` | Reverse-engineer why a post worked and write two of the same shape on your topic |
| `/x-profile` | Audit and rewrite bio, display name, header and pinned post |
| `/x-plan` | Plan the week: posts, threads, timing, who to reply to |
| `/x-repurpose` | Turn a long piece into native posts and a thread |
| `/x-audit` | Post-mortem on what you've posted: what worked, why, what to stop |
| `/x-interview` | Interviews you and saves your stories to a shared story bank |
| `/x-human` | Strips AI tells and scores the draft |

</details>

<details>
<summary><b>LinkedIn</b>, 13 skills</summary>

| skill | what it does |
| --- | --- |
| `/li-post` | A post from a raw idea off 21 hook formulas, humanized |
| `/li-carousel` | Slide-by-slide document post and the PDF to upload |
| `/li-comment` | Comments on other people's posts that read like a person with an opinion |
| `/li-reply` | Answers to every comment on your posts, sorted by which deserve one |
| `/li-dm` | 200-character invites, first messages and two follow-ups |
| `/li-inbox` | Sorts requests and DMs into leads, recruiters, peers and spam, drafts replies |
| `/li-profile` | Scores your profile out of 100 on a 12-part rubric and rewrites the weak parts |
| `/li-plan` | Plan the week: what, when, who to engage |
| `/li-repurpose` | One video, podcast or newsletter into a week of posts |
| `/li-audit` | Post-mortem on what you've published |
| `/li-hook` | Reverse-engineer a post that worked and write two on your topic |
| `/li-interview` | Interviews you and fills the story bank |
| `/li-human` | Strips AI tells and scores the draft |

</details>

<details>
<summary><b>Instagram</b>, 13 skills</summary>

| skill | what it does |
| --- | --- |
| `/ig-reel` | Hook options off 26 formulas, spoken script, on-screen text and a timed beat sheet, scored |
| `/ig-caption` | The caption, built around the line that survives the "...more" fold |
| `/ig-carousel` | The cover that earns the swipe, slide copy and 1080x1350 files |
| `/ig-story` | Frame-by-frame stories with the right sticker in the right place |
| `/ig-profile` | Scores your profile out of 100 and rewrites name field, bio, highlights, grid |
| `/ig-plan` | Plan the week: what, which format, when, who to engage |
| `/ig-comment` | Comments on other people's reels that don't read like a bot |
| `/ig-reply` | Replies to your own comments, sorted by which are worth it |
| `/ig-dm` | Keyword delivery, first messages, collab pitches and follow-ups |
| `/ig-repurpose` | One long asset into a week of reels and carousels |
| `/ig-viral` | Finds reels outperforming their own account in your niche and builds a swipe file |
| `/ig-audit` | Post-mortem on which reels worked and what to stop making |
| `/ig-human` | Strips AI tells and scores the draft |

</details>

<details>
<summary><b>YouTube</b>, 13 skills</summary>

| skill | what it does |
| --- | --- |
| `/yt-script` | Hook options off 21 formulas, scored, then the full script with retention beats marked |
| `/yt-package` | Title and thumbnail as one pairing, linted for truncation, duplication and vagueness |
| `/yt-shorts` | Finds the self-contained Shorts hiding in a long video |
| `/yt-seo` | Description, tags and search text aimed at what people actually type |
| `/yt-chapters` | Chapters from a transcript, validated against YouTube's rules so they render |
| `/yt-edit` | An edit decision list from a raw transcript: dead air, filler, retakes, with timecodes |
| `/yt-retention` | Reads a Studio retention export and finds where viewers really leave |
| `/yt-comment` | Comment replies in your voice, triaged |
| `/yt-community` | Text, poll, image and quiz posts between uploads |
| `/yt-plan` | A week or month of uploads sized to your actual capacity |
| `/yt-viral` | Finds videos outperforming their channel in your niche and names the formula |
| `/yt-pivot` | Repositions a channel without losing the subscribers worth keeping |
| `/yt-audit` | End-to-end channel audit and what to fix first |

</details>

## Optional add-on: video

`/video` isn't one of the 50, and it's only installed if you ask for it. It
turns what the other skills made into a video in your own brand: a 1080x1080
square for X and LinkedIn, or a 1080x1920 Reel or Short. Captions come from
the `/ig-reel` beat sheet, and the cards show your real hook scores, READY
cards and humanizer runs. Give it your own recordings, a talking head or a
screen capture, and it lays the cards over them.

```bash
curl -fsSL https://raw.githubusercontent.com/mehulkundu/social-skills/main/install.sh | bash -s -- video
```

The agent writes one small `props.json` and [Remotion](https://www.remotion.dev)
draws every frame, so a new video takes a few lines of JSON instead of a page
of animation code. You watch it come together in Remotion Studio, where you
can scrub it, try changes and render. Treat it as a starting point. Add music
or speech captions in Instagram's Edits or CapCut if you like, then post it
yourself.

Two things are different about this one:

- **It has dependencies.** It's the only plugin that does. It needs Node 18 or
  newer, and Remotion downloads its own headless Chrome the first time it
  renders. The studio gets set up in your own repo, next to your `voice.md`,
  never inside the plugin, so your brand, fonts and footage stay in your copy.
- **Remotion isn't OSI open source.** It's free for individuals, companies of
  up to 3 people and non-profits. Bigger companies need a
  [company licence](https://www.remotion.pro). The terms are in
  [Remotion's licence](https://www.remotion.dev/license).

## Set up your voice

The first time you run a writing skill, it asks for three to six of your own
posts and writes your `voice.md` from them. That's it. If you'd rather fill it in
by hand, each plugin ships a [template](plugins/x/templates/voice.md).

**Ground rule: one persona, one project.** A persona is one identity, like a
founder, a DJ or an artist. Its Instagram, X, LinkedIn and YouTube accounts are
the same persona on different platforms: the format and the style change, the
persona doesn't. So keep each persona in one project, with a folder per
platform. When the persona starts on a new platform, add a folder; don't start
a new project. What's true everywhere (who you are, your goals, what you never
claim) goes once in `persona.md` at the project root, and each platform's
`voice.md` only says how you sound and what you post there.

Skills look for the voice file in this order and use the first one they find:

1. Whatever your project's `CLAUDE.md` maps the platform to
2. `./<platform>/voice.md` in the folder you opened Claude Code in
3. `./voice.md`, when the project's `CLAUDE.md` says the whole project is one account (older layout; the skills offer to move it into `./<platform>/`)
4. `~/.claude/<platform>/voice.md` as a global default

They read `persona.md` first when it exists. Plans, logs and swipe files are
saved next to the voice file. `story-bank.md` sits at the project root and every
platform draws from it, so the stories `/x-interview` pulls out of you show up
in your LinkedIn posts too.

Keep your notes in Obsidian or similar, where file names must be unique? Map
each platform to its own file names in `CLAUDE.md` and the skills check that
first.

<details>
<summary><b>Example layout for one persona on three platforms</b></summary>

```
founder/
├── CLAUDE.md
├── persona.md             # true on every platform
├── story-bank.md          # shared by every platform
├── x/
│   ├── voice.md
│   ├── plan.md
│   └── log.md
├── linkedin/
│   └── voice.md
└── youtube/
    └── voice.md
```

</details>

## The tools

Skills call these themselves. You can also run any of them directly.

| tool | what it does |
| --- | --- |
| `humanize.py` | Removes em dashes, invisible characters and 100+ stock phrases, reports what changed |
| `detect.py` | Five-check AI detection panel: burstiness, specificity, slop density, fingerprint, voice |
| `hookscore.py` | Scores a hook on the five things strong hooks share and ranks a batch |
| `beats.py` | Turns a reel script into a timed beat sheet and flags slow beats |
| `caption.py` | Shows exactly what the feed shows before "...more" and lints the caption |
| `title.py` | Lints YouTube titles and thumbnail text as a pair |
| `chapters.py` | Writes chapters from a transcript, enforcing YouTube's rules |
| `deadair.py` | Finds dead air, filler and retakes in a transcript |
| `retention.py` | Reads a retention export and finds the drop-offs |
| `swipe.py` | Ranks videos or reels by how far each beat its own account |

All plain Python 3, standard library only. The word lists live in JSON next to
the scripts (`slop.json`, `hooks.json`, `rubric.json`), so if the humanizer keeps
stripping a word you actually use, delete it from the list.

## FAQ

**Does it post for me?**
No, on purpose. Every skill ends with a draft you copy. No API keys, no account
access, nothing that can get you rate-limited or banned.

**Does it need an API key or a paid service?**
Only Claude Code itself. The skills and tools run locally. The one exception
is the optional video add-on: a company of more than 3 people needs a
Remotion licence to use it.

**Will my posts sound like AI?**
That's the problem this exists to solve. Drafts come from your voice file, facts
come from you, and every draft passes the humanizer before you see it. If
something still sounds off, say "that doesn't sound like me" and it adjusts.

**Can I use it for clients or several accounts?**
Yes. Give each persona (each client, or each identity you run) its own project,
and each of its platforms a folder with its own `voice.md`. Same install.

**I only care about one platform.**
Install just that plugin. They don't depend on each other.

**Do the skills work outside Claude Code?**
They're standard `SKILL.md` files, so any agent that reads that format can use
them. Claude Code is the only one tested.

## Contributing

New hook formulas, slop phrases, platform rules and whole new skills are all
welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Credits

Merged from four MIT-licensed skill packs, then extended:

- [Jakeschincariol/instagram-agent-skill](https://github.com/Jakeschincariol/instagram-agent-skill),
  [linkedin-agent-skill](https://github.com/Jakeschincariol/linkedin-agent-skill) and
  [youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill)
  by Jake Schincariol: the Instagram, LinkedIn and YouTube skills and their
  Python tools, adapted to the workspace layout above.
- [sergebulaev/x-skills](https://github.com/sergebulaev/x-skills),
  [linkedin-skills](https://github.com/sergebulaev/linkedin-skills) and
  [youtube-skills](https://github.com/sergebulaev/youtube-skills) by Sergey
  Bulaev: the X hook formulas, voice rules and heuristics, the story-bank
  interview, hook breakdowns and community posts, rewritten here as draft-only
  skills with no posting service.
- [alirezarezvani/claude-skills x-twitter-growth](https://github.com/alirezarezvani/claude-skills/blob/main/marketing-skill/skills/x-twitter-growth/SKILL.md)
  by Alireza Rezvani: the X profile checklist and cadence by account size.

New here: every `x-*` skill, `li-hook`, `li-interview`, `yt-community`,
`yt-pivot` and the workspace lookup.

## License

[MIT](LICENSE). Built by [Mehul Kundu](https://mehulkundu.com).
