import React, { useState } from 'react';
import { Calculator, Globe, BookOpen, ShieldCheck, Terminal, ExternalLink, Github, Sparkles, Code2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { PasswordCheckerDemo } from '../components/demos/PasswordCheckerDemo';

interface ProjectsPageProps {
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenProject }) => {
  const [filter, setFilter] = useState<'All' | 'Security' | 'Programming' | 'Web & Notes'>('All');

  const getProjectIcon = (name: ProjectItem['iconName']) => {
    switch (name) {
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-blue-600 dark:text-sky-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-600 dark:text-sky-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-600 dark:text-sky-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-sky-400" />;
      default:
        return <Terminal className="w-6 h-6 text-blue-600 dark:text-sky-400" />;
    }
  };

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Security') return p.technologies.some((t) => t.includes('Security') || t.includes('NIST') || t.includes('Information'));
    if (filter === 'Programming') return p.technologies.some((t) => t.includes('Python') || t.includes('C'));
    if (filter === 'Web & Notes') return p.technologies.some((t) => t.includes('React') || t.includes('Markdown') || t.includes('HTML'));
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
          Student Coursework & Practical Tools
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Cybersecurity & Software Projects
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Real demonstration projects, code exercises, and educational utilities developed to solidify practical cybersecurity and programming competencies.
        </p>
      </div>

      {/* Featured Interactive Spotlight: Password Strength Inspector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>Interactive Spotlight: Password Strength & NIST Inspector</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Test candidate credentials in real-time below using local entropy calculations.
            </p>
          </div>
        </div>
        <PasswordCheckerDemo />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 overflow-x-auto">
        {(['All', 'Security', 'Programming', 'Web & Notes'] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-blue-300 dark:hover:border-slate-700 transition-all space-y-6"
          >
            <div className="space-y-4">
              {/* Header with Icon & Meta */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  {getProjectIcon(project.iconName)}
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">
                    {project.status}
                  </span>
                  <span className="text-[11px] text-blue-600 dark:text-sky-400 font-medium">
                    University Artifact
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                  {project.shortDescription}
                </p>
              </div>

              {/* Technologies unboxed per zero-pill rule */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Technologies Used:
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {project.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="font-medium text-slate-800 dark:text-slate-200">{tech}</span>
                      {i < project.technologies.length - 1 && (
                        <span className="text-slate-300 dark:text-slate-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Security takeaway callout */}
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-slate-100">Security Insight: </strong>
                {project.securityLesson}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenProject(project)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  {project.liveDemoId && project.liveDemoId !== 'portfolio' ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Launch Interactive Demo</span>
                    </>
                  ) : (
                    <span>View Project Details</span>
                  )}
                </button>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
