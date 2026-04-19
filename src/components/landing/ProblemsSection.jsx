import { motion } from 'framer-motion';

const items = [
    {
        problem: "The wait costs you",
        problemDetail: "A bad sales hire costs $15–20K — not the salary alone, but the onboarding time and the pipeline they burned. Most founders confirm it at month four or five.",
        solution: "Zevian scores your reps from week one. You see the pattern by week four."
    },
    {
        problem: "Dials don't tell you enough",
        problemDetail: "Your dialler tells you what happened. It has no opinion on whether your rep's pitch is improving or if they're handling objections better than last week.",
        solution: "Zevian scores the qualitative layer — the part your dialler can't see."
    },
    {
        problem: "Gut feel isn't evidence",
        problemDetail: "When you need to act on a struggling rep, you need documentation. A feeling at month four isn't enough. A six-week scoring trail is.",
        solution: "Every score is logged against criteria you set. The evidence is already there when you need it."
    },
];

export default function ProblemsSection() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Why Zevian</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">The gap your dialler leaves.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-xl border border-border bg-card/50 overflow-hidden"
                        >
                            {/* Problem */}
                            <div className="p-5 border-b border-border/60">
                                <p className="text-xs font-semibold text-destructive/80 tracking-widest uppercase mb-2">Problem</p>
                                <h3 className="text-base font-semibold text-foreground mb-2">{item.problem}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.problemDetail}</p>
                            </div>
                            {/* Solution */}
                            <div className="p-5">
                                <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">Solution</p>
                                <p className="text-sm text-foreground/80 leading-relaxed">{item.solution}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}