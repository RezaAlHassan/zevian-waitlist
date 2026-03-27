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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">You probably have an underperformer right now.</h2>
                <p className="text-muted-foreground mb-8">Join the waitlist and find out for sure. Free early access, no credit card.</p>
                <WaitlistButton />
            </motion.div>
        </section>
    );
}