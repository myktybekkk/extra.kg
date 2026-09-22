import React from 'react';
import { Users, CheckCircle2, Layout, Code2, FileText } from 'lucide-react';

const masters = [
  {
    name: 'Азамат Ибраимов',
    role: 'Ведущий продуктовый дизайнер',
    icon: Layout,
    image: '/azamat.png',
    stat: '60+ UI/UX проектов',
    desc: 'Спроектировал коммерческие интерфейсы для 60+ онлайн-сервисов Бишкека. Сокращает путь покупателя до клика.',
  },
  {
    name: 'Бакыт Токтогулов',
    role: 'Старший веб-разработчик',
    icon: Code2,
    image: '/bakyt.png',
    stat: '85+ веб-проектов',
    desc: 'С 2017 года запустил более 85 мобильных и десктопных систем. PageSpeed 90+ и отказоустойчивость.',
  },
  {
    name: 'Динара Садыкова',
    role: 'Коммерческий редактор',
    icon: FileText,
    image: '/dinara.png',
    stat: '70+ B2B текстов',
    desc: 'Написала продающие структуры для 70 компаний B2B. Освобождает предпринимателя от рутины.',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white dark:bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="badge mb-4">
            <Users className="w-3 h-3" />
            Команда
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            За вашим проектом<br />
            <span className="text-accent">закреплены эксперты</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Никаких стажёров или анонимных фрилансеров — только специалисты с доказанными результатами.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {masters.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="card card-hover overflow-hidden group"
              >
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-white/5">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback avatar */}
                  <div
                    className="w-full h-full hidden items-center justify-center bg-[#F0FDFB] dark:bg-teal-900/20 text-teal-600 dark:text-[#1FD1A5]"
                    style={{ display: 'none' }}
                  >
                    <Icon className="w-16 h-16" />
                  </div>
                  {/* Stat badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-teal-600 dark:bg-[#1FD1A5] text-white dark:text-[#0F1117] text-xs font-bold shadow">
                      {m.stat}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-0.5 group-hover:text-teal-600 dark:group-hover:text-[#1FD1A5] transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-xs text-teal-600 dark:text-[#1FD1A5] font-bold font-mono mb-3">{m.role}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{m.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                    <span>Личный контроль в общем чате</span>
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
