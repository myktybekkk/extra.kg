import React, { useState } from 'react';
import { ExternalLink, MessageSquare, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PortfolioSection({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'ecommerce',
      title: 'Торговый портал MAX.KG',
      sphere: 'E-Commerce & Ритейл',
      metrics: 'Реальный клиент • max.kg',
      url: 'https://max.kg',
      desc: 'Масштабная торговая площадка бытовой техники, электроники и товаров в Кыргызстане с каталогом, поиском и мобильной адаптацией.',
      tags: ['Интернет-магазин', 'E-Commerce', 'Каталог', 'max.kg']
    },
    {
      id: 2,
      category: 'services',
      title: 'Пример: Landing для сервисного центра',
      sphere: 'Сфера услуг и ремонта',
      metrics: 'Пример решения',
      desc: 'Конверсионный одностраничный сайт с интерактивным выбором поломки и моментальным расчётом стоимости в мессенджере. Иллюстрация подхода для ниши услуг.',
      tags: ['Landing Page', 'WhatsApp Quiz', 'Google Ads']
    },
    {
      id: 3,
      category: 'b2b',
      title: 'Пример: Корпоративный B2B сайт',
      sphere: 'B2B & Промышленность',
      metrics: 'Пример решения',
      desc: 'Корпоративный сайт с прайс-листами, мультиязычностью (кыргызский, русский, английский) и захватом контактов для смет. Концепция для B2B оптовой торговли.',
      tags: ['Корпоративный сайт', '3 Языка', 'B2B']
    },
    {
      id: 4,
      category: 'medical',
      title: 'Пример: Медицинский центр',
      sphere: 'Медицина & Здоровье',
      metrics: 'Пример решения',
      desc: 'Строгий доверительный веб-ресурс с расписанием врачей, онлайн-записью в 2 клика и быстрой загрузкой. Пример для медицинской ниши.',
      tags: ['Корпоративный сайт', 'Онлайн-запись', 'SEO']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-[#0F1117] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-[#1FD1A5]/10 border border-teal-200 dark:border-[#1FD1A5]/30 mb-4">
            <TrendingUp className="w-4 h-4 text-[#0D9488] dark:text-[#1FD1A5]" />
            <span className="text-xs font-bold tracking-wider text-[#0D9488] dark:text-[#1FD1A5] uppercase">
              Портфолио & Проекты
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Реальные кейсы для бизнеса <span className="text-gradient">в Бишкеке</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-[#A8B0C0] font-normal">
            Мы создаем рабочие веб-ресурсы и сервисы с доказанным качеством для предпринимателей Кыргызстана.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 max-w-full shadow-sm">
            {[
              { id: 'all', label: 'Все проекты' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'services', label: 'Услуги' },
              { id: 'b2b', label: 'B2B & Опт' },
              { id: 'medical', label: 'Медицина' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-[#0D9488] text-white dark:bg-[#1FD1A5] dark:text-[#0F1117] shadow-sm'
                    : 'text-slate-600 dark:text-[#A8B0C0] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="card-surface card-surface-hover p-8 rounded-3xl border border-slate-200 dark:border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Metric pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-slate-500 dark:text-[#A8B0C0] font-mono font-semibold">{project.sphere}</span>
                  <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-[#1FD1A5]/20 text-[#0D9488] dark:text-[#1FD1A5] border border-teal-200 dark:border-[#1FD1A5]/40 text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {project.metrics}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#0D9488] dark:group-hover:text-[#1FD1A5] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0D9488] dark:text-[#1FD1A5] text-xs font-mono underline hover:text-slate-900 dark:hover:text-white"
                    >
                      {project.url.replace('https://', '')} ↗
                    </a>
                  )}
                </h3>

                <p className="text-sm text-slate-600 dark:text-[#A8B0C0] leading-relaxed mb-6 font-normal">
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-[#A8B0C0] border border-slate-200 dark:border-white/10 font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url || `https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%20${encodeURIComponent(project.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D9488] dark:text-[#1FD1A5] hover:underline"
                >
                  <span>{project.url ? 'Перейти на живой сайт ↗' : 'Запросить презентацию решения в WhatsApp'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-2xl bg-[#0D9488] hover:bg-[#0F766E] text-white dark:bg-[#1FD1A5] dark:hover:bg-[#17B890] dark:text-[#0F1117] font-bold text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            Хочу такой же сайт для своего бизнеса →
          </button>
        </div>

      </div>
    </section>
  );
}
