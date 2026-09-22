import React, { useState } from 'react';
import { Smartphone, Zap, MessageSquare, Send, CheckCheck, Shield, Bell } from 'lucide-react';

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
    <section className="py-20 bg-slate-100 dark:bg-[#0C0E14] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-[#1FD1A5]/10 border border-teal-200 dark:border-[#1FD1A5]/30 mb-4">
              <Smartphone className="w-4 h-4 text-[#0D9488] dark:text-[#1FD1A5]" />
              <span className="text-xs font-bold tracking-wider text-[#0D9488] dark:text-[#1FD1A5] uppercase">
                Мобильная Конверсия & Заявки
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              100% удобство на смартфонах и заявки <span className="text-gradient">сразу в WhatsApp</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-[#A8B0C0] font-normal leading-relaxed mb-8">
              Более 85% интернет-трафика в Бишкеке приходится на мобильные телефоны. Мы верстаем сайты так, чтобы они открывались за 1,2 секунды даже на 3G и сразу переводили покупателя в мессенджер.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Прямой клик в чат WhatsApp без лишних форм</div>
                  <div className="text-xs text-slate-500 dark:text-[#A8B0C0]">Клиент нажимает 1 кнопку и попадает в диалог с заготовленным текстом</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-[#00AEEF]/20 text-[#0284C7] dark:text-[#00AEEF] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Моментальные пуш-уведомления руководителю</div>
                  <div className="text-xs text-slate-500 dark:text-[#A8B0C0]">Каждая заполненная форма прилетает в ваш рабочий Telegram или CRM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mobile Interactive Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm card-surface p-6 rounded-[40px] border-2 border-slate-300 dark:border-white/15 shadow-xl relative">
              
              {/* Phone Top Speaker notch */}
              <div className="w-32 h-4 rounded-full bg-slate-200 dark:bg-white/10 mx-auto mb-6 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-white/20" />
              </div>

              {/* Simulated Phone Screen */}
              <div className="bg-slate-100 dark:bg-[#0F1117] rounded-3xl p-5 border border-slate-200 dark:border-white/10">
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">WhatsApp Бизнес-Лид</span>
                  </div>
                  <Bell className="w-4 h-4 text-[#0D9488] dark:text-[#1FD1A5] animate-bounce" />
                </div>

                {/* Form simulation */}
                {!sentSuccess ? (
                  <form onSubmit={handleSimulateSubmit} className="space-y-3">
                    <div className="text-xs text-slate-600 dark:text-[#A8B0C0] font-bold">
                      Протестировать пример отправки заявки:
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя (например: Асан)"
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#A8B0C0] text-xs focus:outline-none focus:border-[#0D9488] dark:focus:border-[#1FD1A5]"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон (+996 555 ...)"
                        value={testPhone}
                        onChange={(e) => setTestPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#A8B0C0] text-xs focus:outline-none focus:border-[#0D9488] dark:focus:border-[#1FD1A5]"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Протестировать отправку заявки</span>
                    </button>
                  </form>
                ) : (
                  /* WhatsApp Incoming Lead Message Simulation */
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-[#25D366]/15 border border-emerald-200 dark:border-[#25D366]/40 animate-fade-in">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#059669] dark:text-[#25D366] flex items-center gap-1">
                        <CheckCheck className="w-4 h-4" /> Пример: Заявка доставлена!
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-[#A8B0C0] font-mono">Только что</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-white leading-relaxed font-medium">
                      «Новая заявка от <strong>{testName}</strong> ({testPhone}). Клиент интересуется разработкой!»
                    </p>
                    <div className="mt-3 text-[10px] text-slate-500 dark:text-[#A8B0C0] text-center border-t border-slate-200 dark:border-white/10 pt-2 font-medium">
                      Так ваш менеджер будет мгновенно получать контакты целевых клиентов
                    </div>
                  </div>
                )}

              </div>

              {/* Phone Bottom Home Bar */}
              <div className="w-24 h-1 rounded-full bg-slate-300 dark:bg-white/20 mx-auto mt-6" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
