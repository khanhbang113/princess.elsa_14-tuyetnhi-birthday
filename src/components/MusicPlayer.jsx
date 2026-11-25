import { useRef, useState, useEffect } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const audioSrc = './music/bg-music.mp3';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.5;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.warn('Playback prevented:', err);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="auto" />

      <aside className="fixed bottom-6 right-6 z-50 group flex items-center gap-space-sm">
        <div className="hidden group-hover:flex items-center px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface font-label-caps text-label-caps shadow-[0_0_12px_rgba(0,166,224,0.3)] backdrop-blur-md whitespace-nowrap select-none">
          {playing ? '♫ NHẠC NỀN: BẬT' : '♫ NHẠC NỀN: TẮT'}
        </div>
        <button
          onClick={toggle}
          title={playing ? "Tắt nhạc" : "Bật nhạc nền"}
          aria-label="Bật / Tắt nhạc nền"
          className={[
            'w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:scale-110 active:scale-95',
            playing
              ? 'bg-primary text-surface shadow-[0_0_24px_rgba(192,193,255,0.7)] animate-pulse'
              : 'bg-surface-container-highest/90 text-secondary border border-secondary/30 hover:border-secondary hover:text-primary shadow-[0_4px_16px_rgba(0,0,0,0.5)]',
          ].join(' ')}
        >
          <span className="material-symbols-outlined text-[22px] select-none">
            {playing ? 'graphic_eq' : 'music_note'}
          </span>
        </button>
      </aside>
    </>
  );
}
