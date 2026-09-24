import React from 'react';
import { UserCheck, Sparkles, MapPin, Building, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface AboutSectionProps {
  lang: 'zh' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const bioText = PROFILE_DATA.bio[lang];

  // Helper to format *italic journal names* gracefully
  const renderBioWithItalics = (text: string) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        const title = part.slice(1, -1);
        return (
          <em key={idx} className="font-sans italic font-semibold text-slate-900 dark:text-white px-0.5">
            {title}
          </em>
        );
      }
      return part;
    });
  };

  return (
    <section id="bio" className="mb-12 relative">
      <span id="about" className="absolute -top-24" />
      <h2 className="flex items-center space-x-2.5 text-[22px] sm:text-[24px] font-normal text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2 mb-4 font-serif">
        <UserCheck className="w-5 h-5 text-[#0077b5]" />
        <span>{lang === 'zh' ? '个人简介 (About)' : 'About'}</span>
      </h2>

      <div className="bio-body text-[15px] sm:text-[16px] leading-[1.8] text-slate-700 dark:text-slate-300 font-sans space-y-4">
        <p className="text-justify font-sans leading-relaxed">
          {renderBioWithItalics(bioText)}
        </p>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center space-x-1.5">
              <strong className="text-slate-800 dark:text-slate-200">{lang === 'zh' ? '在读专业：' : 'Program: '}</strong>
              <span>{lang === 'zh' ? '自动化工学学士（预计2027年6月毕业）' : 'B.Eng. in Automation (Expected June 2027)'}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <strong className="text-slate-800 dark:text-slate-200">{lang === 'zh' ? '实验室团队：' : 'Laboratory: '}</strong>
              <span>海洋智能探测与控制团队 / 复杂系统智能控制与维护重点实验室</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
            <span className="flex items-center space-x-1.5">
              <strong className="text-slate-800 dark:text-slate-200">{lang === 'zh' ? '学业导师：' : 'Undergraduate Advisor: '}</strong>
              <span className="text-blue-600 dark:text-blue-400 font-medium">陈超洋 教授 (Prof. Chaoyang Chen, IET Fellow)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <strong className="text-slate-800 dark:text-slate-200">{lang === 'zh' ? '科研导师：' : 'Research Advisor: '}</strong>
              <span className="text-blue-600 dark:text-blue-400 font-medium">梁思奇 博士 (Dr. Siqi Liang)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
