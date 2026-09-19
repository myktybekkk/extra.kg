import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Оформляются ли домен, хостинг и доступы на меня?',
      a: 'Да! 100% цифровых активов (домен .kg/.com, сервера, база данных и CMS) оформляются строго на ваш личный e-mail и имя с первого дня разработки. Вы независимы от веб-студии.'
    },
    {
      q: 'Что будет, если вы задержите сдачу сайта?',
      a: 'В официальном договоре зафиксирована конкретная дата сдачи и пункт о финансовой ответственности: 1% от стоимости проекта за каждый рабочий день просрочки по нашей вине.'
    },
    {
      q: 'Придется ли мне самостоятельно писать тексты и искать фото?',
      a: 'Нет. Мы проводим 60-минутное интервью с вами, после чего коммерческий редактор сам пишет продающую структуру и тексты, а также готовит профессиональный перевод на кыргызский и английский языки.'
    },
    {
      q: 'Смогу ли я сам менять цены или товары без программиста?',
      a: 'Да! Мы передаем вам понятную панель управления и записываем пакет именных коротких видеоинструкций. Вы сможете сменить цену или добавить новый товар за 2 минуты.'
    },
    {
      q: 'Какие способы онлайн-оплаты можно подключить?',
      a: 'Интегрируем все популярные платежные системы Кыргызстана: MBank, О!Деньги, Элкарт, VISA, Mastercard. Заявки и подтверждения оплаты сразу приходят в ваш WhatsApp.'
    },
    {
      q: 'Предоставляете ли вы закрывающие документы для бухгалтерии?',
      a: 'Да, работаем как с физическими лицами (ИП), так и с юридическими компаниями (ОсОО). Высылаем официальные договоры, акты выполненных работ и счета-фактуры.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#0C0E14] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-4">
            <HelpCircle className="w-4 h-4 text-[#1FD1A5]" />
            <span className="text-xs font-semibold tracking-wider text-[#1FD1A5] uppercase">
              Ответы на Вопросы
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Часто задаваемые вопросы <span className="text-gradient">простым языком</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A8B0C0] font-light">
            Отвечаем честно и без абстрактных терминов.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-white hover:text-[#1FD1A5] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1FD1A5] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 text-sm text-[#A8B0C0] leading-relaxed font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
