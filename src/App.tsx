import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { UploadSection } from './components/UploadSection';
import { AnalysisDashboard } from './components/AnalysisDashboard';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Set dark mode on mount
    document.documentElement.classList.add('dark');
  }, []);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const handleAnalysisStart = () => {
    setActiveSection('dashboard');
  };

  const handleGetStarted = () => {
    setActiveSection('upload');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'upload':
        return (
          <UploadSection 
            onFileUpload={handleFileUpload}
            onAnalysisStart={handleAnalysisStart}
          />
        );
      case 'dashboard':
        return <AnalysisDashboard uploadedFile={uploadedFile} />;
      case 'analyze':
        return (
          <UploadSection 
            onFileUpload={handleFileUpload}
            onAnalysisStart={handleAnalysisStart}
          />
        );
      default:
        return (
          <div className="min-h-screen pt-24 px-6 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-white/70">This section is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#001E2B] relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 237, 100, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(19, 197, 221, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(0, 237, 100, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 237, 100, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-[#001E2B]/80" />
      </div>

      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#013D52] bg-[#012A3A]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#00ED64] rounded-lg flex items-center justify-center">
                  <span className="text-[#001E2B] font-bold">U</span>
                </div>
                <span className="text-white text-xl font-bold">UiX Sense</span>
              </div>
              <p className="text-white/70 mb-4 max-w-md">
                AI-powered design analysis platform helping designers create better, 
                more accessible, and user-friendly digital experiences.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00ED64]/20 transition-all cursor-pointer">
                  𝕏
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00ED64]/20 transition-all cursor-pointer">
                  ƒ
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00ED64]/20 transition-all cursor-pointer">
                  in
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-white cursor-pointer transition-colors">API</li>
                <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li className="hover:text-white cursor-pointer transition-colors">About</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2025 MacDannies. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/50 text-sm mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster 
        theme="dark"
        position="top-right"
        expand={true}
        richColors={true}
      />
    </div>
  );
}