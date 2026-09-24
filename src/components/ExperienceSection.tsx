import React from 'react';
import { Briefcase, GraduationCap, Calendar, User, ChevronRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface ExperienceSectionProps {
  lang: 'zh' | 'en';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  return (
    <section id="experience" className="mb-12">
      <h2 className="flex items-center space-x-2.5 text-[22px] sm:text-[24px] font-normal text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2 mb-6 font-serif">
        <Briefcase className="w-5 h-5 text-[#0077b5]" />
        <span>{lang === 'zh' ? '教育背景与科研经历 (Experiences)' : 'Experiences'}</span>
      </h2>

      <div className="space-y-8">
        {/* Education Item */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center space-x-1.5 font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-[#0077b5]" />
            <span>{lang === 'zh' ? '教育背景 (Education)' : 'Education'}</span>
          </h3>

          <div className="space-y-4">
            {PROFILE_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-2 sm:gap-6 p-4 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/50 shadow-sm"
              >
                {/* Date on left */}
                <div className="sm:w-36 shrink-0 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 pt-0.5">
                  {edu.period}
                </div>

                {/* Content on right */}
                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-[15px] font-bold text-slate-900 dark:text-white font-sans">
                      {edu.school[lang]}
                    </h4>
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/70 dark:border-blue-900/50">
                      {lang === 'zh' ? '在读本科生 · 2023级' : 'Undergraduate · Class of 2023'}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">
                    {edu.degree[lang]} · <strong>{lang === 'zh' ? '导师：' : 'Advisor: '}</strong>{edu.advisor[lang]}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans pt-1">
                    {edu.courses[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Timeline */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center space-x-1.5 font-mono">
            <Briefcase className="w-3.5 h-3.5 text-[#0077b5]" />
            <span>{lang === 'zh' ? '科研工作经历 (Research Experiences)' : 'Research Experiences'}</span>
          </h3>

          <div className="space-y-4">
            {PROFILE_DATA.researchExperiences.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col sm:flex-row gap-2 sm:gap-6 p-4 sm:p-5 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/50 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                {/* Timeline Date column */}
                <div className="sm:w-36 shrink-0">
                  <span className="inline-block px-2.5 py-1 rounded text-xs font-mono font-semibold bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/50">
                    {exp.period}
                  </span>
                </div>

                {/* Timeline Content column */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-[15px] font-bold text-slate-900 dark:text-white font-sans">
                      {exp.title[lang]}
                    </h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {exp.institution[lang]}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs text-blue-600 dark:text-blue-400 font-medium">
                    <User className="w-3.5 h-3.5" />
                    <span>{lang === 'zh' ? '导师：' : 'Advisor: '}{exp.advisor[lang]}</span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {exp.description[lang]}
                  </p>

                  <ul className="space-y-1 pt-1.5 border-t border-slate-100 dark:border-slate-800/60">
                    {exp.points[lang].map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-1.5 text-xs text-slate-600 dark:text-slate-400 font-sans">
                        <ChevronRight className="w-3.5 h-3.5 text-[#0077b5] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
