import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ServicesSection from './components/ServicesSection';
import CalculatorQuiz from './components/CalculatorQuiz';
import ContentSection from './components/ContentSection';
import WorkflowSection from './components/WorkflowSection';
import MobileIntegration from './components/MobileIntegration';
import PortfolioSection from './components/PortfolioSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Default is ALWAYS light — user can switch manually
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('extra_kg_theme_v2');
    return stored || 'light';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('extra_kg_theme_v2', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar onOpenModal={() => setIsModalOpen(true)} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <TrustSection />
        <ServicesSection onOpenModal={() => setIsModalOpen(true)} />
        <CalculatorQuiz />
        <ContentSection onOpenModal={() => setIsModalOpen(true)} />
        <WorkflowSection onOpenModal={() => setIsModalOpen(true)} />
        <MobileIntegration />
        <PortfolioSection onOpenModal={() => setIsModalOpen(true)} />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* WhatsApp floating (mobile) */}
      <a
        href="https://wa.me/996555874455"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200"
        aria-label="WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-white fill-white" />
      </a>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
