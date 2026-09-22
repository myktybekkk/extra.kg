import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Домен, хостинг и доступы оформляются строго на меня?',
    a: 'Да, на 100%. Все цифровые активы — доменное имя (.kg / .com), сервер, база данных, CMS и исходный код — регистрируются строго на ваш личный e-mail с первого дня разработки. Вы полностью независимы от нашей студии.',
  },
  {
    q: 'Что будет, если вы задержите сдачу сайта?',
    a: 'В официальном договоре зафиксирована конкретная дата сдачи и наша прямая финансовая ответственность: мы выплачиваем 1% от общей суммы договора за каждый рабочий день задержки по нашей вине.',
  },
  {
    q: 'Нужно ли мне самому писать тексты и искать фотографии?',
    a: 'Нет, вам не придётся этим заниматься. Мы проводим понятное 60-минутное интервью, после чего наш коммерческий редактор сам создаёт продающую структуру и пишет все тексты. В стоимость также включён грамотный перевод на кыргызский язык.',
  },
  {
    q: 'Смогу ли я сам менять цены или добавлять товары без программиста?',
    a: 'Да. Мы подключаем удобную CMS-панель управления и записываем именные короткие видеоинструкции для вас и ваших сотрудников. Изменить цену, номер телефона или добавить товар занимает 2 минуты.',
  },
  {
    q: 'Какие способы онлайн-оплаты можно подключить к интернет-магазину?',
    a: 'Интегрируем все популярные платёжные шлюзы Кыргызстана: MBank (QR и приложение), О!Деньги, Элкарт, VISA и Mastercard. Уведомление об успешной оплате сразу поступает вам в WhatsApp.',
  },
  {
    q: 'Предоставляете ли вы закрывающие документы для бухгалтерии?',
    a: 'Да, обязательно. Работаем официально через ОсОО или ИП. Предоставляем полный пакет бухгалтерских документов: официальный договор, счёт на оплату, счёт-фактуру и акты выполненных работ.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
            <HelpCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
              Частые вопросы
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            Отвечаем честно,<br />
            <span className="text-teal-600 dark:text-teal-400">без сложных терминов</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Ответы на главные вопросы предпринимателей перед стартом разработки сайта в Бишкеке.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-white dark:bg-gray-950 border rounded-2xl overflow-hidden transition-all duration-200 shadow-sm ${
                  isOpen
                    ? 'border-teal-400 dark:border-teal-600 ring-1 ring-teal-500/20'
                    : 'border-slate-200 dark:border-gray-800'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <span
                    className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                      isOpen
                        ? 'text-teal-700 dark:text-teal-400'
                        : 'text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400'
                    }`}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 dark:text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-600 dark:text-teal-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100 dark:border-gray-800">
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-3">
                      {f.a}
                    </p>
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
