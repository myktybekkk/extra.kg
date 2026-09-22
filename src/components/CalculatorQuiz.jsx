import React, { useState } from 'react';
import { Calculator, CheckCircle2, ChevronRight, ChevronLeft, MessageSquare, Sparkles, ShieldAlert, Award } from 'lucide-react';

export default function CalculatorQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    businessType: 'services',
    goal: 'whatsapp_leads',
    languages: 'ru_kg',
    urgency: 'standard'
  });

  const businessTypes = [
    { id: 'services', label: 'Услуги & Сервис', icon: '🛠️', bonusCost: 0 },
    { id: 'retail', label: 'Торговля & Магазин', icon: '🛍️', bonusCost: 15000 },
    { id: 'realestate', label: 'Недвижимость & Авто', icon: '🏢', bonusCost: 10000 },
    { id: 'b2b', label: 'B2B & Производство', icon: '🏭', bonusCost: 12000 }
  ];

  const goals = [
    { id: 'whatsapp_leads', label: 'Быстрые заявки в WhatsApp', desc: 'Максимум конверсии с контекста и соцсетей', base: 25000 },
    { id: 'catalog', label: 'Каталог с прайс-листом', desc: 'Фильтрация товаров без ручной отправки PDF', base: 45000 },
    { id: 'ecommerce', label: 'Оплата MBank / О!Деньги', desc: 'Автоматический прием платежей и корзина', base: 65000 }
  ];

  const languagesOptions = [
    { id: 'ru', label: 'Только Русский язык', desc: 'Базовый вариант' },
    { id: 'ru_kg', label: 'Русский + Кыргызский (Контент под ключ)', desc: 'Профессиональный перевод нашей командой' },
    { id: 'ru_kg_en', label: 'Русский + Кыргызский + English', desc: 'Полная мультиязычность под международный рынок' }
  ];

  const calculateEstimate = () => {
    const selectedGoal = goals.find((g) => g.id === answers.goal) || goals[0];
    const selectedBusiness = businessTypes.find((b) => b.id === answers.businessType) || businessTypes[0];
    let total = selectedGoal.base;
    if (answers.languages === 'ru_kg') total += 5000;
    if (answers.languages === 'ru_kg_en') total += 12000;
    return total;
  };

  const getWhatsAppMessage = () => {
    const total = calculateEstimate();
    const text = `Здравствуйте extra.kg! Я прошёл калькулятор на сайте:
— Бюджет: ~${total.toLocaleString()} сом
— Задача: ${goals.find(g => g.id === answers.goal)?.label}
— Языки: ${languagesOptions.find(l => l.id === answers.languages)?.label}
Хочу зафиксировать эту стоимость в договоре и получить развернутую смету.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="calculator" className="py-20 bg-[#0F1117] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-4">
            <Calculator className="w-4 h-4 text-[#1FD1A5]" />
            <span className="text-xs font-semibold tracking-wider text-[#1FD1A5] uppercase">
              Интерактивный Калькулятор
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Рассчитайте точную смету за <span className="text-gradient">4 клика</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A8B0C0]">
            Без IT-терминов: выберите ваши задачи, и мы сформируем прозрачную стоимость с фиксацией в договоре.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-mono text-[#A8B0C0] mb-2">
              <span>Шаг {step} из 4</span>
              <span>{step * 25}% завершено</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-accent transition-all duration-500 ease-out"
                style={{ width: `${step * 25}%` }}
              />
            </div>
          </div>

          {/* Step 1: Business Type */}
          {step === 1 && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6">
                1. Какая сфера вашего бизнеса?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {businessTypes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setAnswers({ ...answers, businessType: item.id });
                    }}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-4 ${
                      answers.businessType === item.id
                        ? 'bg-[#1FD1A5]/15 border-[#1FD1A5] text-white shadow-lg shadow-[#1FD1A5]/10'
                        : 'bg-white/5 border-white/10 text-[#A8B0C0] hover:border-white/30'
                    }`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className="font-bold text-base text-white">{item.label}</div>
                      <div className="text-xs text-[#A8B0C0]">Адаптированные бизнес-сценарии</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Goal */}
          {step === 2 && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6">
                2. Какова главная цель вашего сайта?
              </h3>
              <div className="space-y-4">
                {goals.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setAnswers({ ...answers, goal: item.id });
                    }}
                    className={`w-full p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      answers.goal === item.id
                        ? 'bg-[#1FD1A5]/15 border-[#1FD1A5] text-white shadow-lg shadow-[#1FD1A5]/10'
                        : 'bg-white/5 border-white/10 text-[#A8B0C0] hover:border-white/30'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-base text-white mb-1">{item.label}</div>
                      <div className="text-xs text-[#A8B0C0]">{item.desc}</div>
                    </div>
                    <div className="font-serif font-bold text-[#1FD1A5] text-sm shrink-0 ml-4">
                      от {item.base.toLocaleString()} сом
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Languages & Content */}
          {step === 3 && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6">
                3. Какая языковая адаптация и контент вам нужны?
              </h3>
              <div className="space-y-4">
                {languagesOptions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setAnswers({ ...answers, languages: item.id });
                    }}
                    className={`w-full p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      answers.languages === item.id
                        ? 'bg-[#1FD1A5]/15 border-[#1FD1A5] text-white shadow-lg shadow-[#1FD1A5]/10'
                        : 'bg-white/5 border-white/10 text-[#A8B0C0] hover:border-white/30'
                    }`}
                  >
                    <div className="font-bold text-base text-white mb-1">{item.label}</div>
                    <div className="text-xs text-[#A8B0C0]">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Result summary */}
          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#1FD1A5]/20 text-[#1FD1A5] flex items-center justify-center mx-auto mb-4 border border-[#1FD1A5]/40">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Предварительный расчет готов!
              </h3>
              <p className="text-xs sm:text-sm text-[#A8B0C0] mb-6">
                Смета фиксируется в официальном договоре. Без скрытых платежей.
              </p>

              {/* Price display */}
              <div className="p-6 rounded-2xl bg-[#0F1117] border border-[#1FD1A5]/40 max-w-md mx-auto mb-8">
                <div className="text-xs text-[#A8B0C0] uppercase tracking-wider mb-1">
                  Ориентировочный бюджет под ключ
                </div>
                <div className="text-4xl sm:text-5xl font-serif font-extrabold text-gradient mb-3">
                  ~{calculateEstimate().toLocaleString()} сом
                </div>
                <div className="text-xs text-[#1FD1A5] font-semibold flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Гарантия запуска от 7 до 14 рабочих дней</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/996700123456?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-accent text-[#0F1117] font-bold text-base shadow-xl shadow-[#1FD1A5]/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Зафиксировать смету в WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
            {step > 1 && step <= 4 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-xs font-semibold text-[#A8B0C0] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Назад</span>
              </button>
            ) : <div />}

            {step < 4 && (
              <button
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-accent text-[#0F1117] font-bold text-xs sm:text-sm hover:scale-[1.02] transition-all cursor-pointer ml-auto"
              >
                <span>Далее</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
