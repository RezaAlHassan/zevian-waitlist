import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const goalText = "Drive efficient lead-to-conversion performance for the sales team. Focus on pipeline quality, speed of follow-up, and consistent communication with prospects.";

const criteriaItems = [
    { name: "Pipeline Quality", weight: 40, instruction: "Score based on lead qualification and deal progression" },
    { name: "Follow-up Speed", weight: 35, instruction: "Evaluate response time and consistency" },
    { name: "Conversion Rate", weight: 25, instruction: "Measure closed deals against target" },
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
                    <span className="text-xs text-muted-foreground font-medium">New Goal</span>
                    <span className="text-xs text-primary font-medium">AI Assisted</span>
                </div>
                <div className="p-5 text-left space-y-4 h-[300px] overflow-hidden">

                    {/* Goal description input */}
                    <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Goal Description</div>
                        <div className="rounded-lg bg-secondary/60 border border-border/50 p-3 min-h-[72px]">
                            <span className="text-sm text-foreground/90 leading-relaxed">{typedText}</span>
                            {phase === 0 && (
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.7 }}
                                    className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
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
                                className="flex items-center gap-3 py-2"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                    className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full flex-shrink-0"
                                />
                                <span className="text-xs text-primary">AI is generating scoring criteria...</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Generated criteria */}
                    <AnimatePresence>
                        {visibleCriteria.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Scoring Criteria</div>
                                <div className="space-y-2">
                                    {visibleCriteria.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-3 rounded-lg bg-secondary/60 border border-border/50"
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm text-foreground/90 font-medium">{item.name}</span>
                                                <motion.span
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="text-xs font-semibold text-primary"
                                                >
                                                    {item.weight}%
                                                </motion.span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">{item.instruction}</p>
                                            <div className="mt-2 h-1 bg-background rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.weight}%` }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="h-full bg-primary rounded-full"
                                                    style={{ maxWidth: '100%' }}
                                                />
                                            </div>
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