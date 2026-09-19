import React from 'react';
import { PenTool, Languages, Camera, Mic, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContentSection({ onOpenModal }) {
  const steps = [
    {
      icon: Mic,
      step: '01',
      title: 'Интервью на 60 минут',
      desc: 'Проводим глубинный бриф с владельцем или менеджером. Вам не нужно заполнять громоздкие анкеты — мы сами зададим правильные вопросы.'
    },
    {
      icon: PenTool,
      step: '02',
      title: 'Коммерческий копирайтинг',
      desc: 'Напишем убедительные заголовки, офферы и описание услуг на основе реальных фактов вашей компании без пустой воды.'
    },
    {
      icon: Camera,
      step: '03',
      title: 'Оформление и медиа',
      desc: 'Подоберем и обработаем качественную графику, иконки и фото под единый стиль вашей ниши.'
    },
    {
      icon: Languages,
      step: '04',
      title: 'Перевод на Кыргызский и English',
      desc: 'Выполним грамотный перевод сайта носителями языка для охвата всей аудитории Кыргызстана и иностранных клиентов.'
    }
  ];

  return (
    <section className="py-20 bg-[#0C0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-4">
            <PenTool className="w-4 h-4 text-[#1FD1A5]" />
            <span className="text-xs font-semibold tracking-wider text-[#1FD1A5] uppercase">
              Боль #11 Закрыта
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Контент <span className="text-gradient">под ключ</span> — вам не придется писать тексты
          </h2>
          <p className="text-base text-[#A8B0C0] font-light">
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
                className="glass-panel p-6 rounded-3xl border border-white/10 relative hover:border-[#1FD1A5]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent p-0.5 text-[#0F1117] font-bold flex items-center justify-center">
                    <div className="w-full h-full bg-[#0F1117] rounded-[10px] flex items-center justify-center text-[#1FD1A5]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="font-serif text-2xl font-black text-white/20 group-hover:text-[#1FD1A5] transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A8B0C0] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout quote */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#1FD1A5]/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1FD1A5]/20 text-[#1FD1A5] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Вы экономите от 40 часов личного времени</div>
              <div className="text-xs text-[#A8B0C0]">Мы не требуем готовых материалов — создаем всё с нуля</div>
            </div>
          </div>

          <button
            onClick={onOpenModal}
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-bold whitespace-nowrap transition-all cursor-pointer"
          >
            Заказать сайт с контентом →
          </button>
        </div>

      </div>
    </section>
  );
}
