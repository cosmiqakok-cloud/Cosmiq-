import React from 'react';
import { Shield, Github, Linkedin, Mail, Twitter, ArrowUp, MapPin, GraduationCap, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-sm text-slate-900 dark:text-white">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md leading-relaxed text-xs">
              {PORTFOLIO_DATA.personal.title} at {PORTFOLIO_DATA.personal.university}. Committed to ethical digital security, disciplined network defense, and continuous learning.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                <span>{PORTFOLIO_DATA.personal.department} Dept.</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('skills')}
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  Technical Skills
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  Portfolio Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('journey')}
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  Learning Journey
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Resources */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.email}
                className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Network</span>
              </a>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenGuide}
                  className="text-xs text-blue-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  Student Customization Handbook →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. University of Juba Cybersecurity Portfolio.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors p-1.5 rounded-md hover:bg-slate-200/50 dark:hover:bg-slate-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
