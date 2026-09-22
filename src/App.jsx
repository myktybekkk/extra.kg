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
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0A0D14] dark:text-white selection:bg-[#1FD1A5] selection:text-[#0F1117] transition-colors duration-300">
      {/* Top Fixed Header with Theme Switcher */}
      <Navbar onOpenModal={handleOpenModal} theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Trust & Guarantees Section */}
        <TrustSection />

        {/* 3. Services & Pricing Grid */}
        <ServicesSection onOpenModal={handleOpenModal} />

        {/* 4. Interactive Budget Calculator */}
        <CalculatorQuiz />

        {/* 5. Turnkey Content & Translation */}
        <ContentSection onOpenModal={handleOpenModal} />

        {/* 6. 14-Day SLA Workflow Timeline */}
        <WorkflowSection onOpenModal={handleOpenModal} />

        {/* 7. Mobile Speed & WhatsApp Simulator */}
        <MobileIntegration />

        {/* 8. Portfolio & Case Studies */}
        <PortfolioSection onOpenModal={handleOpenModal} />

        {/* 9. Masters / Team Section */}
        <TeamSection />

        {/* 10. Real Bishkek Testimonials */}
        <TestimonialsSection />

        {/* 11. FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Floating WhatsApp Button (mobile only) */}
      <a
        href="https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%D1%85"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>

      {/* Lead Calculation Modal */}
      <LeadModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
