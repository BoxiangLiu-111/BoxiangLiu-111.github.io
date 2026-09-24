import React from 'react';
import { Sun, Moon, Languages, Github, Globe, Menu, X, Rocket } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface HeaderNavbarProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenDeploy: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  lang,
  setLang,
  darkMode,
  setDarkMode,
  onOpenDeploy
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'about', label: { zh: '关于', en: 'About' } },
    { id: 'research', label: { zh: '研究方向', en: 'Research' } },
    { id: 'experience', label: { zh: '研究经历', en: 'Experience' } },
    { id: 'publications', label: { zh: '论文发表', en: 'Publications' } },
    { id: 'patents', label: { zh: '专利', en: 'Patents' } },
    { id: 'talks', label: { zh: '学术报告', en: 'Talks' } },
    { id: 'projects', label: { zh: '项目竞赛', en: 'Projects' } },
    { id: 'awards', label: { zh: '荣誉奖项', en: 'Awards' } },
    { id: 'teaching', label: { zh: '教学与助学', en: 'Teaching' } },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);

    // If navigating to talks, unhide if collapsed
    if (id === 'talks') {
      window.dispatchEvent(new CustomEvent('unhide-talks'));
    }

    setTimeout(() => {
      const element = document.getElementById(id === 'about' ? 'bio' : id);
      if (element) {
        window.history.replaceState(null, '', `#${id}`);
        element.setAttribute('tabindex', '-1');
        element.focus({ preventScroll: true });
        const navOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
        });
      }
    }, 50);
  };

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md transition-colors duration-200"
      aria-label={lang === 'zh' ? '主页导航' : 'Site navigation'}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Scholar Name */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer group flex items-center space-x-2 border-0 bg-transparent p-0 text-left"
          aria-label={lang === 'zh' ? '返回页面顶部' : 'Back to top'}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform">
            BL
          </div>
          <div>
            <span className={`font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight ${lang === 'zh' ? 'font-serif' : 'font-sans'}`}>
              {lang === 'zh' ? '刘博翔' : 'Boxiang Liu'}
            </span>
            <span className="hidden md:inline-block ml-2 text-xs font-mono text-slate-400 dark:text-slate-500">
              Automation
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label={lang === 'zh' ? '页面章节' : 'Page sections'}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 rounded-md transition-colors"
            >
              {item.label[lang]}
            </button>
          ))}
        </nav>

        {/* Actions bar */}
        <div className="flex items-center space-x-2">
          {/* Language switch */}
          <button
            type="button"
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center space-x-1 px-2.5 py-1 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={lang === 'zh' ? 'Switch to English' : '切换为中文'}
            aria-label={lang === 'zh' ? '切换为英文' : 'Switch to Chinese'}
          >
            <Languages className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="font-sans font-semibold">{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
            aria-label={lang === 'zh' ? '深色模式' : 'Dark mode'}
            aria-pressed={darkMode}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* GitHub Pages Deploy Help */}
          <button
            type="button"
            onClick={onOpenDeploy}
            className="hidden md:flex items-center space-x-1 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
            title="Deploy to BoxiangLiu-111.github.io"
          >
            <Rocket className="w-3.5 h-3.5 text-emerald-500" />
            <span>{lang === 'zh' ? '部署主页' : 'Deploy'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            aria-label={lang === 'zh' ? (mobileMenuOpen ? '关闭菜单' : '打开菜单') : (mobileMenuOpen ? 'Close menu' : 'Open menu')}
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuOpen ? 'mobile-navigation' : undefined}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-1 animate-fade-in shadow-lg"
          aria-label={lang === 'zh' ? '移动端页面章节' : 'Mobile page sections'}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {item.label[lang]}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeploy();
              }}
              className="flex items-center space-x-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-600 text-white"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? 'GitHub Pages 部署指南' : 'Deploy Guide'}</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
