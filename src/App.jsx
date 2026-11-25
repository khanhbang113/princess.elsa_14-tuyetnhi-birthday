import { useState } from 'react';
import StarCanvas from './components/StarCanvas';
import Header from './components/Header';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import HubPage from './pages/HubPage';
import ArchivePage from './pages/ArchivePage';
import WishesPage from './pages/WishesPage';

const PAGES = { hub: HubPage, archive: ArchivePage, wishes: WishesPage };

export default function App() {
  const [page, setPage] = useState('hub');
  const [transitioning, setTransitioning] = useState(false);

  const navigate = (target) => {
    if (target === page || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setPage(target);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 200);
  };

  const PageComponent = PAGES[page] || HubPage;

  return (
    <div className="bg-surface text-on-surface min-h-screen relative antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Animated star field */}
      <StarCanvas />

      {/* Global ambient nebula gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(128,131,255,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(183,109,255,0.06),transparent_50%),radial-gradient(circle_at_50%_0%,rgba(0,166,224,0.05),transparent_40%)]" />

      {/* Header (fixed top) */}
      <Header currentPage={page} onNavigate={navigate} />

      {/* Main content — pt-28 mobile (header 64px + mobile nav ~44px), pt-16 desktop */}
      <main
        className={[
          'relative z-10 w-full bg-transparent min-h-screen transition-opacity duration-200 pt-28 md:pt-16',
          transitioning ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      >
        <PageComponent onNavigate={navigate} />
      </main>

      <Footer currentPage={page} onNavigate={navigate} />

      {/* Floating music player */}
      <MusicPlayer />
    </div>
  );
}
