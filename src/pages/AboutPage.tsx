import React, { useState } from 'react';
import { GraduationCap, Target, Compass, Sparkles, Calendar, MapPin, CheckCircle, ShieldCheck, User } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [labImgError, setLabImgError] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Top Banner / Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
          Background & Aspirations
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          About Akok Mayol Akok
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Cybersecurity undergraduate at the University of Juba, South Sudan. Driven by curiosity about how networks operate and how defensive engineering safeguards society.
        </p>
      </div>

      {/* Split: Story & Workspace Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Story */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600 dark:text-sky-400" />
            <span>My Journey Into Cybersecurity</span>
          </h2>

          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {PORTFOLIO_DATA.personal.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Quick core pillars */}
          <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-slate-900/80 border border-blue-100 dark:border-slate-800 space-y-3">
            <h3 className="font-semibold text-xs text-blue-900 dark:text-sky-300 uppercase tracking-wide">
              Core Tenets of My Learning
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Ethical Discipline:</strong> Security knowledge applied exclusively in authorized, legal environments.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Foundations First:</strong> Mastering TCP/IP, Linux internals, and logic before high-level tooling.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Defensive Mindset:</strong> Prioritizing cyber hygiene, least privilege, and secure configuration.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Curiosity & Rigor:</strong> Verifying system behavior through controlled lab experimentation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Student Portrait & Lab Workspace */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
            <div className="aspect-4/3 w-full bg-slate-100 dark:bg-slate-800 relative">
              {!labImgError ? (
                <img
                  src={PORTFOLIO_DATA.personal.labWorkspaceImage}
                  alt="Cybersecurity Study Lab Workspace"
                  referrerPolicy="no-referrer"
                  onError={() => setLabImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                  Cybersecurity Lab Environment
                </div>
              )}
            </div>
            <div className="p-4 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">Continuous Self-Study & Hands-On Practice</span>
              <p className="mt-1">
                Combining university coursework with independent command-line experimentation, protocol packet analysis, and Python scripts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-sky-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            My Mission
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
            &ldquo;{PORTFOLIO_DATA.personal.mission}&rdquo;
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            Guided by responsibility, academic diligence, and commitment to public digital safety.
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-sky-400 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            My Vision
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
            &ldquo;{PORTFOLIO_DATA.personal.vision}&rdquo;
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            Dedicated to helping African organizations and communities defend against rising global cyber threats.
          </p>
        </div>
      </div>

      {/* Educational Journey Timeline */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
            Academic Milestones
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Educational Journey
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Formal schooling and university milestones shaping my technical foundations.
          </p>
        </div>

        <div className="relative border-l-2 border-blue-200 dark:border-slate-800 ml-4 pl-6 space-y-10">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div key={edu.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 dark:bg-sky-400 ring-4 ring-white dark:ring-slate-950" />

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 font-semibold text-blue-600 dark:text-sky-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {edu.degreeOrCertificate}
                  </h3>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {edu.institution}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Key Focus Areas & Outcomes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Qualities Grid */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
            Work Ethic & Mindset
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Personal Qualities
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Attributes that drive my approach to learning, collaboration, and problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.personalQualities.map((qual, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2 hover:border-blue-400 dark:hover:border-sky-500 transition-colors"
            >
              <div className="text-xs font-bold text-blue-600 dark:text-sky-400">
                0{idx + 1}.
              </div>
              <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                {qual.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {qual.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
