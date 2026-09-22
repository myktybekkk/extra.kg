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

      {/* Lead Calculation Modal */}
      <LeadModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
