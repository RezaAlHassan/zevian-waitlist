import { motion } from 'framer-motion';

const items = [
    {
        eyebrow: "Evaluating someone on your team?",
        headline: "The wait costs you",
        body: "Zevian tracks both qualitative and quantitative data. You usually know who isn't going to work out. But by the time you have enough data to act, the cost is already paid. It takes about 4 to 6 months to collect enough data on someone, whether they just joined or have been on the team for years. Zevian cuts that to 4 weeks."
    },
    {
        eyebrow: "Running reviews?",
        headline: "Memory isn't proof",
        body: "There's no record of how the work changed week to week. So the decision comes from memory, and memory favors whoever was loudest lately, in the room or in Slack. Zevian gives both sides a defensible record, so review pushback goes away."
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-xl border border-border bg-card/50 p-6"
                        >
                            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">{item.eyebrow}</p>
                            <h3 className="text-lg font-semibold text-foreground mb-3">{item.headline}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}