import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function PolicyModal({ isOpen, onClose, title, content }: PolicyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-black/90 border border-white/10 p-10 rounded-[30px] max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-3xl font-display font-light text-gold tracking-wide">
                {title}
              </h2>
              <button 
                onClick={onClose} 
                className="text-white/40 hover:text-gold transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="text-white/70 space-y-6 text-base leading-relaxed font-light">
              {content}
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/5 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gold hover:text-black transition-all"
              >
                Close Policy
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
