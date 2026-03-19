import { motion } from 'framer-motion';

const paragraphs = [
    "Remote teams are hard to read. You think you know who's performing. You probably don't, not really. You're working off signals that were never designed to measure work.",
    "Performance reviews become this uncomfortable exercise where you're filling in blanks with whatever you can remember. It feels off because it is off.",
    "A quiet underperformer is expensive. Not in a dramatic way. Just a slow, steady drain you don't notice until something finally breaks.",
];



export default function ProblemSection() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
                {paragraphs.map((text, i) => (
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