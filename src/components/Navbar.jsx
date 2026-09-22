import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Sun, Moon, Zap, Phone } from 'lucide-react';

export default function Navbar({ onOpenModal, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Услуги',      href: '#services' },
    { label: 'Гарантии',    href: '#trust' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Портфолио',   href: '#portfolio' },
    { label: 'Отзывы',      href: '#testimonials' },
    { label: 'FAQ',         href: '#faq' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm">
            <img src="/logo.jpg" alt="extra.kg" className="w-full h-full object-cover" />
          </div>
          <span className="font-serif text-lg font-bold text-gray-900 dark:text-white tracking-tight">
            extra<span className="text-teal-600 dark:text-teal-400">.kg</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2">
          <button onClick={onToggleTheme} aria-label="Toggle theme"
            className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          <a href="https://wa.me/996555874455" target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-green-400 hover:text-green-600 dark:hover:border-green-500 dark:hover:text-green-400 transition-all duration-150">
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>

          <button onClick={onOpenModal} cursor-pointer
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-sm transition-all duration-150 cursor-pointer">
            <Zap className="w-4 h-4" />
            Рассчитать смету
          </button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={onToggleTheme}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>
          <button onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-5 py-5">
          <nav className="flex flex-col gap-1 mb-4">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 pt-4 border-t border-gray-100 dark:border-gray-800">
            <a href="https://wa.me/996555874455" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold">
              <MessageSquare className="w-5 h-5 fill-current" />
              Написать в WhatsApp
            </a>
            <a href="tel:+996555874455"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold">
              <Phone className="w-4 h-4" />
              +996 555 874 455
            </a>
            <button onClick={() => { setOpen(false); onOpenModal(); }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 text-white font-bold cursor-pointer">
              <Zap className="w-4 h-4" />
              Рассчитать смету
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
