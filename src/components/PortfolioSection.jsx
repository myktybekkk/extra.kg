import React, { useState } from 'react';
import { ExternalLink, MessageSquare, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PortfolioSection({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'services',
      title: 'Сеть сервисных центров Bishkek Repair',
      sphere: 'Сфера услуг и ремонта',
      metrics: '+12% конверсия в WhatsApp',
      desc: 'Конверсионный одностраничный сайт с интерактивным выбором поломки и моментальным расчетом стоимости в мессенджере.',
      tags: ['Landing Page', 'WhatsApp Quiz', 'Google Ads'],
      imageBg: 'from-cyan-900/40 to-[#0F1117]'
    },
    {
      id: 2,
      category: 'ecommerce',
      title: 'Бренд одежды Aiperi Fashion',
      sphere: 'E-Commerce & Ритейл',
      metrics: 'Окупаемость за 1-й месяц',
      desc: 'Интернет-магазин с приемом платежей через MBank и О!Деньги, быстрой фильтрацией размеров и синхронизацией с инстаграмом.',
      tags: ['Интернет-магазин', 'MBank', 'Каталог'],
      imageBg: 'from-[#1FD1A5]/20 to-[#0F1117]'
    },
    {
      id: 3,
      category: 'b2b',
      title: 'Оптовое оборудование KG Tech',
      sphere: 'B2B & Промышленность',
      metrics: 'Экономия 4 часов в день',
      desc: 'Корпоративный сайт с прайс-листами, мультиязычностью (Кыргызский, Русский, Английский) и захватом контактов для смет.',
      tags: ['Корпоративный сайт', '3 Языка', 'B2B'],
      imageBg: 'from-blue-900/40 to-[#0F1117]'
    },
    {
      id: 4,
      category: 'medical',
      title: 'Медицинский центр MedPlus',
      sphere: 'Медицина & Здоровье',
      metrics: '+42% онлайн-записей',
      desc: 'Строгий доверительный веб-ресурс с расписанием врачей, онлайн-записью в 2 клика и быстрой загрузкой за 1,1 секунды.',
      tags: ['Корпоративный сайт', 'Онлайн-запись', 'SEO'],
      imageBg: 'from-teal-900/40 to-[#0F1117]'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[#0F1117] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-4">
            <TrendingUp className="w-4 h-4 text-[#1FD1A5]" />
            <span className="text-xs font-semibold tracking-wider text-[#1FD1A5] uppercase">
              Портфолио & Результаты
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Реальные кейсы для бизнеса <span className="text-gradient">в Бишкеке</span>
          </h2>
          <p className="text-base text-[#A8B0C0] font-light">
            Мы не просто делаем «красивую картинку», а создаем рабочий инструмент с измеримой выгодой для предпринимателя.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 max-w-full">
            {[
              { id: 'all', label: 'Все проекты' },
              { id: 'services', label: 'Услуги' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'b2b', label: 'B2B & Опт' },
              { id: 'medical', label: 'Медицина' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-gradient-accent text-[#0F1117]'
                    : 'text-[#A8B0C0] hover:text-white'
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
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Metric pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-[#A8B0C0] font-mono">{project.sphere}</span>
                  <span className="px-3 py-1 rounded-full bg-[#1FD1A5]/20 text-[#1FD1A5] border border-[#1FD1A5]/40 text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {project.metrics}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#1FD1A5] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#A8B0C0] leading-relaxed mb-6 font-light">
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-[#A8B0C0] border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/996700123456?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%B8%20%D0%B4%D0%B5%D0%BC%D0%BE%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%20${encodeURIComponent(project.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1FD1A5] hover:underline"
                >
                  <span>Запросить презентацию решения в WhatsApp</span>
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
            className="px-8 py-4 rounded-2xl bg-gradient-accent text-[#0F1117] font-bold text-sm shadow-lg shadow-[#1FD1A5]/25 hover:scale-105 transition-all cursor-pointer"
          >
            Хочу такой же сайт для своего бизнеса →
          </button>
        </div>

      </div>
    </section>
  );
}
