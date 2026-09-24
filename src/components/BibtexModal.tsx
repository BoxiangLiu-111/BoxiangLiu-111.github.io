import React, { useState } from 'react';
import { X, Check, Copy } from 'lucide-react';
import { useModalAccessibility } from '../hooks/useModalAccessibility';

interface BibtexModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  bibtex: string;
  lang: 'zh' | 'en';
}

export const BibtexModal: React.FC<BibtexModalProps> = ({
  isOpen,
  onClose,
  title,
  bibtex,
  lang
}) => {
  const [copied, setCopied] = useState(false);
  const dialogRef = useModalAccessibility(isOpen, onClose);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bibtex-dialog-title"
        tabIndex={-1}
        className="relative my-auto w-full max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex min-w-0 items-center space-x-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 font-semibold">
              BibTeX
            </span>
            <h3 id="bibtex-dialog-title" className="min-w-0 font-serif font-medium text-slate-800 dark:text-slate-200 text-sm line-clamp-1 max-w-md">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="min-w-0 p-6">
          <div className="relative">
            <pre className="p-4 bg-slate-950 text-slate-100 rounded-lg text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800 shadow-inner max-h-72">
              <code>{bibtex}</code>
            </pre>
          <button
              type="button"
              onClick={handleCopy}
              className="absolute top-3 right-3 flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all shadow-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{lang === 'zh' ? '已复制' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '一键复制' : 'Copy BibTeX'}</span>
                </>
              )}
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 text-center">
            {lang === 'zh'
              ? '请在学术论文中规范引用，欢迎交流与合作。'
              : 'Feel free to cite this paper in your academic work. Citations and collaborations are warmly welcomed.'}
          </p>
        </div>
      </div>
    </div>
  );
};
