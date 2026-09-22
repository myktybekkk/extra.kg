import React from 'react';
import { MessageSquare, Phone, MapPin, Mail, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-[#0A0C10] border-t border-white/10 pt-16 pb-12 text-[#A8B0C0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Requisites */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1FD1A5] to-[#00AEEF] p-0.5 shadow-lg shadow-[#1FD1A5]/20 overflow-hidden">
                <img src="/logo.jpg" alt="extra.kg logo" className="w-full h-full object-cover rounded-[10px]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                extra<span className="text-[#1FD1A5]">.kg</span>
              </span>
            </a>
            
            <p className="text-xs leading-relaxed mb-4 font-light">
              Разработка продающих сайтов и автоматизация бизнеса в Бишкеке. 100% передача цифровых активов и юридические гарантии.
            </p>

            <div className="text-[11px] font-mono text-[#A8B0C0]/70 space-y-1">
              <div>Официальная разработка по договору</div>
              <div>ОсОО / ИП КР • ИНН 01203202110050</div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Навигация</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-[#1FD1A5] transition-colors">Услуги и Тарифы</a></li>
              <li><a href="#trust" className="hover:text-[#1FD1A5] transition-colors">Гарантии и Безопасность</a></li>
              <li><a href="#calculator" className="hover:text-[#1FD1A5] transition-colors">Интерактивный Калькулятор</a></li>
              <li><a href="#portfolio" className="hover:text-[#1FD1A5] transition-colors">Портфолио проектов</a></li>
              <li><a href="#team" className="hover:text-[#1FD1A5] transition-colors">Команда специалистов</a></li>
              <li><a href="#testimonials" className="hover:text-[#1FD1A5] transition-colors">Отзывы клиентов</a></li>
              <li><a href="#faq" className="hover:text-[#1FD1A5] transition-colors">Частые вопросы FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Services Breakdown */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Продукты студии</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-[#1FD1A5] transition-colors">Landing Page (от 20 000 сом)</a></li>
              <li><a href="#services" className="hover:text-[#1FD1A5] transition-colors">Корпоративный сайт (от 45 000 сом)</a></li>
              <li><a href="#services" className="hover:text-[#1FD1A5] transition-colors">Интернет-магазин (от 65 000 сом)</a></li>
              <li><a href="#services" className="hover:text-[#1FD1A5] transition-colors">Интеграция MBank & О!Деньги</a></li>
              <li><a href="#services" className="hover:text-[#1FD1A5] transition-colors">Контент под ключ (Рус / Кыр / Eng)</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts & Address */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Контакты в Бишкеке</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#1FD1A5] shrink-0" />
                <span>г. Бишкек, ул. Ибраимова 115 / Киевская</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <a href="https://wa.me/996700123456" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +996 (700) 12-34-56
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>info@extra.kg</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={onOpenModal}
                className="w-full py-2.5 rounded-xl bg-gradient-accent text-[#0F1117] font-bold text-xs shadow-md hover:scale-[1.02] transition-all cursor-pointer"
              >
                Рассчитать смету проекта →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <div>
            © 2026 extra.kg • Все права защищены. Веб-студия в Бишкеке.
          </div>
          <div className="flex items-center gap-1 text-[#1FD1A5] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>100% цифровых прав на имя заказчика</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
