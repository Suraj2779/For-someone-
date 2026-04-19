import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FinalScreen() {
    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [isOver, setIsOver] = useState(false);

    const lyrics = [
        { text: "तोहरी प्रीत जो लागी...", duration: 3200 },
        { text: "मनवा हुआ बैरागी।", duration: 3000 },
        { text: "ऐसा चढ़ा रंग के हुआ,", duration: 3200 },
        { text: "तन-मन मेरा गुलाबी। 🌸", duration: 3800 },
        { text: "धीमे-धीमे जाने कैसे तूने,", duration: 3800 },
        { text: "छूआ मोहे... हुआ रे हुआ बावरा। ❤️", duration: 4000 },
    ];

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }

        let timeoutId;

        const advanceLyric = (index) => {
            if (index < lyrics.length) {
                timeoutId = setTimeout(() => {
                    if (index + 1 < lyrics.length) {
                        setCurrentIndex(index + 1);
                        advanceLyric(index + 1);
                    } else {
                        setTimeout(() => setIsOver(true), 2500);
                    }
                }, lyrics[index].duration);
            }
        };

        const startDelay = setTimeout(() => {
            setCurrentIndex(0);
            advanceLyric(0);
        }, 300);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(startDelay);
        };
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-sm relative z-10 will-change-transform"
            >
                <audio ref={audioRef} src="/music.mp3" preload="auto" />

                {/* 👇 Sticker yahan aayega — apna sticker.webp public folder mein daalo */}
                <img
                    src="/sticker.webp"
                    alt="sticker"
                    className="absolute w-44 -top-24 left-1/2 -translate-x-1/2 z-20"
                />

                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-pink-900/20 relative overflow-hidden min-h-50 flex flex-col items-center justify-center">

                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center space-y-10 w-full">
                        <div className="w-full min-h-15 flex items-center justify-center relative">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(6px)" }}
                                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(6px)" }}
                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                    className="text-center text-slate-200 text-xl md:text-2xl font-semibold italic tracking-wide absolute w-full"
                                >
                                    {currentIndex >= 0 && lyrics[currentIndex]?.text}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOver && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
                    >
                        <motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-white text-2xl font-semibold tracking-wide"
                        >
                            ❤️
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
