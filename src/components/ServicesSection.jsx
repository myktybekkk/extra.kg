import React, { useState } from 'react';
import { Rocket, Building2, ShoppingBag, CheckCircle, XCircle, MessageSquare, Sparkles } from 'lucide-react';

const services = [
  {
    id: 'landing',
    icon: Rocket,
    title: 'Landing Page',
    subtitle: 'Одностраничный сайт',
    price: 'от 20 000 сом',
    term: '7–14 рабочих дней',
    badge: 'Высокая конверсия',
    pain: 'Деньги на рекламу уходят впустую — клиенты кликают, но закрывают страницу из-за долгой загрузки и невнятных текстов.',
    result: 'Конверсионная посадочная страница: загрузка 1.2 с, продающий текст, кнопка WhatsApp.',
    includes: [
      'Продающая структура и тексты',
      'UI/UX дизайн под вашу нишу',
      'Мобильная адаптация 100%',
      'Интеграция WhatsApp и Telegram',
      'Базовая SEO-настройка и аналитика',
      '100% доступов на ваше имя',
    ],
  },
  {
    id: 'corporate',
    icon: Building2,
    title: 'Корпоративный сайт',
    subtitle: 'С каталогом и CMS',
    price: 'от 45 000 сом',
    term: '10–14 рабочих дней',
    badge: 'Хит для B2B',
    pain: 'Менеджеры тратят часы на отправку прайсов в личку, а сайт нельзя обновить без стороннего программиста.',
    result: 'Полноценный сайт с каталогом, панелью управления и мультиязычностью.',
    includes: [
      'Каталог товаров/услуг с фильтрацией',
      'Понятная CMS без абонплаты',
      'Мультиязычность (рус / кыр / eng)',
      'Кнопка «Скачать прайс» с захватом контактов',
      'Видеоинструкция по редактированию',
      'Гарантия 12 месяцев на исправление ошибок',
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'Интернет-магазин',
    subtitle: 'Под ключ с оплатой',
    price: 'от 65 000 сом',
    term: '14–20 рабочих дней',
    badge: 'E-Commerce',
    pain: 'Заказы теряются в переписках, клиенты уходят — нет возможности оплатить через мобильный банкинг.',
    result: 'Автоматизированный магазин с MBank, О!Деньги, авторасчётом доставки и уведомлениями в WhatsApp.',
    includes: [
      'MBank, О!Деньги, VISA/Elcart',
      'Синхронизация с 1С / МойСклад',
      'Корзина, личный кабинет, промокоды',
      'Уведомление менеджера в WhatsApp',
      'Калькулятор доставки по Бишкеку',
      'Обучение менеджеров',
    ],
  },
];

export default function ServicesSection({ onOpenModal }) {
  const [active, setActive] = useState(0);
  const s = services[active];
  const Icon = s.icon;

  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="badge mb-4">
            <Sparkles className="w-3 h-3" />
            Услуги и Тарифы
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Решения с фиксированной<br />
            <span className="text-accent">ценой под ключ</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Решаем конкретную задачу бизнеса — лиды идут прямо в ваш рабочий чат.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {services.map((service, idx) => {
            const TabIcon = service.icon;
            const isActive = active === idx;
            return (
              <button
                key={service.id}
                onClick={() => setActive(idx)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-teal-600 dark:bg-[#1FD1A5] text-white dark:text-[#0F1117] shadow-sm'
                    : 'bg-[#F8FAFC] dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-[#E8ECF0] dark:border-white/8 hover:border-teal-200 dark:hover:border-teal-700/30 hover:text-teal-700 dark:hover:text-[#1FD1A5]'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="card p-8 sm:p-10 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                  {s.badge}
                </span>
                <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500">
                  {s.term}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-7">{s.subtitle}</p>

              {/* Pain vs Result */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50 dark:bg-red-500/8 border border-rose-100 dark:border-red-500/15">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block mb-1">Типичная проблема</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.pain}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#F0FDFB] dark:bg-teal-900/15 border border-[#CCFBF1] dark:border-teal-700/25">
                  <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-teal-600 dark:text-[#1FD1A5] uppercase tracking-wider block mb-1">Результат</span>
                    <p className="text-sm text-slate-700 dark:text-white font-medium leading-relaxed">{s.result}</p>
                  </div>
                </div>
              </div>

              {/* Price + CTA */}
              <div className="pt-6 border-t border-[#E8ECF0] dark:border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">Фиксированная цена</span>
                  <span className="font-serif text-3xl font-extrabold text-teal-600 dark:text-[#1FD1A5]">{s.price}</span>
                </div>
                <a
                  href={`https://wa.me/996555874455?text=${encodeURIComponent(`Здравствуйте! Интересует тариф: ${s.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-[#1FD1A5] dark:hover:bg-[#17B890] text-white dark:text-[#0F1117] font-bold text-sm shadow-sm hover:-translate-y-0.5 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Обсудить в WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="lg:col-span-5 bg-[#F8FAFC] dark:bg-white/5 p-6 rounded-2xl border border-[#E8ECF0] dark:border-white/8">
              <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-4">Что входит:</h4>
              <ul className="space-y-3">
                {s.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-[#E8ECF0] dark:border-white/8">
                <button
                  onClick={onOpenModal}
                  className="text-xs text-teal-600 dark:text-[#1FD1A5] font-semibold hover:underline"
                >
                  Нужна индивидуальная сборка? Рассчитайте →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
