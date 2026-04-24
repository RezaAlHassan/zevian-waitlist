import { motion } from 'framer-motion';

const paragraphs = [
    "You hired someone. Activity looks fine. Dials are there. Meetings are passable. But something feels off.",
    "The problem isn't data. It's that you can't see progress. So you wait. Month two. Month three. Month four.",
    "By the time you're sure, you've paid the salary, burned onboarding time, and lost pipeline quality. A bad sales hire can cost $15-20K. Most of that cost is the wait.",
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
