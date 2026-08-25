import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp, Minus } from 'lucide-react';

const qualitative = [
    {
        status: "Needs attention",
        label: "Objection handling",
        score: "5.9",
        delta: "-0.5",
        direction: "down",
        evidence: "Lost two deals on pricing. The objection was acknowledged, but the rep moved back to the pitch before resolving it.",
        coachNext: "pricing objection -> clarify impact before returning to pitch."
    },
    { status: "Improving", label: "Pitch quality", score: "7.8", delta: "+0.4", direction: "up" },
    { status: "Stable", label: "Follow-up consistency", score: "8.2", delta: "+0.2", direction: "flat" },
];

function Delta({ direction, value }) {
    const isDown = direction === "down";
    const isFlat = direction === "flat";
    const Icon = isDown ? ArrowDown : isFlat ? Minus : ArrowUp;

    return (
        <span className={`flex items-center gap-1 text-[10px] font-medium tabular-nums ${isDown ? "text-rose-300" : "text-muted-foreground"}`}>
            <Icon className="w-3 h-3" />
            {value}
        </span>
    );
}

export default function TrendComparisonAnimation() {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        if (visibleCount < qualitative.length) {
            const t = setTimeout(() => setVisibleCount(c => c + 1), 550);
            return () => clearTimeout(t);
        }

        const t = setTimeout(() => setVisibleCount(0), 3500);
        return () => clearTimeout(t);
    }, [visibleCount]);

    return (
        <div className="w-full">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-primary/5">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/35">
                    <span className="text-xs text-muted-foreground font-medium">Weekly Report</span>
                    <span className="flex items-center gap-1 text-xs text-rose-300 font-medium tabular-nums">
                        <ArrowDown className="w-3 h-3" />
                        Overall 7.3
                    </span>
                </div>

                <div className="p-5 h-[300px] flex flex-col text-left">
                    <div className="divide-y divide-border/70">
                        {qualitative.map((row, i) => {
                            const isVisible = i < visibleCount;
                            const isWeakest = row.direction === "down";

                            return (
                                <motion.div
                                    key={row.label}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className={`py-2.5 ${isWeakest ? "bg-rose-500/[0.025] -mx-2 px-2" : ""}`}
                                >
                                    <div className="grid grid-cols-[5.4rem_minmax(0,1fr)_4.8rem] gap-2 items-baseline">
                                        <span className={`text-[9px] font-medium uppercase tracking-wider ${isWeakest ? "text-rose-300" : "text-muted-foreground"}`}>
                                            {row.status}
                                        </span>
                                        <span className="text-xs font-medium text-foreground/90 truncate">{row.label}</span>
                                        <span className="flex justify-end items-center gap-2">
                                            <span className="text-xs font-semibold text-foreground tabular-nums">{row.score}</span>
                                            <Delta direction={row.direction} value={row.delta} />
                                        </span>
                                    </div>

                                    {row.evidence && (
                                        <p className="mt-2 pl-[5.4rem] text-[11px] text-muted-foreground leading-snug">
                                            <span className="text-muted-foreground/70">Evidence:</span> "{row.evidence}"
                                        </p>
                                    )}

                                    {row.coachNext && (
                                        <p className="mt-1 pl-[5.4rem] text-[11px] text-foreground/80 leading-snug">
                                            <span className="text-muted-foreground/70">Coach next:</span> {row.coachNext}
                                        </p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="flex-1" />
                    <div className="mt-3 border-t border-border/70 pt-2 text-xs text-muted-foreground">
                        <span className="text-foreground/80">67</span> dials &middot; <span className="text-foreground/80">4</span> meetings &middot; <span className="text-foreground/80">$48K</span> pipeline
                    </div>
                </div>
            </div>
        </div>
    );
}
