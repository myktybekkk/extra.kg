import React from 'react';
import { MessageSquare, Quote, Star, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      author: 'Кайрат Эркинбаев',
      business: 'Логистическая компания Bishkek Freight',
      contractInfo: 'Договор ОсОО • Корпоративный сайт B2B',
      text: '«При запуске нового направления искали команду, которая сделает сайт с четкой сметой и без доплат. Подписали договор ОсОО, сдали проект на 10-й рабочий день под ключ. Заявки от грузоотправителей теперь идут прямо менеджеру в рабочий чат».',
      stars: 5
    },
    {
      author: 'Аида Токтогулова',
      business: 'Сеть семейных пекарен Altyn Nan',
      contractInfo: 'Договор ИП • Сайт-каталог продукции',
      text: '«Главный плюс — нас не заставляли самостоятельно писать тексты. Провели одно интервью на 60 минут, команда сама структурировала ассортимент, обработала фото и сделала быстрый мобильный сайт, где клиенты выбирают заказы за пару минут».',
      stars: 5
    },
    {
      author: 'Эрмек Садыбакасов',
      business: 'Автокомплекс KG Auto Lab',
      contractInfo: 'Договор ОсОО • Landing Page под ключ',
      text: '«Зафиксировали смету в договоре, никаких скрытых платежей за мобильную адаптацию или привязку WhatsApp. Домен и хостинг оформили на мой личный e-mail с первого дня. Сайт летает на смартфонах без задержек».',
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-[#0F1117] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-[#1FD1A5]/10 border border-teal-200 dark:border-[#1FD1A5]/30 mb-4">
            <Quote className="w-4 h-4 text-[#0D9488] dark:text-[#1FD1A5]" />
            <span className="text-xs font-bold tracking-wider text-[#0D9488] dark:text-[#1FD1A5] uppercase">
              Подтвержденные Отзывы
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Что говорят предприниматели <span className="text-gradient">Бишкека</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-[#A8B0C0] font-normal">
            Каждый отзыв подкреплен официальным договором и реальным запущенным проектом.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="card-surface card-surface-hover p-8 rounded-3xl border border-slate-200 dark:border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-[#1FD1A5]/10 text-[#0D9488] dark:text-[#1FD1A5] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 dark:text-[#A8B0C0] leading-relaxed italic mb-8 font-normal">
                  {item.text}
                </p>
              </div>

              {/* Author & Contract badge */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="font-serif font-bold text-slate-900 dark:text-white text-base mb-0.5">
                  {item.author}
                </div>
                <div className="text-xs text-[#0D9488] dark:text-[#1FD1A5] font-bold mb-2">
                  {item.business}
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] text-slate-600 dark:text-[#A8B0C0] font-mono font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#0D9488] dark:text-[#1FD1A5]" />
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
