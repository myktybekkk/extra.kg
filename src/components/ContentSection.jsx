import React from 'react';
import { PenTool, Languages, Camera, Mic, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContentSection({ onOpenModal }) {
  const steps = [
    {
      icon: Mic,
      step: '01',
      title: 'Интервью на 60 минут',
      desc: 'Проводим понятное онлайн или личное интервью. Вам не нужно писать тексты или заполнять сложные брифы — мы сами зададим нужные вопросы.'
    },
    {
      icon: PenTool,
      step: '02',
      title: 'Коммерческий копирайтинг',
      desc: 'Пишем сильные офферы, понятные заголовки и убедительные описания услуг на основе реальных фактов вашей компании.'
    },
    {
      icon: Camera,
      step: '03',
      title: 'Подбор графики и медиа',
      desc: 'Подбираем и обрабатываем лицензионные фото, иконки и иллюстрации в едином премиальном стиле вашей сферы.'
    },
    {
      icon: Languages,
      step: '04',
      title: 'Кыргызский и английский языки',
      desc: 'Выполняем грамотный перевод носителями языка, чтобы сайт вызывал 100% доверие у всех жителей Кыргызстана и зарубежных партнёров.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
            <PenTool className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
              Контент под ключ
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            Вам не придётся<br />
            <span className="text-teal-600 dark:text-teal-400">писать тексты для сайта</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Главная причина срыва сроков в веб-студиях — ожидание текстов от клиента. Мы берём всю работу со смыслом, структурой и языками полностью на себя.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl p-7 flex flex-col justify-between hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-2xl font-black text-slate-300 dark:text-gray-700">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-900 border border-teal-200 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white">
                Экономим от 40 часов личного времени владельца бизнеса
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Запускаем сайт без волокиты — профессионально пишем, переводим и оформляем.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenModal}
            className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-sm whitespace-nowrap transition-all cursor-pointer"
          >
            Заказать сайт с контентом →
          </button>
        </div>

      </div>
    </section>
  );
}
