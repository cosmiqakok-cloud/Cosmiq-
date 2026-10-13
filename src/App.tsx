import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { LearningJourneyPage } from './pages/LearningJourneyPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { CustomizationGuideModal } from './components/CustomizationGuideModal';
import { ProjectItem, PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('akok_portfolio_theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Page Routing state
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    try {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'about', 'skills', 'projects', 'journey', 'contact'].includes(hash)) {
        return hash as PageId;
      }
    } catch {
      // default
    }
    return 'home';
  });

  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Apply theme class to document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('akok_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('akok_portfolio_theme', 'light');
    }
  }, [isDark]);

  // Sync hash routing with back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'about', 'skills', 'projects', 'journey', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProject={(project) => setSelectedProject(project)}
            isDark={isDark}
          />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'skills' && <SkillsPage />}
        {currentPage === 'projects' && (
          <ProjectsPage onOpenProject={(project) => setSelectedProject(project)} />
        )}
        {currentPage === 'journey' && <LearningJourneyPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Student Customization Handbook Modal */}
      <CustomizationGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
