import React, { useState } from 'react';
import { FileText, Github, Quote, Search, Sparkles, ChevronDown, ChevronUp, ExternalLink, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { Publication, PROFILE_DATA } from '../data/profileData';
import { ScientificThumbnail } from './ScientificThumbnail';

interface PublicationsSectionProps {
  lang: 'zh' | 'en';
  onOpenBibtex: (pub: Publication) => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  lang,
  onOpenBibtex
}) => {
  const [showRepresentativeOnly, setShowRepresentativeOnly] = useState(true);
  const [quickGlanceMode, setQuickGlanceMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDesc, setExpandedDesc] = useState<Record<string, boolean>>({
    'pub-vaschat': false,
    'pub-cgcotr': false,
    'pub-cfrr': false,
    'pub-pae-focus': false
  });

  const toggleDesc = (id: string) => {
    setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPublications = PROFILE_DATA.publications.filter((pub) => {
    if (showRepresentativeOnly && !pub.representative) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = pub.title.en.toLowerCase().includes(q) || pub.title.zh.toLowerCase().includes(q);
    const authorMatch = pub.authors.some((a) => a.toLowerCase().includes(q));
    const venueMatch = pub.venue.toLowerCase().includes(q);
    const highlightMatch = pub.highlights.en.toLowerCase().includes(q) || pub.highlights.zh.toLowerCase().includes(q);
    const takeawayMatch = pub.quickTakeaway
      ? pub.quickTakeaway.zh.toLowerCase().includes(q) || pub.quickTakeaway.en.toLowerCase().includes(q)
      : false;
    return titleMatch || authorMatch || venueMatch || highlightMatch || takeawayMatch;
  });

  const formatAuthors = (authors: string[]) => {
    return authors.map((author, i) => {
      const isMe = author.includes('Boxiang Liu') || author.includes('刘博翔');
      return (
        <span key={i}>
          {isMe ? (
            <b className="font-bold text-slate-950 dark:text-white underline decoration-blue-500 underline-offset-2">
              {lang === 'zh' && author.includes('Boxiang Liu') ? '刘博翔 (Boxiang Liu)' : author}
            </b>
          ) : (
            <span className="text-slate-700 dark:text-slate-300">{author}</span>
          )}
          {i < authors.length - 1 && ', '}
        </span>
      );
    });
  };

  return (
    <section id="publications" className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-2 mb-6">
        <h2 className="flex flex-wrap items-center text-[22px] sm:text-[24px] font-normal text-slate-900 dark:text-slate-100 font-serif">
          <FileText className="w-5 h-5 text-[#0077b5] mr-2 shrink-0" />
          <span>{lang === 'zh' ? '代表性论文成果' : 'Publications'}</span>
          <span className="text-base sm:text-lg font-sans text-slate-500 ml-2 font-light">
            (
            <button
              type="button"
              onClick={() => setShowRepresentativeOnly(true)}
              className={`hover:underline cursor-pointer transition-colors px-1 ${
                showRepresentativeOnly
                  ? 'text-[#0077b5] font-semibold underline'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
              aria-pressed={showRepresentativeOnly}
            >
              {lang === 'zh' ? '精选代表作' : 'Show Representative'}
            </button>
            {' / '}
            <button
              type="button"
              onClick={() => setShowRepresentativeOnly(false)}
              className={`hover:underline cursor-pointer transition-colors px-1 ${
                !showRepresentativeOnly
                  ? 'text-[#0077b5] font-semibold underline'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
              aria-pressed={!showRepresentativeOnly}
            >
              {lang === 'zh' ? '全部' : 'Show All'}
            </button>
            )
          </span>
        </h2>

        {/* Action Toggles: One-Minute Quick Glance & Paper Count */}
        <div className="flex items-center space-x-2.5">
          <button
            type="button"
            onClick={() => setQuickGlanceMode(!quickGlanceMode)}
            className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all shadow-sm ${
              quickGlanceMode
                ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-800 font-semibold'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
            title={lang === 'zh' ? '开启/折叠论文一分钟速览摘要' : 'Toggle 1-Minute Quick Glance'}
            aria-pressed={quickGlanceMode}
          >
            <Zap className={`w-3.5 h-3.5 ${quickGlanceMode ? 'text-amber-600 fill-amber-500' : 'text-slate-400'}`} />
            <span>{lang === 'zh' ? '一分钟速览' : '1-Min Glance'}</span>
            <span className={`text-[10px] px-1 py-0.2 rounded ${quickGlanceMode ? 'bg-amber-200 dark:bg-amber-900 text-amber-950 dark:text-amber-200' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
              {quickGlanceMode ? (lang === 'zh' ? '开启' : 'ON') : (lang === 'zh' ? '折叠' : 'OFF')}
            </span>
          </button>

          <span className="text-xs font-mono text-slate-400">
            {filteredPublications.length} papers
          </span>
        </div>
      </div>

      {/* Instant Filter Search input */}
      <div className="relative mb-6">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <label htmlFor="publication-search" className="sr-only">
          {lang === 'zh' ? '搜索论文' : 'Search publications'}
        </label>
        <input
          id="publication-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            lang === 'zh'
              ? '搜索论文（如 VascHAT, PAM, CG-COTR, IEEE TIM, 自动化学报）...'
              : 'Search publications by keyword, venue, or title...'
          }
          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#0077b5]"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label={lang === 'zh' ? '清除论文搜索' : 'Clear publication search'}
          >
            Clear
          </button>
        )}
      </div>

      {/* Publications List matching .pub, .pub-left, .pub-right */}
      <div className="pub-list space-y-6">
        {filteredPublications.map((pub) => {
          const isExpanded = expandedDesc[pub.id] ?? false;

          return (
            <article
              key={pub.id}
              className="pub group flex flex-col md:flex-row gap-5 p-4 sm:p-5 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              {/* pub-left: Illustration frame (~40% on desktop) */}
              <div className="pub-left md:w-[38%] shrink-0 flex flex-col items-center justify-start">
                <div className="w-full max-w-[320px] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-[1.01] transition-transform">
                  <ScientificThumbnail type={pub.thumbnailType} title={pub.title[lang]} />
                </div>
              </div>

              {/* pub-right: Content (~62% on desktop) */}
              <div className="pub-right min-w-0 md:w-[62%] flex flex-col justify-between space-y-2">
                <div>
                  {/* Title */}
                  <h3 className="title break-words text-[15px] sm:text-[16px] font-bold text-slate-900 dark:text-white leading-snug font-sans group-hover:text-[#0077b5] dark:group-hover:text-blue-400 transition-colors">
                    {pub.title[lang]}
                  </h3>

                  {/* Authors */}
                  <div className="authors break-words text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 font-sans mt-1.5 leading-relaxed">
                    {formatAuthors(pub.authors)}
                  </div>

                  {/* Venue and Publication status */}
                  <div className="publish mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                    <span className="place font-bold italic text-[#9b3022] dark:text-[#f87171] font-sans tracking-normal">
                      {pub.venue}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold font-mono ${
                        pub.statusType === 'published'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300'
                      }`}
                    >
                      {pub.status[lang]}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {pub.authorRole[lang]}
                    </span>
                    {pub.year && (
                      <span className="text-xs font-mono text-slate-400">
                        {pub.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* FEATURE 1: ONE-MINUTE QUICK GLANCE (一分钟速览) */}
                {quickGlanceMode && pub.quickTakeaway && (
                  <div className="mt-2 p-3 rounded-lg bg-gradient-to-r from-amber-50/80 via-amber-50/40 to-blue-50/40 dark:from-amber-950/25 dark:via-slate-900 dark:to-blue-950/25 border border-amber-200/80 dark:border-amber-900/50 shadow-xs animate-fade-in">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-1.5">
                        <span className="flex items-center justify-center w-4 h-4 rounded bg-amber-500 text-white shadow-xs">
                          <Zap className="w-2.5 h-2.5 fill-white stroke-none" />
                        </span>
                        <span className="text-[11px] font-bold text-amber-950 dark:text-amber-200 uppercase tracking-wider font-mono">
                          {lang === 'zh' ? '一分钟速览 · 核心速读' : '1-Min Quick Takeaway'}
                        </span>
                      </div>

                      {/* Quick Metric Pills */}
                      <div className="flex items-center gap-1">
                        {pub.quickTakeaway.metrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-white dark:bg-slate-800 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80 shadow-xs"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-800 dark:text-slate-200 font-sans leading-relaxed whitespace-pre-line pl-0.5">
                      {pub.quickTakeaway[lang]}
                    </div>
                  </div>
                )}

                {/* Key Highlight / Abstract Toggle */}
                <div className="pt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  <button
                    type="button"
                    className="flex items-center space-x-1 cursor-pointer bg-transparent border-0 p-0 text-[#0077b5] dark:text-blue-400 hover:underline select-none"
                    onClick={() => toggleDesc(pub.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`publication-highlight-${pub.id}`}
                  >
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span className="font-semibold text-[11px]">
                      {lang === 'zh' ? '研究创新与亮点' : 'Key Highlights'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                  <div
                    id={`publication-highlight-${pub.id}`}
                    hidden={!isExpanded}
                    className="mt-1.5 p-2.5 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 animate-fade-in"
                  >
                    {pub.highlights[lang]}
                  </div>
                </div>

                {/* Tags & Action Links */}
                <div className="tags flex flex-wrap items-center gap-1.5 pt-2 font-mono text-xs text-slate-500">
                  {pub.paperUrl && (
                    <span>
                      [<a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${lang === 'zh' ? '论文' : 'Paper'}: ${pub.title[lang]}`}
                        className="text-[#0077b5] dark:text-blue-400 hover:underline font-semibold"
                      >
                        Paper
                      </a>]
                    </span>
                  )}

                  {pub.codeUrl && (
                    <span>
                      [<a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${lang === 'zh' ? '代码' : 'Code'}: ${pub.title[lang]}`}
                        className="text-[#0077b5] dark:text-blue-400 hover:underline font-semibold"
                      >
                        Code
                      </a>]
                    </span>
                  )}

                  <span>
                    [<button
                      type="button"
                      onClick={() => onOpenBibtex(pub)}
                      aria-label={`BibTeX: ${pub.title[lang]}`}
                      className="text-[#0077b5] dark:text-blue-400 hover:underline font-semibold cursor-pointer"
                    >
                      BibTeX
                    </button>]
                  </span>
                </div>
              </div>
            </article>
          );
        })}

        {filteredPublications.length === 0 && (
          <div className="p-8 text-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
            {lang === 'zh' ? '暂未检索到符合条件的论文成果' : 'No publications match your filter.'}
          </div>
        )}
      </div>
    </section>
  );
};
