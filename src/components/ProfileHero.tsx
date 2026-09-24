import React, { useState } from 'react';
import { Mail, Github, ExternalLink, GraduationCap, MapPin, Building2, Check, BookOpen, ShieldCheck, Copy } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface ProfileHeroProps {
  lang: 'zh' | 'en';
}

const DEFAULT_AVATAR_SRC = '/profile-photo.webp';
const DEFAULT_COVER_SRC = '/campus-photo.webp';

export const ProfileHero: React.FC<ProfileHeroProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative w-full" aria-labelledby="profile-heading">
      {/* Scenic Campus Cover Banner */}
      <div
        id="profile-cover"
        className="relative w-full h-[320px] sm:h-[400px] overflow-hidden"
        aria-hidden="true"
        style={{
          backgroundImage: `url('${DEFAULT_COVER_SRC}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55 pointer-events-none" />
      </div>

      {/* Floating Namecard */}
      <div className="max-w-[880px] mx-auto px-4 -mt-24 sm:-mt-28 relative z-20 mb-8">
        <div
          id="profile-namecard"
          className="rounded-[25px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 transition-all hover:shadow-3xl"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Left: Profile photo */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={DEFAULT_AVATAR_SRC}
                  alt={PROFILE_DATA.name.en}
                  width="176"
                  height="176"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right: Contact & Identity Info */}
            <div className="flex-1 text-center sm:text-left space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 justify-center sm:justify-start">
                  <h1 id="profile-heading" className={`text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight ${lang === 'zh' ? 'font-serif' : 'font-sans'}`}>
                    {PROFILE_DATA.name[lang]}
                  </h1>
                  <span className={`text-lg text-slate-600 dark:text-slate-400 ${lang === 'zh' ? 'font-sans' : 'font-serif'}`}>
                    ({lang === 'zh' ? 'Boxiang Liu' : '刘博翔'})
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 break-words">
                  {PROFILE_DATA.institution[lang]}
                </div>
                <div className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-sans mt-0.5 break-words">
                  {PROFILE_DATA.laboratory[lang]}
                </div>
              </div>

              {/* Email with copy button */}
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>boxiangliu17 [at] gmail.com</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title="Copy email address"
                  aria-label={lang === 'zh' ? '复制邮箱地址' : 'Copy email address'}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Social Link Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                {/* Google Scholar - Active Link */}
                <a
                  href={PROFILE_DATA.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 hover:bg-blue-100/70 dark:hover:bg-blue-900/50 text-xs font-medium transition-all shadow-sm group"
                  title="View Google Scholar Profile"
                >
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Google Scholar</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>

                {/* GitHub */}
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium transition-all shadow-sm"
                >
                  <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                  <span>GitHub</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>

                {/* ORCID */}
                <a
                  href={PROFILE_DATA.orcid}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-medium hover:bg-emerald-100/60 transition-all shadow-sm"
                >
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">iD</span>
                  <span>ORCID</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
