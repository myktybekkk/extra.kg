import React from 'react';
import { Quote, Star, ShieldCheck } from 'lucide-react';

const reviews = [
  {
    author: 'Кайрат Э.',
    business: 'Логистическая компания',
    contractInfo: 'Договор ОсОО • Корпоративный сайт B2B',
    text: 'При запуске нового направления искали команду с чёткой сметой и без доплат. Подписали договор ОсОО, сдали проект на 10-й рабочий день. Заявки от грузоотправителей идут прямо в рабочий чат менеджера.',
    stars: 5,
  },
  {
    author: 'Аида Т.',
    business: 'Сеть пекарен',
    contractInfo: 'Договор ИП • Сайт-каталог продукции',
    text: 'Главный плюс — не заставляли писать тексты самостоятельно. Провели интервью на 60 минут, команда сама структурировала ассортимент, обработала фото и сделала быстрый мобильный сайт.',
    stars: 5,
  },
  {
    author: 'Эрмек С.',
    business: 'Автокомплекс',
    contractInfo: 'Договор ОсОО • Landing Page под ключ',
    text: 'Зафиксировали смету в договоре, никаких скрытых платежей за мобильную адаптацию или привязку WhatsApp. Домен и хостинг оформили на мой e-mail с первого дня.',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 section-subtle dark:bg-[#0F1420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="badge mb-4">
            <Quote className="w-3 h-3" />
            Отзывы клиентов
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Что говорят<br />
            <span className="text-accent">предприниматели Бишкека</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Реальные обращения. Имена изменены по просьбе клиентов.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="card card-hover p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic mb-6">
                  «{item.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8ECF0] dark:border-white/8">
                <div className="font-serif font-bold text-slate-900 dark:text-white text-base mb-0.5">{item.author}</div>
                <div className="text-xs text-teal-600 dark:text-[#1FD1A5] font-semibold mb-3">{item.business}</div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-[#E8ECF0] dark:border-white/8 text-[10px] text-slate-500 dark:text-slate-500 font-mono font-semibold">
                  <ShieldCheck className="w-3 h-3 text-teal-500" />
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
