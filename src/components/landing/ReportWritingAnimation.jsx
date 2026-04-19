import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reportLines = [
    "Made 67 dials, booked 4 discovery calls.",
    "Lost two deals on pricing — didn't handle the objection well.",
    "Tested a new opener this week, sit rate improved slightly.",
    "Need help tightening the pitch for mid-market prospects."
];

export default function ReportWritingAnimation() {
    const [visibleLines, setVisibleLines] = useState([]);
    const [currentTyping, setCurrentTyping] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex >= reportLines.length) {
            const timeout = setTimeout(() => {
                setVisibleLines([]);
                setCurrentTyping("");
                setLineIndex(0);
                setCharIndex(0);
            }, 3000);
            return () => clearTimeout(timeout);
        }

        if (charIndex <= reportLines[lineIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentTyping(reportLines[lineIndex].slice(0, charIndex));
                setCharIndex(charIndex + 1);
            }, 25);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setVisibleLines(prev => [...prev, reportLines[lineIndex]]);
                setCurrentTyping("");
                setLineIndex(lineIndex + 1);
                setCharIndex(0);
            }, 400);
            return () => clearTimeout(timeout);
        }
    }, [lineIndex, charIndex]);

    return (
        <div className="w-full">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-primary/5">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="ml-2 text-xs text-muted-foreground font-medium">Weekly Report · Mar 15, 2026</span>
                </div>
                <div className="p-5 h-[300px] overflow-hidden space-y-2 text-left">
                    <AnimatePresence>
                        {visibleLines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-foreground/80 leading-relaxed"
                            >
                                <span className="text-muted-foreground mr-2">•</span>
                                {line}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {currentTyping && (
                        <div className="text-sm text-foreground/80 leading-relaxed">
                            <span className="text-muted-foreground mr-2">•</span>
                            {currentTyping}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.7 }}
                                className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}