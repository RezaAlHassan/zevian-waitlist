import { motion } from 'framer-motion';

const metrics = [
    { value: "$15K-$20K", label: "Typical investment at risk during an unsuccessful SDR ramp" },
    { value: "60-90 days", label: "A common window before performance problems become obvious in lagging results" },
];

export default function ROIStrip() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">The cost of finding out late</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                        A bad ramp gets expensive quickly.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-2xl mx-auto">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={metric.value}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary">{metric.value}</div>
                            <p className="mt-2 text-sm text-muted-foreground max-w-[240px] mx-auto leading-relaxed">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-base text-muted-foreground mt-10 max-w-2xl mx-auto leading-relaxed">
                    The earlier a manager can see the problem, the more time they have to coach it.
                </p>
            </div>
        </section>
    );
}
