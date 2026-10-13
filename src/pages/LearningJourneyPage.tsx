import React, { useState, useEffect } from 'react';
import { Route, CheckCircle2, Clock, Calendar, Plus, RotateCcw, BookOpen, Sparkles, Award, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA, StudyMilestone } from '../data/portfolioData';

export const LearningJourneyPage: React.FC = () => {
  const [milestones, setMilestones] = useState<StudyMilestone[]>(() => {
    try {
      const saved = localStorage.getItem('akok_study_milestones');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return PORTFOLIO_DATA.defaultMilestones;
  });

  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Networking');

  useEffect(() => {
    try {
      localStorage.setItem('akok_study_milestones', JSON.stringify(milestones));
    } catch {
      // ignore
    }
  }, [milestones]);

  const toggleMilestone = (id: string) => {
    setMilestones((prev) =>
      prev.map((m) => (m.id === id ? { ...m, completed: !m.completed } : m))
    );
  };

  const handleAddMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newM: StudyMilestone = {
      id: `m_${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      completed: false,
      notes: 'Added from personal study tracker',
    };

    setMilestones((prev) => [newM, ...prev]);
    setNewTitle('');
  };

  const resetMilestones = () => {
    setMilestones(PORTFOLIO_DATA.defaultMilestones);
  };

  const completedCount = milestones.filter((m) => m.completed).length;
  const progressPercent = Math.round((completedCount / (milestones.length || 1)) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
          Continuous Development
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Cybersecurity Learning Journey
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Tracking my progression from foundational computer literacy to intermediate networking, Python security scripting, and future defensive engineering aspirations.
        </p>
      </div>

      {/* 3-Stage Roadmap */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Route className="w-5 h-5 text-blue-600 dark:text-sky-400" />
            <span>Development Roadmap & Progression Stages</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Structured in three strategic milestones reflecting academic and career progression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.roadmapStages.map((stage, idx) => (
            <div
              key={stage.stage}
              className={`p-6 rounded-2xl border transition-all space-y-4 flex flex-col justify-between ${
                stage.current
                  ? 'bg-blue-50/50 dark:bg-slate-900 border-blue-500/80 shadow-md ring-1 ring-blue-500/30'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xs'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-400 uppercase tracking-wider">
                    Stage 0{idx + 1}
                  </span>
                  <span
                    className={`font-semibold text-xs ${
                      stage.current
                        ? 'text-blue-600 dark:text-sky-400'
                        : stage.completed
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-400'
                    }`}
                  >
                    {stage.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {stage.stage}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stage.summary}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Curriculum & Focus:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {stage.focusAreas.map((area, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-500 dark:text-sky-400 font-bold">•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500">
                {stage.completed ? 'Foundation established' : stage.current ? 'Under active study' : 'Target future milestone'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Topics Matrix */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Core Curriculum Topics & Coverage
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Detailed breakdown of specific academic subjects and practical domains currently in progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.learningTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-blue-600 dark:text-sky-400">
                  {topic.stage}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  Status: <strong className="text-slate-800 dark:text-slate-200 font-medium">{topic.status}</strong>
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Coursework & Lab Familiarity</span>
                  <span className="font-mono">{topic.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-sky-400 rounded-full transition-all duration-300"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>
              </div>

              {/* Topics Covered: clean list */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Subtopics Practiced:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {topic.topicsCovered.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Personal Study Milestones Checklist */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-sky-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Interactive Study Tracker & Milestones
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Click checkboxes as you complete tasks. Your progress automatically saves locally in your browser.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-900 dark:text-white">
                {completedCount} of {milestones.length} Completed
              </div>
              <div className="text-[11px] text-blue-600 dark:text-sky-400 font-mono">
                {progressPercent}% Tracked
              </div>
            </div>
            <button
              type="button"
              onClick={resetMilestones}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="Reset to default milestones"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Milestone Items */}
        <div className="space-y-2.5">
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              onClick={() => toggleMilestone(milestone.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                milestone.completed
                  ? 'bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800/80 opacity-80'
                  : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-sky-500'
              }`}
            >
              <input
                type="checkbox"
                checked={milestone.completed}
                onChange={() => {}}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 mt-0.5 pointer-events-none cursor-pointer"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-medium ${
                      milestone.completed
                        ? 'line-through text-slate-400 dark:text-slate-500'
                        : 'text-slate-900 dark:text-white font-semibold'
                    }`}
                  >
                    {milestone.title}
                  </span>
                  <span className="text-[10px] text-blue-600 dark:text-sky-400 font-medium">
                    · {milestone.category}
                  </span>
                </div>
                {milestone.notes && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {milestone.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Personal Milestone Form */}
        <form onSubmit={handleAddMilestone} className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Add new study goal or lab milestone..."
            className="flex-1 px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white"
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none"
          >
            <option value="Networking">Networking</option>
            <option value="Programming">Programming</option>
            <option value="Security Scripting">Security Scripting</option>
            <option value="Systems">Systems</option>
            <option value="Cryptography">Cryptography</option>
            <option value="Certifications">Certifications</option>
          </select>
          <button
            type="submit"
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Goal</span>
          </button>
        </form>
      </div>
    </div>
  );
};
