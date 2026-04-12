import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Facebook, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();

  const t = {
    vi: {
      greeting: "Xin chào! 👋",
      question: "RE:BA có thể giúp gì cho bạn hôm nay?",
      fb: "Chat qua Facebook",
      phone: "Gọi điện thoại",
      email: "Gửi Email",
      or: "Hoặc để lại lời nhắn",
      namePlaceholder: "Tên của bạn",
      msgPlaceholder: "Nhập tin nhắn...",
      send: "Gửi tin nhắn",
      success: "Cảm ơn bạn! RE:BA sẽ phản hồi trong thời gian sớm nhất.",
    },
    en: {
      greeting: "Hello! 👋",
      question: "How can RE:BA help you today?",
      fb: "Chat on Facebook",
      phone: "Call us",
      email: "Send Email",
      or: "Or leave a message",
      namePlaceholder: "Your name",
      msgPlaceholder: "Type your message...",
      send: "Send message",
      success: "Thank you! RE:BA will get back to you shortly.",
    }
  }[language as 'vi' | 'en'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[340px] bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-brand-olive p-5 text-white relative">
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-serif text-xl font-bold mb-1">{t.greeting}</h3>
              <p className="text-sm text-white/90">{t.question}</p>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center gap-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-brand-olive" />
                  <p className="text-brand-charcoal font-medium">{t.success}</p>
                </motion.div>
              ) : (
                <>
                  <div className="flex flex-col gap-2">
                    <a 
                      href="https://www.facebook.com/people/REBA-%C4%90%C3%80-N%E1%BA%B4NG/61566026556415" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 rounded-xl bg-brand-sand/30 hover:bg-brand-sand/60 transition-colors text-brand-charcoal text-sm font-medium"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                      {t.fb}
                    </a>
                    <a 
                      href="tel:0345457651" 
                      className="flex items-center gap-3 p-3 rounded-xl bg-brand-sand/30 hover:bg-brand-sand/60 transition-colors text-brand-charcoal text-sm font-medium"
                    >
                      <Phone className="w-5 h-5 text-green-600" />
                      {t.phone}
                    </a>
                    <a 
                      href="mailto:rebadanangvn@gmail.com" 
                      className="flex items-center gap-3 p-3 rounded-xl bg-brand-sand/30 hover:bg-brand-sand/60 transition-colors text-brand-charcoal text-sm font-medium"
                    >
                      <Mail className="w-5 h-5 text-red-500" />
                      {t.email}
                    </a>
                  </div>

                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-100"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-wider">{t.or}</span>
                    <div className="flex-grow border-t border-gray-100"></div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input 
                      required 
                      type="text" 
                      placeholder={t.namePlaceholder} 
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive transition-all text-brand-charcoal" 
                    />
                    <textarea 
                      required 
                      placeholder={t.msgPlaceholder} 
                      rows={3} 
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive transition-all resize-none text-brand-charcoal"
                    ></textarea>
                    <button 
                      type="submit" 
                      className="w-full py-2.5 bg-brand-charcoal text-white rounded-xl text-sm font-medium hover:bg-brand-olive transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {t.send}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-olive hover:bg-brand-charcoal text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
