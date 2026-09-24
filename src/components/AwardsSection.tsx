import React, { useState } from 'react';
import { Trophy, Medal, Star, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface AwardsSectionProps {
  lang: 'zh' | 'en';
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'competition' | 'scholarship' | 'honor'>('all');

  const filteredAwards = PROFILE_DATA.awards.filter((aw) => {
    if (filter === 'all') return true;
    return aw.category === filter;
  });

  return (
    <section id="awards" className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-2 mb-6">
        <h2 className="flex items-center space-x-2.5 text-[22px] sm:text-[24px] font-normal text-slate-900 dark:text-slate-100 font-serif">
          <Trophy className="w-5 h-5 text-[#0077b5]" />
          <span>{lang === 'zh' ? '荣誉与奖项 (Selected Honors & Awards)' : 'Selected Honors & Awards'}</span>
        </h2>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-1 text-xs">
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
            onClick={() => setFilter('competition')}
            aria-pressed={filter === 'competition'}
            className={`px-2.5 py-1 rounded transition-colors ${
              filter === 'competition'
                ? 'bg-[#0077b5] text-white font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {lang === 'zh' ? '学科竞赛' : 'Competitions'}
          </button>
          <button
            type="button"
            onClick={() => setFilter('scholarship')}
            aria-pressed={filter === 'scholarship'}
            className={`px-2.5 py-1 rounded transition-colors ${
              filter === 'scholarship'
                ? 'bg-emerald-600 text-white font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {lang === 'zh' ? '奖学金' : 'Scholarships'}
          </button>
          <button
            type="button"
            onClick={() => setFilter('honor')}
            aria-pressed={filter === 'honor'}
            className={`px-2.5 py-1 rounded transition-colors ${
              filter === 'honor'
                ? 'bg-amber-600 text-white font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {lang === 'zh' ? '个人荣誉' : 'Honors'}
          </button>
        </div>
      </div>

      {/* Indented Award List */}
      <ul className="space-y-3 font-sans text-sm">
        {filteredAwards.map((aw) => (
          <li
            key={aw.id}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
          >
            {/* Date column */}
            <span className="sm:w-24 shrink-0 font-mono font-semibold text-xs text-slate-500 dark:text-slate-400">
              {aw.year}
            </span>

            {/* Award content */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                {aw.title[lang]}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono shrink-0">
                {aw.level[lang]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
