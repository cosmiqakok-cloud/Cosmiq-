import React, { useState } from 'react';
import { X, BookOpen, Check, Copy, Terminal, UploadCloud, Globe, Code2 } from 'lucide-react';

interface CustomizationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<CustomizationGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-sky-400" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Website Customization & Deployment Handbook
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                A simple guide for Akok Mayol Akok to customize, maintain, and publish this portfolio
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700 dark:text-slate-300">
          {/* Section 1: Updating Profile & Data */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>1. How to Update Your Information & Projects</span>
            </div>
            <p className="leading-relaxed">
              All your text, bio, university details, skills, projects, and roadmap milestones are stored in one centralized file:
              <code className="mx-1 px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-blue-600 dark:text-sky-400 font-mono">
                src/data/portfolioData.ts
              </code>.
            </p>
            <p className="leading-relaxed">
              Whenever you complete a new Python project, pass a course, or earn a certificate, simply open that file and add a new entry to the <code className="font-mono text-slate-900 dark:text-white">projects</code> or <code className="font-mono text-slate-900 dark:text-white">skills</code> array. The website updates automatically without touching any UI code!
            </p>
          </div>

          {/* Section 2: Replacing Your Photo */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white">
              <UploadCloud className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>2. How to Replace the Profile Photo with Your Own</span>
            </div>
            <p className="leading-relaxed">
              To use your actual university or professional photograph:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 pl-2 leading-relaxed">
              <li>Place your photo file (e.g. <code className="font-mono">akok_photo.jpg</code>) inside the <code className="font-mono text-blue-600 dark:text-sky-400">src/assets/images/</code> folder.</li>
              <li>Open <code className="font-mono">src/data/portfolioData.ts</code>.</li>
              <li>Change the <code className="font-mono">avatarImage</code> field to match your new filename:
                <div className="my-2 p-2 bg-slate-100 dark:bg-slate-950 font-mono text-[11px] rounded border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200">
                  avatarImage: "/src/assets/images/akok_photo.jpg",
                </div>
              </li>
              <li>Save the file. Your real portrait will immediately appear on the Home and About pages.</li>
            </ol>
          </div>

          {/* Section 3: Connecting Real Contact Backend */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white">
              <Globe className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>3. Connecting the Contact Form to Your Email</span>
            </div>
            <p className="leading-relaxed">
              The Contact page currently validates inputs securely and generates a direct pre-filled email draft to <code className="font-mono text-blue-600 dark:text-sky-400">cosmiqakok@gmail.com</code>.
            </p>
            <p className="leading-relaxed">
              If you wish to receive messages directly in your inbox without user email clients, connect a free service such as <strong>Formspree</strong> or <strong>EmailJS</strong>:
            </p>
            <div className="p-3 bg-slate-100 dark:bg-slate-950 rounded-lg font-mono text-[11px] space-y-1 border border-slate-200 dark:border-slate-800">
              <p className="text-slate-500">// Formspree integration example in ContactPage.tsx:</p>
              <p className="text-slate-800 dark:text-slate-200">
                fetch("https://formspree.io/f/YOUR_FORM_ID", &#123; method: "POST", body: JSON.stringify(formData) &#125;)
              </p>
            </div>
          </div>

          {/* Section 4: Running Locally & Deploying */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white">
              <Terminal className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>4. Running Locally & Free Deployment</span>
            </div>
            <p className="leading-relaxed">
              To run this website on your own laptop or desktop with Node.js:
            </p>
            <div className="p-3 bg-slate-950 text-slate-200 rounded-lg font-mono text-[11px] relative">
              <button
                type="button"
                onClick={() => copyToClipboard('git clone <your-repo>\ncd portfolio\nnpm install\nnpm run dev', 'commands')}
                className="absolute right-2 top-2 p-1 text-slate-400 hover:text-white"
              >
                {copiedSection === 'commands' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <p className="text-slate-500"># 1. Install dependencies</p>
              <p>npm install</p>
              <p className="text-slate-500 mt-2"># 2. Start local development server</p>
              <p>npm run dev</p>
              <p className="text-slate-500 mt-2"># 3. Create production build</p>
              <p>npm run build</p>
            </div>

            <p className="leading-relaxed pt-1">
              <strong>Free Hosting Options:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600 dark:text-slate-400">
              <li><strong>GitHub Pages:</strong> Push code to a GitHub repository, enable Pages in repository settings.</li>
              <li><strong>Vercel / Netlify:</strong> Connect your GitHub repo; builds instantly with zero server setup.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 flex justify-end bg-slate-50 dark:bg-slate-950/60 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
