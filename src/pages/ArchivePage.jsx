import { archiveData } from '../data/birthdayData';

const ACCENT_CLASSES = {
  primary: {
    node: 'shadow-[0_0_12px_rgba(192,193,255,0.8)]',
    dot: 'bg-primary',
    file: 'text-secondary',
    verified: 'text-primary',
    badge: 'bg-primary text-on-primary',
  },
  secondary: {
    node: 'shadow-[0_0_12px_rgba(123,208,255,0.8)]',
    dot: 'bg-secondary',
    file: 'text-secondary',
    verified: 'text-secondary',
    badge: 'bg-secondary-container text-on-secondary-container',
  },
  tertiary: {
    node: 'shadow-[0_0_12px_rgba(221,183,255,0.8)]',
    dot: 'bg-tertiary',
    file: 'text-tertiary',
    verified: 'text-tertiary',
    badge: 'bg-tertiary-container text-on-tertiary-container',
  },
};

function MemoryCard({ memory }) {
  const acc = ACCENT_CLASSES[memory.accentColor] || ACCENT_CLASSES.primary;

  return (
    <article className="relative pl-12 md:pl-20 group">
      {/* Timeline node */}
      <div className={`absolute left-2.5 md:left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-surface-container-lowest flex items-center justify-center ${acc.node}`}>
        <div className={`w-2 h-2 rounded-full ${acc.dot} animate-ping`} />
        <div className={`w-2 h-2 rounded-full ${acc.dot} absolute`} />
      </div>

      {/* Card — layout ngang: ảnh trái, nội dung phải */}
      <div className="rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-xl overflow-hidden flex flex-col lg:flex-row">

        {/* Ảnh — tỉ lệ 3:4, object-contain, không cắt, không mờ bên phải */}
        <div className="lg:w-[38%] relative overflow-hidden bg-surface-container-highest flex-shrink-0">
          <div className="relative w-full" style={{ aspectRatio: '3/4', maxHeight: '60vw' }}>
            {/* Nebula gradient fallback */}
            <div
              className={[
                'absolute inset-0',
                memory.accentColor === 'primary'
                  ? 'bg-[radial-gradient(ellipse_at_30%_40%,rgba(192,193,255,0.3),transparent_60%)]'
                  : memory.accentColor === 'secondary'
                  ? 'bg-[radial-gradient(ellipse_at_30%_40%,rgba(123,208,255,0.3),transparent_60%)]'
                  : 'bg-[radial-gradient(ellipse_at_30%_40%,rgba(221,183,255,0.3),transparent_60%)]',
              ].join(' ')}
            />
            {/* Ảnh thật — object-contain, không mờ */}
            <img
              src={memory.image}
              alt={memory.imageAlt}
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              onError={(e) => { e.currentTarget.style.opacity = '0'; }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-[62%] p-space-md md:p-space-lg flex flex-col justify-center gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <span className={`font-code-terminal text-label-sm tracking-wider font-semibold ${acc.file}`}>
              {memory.file} • {memory.date}
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">{memory.title}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{memory.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ArchivePage({ onNavigate }) {
  return (
    <div className="max-w-7xl mx-auto w-full px-gutter py-space-md flex flex-col gap-space-lg">

      {/* Breadcrumb */}
      <div className="flex items-center gap-space-sm font-label-caps text-label-caps text-on-surface-variant">
        <button onClick={() => onNavigate('hub')} className="hover:text-primary transition-colors flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[14px]">grid_view</span>
          <span>HUB</span>
        </button>
        <span className="text-outline">{'>'}</span>
        <span className="text-secondary flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[14px]">meeting_room</span>
          <span>PHÒNG 01</span>
        </span>
        <span className="text-outline">{'>'}</span>
        <span className="text-on-surface font-bold bg-surface-container-high px-space-sm py-0.5 rounded">
          LƯU TRỮ KHOẢNH KHẮC
        </span>
      </div>

      {/* Hero banner — mobile: 4:3 object-contain / desktop: fixed height object-cover */}
      <section className="relative w-full rounded-xl overflow-hidden bg-surface-container-lowest shadow-xl border border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(99,102,241,0.2),transparent_55%),radial-gradient(ellipse_at_80%_30%,rgba(123,208,255,0.15),transparent_50%)]" />
        {/* Mobile: giữ tỉ lệ 4:3, object-contain | Desktop: chiều cao cố định, object-cover */}
        <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
          <div className="absolute inset-0 md:hidden">
            {/* Mobile — object-contain, không cắt */}
            <img
              src={archiveData.bannerImage}
              alt={archiveData.bannerImageAlt}
              className="w-full h-full object-contain"
              onError={(e) => { e.currentTarget.style.opacity = '0'; }}
            />
          </div>
          <div className="absolute inset-0 hidden md:block">
            {/* Desktop — object-cover, phóng to lấp đầy */}
            <img
              src={archiveData.bannerImage}
              alt={archiveData.bannerImageAlt}
              className="w-full h-full object-cover object-center"
              onError={(e) => { e.currentTarget.style.opacity = '0'; }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-space-lg flex flex-col gap-1 md:gap-space-xs">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 md:px-space-sm md:py-1 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md text-primary font-code-terminal text-[10px] md:text-label-sm w-fit">
              <span>PHÒNG 01 // LƯU TRỮ KHOẢNH KHẮC</span>
              <span className="text-secondary">✦</span>
            </div>
            <h1 className="text-[clamp(1.4rem,5vw,48px)] font-bold text-on-surface tracking-tight uppercase drop-shadow-lg leading-tight">
              {archiveData.pageTitle}
            </h1>
            <p className="text-[clamp(0.8rem,2vw,18px)] text-secondary italic hidden sm:block">
              {archiveData.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline dọc */}
      <section className="relative py-space-md flex flex-col">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 timeline-spine pointer-events-none" />
        <div className="flex flex-col gap-space-xl">
          {archiveData.memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      </section>

      {/* Bottom navigation */}
      <nav className="mt-space-md mb-space-xl p-space-md rounded-xl bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-lg">
        <button
          onClick={() => onNavigate('hub')}
          className="w-full sm:w-auto px-space-lg py-space-sm rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-caps text-label-caps transition-all flex items-center justify-center gap-space-sm group"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span>← VỀ HUB</span>
        </button>
        <div className="flex items-center gap-space-xs font-code-terminal text-label-sm text-on-surface-variant">
          <span>CHUYỂN KHU VỰC:</span>
          <span className="text-secondary font-bold">SẴN SÀNG</span>
        </div>
        <button
          onClick={() => onNavigate('wishes')}
          className="w-full sm:w-auto px-space-lg py-space-sm rounded bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-caps text-label-caps transition-all flex items-center justify-center gap-space-sm shadow-[0_0_16px_rgba(128,131,255,0.4)] group"
        >
          <span>VÀO 02 LỜI CHÚC</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </nav>
    </div>
  );
}
