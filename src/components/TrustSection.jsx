import React from 'react';
import { ShieldCheck, Key, FileText, AlertCircle, CheckCircle2, X } from 'lucide-react';

const cards = [
  {
    icon: Key,
    tag: '100% Права',
    title: '100% цифровых прав на ваше имя',
    body: 'Домен, хостинг, база данных, CMS и исходный код регистрируются строго на ваш личный e-mail с первого дня. Полный контроль — вы никогда не зависите от студии.',
    foot: 'Все доступы и пароли — в вашем распоряжении',
  },
  {
    icon: AlertCircle,
    tag: 'Финансовый SLA',
    title: '1% неустойки за день задержки',
    body: 'Срок сдачи сайта (7–14 рабочих дней) зафиксирован в календарном плане договора. При нарушении дедлайна по нашей вине выплачиваем 1% за каждый день.',
    foot: 'Чёткий дедлайн с гарантией в договоре',
  },
  {
    icon: FileText,
    tag: 'Фиксированная смета',
    title: 'Окончательная цена без доплат',
    body: 'Никаких неожиданных счетов за мобильную версию, установку пикселей рекламы или привязку WhatsApp. Сумма в договоре является окончательной.',
    foot: '0 сом скрытых доплат и платежей',
  },
  {
    icon: ShieldCheck,
    tag: 'Юридическая чистота',
    title: 'Официальный договор ОсОО / ИП',
    body: 'Предоставляем полный пакет закрывающих документов: договор, счёт-фактуру, акты выполненных работ. Работаем с компаниями любого масштаба.',
    foot: 'Полная бухгалтерская и налоговая отчётность',
  },
];

const comparisons = [
  { aspect: 'Права и доступы', bad: 'Оформляют на студию, при уходе требуют выкуп', good: '100% доступов на ваш личный e-mail с 1-го дня' },
  { aspect: 'Контент сайта', bad: 'Требуют готовые тексты или берут доплату', good: 'Интервью 60 мин, копирайтинг и перевод включены' },
  { aspect: 'Сроки и дедлайны', bad: 'Затягивают разработку на месяцы без ответственности', good: '1% финансовая неустойка за каждый день просрочки' },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 md:py-28 bg-slate-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
            <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
              Гарантии и юридическая защита
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            Ваш бизнес защищён<br />
            <span className="text-teal-600 dark:text-teal-400">официальным договором</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Мы исключили главные риски заказчиков в Бишкеке: срывы сроков, потерю доступов и внезапный рост сметы в процессе работы.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl p-8 flex flex-col justify-between hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-200 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300">
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {c.title}
                  </h3>

                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {c.body}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-gray-800 flex items-center gap-2 text-sm font-semibold text-teal-700 dark:text-teal-400">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>{c.foot}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Box */}
        <div className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl p-8 sm:p-10 shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Почему клиенты выбирают extra.kg
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                    {item.aspect}
                  </div>

                  {/* Bad */}
                  <div className="flex items-start gap-2.5 text-sm text-rose-600 dark:text-rose-400 mb-3.5 leading-snug">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{item.bad}</span>
                  </div>
                </div>

                {/* Good */}
                <div className="pt-3 border-t border-slate-200 dark:border-gray-800 flex items-start gap-2.5 text-sm font-semibold text-teal-700 dark:text-teal-400 leading-snug">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-teal-600 dark:text-teal-400" />
                  <span>{item.good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
