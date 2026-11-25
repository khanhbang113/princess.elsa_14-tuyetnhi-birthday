import { useState, useEffect, useRef } from 'react';
import { hubData, siteConfig } from '../data/birthdayData';

// ── Typing Effect Hook ───────────────────────────────────────
function useTypingEffect(lines, { typingSpeed = 45, lineDelay = 600 } = {}) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setDisplayedLines([]);
    setDone(false);

    async function run() {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const line = lines[i];
        // Type character by character
        for (let j = 1; j <= line.length; j++) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, typingSpeed));
          setDisplayedLines((prev) => {
            const next = [...prev];
            next[i] = line.slice(0, j);
            return next;
          });
        }
        // Pause before next line
        if (i < lines.length - 1) {
          await new Promise((r) => setTimeout(r, lineDelay));
        }
      }
      if (!cancelled) setDone(true);
    }
    run();
    return () => { cancelled = true; };
  }, []);   // run once on mount

  return { displayedLines, cursorVisible, done };
}

// ── Room Card ────────────────────────────────────────────────
function RoomCard({ room, onNavigate }) {
  const isSecondary = room.colorAccent === 'secondary';
  return (
    <div
      className={[
        'group relative flex flex-col justify-between rounded-xl bg-surface-container-low overflow-hidden shadow-lg transition-all duration-300 cursor-pointer border border-white/5',
        isSecondary
          ? 'hover:shadow-[0_12px_40px_-8px_rgba(123,208,255,0.3)] hover:border-secondary/20'
          : 'hover:shadow-[0_12px_40px_-8px_rgba(221,183,255,0.3)] hover:border-tertiary/20',
      ].join(' ')}
      onClick={() => onNavigate(room.id)}
    >
      {/* Visual Header — tỉ lệ 4:3 */}
      <div className="relative w-full overflow-hidden bg-surface-container-lowest" style={{ aspectRatio: '4/3' }}>
        {/* Cosmic gradient fallback */}
        <div
          className={[
            'absolute inset-0',
            isSecondary
              ? 'bg-[radial-gradient(ellipse_at_30%_40%,rgba(123,208,255,0.25),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(192,193,255,0.15),transparent_50%)]'
              : 'bg-[radial-gradient(ellipse_at_30%_40%,rgba(183,109,255,0.25),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(192,193,255,0.15),transparent_50%)]',
          ].join(' ')}
        />
        {/* Ảnh banner thật — 4:3, hiển thị toàn bộ không cắt */}
        {room.bannerImage && (
          <img
            src={room.bannerImage}
            alt={room.title}
            className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.opacity = '0'; }}
          />
        )}
        {/* Scanline overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)' }}
        />
        {/* Corner HUD */}
        <div className="absolute top-2 right-3 font-code-terminal text-[9px] text-outline-variant/60 select-none">[{room.index}::ACTIVE]</div>
        <div className="absolute bottom-2 right-3 font-code-terminal text-[9px] text-outline-variant/50 select-none">SYS_READY</div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 via-transparent to-transparent pointer-events-none" />
        {/* Badge */}
        <div className={[
          'absolute top-space-md left-space-md flex items-center gap-space-xs bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-xs rounded-lg',
          isSecondary ? 'text-secondary' : 'text-tertiary',
        ].join(' ')}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isSecondary ? 'bg-secondary' : 'bg-tertiary'}`} />
          <span className="font-label-caps text-label-caps">{room.tag}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
        <div className="flex flex-col gap-space-sm">
          <h3 className={[
            'font-headline-md text-headline-md font-bold text-on-surface uppercase transition-colors',
            isSecondary ? 'group-hover:text-secondary' : 'group-hover:text-tertiary',
          ].join(' ')}>
            {room.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant italic">
            {room.subtitle}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-md mt-space-sm flex items-center justify-between bg-surface-container-lowest/60 p-space-md rounded-lg">
          <div className={[
            'flex items-center gap-space-xs font-label-caps text-label-caps',
            isSecondary ? 'text-secondary' : 'text-secondary-container',
          ].join(' ')}>
            <span className={[
              'w-2 h-2 rounded-full animate-pulse',
              isSecondary ? 'bg-secondary' : 'bg-secondary-container',
            ].join(' ')} />
            <span>{room.statusLabel}</span>
          </div>
          <span className={[
            'inline-flex items-center gap-space-xs font-label-caps text-label-caps transition-colors',
            isSecondary ? 'text-primary group-hover:text-secondary' : 'text-tertiary group-hover:text-primary',
          ].join(' ')}>
            <span>{room.enterLabel}</span>
            <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-code-terminal text-code-terminal">
              {room.actionLabel}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Hub Page ─────────────────────────────────────────────────
export default function HubPage({ onNavigate }) {
  const { displayedLines, done } = useTypingEffect(hubData.terminalLines, {
    typingSpeed: 40,
    lineDelay: 500,
  });

  const handleStartJourney = () => {
    document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">

      {/* 1. Hero Banner — tỉ lệ 16:9, object-contain, không cắt */}
      <section className="relative w-full rounded-2xl overflow-hidden bg-surface-container-lowest shadow-2xl group border border-white/5">
        {/* Giữ tỉ lệ 16:9 */}
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          {/* Fallback cosmic nebula */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(ellipse_at_80%_30%,rgba(168,85,247,0.25),transparent_50%),radial-gradient(ellipse_at_60%_80%,rgba(56,189,248,0.2),transparent_45%)]" />
          {/* Scanline terminal overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)' }}
          />
          {/* Ảnh hero — 16:9, object-contain, không cắt */}
          <img
            src={hubData.heroBannerImage}
            alt={hubData.heroBannerAlt}
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.03]"
            onError={(e) => { e.currentTarget.style.opacity = '0'; }}
          />
          {/* Gradient phủ dưới để text đọc được */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(128,131,255,0.15),transparent_60%)] pointer-events-none" />
          {/* Corner HUD brackets */}
          <div className="absolute top-3 left-4 font-code-terminal text-[9px] md:text-[10px] text-outline-variant/50 select-none pointer-events-none">┌ SOL-3 // ĐỊA CẦU</div>
          <div className="absolute top-3 right-4 font-code-terminal text-[9px] md:text-[10px] text-outline-variant/50 select-none pointer-events-none">QUỸ ĐẠO-NĂM-25 ┐</div>
          <div className="absolute bottom-3 left-4 font-code-terminal text-[9px] md:text-[10px] text-outline-variant/50 select-none pointer-events-none">└ KẾT_NỐI_ĐÃ_XÁC_NHẬN</div>
          <div className="absolute bottom-3 right-4 font-code-terminal text-[9px] md:text-[10px] text-secondary/40 select-none pointer-events-none animate-pulse">● TRỰC_TIẾP ┘</div>
          {/* Content overlay — phía dưới */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-space-xl flex flex-col gap-1 md:gap-space-sm">
            <h1 className="text-[clamp(1.4rem,5vw,56px)] font-bold tracking-tight text-on-surface uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] leading-tight">
              HAPPY BIRTHDAY:{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Terminal Box */}
      <section className="relative w-full rounded-xl bg-surface-container-low/90 backdrop-blur-md shadow-[0_8px_32px_-4px_rgba(99,102,241,0.25)] overflow-hidden">
        {/* macOS-style header */}
        <div className="flex items-center justify-between px-space-md py-space-sm bg-surface-container-highest/90">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-error opacity-90 hover:opacity-100 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-tertiary opacity-90 hover:opacity-100 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-secondary opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-code-terminal text-label-sm text-outline-variant">
            cosmic-terminal.sh — bash
          </span>
          <div />
        </div>

        {/* Terminal body */}
        <div className="p-space-lg md:p-space-xl flex flex-col gap-space-md font-code-terminal text-code-terminal text-on-surface">
          {/* Typing lines */}
          <div className="flex flex-col gap-space-xs">
            {displayedLines.map((line, i) => {
              const isCurrentLine = i === displayedLines.length - 1 && !done;
              const isCompletedLine = i < displayedLines.length - 1 || done;
              const isLastLine = i === hubData.terminalLines.length - 1; // last line = prompt
              return (
                <div key={i} className="flex items-start gap-space-sm">
                  <span className={`shrink-0 font-code-terminal text-label-sm select-none ${isCurrentLine ? 'text-primary' : 'text-secondary/60'}`}>
                    {isLastLine ? '>_' : '>'}
                  </span>
                  <span className={`${isCurrentLine ? 'text-on-surface' : isLastLine && done ? 'text-secondary' : 'text-on-surface-variant'}`}>
                    {line}
                  </span>
                  {isCurrentLine && (
                    <span className="typing-cursor shrink-0" />
                  )}
                  {isCompletedLine && !isLastLine && (
                    <span className="text-green-400/80 font-bold ml-auto text-[11px] shrink-0">[OK]</span>
                  )}
                </div>
              );
            })}
          </div>


          {/* Poetry quote */}
          <div className="my-space-sm p-space-md rounded-lg bg-surface-container-lowest/80 shadow-inner">
            <p className="font-headline-sm text-headline-sm italic text-tertiary-fixed-dim drop-shadow-[0_0_12px_rgba(221,183,255,0.4)]">
              {hubData.poetryQuote}
            </p>
            <div className="flex items-center justify-between mt-space-sm pt-space-xs text-outline font-label-sm text-label-sm">
              <span>{hubData.poetryFooter}</span>
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md pt-space-md mt-space-sm">
            <div className="flex items-center gap-space-sm font-label-caps text-label-caps text-secondary">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-container" />
              </span>
              <span>● TÍN HIỆU ĐÃ KẾT NỐI</span>
            </div>
            <button
              onClick={handleStartJourney}
              className="inline-flex items-center gap-space-sm px-space-xl py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-wider shadow-[0_0_20px_rgba(128,131,255,0.4)] hover:shadow-[0_0_28px_rgba(128,131,255,0.7)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>BẮT ĐẦU HÀNH TRÌNH</span>
              <span className="material-symbols-outlined text-[18px]">south</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Room Selection */}
      <section className="flex flex-col gap-space-lg pt-space-md" id="sectors">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div className="flex flex-col gap-space-xs">
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight uppercase">
              CHỌN MỘT CĂN PHÒNG
            </h2>
          </div>
          <p className="font-code-terminal text-code-terminal text-on-surface-variant">
            Chọn một căn phòng bên dưới để bắt đầu khám phá
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {hubData.rooms.map((room) => (
            <RoomCard key={room.id} room={room} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </div>
  );
}
