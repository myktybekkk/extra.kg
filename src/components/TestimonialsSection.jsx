import React from 'react';
import { MessageSquare, Quote, Star, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      author: 'Улан Мусаев',
      business: 'Сеть сервисных центров Bishkek Repair',
      contractInfo: 'Договор ОсОО • 45 000 сом (Корпоративный сайт)',
      text: '«Раньше работали с фрилансером: сайт делали 4 месяца, а потом нам выставили счет за то, чтобы просто привязать WhatsApp. Здесь подписали договор ОсОО с фиксированной ценой 45 000 сом. Сдали ровно на 12-й рабочий день, домен оформили на меня сразу. Заявки падают в рабочий чат без сбоев».',
      stars: 5
    },
    {
      author: 'Айпери Касымова',
      business: 'Бренд женской одежды Aiperi Fashion',
      contractInfo: 'Договор ИП • Интернет-магазин под ключ',
      text: '«Главный страх был в том, что меня заставят писать тексты и придумывать структуру — у меня просто нет на это времени. Ребята провели одно интервью на час, сами все расписали, перевели каталог на кыргызский и подогнали фотографии под формат. Магазин окупил разработку за первый месяц рекламы».',
      stars: 5
    },
    {
      author: 'Тимур Джумабеков',
      business: 'Оптовые поставки оборудования KG Tech',
      contractInfo: 'Договор ОсОО • B2B Каталог',
      text: '«Сайт летает на айфоне, ничего не съезжает и не виснет. Очень порадовало, что после сдачи записали короткие видео, как менеджеру самому загружать новые спецификации. Никаких оплат за "обслуживание" — управляем сайтом сами за пару минут».',
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#0F1117] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-4">
            <Quote className="w-4 h-4 text-[#1FD1A5]" />
            <span className="text-xs font-semibold tracking-wider text-[#1FD1A5] uppercase">
              Подтвержденные Отзывы
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Что говорят предприниматели <span className="text-gradient">Бишкека</span>
          </h2>
          <p className="text-base text-[#A8B0C0] font-light">
            Каждый отзыв подкреплен официальным договором и реальным запущенным проектом.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#1FD1A5]/10 text-[#1FD1A5] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#A8B0C0] leading-relaxed italic mb-8 font-light">
                  {item.text}
                </p>
              </div>

              {/* Author & Contract badge */}
              <div className="pt-4 border-t border-white/10">
                <div className="font-serif font-bold text-white text-base mb-0.5">
                  {item.author}
                </div>
                <div className="text-xs text-[#1FD1A5] font-semibold mb-2">
                  {item.business}
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-[#A8B0C0] font-mono">
                  <ShieldCheck className="w-3 h-3 text-[#1FD1A5]" />
                  <span>{item.contractInfo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
