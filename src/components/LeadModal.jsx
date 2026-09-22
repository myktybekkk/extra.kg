import React, { useState } from 'react';
import { X, MessageSquare, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function LeadModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Landing Page (от 20 000 сом)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Здравствуйте extra.kg!\nМеня зовут ${name}.\nТелефон: ${phone}.\nИнтересует: ${service}.\nХочу получить точную смету с фиксацией в договоре.`;
    setTimeout(() => {
      window.open(`https://wa.me/996555874455?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="card p-7 sm:p-8 max-w-md w-full relative shadow-2xl bg-white dark:bg-[#0F1420]"
        style={{ borderRadius: '24px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.jpg" alt="extra.kg" className="w-9 h-9 rounded-xl object-cover border border-[#E8ECF0] dark:border-white/10" />
              <div className="badge">
                <Zap className="w-3 h-3" />
                Быстрый расчёт
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Получите смету проекта
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Специалист свяжется в течение 15 минут в WhatsApp с прозрачным расчётом.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                  Ваше имя или название компании
                </label>
                <input
                  type="text"
                  required
                  placeholder="Асан или ОсОО «Мебель-КР»"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E8ECF0] dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400 dark:focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                  Телефон / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+996 (555) 87-44-55"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E8ECF0] dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400 dark:focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                  Тип сайта
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0F1420] border border-[#E8ECF0] dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-400 dark:focus:border-teal-500 transition-colors"
                >
                  <option>Landing Page (от 20 000 сом)</option>
                  <option>Корпоративный сайт (от 45 000 сом)</option>
                  <option>Интернет-магазин (от 65 000 сом)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-[#1FD1A5] dark:hover:bg-[#17B890] text-white dark:text-[#0F1117] font-bold text-sm shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Получить расчёт в WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 dark:text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                <span>Цена фиксируется в официальном договоре</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#F0FDFB] dark:bg-teal-900/30 border border-[#CCFBF1] dark:border-teal-700/30 text-teal-600 dark:text-[#1FD1A5] flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Переходим в WhatsApp...
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Открываем чат со специалистом extra.kg
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
