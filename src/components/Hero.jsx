import React from 'react';
import { ShieldCheck, MessageSquare, Clock, Key, CheckCircle2, ArrowRight, Sparkles, Smartphone, Zap } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1FD1A5]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid line pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1FD1A5 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Guarantee Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1FD1A5] animate-ping" />
              <span className="text-xs font-semibold tracking-wide text-[#1FD1A5] uppercase">
                Бишкек • Официальный договор ОсОО / ИП
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6">
              Запустим сайт за{' '}
              <span className="text-gradient">
                7–14 рабочих дней
              </span>{' '}
              с прямой отправкой заявок в WhatsApp
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#A8B0C0] leading-relaxed mb-8 max-w-2xl font-light">
              Фиксируем смету и сроки в договоре ОсОО/ИП, передаем 100% прав на домен и хостинг с первого дня и настраиваем мгновенный прием заявок на ваш смартфон. <strong className="text-white font-medium">Без скрытых платежей и доплат за формы.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="https://wa.me/996700123456?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%82%20%D1%81%D0%BC%D0%B5%D1%82%D1%8B%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-accent text-[#0F1117] font-bold text-base shadow-xl shadow-[#1FD1A5]/30 hover:shadow-[#1FD1A5]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Рассчитать смету в WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenModal}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm transition-all duration-300 cursor-pointer"
              >
                <span>Получить аудит ниши</span>
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1FD1A5]/10 border border-[#1FD1A5]/20 text-[#1FD1A5] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-white">120+</div>
                  <div className="text-xs text-[#A8B0C0]">запущенных проектов</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1FD1A5]/10 border border-[#1FD1A5]/20 text-[#1FD1A5] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-white">1% / день</div>
                  <div className="text-xs text-[#A8B0C0]">неустойки от договора</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1FD1A5]/10 border border-[#1FD1A5]/20 text-[#1FD1A5] shrink-0">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-white">100% прав</div>
                  <div className="text-xs text-[#A8B0C0]">оформляется на вас</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Interactive Preview Card / Phone Simulator */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl border border-white/15">
                
                {/* Header of widget */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <img src="/logo.jpg" alt="logo" className="w-6 h-6 rounded-lg object-cover border border-[#1FD1A5]/40" />
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-[#A8B0C0] ml-1">extra.kg lead-engine</span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#1FD1A5]/20 text-[#1FD1A5] font-semibold border border-[#1FD1A5]/30">
                    Демо решения
                  </span>
                </div>

                {/* PageSpeed Guarantee Metric */}
                <div className="mb-6 p-4 rounded-2xl bg-[#0F1117]/80 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#A8B0C0]">Целевая скорость (Google Speed test)</span>
                    <span className="text-xs font-bold text-[#1FD1A5]">98 / 100</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-accent w-[98%]" />
                  </div>
                  <div className="mt-2 text-[11px] text-[#A8B0C0] flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#1FD1A5]" />
                    <span>Время загрузки страницы: ~1.2 секунды</span>
                  </div>
                </div>

                {/* Live WhatsApp Incoming Lead Simulator */}
                <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 mb-6 relative overflow-hidden group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-white">Уведомление в WhatsApp (Демо)</span>
                        <span className="text-[10px] text-[#25D366]">Пример лида</span>
                      </div>
                      <p className="text-xs text-white/90 mt-1 leading-snug">
                        «Здравствуйте! Клиент желает заказать сайт под ключ. Номер для связи: +996 (700) 12-34-56»
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checkpoints list */}
                <div className="space-y-3 text-xs text-[#A8B0C0]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1FD1A5] shrink-0" />
                    <span>Без ежемесячной абонентской платы</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1FD1A5] shrink-0" />
                    <span>Прямая интеграция с мессенджерами и CRM</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1FD1A5] shrink-0" />
                    <span>Видеоинструкция по самостоятельному ведению</span>
                  </div>
                </div>

                {/* Bottom callout */}
                <div className="mt-6 pt-5 border-t border-white/10 text-center">
                  <button
                    onClick={onOpenModal}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#1FD1A5]/10 text-white hover:text-[#1FD1A5] border border-white/10 hover:border-[#1FD1A5]/30 text-xs font-bold transition-all"
                  >
                    Запросить бесплатный аудит ниши →
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
