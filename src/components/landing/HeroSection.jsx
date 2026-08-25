import { motion } from 'framer-motion';
import WaitlistButton from './WaitlistButton';

export default function HeroSection() {
    return (
        <section className="relative px-6 pt-32 pb-14 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
                >
                    Know who's actually getting better.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-5 text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground max-w-3xl mx-auto leading-snug tracking-tight"
                >
                    Every week, Zevian scores your team's work against the standards you set, with the evidence and coaching notes behind every score.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.24 }}
                    className="mt-5 text-base md:text-lg font-semibold text-primary"
                >
                    Catch performance problems 4x faster.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.36 }}
                    className="mt-10"
                >
                    <WaitlistButton />
                    <p className="mt-3 text-xs text-muted-foreground">30 days free &middot; Cancel anytime</p>
                </motion.div>
            </div>
        </section>
    );
}
