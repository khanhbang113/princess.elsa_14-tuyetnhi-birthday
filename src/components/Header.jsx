import { siteConfig } from '../data/birthdayData';

const NAV_ITEMS = [
  { id: 'hub',     label: '00 HUB' },
  { id: 'archive', label: '01 LƯU TRỮ KHOẢNH KHẮC' },
  { id: 'wishes',  label: '02 LỜI CHÚC' },
];

export default function Header({ currentPage, onNavigate }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-white/5">
      <div className="h-16 max-w-7xl mx-auto px-gutter flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-space-md">
          <div className="w-8 h-8 flex items-center justify-center text-primary text-xl">✦</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface uppercase">
                {siteConfig.headerTitle}
              </span>
              <span className="font-code-terminal text-code-terminal text-secondary ml-space-xs">✦</span>
            </div>
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
              <span>{siteConfig.systemStatus}</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-space-sm bg-surface-container-lowest/80 p-space-xs rounded-full backdrop-blur-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={[
                'px-space-md py-space-xs font-label-caps text-label-caps transition-all duration-200 rounded-full cursor-pointer',
                currentPage === item.id
                  ? 'bg-primary-container text-on-primary-container'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high',
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger dots (decorative — nav pills below) */}
        <div className="flex md:hidden items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              title={item.label}
              className={[
                'w-2.5 h-2.5 rounded-full transition-all duration-200',
                currentPage === item.id ? 'bg-primary scale-125' : 'bg-outline hover:bg-primary/60',
              ].join(' ')}
            />
          ))}
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="flex md:hidden items-center justify-center gap-space-xs bg-surface-container-lowest/90 px-gutter-mobile py-space-xs border-t border-white/5">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={[
              'flex-1 py-space-xs px-1 font-label-caps text-[9px] tracking-wider uppercase transition-all rounded text-center',
              currentPage === item.id
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:text-on-surface',
            ].join(' ')}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
