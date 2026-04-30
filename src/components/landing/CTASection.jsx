import { motion } from 'framer-motion';
import WaitlistButton from './WaitlistButton';

export default function CTASection() {
    return (
        <section className="px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-xl mx-auto text-center"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    You need to know who's actually getting better.
                </h2>
                <p className="text-muted-foreground mb-8">
                    Keep guessing for 4 months — or know in 4 weeks.
                </p>
                <WaitlistButton />
                <p className="mt-3 text-xs text-muted-foreground">30 days free · Cancel anytime</p>
            </motion.div>
        </section>
    );
}
