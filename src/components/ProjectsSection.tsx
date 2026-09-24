import React, { useState } from 'react';
import { Layers, Trophy, Calendar, UserCheck, CheckCircle2, Tag, Briefcase, Building2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface ProjectsSectionProps {
  lang: 'zh' | 'en';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'industry' | 'competition'>('all');

  const filteredProjects = PROFILE_DATA.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const industryCount = PROFILE_DATA.projects.filter((p) => p.category === 'industry').length;
  const competitionCount = PROFILE_DATA.projects.filter((p) => p.category === 'competition').length;

  return (
    <section id="projects" className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-6 gap-3">
        <h2 className="flex items-center space-x-2.5 text-[22px] sm:text-[24px] font-normal text-slate-900 dark:text-slate-100 font-serif">
          <Layers className="w-5 h-5 text-[#0077b5]" />
          <span>
            {lang === 'zh'
              ? '工程项目与竞赛经历 (Engineering Project and Competition Experience)'
              : 'Engineering Project and Competition Experience'}
          </span>
        </h2>

        {/* Filter tags */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-sans shrink-0">
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
            {lang === 'zh' ? `全部 (${PROFILE_DATA.projects.length})` : `All (${PROFILE_DATA.projects.length})`}
          </button>
          <button
            type="button"
            onClick={() => setFilter('industry')}
            aria-pressed={filter === 'industry'}
            className={`px-2.5 py-1 rounded-full transition-all ${
              filter === 'industry'
                ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {lang === 'zh' ? `企业横向 (${industryCount})` : `Industry (${industryCount})`}
          </button>
          <button
            type="button"
            onClick={() => setFilter('competition')}
            aria-pressed={filter === 'competition'}
            className={`px-2.5 py-1 rounded-full transition-all ${
              filter === 'competition'
                ? 'bg-amber-600 text-white font-semibold shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {lang === 'zh' ? `学科竞赛 (${competitionCount})` : `Competition (${competitionCount})`}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((proj) => {
          const isIndustry = proj.category === 'industry';

          return (
            <div
              key={proj.id}
              className={`p-5 rounded-xl border bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                isIndustry
                  ? 'border-indigo-200/90 dark:border-indigo-900/50 md:col-span-2'
                  : 'border-slate-200/90 dark:border-slate-800/90'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`px-2.5 py-0.5 rounded text-xs font-semibold border ${
                        isIndustry
                          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-200/70 dark:border-indigo-900/50'
                          : 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/50'
                      }`}
                    >
                      {proj.context[lang]}
                    </span>

                    {proj.client && (
                      <span className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 font-sans">
                        <Building2 className="w-3 h-3 text-slate-400" />
                        <span>{proj.client[lang]}</span>
                      </span>
                    )}
                  </div>

                  <span
                    className={`flex items-center space-x-1 text-xs font-bold font-mono ${
                      isIndustry
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {isIndustry ? (
                      <Briefcase className="w-3.5 h-3.5" />
                    ) : (
                      <Trophy className="w-3.5 h-3.5" />
                    )}
                    <span>{proj.award[lang]}</span>
                  </span>
                </div>

                <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900 dark:text-white font-sans leading-snug">
                  {proj.title[lang]}
                </h3>

                <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2 font-sans">
                  <span className="font-mono">{proj.period}</span>
                  <span>•</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{proj.role[lang]}</span>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  {proj.highlights[lang].map((hl, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5 leading-relaxed">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isIndustry ? 'text-indigo-500' : 'text-emerald-500'
                        }`}
                      />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
