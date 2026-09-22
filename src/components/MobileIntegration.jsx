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
    <section className="py-20 bg-[#0C0E14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30 mb-4">
              <Smartphone className="w-4 h-4 text-[#1FD1A5]" />
              <span className="text-xs font-semibold tracking-wider text-[#1FD1A5] uppercase">
                Мобильная Конверсия & Заявки
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              100% удобство на смартфонах и заявки <span className="text-gradient">сразу в WhatsApp</span>
            </h2>

            <p className="text-base text-[#A8B0C0] font-light leading-relaxed mb-8">
              Более 85% интернет-трафика в Бишкеке приходится на мобильные телефоны. Мы верстаем сайты так, чтобы они открывались за 1,2 секунды даже на 3G и сразу переводили покупателя в мессенджер.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Прямой клик в чат WhatsApp без лишних форм</div>
                  <div className="text-xs text-[#A8B0C0]">Клиент нажимает 1 кнопку и попадает в диалог с заготовленным текстом</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Моментальные пуш-уведомления руководителю</div>
                  <div className="text-xs text-[#A8B0C0]">Каждая заполненная форма прилетает в ваш рабочий Telegram или CRM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mobile Interactive Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm glass-panel p-6 rounded-[40px] border-2 border-white/15 shadow-2xl relative">
              
              {/* Phone Top Speaker notch */}
              <div className="w-32 h-4 rounded-full bg-white/10 mx-auto mb-6 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>

              {/* Simulated Phone Screen */}
              <div className="bg-[#0F1117] rounded-3xl p-5 border border-white/10">
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold text-white">WhatsApp Бизнес-Лид</span>
                  </div>
                  <Bell className="w-4 h-4 text-[#1FD1A5] animate-bounce" />
                </div>

                {/* Form simulation */}
                {!sentSuccess ? (
                  <form onSubmit={handleSimulateSubmit} className="space-y-3">
                    <div className="text-xs text-[#A8B0C0] font-semibold">
                      Попробуйте протестировать отправку:
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя (например: Асан)"
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A8B0C0] text-xs focus:outline-none focus:border-[#1FD1A5]"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон (+996 555 ...)"
                        value={testPhone}
                        onChange={(e) => setTestPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A8B0C0] text-xs focus:outline-none focus:border-[#1FD1A5]"
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
                  <div className="p-4 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 animate-fade-in">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#25D366] flex items-center gap-1">
                        <CheckCheck className="w-4 h-4" /> Имитация: Заявка в WhatsApp!
                      </span>
                      <span className="text-[10px] text-[#A8B0C0] font-mono">Только что</span>
                    </div>
                    <p className="text-xs text-white leading-relaxed">
                      «Новая заявка от <strong>{testName}</strong> ({testPhone}). Клиент интересуется разработкой!»
                    </p>
                    <div className="mt-3 text-[10px] text-[#A8B0C0] text-center border-t border-white/10 pt-2">
                      Так ваш менеджер будет мгновенно получать контакты целевых клиентов
                    </div>
                  </div>
                )}

              </div>

              {/* Phone Bottom Home Bar */}
              <div className="w-24 h-1 rounded-full bg-white/20 mx-auto mt-6" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
