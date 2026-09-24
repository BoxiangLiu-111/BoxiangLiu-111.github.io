import React from 'react';
import { ArrowUp, Github, Mail, Globe, Heart, ShieldCheck, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface FooterProps {
  lang: 'zh' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  };

  return (
    <footer className="mt-16 py-10 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Academic Affiliation */}
          <div className="space-y-1.5 text-center md:text-left">
            <p className="font-serif font-medium text-slate-800 dark:text-slate-200 text-sm">
              © {new Date().getFullYear()} {PROFILE_DATA.name.zh} (Boxiang Liu). All rights reserved.
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              {lang === 'zh'
                ? '自动化与计算感知学术主页 · 湖南科技大学 · 预计2027年毕业'
                : 'Academic Portfolio in Automation & Computational Perception · HNUST · Class of 2027'}
            </p>

            {/* Direct attribution to cen-jun.com and Zeqing / Jon Barron style */}
            <div className="pt-2 text-xs text-slate-600 dark:text-slate-400 font-sans space-y-0.5">
              <p className="text-slate-500 dark:text-slate-400 font-sans">
                {lang === 'zh' ? '最后更新： 2026年9月。' : 'Last updated: September 2026.'}
              </p>
              <p>
                {lang === 'zh' ? (
                  <>
                    本网站的风格借鉴了{' '}
                    <a
                      href="https://cen-jun.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0077b5] dark:text-blue-400 hover:underline font-medium inline-flex items-center space-x-0.5"
                    >
                      <span>岑军 (https://cen-jun.com/)</span>
                    </a>{' '}
                    的主页风格（致敬其借鉴的{' '}
                    <a
                      href="https://jonbarron.info/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0077b5] dark:text-blue-400 hover:underline font-medium"
                    >
                      泽清 (Jon Barron)
                    </a>{' '}
                    经典学术个人主页设计）。
                  </>
                ) : (
                  <>
                    Website style inspired by{' '}
                    <a
                      href="https://cen-jun.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0077b5] dark:text-blue-400 hover:underline font-medium inline-flex items-center space-x-0.5"
                    >
                      <span>Jun Cen (https://cen-jun.com/)</span>
                    </a>{' '}
                    (acknowledging the classic Jon Barron academic template).
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-1"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              title="Back to top"
              aria-label={lang === 'zh' ? '返回页面顶部' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono">
          <span>Target repo: github.com/BoxiangLiu-111/BoxiangLiu-111.github.io</span>
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Academic Portfolio Verified</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
