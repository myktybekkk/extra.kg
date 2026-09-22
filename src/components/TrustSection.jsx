import React from 'react';
import { ShieldCheck, Key, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const cards = [
  {
    icon: Key,
    label: '100% Права',
    title: '100% прав на цифровые активы',
    desc: 'Домен, хостинг, база данных и исходный код оформляются на ваше имя с первого дня. Вы получаете полный административный доступ.',
    highlight: 'Все доступы — на ваш личный e-mail',
  },
  {
    icon: AlertCircle,
    label: 'Финансовый SLA',
    title: '1% неустойки за день просрочки',
    desc: 'Точный срок сдачи зафиксирован в договоре. В случае задержки по нашей вине — выплачиваем 1% от суммы за каждый рабочий день.',
    highlight: 'Сдача за 7–14 рабочих дней по договору',
  },
  {
    icon: FileText,
    label: 'Прозрачная смета',
    title: 'Окончательная цена без доплат',
    desc: 'Никаких доплат за мобильную адаптацию, формы приёма заявок или привязку WhatsApp. Итоговая сумма зафиксирована в договоре.',
    highlight: '0 сом скрытых платежей',
  },
  {
    icon: ShieldCheck,
    label: 'Юридически чисто',
    title: 'Официальный договор ОсОО / ИП',
    desc: 'Предоставляем полный пакет закрывающих документов: акты выполненных работ, счета-фактуры. Работаем с юрлицами и тендерами.',
    highlight: 'Полная бухгалтерская отчётность',
  },
];

const compare = [
  { aspect: 'Права и доступы', bad: 'Оформляют на студию', good: '100% на ваш e-mail' },
  { aspect: 'Наполнение контентом', bad: 'Требуют готовые тексты', good: 'Контент под ключ + перевод' },
  { aspect: 'Контроль дедлайнов', bad: 'Затягивают на 3–6 месяцев', good: '1% штраф за день просрочки' },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 md:py-28 section-subtle dark:bg-[#0F1420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="badge mb-4">
            <ShieldCheck className="w-3 h-3" />
            Безопасность и Гарантии
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Ваш бизнес защищён<br />
            <span className="text-accent">на 100%</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Зафиксировали ключевые опасения заказчиков Бишкека в официальном договоре.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="card card-hover p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0FDFB] dark:bg-teal-900/20 border border-[#CCFBF1] dark:border-teal-700/20 flex items-center justify-center text-teal-600 dark:text-[#1FD1A5]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                    {card.label}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                </div>

                <div className="pt-4 border-t border-[#E8ECF0] dark:border-white/8 flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-[#1FD1A5]">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{card.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison */}
        <div className="card p-8 rounded-3xl">
          <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            extra.kg vs Обычная веб-студия
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compare.map(({ aspect, bad, good }) => (
              <div key={aspect} className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E8ECF0] dark:border-white/8">
                <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-3">{aspect}</div>
                <div className="flex items-center gap-2 text-sm text-rose-500 mb-2">
                  <span className="text-base">✕</span>
                  <span>{bad}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-[#1FD1A5]">
                  <span className="text-base">✓</span>
                  <span>{good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
