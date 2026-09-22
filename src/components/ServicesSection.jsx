import React, { useState } from 'react';
import { Rocket, Building2, ShoppingBag, CheckCircle2, MessageSquare, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'landing',
    icon: Rocket,
    title: 'Landing Page (Одностраничный сайт)',
    note: 'Идеально для быстрого запуска рекламы и лидогенерации',
    price: 'от 20 000 сом',
    term: '7–14 рабочих дней',
    badge: 'Быстрый запуск',
    pain: 'Клиенты переходят с рекламы, но закрывают страницу: сайт грузится дольше 3 секунд, текст шаблонный, нет удобной кнопки WhatsApp.',
    result: 'Конверсионный сайт с быстрой загрузкой (1.2 с), понятными выгодами вашего продукта и мгновенным приёмом заявок в мессенджер.',
    list: [
      'Индивидуальный UI/UX дизайн под вашу нишу',
      'Продающая структура и тексты на русском и кыргызском',
      '100% удобство на экранах смартфонов',
      'Прямая интеграция WhatsApp и приём заявок в Telegram',
      'Базовая SEO-оптимизация и настройка аналитики',
      '100% цифровых доступов оформляются на вас',
    ],
  },
  {
    id: 'corporate',
    icon: Building2,
    title: 'Корпоративный сайт с каталогом',
    note: 'Для B2B-компаний, дистрибуции, клиник, услуг и производств',
    price: 'от 45 000 сом',
    term: '10–14 рабочих дней',
    badge: 'Выбор бизнеса',
    pain: 'Менеджеры вручную высылают прайс-листы в мессенджерах, а внести изменения в сайт невозможно без найма программиста.',
    result: 'Многостраничный сайт с удобным каталогом, CMS-панелью для самостоятельного редактирования цен за 2 минуты и формой сбора контактов.',
    list: [
      'Каталог услуг или товаров с фильтрацией и поиском',
      'Удобная CMS-панель (обновление цен без программиста)',
      'Мультиязычность: кыргызский, русский, английский',
      'Кнопка «Скачать оптовый прайс» с захватом номера',
      'Видеоинструкции для сотрудников по работе с сайтом',
      'Гарантийная поддержка 12 месяцев по договору',
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'Интернет-магазин с онлайн-оплатой',
    note: 'Автоматизированные онлайн-продажи с подключением MBank и О!Деньги',
    price: 'от 65 000 сом',
    term: '14–20 рабочих дней',
    badge: 'Full E-Commerce',
    pain: 'Заказы теряются в хаосе переписок, покупатели уходят к конкурентам, так как не могут сразу оплатить товар через мобильный банкинг.',
    result: 'Полноценный онлайн-магазин с приёмом платежей MBank, О!Деньги, Элкарт, расчётом доставки и отправкой заказов менеджеру в WhatsApp.',
    list: [
      'Подключение онлайн-оплаты: MBank, О!Деньги, Элкарт, VISA',
      'Синхронизация каталога и остатков (1С, МойСклад, Excel)',
      'Корзина, личный кабинет, система скидок и промокодов',
      'Моментальные пуш-уведомления менеджерам в WhatsApp',
      'Калькулятор стоимости доставки по Бишкеку и регионам КР',
      'Обучение менеджеров работе с заказами и клиентами',
    ],
  },
];

export default function ServicesSection({ onOpenModal }) {
  const [active, setActive] = useState(0);
  const s = services[active];
  const SIcon = s.icon;

  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
            <Rocket className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
              Услуги и тарифы
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            Готовые решения с фиксированной<br />
            <span className="text-teal-600 dark:text-teal-400">стоимостью под ключ</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            В каждый тариф входит весь цикл: от структуры и написания текстов до мобильной вёрстки и передачи паролей.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isCurrent = active === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(idx)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-teal-600 text-white shadow-sm ring-2 ring-teal-600/30'
                    : 'bg-slate-100 dark:bg-gray-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tariff Card */}
        <div className="bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* Left 7 cols: Description, Pain/Solution, Pricing */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800">
                    {s.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    Срок: {s.term}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 mb-8">
                  {s.note}
                </p>

                {/* Problem & Solution Cards */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-2xl bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1.5">
                      Типичная проблема сайтов:
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {s.pain}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Наше решение в extra.kg:
                    </div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                      {s.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-slate-200 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Фиксированная смета в договоре
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-extrabold text-teal-700 dark:text-teal-400">
                    {s.price}
                  </div>
                </div>

                <a
                  href={`https://wa.me/996555874455?text=${encodeURIComponent(`Здравствуйте! Интересует тариф: ${s.title}. Хочу обсудить детали.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Обсудить в WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right 5 cols: What's included checklist */}
            <div className="lg:col-span-5 bg-white dark:bg-gray-950 rounded-2xl p-7 border border-slate-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-6">
                  Что включено в стоимость:
                </h4>
                <ul className="space-y-4">
                  {s.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200 dark:border-teal-800">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-gray-800">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Индивидуальный функционал? Запросить расчёт</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
