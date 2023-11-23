import { useState, useRef } from 'react';

export const Audio = ({ src, name }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="h-20 hide1234" id="bottonexyz"  onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h4 className="text-red-500 h-6">{name}</h4>
      <audio ref={audioRef}>
        <source src={src} type="audio/mp3" />
      </audio>
    </div>
  );
};
{/* <audio controls>
  <source src="musica.mp3" type="audio/mp3">
  <source src="musica2.ogg" type="audio/ogg">
Il browser non supporta il tag audio
</audio> */}