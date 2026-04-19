import { motion } from 'framer-motion';

const metrics = [
    { value: "$15–20K", label: "cost of a bad sales hire by the time you confirm it" },
    { value: "4–6 wks", label: "to see the pattern with Zevian vs 3–6 months without" },
    { value: "40–60×", label: "ROI vs the cost of one failed ramp" },
];

export default function ROIStrip() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary">{metric.value}</div>
                            <p className="mt-2 text-sm text-muted-foreground max-w-[200px] mx-auto leading-relaxed">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-xs text-muted-foreground/40 mt-10 max-w-md mx-auto">
                    Based on $70K avg salary, 30% annual rep turnover, 4.5 months average discovery window.
                </p>
            </div>
        </section>
    );
}