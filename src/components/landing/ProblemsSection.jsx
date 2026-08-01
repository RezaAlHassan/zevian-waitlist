import { motion } from 'framer-motion';
import { Clock3, ScrollText, ArrowRight, Check } from 'lucide-react';

const items = [
    {
        icon: Clock3,
        eyebrow: "Evaluating someone on your team?",
        headline: "The wait costs you",
        body: "You usually know who isn't going to work out. But by the time you have enough data to act, the cost is already paid. It takes about 4 to 6 months to collect enough data on someone, whether they just joined or have been on the team for years.",
        before: { label: "Today", value: "4–6 months to know" },
        after: { label: "With Zevian", value: "4 weeks" },
        resolution: "Zevian tracks both qualitative and quantitative data, and cuts that wait to 4 weeks."
    },
    {
        icon: ScrollText,
        eyebrow: "Running reviews?",
        headline: "Memory isn't proof",
        body: "There's no record of how the work changed week to week. So the decision comes from memory, and memory favors whoever was loudest lately, in the room or in Slack.",
        before: { label: "Today", value: "Recall and impressions" },
        after: { label: "With Zevian", value: "A week-by-week record" },
        resolution: "Zevian gives both sides a defensible record, so review pushback goes away."
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
                    <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">Why Zevian</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                        The gap your dialler leaves.
                    </h2>
                    <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        It counts calls. It can't tell you who is actually getting better.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {items.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative flex flex-col h-full rounded-2xl border border-border bg-card/60 p-8 md:p-10 transition-colors duration-300 hover:border-primary/30"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex items-center gap-3 mb-6">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
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
                                    <div className="flex-1 rounded-xl border border-border bg-background/40 px-4 py-3">
                                        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">{item.before.label}</p>
                                        <p className="mt-1 text-sm md:text-base font-medium text-foreground/70">{item.before.value}</p>
                                    </div>
                                    <div className="hidden sm:flex items-center text-muted-foreground/50">
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 rounded-xl border border-primary/25 bg-primary/[0.07] px-4 py-3">
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
