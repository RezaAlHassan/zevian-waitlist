import { motion } from 'framer-motion';

const metrics = [
    { value: "$15–20K", label: "cost of a bad hire by the time you're sure" },
    { value: "4 weeks", label: "time to know instead of 4 months" },
];

export default function ROIStrip() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-2xl mx-auto">
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
                    Illustrative estimate based on a $70K average salary, 30% annual rep turnover, and a 4.5-month average discovery window.
                </p>
            </div>
        </section>
    );
}
