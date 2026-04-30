import { motion } from 'framer-motion';

const lines = [
    "Know who to coach before the conversation becomes a warning.",
    "Every score is documented. Every week. So when it matters, you have proof.",
    "Your team gets clearer feedback. You spend less time guessing and more time developing.",
];

export default function BenefitLines() {
    return (
        <section className="px-6 py-20">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
                {lines.map((text, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    >
                        {text}
                    </motion.p>
                ))}
            </div>
        </section>
    );
}
