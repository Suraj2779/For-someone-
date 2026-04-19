import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Screen2({ onNext }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8 will-change-transform"
        >
            <motion.div
                animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center text-pink-400 will-change-transform"
            >
                <Star className="w-16 h-16 fill-pink-400/30" />
            </motion.div>

            <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-semibold text-slate-200">
                    Pata nahi kab se...
                </h1>
                <p className="text-lg text-slate-400 font-medium leading-relaxed">
                    Teri ek aadat si pad gayi hai mujhe. Tujhe dekhna, tujhse baat karna... sab kuch acha lagta hai. 🌷
                </p>
            </div>

            <button
                onClick={onNext}
                className="px-8 py-3 rounded-full bg-pink-500/10 border border-pink-500/30 hover:bg-pink-500/20 transition-all duration-300 text-pink-300 font-semibold"
            >
                Toh? 🥺
            </button>
        </motion.div>
    );
}
