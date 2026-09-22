import React, { useState } from 'react';
import { Smartphone, Zap, MessageSquare, Send, CheckCheck, Bell } from 'lucide-react';

export default function MobileIntegration() {
  const [testName, setTestName] = useState('');
  const [testPhone, setTestPhone] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSimulateSubmit = (e) => {
    e.preventDefault();
    if (!testName || !testPhone) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setTestName('');
      setTestPhone('');
    }, 4000);
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 mb-4">
              <Smartphone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-xs font-bold tracking-widest text-teal-700 dark:text-teal-400 uppercase">
                Мобильная конверсия
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-5">
              85% клиентов открывают сайт со смартфона.<br />
              <span className="text-teal-600 dark:text-teal-400">Мы ведём их прямо в WhatsApp</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              В Кыргызстане пользователи не любят длинные анкеты. Мы разрабатываем адаптивные сайты, которые моментально загружаются даже при слабом 4G-соединении и в один клик начинают диалог с вашим отделом продаж.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#25D366] flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800/40">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    Клик в чат WhatsApp без лишних форм
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Клиент нажимает кнопку и сразу попадает в диалог с готовым текстом: «Здравствуйте! Хочу уточнить цену...».
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-200 dark:border-sky-800/40">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    Мгновенные уведомления руководителю
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Каждая заявка с сайта моментально дублируется в ваш рабочий Telegram-чат или CRM-систему без потери лидов.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mobile Interactive Demo */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm bg-slate-50 dark:bg-gray-900 p-6 rounded-[36px] border border-slate-200 dark:border-gray-800 shadow-xl relative">

              {/* Phone Speaker Notch */}
              <div className="w-24 h-3.5 rounded-full bg-slate-200 dark:bg-gray-800 mx-auto mb-5 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-gray-700" />
              </div>

              {/* Simulated Screen */}
              <div className="bg-white dark:bg-gray-950 rounded-2xl p-5 border border-slate-200 dark:border-gray-800 shadow-sm">

                {/* Top header bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-gray-800 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">WhatsApp Лид-генератор</span>
                  </div>
                  <Bell className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                </div>

                {!sentSuccess ? (
                  <form onSubmit={handleSimulateSubmit} className="space-y-3.5">
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Протестируйте, как быстро клиент отправляет заявку:
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя (например: Асан)"
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-teal-500"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон (+996 555 ...)"
                        value={testPhone}
                        onChange={(e) => setTestPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-teal-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Отправить тестовую заявку</span>
                    </button>
                  </form>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                        <CheckCheck className="w-4 h-4" /> Заявка поступила!
                      </span>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">Только что</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      «Новый клиент <strong>{testName}</strong> ({testPhone}) ожидает ответа в WhatsApp.»
                    </p>
                    <div className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 text-center border-t border-emerald-100 dark:border-emerald-900/40 pt-2">
                      Менеджер отвечает за 2 минуты и закрывает сделку.
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Home Indicator */}
              <div className="w-28 h-1 rounded-full bg-slate-300 dark:bg-gray-700 mx-auto mt-4" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
