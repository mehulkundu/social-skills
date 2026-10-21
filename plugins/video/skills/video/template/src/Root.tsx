import {Composition} from 'remotion';
import saved from '../props.json';
import {FORMATS, Video, current, meta} from './Video';

// props.json is the video being made. Change it and the open Studio reloads.
// The Studio lists only the formats it asks for.
export const Root = () => {
  const formats = [current(saved).format].flat();
  return (
    <>
      {Object.entries(FORMATS)
        .filter(([f]) => formats.includes(f))
        .map(([f, size]) => (
          <Composition
            key={f}
            id={f[0].toUpperCase() + f.slice(1)}
            component={Video}
            defaultProps={saved}
            calculateMetadata={meta}
            fps={30}
            durationInFrames={30}
            {...size}
          />
        ))}
    </>
  );
};
