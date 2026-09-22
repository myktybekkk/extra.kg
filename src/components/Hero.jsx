import React from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, Clock, Key, BarChart2 } from 'lucide-react';

const stats = [
  { icon: BarChart2, value: '120+', sub: 'запущенных проектов' },
  { icon: Clock, value: '1% / день', sub: 'неустойка в договоре' },
  { icon: Key, value: '100%', sub: 'прав на ваше имя' },
];

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative bg-white dark:bg-gray-950 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden transition-colors duration-200">

      {/* Subtle Dot Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #E2E8F0 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
        }}
      />
      <div className="dark:hidden absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              Бишкек · Официальный договор ОсОО / ИП
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight mb-6">
              Коммерческий сайт за 7–14 дней.<br />
              <span className="text-teal-600 dark:text-teal-400">Заявки сразу в WhatsApp</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              Фиксируем окончательную смету и сроки в договоре. Передаём 100% цифровых прав на вас с первого дня и настраиваем поток клиентов на ваш смартфон.{' '}
              <strong className="font-bold text-slate-900 dark:text-white">Без скрытых доплат.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-12">
              <a
                href="https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D1%81%D0%BC%D0%B5%D1%82%D1%83%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-lg shadow-teal-600/20 hover:shadow-teal-700/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Рассчитать смету в WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenModal}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-slate-800 dark:text-slate-200 font-bold text-base hover:border-teal-500 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-200 cursor-pointer shadow-sm"
              >
                Получить аудит ниши
              </button>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-gray-800 max-w-lg">
              {stats.map(({ icon: Icon, value, sub }) => (
                <div key={sub} className="flex flex-col">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-900 dark:text-white leading-tight">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Interactive Widget (5 cols) */}
          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-xl p-8">

              {/* Widget Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200 dark:border-gray-700">
                    <img src="/logo.jpg" alt="extra.kg" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                    extra.kg · lead engine
                  </span>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                  ДЕМО-ВИДЖЕТ
                </span>
              </div>

              {/* Speed Bar */}
              <div className="mb-5 p-4 rounded-2xl bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Google PageSpeed</span>
                  <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400">98 / 100</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-gray-700 overflow-hidden">
                  <div className="h-full w-[98%] rounded-full bg-teal-600" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Загрузка сайта: 1.2 секунды на 4G
                </p>
              </div>

              {/* WhatsApp Live Lead Box */}
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                      Новая заявка прямо в WhatsApp:
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                      «Здравствуйте! Интересует разработка сайта. Номер клиента: +996 (555) 87-44-55»
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features Checklist */}
              <div className="space-y-3 mb-6">
                {[
                  'Без абонентской платы за обслуживание',
                  'Прямой приём заявок в WhatsApp и CRM',
                  'Персональное видеообучение управлению',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Action Button inside widget */}
              <button
                type="button"
                onClick={onOpenModal}
                className="w-full py-3 px-4 rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400 font-bold text-xs hover:bg-teal-100 transition-colors cursor-pointer"
              >
                Бесплатный аудит вашей ниши →
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
