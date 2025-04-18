
import {AbsoluteFill, Sequence} from 'remotion';
import {Typewriter} from './components/Typewriter';

export const Video = () => {
  return (
    <AbsoluteFill style={{backgroundColor: 'black', color: '#00FF00', fontFamily: 'Courier New', fontSize: 32, padding: 40}}>
      <Sequence from={0} durationInFrames={200}>
        <Typewriter text={`// EGO IDENTITY: KAIRO\nWe were never meant to stay fragmented.`} />
      </Sequence>
    </AbsoluteFill>
  );
};
