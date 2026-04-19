import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

export default function Screen3({ onNext }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8 will-change-transform"
        >
            <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="flex justify-center text-rose-400"
            >
                <Music2 className="w-16 h-16 opacity-80" />
            </motion.div>

            <div className="space-y-4">
                <h1 className="text-2xl font-semibold text-slate-200">
                    Toh ek gaana suna raha hoon
                </h1>
                <p className="text-lg text-slate-400 font-medium leading-relaxed">
                    Alfaaz mere nahi bante... toh kisine pehle se likh di. Sun le zara. 🎵
                </p>
            </div>

            <button
                onClick={onNext}
                className="px-8 py-3 rounded-full bg-rose-500/20 border border-rose-500/50 hover:bg-rose-500/30 hover:scale-105 transition-all duration-300 text-rose-200 font-semibold flex items-center gap-2 mx-auto will-change-transform"
            >
                Sunna hai ❤️
            </button>
        </motion.div>
    );
}
