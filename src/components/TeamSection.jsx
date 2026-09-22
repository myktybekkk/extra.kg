import React from 'react';
import { Users, CheckCircle2, Layout, Code2, FileText } from 'lucide-react';

const team = [
  {
    name: 'Азамат Ибраимов',
    role: 'Ведущий продуктовый дизайнер',
    icon: Layout,
    img: '/azamat.png',
    stat: '60+ UI/UX проектов',
    desc: 'Спроектировал коммерческие интерфейсы для 60+ онлайн-сервисов Бишкека. Продумывает путь покупателя до одного клика на покупку.',
  },
  {
    name: 'Бакыт Токтогулов',
    role: 'Старший веб-разработчик',
    icon: Code2,
    img: '/bakyt.png',
    stat: '85+ веб-проектов',
    desc: 'Более 8 лет в разработке веб-платформ. Обеспечивает скорость 90+ в Google PageSpeed и надёжную интеграцию с WhatsApp и MBank.',
  },
  {
    name: 'Динара Садыкова',
    role: 'Коммерческий редактор и контент',
    icon: FileText,
    img: '/dinara.png',
    stat: '70+ B2B текстов',
    desc: 'Создала продающие смыслы и структуры для 70 компаний. Превращает сложные факты вашего бизнеса в убедительные выгоды для клиентов.',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
            <Users className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
              Команда проекта
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            За вашим сайтом<br />
            <span className="text-teal-600 dark:text-teal-400">закреплены опытные эксперты</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Никаких стажёров или анонимных исполнителей. С вами работает команда с проверенным опытом реализации коммерческих проектов.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {team.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="group bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-teal-400 dark:hover:border-teal-600 hover:-translate-y-1 transition-all duration-200 shadow-sm"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 dark:bg-gray-800">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{ display: 'none' }} className="absolute inset-0 items-center justify-center bg-teal-50 dark:bg-teal-950 text-teal-600">
                    <Icon className="w-16 h-16" />
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3.5 py-1 rounded-full bg-teal-600 text-white text-xs font-bold shadow-md">
                      {m.stat}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-7">
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {m.name}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                    {m.role}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {m.desc}
                  </p>
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-gray-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>Прямой контакт в рабочем чате WhatsApp</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
