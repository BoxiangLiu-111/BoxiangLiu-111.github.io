import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, ExternalLink, GraduationCap, MapPin, Building2, Upload, RotateCcw, Check, Sparkles, BookOpen, ShieldCheck, Camera, Copy, Image as ImageIcon } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface ProfileHeroProps {
  lang: 'zh' | 'en';
  onOpenDeploy: () => void;
}

const DEFAULT_AVATAR_SRC = '/profile-photo.webp';
const DEFAULT_COVER_SRC = '/campus-photo.webp';

export const ProfileHero: React.FC<ProfileHeroProps> = ({ lang, onOpenDeploy }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState<string>(DEFAULT_AVATAR_SRC);
  const [coverSrc, setCoverSrc] = useState<string>(DEFAULT_COVER_SRC);
  const [isAvatarDragOver, setIsAvatarDragOver] = useState(false);
  const [isCoverDragOver, setIsCoverDragOver] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 1. Check custom avatar from localStorage
    const savedAvatar = localStorage.getItem('boxiang_custom_avatar');
    if (savedAvatar) {
      setAvatarSrc(savedAvatar);
    }

    // 2. Check custom cover from localStorage
    const savedCover = localStorage.getItem('boxiang_custom_cover');
    if (savedCover) {
      setCoverSrc(savedCover);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const showNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3000);
  };

  const readFileAsDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error ?? new Error('Unable to read image'));
      reader.readAsDataURL(file);
    });

  const optimizeImageForStorage = (file: File, maxDimension: number, maxBytes: number, maxDataUrlChars: number, quality: number) =>
    new Promise<string>((resolve, reject) => {
      if (file.size <= maxBytes) {
        readFileAsDataUrl(file)
          .then((result) => result.length <= maxDataUrlChars
            ? resolve(result)
            : reject(new Error('Image exceeds browser storage limit')))
          .catch(reject);
        return;
      }

      if (file.type === 'image/svg+xml' || file.type === 'image/gif') {
        reject(new Error('Image exceeds browser storage limit'));
        return;
      }

      const objectUrl = URL.createObjectURL(file);
      const image = new Image();
      image.onload = () => {
        const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        const context = canvas.getContext('2d');

        if (!context) {
          URL.revokeObjectURL(objectUrl);
          reject(new Error('Unable to process image'));
          return;
        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(objectUrl);
        const result = canvas.toDataURL(file.type === 'image/png' || file.type === 'image/webp' ? 'image/webp' : 'image/jpeg', quality);
        if (result.length > maxDataUrlChars) {
          reject(new Error('Image exceeds browser storage limit'));
          return;
        }
        resolve(result);
      };
      image.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error('Unable to decode image'));
      };
      image.src = objectUrl;
    });

  // Avatar file handling
  const processAvatar = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      showNotice(lang === 'zh' ? '请选择图片文件。' : 'Please choose an image file.');
      return;
    }

    try {
      const result = await optimizeImageForStorage(file, 640, 600 * 1024, 800_000, 0.88);
      localStorage.setItem('boxiang_custom_avatar', result);
      setAvatarSrc(result);
      showNotice(lang === 'zh' ? '证件照头像更新成功！' : 'Avatar updated!');
    } catch {
      showNotice(lang === 'zh' ? '图片过大或浏览器存储空间不足，请更换图片。' : 'Image is too large or browser storage is full.');
    }
  };

  // Cover image file handling
  const processCover = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      showNotice(lang === 'zh' ? '请选择图片文件。' : 'Please choose an image file.');
      return;
    }

    try {
      const result = await optimizeImageForStorage(file, 1800, 1.8 * 1024 * 1024, 2_500_000, 0.82);
      localStorage.setItem('boxiang_custom_cover', result);
      setCoverSrc(result);
      showNotice(lang === 'zh' ? '学校背景图已成功切换！' : 'Campus cover updated!');
    } catch {
      showNotice(lang === 'zh' ? '图片过大或浏览器存储空间不足，请更换图片。' : 'Image is too large or browser storage is full.');
    }
  };

  const handleResetAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('boxiang_custom_avatar');
    setAvatarSrc(DEFAULT_AVATAR_SRC);
    showNotice(lang === 'zh' ? '已重置为默认头像' : 'Reset avatar');
  };

  const handleResetCover = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('boxiang_custom_cover');
    setCoverSrc(DEFAULT_COVER_SRC);
    showNotice(lang === 'zh' ? '已重置为默认背景' : 'Reset cover');
  };

  return (
    <section className="relative w-full" aria-labelledby="profile-heading">
      {/* Scenic Campus Cover Banner */}
      <div
        id="profile-cover"
        className={`relative w-full h-[320px] sm:h-[400px] overflow-hidden transition-all group ${
          isCoverDragOver ? 'ring-4 ring-blue-500 scale-[1.01]' : ''
        }`}
        style={{
          backgroundImage: `url('${coverSrc}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat'
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsCoverDragOver(true);
        }}
        onDragLeave={() => setIsCoverDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsCoverDragOver(false);
          const file = e.dataTransfer.files?.[0];
          if (file) processCover(file);
        }}
      >
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55 pointer-events-none" />

        {/* Campus Landmark Label on Bottom-right */}
        <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs font-serif shadow-sm pointer-events-none">
          <span>{lang === 'zh' ? '湖南科技大学 · 逸夫教学楼' : 'Hunan Univ. of Science and Technology · Yifu Building'}</span>
        </div>

        {/* Top-right Actions on Cover Banner */}
        <div className="absolute top-4 right-4 flex items-center space-x-2 z-20">
          {/* Cover Upload / Switch Button */}
          <input
            type="file"
            ref={coverInputRef}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) processCover(file);
            }}
            accept="image/*"
            aria-label={lang === 'zh' ? '上传学校背景图' : 'Upload campus cover'}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => coverInputRef.current?.click()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/30 text-white text-xs font-medium shadow-md transition-all hover:scale-105"
            title={lang === 'zh' ? '点击或将图片拖拽至此更换学校背景图' : 'Click or drop to replace campus cover'}
            aria-label={lang === 'zh' ? '更换学校背景图' : 'Change campus cover'}
          >
            <ImageIcon className="w-3.5 h-3.5 text-blue-300" />
            <span>{lang === 'zh' ? '更换学校背景图' : 'Change Cover'}</span>
          </button>

          {coverSrc !== DEFAULT_COVER_SRC && (
            <button
              type="button"
              onClick={handleResetCover}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/30 text-white text-xs transition-colors"
              title={lang === 'zh' ? '恢复默认背景' : 'Reset cover'}
              aria-label={lang === 'zh' ? '恢复默认背景' : 'Reset campus cover'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Floating Toast Notification */}
        {notice && (
          <div role="status" aria-live="polite" className="absolute top-16 right-4 z-30 animate-fade-in flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-medium shadow-lg">
            <Check className="w-4 h-4" />
            <span>{notice}</span>
          </div>
        )}
      </div>

      {/* Floating Namecard */}
      <div className="max-w-[880px] mx-auto px-4 -mt-24 sm:-mt-28 relative z-20 mb-8">
        <div
          id="profile-namecard"
          className="rounded-[25px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 transition-all hover:shadow-3xl"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Left: Avatar with interactive photo replace */}
            <div className="flex flex-col items-center shrink-0">
              <div
                className={`relative group w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl cursor-pointer bg-slate-100 dark:bg-slate-800 transition-all ${
                  isAvatarDragOver ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-[1.02]'
                }`}
                role="button"
                tabIndex={0}
                onClick={() => avatarInputRef.current?.click()}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    avatarInputRef.current?.click();
                  }
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsAvatarDragOver(true);
                }}
                onDragLeave={() => setIsAvatarDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsAvatarDragOver(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) processAvatar(file);
                }}
                title={lang === 'zh' ? '点击或拖拽照片替换头像' : 'Click or drop your photo to update avatar'}
                aria-label={lang === 'zh' ? '更换头像' : 'Change profile photo'}
              >
                <img
                  src={avatarSrc}
                  alt={PROFILE_DATA.name.en}
                  width="176"
                  height="176"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                  onError={() => setAvatarSrc('/avatar.svg')}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-2">
                  <Camera className="w-6 h-6 mb-1 text-blue-400" />
                  <span className="text-[11px] font-medium leading-tight">
                    {lang === 'zh' ? '点击或拖入照片' : 'Click / Drop Photo'}
                  </span>
                  <span className="text-[9px] text-white/70 mt-0.5">
                    {lang === 'zh' ? '支持上传证件照' : 'Upload ID photo'}
                  </span>
                </div>
              </div>

              {/* Reset avatar option if custom photo is loaded */}
              {avatarSrc !== DEFAULT_AVATAR_SRC && (
                <button
                  type="button"
                  onClick={handleResetAvatar}
                  className="mt-2 text-[11px] text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center space-x-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{lang === 'zh' ? '恢复默认照片' : 'Reset avatar'}</span>
                </button>
              )}

              <input
                type="file"
                ref={avatarInputRef}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) processAvatar(file);
                }}
                accept="image/*"
                aria-label={lang === 'zh' ? '上传头像' : 'Upload profile photo'}
                className="hidden"
              />
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
