import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
  <AudioPlayer
    autoPlay={false} // Set false to avoid autoplay issues
    src="/song.mp3" // File should be in the `public` folder
    onPlay={() => console.log("Audio is playing")}
  />
);

export default Player;
