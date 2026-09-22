import React from 'react';
import { Quote, Star, ShieldCheck } from 'lucide-react';

const reviews = [
  {
    name: 'Кайрат Э.',
    biz: 'Логистическая и экспедиторская компания',
    contract: 'Договор ОсОО · Корпоративный сайт B2B',
    text: 'При запуске нового направления искали команду с чёткой сметой и без доплат. Подписали договор ОсОО, сдали проект на 10-й рабочий день. Заявки от клиентов теперь приходят прямо в рабочий чат менеджера.',
    stars: 5,
  },
  {
    name: 'Аида Т.',
    biz: 'Сеть кондитерских и пекарен',
    contract: 'Договор ИП · Сайт-каталог продукции',
    text: 'Главный плюс — нам не пришлось писать тексты самим. Провели онлайн-интервью на 60 минут, команда сама структурировала ассортимент, обработала фотографии и запустила удобный мобильный сайт.',
    stars: 5,
  },
  {
    name: 'Эрмек С.',
    biz: 'Автосервисный комплекс и детейлинг',
    contract: 'Договор ОсОО · Landing Page под ключ',
    text: 'Зафиксировали смету в договоре — никаких доплат за мобильную адаптацию или привязку WhatsApp. Домен и хостинг оформили на мой личный e-mail с первого дня. Сайт работает быстро даже на слабом 4G.',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
            <Quote className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
              Отзывы клиентов
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            Что говорят предприниматели<br />
            <span className="text-teal-600 dark:text-teal-400">о работе с extra.kg</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Реальные отзывы клиентов после сдачи проектов и запуска рекламного трафика в Бишкеке.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl p-8 flex flex-col justify-between hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-200 shadow-sm"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1.5 mb-5">
                  {[...Array(r.stars)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  «{r.text}»
                </p>
              </div>

              {/* Author & Contract details */}
              <div className="pt-5 border-t border-slate-200 dark:border-gray-800">
                <div className="font-serif font-bold text-slate-900 dark:text-white text-base mb-1">
                  {r.name}
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                  {r.biz}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-xs font-semibold text-teal-700 dark:text-teal-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>{r.contract}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
