import React from 'react';
import { Calendar, Clock, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';

export default function WorkflowSection({ onOpenModal }) {
  const timeline = [
    {
      day: 'День 1',
      title: 'Интервью & Стратегия',
      desc: 'Созваниваемся на 60 минут, фиксируем цели, конкурентные преимущества и утверждаем техническое задание.'
    },
    {
      day: 'Дни 2–4',
      title: 'Прототип & Продающие тексты',
      desc: 'Строим интерактивную логику страниц и пишем убедительный копирайтинг для бишкекской аудитории.'
    },
    {
      day: 'Дни 5–8',
      title: 'Премиум UI/UX Дизайн',
      desc: 'Создаем эффектный современный дизайн с учетом вашей айдентики и безупречным удобством для смартфонов.'
    },
    {
      day: 'Дни 9–12',
      title: 'Верстка & Интеграция WhatsApp/MBank',
      desc: 'Программируем чистый код, добиваемся скорости загрузки 1.2 секунды и привязываем онлайн-оплату и чаты.'
    },
    {
      day: 'Дни 13–14',
      title: 'Запуск & Передача 100% Доступов',
      desc: 'Регистрируем домен и хостинг на ваше имя, передаем пароли, подписываем акт и записываем видеоинструкции.'
    }
  ];

  return (
    <section className="py-20 bg-[#0F1117] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-4">
            <Clock className="w-4 h-4 text-[#1FD1A5]" />
            <span className="text-xs font-semibold tracking-wider text-[#1FD1A5] uppercase">
              Прозрачный процесс разработки
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            От брифа до первых заявок за <span className="text-gradient">7–14 рабочих дней</span>
          </h2>
          <p className="text-base text-[#A8B0C0] font-light">
            Каждый этап закреплен календарным графиком в договоре. Финансовая ответственность — 1% за день просрочки от стоимости договора.
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1FD1A5]/20 via-[#1FD1A5] to-[#00AEEF]/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {timeline.map((step, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#1FD1A5]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#1FD1A5]/20 text-[#1FD1A5] text-xs font-mono font-bold">
                      {step.day}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white group-hover:bg-[#1FD1A5] group-hover:text-[#0F1117] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-white mb-2 group-hover:text-[#1FD1A5] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#A8B0C0] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[#1FD1A5] font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Фиксация в акте</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SLA Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 via-amber-500/10 to-[#1FD1A5]/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0" />
            <div className="text-xs sm:text-sm text-white">
              <strong className="text-amber-400 font-bold">Финансовая ответственность: </strong> 
              В случае если задержка сдачи произойдет по нашей вине — компенсируем 1% от общей стоимости договора за каждый день просрочки.
            </div>
          </div>
          <button
            onClick={onOpenModal}
            className="px-6 py-2.5 rounded-xl bg-gradient-accent text-[#0F1117] font-bold text-xs whitespace-nowrap shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            Забронировать дату старта →
          </button>
        </div>

      </div>
    </section>
  );
}
