import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, Shield, Code, Check } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { PasswordCheckerDemo } from './demos/PasswordCheckerDemo';
import { PythonCalculatorDemo } from './demos/PythonCalculatorDemo';
import { NotesViewerDemo } from './demos/NotesViewerDemo';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  activeTab?: 'details' | 'demo';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [tab, setTab] = React.useState<'details' | 'demo'>('details');

  useEffect(() => {
    // Reset tab to demo if has liveDemoId, otherwise details
    if (project?.liveDemoId && project.liveDemoId !== 'portfolio') {
      setTab('demo');
    } else {
      setTab('details');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>{project.status}</span>
              <span aria-hidden="true">·</span>
              <span>University Project</span>
            </div>
            <h3 id="modal-project-title" className="text-xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers if live demo exists */}
        {project.liveDemoId && project.liveDemoId !== 'portfolio' && (
          <div className="flex px-6 pt-3 border-b border-slate-200 dark:border-slate-800 gap-2 shrink-0 bg-slate-50 dark:bg-slate-950/40">
            <button
              type="button"
              onClick={() => setTab('demo')}
              className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 border-b-2 ${
                tab === 'demo'
                  ? 'border-blue-600 text-blue-600 dark:text-sky-400 bg-white dark:bg-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Demo
            </button>
            <button
              type="button"
              onClick={() => setTab('details')}
              className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 border-b-2 ${
                tab === 'details'
                  ? 'border-blue-600 text-blue-600 dark:text-sky-400 bg-white dark:bg-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              Project Details & Security Lessons
            </button>
          </div>
        )}

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {tab === 'demo' && project.liveDemoId && (
            <div>
              {project.liveDemoId === 'password-checker' && <PasswordCheckerDemo />}
              {project.liveDemoId === 'calculator' && <PythonCalculatorDemo />}
              {project.liveDemoId === 'notes' && <NotesViewerDemo />}
            </div>
          )}

          {tab === 'details' && (
            <div className="space-y-5">
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Technologies: unboxed text with separators per zero-pill discipline */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Technologies & Concepts
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  {project.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="font-medium text-slate-900 dark:text-slate-100">{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Capabilities
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security takeaway */}
              <div className="p-4 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 rounded-xl text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-blue-900 dark:text-sky-300">
                  <Shield className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>Security & Defensive Takeaway</span>
                </div>
                <p className="text-blue-800 dark:text-slate-300 leading-relaxed">
                  {project.securityLesson}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/60 shrink-0">
          <div className="text-xs text-slate-500">
            {project.status === 'Completed' ? 'Completed & verified' : 'University coursework artifact'}
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
