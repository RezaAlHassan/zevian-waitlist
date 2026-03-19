import { motion } from 'framer-motion';

const items = [
    {
        problem: "Invisible underperformers",
        problemDetail: "One bad hire in a remote team costs you $40,000 a year and you usually don't see it coming until it's too late.",
        solution: "Zevian scores every report so performance trends surface in days, not quarters."
    },
    {
        problem: "Biased reviews",
        problemDetail: "Feedback written from memory and gut feel isn't fair to your team and isn't defensible to anyone else.",
        solution: "AI evaluates against your own criteria every single cycle, with consistent reasoning every time."
    },
    {
        problem: "Wasted review time",
        problemDetail: "Managers spend 40 to 80 hours per review cycle on evaluation work that AI can do in seconds.",
        solution: "You review the score and the reasoning. The heavy lifting is already done."
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
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">The problems it solves.</h2>
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