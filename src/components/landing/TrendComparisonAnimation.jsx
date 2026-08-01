import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingDown, TrendingUp } from 'lucide-react';

// Quantitative KPIs are compared week over week as raw numbers.
// These mirror the columns parsed from the uploaded spreadsheet in step 02.
const quantitative = [
    { label: "Dials", prev: "63", current: "67", change: "+6%", direction: "up" },
    { label: "Meetings booked", prev: "5", current: "4", change: "-20%", direction: "down" },
    { label: "Pipeline", prev: "$52K", current: "$48K", change: "-8%", direction: "down" },
];

// Qualitative criteria are scored out of 10, against the criteria set in step 01.
// The evidence line quotes the submitted report from step 02 verbatim.
const qualitative = [
    { label: "Pitch quality", score: 7.8, prev: 7.4, direction: "up" },
    {
        label: "Objection handling",
        score: 5.9,
        prev: 6.4,
        direction: "down",
        evidence: "Lost two deals on pricing, didn't handle the objection well."
    },
    { label: "Follow-up consistency", score: 8.2, prev: 8.0, direction: "up" },
];

// Phase 0: quantitative comparison
// Phase 1: qualitative scores
// Phase 2: overall trend, hold
// Phase 3: reset

export default function TrendComparisonAnimation() {
    const [phase, setPhase] = useState(0);
    const [quantCount, setQuantCount] = useState(0);
    const [qualCount, setQualCount] = useState(0);

    useEffect(() => {
        if (phase === 0) {
            if (quantCount < quantitative.length) {
                const t = setTimeout(() => setQuantCount(c => c + 1), 400);
                return () => clearTimeout(t);
            }
            const t = setTimeout(() => setPhase(1), 500);
            return () => clearTimeout(t);
        }
        if (phase === 1) {
            if (qualCount < qualitative.length) {
                const t = setTimeout(() => setQualCount(c => c + 1), 400);
                return () => clearTimeout(t);
            }
            const t = setTimeout(() => setPhase(2), 500);
            return () => clearTimeout(t);
        }
        if (phase === 2) {
            const t = setTimeout(() => setPhase(3), 3000);
            return () => clearTimeout(t);
        }
        if (phase === 3) {
            const t = setTimeout(() => {
                setQuantCount(0);
                setQualCount(0);
                setPhase(0);
            }, 500);
            return () => clearTimeout(t);
        }
    }, [phase, quantCount, qualCount]);

    return (
        <div className="w-full">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-primary/5">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/50">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse" />
                        <span className="text-xs text-muted-foreground font-medium">Week 11 vs Week 10</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">Scored</span>
                </div>

                <div className="p-5 h-[300px] flex flex-col text-left">
                    {/* Quantitative KPIs: comparison table */}
                    <div className="grid grid-cols-[minmax(0,1fr)_2.5rem_2.5rem_3rem] gap-2 items-center pb-1 border-b border-border/60">
                        <span className="text-[10px] text-muted-foreground">KPI</span>
                        <span className="text-[10px] text-muted-foreground text-center">W10</span>
                        <span className="text-[10px] text-foreground font-semibold text-center">W11</span>
                        <span className="text-[10px] text-muted-foreground text-right">Change</span>
                    </div>
                    <div className="space-y-1 pt-1.5">
                        {quantitative.map((row, i) => (
                            <motion.div
                                key={row.label}
                                initial={{ opacity: 0, x: -8 }}
                                animate={i < quantCount ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-[minmax(0,1fr)_2.5rem_2.5rem_3rem] gap-2 items-center"
                            >
                                <span className="text-xs text-foreground/90 truncate">{row.label}</span>
                                <span className="text-xs text-muted-foreground text-center tabular-nums">{row.prev}</span>
                                <span className="text-xs text-foreground font-semibold text-center tabular-nums">{row.current}</span>
                                <span
                                    className={`text-[11px] font-semibold text-right tabular-nums ${
                                        row.direction === "down" ? "text-destructive/90" : "text-muted-foreground"
                                    }`}
                                >
                                    {row.change}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Qualitative criteria: scored out of 10 */}
                    <div className="space-y-2 mt-5">
                        {qualitative.map((row, i) => {
                            const isVisible = i < qualCount;
                            const isDown = row.direction === "down";
                            return (
                                <motion.div
                                    key={row.label}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-xs text-foreground/90 truncate">{row.label}</span>
                                        <span className="flex items-center gap-2.5 shrink-0">
                                            <span className="text-xs tabular-nums">
                                                <span className={isDown ? "text-destructive/90 font-semibold" : "text-foreground font-semibold"}>
                                                    {row.score}
                                                </span>
                                                <span className="text-muted-foreground"> / 10</span>
                                            </span>
                                            <span
                                                className={`flex items-center gap-1 text-[10px] tabular-nums ${
                                                    isDown ? "text-destructive/90" : "text-muted-foreground"
                                                }`}
                                            >
                                                {isDown ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                                                from {row.prev}
                                            </span>
                                        </span>
                                    </div>

                                    {row.evidence && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isVisible ? 1 : 0 }}
                                            transition={{ duration: 0.3, delay: 0.25 }}
                                            className="mt-1 pl-2 border-l-2 border-destructive/40 text-[11px] text-muted-foreground italic leading-snug"
                                        >
                                            "{row.evidence}"
                                        </motion.p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Overall trend */}
                    <div className="flex-1" />
                    <AnimatePresence>
                        {phase >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className="shrink-0 mt-3 pt-3 border-t border-border flex items-center justify-end gap-1.5"
                            >
                                <TrendingDown className="w-4 h-4 text-destructive/90" />
                                <span className="text-lg font-bold text-foreground tabular-nums leading-none">7.2</span>
                                <span className="text-xs text-muted-foreground">/ 10</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
