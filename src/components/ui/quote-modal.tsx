import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

export const QuoteModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation completes
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-brand-ivory dark:bg-brand-charcoal rounded-3xl p-8 shadow-2xl border border-brand-charcoal/10 dark:border-white/10 overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-brand-charcoal/5 dark:hover:bg-white/5 transition-colors z-10"
            >
              <X className="w-5 h-5 text-brand-charcoal dark:text-white" />
            </button>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <h3 className="text-2xl font-serif font-bold text-brand-charcoal dark:text-white mb-2">
                    Yêu cầu báo giá B2B
                  </h3>
                  <p className="text-brand-charcoal/70 dark:text-white/70 mb-6">
                    Vui lòng để lại thông tin, đội ngũ RE:BA sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                  </p>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-brand-charcoal dark:text-white mb-1">Họ và tên</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 dark:border-white/20 bg-white dark:bg-black/20 text-brand-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-olive" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-charcoal dark:text-white mb-1">Công ty / Tổ chức</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 dark:border-white/20 bg-white dark:bg-black/20 text-brand-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-olive" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-charcoal dark:text-white mb-1">Email</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 dark:border-white/20 bg-white dark:bg-black/20 text-brand-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-olive" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-charcoal dark:text-white mb-1">Sản phẩm quan tâm</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 dark:border-white/20 bg-white dark:bg-black/20 text-brand-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-olive">
                        <option>Sợi chuối thô</option>
                        <option>Sợi chuối se</option>
                        <option>Sợi chuối bện</option>
                        <option>Thiết kế tùy chỉnh</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-charcoal dark:text-white mb-1">Số lượng dự kiến</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 dark:border-white/20 bg-white dark:bg-black/20 text-brand-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-olive" />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-brand-olive text-white py-3 rounded-xl font-bold hover:bg-brand-olive/90 transition-colors mt-4 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Gửi yêu cầu"
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-brand-olive/10 rounded-full flex items-center justify-center text-brand-olive mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-charcoal dark:text-white mb-4">
                    Đã gửi yêu cầu báo giá
                  </h3>
                  <p className="text-brand-charcoal/70 dark:text-white/70 mb-8 leading-relaxed">
                    Cảm ơn bạn đã quan tâm đến sản phẩm của RE:BA. Đội ngũ của chúng tôi sẽ liên hệ lại với bạn trong vòng 24-48 giờ tới để trao đổi chi tiết.
                  </p>
                  <button 
                    onClick={handleClose}
                    className="text-brand-olive font-bold uppercase tracking-widest text-xs hover:underline"
                  >
                    Đóng cửa sổ
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
