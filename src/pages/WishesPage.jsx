import { useState } from 'react';
import { wishesData } from '../data/birthdayData';

export default function WishesPage({ onNavigate }) {
  const { letter } = wishesData;
  const [letterOpen, setLetterOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-gutter py-space-md flex flex-col gap-space-xl">

      {/* Breadcrumb — style giống ArchivePage */}
      <div className="flex items-center gap-space-sm font-label-caps text-label-caps text-on-surface-variant">
        <button onClick={() => onNavigate('hub')} className="hover:text-primary transition-colors flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[14px]">grid_view</span>
          <span>HUB</span>
        </button>
        <span className="text-outline">{'>'}</span>
        <span className="text-tertiary flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[14px]">meeting_room</span>
          <span>PHÒNG 02</span>
        </span>
        <span className="text-outline">{'>'}</span>
        <span className="text-on-surface font-bold bg-surface-container-high px-space-sm py-0.5 rounded">
          LỜI CHÚC
        </span>
      </div>

      {/* Hero banner — mobile: 4:3 object-contain / desktop: fixed height object-cover */}
      <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-lowest shadow-xl border border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(183,109,255,0.2),transparent_55%),radial-gradient(ellipse_at_80%_30%,rgba(221,183,255,0.15),transparent_50%)]" />
        <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
          {/* Mobile — object-contain, không cắt */}
          <div className="absolute inset-0 md:hidden">
            <img
              src={wishesData.bannerImage}
              alt={wishesData.bannerImageAlt}
              className="w-full h-full object-contain"
              onError={(e) => { e.currentTarget.style.opacity = '0'; }}
            />
          </div>
          {/* Desktop — object-cover, phóng to lấp đầy */}
          <div className="absolute inset-0 hidden md:block">
            <img
              src={wishesData.bannerImage}
              alt={wishesData.bannerImageAlt}
              className="w-full h-full object-cover object-center"
              onError={(e) => { e.currentTarget.style.opacity = '0'; }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-space-lg flex flex-col gap-1 md:gap-space-xs">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 md:px-space-sm md:py-1 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md text-tertiary font-code-terminal text-[10px] md:text-label-sm w-fit">
              <span>PHÒNG 02 // LỜI CHÚC</span>
            </div>
            <h1 className="text-[clamp(1.4rem,5vw,48px)] font-bold text-on-surface tracking-tight uppercase drop-shadow-lg leading-tight">
              {wishesData.pageTitle}
            </h1>
            <p className="text-[clamp(0.8rem,2vw,18px)] text-tertiary italic hidden sm:block">
              {wishesData.pageSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="flex flex-col gap-space-lg">

        {/* Nút mở thư */}
        {!letterOpen && (
          <div className="flex flex-col items-center gap-space-md py-space-xl">
            <p className="font-code-terminal text-label-sm text-on-surface-variant tracking-widest animate-pulse">
              ● TÍN HIỆU ĐÃ SẴN SÀNG — CHỜ XÁC NHẬN
            </p>
            <button
              onClick={() => setLetterOpen(true)}
              className="group relative px-10 py-4 rounded-full bg-primary/20 border border-primary/50 hover:bg-primary/30 hover:border-primary transition-all duration-300 font-label-caps text-label-caps tracking-widest text-primary hover:text-on-primary-container shadow-[0_0_24px_rgba(128,131,255,0.3)] hover:shadow-[0_0_40px_rgba(128,131,255,0.5)] flex items-center gap-space-sm"
            >
              <span>MỞ LỜI NHẮN</span>
              <span className="inline-block group-hover:translate-y-1 transition-transform duration-300">↓</span>
            </button>
          </div>
        )}

        {/* Letter — hiện ra khi bấm nút */}
        {letterOpen && (
          <div className="w-full rounded-xl bg-surface-container-low/90 backdrop-blur-md border border-outline-variant/30 p-space-lg md:p-space-xl flex flex-col gap-space-lg shadow-xl relative overflow-hidden animate-fade-slide-in">
            {/* Letter header */}
            <div className="flex items-center border-b border-outline-variant/30 pb-space-sm font-code-terminal text-label-sm">
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="material-symbols-outlined text-[16px]">mark_email_read</span>
                <span>TÍN_HIỆU_25_11 // LỜI_NHẮN_ĐÃ_MỞ</span>
              </div>
            </div>

            {/* Letter body */}
            <div className="flex flex-col gap-space-md text-on-surface/90 font-body-lg text-body-lg leading-relaxed max-w-3xl">
              <p className="font-semibold text-primary">{letter.salutation}</p>
              {letter.paragraphs.map((para, i) => (
                <p key={i} className="text-on-surface-variant">{para}</p>
              ))}
              <p className="font-medium text-on-surface">{letter.closing}</p>
            </div>

            {/* Letter signature */}
            <div className="flex justify-end pt-space-md border-t border-outline-variant/30">
              <div className="flex flex-col items-end gap-space-xs">
                <span className="font-body-lg italic text-secondary text-right">{letter.signature}</span>
                <span className="font-code-terminal text-label-sm text-outline">{letter.signatureCoord}</span>
              </div>
            </div>

            {/* Nút đóng lại */}
            <button
              onClick={() => setLetterOpen(false)}
              className="self-center mt-space-sm font-code-terminal text-label-sm text-outline hover:text-on-surface-variant transition-colors tracking-widest"
            >
              ↑ ĐÓNG THƯ
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-space-md pt-space-md">
        {/* Back to Hub */}
        <div className="flex items-center justify-start">
          <button
            onClick={() => onNavigate('hub')}
            className="px-space-md py-space-xs rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-caps text-label-caps flex items-center gap-space-xs transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>⌂ VỀ HUB</span>
          </button>
        </div>

        {/* 2-col room switcher */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {/* Room 01 */}
          <button
            onClick={() => onNavigate('archive')}
            className="group bg-surface-container-low hover:bg-surface-container-high p-space-md md:p-space-lg rounded-xl flex items-center justify-between transition-all duration-300 shadow-md text-left"
          >
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <rect height="5" rx="1" width="20" x="2" y="3" />
                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                  <path d="M10 12h4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-code-terminal text-label-sm text-outline">KHU VỰC TRƯỚC</span>
                <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-bold">
                  PHÒNG 01: LƯU TRỮ KHOẢNH KHẮC
                </span>
                
              </div>
            </div>
            <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:-translate-x-1 transition-all">chevron_left</span>
          </button>

          {/* Current room indicator */}
          <div className="bg-surface-container-low p-3 sm:p-space-md md:p-space-lg rounded-xl flex items-center justify-between shadow-md gap-2">
            <div className="flex items-center gap-3 sm:gap-space-md min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_0_16px_rgba(128,131,255,0.4)] flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <rect height="14" rx="2" width="18" x="3" y="5" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-space-xs font-code-terminal text-[10px] sm:text-label-sm text-secondary whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse flex-shrink-0" />
                  <span>PHÒNG ĐANG MỞ</span>
                </div>
                <span className="text-[14px] sm:text-headline-sm text-on-surface font-bold truncate">
                  PHÒNG 02: LỜI CHÚC
                </span>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-secondary-container/20 text-secondary font-label-caps text-[10px] sm:text-label-caps whitespace-nowrap flex-shrink-0">
              [ HIỆN TẠI ]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
