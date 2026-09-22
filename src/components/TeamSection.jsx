import React from 'react';
import { Users, Award, Code2, Layout, FileText, CheckCircle2 } from 'lucide-react';

export default function TeamSection() {
  const masters = [
    {
      name: 'Азамат Ибраимов',
      role: 'Ведущий продуктовый дизайнер',
      icon: Layout,
      image: '/azamat.png',
      stat: '60+ UI/UX проектов',
      desc: 'Спроектировал коммерческие интерфейсы для 60+ онлайн-сервисов и магазинов Бишкека. Сократил путь покупателя до клика на оплату, увеличивая отклик посадочных страниц.'
    },
    {
      name: 'Бакыт Токтогулов',
      role: 'Старший веб-разработчик',
      icon: Code2,
      image: '/bakyt.png',
      stat: '85+ веб-проектов',
      desc: 'С 2017 года ввел в эксплуатацию более 85 мобильных и десктопных веб-систем. Обеспечивает показатели скорости 90+ в Google PageSpeed и отказоустойчивость.'
    },
    {
      name: 'Динара Садыкова',
      role: 'Коммерческий редактор и маркетолог',
      icon: FileText,
      image: '/dinara.png',
      stat: '70+ B2B текстов',
      desc: 'Написала продающие структуры для 70 компаний в сегментах B2B и услуг. Формирует офферы на основе реальных фактов бизнеса, освобождая предпринимателя от рутины.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-[#0C0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-4">
            <Users className="w-4 h-4 text-[#1FD1A5]" />
            <span className="text-xs font-semibold tracking-wider text-[#1FD1A5] uppercase">
              Команда Мастеров
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            За вашим проектом закреплены <span className="text-gradient">эксперты</span>
          </h2>
          <p className="text-base text-[#A8B0C0] font-light">
            Никаких стажеров или анонимных фрилансеров. Только проверенные специалисты с доказанными цифрами результатов.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {masters.map((master, idx) => {
            const IconComp = master.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between group overflow-hidden relative"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10">
                    <img
                      src={master.image}
                      alt={master.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent opacity-80" />
                    
                    {/* Stat badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#1FD1A5] text-[#0F1117] text-xs font-bold shadow-md">
                        {master.stat}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#0F1117]/80 backdrop-blur-md text-[#1FD1A5] flex items-center justify-center border border-white/10">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="font-serif text-2xl font-bold text-white mb-1 group-hover:text-[#1FD1A5] transition-colors">
                    {master.name}
                  </h3>
                  <p className="text-xs text-[#1FD1A5] font-semibold mb-4 font-mono">
                    {master.role}
                  </p>

                  <p className="text-xs text-[#A8B0C0] leading-relaxed font-light mb-6">
                    {master.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#A8B0C0]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1FD1A5]" />
                  <span>Личный контроль в общем чате</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
