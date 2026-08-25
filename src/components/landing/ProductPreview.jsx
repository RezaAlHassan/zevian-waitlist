import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp, Minus } from 'lucide-react';

const quality = [
    {
        status: "Needs attention",
        label: "Objection handling",
        score: "5.9 / 10",
        delta: "-0.5",
        direction: "down",
        evidence: "Lost two deals on pricing. The objection was acknowledged, but the rep moved back to the pitch before resolving it.",
        coachNext: "pricing objection -> clarify impact before returning to pitch."
    },
    {
        status: "Improving",
        label: "Pitch quality",
        score: "7.8 / 10",
        delta: "+0.4",
        direction: "up"
    },
    {
        status: "Stable",
        label: "Follow-up consistency",
        score: "8.2 / 10",
        delta: "+0.2",
        direction: "flat"
    },
];

function Delta({ direction, value }) {
    const isDown = direction === "down";
    const isFlat = direction === "flat";
    const Icon = isDown ? ArrowDown : isFlat ? Minus : ArrowUp;

    return (
        <span className={`inline-flex items-center gap-1 text-sm font-medium tabular-nums ${isDown ? "text-rose-300" : "text-foreground/70"}`}>
            <Icon className="h-3 w-3" />
            {value}
        </span>
    );
}

export default function ProductPreview() {
    return (
        <section className="px-6 pb-24">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-4xl mx-auto rounded-lg border border-border bg-card/80 shadow-xl shadow-black/10 overflow-hidden"
            >
                <div className="border-b border-border px-5 py-5 md:px-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                            <h2 className="text-sm font-medium text-foreground">
                                Weekly Report <span className="text-muted-foreground">&middot; Mar 15</span>
                            </h2>
                            <p className="mt-2 text-2xl font-semibold text-foreground tabular-nums">
                                Overall: 7.3 / 10 <span className="ml-2 text-sm font-medium text-rose-300">-0.2</span>
                            </p>
                        </div>
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
                            Work quality
                        </p>
                    </div>
                </div>

                <div className="px-5 py-2 md:px-6">
                    {quality.map((item) => {
                        const isWeakest = item.direction === "down";

                        return (
                            <div
                                key={item.label}
                                className={`border-b border-border/70 py-4 last:border-b-0 ${
                                    isWeakest ? "bg-rose-500/[0.025] -mx-5 px-5 md:-mx-6 md:px-6" : ""
                                }`}
                            >
                                <div className="grid gap-2 md:grid-cols-[8.5rem_minmax(0,1fr)_8rem] md:items-baseline">
                                    <p className={`text-xs font-medium uppercase tracking-widest ${isWeakest ? "text-rose-300" : "text-muted-foreground"}`}>
                                        {item.status}
                                    </p>
                                    <div>
                                        <p className="text-base font-medium text-foreground">{item.label}</p>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                            {item.score}
                                        </p>
                                    </div>
                                    <div className="md:text-right">
                                        <Delta direction={item.direction} value={item.delta} />
                                    </div>
                                </div>

                                {item.evidence && (
                                    <div className="mt-3 grid gap-2 md:grid-cols-[8.5rem_minmax(0,1fr)]">
                                        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">Evidence</p>
                                        <p className="border-l border-border pl-3 text-sm leading-relaxed text-muted-foreground">
                                            "{item.evidence}"
                                        </p>
                                    </div>
                                )}

                                {item.coachNext && (
                                    <div className="mt-3 grid gap-2 md:grid-cols-[8.5rem_minmax(0,1fr)]">
                                        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">Coach next</p>
                                        <p className="text-sm leading-relaxed text-foreground/85">
                                            {item.coachNext}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="border-t border-border bg-secondary/15 px-5 py-3 md:px-6">
                    <p className="text-sm text-muted-foreground">
                        <span className="text-foreground/80">67</span> dials &middot; <span className="text-foreground/80">4</span> meetings &middot; <span className="text-foreground/80">$48K</span> pipeline
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
