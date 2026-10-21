import {Fragment, type ReactNode} from 'react';
import {AbsoluteFill, OffthreadVideo, staticFile, useVideoConfig} from 'remotion';

// Every scene type props.json can name. Each one gets its `data` as d, and L: the
// scene's own clock in seconds, sped up for short scenes so every reveal lands
// before the cut. Add your own templates here the same way.

const clamp = (x: number) => Math.max(0, Math.min(1, x));
export const ease = (x: number) => 1 - Math.pow(1 - clamp(x), 3);
// fade and rise in, starting `at` seconds into the scene
const fx = (L: number, at: number) => {
  const p = ease((L - at) / 0.35);
  return {opacity: p, transform: `translateY(${(1 - p) * 12}px)`};
};
const tween = (L: number, at: number, dur: number, a: number, b: number) => a + (b - a) * ease((L - at) / dur);
// "@handle_name" -> "@ha•••". Other people's handles never go on screen whole.
const mask = (h = '') => h.replace(/^(@?[^@]{2}).*$/, '$1•••');
// "*word*" is the accent colour, "\n" a line break
export const rich = (s = '') =>
  s.split('\n').map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line.split('*').map((part, j) => (j % 2 ? <em key={j}>{part}</em> : part))}
    </Fragment>
  ));
const tone = (verdict = '') => (/STRONG|PASS/.test(verdict) ? 'good' : /WEAK|FLAG/.test(verdict) ? 'bad' : 'mid');
const bars = (n: number) => Array.from({length: n}, (_, i) => <div key={i} className="bar" style={{width: `${92 - i * 17}%`}} />);

const Card = ({d, L, foot = 1.2, children}: {d: any; L: number; foot?: number; children?: ReactNode}) => (
  <div className="card">
    {(d.cmd || d.what) && (
      <div className="label">
        <span className="dot" />
        <span className="cmd">{d.cmd}</span>
        {d.what && <span>· {d.what}</span>}
      </div>
    )}
    {d.sub && <div className="mono muted sm" style={fx(L, 0.1)}>{d.sub}</div>}
    {children}
    {d.foot && <div className="foot" style={fx(L, foot)}>{d.foot}</div>}
  </div>
);

const Footage = ({d, start, fit}: {d: any; start: number; fit: string}) => {
  const {fps} = useVideoConfig();
  return (
    <OffthreadVideo
      src={/^https?:\/\//.test(d.src) ? d.src : staticFile(d.src)}
      // by default the clip runs in step with the timeline, so one long recording
      // cut into several scenes stays in sync with its own audio
      trimBefore={Math.round((d.from ?? start) * fps)}
      muted={d.muted}
      volume={d.volume}
      style={{width: '100%', height: '100%', objectFit: d.fit ?? fit}}
    />
  );
};

// Footage that isn't in a card: "full" fills the frame, "bubble" is a face cam circle.
export const Clip = ({d, start, bubble, look}: {d: any; start: number; bubble: any; look: object}) => {
  if (d.layout !== 'bubble')
    return (
      <AbsoluteFill>
        <Footage d={d} start={start} fit="cover" />
      </AbsoluteFill>
    );
  const {left, top, size} = bubble;
  return (
    <div className="face" style={{left, top, width: size, height: size, ...look}}>
      <Footage d={d} start={start} fit="cover" />
    </div>
  );
};

type P = {d: any; L: number; start: number};

export const SCENES: Record<string, (p: P) => ReactNode> = {
  // a command label and a few lines of real output
  card: ({d, L}) => (
    <Card d={d} L={L} foot={0.5 + (d.lines?.length ?? 0) * 0.25}>
      {(d.lines ?? []).map((l: string, i: number) => (
        <div key={i} className="cline" style={fx(L, 0.3 + i * 0.25)}>{rich(l)}</div>
      ))}
    </Card>
  ),

  // ranked rows: {value: "725.9x", name, handle}
  rows: ({d, L}) => (
    <Card d={d} L={L} foot={0.7 + d.rows.length * 0.2}>
      <div className="rows">
        {d.rows.map((r: any, i: number) => (
          <div key={i} className="row" style={fx(L, 0.35 + i * 0.2)}>
            <span className="big">{r.value}</span>
            <span className="name">{r.name}</span>
            <span className="mono muted sm">{mask(r.handle)}</span>
          </div>
        ))}
      </div>
    </Card>
  ),

  // week plan: {day, time, kind, what}; a day with no kind is drawn dim
  week: ({d, L}) => (
    <Card d={d} L={L}>
      <div className="plan mono">
        {d.days.map((r: any, i: number) => (
          <div key={i} className={r.kind ? 'prow' : 'prow dim'} style={fx(L, 0.25 + i * 0.13)}>
            <b>{r.day}</b>
            <span>{r.time}</span>
            <span>{r.kind}</span>
            <span>{r.what}</span>
          </div>
        ))}
      </div>
    </Card>
  ),

  // hookscore.py --json rows as they are ({hook, score, verdict}), plus an optional tag
  hooks: ({d, L}) => (
    <Card d={d} L={L} foot={0.65 + d.hooks.length * 0.25}>
      {d.hooks.map((h: any, i: number) => {
        const at = 0.15 + i * 0.25, v = tween(L, at, 0.8, 0, h.score), c = tone(h.verdict);
        return (
          <div key={i} className="hook" style={fx(L, at)}>
            <div className="hrow">
              <span className="big">{v.toFixed(1)}</span>
              <span className={`pill ${c}`}>{h.verdict}</span>
              {h.tag && <span className="pill ship">{h.tag}</span>}
            </div>
            <div className="htext">{h.text ?? h.hook}</div>
            <div className="track"><div className={`fill ${c}`} style={{width: `${v}%`}} /></div>
          </div>
        );
      })}
    </Card>
  ),

  // THREAD READY / POST READY / REEL READY blocks: {title, fields: {label: value}}
  ready: ({d, L}) => (
    <Card d={d} L={L}>
      {d.cards.map((c: any, i: number) => (
        <div key={i} className="ready" style={fx(L, 0.15 + i * 0.5)}>
          <div className="rt">{c.title}</div>
          <div className="kv">
            {Object.entries(c.fields).map(([k, v]) => (
              <Fragment key={k}><span>{k}</span><b>{String(v)}</b></Fragment>
            ))}
          </div>
        </div>
      ))}
    </Card>
  ),

  // humanizer: the old line struck, the rewrite, the score counting from -> to. It reads
  // REVIEW below the pass mark, then the run's own verdict (PASS unless told otherwise).
  human: ({d, L}) => {
    const v = tween(L, 1.0, 1.0, d.from, d.to), verdict = v < (d.pass ?? 70) ? 'REVIEW' : d.verdict ?? 'PASS', c = verdict === 'PASS' ? 'good' : 'bad';
    return (
      <Card d={d} L={L}>
        <div className="fixline" style={fx(L, 0.2)}>
          <span className="s">{d.before}<i className="line" style={{transform: `scaleX(${ease((L - 0.6) / 0.35)})`}} /></span>
        </div>
        <div className="fixline now" style={fx(L, 1.0)}>{d.after}</div>
        <div className="meter" style={fx(L, 0.2)}>
          <div className="mrow">
            <span className="mono muted sm">HUMAN SCORE</span>
            <span><span className="num">{v.toFixed(1)}</span><span className={`pill verdict ${c}`}>{verdict}</span></span>
          </div>
          <div className="track big" style={{marginTop: 12}}><div className={`fill ${c}`} style={{width: `${v}%`}} /></div>
        </div>
      </Card>
    );
  },

  // title lint: the title, its score, then each check ("text" or {text, ok: false})
  lint: ({d, L}) => (
    <Card d={d} L={L}>
      <div className="title" style={fx(L, 0.15)}>{d.title}</div>
      <div style={fx(L, 0.45)}>
        <span className="num2">{tween(L, 0.45, 0.8, 0, d.score).toFixed(0)}</span>
        <span className="mono muted sm"> / {d.of ?? 100}{d.note ? ` · ${d.note}` : ''}</span>
      </div>
      {d.checks.map((c: any, i: number) => {
        const ok = c.ok ?? true;
        return (
          <div key={i} className="check" style={fx(L, 0.85 + i * 0.2)}>
            <b className={ok ? 'good' : 'bad'}>{ok ? 'ok' : 'no'}</b>{c.text ?? c}
          </div>
        );
      })}
    </Card>
  ),

  // rubric bars: {label, got, max}
  rubric: ({d, L}) => (
    <Card d={d} L={L} foot={0.38 + d.rows.length * 0.18}>
      {d.rows.map((r: any, i: number) => {
        const at = 0.15 + i * 0.18, pct = (r.got / r.max) * 100;
        return (
          <div key={i} className="rub" style={fx(L, at)}>
            <div className="mrow"><span>{r.label}</span><span>{r.got}/{r.max}</span></div>
            <div className="track"><div className={`fill ${pct >= 70 ? 'good' : 'bad'}`} style={{width: `${tween(L, at, 0.6, 0, pct)}%`}} /></div>
          </div>
        );
      })}
    </Card>
  ),

  // a grid of chips, e.g. every skill name
  chips: ({d, L}) => (
    <Card d={d} L={L}>
      <div className="chips">
        {d.chips.map((c: string, i: number) => <span key={i} className="chip" style={fx(L, i * 0.03)}>{c}</span>)}
      </div>
    </Card>
  ),

  // big type, on screen from its first frame
  bigtype: ({d}) => <div className="bigtype" style={{paddingTop: 40, fontSize: d.size}}>{rich(d.text)}</div>,

  // Plain graphics for beats with no real run behind them: grey bars, never made-up output.
  doc: ({d, L}) => (
    <Card d={d} L={L}>
      <div className="tile" style={{...fx(L, 0.3), width: '62%', marginTop: 30}}><div className="mono sm">{d.file}</div>{bars(4)}</div>
      {d.note && <div className="mono muted" style={{...fx(L, 1.2), fontSize: 24, marginTop: 40}}>{d.note}</div>}
    </Card>
  ),
  fanout: ({d, L}) => (
    <Card d={d} L={L}>
      <div className="tile" style={{...fx(L, 0.1), display: 'flex', alignItems: 'center', gap: 18}}>
        <span className="big">{d.count}</span><span className="mono">{d.from}</span>
      </div>
      <div className="days7">
        {d.to.map((x: string, i: number) => <div key={i} className="tile" style={fx(L, 0.5 + i * 0.16)}><div className="mono sm">{x}</div>{bars(2)}</div>)}
      </div>
    </Card>
  ),
  chat: ({d, L}) => (
    <Card d={d} L={L}>
      <div className="bubble them" style={fx(L, 0.1)}>{bars(2)}</div>
      <div className="bubble me" style={fx(L, 0.45)}>{bars(3)}</div>
      {d.note && <div className="mono muted sm" style={{...fx(L, 0.8), marginTop: 22, textAlign: 'right'}}>{d.note}</div>}
    </Card>
  ),

  // the one ask, with a cursor that stops short of the button: the user is the one who posts
  end: ({d, L}) => {
    const p = ease((L - 0.5) / 0.9);
    return (
      <div className="endwrap">
        <div className="endline" style={fx(L, 0.1)}>{rich(d.line)}</div>
        <div style={{...fx(L, 0.45), position: 'relative'}}>
          <div className="postbtn">{d.button ?? 'Post'}</div>
          <svg className="cursor" viewBox="0 0 24 24" style={{left: 'calc(100% - 22px)', top: 22, transform: `translate(${160 * (1 - p)}px,${140 * (1 - p)}px)`}}>
            <path d="M4 2l15 10-7 1.5L8.5 21z" style={{fill: 'var(--card)', stroke: 'var(--ink)'}} strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </div>
        {d.sub && <div className="mono muted sm" style={fx(L, 0.9)}>{d.sub}</div>}
      </div>
    );
  },

  // where to find it: "Link in\nmy bio." plus the url
  link: ({d, L}) => (
    <div className="endwrap">
      <div className="bigtype" style={{...fx(L, 0), fontSize: d.size ?? 96}}>{rich(d.line)}</div>
      {d.url && <div className="mono sm" style={fx(L, 0.3)}>{d.url}</div>}
    </div>
  ),

  // footage inside a card, for screen recordings. Layouts "full" and "bubble" go through Clip.
  clip: ({d, L, start}) => (
    <Card d={d} L={L}>
      <div className="screen" style={{top: d.cmd || d.what ? 92 : 38}}><Footage d={d} start={start} fit="contain" /></div>
    </Card>
  ),
};
