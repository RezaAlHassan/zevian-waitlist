import { motion } from 'framer-motion';

const metrics = [
    { value: "50%", label: "less time on performance reviews per cycle" },
    { value: "60–90", label: "days earlier underperformer detection" },
    { value: "6–23×", label: "ROI for a 30-person team" },
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
            </div>
        </section>
    );
}