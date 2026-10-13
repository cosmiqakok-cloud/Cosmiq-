import React, { useState } from 'react';
import { Code, Shield, Wrench, Search, Info, Check, Terminal, BookOpen, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Cybersecurity', 'Programming', 'Tools & Productivity'];

  const filteredSkills = PORTFOLIO_DATA.skills.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.keyTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return <Shield className="w-4 h-4 text-blue-600 dark:text-sky-400" />;
      case 'Programming':
        return <Code className="w-4 h-4 text-blue-600 dark:text-sky-400" />;
      case 'Tools & Productivity':
        return <Wrench className="w-4 h-4 text-blue-600 dark:text-sky-400" />;
      default:
        return <Layers className="w-4 h-4 text-blue-600 dark:text-sky-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
          Technical Competencies
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Skills & Foundations Matrix
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          An honest, transparent inventory of programming concepts, cybersecurity principles, and developer tools studied as an undergraduate at the University of Juba.
        </p>

        {/* Academic Transparency Note */}
        <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-slate-900/60 border border-blue-200/70 dark:border-slate-800 text-xs text-blue-900 dark:text-sky-300 flex items-start gap-2.5">
          <Info className="w-4 h-4 shrink-0 text-blue-600 dark:text-sky-400 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Authentic Academic Disclosure:</strong> As an undergraduate student, I represent my competencies transparently. Beginner and foundational topics are actively being mastered through coursework and hands-on laboratory exercises without exaggerated claims or fabricated credentials.
          </p>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills or topics..."
            className="w-full sm:w-64 pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-blue-300 dark:hover:border-slate-700 transition-colors"
          >
            <div className="space-y-4">
              {/* Category & Status: unboxed clean metadata */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-medium text-blue-600 dark:text-sky-400">
                  {getCategoryIcon(skill.category)}
                  <span>{skill.category}</span>
                </div>
                <span className="text-[11px] text-slate-400">
                  Level: <strong className="text-slate-700 dark:text-slate-300 font-normal">{skill.level}</strong>
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {skill.name}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {skill.description}
              </p>

              {/* Key topics learned: clean list */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Key Concepts Mastered & Practiced:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {skill.keyTopics.map((topic, i) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-700 dark:text-slate-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom verification footnote */}
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>University Coursework</span>
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" />
                Active Focus
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Lab Tools & CLI Quick Reference */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 space-y-4 font-mono text-xs shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-sky-400" />
            <h3 className="font-bold text-sm text-white">
              Student Security Lab Toolkit & CLI Commands
            </h3>
          </div>
          <span className="text-[11px] text-slate-400 font-sans">
            Hands-on command line foundations
          </span>
        </div>

        <p className="text-slate-400 font-sans leading-relaxed text-xs">
          Essential tools and commands explored in my computer networks and operating systems studies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5">
            <div className="text-sky-400 font-bold">$ ping / traceroute</div>
            <div className="text-[11px] text-slate-400 font-sans">
              ICMP echo requests and packet hop analysis to diagnose latency and routing routes across network gateways.
            </div>
          </div>
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5">
            <div className="text-sky-400 font-bold">$ chmod / chown</div>
            <div className="text-[11px] text-slate-400 font-sans">
              Linux file permission auditing ensuring system configuration adheres to strict least-privilege standards.
            </div>
          </div>
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5">
            <div className="text-sky-400 font-bold">$ ss -tulpn / netstat</div>
            <div className="text-[11px] text-slate-400 font-sans">
              Inspecting open TCP/UDP sockets, identifying listening daemon services, and spotting unauthorized network ports.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
