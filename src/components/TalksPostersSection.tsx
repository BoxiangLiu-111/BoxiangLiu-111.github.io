import React, { useState, useEffect } from 'react';
import { Presentation, Calendar, MapPin, ExternalLink, Download, Sparkles, Tag, PlusCircle, Bookmark, Eye, EyeOff, ChevronDown } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface TalksPostersProps {
  lang: 'zh' | 'en';
}

export const TalksPostersSection: React.FC<TalksPostersProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'talk' | 'poster'>('all');

  // Default to hidden (compact mode) to keep the homepage extremely compact as requested
  const [isCompactHidden, setIsCompactHidden] = useState<boolean>(() => {
    const saved = localStorage.getItem('boxiang_hide_talks');
    return saved === null ? true : saved === 'true';
  });

  const toggleHide = (hide: boolean) => {
    setIsCompactHidden(hide);
    localStorage.setItem('boxiang_hide_talks', String(hide));
  };

  useEffect(() => {
    const handleUnhide = () => {
      toggleHide(false);
    };
    window.addEventListener('unhide-talks', handleUnhide);
    return () => window.removeEventListener('unhide-talks', handleUnhide);
  }, []);

  const allItems = PROFILE_DATA.talksPosters || [];
  const items = allItems.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  // When hidden: Render an ultra-compact minimalist banner
  if (isCompactHidden) {
    return (
      <section id="talks" className="mb-8 relative">
        <span id="posters" className="absolute -top-24" />
        <div className="p-3.5 sm:p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs transition-all hover:bg-slate-50 dark:hover:bg-slate-900/50">
          <div className="flex items-center space-x-2.5 text-slate-600 dark:text-slate-400">
            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-900/40 flex items-center justify-center text-[#0077b5] dark:text-blue-400 shrink-0">
              <Presentation className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-medium text-slate-800 dark:text-slate-200 font-sans">
                {lang === 'zh' ? '学术汇报与海报 (Talks & Posters)' : 'Talks & Posters'}
              </span>
              <span className="text-slate-400 dark:text-slate-500 ml-2 hidden md:inline">
                {lang === 'zh' ? '· 已暂且隐藏以保持主页紧凑' : '· Temporarily hidden for compactness'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => toggleHide(false)}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#0077b5] text-[#0077b5] dark:text-blue-400 font-medium text-xs shadow-xs hover:shadow-sm transition-all"
            title={lang === 'zh' ? '待后续参会或汇报时一键开启展示' : 'Expand section when attending conferences'}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '一键开启显示' : 'Show Section'}</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="talks" className="mb-12 relative animate-fade-in">
      <span id="posters" className="absolute -top-24" />

      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-2 mb-6">
        <h2 className="flex items-center space-x-2.5 text-[22px] sm:text-[24px] font-normal text-slate-900 dark:text-slate-100 font-serif">
          <Presentation className="w-5 h-5 text-[#0077b5]" />
          <span>{lang === 'zh' ? '学术汇报与海报 (Talks & Posters)' : 'Talks & Posters'}</span>
        </h2>

        {/* Interactive Filter tabs & Hide Option */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-1">
            <button
              type="button"
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
              className={`px-2.5 py-1 rounded transition-colors ${
                filter === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'zh' ? '全部' : 'All'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('talk')}
              aria-pressed={filter === 'talk'}
              className={`px-2.5 py-1 rounded transition-colors ${
                filter === 'talk'
                  ? 'bg-[#0077b5] text-white font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'zh' ? '口头汇报' : 'Talks'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('poster')}
              aria-pressed={filter === 'poster'}
              className={`px-2.5 py-1 rounded transition-colors ${
                filter === 'poster'
                  ? 'bg-teal-600 text-white font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'zh' ? '海报展示' : 'Posters'}
            </button>
          </div>

          <span className="text-slate-300 dark:text-slate-700">|</span>

          {/* Option: Hide section to keep compact */}
          <button
            type="button"
            onClick={() => toggleHide(true)}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={lang === 'zh' ? '暂且隐藏此模块以保持主页极度紧凑' : 'Hide this section to keep homepage compact'}
          >
            <EyeOff className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '暂且隐藏' : 'Hide'}</span>
          </button>
        </div>
      </div>

      {allItems.length === 0 ? (
        <div className="p-8 sm:p-10 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 text-center space-y-3 transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/50 flex items-center justify-center mx-auto text-[#0077b5] dark:text-blue-400 shadow-sm">
            <Presentation className="w-6 h-6 stroke-[1.75]" />
          </div>

          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 font-sans">
              {filter === 'talk'
                ? (lang === 'zh' ? '学术口头汇报展位 (Oral Presentation Reserved)' : 'Oral Talk Slot Reserved')
                : filter === 'poster'
                ? (lang === 'zh' ? '学术海报展示展位 (Academic Poster Reserved)' : 'Academic Poster Slot Reserved')
                : (lang === 'zh' ? '学术汇报与海报展位已预留' : 'Academic Talks & Posters Slot Reserved')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg mx-auto font-sans leading-relaxed">
              {lang === 'zh'
                ? '（本板块数据结构已配置完毕。后续您参加学术会议交流、作口头汇报或展示学术海报时，可在 profileData 中填入会议名称与幻灯片/海报链接直接展示）'
                : '(Section framework is ready. Add future symposium oral talks or conference posters to display slides and poster downloads.)'}
            </p>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40">
            <Bookmark className="w-3 h-3 text-blue-500" />
            <span>{lang === 'zh' ? '就绪预留位 · 随时可填充' : 'Ready · Awaiting Conference Records'}</span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((tp) => (
            <div
              key={tp.id}
              className="p-5 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider font-mono ${
                        tp.type === 'talk'
                          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/50'
                          : 'bg-teal-50 text-teal-700 dark:bg-teal-950/70 dark:text-teal-300 border border-teal-200 dark:border-teal-900/50'
                      }`}
                    >
                      {tp.type === 'talk' ? (lang === 'zh' ? '口头汇报 / Oral' : 'Oral Talk') : (lang === 'zh' ? '学术海报 / Poster' : 'Poster')}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      {tp.date}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{tp.location[lang]}</span>
                  </div>
                </div>

                <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900 dark:text-white font-sans leading-snug">
                  {tp.title[lang]}
                </h3>

                <div className="text-xs sm:text-[13px] font-medium text-[#0077b5] dark:text-blue-400 font-sans">
                  {tp.event[lang]}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {tp.abstract[lang]}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {tp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2 font-mono text-xs text-slate-500">
                  {tp.slidesUrl && tp.slidesUrl !== '#' && (
                    <a
                      href={tp.slidesUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Slides (PDF)</span>
                    </a>
                  )}
                  {tp.posterUrl && tp.posterUrl !== '#' && (
                    <a
                      href={tp.posterUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Poster (PDF)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
