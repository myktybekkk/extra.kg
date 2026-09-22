import React from 'react';
import { MessageSquare, MapPin, Mail, ShieldCheck, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const nav = [
    { label: 'Услуги и Тарифы', href: '#services' },
    { label: 'Гарантии в договоре', href: '#trust' },
    { label: 'Калькулятор сметы', href: '#calculator' },
    { label: 'Портфолио и Кейсы', href: '#portfolio' },
    { label: 'Наша команда', href: '#team' },
    { label: 'Отзывы клиентов', href: '#testimonials' },
    { label: 'Вопросы и ответы (FAQ)', href: '#faq' },
  ];

  const products = [
    { name: 'Landing Page', price: 'от 20 000 сом' },
    { name: 'Корпоративный сайт', price: 'от 45 000 сом' },
    { name: 'Интернет-магазин', price: 'от 65 000 сом' },
    { name: 'Интеграция MBank & О!Деньги', price: 'включено' },
    { name: 'Контент под ключ (рус / кыр / eng)', price: 'включено' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-gray-950 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-gray-800 pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-300 dark:border-gray-700 shadow-sm">
                <img src="/logo.jpg" alt="extra.kg" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                extra<span className="text-teal-600 dark:text-teal-400">.kg</span>
              </span>
            </a>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-sm">
              Разработка коммерческих сайтов под ключ в Бишкеке за 7–14 дней. 100% передача прав на вас с первого дня, фиксированная смета в договоре и прямая интеграция в WhatsApp.
            </p>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <div className="font-semibold text-slate-900 dark:text-white">Официальный договор ОсОО / ИП КР</div>
              <div>ИНН: 01203202110050 · Полная бухгалтерская отчётность</div>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-5">Навигация</h4>
            <ul className="space-y-3">
              {nav.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-5">Тарифы</h4>
            <ul className="space-y-3.5">
              {products.map(p => (
                <li key={p.name} className="text-sm">
                  <a href="#services" className="group block">
                    <div className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {p.name}
                    </div>
                    <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold">
                      {p.price}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts & Direct CTA (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-5">Контакты в Бишкеке</h4>
            <ul className="space-y-3.5 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300">г. Бишкек, ул. Ибраимова 115 / пересекает ул. Киевская</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0 fill-current" />
                <a
                  href="https://wa.me/996555874455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  +996 (555) 87-44-55
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                <a href="mailto:info@extra.kg" className="font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  info@extra.kg
                </a>
              </li>
            </ul>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/996555874455"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Написать в WhatsApp
              </a>
              <button
                onClick={onOpenModal}
                className="py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
              >
                Рассчитать смету проекта
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div>© 2026 extra.kg · Все права защищены · Коммерческая веб-разработка в Кыргызстане</div>
          <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-semibold">
            <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span>100% прав на код и домен передаются клиенту</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
