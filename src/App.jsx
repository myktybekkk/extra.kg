import React, { useState } from 'react';
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

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0F1117] text-white selection:bg-[#1FD1A5] selection:text-[#0F1117]">
      {/* Top Fixed Header */}
      <Navbar onOpenModal={handleOpenModal} />

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
