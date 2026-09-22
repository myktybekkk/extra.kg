import React, { useState } from 'react';
import { Rocket, Building2, ShoppingBag, CheckCircle, ArrowRight, XCircle, Sparkles, MessageSquare } from 'lucide-react';

export default function ServicesSection({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'landing',
      title: 'Одностраничный сайт (Landing Page)',
      price: 'от 20 000 сом',
      term: '7–14 рабочих дней',
      icon: Rocket,
      badge: 'Высокая конверсия',
      pain: 'Деньги на рекламу уходят впустую — клиенты кликают на объявления, но закрывают страницу из-за долгой загрузки и невнятных текстов.',
      result: 'Запуск конверсионной посадочной страницы с загрузкой за 1.2 секунды, продающим текстом и кнопкой связи, направляющей целевые обращения сразу в WhatsApp.',
      includes: [
        'Разработка продающей структуры и текстов',
        'Индивидуальный UI/UX дизайн под вашу нишу',
        'Мобильная адаптация 100% под смартфоны',
        'Интеграция прямой кнопки WhatsApp & Telegram',
        'Базовая настройка SEO и установка аналитики',
        '100% доступов и права на ваше имя'
      ]
    },
    {
      id: 'corporate',
      title: 'Корпоративный сайт с каталогом',
      price: 'от 45 000 сом',
      term: '10–14 рабочих дней',
      icon: Building2,
      badge: 'Хит для B2B и Услуг',
      pain: 'Менеджеры тратят по 4 часа в день на отправку PDF-прайсов в личку, а сайт невозможно обновить без платного вызова стороннего программиста.',
      result: 'Полноценный структурированный веб-ресурс с удобной фильтрацией товаров, адаптацией под телефоны и понятной панелью управления, где замена цены или фото занимает ровно 2 минуты.',
      includes: [
        'Удобный каталог товаров/услуг с фильтрацией',
        'Личный кабинет или понятная CMS (без абонплаты)',
        'Мультиязычность (русский / кыргызский / английский)',
        'Кнопка "Скачать прайс-лист" с захватом контактов',
        'Видеоинструкция по самостоятельному редактированию',
        'Гарантия 12 месяцев на исправление ошибок'
      ]
    },
    {
      id: 'ecommerce',
      title: 'Интернет-магазин под ключ',
      price: 'от 65 000 сом',
      term: '14–20 рабочих дней',
      icon: ShoppingBag,
      badge: 'Полный E-Commerce',
      pain: 'Заказы теряются в переписках, а клиенты уходят к конкурентам, потому что не могут моментально оплатить товар через мобильный банкинг.',
      result: 'Автоматизированная торговая площадка с интеграцией MBank, О!Деньги и карт, автоматическим расчетом стоимости доставки и мгновенным уведомлением в CRM при каждой новой оплате.',
      includes: [
        'Прием онлайн-оплаты (MBank, О!Деньги, VISA/Elcart)',
        'Синхронизация с 1С / МойСклад или Excel',
        'Корзина, личный кабинет покупателя и промокоды',
        'Авто-уведомление менеджера в WhatsApp о заказе',
        'Калькулятор стоимости доставки по Бишкеку и КР',
        'Обучение менеджеров по работе с заказами'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-100 dark:bg-[#0C0E14] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-[#1FD1A5]/10 border border-teal-200 dark:border-[#1FD1A5]/30 mb-4">
            <Sparkles className="w-4 h-4 text-[#0D9488] dark:text-[#1FD1A5]" />
            <span className="text-xs font-bold tracking-wider text-[#0D9488] dark:text-[#1FD1A5] uppercase">
              Услуги и Тарифы
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Решения с фиксированной ценой <span className="text-gradient">под ключ</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-[#A8B0C0] font-normal">
            Мы не просто рисуем макеты — мы решаем конкретную задачу вашего бизнеса и переводим лиды прямо в ваш рабочий чат.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 max-w-full overflow-x-auto shadow-sm">
            {services.map((service, index) => {
              const IconComp = service.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0D9488] text-white dark:bg-[#1FD1A5] dark:text-[#0F1117] shadow-md'
                      : 'text-slate-600 dark:text-[#A8B0C0] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{service.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Showcase */}
        {services.map((service, index) => {
          if (index !== activeTab) return null;
          const IconComp = service.icon;
          return (
            <div
              key={service.id}
              className="card-surface p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/15 relative overflow-hidden transition-all duration-500 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Left info column */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-[#1FD1A5]/20 text-[#0D9488] dark:text-[#1FD1A5] border border-teal-200 dark:border-[#1FD1A5]/30 text-xs font-bold">
                        {service.badge}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-[#A8B0C0] font-mono font-semibold">
                        Сроки: {service.term}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      {service.title}
                    </h3>

                    {/* Pain vs Result Cards */}
                    <div className="space-y-4 mb-8">
                      {/* Pain */}
                      <div className="p-4 rounded-2xl bg-rose-50 dark:bg-red-500/10 border border-rose-200 dark:border-red-500/20">
                        <div className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-rose-500 dark:text-red-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-bold text-rose-600 dark:text-red-400 uppercase tracking-wider block mb-1">
                              Типичная проблема устаревшего сайта
                            </span>
                            <p className="text-sm text-slate-700 dark:text-white/90 leading-relaxed font-normal">
                              {service.pain}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Result */}
                      <div className="p-4 rounded-2xl bg-teal-50 dark:bg-[#1FD1A5]/10 border border-teal-200 dark:border-[#1FD1A5]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#0D9488] dark:text-[#1FD1A5] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-bold text-[#0D9488] dark:text-[#1FD1A5] uppercase tracking-wider block mb-1">
                              Гарантированный результат
                            </span>
                            <p className="text-sm text-slate-900 dark:text-white leading-relaxed font-semibold">
                              {service.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-500 dark:text-[#A8B0C0] uppercase tracking-wider block font-medium">
                        Фиксированная цена по договору
                      </span>
                      <span className="text-3xl font-serif font-extrabold text-[#0D9488] dark:text-[#1FD1A5]">
                        {service.price}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white dark:bg-[#1FD1A5] dark:hover:bg-[#17B890] dark:text-[#0F1117] font-bold text-sm shadow-md hover:scale-[1.02] transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Обсудить в WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Right Checklist Column */}
                <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0F1117]/80 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#0D9488] dark:text-[#1FD1A5]" />
                      Что входит в стоимость:
                    </h4>

                    <ul className="space-y-3">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-[#A8B0C0]">
                          <CheckCircle className="w-4 h-4 text-[#0D9488] dark:text-[#1FD1A5] shrink-0 mt-0.5" />
                          <span className="text-slate-800 dark:text-white/90 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 text-center">
                    <button
                      onClick={onOpenModal}
                      className="text-xs text-[#0D9488] dark:text-[#1FD1A5] hover:underline font-bold"
                    >
                      Нужна индивидуальная сборка? Рассчитайте в калькуляторе →
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
