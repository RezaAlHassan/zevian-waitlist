import { motion } from 'framer-motion';

const paragraphs = [
    "You hired someone. They seem fine. Dials are okay. Sit rate is passable. But your gut says something isn't clicking.",
    "The problem is you have no way to confirm it. Not yet. So you wait. Month two. Month three. Month four. By then you've paid the salary, burned the onboarding time, and handed them a pipeline they didn't close properly.",
    "The average bad sales hire costs $15 to 20K by the time you have enough evidence to act. Most of that cost isn't the hire. It's the wait.",
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