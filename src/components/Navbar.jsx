import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Sun, Moon, Zap, Phone } from 'lucide-react';

export default function Navbar({ onOpenModal, theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Гарантии', href: '#trust' },
    { name: 'Калькулятор', href: '#calculator' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0B0F1A]/95 backdrop-blur-md border-b border-[#E8ECF0] dark:border-white/8 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#E8ECF0] dark:border-white/10 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <img src="/logo.jpg" alt="extra.kg" className="w-full h-full object-cover" />
            </div>
            <span className="font-serif text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-[#1FD1A5] transition-colors">
              extra<span className="text-teal-600 dark:text-[#1FD1A5]">.kg</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/8 transition-colors cursor-pointer"
              title={theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
              aria-label="Toggle Theme"
            >
              {theme === 'light'
                ? <Moon className="w-4 h-4" />
                : <Sun className="w-4 h-4 text-amber-400" />
              }
            </button>

            <a
              href="https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E8ECF0] dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-[#25D366] hover:text-[#25D366] text-sm font-semibold transition-all duration-150"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-[#1FD1A5] dark:hover:bg-[#17B890] text-white dark:text-[#0F1117] font-bold text-sm transition-all duration-150 cursor-pointer shadow-sm"
            >
              <Zap className="w-4 h-4" />
              <span>Рассчитать смету</span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/8"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/8"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0F1420] border-t border-[#E8ECF0] dark:border-white/8 px-5 py-5">
          <nav className="flex flex-col gap-1 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-[#1FD1A5] rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5">
            <a
              href="https://wa.me/996555874455"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Написать в WhatsApp</span>
            </a>

            <a
              href="tel:+996555874455"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#E8ECF0] dark:border-white/10 text-slate-700 dark:text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+996 555 874 455</span>
            </a>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 dark:bg-[#1FD1A5] text-white dark:text-[#0F1117] font-bold text-sm"
            >
              <Zap className="w-4 h-4" />
              <span>Рассчитать смету</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
