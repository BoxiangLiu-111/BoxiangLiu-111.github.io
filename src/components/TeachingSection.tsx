import React from 'react';
import { BookOpen, Users, Calendar, Award, CheckCircle } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface TeachingSectionProps {
  lang: 'zh' | 'en';
}

export const TeachingSection: React.FC<TeachingSectionProps> = ({ lang }) => {
  return (
    <section id="teaching" className="mb-12">
      <h2 className="flex items-center space-x-2.5 text-[22px] sm:text-[24px] font-normal text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2 mb-6 font-serif">
        <BookOpen className="w-5 h-5 text-[#0077b5]" />
        <span>{lang === 'zh' ? '教学与朋辈助学 (Teaching & Mentorship)' : 'Teaching & Mentorship'}</span>
      </h2>

      <div className="space-y-4">
        {PROFILE_DATA.teaching.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-[15px] font-bold text-slate-900 dark:text-white font-sans">
                {item.course[lang]}
              </h3>
              <div className="text-xs font-mono text-slate-400">
                {item.period}
              </div>
            </div>

            <div className="text-xs text-[#0077b5] dark:text-blue-400 font-medium font-sans mt-0.5">
              {item.institution[lang]} · {item.role[lang]}
            </div>

            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-sans leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
              {item.description[lang]}
            </p>
          </div>
        ))}

        {/* Technical Competencies Grid */}
        <div className="mt-6 p-5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 font-mono">
            {lang === 'zh' ? '技术能力与工具栈 (Skills & Toolchain)' : 'Skills & Toolchain'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                {lang === 'zh' ? '编程与机器学习' : 'Programming & ML'}
              </span>
              <div className="flex flex-wrap gap-1">
                {PROFILE_DATA.skills.programming.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                {lang === 'zh' ? '研究方法' : 'Research Methods'}
              </span>
              <div className="flex flex-wrap gap-1">
                {PROFILE_DATA.skills.research.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[11px]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                {lang === 'zh' ? '嵌入式与自动化' : 'Embedded & Hardware'}
              </span>
              <div className="flex flex-wrap gap-1">
                {PROFILE_DATA.skills.embedded.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                {lang === 'zh' ? '科研工具' : 'Tools & Environments'}
              </span>
              <div className="flex flex-wrap gap-1">
                {PROFILE_DATA.skills.tools.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
