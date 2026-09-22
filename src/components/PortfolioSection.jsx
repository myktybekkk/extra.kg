import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'ecommerce',
    title: 'Торговый портал MAX.KG',
    sphere: 'E-Commerce & Ритейл',
    label: 'Реальный клиент',
    url: 'https://max.kg',
    desc: 'Масштабная торговая площадка бытовой техники и электроники в Кыргызстане с каталогом, поиском и мобильной адаптацией.',
    tags: ['Интернет-магазин', 'E-Commerce', 'Каталог'],
  },
  {
    id: 2,
    category: 'services',
    title: 'Пример: Landing для сервиса',
    sphere: 'Сфера услуг и ремонта',
    label: 'Пример решения',
    desc: 'Конверсионный одностраничный сайт с интерактивным выбором услуги и моментальным расчётом стоимости в WhatsApp.',
    tags: ['Landing Page', 'WhatsApp Quiz', 'Google Ads'],
  },
  {
    id: 3,
    category: 'b2b',
    title: 'Пример: B2B корпоративный сайт',
    sphere: 'B2B & Промышленность',
    label: 'Пример решения',
    desc: 'Корпоративный сайт с прайс-листами, мультиязычностью (кыргызский, русский, английский) и захватом контактов для смет.',
    tags: ['Корпоративный сайт', '3 Языка', 'B2B'],
  },
  {
    id: 4,
    category: 'medical',
    title: 'Пример: Медицинский центр',
    sphere: 'Медицина & Здоровье',
    label: 'Пример решения',
    desc: 'Строгий доверительный сайт с расписанием врачей, онлайн-записью в 2 клика и быстрой загрузкой.',
    tags: ['Корпоративный сайт', 'Онлайн-запись', 'SEO'],
  },
];

const filters = [
  { id: 'all', label: 'Все' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'services', label: 'Услуги' },
  { id: 'b2b', label: 'B2B' },
  { id: 'medical', label: 'Медицина' },
];

export default function PortfolioSection({ onOpenModal }) {
  const [filter, setFilter] = React.useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 section-subtle dark:bg-[#0F1420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="badge mb-4">
            <TrendingUp className="w-3 h-3" />
            Портфолио
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Кейсы для бизнеса<br />
            <span className="text-accent">в Бишкеке</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Один реальный клиент и примеры решений по нишам — чтобы вы увидели подход в вашей сфере.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-8">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                filter === f.id
                  ? 'bg-teal-600 dark:bg-[#1FD1A5] text-white dark:text-[#0F1117]'
                  : 'bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-[#E8ECF0] dark:border-white/8 hover:border-teal-200 hover:text-teal-700 dark:hover:text-[#1FD1A5]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {filtered.map(project => (
            <div
              key={project.id}
              className="card card-hover p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono font-semibold">{project.sphere}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${
                    project.label === 'Реальный клиент'
                      ? 'bg-[#F0FDFB] dark:bg-teal-900/20 text-teal-600 dark:text-[#1FD1A5] border border-[#CCFBF1] dark:border-teal-700/20'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-500 border border-[#E8ECF0] dark:border-white/8'
                  }`}>
                    {project.label}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-[#1FD1A5] transition-colors">
                  {project.title}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="inline-flex items-center ml-2 text-teal-500 text-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{project.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-[#E8ECF0] dark:border-white/8 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url || `https://wa.me/996555874455?text=${encodeURIComponent(`Хочу посмотреть кейс: ${project.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-teal-600 dark:text-[#1FD1A5] hover:underline"
                >
                  {project.url ? 'Перейти на сайт ↗' : 'Запросить презентацию →'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 dark:bg-[#1FD1A5] dark:hover:bg-[#17B890] text-white dark:text-[#0F1117] font-bold shadow-sm hover:-translate-y-0.5 transition-all"
          >
            Хочу такой же сайт для моего бизнеса →
          </button>
        </div>

      </div>
    </section>
  );
}
