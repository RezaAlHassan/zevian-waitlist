import { motion } from 'framer-motion';
import { AlertTriangle, ScrollText, ArrowRight, Check } from 'lucide-react';

const items = [
    {
        icon: AlertTriangle,
        eyebrow: "Catch problems earlier",
        headline: "Performance issues show up in the work first.",
        body: "A rep can stay active while the quality underneath starts slipping. The calls still happen. Meetings still get booked. Pipeline still moves. Then the numbers fall.",
        before: { label: "Today", value: "You see the result later" },
        after: { label: "With Zevian", value: "You see the work changing every week" },
        resolution: "Zevian tracks the quality behind the numbers, so managers can coach while there is still time to change the outcome."
    },
    {
        icon: ScrollText,
        eyebrow: "Run better reviews",
        headline: "Go into reviews with a record.",
        body: "Three months of coaching conversations are hard to reconstruct from memory. Zevian keeps every weekly score, the evidence behind it, and the coaching notes that followed.",
        before: { label: "Today", value: "What you remember" },
        after: { label: "With Zevian", value: "A weekly record of what changed" },
        resolution: "Managers can explain the decision. Reps can see what it was based on."
    },
];

export default function ProblemsSection() {
    return (
        <section className="px-6 py-28 md:py-36">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">The gap in what you track</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                        Your numbers tell you what happened.
                    </h2>
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto leading-snug tracking-tight">
                        They say how many calls were made, meetings booked, and how much pipeline was created. They say much less about <span className="text-foreground">why those numbers changed</span>.
                    </p>
                    <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Pitch quality. Objection handling. Follow-up. Discovery. Consistency. That work usually becomes obvious only after the numbers move. Zevian makes it visible every week.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {items.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.headline}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative flex flex-col h-full rounded-xl border border-border bg-card/60 p-8 md:p-10 transition-colors duration-300 hover:border-primary/30"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex items-center gap-3 mb-6">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                                    </span>
                                    <p className="text-sm font-medium text-primary">{item.eyebrow}</p>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight mb-4">
                                    {item.headline}
                                </h3>

                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {item.body}
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row sm:items-stretch gap-3">
                                    <div className="flex-1 rounded-lg border border-border bg-background/40 px-4 py-3">
                                        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">{item.before.label}</p>
                                        <p className="mt-1 text-sm md:text-base font-medium text-foreground/70">{item.before.value}</p>
                                    </div>
                                    <div className="hidden sm:flex items-center text-muted-foreground/50">
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 rounded-lg border border-primary/25 bg-primary/[0.07] px-4 py-3">
                                        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/80">{item.after.label}</p>
                                        <p className="mt-1 text-sm md:text-base font-semibold text-foreground">{item.after.value}</p>
                                    </div>
                                </div>

                                <div className="mt-auto pt-8">
                                    <div className="flex items-start gap-3 border-t border-border pt-6">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                                            <Check className="h-3 w-3" strokeWidth={3} />
                                        </span>
                                        <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
                                            {item.resolution}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
