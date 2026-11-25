import { siteConfig } from '../data/birthdayData';

export default function Footer({ currentPage, onNavigate }) {
  return (
    <footer className="relative z-10 w-full bg-surface-container-lowest/80 border-t border-outline-variant/30 py-space-xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col items-center justify-center text-center gap-space-xs">
        <div className="font-code-terminal text-[10px] sm:text-[12px] md:text-code-terminal tracking-wider uppercase text-primary font-bold text-center px-1">
          PRINCESS.ELSA_14 ✦ CHÚC MỪNG SINH NHẬT, {siteConfig.name}!
        </div>
        <p className="font-body-md text-body-md italic text-on-surface-variant mt-1">
          {siteConfig.footerQuote}
        </p>
      </div>
    </footer>
  );
}
