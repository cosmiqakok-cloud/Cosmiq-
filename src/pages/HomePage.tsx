import React, { useState } from 'react';
import { Shield, ArrowRight, Terminal, Network, Lock, Eye, BookOpen, User, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { PageId } from '../components/Navbar';
import { CyberCanvas } from '../components/CyberCanvas';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProject: (project: ProjectItem) => void;
  isDark: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProject, isDark }) => {
  const [imgError, setImgError] = useState(false);

  const featuredInterests = [
    {
      icon: Network,
      title: 'Network Security & Protocol Analysis',
      description: 'Understanding packet routing, firewalls, the OSI layers, and diagnosing traffic vulnerabilities.',
    },
    {
      icon: Terminal,
      title: 'Defensive Scripting & Python',
      description: 'Developing automated scripts, input validators, and foundational command-line security tools.',
    },
    {
      icon: Lock,
      title: 'Information Assurance & CIA Triad',
      description: 'Enforcing confidentiality, data integrity verification through cryptographic hashes, and availability controls.',
    },
    {
      icon: Eye,
      title: 'Security Awareness & Threat Analysis',
      description: 'Identifying social engineering schemes, phishing indicators, and advocating for cyber hygiene practices.',
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-linear-to-b from-blue-50/50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <CyberCanvas isDark={isDark} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Typographic Anchor */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed metadata kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-sky-400">
                <span>{PORTFOLIO_DATA.personal.university}</span>
                <span aria-hidden="true">·</span>
                <span>{PORTFOLIO_DATA.personal.department}</span>
                <span aria-hidden="true">·</span>
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
                Securing the Digital World, <span className="text-blue-600 dark:text-sky-400">One Step at a Time.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {PORTFOLIO_DATA.personal.intro}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-xs transition-all hover:shadow-md inline-flex items-center gap-2"
                >
                  <span>Explore My Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Academic quote highlight */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2 max-w-xl">
                <Shield className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span>
                  &ldquo;Building secure, reliable, and trustworthy technology systems through continuous learning and disciplined practice.&rdquo;
                </span>
              </div>
            </div>

            {/* Right: Portrait & Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                  {/* Photo container */}
                  <div className="aspect-square w-full relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    {!imgError ? (
                      <img
                        src={PORTFOLIO_DATA.personal.avatarImage}
                        alt="Akok Mayol Akok — Cybersecurity Student at University of Juba"
                        referrerPolicy="no-referrer"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-center transition-transform hover:scale-102 duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-linear-to-br from-slate-900 to-blue-950 text-white">
                        <div className="w-20 h-20 rounded-full bg-blue-600/30 flex items-center justify-center mb-3 border border-sky-400/40">
                          <User className="w-10 h-10 text-sky-400" />
                        </div>
                        <h3 className="font-bold text-lg">{PORTFOLIO_DATA.personal.name}</h3>
                        <p className="text-xs text-slate-400 mt-1">{PORTFOLIO_DATA.personal.title}</p>
                      </div>
                    )}
                  </div>

                  {/* Profile info footer */}
                  <div className="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                          {PORTFOLIO_DATA.personal.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {PORTFOLIO_DATA.personal.title}
                        </p>
                      </div>
                      <span className="text-[11px] font-medium text-blue-600 dark:text-sky-400">
                        {PORTFOLIO_DATA.personal.university}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Trust Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Academic Institution</div>
            <div className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">University of Juba</div>
            <div className="text-[11px] text-slate-500">Cybersecurity Dept.</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Prior Education</div>
            <div className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">Juba Diplomatic</div>
            <div className="text-[11px] text-slate-500">Secondary Cert (2022–2023)</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Core Technical Focus</div>
            <div className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">Network & Scripting</div>
            <div className="text-[11px] text-slate-500">Python, C, Linux, Protocols</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Professional Goal</div>
            <div className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">Security Analyst</div>
            <div className="text-[11px] text-slate-500">Defensive Operations</div>
          </div>
        </div>
      </section>

      {/* Featured Cybersecurity Interests */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
            Academic Focus Areas
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Core Cybersecurity Interests
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            My studies focus on understanding how computer systems and networks interact, where vulnerabilities arise, and how to defend systems responsibly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredInterests.map((interest, idx) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 hover:border-blue-400 dark:hover:border-sky-500 transition-colors shadow-2xs"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-sky-400 flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                  {interest.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Selected Projects Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
              Hands-On Work
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Selected Portfolio Projects
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mt-1">
              Practical software and security tools developed to reinforce programming logic, defensive thinking, and system security.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="text-xs font-semibold text-blue-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                {/* Meta unboxed header */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{project.status}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.technologies[0]}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech list as clean unboxed text */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < Math.min(project.technologies.length, 3) - 1 && <span>·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-5 mt-4 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  type="button"
                  onClick={() => onOpenProject(project)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  View Details
                </button>
                {project.liveDemoId && (
                  <button
                    type="button"
                    onClick={() => onOpenProject(project)}
                    className="px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Try Demo</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-12 bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 text-white border border-slate-800 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              Let&apos;s Connect
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Interested in Academic Collaboration or Discussing Digital Security?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              I am always eager to connect with university lecturers, cybersecurity mentors, fellow students, and technology organizations. Feel free to reach out.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <span>Send a Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.email}
                className="px-5 py-2.5 text-xs font-medium text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
