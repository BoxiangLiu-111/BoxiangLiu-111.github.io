import React, { useState } from 'react';
import { Award, FileCheck2, Calendar, Users, Building, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface PatentsSectionProps {
  lang: 'zh' | 'en';
}

export const PatentsSection: React.FC<PatentsSectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'invention' | 'utility_model'>('all');

  const filteredPatents = PROFILE_DATA.patents.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const inventionCount = PROFILE_DATA.patents.filter((p) => p.category === 'invention').length;
  const utilityCount = PROFILE_DATA.patents.filter((p) => p.category === 'utility_model').length;

  return (
    <section id="patents" className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-6 gap-3">
        <h2 className="flex items-center space-x-2.5 text-[22px] sm:text-[24px] font-normal text-slate-900 dark:text-slate-100 font-serif">
          <Award className="w-5 h-5 text-[#0077b5]" />
          <span>{lang === 'zh' ? '专利申请 (Patents)' : 'Patent Applications'}</span>
        </h2>

        {/* Filter tags */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-sans">
          <button
            type="button"
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
            className={`px-2.5 py-1 rounded-full transition-all ${
              filter === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {lang === 'zh' ? `全部 (${PROFILE_DATA.patents.length})` : `All (${PROFILE_DATA.patents.length})`}
          </button>
          <button
            type="button"
            onClick={() => setFilter('invention')}
            aria-pressed={filter === 'invention'}
            className={`px-2.5 py-1 rounded-full transition-all ${
              filter === 'invention'
                ? 'bg-[#0077b5] text-white font-semibold shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {lang === 'zh' ? `发明专利 (${inventionCount})` : `Invention (${inventionCount})`}
          </button>
          <button
            type="button"
            onClick={() => setFilter('utility_model')}
            aria-pressed={filter === 'utility_model'}
            className={`px-2.5 py-1 rounded-full transition-all ${
              filter === 'utility_model'
                ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {lang === 'zh' ? `实用新型 (${utilityCount})` : `Utility Model (${utilityCount})`}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredPatents.map((patent) => {
          const isInvention = patent.category === 'invention';
          return (
            <div
              key={patent.id}
              className="p-5 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded text-xs font-semibold border ${
                      isInvention
                        ? 'bg-blue-50 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200/70 dark:border-blue-900/50'
                        : 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200/70 dark:border-emerald-900/50'
                    }`}
                  >
                    {patent.type[lang]}
                  </span>
                  <span className="flex items-center space-x-1 text-xs font-mono font-medium text-amber-600 dark:text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>{patent.status[lang]}</span>
                  </span>
                </div>

                <h3 className="text-[15px] font-bold text-slate-900 dark:text-white font-sans leading-snug">
                  {patent.title[lang]}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-sans pt-1 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono">
                    <div>
                      <strong className="font-sans font-medium text-slate-700 dark:text-slate-300">
                        {lang === 'zh' ? '申请号：' : 'App No: '}
                      </strong>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{patent.appNo}</span>
                    </div>
                    <div>
                      <strong className="font-sans font-medium text-slate-700 dark:text-slate-300">
                        {lang === 'zh' ? '申请日：' : 'Filing Date: '}
                      </strong>
                      <span>{patent.filingDate}</span>
                    </div>
                  </div>

                  {patent.applicant && (
                    <div>
                      <strong className="font-medium text-slate-700 dark:text-slate-300">
                        {lang === 'zh' ? '申请人：' : 'Applicant: '}
                      </strong>
                      <span>{patent.applicant[lang]}</span>
                    </div>
                  )}

                  <div>
                    <strong className="font-medium text-slate-700 dark:text-slate-300">
                      {lang === 'zh' ? '发明人：' : 'Inventors: '}
                    </strong>
                    {patent.inventors.map((inv, idx) => {
                      const isMe = inv === '刘博翔' || inv === 'Boxiang Liu';
                      return (
                        <span key={idx}>
                          {isMe ? (
                            <b className="font-bold underline text-[#0077b5] dark:text-blue-400">{inv}</b>
                          ) : (
                            inv
                          )}
                          {idx < patent.inventors.length - 1 ? '、' : ''}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
