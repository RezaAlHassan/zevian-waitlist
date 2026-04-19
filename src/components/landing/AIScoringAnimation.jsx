import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const criteria = [
    { label: "Pitch Quality", score: 7.8, weight: "40%" },
    { label: "Objection Handling", score: 5.9, weight: "35%" },
    { label: "Follow-up Consistency", score: 8.2, weight: "25%" },
];

export default function AIScoringAnimation() {
    const [phase, setPhase] = useState(0); // 0=scanning, 1=scoring, 2=total, 3=reset
    const [scoredItems, setScoredItems] = useState([]);
    const [totalScore, setTotalScore] = useState(null);

    useEffect(() => {
        if (phase === 0) {
            const t = setTimeout(() => setPhase(1), 1500);
            return () => clearTimeout(t);
        }
        if (phase === 1) {
            if (scoredItems.length < criteria.length) {
                const t = setTimeout(() => {
                    setScoredItems(prev => [...prev, criteria[prev.length]]);
                }, 600);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => {
                    setTotalScore(7.2);
                    setPhase(2);
                }, 800);
                return () => clearTimeout(t);
            }
        }
        if (phase === 2) {
            const t = setTimeout(() => setPhase(3), 3500);
            return () => clearTimeout(t);
        }
        if (phase === 3) {
            const t = setTimeout(() => {
                setScoredItems([]);
                setTotalScore(null);
                setPhase(0);
            }, 500);
            return () => clearTimeout(t);
        }
    }, [phase, scoredItems.length]);

    return (
        <div className="w-full">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-primary/5">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/50">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs text-muted-foreground font-medium">AI Evaluation</span>
                    </div>
                    <span className="text-xs text-primary font-medium">
                        {phase === 0 ? "Analyzing..." : phase === 1 ? "Scoring..." : "Complete"}
                    </span>
                </div>
                <div className="p-5 h-[300px] overflow-hidden text-left">
                    {phase === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center h-full gap-3"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full"
                            />
                            <span className="text-sm text-muted-foreground">Scanning report against criteria...</span>
                        </motion.div>
                    )}

                    {(phase === 1 || phase === 2 || phase === 3) && (
                        <div className="space-y-3">
                            <AnimatePresence>
                                {scoredItems.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm text-foreground/90">{item.label}</span>
                                                <span className="text-xs text-muted-foreground">{item.weight}</span>
                                            </div>
                                            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.score * 10}%` }}
                                                    transition={{ duration: 0.6, delay: 0.1 }}
                                                    className="h-full bg-primary rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-sm font-semibold text-primary ml-4 w-10 text-right"
                                        >
                                            {item.score}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {totalScore !== null && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 pt-4 border-t border-border flex items-center justify-between"
                                    >
                                        <span className="text-sm font-medium text-foreground">Overall Score</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-primary">{totalScore}</span>
                                            <span className="text-sm text-muted-foreground">/ 10</span>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-3 px-3 py-2 rounded-md bg-yellow-500/10 border border-yellow-500/20"
                                    >
                                        <p className="text-xs font-semibold text-yellow-500/80 uppercase tracking-widest mb-0.5">Coaching flag</p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">Objection handling is the weak point. Rep struggles to stay on track after pricing pushback.</p>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}