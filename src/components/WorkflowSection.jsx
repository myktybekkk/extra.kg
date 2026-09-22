import React from 'react';
import { Clock, CheckCircle, ShieldAlert, ArrowRight, Calendar } from 'lucide-react';

export default function WorkflowSection({ onOpenModal }) {
  const timeline = [
    {
      day: 'День 1',
      title: 'Интервью и техническое задание',
      desc: 'Созваниваемся на 60 минут, фиксируем цели, сильные стороны бизнеса и утверждаем чёткое техническое задание.'
    },
    {
      day: 'Дни 2–4',
      title: 'Прототип и продающие тексты',
      desc: 'Проектируем логику блоков и пишем убедительные офферы и тексты для кыргызстанской аудитории.'
    },
    {
      day: 'Дни 5–8',
      title: 'Индивидуальный UI/UX дизайн',
      desc: 'Разрабатываем премиальный интерфейс с безупречным удобством для мобильных экранов и компьютеров.'
    },
    {
      day: 'Дни 9–12',
      title: 'Вёрстка и подключение WhatsApp / MBank',
      desc: 'Пишем чистый быстрый код, добиваемся скорости загрузки 90+ в Google PageSpeed и настраиваем приём заявок.'
    },
    {
      day: 'Дни 13–14',
      title: 'Запуск и передача 100% доступов',
      desc: 'Оформляем домен и хостинг на ваше имя, отдаём пароли, подписываем акт и обучаем работе с сайтом.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
            <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
              Прозрачный процесс
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            От брифа до первых заявок<br />
            <span className="text-teal-600 dark:text-teal-400">за 7–14 рабочих дней</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Каждый этап закреплен календарным графиком в официальном договоре. При задержке с нашей стороны — выплачиваем неустойку 1% за каждый рабочий день.
          </p>
        </div>

        {/* Steps Grid - 5 steps in responsive 1 / 2 / 3 cols for comfortable reading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {timeline.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl p-7 flex flex-col justify-between hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-200 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-bold font-mono">
                    {step.day}
                  </span>
                  <span className="text-xs font-bold font-mono text-slate-400 dark:text-gray-600">
                    ШАГ 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-gray-800 flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400">
                <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Фиксация результата в акте</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Contract Guarantee CTA */}
          <div className="bg-teal-600 dark:bg-teal-700 text-white rounded-3xl p-7 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">
                Точный срок зафиксирован
              </h3>
              <p className="text-sm text-teal-50 leading-relaxed mb-6">
                Вы точно знаете дату сдачи сайта ещё до внесения предоплаты.
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-teal-800 font-bold text-sm shadow-sm transition-all cursor-pointer"
            >
              Зафиксировать срок в договоре →
            </button>
          </div>
        </div>

        {/* Financial Guarantee Bar */}
        <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
            <div className="text-sm text-slate-800 dark:text-slate-200">
              <strong className="text-amber-800 dark:text-amber-400 font-bold">Финансовая ответственность: </strong>
              в случае задержки сдачи по нашей вине компенсируем 1% от общей суммы договора за каждый день просрочки.
            </div>
          </div>
          <a
            href="https://wa.me/996555874455?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%B4%D0%B0%D1%82%D1%83%20%D1%81%D1%82%D0%B0%D1%80%D1%82%D0%B0%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs whitespace-nowrap shadow-sm transition-all"
          >
            Узнать свободные даты →
          </a>
        </div>

      </div>
    </section>
  );
}
