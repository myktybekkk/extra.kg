import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Оформляются ли домен, хостинг и доступы на меня?',
    a: 'Да. 100% цифровых активов (домен .kg/.com, серверы, база данных и CMS) оформляются строго на ваш личный e-mail с первого дня разработки. Вы независимы от студии.',
  },
  {
    q: 'Что будет, если вы задержите сдачу сайта?',
    a: 'В официальном договоре зафиксирована конкретная дата сдачи и финансовая ответственность: 1% от суммы договора за каждый рабочий день просрочки по нашей вине.',
  },
  {
    q: 'Придётся ли мне самому писать тексты и искать фото?',
    a: 'Нет. Мы проводим 60-минутное интервью, после чего коммерческий редактор сам пишет продающую структуру и тексты, а также готовит перевод на кыргызский и английский.',
  },
  {
    q: 'Смогу ли я менять цены или товары без программиста?',
    a: 'Да. Мы передаём понятную панель управления и записываем именные видеоинструкции. Цену или новый товар можно добавить за 2 минуты.',
  },
  {
    q: 'Какие способы онлайн-оплаты можно подключить?',
    a: 'Интегрируем все популярные платёжные системы КР: MBank, О!Деньги, Элкарт, VISA, Mastercard. Подтверждения приходят сразу в WhatsApp.',
  },
  {
    q: 'Предоставляете ли вы закрывающие документы для бухгалтерии?',
    a: 'Да, работаем с физлицами (ИП) и юрлицами (ОсОО). Высылаем договоры, акты выполненных работ и счета-фактуры.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-[#0B0F1A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="badge mb-4">
            <HelpCircle className="w-3 h-3" />
            FAQ
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
            Частые вопросы
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Отвечаем честно и без абстрактных терминов.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`card overflow-hidden transition-all ${isOpen ? 'border-teal-200 dark:border-teal-700/40' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-base text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-[#1FD1A5] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-0 border-t border-[#E8ECF0] dark:border-white/8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <div className="pt-4">{faq.a}</div>
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
