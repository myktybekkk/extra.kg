import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function LeadModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('landing');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp URL
    const text = `Здравствуйте extra.kg! 
Меня зовут ${name}. 
Телефон: ${phone}. 
Интересует проект: ${service}.
Хочу получить точную смету с фиксацией в договоре.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/996555874455?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 max-w-lg w-full relative shadow-2xl bg-[#0F1117]/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="extra.kg logo" className="w-10 h-10 rounded-xl object-cover border border-[#1FD1A5]/40 shadow-md shadow-[#1FD1A5]/20" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1FD1A5]/10 border border-[#1FD1A5]/30">
                <Zap className="w-3.5 h-3.5 text-[#1FD1A5]" />
                <span className="text-[11px] font-bold text-[#1FD1A5] uppercase tracking-wider">
                  Быстрый расчет сметы
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Получите детализированную смету проекта
            </h3>

            <p className="text-xs text-[#A8B0C0] leading-relaxed mb-6">
              Заполните поля ниже, и мы пришлем вам прозрачный расчет стоимости с итоговой фиксацией в договоре. Специалист свяжется с вами в течение 15 минут в WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#A8B0C0] mb-1.5">
                  Ваше имя или название компании
                </label>
                <input
                  type="text"
                  required
                  placeholder="Например: Асан или ОсОО «Мебель-КР»"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-[#A8B0C0]/60 text-sm focus:outline-none focus:border-[#1FD1A5]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A8B0C0] mb-1.5">
                  Ваш телефон / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+996 (555) 87-44-55"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-[#A8B0C0]/60 text-sm focus:outline-none focus:border-[#1FD1A5]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A8B0C0] mb-1.5">
                  Интересующий тип сайта
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0F1117] border border-white/15 text-white text-sm focus:outline-none focus:border-[#1FD1A5]"
                >
                  <option value="Landing Page (от 20 000 сом)">Одностраничный сайт (Landing Page)</option>
                  <option value="Корпоративный сайт (от 45 000 сом)">Корпоративный сайт с каталогом</option>
                  <option value="Интернет-магазин (от 65 000 сом)">Интернет-магазин под ключ (MBank)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-accent text-[#0F1117] font-bold text-sm shadow-xl shadow-[#1FD1A5]/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Получить расчет сметы в WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#A8B0C0] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1FD1A5]" />
                <span>Фиксируем цену в официальном договоре</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#1FD1A5]/20 text-[#1FD1A5] flex items-center justify-center mx-auto mb-4 border border-[#1FD1A5]/40 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-white mb-2">Переходим в WhatsApp...</h4>
            <p className="text-xs text-[#A8B0C0]">Открываем прямой чат со специалистом extra.kg</p>
          </div>
        )}
      </div>
    </div>
  );
}
