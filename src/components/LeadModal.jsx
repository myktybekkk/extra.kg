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
    const text = `Здравствуйте extra.kg!\nМеня зовут: ${name}\nТелефон / WhatsApp: ${phone}\nВыбранный тариф: ${service}\nХочу получить точный расчёт сметы и зафиксировать условия в договоре.`;
    setTimeout(() => {
      window.open(`https://wa.me/996555874455?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl p-7 sm:p-9 max-w-md w-full relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 dark:border-gray-700">
                <img src="/logo.jpg" alt="extra.kg" className="w-full h-full object-cover" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                Расчёт сметы
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Рассчитать смету проекта
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Ответим в WhatsApp в течение 15 минут, пришлём детальный расчёт и зафиксируем цену в договоре.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Ваше имя или компания
                </label>
                <input
                  type="text"
                  required
                  placeholder="Например: Асан или ОсОО «Альфа»"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Номер WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+996 (555) 87-44-55"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Тип сайта
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-500"
                >
                  <option>Landing Page (от 20 000 сом)</option>
                  <option>Корпоративный сайт с каталогом (от 45 000 сом)</option>
                  <option>Интернет-магазин с онлайн-оплатой (от 65 000 сом)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Получить расчёт в WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>100% передача прав и официальный договор</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#25D366] flex items-center justify-center mx-auto mb-4 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Переходим в WhatsApp...
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Открываем защищённый диалог со специалистом extra.kg
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
