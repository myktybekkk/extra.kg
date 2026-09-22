import React from 'react';
import { MessageSquare, CheckCircle2, ArrowRight, Clock, Key, Sparkles } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-white dark:bg-[#0B0F1A] overflow-hidden">

      {/* Subtle background dot */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0D9488 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <div className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Бишкек · Официальный договор ОсОО / ИП
            </div>

            {/* H1 */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-5">
              Сайт за 7–14 дней.<br />
              <span className="text-accent">Заявки в WhatsApp</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-lg">
              Фиксируем смету и сроки в договоре, передаём 100% прав на домен с первого дня и настраиваем приём заявок на ваш смартфон.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10">
              <a
                href="https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%82%20%D1%81%D0%BC%D0%B5%D1%82%D1%8B"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 dark:bg-[#1FD1A5] dark:hover:bg-[#17B890] text-white dark:text-[#0F1117] font-bold text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Рассчитать смету</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenModal}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-[#E8ECF0] dark:border-white/10 text-slate-700 dark:text-slate-300 font-semibold text-base hover:border-teal-300 dark:hover:border-teal-700 hover:text-teal-700 dark:hover:text-[#1FD1A5] transition-all duration-200"
              >
                <span>Получить аудит ниши</span>
              </button>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-[#E8ECF0] dark:border-white/8 w-full">
              {[
                { icon: Sparkles, value: '120+', label: 'проектов' },
                { icon: Clock, value: '1% / день', label: 'неустойки' },
                { icon: Key, value: '100%', label: 'прав на вас' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0FDFB] dark:bg-teal-900/30 border border-[#CCFBF1] dark:border-teal-700/30 flex items-center justify-center text-teal-600 dark:text-[#1FD1A5]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg font-bold font-serif text-slate-900 dark:text-white leading-none">{value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Clean Widget Card */}
          <div className="hidden lg:block">
            <div className="card p-7 rounded-3xl shadow-xl max-w-sm ml-auto">

              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E8ECF0] dark:border-white/8 mb-5">
                <div className="flex items-center gap-2.5">
                  <img src="/logo.jpg" alt="extra.kg" className="w-7 h-7 rounded-lg object-cover border border-[#E8ECF0] dark:border-white/10" />
                  <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">extra.kg · lead engine</span>
                </div>
                <span className="badge">Демо</span>
              </div>

              {/* Speed Metric */}
              <div className="mb-5 p-4 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E8ECF0] dark:border-white/8">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Скорость Google PageSpeed</span>
                  <span className="text-xs font-bold text-teal-600 dark:text-[#1FD1A5]">98/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                  <div className="h-full w-[98%] bg-teal-500 dark:bg-[#1FD1A5] rounded-full" />
                </div>
                <p className="text-[11px] text-slate-400 mt-2">Загрузка ~1.2 секунды</p>
              </div>

              {/* WhatsApp lead example */}
              <div className="mb-5 p-4 rounded-2xl bg-emerald-50 dark:bg-[#25D366]/8 border border-emerald-100 dark:border-[#25D366]/20">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-white mb-1">Новая заявка с сайта</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                      «Здравствуйте! Хочу заказать сайт. Номер: +996 (555) 87-44-55»
                    </p>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5">
                {[
                  'Без ежемесячной абонентской платы',
                  'Интеграция WhatsApp, Telegram, CRM',
                  'Видеоинструкция по самостоятельному ведению',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-5 pt-4 border-t border-[#E8ECF0] dark:border-white/8">
                <button
                  onClick={onOpenModal}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-teal-600 dark:text-[#1FD1A5] hover:bg-[#F0FDFB] dark:hover:bg-teal-900/20 border border-[#CCFBF1] dark:border-teal-700/30 transition-colors"
                >
                  Бесплатный аудит ниши →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
