# Contributing

Thanks for wanting to make this better. The most useful contributions are small
and specific: a hook formula that works, a phrase that screams AI, a platform
rule that changed, a skill that's missing.

## Layout

```
.claude-plugin/marketplace.json     lists the four plugins
plugins/<platform>/
  .claude-plugin/plugin.json        name, version, description
  templates/voice.md                the voice file every skill reads
  skills/<skill>/SKILL.md           the skill itself
  skills/<skill>/*.py, *.json       tools it runs and the data they read
```

Each plugin is self-contained, so a plugin's skills never reach into another
plugin's folder. That's why `humanize.py`, `detect.py` and `slop.json` exist in
the Instagram, LinkedIn and X plugins separately. They've been tuned per
platform, so change the copy (or copies) you mean to.

## Ground rules

- **Draft-only.** No skill posts, logs in, or calls a platform API. The user
  copies the draft. This keeps everyone's accounts safe and is not up for
  debate.
- **Generic.** Nothing about one person, brand or niche goes in a skill. That
  belongs in the user's `voice.md`.
- **Never invent facts.** Skills ask, or leave a `{{fact}}` gap.
- **No dependencies.** Python tools use the standard library only and run with
  plain `python3`.
- **Write like a person.** Run your SKILL.md and README changes through
  `detect.py`. No em dashes.

## Adding a skill

1. Copy the closest existing skill folder and rename it `<prefix>-<name>`
   (`x-`, `li-`, `ig-`, `yt-`).
2. Set `name` and `description` in the frontmatter. The description decides
   when Claude picks the skill, so list the phrases a user would actually say.
3. Keep the "Where files live" section so the skill finds the user's voice file.
4. Add it to the platform's table in `README.md`.

## Testing locally

Point Claude Code at your checkout instead of GitHub:

```bash
claude plugin marketplace add ./path/to/social-skills
claude plugin install x@social-skills
claude plugin validate ./path/to/social-skills
```

Then run the skill on a real idea and check the draft reads like a person.
For tool changes, run the script on a sample file and paste the before and
after output in your PR.

## Pull requests

One change per PR, with a line on why. If a platform rule changed, link the
source. Bug reports and ideas go in [issues](https://github.com/mehulkundu/social-skills/issues).
