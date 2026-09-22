import React from 'react';
import { MessageSquare, MapPin, Mail, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const nav = [
    { label: 'Услуги и Тарифы', href: '#services' },
    { label: 'Гарантии', href: '#trust' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Команда', href: '#team' },
    { label: 'Отзывы', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const products = [
    'Landing Page (от 20 000 сом)',
    'Корпоративный сайт (от 45 000 сом)',
    'Интернет-магазин (от 65 000 сом)',
    'Интеграция MBank & О!Деньги',
    'Контент под ключ (рус / кыр / eng)',
  ];

  return (
    <footer className="bg-slate-900 dark:bg-[#080B12] text-slate-400 border-t border-slate-800 dark:border-white/8 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-700 shadow-sm">
                <img src="/logo.jpg" alt="extra.kg" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                extra<span className="text-teal-400">.kg</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Разработка продающих сайтов в Бишкеке. 100% передача прав и юридические гарантии.
            </p>
            <div className="text-[11px] font-mono text-slate-600 space-y-1">
              <div>Официальный договор ОсОО / ИП КР</div>
              <div>ИНН 01203202110050</div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Навигация</h4>
            <ul className="space-y-2.5">
              {nav.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Продукты</h4>
            <ul className="space-y-2.5">
              {products.map(p => (
                <li key={p}>
                  <a href="#services" className="text-xs hover:text-teal-400 transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Контакты</h4>
            <ul className="space-y-3 text-xs mb-6">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>г. Бишкек, ул. Ибраимова 115 / Киевская</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <a
                  href="https://wa.me/996555874455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +996 (555) 87-44-55
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@extra.kg" className="hover:text-white transition-colors">
                  info@extra.kg
                </a>
              </li>
            </ul>

            <button
              onClick={onOpenModal}
              className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Рассчитать смету →
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>© 2026 extra.kg · Все права защищены · Веб-студия в Бишкеке</div>
          <div className="flex items-center gap-1.5 text-teal-500 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>100% цифровых прав на имя заказчика</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
