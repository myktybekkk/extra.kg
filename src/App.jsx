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
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F1A] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar onOpenModal={handleOpenModal} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero onOpenModal={handleOpenModal} />
        <TrustSection />
        <ServicesSection onOpenModal={handleOpenModal} />
        <CalculatorQuiz />
        <ContentSection onOpenModal={handleOpenModal} />
        <WorkflowSection onOpenModal={handleOpenModal} />
        <MobileIntegration />
        <PortfolioSection onOpenModal={handleOpenModal} />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <Footer onOpenModal={handleOpenModal} />

      {/* Floating WhatsApp Button (mobile only) */}
      <a
        href="https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%D1%85"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="md:hidden fixed bottom-6 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>

      <LeadModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
