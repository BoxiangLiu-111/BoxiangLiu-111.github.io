import React from 'react';
import { Lightbulb } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface ResearchInterestsProps {
  lang: 'zh' | 'en';
}

export const ResearchInterestsSection: React.FC<ResearchInterestsProps> = ({ lang }) => {
  return (
    <section id="research" className="mb-12">
      <h2 className="flex items-center space-x-2.5 text-[22px] sm:text-[24px] font-normal text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2 mb-6 font-serif">
        <Lightbulb className="w-5 h-5 text-[#0077b5]" />
        <span>{lang === 'zh' ? '研究方向与兴趣 (Research Interests)' : 'Research Interests'}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PROFILE_DATA.researchInterests.map((item, idx) => (
          <div
            key={item.id}
            className="p-5 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-400">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-[15px] font-sans mb-2">
                {item.title[lang]}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                {item.desc[lang]}
              </p>
            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1">
              {item.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
