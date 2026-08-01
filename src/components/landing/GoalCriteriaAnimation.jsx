import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const goalText = "Score reps on pitch quality, objection handling, and follow-up consistency. Weight each criterion based on what matters most for our outbound motion.";

const criteriaItems = [
    { name: "Pitch Quality", weight: 40, instruction: "Is the value prop clear? Does the rep tailor it to the prospect?" },
    { name: "Objection Handling", weight: 35, instruction: "How well does the rep address pushback and stay on track?" },
    { name: "Follow-up Consistency", weight: 25, instruction: "Are follow-ups timely, relevant, and moving the deal forward?" },
];

// Phase 0: typing goal text
// Phase 1: AI processing
// Phase 2: criteria appearing
// Phase 3: hold, then reset

export default function GoalCriteriaAnimation() {
    const [phase, setPhase] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [visibleCriteria, setVisibleCriteria] = useState([]);

    useEffect(() => {
        if (phase === 0) {
            if (charIndex < goalText.length) {
                const t = setTimeout(() => {
                    setTypedText(goalText.slice(0, charIndex + 1));
                    setCharIndex(c => c + 1);
                }, 18);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setPhase(1), 800);
                return () => clearTimeout(t);
            }
        }

        if (phase === 1) {
            const t = setTimeout(() => setPhase(2), 1800);
            return () => clearTimeout(t);
        }

        if (phase === 2) {
            if (visibleCriteria.length < criteriaItems.length) {
                const t = setTimeout(() => {
                    setVisibleCriteria(prev => [...prev, criteriaItems[prev.length]]);
                }, 550);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setPhase(3), 3000);
                return () => clearTimeout(t);
            }
        }

        if (phase === 3) {
            const t = setTimeout(() => {
                setTypedText('');
                setCharIndex(0);
                setVisibleCriteria([]);
                setPhase(0);
            }, 600);
            return () => clearTimeout(t);
        }
    }, [phase, charIndex, visibleCriteria.length]);

    return (
        <div className="w-full">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-primary/5">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/50">
                    <span className="text-xs text-muted-foreground font-medium">New KPI</span>
                </div>
                <div className="p-5 text-left h-[300px] flex flex-col">

                    {/* KPI description input */}
                    <div className="shrink-0">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">KPI Description</div>
                        <div className="rounded-lg bg-secondary/60 border border-border/50 p-2.5 min-h-[58px]">
                            <span className="text-xs text-foreground/90 leading-relaxed">{typedText}</span>
                            {phase === 0 && (
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.7 }}
                                    className="inline-block w-0.5 h-3.5 bg-primary ml-0.5 align-middle"
                                />
                            )}
                        </div>
                    </div>

                    {/* AI processing indicator */}
                    <AnimatePresence>
                        {phase === 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2.5 mt-4 shrink-0"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                    className="w-3.5 h-3.5 border-2 border-primary/30 border-t-primary rounded-full flex-shrink-0"
                                />
                                <span className="text-[11px] text-muted-foreground">AI is generating scoring criteria...</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Generated criteria */}
                    <AnimatePresence>
                        {visibleCriteria.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-4 flex-1 min-h-0"
                            >
                                <div className="flex items-center justify-between pb-1 border-b border-border/60">
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Scoring Criteria</span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Weight</span>
                                </div>
                                <div className="space-y-2.5 pt-2">
                                    {visibleCriteria.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="text-xs text-foreground/90 truncate">{item.name}</span>
                                                <span className="text-[11px] font-semibold text-foreground tabular-nums shrink-0">
                                                    {item.weight}%
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{item.instruction}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
}