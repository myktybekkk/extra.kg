import React from 'react';
import { ShieldCheck, Key, FileText, AlertCircle, Lock, Award, CheckCircle } from 'lucide-react';

export default function TrustSection() {
  const trustCards = [
    {
      icon: Key,
      badge: 'Боль #7, #20',
      title: '100% прав на цифровые активы',
      description:
        'Домен, хостинг, CMS и исходный код оформляются строго на ваше имя с первого дня. Вы получаете полный root-доступ и не привязаны к веб-студии навсегда.',
      highlight: 'Все пароли и аккаунты — на ваш личный e-mail'
    },
    {
      icon: AlertCircle,
      badge: 'Финансовый SLA',
      title: '1% неустойки за день просрочки',
      description:
        'Мы не затягиваем проекты на месяцы. Срок сдачи фиксируется в договоре. Если мы задержим проект хотя бы на 1 день — платим вам финансовую неустойку.',
      highlight: 'Сдача строго за 7–14 рабочих дней'
    },
    {
      icon: FileText,
      badge: 'Боли #1, #10',
      title: 'Окончательная смета без доплат',
      description:
        'Никаких "сюрпризов" в виде доплат за мобильную адаптацию, формы заявкоприема или привязку WhatsApp. Итоговая сумма зафиксирована в договоре.',
      highlight: '0 сом скрытых платежей'
    },
    {
      icon: ShieldCheck,
      badge: 'Юридическая защита',
      title: 'Официальный договор ОсОО / ИП',
      description:
        'Предоставляем весь пакет закрывающих документов: акты выполненных работ, счета-фактуры. Готовы работать с юридическими лицами и тендерами.',
      highlight: 'Полная бухгалтерская отчетность'
    }
  ];

  return (
    <section id="trust" className="py-20 bg-[#0F1117] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#1FD1A5]" />
            <span className="text-xs font-semibold tracking-wider text-[#1FD1A5] uppercase">
              Безопасность и Гарантии
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ваш бизнес защищен <span className="text-gradient">на 100%</span>
          </h2>
          <p className="text-base text-[#A8B0C0] font-light">
            Мы изучили 20 ключевых опасений заказчиков в Бишкеке и превратили их в жесткие пункты нашего официального договора.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-8 rounded-3xl relative flex flex-col justify-between group border border-white/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1FD1A5]/20 to-[#00AEEF]/20 border border-[#1FD1A5]/30 flex items-center justify-center text-[#1FD1A5] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-[#A8B0C0] border border-white/10">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#1FD1A5] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#A8B0C0] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#1FD1A5]">
                  <CheckCircle className="w-4 h-4" />
                  <span>{card.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout: Us vs Competitors */}
        <div className="mt-16 glass-panel p-8 rounded-3xl border border-white/10">
          <h3 className="font-serif text-2xl font-bold text-center text-white mb-8">
            Сравнение условий: extra.kg vs Обычная веб-студия
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="font-bold text-[#A8B0C0] mb-2">Права и доступы</div>
              <div className="text-red-400 mb-2 flex items-center gap-1.5">
                <span>✕</span> <span>Оформляют на студию</span>
              </div>
              <div className="text-[#1FD1A5] font-semibold flex items-center gap-1.5">
                <span>✓</span> <span>100% на ваш личный e-mail</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="font-bold text-[#A8B0C0] mb-2">Наполнение контентом</div>
              <div className="text-red-400 mb-2 flex items-center gap-1.5">
                <span>✕</span> <span>Требуют готовые тексты</span>
              </div>
              <div className="text-[#1FD1A5] font-semibold flex items-center gap-1.5">
                <span>✓</span> <span>Контент под ключ + перевод</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="font-bold text-[#A8B0C0] mb-2">Контроль дедлайнов</div>
              <div className="text-red-400 mb-2 flex items-center gap-1.5">
                <span>✕</span> <span>Затягивают на 3–6 месяцев</span>
              </div>
              <div className="text-[#1FD1A5] font-semibold flex items-center gap-1.5">
                <span>✓</span> <span>1% штраф за день просрочки</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
