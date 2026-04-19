import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Screen1({ onNext }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8, ease: "easeOut" } }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8 will-change-transform"
        >
            <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center text-rose-400"
            >
                <Sparkles className="w-16 h-16 opacity-80" />
            </motion.div>

            <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-slate-200">
                    Kuch kehna tha tujhe...
                </h1>
                <p className="text-slate-400 text-base font-medium">
                    Bahut dino se ruk raha tha. Aaj bol deta hoon. 🌸
                </p>
            </div>

            <button
                onClick={onNext}
                className="px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-rose-500/50 transition-all duration-300 text-slate-300 hover:text-rose-300 shadow-lg font-medium"
            >
                Haan? Kya hua?
            </button>
        </motion.div>
    );
}
