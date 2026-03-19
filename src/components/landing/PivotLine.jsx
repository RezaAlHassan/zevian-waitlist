import { motion } from 'framer-motion';

export default function PivotLine() {
    return (
        <section className="px-6 py-20">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-foreground/70 max-w-3xl mx-auto leading-snug tracking-tight"
            >
                "There's a better way to know if your team is actually performing."
            </motion.p>
        </section>
    );
}