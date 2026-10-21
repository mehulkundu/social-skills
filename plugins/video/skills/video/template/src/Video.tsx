import {useEffect, useState} from 'react';
import {
  AbsoluteFill, Sequence, cancelRender, continueRender, delayRender, getInputProps, staticFile, useCurrentFrame, useVideoConfig,
  type CalculateMetadataFunction,
} from 'remotion';
import brandFile from '../brand.json';
import {Clip, SCENES, ease, rich} from './scenes';

export const FORMATS = {
  square: {width: 1080, height: 1080},
  reel: {width: 1080, height: 1920},
  short: {width: 1080, height: 1920},
  wide: {width: 1920, height: 1080},
};

// Where everything sits in each shape. Cards are laid out small and zoomed up, so they
// stay legible at phone size. Reels and Shorts keep everything between y=230 and y=1440
// and clear of the right 230px: the app's caption, buttons and audio strip cover the rest.
// Wide puts captions on the left and the card on the right, or the card in the middle
// when there are no captions.
const LAYOUT: Record<string, any> = {
  square: {
    box: {left: 64, top: 150, width: 952, height: 720, zoom: 1.45},
    title: {left: 64, top: 46, fontSize: 54}, tag: {right: 64, top: 70}, footer: {left: 64, bottom: 44},
    bubble: {left: 64, top: 640, size: 260},
  },
  tall: {
    box: {left: 72, top: 560, width: 778, height: 830, zoom: 1.3},
    title: {left: 72, top: 246, fontSize: 42}, tag: {right: 230, top: 262}, footer: {left: 72, top: 1404, width: 778, fontSize: 22},
    cap: {left: 72, top: 330, width: 778, fontSize: 70},
    bubble: {left: 72, top: 1100, size: 320},
    unsafe: [[0, 0, 1080, 230], [0, 1440, 1080, 480], [850, 230, 230, 1210]],
  },
  wide: {
    box: {left: 940, top: 170, width: 884, height: 740, zoom: 1.25},
    title: {left: 96, top: 64, fontSize: 52}, tag: {right: 96, top: 88}, footer: {left: 96, bottom: 64},
    cap: {left: 96, top: 300, width: 760, fontSize: 80},
    bubble: {left: 96, top: 640, size: 300},
  },
};

// beats.py --json rows carry dur rather than end, so they can be pasted in as they are
const endOf = (x: any) => x.end ?? x.start + x.dur;
// an item with "only": "short" (or a list) appears in that format and no other
const only = (xs: any[] = [], fmt: string) => xs.filter((x) => !x.only || [x.only].flat().includes(fmt));

// --props replaces props.json instead of being merged over it, so nothing from the
// video open in the Studio leaks into a different one.
export const current = (saved: any) => {
  const input = getInputProps();
  return Object.keys(input).length ? input : saved;
};

export const meta: CalculateMetadataFunction<any> = ({props, compositionId}) => {
  const p = current(props), fmt = compositionId.toLowerCase(), fps = p.fps ?? 30;
  const end = p.duration ?? Math.max(1, ...[...only(p.scenes, fmt), ...only(p.beats, fmt)].map(endOf));
  return {props: p, fps, durationInFrames: Math.round(end * fps)};
};

const useFonts = (fonts: any[]) => {
  const [handle] = useState(() => delayRender('Loading brand fonts'));
  const key = JSON.stringify(fonts);
  useEffect(() => {
    Promise.all(
      fonts.map((f) =>
        new FontFace(f.family, `url(${staticFile(f.file)})`, {style: f.style ?? 'normal', weight: f.weight ?? '400'})
          .load()
          .then((face) => document.fonts.add(face)),
      ),
    ).then(() => continueRender(handle), cancelRender);
  }, [key]);
};

const Scene = ({s, lay, box, last}: {s: any; lay: any; box: any; last: boolean}) => {
  const {fps} = useVideoConfig();
  const t = useCurrentFrame() / fps, len = endOf(s) - s.start, d = s.data ?? {};
  // anything that starts at 0 is fully on screen at frame 1
  const fin = s.start <= 0 ? 1 : ease(t / 0.25);
  const fout = last ? 1 : 1 - ease((t - (len - 0.2)) / 0.2);
  const look = {opacity: Math.min(fin, fout), transform: `translateY(${(1 - fin) * 18}px)`};
  const L = t / Math.max(0.1, Math.min(1, (len - 0.3) / 1.9));
  if (s.type === 'clip' && d.layout !== 'framed') return <Clip d={d} start={s.start} bubble={lay.bubble} look={d.layout === 'bubble' ? look : {}} />;
  const Body = SCENES[s.type];
  if (!Body) throw new Error(`Unknown scene type "${s.type}". This studio has: ${Object.keys(SCENES).join(', ')}`);
  const z = box.zoom;
  return (
    <div style={{position: 'absolute', zoom: z, left: box.left / z, top: box.top / z, width: box.width / z, height: box.height / z, ...look}}>
      <Body d={d} L={L} start={s.start} />
    </div>
  );
};

// Burned-in captions from beats: the hook is whole at frame 1, later lines come in word by word.
const Captions = ({beats, t, style}: {beats: any[]; t: number; style: object}) => {
  const i = beats.findIndex((b, j) => t >= b.start && (t < endOf(b) || j === beats.length - 1));
  if (i < 0) return null;
  const b = beats[i], words = b.text.split(' ');
  const span = i === 0 ? 0 : Math.min((endOf(b) - b.start) * 0.55, words.length * 0.16);
  return (
    <div className="cap" style={style}>
      {words.map((w: string, j: number) => (
        <span key={j} style={{opacity: i === 0 ? 1 : ease((t - b.start - (j * span) / words.length) / 0.12)}}>{w} </span>
      ))}
    </div>
  );
};

export const Video = (p: any) => {
  const frame = useCurrentFrame();
  const {fps, width, height, id, durationInFrames} = useVideoConfig();
  const fmt = id.toLowerCase(), t = frame / fps, total = durationInFrames / fps;
  const kind = width === height ? 'square' : height > width ? 'tall' : 'wide', lay = LAYOUT[kind];
  const brand = {
    ...brandFile, ...p.brand,
    colors: {...brandFile.colors, ...p.brand?.colors},
    type: {...brandFile.type, ...p.brand?.type},
  };
  useFonts(brand.fonts);
  const scenes = only(p.scenes, fmt), beats = only(p.beats, fmt), c = p.chrome ?? {};
  const box = kind === 'wide' && !beats.length ? {...lay.box, left: (width - lay.box.width) / 2} : lay.box;
  const vars = {
    ...Object.fromEntries(Object.entries(brand.colors).map(([k, v]) => [`--${k}`, v])),
    '--display': `'${brand.type.display}', serif`,
    '--body': `'${brand.type.body}', Georgia, serif`,
    '--mono': `'${brand.type.mono}', monospace`,
    '--radius': `${brand.radius ?? 24}px`,
  };
  return (
    <AbsoluteFill style={{...vars, background: brand.background, color: 'var(--ink)', fontFamily: 'var(--body)'}}>
      <style>{CSS}</style>
      {scenes.map((s, i) => {
        const from = Math.round(s.start * fps);
        return (
          <Sequence key={i} from={from} durationInFrames={Math.max(1, Math.round(endOf(s) * fps) - from)} name={`${s.type} ${s.start}s`}>
            <Scene s={s} lay={lay} box={box} last={endOf(s) >= total - 1 / fps} />
          </Sequence>
        );
      })}
      {c.title && <div className="brand" style={lay.title}>{rich(c.title)}</div>}
      {c.tag && <div className="tag" style={lay.tag}>{c.tag}</div>}
      {c.footer && <div className="bottom" style={lay.footer}>{c.footer}</div>}
      {kind === 'square' && c.strip && (
        // square only: cell i lights while scene i plays
        <div className="days" style={{left: 64, right: 64, top: 900}}>
          {c.strip.map((label: string, i: number) => {
            const s = scenes[i], on = s && t >= s.start && t < endOf(s), done = s && t >= endOf(s) && t < total - 0.4;
            return <div key={i} className={on ? 'day on' : done ? 'day done' : 'day'}>{label}</div>;
          })}
        </div>
      )}
      {lay.cap && <Captions beats={beats} t={t} style={lay.cap} />}
      {p.guides && lay.unsafe?.map(([left, top, w, h]: number[], i: number) => (
        <div key={i} style={{position: 'absolute', left, top, width: w, height: h, background: 'rgba(255,0,0,.18)'}} />
      ))}
    </AbsoluteFill>
  );
};

// Ported from the launch-video page. Colours and fonts come from brand.json as CSS variables.
const CSS = `
* { box-sizing: border-box; margin: 0; }
.mono { font-family: var(--mono); } .muted { color: var(--muted); } .sm { font-size: 20px; }
.good { color: var(--good); } .bad { color: var(--bad); } .mid { color: var(--muted); }
.brand { position: absolute; font-family: var(--display); letter-spacing: -0.5px; white-space: nowrap; }
.brand em { color: var(--accent); font-style: normal; }
.tag { position: absolute; font-family: var(--mono); font-size: 20px; color: var(--muted); }
.bottom { position: absolute; font-family: var(--mono); font-size: 24px; color: var(--muted); }
.card { position: relative; height: 100%; overflow: hidden; background: var(--card); border: 2px solid var(--line); border-radius: var(--radius);
  box-shadow: 0 30px 60px -30px color-mix(in oklch, var(--ink) 25%, transparent); padding: 38px 42px; }
.label { font-family: var(--mono); font-size: 20px; letter-spacing: .5px; color: var(--muted); display: flex; gap: 12px; align-items: center; margin-bottom: 26px; }
.label .cmd { color: var(--ink); font-weight: 600; }
.dot { width: 11px; height: 11px; border-radius: 50%; background: var(--accent); flex: none; }
.foot { position: absolute; left: 42px; bottom: 30px; font-family: var(--mono); font-size: 20px; color: var(--accent); }
.cline { font-size: 27px; line-height: 1.35; margin-top: 14px; } .cline em { color: var(--accent); font-style: normal; }
.rows { margin-top: 10px; }
.row { display: grid; grid-template-columns: 140px 1fr auto; align-items: baseline; gap: 14px; padding: 13px 0; border-bottom: 1.5px dashed var(--line); }
.big { font-family: var(--mono); font-size: 32px; font-weight: 500; letter-spacing: -1px; }
.name { font-size: 27px; }
.plan { margin-top: 12px; font-size: 20px; display: flex; flex-direction: column; gap: 5px; }
.prow { display: grid; grid-template-columns: 54px 88px 62px 1fr; gap: 6px; padding: 8px 12px; white-space: nowrap; border-radius: 10px; background: var(--soft); }
.prow.dim { background: transparent; color: var(--muted); } .prow b { font-weight: 600; }
.hook { margin-bottom: 14px; } .hrow { display: flex; align-items: baseline; gap: 12px; }
.pill { font-family: var(--mono); font-size: 16px; font-weight: 600; padding: 3px 10px; border-radius: 6px; position: relative; top: -4px;
  background: color-mix(in oklch, currentColor 12%, transparent); }
.pill.ship { color: var(--accent); }
.htext { font-size: 21px; margin: 2px 0 8px; }
.track { height: 12px; border-radius: 6px; background: var(--track); overflow: hidden; } .track.big { height: 20px; border-radius: 10px; }
.fill { height: 100%; border-radius: inherit; background: var(--good); } .fill.bad { background: var(--bad); } .fill.mid { background: var(--muted); }
.ready { border: 2px solid var(--line); border-radius: 16px; padding: 16px 22px; margin-bottom: 14px; }
.rt { font-family: var(--mono); font-size: 21px; font-weight: 700; letter-spacing: 1px; color: var(--good); margin-bottom: 10px; }
.kv { display: grid; grid-template-columns: 110px 1fr; gap: 6px 14px; font-family: var(--mono); font-size: 20px; }
.kv span { color: var(--muted); } .kv b { font-weight: 500; }
.fixline { font-size: 31px; line-height: 1.4; margin-top: 16px; } .fixline.now { border-left: 5px solid var(--good); padding-left: 16px; }
.s { position: relative; }
.s .line { position: absolute; left: -4px; right: -4px; top: 54%; height: 4px; background: var(--bad); border-radius: 2px; transform-origin: left center; }
.meter { position: absolute; left: 42px; right: 42px; bottom: 38px; }
.mrow { display: flex; justify-content: space-between; align-items: baseline; }
.num { font-family: var(--mono); font-size: 70px; font-weight: 500; letter-spacing: -2px; }
.verdict { font-size: 22px; padding: 4px 12px; border-radius: 7px; margin-left: 14px; top: -12px; }
.title { font-family: var(--display); font-size: 52px; line-height: 1.1; margin: 6px 0 22px; }
.num2 { font-family: var(--mono); font-size: 62px; font-weight: 500; letter-spacing: -2px; }
.check { font-family: var(--mono); font-size: 22px; margin-top: 12px; } .check b { margin-right: 12px; }
.rub { margin-bottom: 24px; } .rub .mrow { font-family: var(--mono); font-size: 22px; margin-bottom: 9px; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { font-family: var(--mono); font-size: 15px; padding: 5px 8px; border: 1.5px solid var(--line); border-radius: 8px; background: var(--soft); }
.bigtype { font-family: var(--display); font-size: 112px; line-height: .95; letter-spacing: -2px; } .bigtype em { color: var(--accent); }
.tile { border: 2px solid var(--line); border-radius: 14px; background: var(--card); padding: 14px; }
.bar { height: 12px; border-radius: 6px; background: var(--track); margin-top: 10px; }
.days7 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 26px; }
.bubble { max-width: 70%; border-radius: 18px; padding: 16px 18px; margin-top: 16px; }
.bubble.them { background: var(--soft); }
.bubble.me { background: color-mix(in oklch, var(--ink) 92%, transparent); margin-left: auto; }
.bubble.me .bar { background: color-mix(in oklch, var(--bg) 25%, transparent); }
.endwrap { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 34px; text-align: center; }
.endline { font-family: var(--display); font-size: 64px; line-height: 1.06; }
.postbtn { font-family: var(--mono); font-size: 30px; font-weight: 600; padding: 18px 56px; border-radius: 999px; background: var(--ink); color: var(--bg); }
.cursor { position: absolute; width: 44px; height: 44px; }
.days { position: absolute; display: flex; gap: 10px; }
.day { flex: 1; font-family: var(--mono); font-size: 24px; text-align: center; padding: 10px 0; border-radius: 10px; border: 1.5px solid var(--line); color: var(--muted); }
.day.done { color: var(--ink); } .day.on { background: var(--ink); color: var(--bg); border-color: var(--ink); }
.cap { position: absolute; font-family: var(--display); line-height: 1.06; letter-spacing: -0.5px; }
.screen { position: absolute; left: 42px; right: 42px; bottom: 38px; border-radius: 12px; overflow: hidden; background: var(--soft); }
.face { position: absolute; border-radius: 50%; overflow: hidden; border: 6px solid var(--card);
  box-shadow: 0 30px 60px -30px color-mix(in oklch, var(--ink) 45%, transparent); }
`;
