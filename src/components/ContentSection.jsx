import React from 'react';
import { PenTool, Languages, Camera, Mic, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContentSection({ onOpenModal }) {
  const steps = [
    {
      icon: Mic,
      step: '01',
      title: 'Интервью на 60 минут',
      desc: 'Проводим понятное интервью с владельцем или менеджером. Вам не нужно заполнять анкеты — мы сами зададим все правильные вопросы.'
    },
    {
      icon: PenTool,
      step: '02',
      title: 'Коммерческий копирайтинг',
      desc: 'Напишем убедительные заголовки, офферы и описание услуг на основе реальных фактов вашей компании без лишней воды.'
    },
    {
      icon: Camera,
      step: '03',
      title: 'Оформление и медиа',
      desc: 'Подберем и обработаем качественную графику, иконки и фото под единый стиль вашей ниши.'
    },
    {
      icon: Languages,
      step: '04',
      title: 'Перевод на кыргызский и английский',
      desc: 'Выполним грамотный перевод сайта носителями языка для охвата всей аудитории Кыргызстана и иностранных клиентов.'
    }
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-[#0C0E14] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-[#1FD1A5]/10 border border-teal-200 dark:border-[#1FD1A5]/30 mb-4">
            <PenTool className="w-4 h-4 text-[#0D9488] dark:text-[#1FD1A5]" />
            <span className="text-xs font-bold tracking-wider text-[#0D9488] dark:text-[#1FD1A5] uppercase">
              Контент & Тексты Под Ключ
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Контент <span className="text-gradient">под ключ</span> — вам не придется писать тексты
          </h2>
          <p className="text-base text-slate-600 dark:text-[#A8B0C0] font-normal">
            Самая частая причина задержки сайтов — когда студия просит клиента «прислать тексты». Мы берем всю работу со смыслом и языками на себя.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="card-surface p-6 rounded-3xl border border-slate-200 dark:border-white/10 relative hover:border-[#0D9488] dark:hover:border-[#1FD1A5]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0D9488] dark:bg-[#1FD1A5] text-white dark:text-[#0F1117] font-bold flex items-center justify-center shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-2xl font-black text-slate-300 dark:text-white/20 group-hover:text-[#0D9488] dark:group-hover:text-[#1FD1A5] transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#A8B0C0] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout quote */}
        <div className="card-surface p-6 sm:p-8 rounded-2xl border border-teal-300 dark:border-[#1FD1A5]/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-[#1FD1A5]/20 text-[#0D9488] dark:text-[#1FD1A5] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Вы экономите от 40 часов личного времени</div>
              <div className="text-xs text-slate-600 dark:text-[#A8B0C0]">Мы не требуем готовых материалов — создаем всё с нуля</div>
            </div>
          </div>

          <button
            onClick={onOpenModal}
            className="px-6 py-3 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white dark:bg-white/5 dark:hover:bg-white/10 dark:text-white border border-transparent dark:border-white/15 text-xs font-bold whitespace-nowrap transition-all cursor-pointer shadow-md"
          >
            Заказать сайт с контентом →
          </button>
        </div>

      </div>
    </section>
  );
}
