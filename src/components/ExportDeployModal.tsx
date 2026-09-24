import React, { useState } from 'react';
import { X, Check, Copy, Download, Github, ExternalLink, Terminal, ShieldCheck, Zap, Workflow } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { useModalAccessibility } from '../hooks/useModalAccessibility';

interface ExportDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
}

export const ExportDeployModal: React.FC<ExportDeployModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [copiedActionCmd, setCopiedActionCmd] = useState(false);
  const [activeTab, setActiveTab] = useState<'actions' | 'manual'>('actions');
  const dialogRef = useModalAccessibility(isOpen, onClose);

  if (!isOpen) return null;

  const actionsGitCommands = `# 1. 在本地克隆或关联你的 GitHub 仓库
git clone https://github.com/BoxiangLiu-111/BoxiangLiu-111.github.io.git
cd BoxiangLiu-111.github.io

# 2. 将本项目所有源代码提交并推送到 main 分支
git add .
git commit -m "feat: setup academic homepage with GitHub Actions"
git branch -M main
git push -u origin main

# 3. 前往 GitHub 仓库网页端启用 GitHub Actions 部署：
# 点击进入: Settings -> Pages -> Build and deployment
# 将 "Source" 下拉菜单切换为: [ GitHub Actions ]
# 保存后，GitHub 会自动读取 .github/workflows/deploy.yml 并在 1 分钟内完成全自动构建上线！`;

  const manualGitCommands = `# 手动构建并直接推送 dist/ 静态产物方式：
pnpm install --frozen-lockfile
pnpm run build
cd dist
git init
git add -A
git commit -m "deploy"
git branch -M gh-pages
git push -f https://github.com/BoxiangLiu-111/BoxiangLiu-111.github.io.git gh-pages

# 前往 Settings -> Pages 选择 Deploy from a branch -> gh-pages 分支即可`;

  const handleCopyCmd = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedActionCmd(true);
    setTimeout(() => setCopiedActionCmd(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="deploy-dialog-title"
        tabIndex={-1}
        className="relative w-full max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center space-x-2">
            <Github className="w-5 h-5 text-slate-800 dark:text-slate-200" />
            <h3 id="deploy-dialog-title" className="font-semibold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
              {lang === 'zh' ? 'GitHub Pages 自动部署与发布指南' : 'GitHub Pages CI/CD Deployment Guide'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg transition-colors cursor-pointer"
            aria-label={lang === 'zh' ? '关闭部署指南' : 'Close deployment guide'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-sm text-slate-700 dark:text-slate-300">
          {/* Target Info */}
          <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/50 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-x-2 text-xs font-mono">
              <span className="text-blue-700 dark:text-blue-300 font-semibold">GitHub User:</span>
              <span className="text-slate-800 dark:text-slate-200 font-bold">BoxiangLiu-111</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-x-2 text-xs font-mono">
              <span className="text-blue-700 dark:text-blue-300 font-semibold">Target Repository:</span>
              <span className="text-slate-800 dark:text-slate-200 font-bold">BoxiangLiu-111.github.io</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-x-2 text-xs font-mono">
              <span className="text-blue-700 dark:text-blue-300 font-semibold">Live URL:</span>
              <a
                href="https://BoxiangLiu-111.github.io"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1 font-bold"
              >
                <span>https://BoxiangLiu-111.github.io</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* One-click Download ZIP */}
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <div className="font-semibold text-xs text-slate-800 dark:text-slate-100 flex items-center space-x-1.5">
                <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{lang === 'zh' ? '完整工程源码压缩包 (ZIP)' : 'Full Source Code Archive (ZIP)'}</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                {lang === 'zh' ? '包含全部 React+Vite 源码、CI/CD 自动化流水线与数据文件，解压即用' : 'Contains complete source code, GitHub Actions workflow, and assets'}
              </p>
            </div>
            <a
              href={`${PROFILE_DATA.targetRepo}/archive/refs/heads/main.zip`}
              download="BoxiangLiu-Academic-Homepage.zip"
              className="shrink-0 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '直接下载 ZIP 压缩包' : 'Download ZIP'}</span>
            </a>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <button
              type="button"
              onClick={() => setActiveTab('actions')}
              aria-pressed={activeTab === 'actions'}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                activeTab === 'actions'
                  ? 'bg-[#0077b5] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '方式 1：GitHub Actions 自动化部署 (已配置·强烈推荐)' : 'Method 1: GitHub Actions CI/CD (Recommended)'}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('manual')}
              aria-pressed={activeTab === 'manual'}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                activeTab === 'manual'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '方式 2：纯静态分支手动推送' : 'Method 2: Manual dist push'}</span>
            </button>
          </div>

          {/* Active Tab Content */}
          {activeTab === 'actions' ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '流水线文件已生成：.github/workflows/deploy.yml' : 'Workflow ready at .github/workflows/deploy.yml'}</span>
                </span>
                <span className="text-slate-400 font-mono text-[11px]">Auto build on git push</span>
              </div>

              <div className="relative">
                <pre className="p-4 bg-slate-950 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800 shadow-inner max-h-60">
                  <code>{actionsGitCommands}</code>
                </pre>
                <button
                  type="button"
                  onClick={() => handleCopyCmd(actionsGitCommands)}
                  className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center space-x-1 border border-slate-700 transition-colors cursor-pointer"
                >
                  {copiedActionCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedActionCmd ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200">
                <strong>{lang === 'zh' ? '关键操作提示：' : 'Key Setting Tip: '}</strong>
                {lang === 'zh'
                  ? '推送代码后，仅需到 GitHub 仓库 -> Settings -> Pages -> 将 "Build and deployment" 下的 Source 改为 "GitHub Actions"，之后每次更新代码均会自动触发打包发布，无需任何手动操作！'
                  : 'After pushing code, go to GitHub repo -> Settings -> Pages -> change Build and deployment Source to "GitHub Actions". All future pushes will auto-build and deploy!'}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="relative">
                <pre className="p-4 bg-slate-950 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800 shadow-inner max-h-60">
                  <code>{manualGitCommands}</code>
                </pre>
                <button
                  type="button"
                  onClick={() => handleCopyCmd(manualGitCommands)}
                  className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center space-x-1 border border-slate-700 transition-colors cursor-pointer"
                >
                  {copiedActionCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedActionCmd ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
