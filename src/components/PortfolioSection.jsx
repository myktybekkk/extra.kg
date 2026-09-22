import React, { useState } from 'react';
import { ExternalLink, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    cat: 'ecommerce',
    title: 'Торговый портал MAX.KG',
    sphere: 'E-Commerce & Ритейл',
    label: 'Реальный клиент',
    real: true,
    url: 'https://max.kg',
    desc: 'Масштабный интернет-магазин бытовой техники и электроники в Бишкеке. Быстрый каталог, поиск с автодополнением, адаптация под смартфоны и личный кабинет покупателя.',
    tags: ['E-Commerce', 'Каталог', 'Интернет-магазин', 'Поиск'],
  },
  {
    id: 2,
    cat: 'services',
    title: 'Пример: Сервисный центр и ремонт',
    sphere: 'Услуги для населения',
    label: 'Демо-концепция',
    real: false,
    desc: 'Одностраничный сайт с интерактивным калькулятором поломок и мгновенным переводом клиента в диалог с мастером в WhatsApp.',
    tags: ['Landing Page', 'WhatsApp Quiz', 'Конверсия 18%'],
  },
  {
    id: 3,
    cat: 'b2b',
    title: 'Пример: Корпоративный сайт B2B',
    sphere: 'Производство и дистрибуция',
    label: 'Демо-концепция',
    real: false,
    desc: 'Многостраничный сайт с каталогом оборудования, мультиязычностью (кыр / рус / eng) и автоматическим скачиванием прайс-листов за контакт.',
    tags: ['Корпоративный сайт', '3 языка', 'Каталог B2B'],
  },
  {
    id: 4,
    cat: 'medical',
    title: 'Пример: Медицинский центр / Стоматология',
    sphere: 'Медицина и здоровье',
    label: 'Демо-концепция',
    real: false,
    desc: 'Доверительный строгий сайт с расписанием врачей, прайс-листом услуг, онлайн-записью в 2 клика и подтверждением по SMS.',
    tags: ['Медицинский сайт', 'Онлайн-запись', 'SEO'],
  },
];

const filters = [
  { id: 'all', label: 'Все проекты' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'services', label: 'Услуги' },
  { id: 'b2b', label: 'B2B' },
  { id: 'medical', label: 'Медицина' },
];

export default function PortfolioSection({ onOpenModal }) {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
            <TrendingUp className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
              Портфолио и примеры
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            Проекты для бизнеса<br />
            <span className="text-teal-600 dark:text-teal-400">в Бишкеке и Кыргызстане</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Показываем реальный проект MAX.KG и готовые отраслевые концепции, чтобы вы могли оценить уровень проработки интерфейсов.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {filters.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-gray-700 hover:border-slate-300'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
          {visible.map((p) => (
            <div
              key={p.id}
              className={`bg-white dark:bg-gray-950 border rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 shadow-sm ${
                p.real
                  ? 'border-teal-300 dark:border-teal-700/80 ring-1 ring-teal-500/20'
                  : 'border-slate-200 dark:border-gray-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    {p.sphere}
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      p.real
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                        : 'bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-gray-700'
                    }`}
                  >
                    {p.label}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  {p.title}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 dark:text-teal-400 hover:text-teal-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </h3>

                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-gray-800 flex items-center justify-between">
                  <a
                    href={p.url || `https://wa.me/996555874455?text=${encodeURIComponent(`Здравствуйте! Хочу посмотреть презентацию кейса: ${p.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center gap-1.5"
                  >
                    <span>{p.url ? 'Открыть сайт max.kg' : 'Запросить презентацию'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Хочу такой же сайт для моего бизнеса →
          </button>
        </div>

      </div>
    </section>
  );
}
