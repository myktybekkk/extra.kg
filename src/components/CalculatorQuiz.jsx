import React, { useState } from 'react';
import { Calculator, CheckCircle2, ChevronRight, ChevronLeft, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';

export default function CalculatorQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    businessType: 'services',
    goal: 'whatsapp_leads',
    languages: 'ru_kg',
  });

  const businessTypes = [
    { id: 'services', label: 'Услуги и Сервис', desc: 'Автосервис, клининг, ремонт, юристы, консультации', icon: '🛠️' },
    { id: 'retail', label: 'Торговля и Магазин', desc: 'Одежда, электроника, косметика, стройматериалы', icon: '🛍️' },
    { id: 'realestate', label: 'Недвижимость и Авто', desc: 'Агентства, автосалоны, спецтехника, аренда', icon: '🏢' },
    { id: 'b2b', label: 'B2B и Производство', desc: 'Оптовые поставки, цеха, заводы, дистрибуция', icon: '🏭' },
  ];

  const goals = [
    { id: 'whatsapp_leads', label: 'Прямые заявки в WhatsApp', desc: 'Быстрый запуск, фокус на звонках и сообщениях с рекламы', base: 20000 },
    { id: 'catalog', label: 'Каталог продукции с фильтрацией', desc: 'Клиенты сами выбирают товары без долгой пересылки PDF', base: 45000 },
    { id: 'ecommerce', label: 'Интернет-магазин с оплатой MBank / О!', desc: 'Корзина, приём платежей, уведомления менеджеру', base: 65000 },
  ];

  const languagesOptions = [
    { id: 'ru', label: 'Только Русский язык', desc: 'Базовая комплектация сайта', extra: 0 },
    { id: 'ru_kg', label: 'Русский + Кыргызский (Контент под ключ)', desc: 'Полный перевод носителем языка включён', extra: 0 },
    { id: 'ru_kg_en', label: 'Русский + Кыргызский + English', desc: 'Полная мультиязычность для иностранных партнёров', extra: 8000 },
  ];

  const calculateEstimate = () => {
    const selectedGoal = goals.find((g) => g.id === answers.goal) || goals[0];
    const selectedLang = languagesOptions.find((l) => l.id === answers.languages) || languagesOptions[0];
    return selectedGoal.base + selectedLang.extra;
  };

  const getWhatsAppMessage = () => {
    const total = calculateEstimate();
    const selGoal = goals.find(g => g.id === answers.goal)?.label;
    const selBiz = businessTypes.find(b => b.id === answers.businessType)?.label;
    const selLang = languagesOptions.find(l => l.id === answers.languages)?.label;

    const text = `Здравствуйте extra.kg!\nЯ рассчитал ориентировочную стоимость на сайте:\n• Ниша: ${selBiz}\n• Задача: ${selGoal}\n• Языки: ${selLang}\n• Расчётная цена: от ${total.toLocaleString()} сом\nХочу зафиксировать эти условия в официальном договоре.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-slate-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
            <Calculator className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
              Интерактивный калькулятор
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            Рассчитайте точную стоимость<br />
            <span className="text-teal-600 dark:text-teal-400">за 3 простых шага</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Без сложных технических терминов. Выберите ваши цели, и мы рассчитаем стоимость с гарантией фиксации в договоре.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-sm">

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
              <span>Шаг {step} из 3</span>
              <span className="text-teal-600 dark:text-teal-400">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-gray-800 overflow-hidden">
              <div
                className="h-full bg-teal-600 dark:bg-teal-500 transition-all duration-300 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Business Type */}
          {step === 1 && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                1. В какой сфере работает ваш бизнес?
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Это поможет подобрать оптимальную структуру конверсии и офферы.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {businessTypes.map((item) => {
                  const isSelected = answers.businessType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAnswers({ ...answers, businessType: item.id })}
                      className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-4 ${
                        isSelected
                          ? 'bg-teal-50/80 dark:bg-teal-950/40 border-teal-500 dark:border-teal-500 shadow-sm ring-1 ring-teal-500'
                          : 'bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 hover:border-slate-300 dark:hover:border-gray-700'
                      }`}
                    >
                      <span className="text-3xl shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <div className="font-bold text-base text-slate-900 dark:text-white mb-1">
                          {item.label}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Goal */}
          {step === 2 && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                2. Какова основная цель сайта?
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Выберите функционал, необходимый для решения текущих задач.
              </p>
              <div className="space-y-4">
                {goals.map((item) => {
                  const isSelected = answers.goal === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAnswers({ ...answers, goal: item.id })}
                      className={`w-full p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-teal-50/80 dark:bg-teal-950/40 border-teal-500 dark:border-teal-500 shadow-sm ring-1 ring-teal-500'
                          : 'bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 hover:border-slate-300 dark:hover:border-gray-700'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-base text-slate-900 dark:text-white mb-1">
                          {item.label}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                      <div className="font-serif font-extrabold text-teal-600 dark:text-teal-400 text-base shrink-0">
                        от {item.base.toLocaleString()} сом
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Languages & Final Summary */}
          {step === 3 && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                3. Языковая версия и контент
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Мы сами готовим продающие тексты на русском и кыргызском языках.
              </p>
              <div className="space-y-3 mb-8">
                {languagesOptions.map((item) => {
                  const isSelected = answers.languages === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAnswers({ ...answers, languages: item.id })}
                      className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-teal-50/80 dark:bg-teal-950/40 border-teal-500 dark:border-teal-500 ring-1 ring-teal-500'
                          : 'bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {item.desc}
                        </div>
                      </div>
                      {item.extra > 0 && (
                        <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                          +{item.extra.toLocaleString()} сом
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Price Calculation Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800/60 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Предварительная смета проекта под ключ
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-teal-700 dark:text-teal-400 mb-3">
                  от {calculateEstimate().toLocaleString()} сом
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-6">
                  <span className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400">
                    <CheckCircle2 className="w-4 h-4" /> 7–14 рабочих дней
                  </span>
                  <span className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400">
                    <ShieldCheck className="w-4 h-4" /> Фиксация цены в договоре
                  </span>
                </div>
                <a
                  href={`https://wa.me/996555874455?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-md transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Зафиксировать смету в WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-gray-800 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-gray-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Назад
              </button>
            ) : <div />}

            {step < 3 && (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-sm transition-all cursor-pointer ml-auto"
              >
                Далее
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
