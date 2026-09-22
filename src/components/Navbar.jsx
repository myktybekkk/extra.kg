import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Menu, X, ShieldCheck, Zap, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenModal, theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Гарантии', href: '#trust' },
    { name: 'Калькулятор', href: '#calculator' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Команда', href: '#team' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0F1117]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1E293B] p-0.5 border border-slate-200 dark:border-white/10 shadow-sm group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img src="/logo.jpg" alt="extra.kg logo" className="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#0D9488] dark:group-hover:text-[#1FD1A5] transition-colors">
                  extra<span className="text-[#0D9488] dark:text-[#1FD1A5]">.kg</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-50 dark:bg-[#1FD1A5]/10 text-[#0D9488] dark:text-[#1FD1A5] border border-teal-200 dark:border-[#1FD1A5]/30 font-mono font-semibold">
                  Bishkek
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-[#A8B0C0] tracking-wider uppercase font-medium">Веб-студия & Маркетинг</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-[#0D9488] dark:text-[#A8B0C0] dark:hover:text-[#1FD1A5] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0D9488] dark:after:bg-[#1FD1A5] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Switcher & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-white/10 transition-all cursor-pointer flex items-center justify-center"
              title={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            <a
              href="https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-[#059669] border border-emerald-200 hover:bg-[#25D366] hover:text-white dark:bg-[#25D366]/10 dark:text-[#25D366] dark:border-[#25D366]/30 dark:hover:bg-[#25D366] dark:hover:text-white transition-all duration-300 text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white dark:bg-[#1FD1A5] dark:hover:bg-[#17B890] dark:text-[#0F1117] font-bold text-xs shadow-md transition-all duration-300 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Рассчитать смету</span>
            </button>
          </div>

          {/* Mobile Right Controls: Theme + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-amber-400"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0F1117]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 dark:text-white hover:text-[#0D9488] dark:hover:text-[#1FD1A5] py-1 border-b border-slate-100 dark:border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Написать в WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0D9488] dark:bg-[#1FD1A5] text-white dark:text-[#0F1117] font-bold text-sm"
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>Получить расчет сметы</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
