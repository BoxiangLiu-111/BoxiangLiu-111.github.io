import React, { lazy, Suspense, useState, useEffect } from 'react';
import { HeaderNavbar } from './components/HeaderNavbar';
import { ProfileHero } from './components/ProfileHero';
import { AboutSection } from './components/AboutSection';
import { ResearchInterestsSection } from './components/ResearchInterestsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PublicationsSection } from './components/PublicationsSection';
import { PatentsSection } from './components/PatentsSection';
import { TalksPostersSection } from './components/TalksPostersSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AwardsSection } from './components/AwardsSection';
import { TeachingSection } from './components/TeachingSection';
import { Footer } from './components/Footer';
import { Publication } from './data/profileData';

const BibtexModal = lazy(() => import('./components/BibtexModal').then(({ BibtexModal }) => ({ default: BibtexModal })));

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('boxiang_theme') === 'dark' ||
        (!localStorage.getItem('boxiang_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  const [activeBibtexPub, setActiveBibtexPub] = useState<Publication | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('boxiang_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('boxiang_theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const isChinese = lang === 'zh';
    const title = isChinese
      ? '刘博翔 | 学术主页'
      : 'Boxiang Liu | Academic Homepage';
    const description = isChinese
      ? '刘博翔，湖南科技大学自动化专业本科生，研究方向包括计算与生物医学成像、物理引导逆问题学习和智能多传感器状态监测。'
      : 'Academic homepage of Boxiang Liu, an undergraduate student in Automation working on computational and biomedical imaging, physics-guided inverse problems, and intelligent multisensor condition monitoring.';

    document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', darkMode ? '#0b0f19' : '#fcfcfc');
  }, [lang, darkMode]);

  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#0b0f19] text-[#222] dark:text-[#e2e8f0] transition-colors duration-200 flex flex-col font-sans selection:bg-[#0077b5] selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg dark:focus:bg-slate-900 dark:focus:text-white"
      >
        {lang === 'zh' ? '跳转到主要内容' : 'Skip to main content'}
      </a>

      {/* Top sticky header navbar */}
      <HeaderNavbar
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Top Hero Cover & Floating Namecard */}
      <ProfileHero lang={lang} />

      {/* Main Content Column */}
      <main id="main-content" className="flex-1 min-w-0 max-w-[880px] w-full mx-auto px-4 sm:px-6" tabIndex={-1}>
        {/* About Section (#bio) */}
        <AboutSection lang={lang} />

        {/* Research Interests */}
        <ResearchInterestsSection lang={lang} />

        {/* Experiences Timeline (#timeline) */}
        <ExperienceSection lang={lang} />

        {/* Publications (#publications with Show Representative / Show All) */}
        <PublicationsSection
          lang={lang}
          onOpenBibtex={(pub) => setActiveBibtexPub(pub)}
        />

        {/* Patent Applications (#patents) */}
        <PatentsSection lang={lang} />

        {/* Academic Talks & Posters (#talks) */}
        <TalksPostersSection lang={lang} />

        {/* Projects & Competitions (#projects) */}
        <ProjectsSection lang={lang} />

        {/* Selected Honors & Awards (#awards) */}
        <AwardsSection lang={lang} />

        {/* Teaching & Peer Mentoring (#teaching) */}
        <TeachingSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* BibTeX Modal */}
      {activeBibtexPub && (
        <Suspense fallback={null}>
          <BibtexModal
            isOpen={!!activeBibtexPub}
            onClose={() => setActiveBibtexPub(null)}
            title={activeBibtexPub.title[lang]}
            bibtex={activeBibtexPub.bibtex}
            lang={lang}
          />
        </Suspense>
      )}

    </div>
  );
}
