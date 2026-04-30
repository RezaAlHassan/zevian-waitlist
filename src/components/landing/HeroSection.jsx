import { motion } from 'framer-motion';
import ReportWritingAnimation from './ReportWritingAnimation';
import AIScoringAnimation from './AIScoringAnimation';
import WaitlistButton from './WaitlistButton';

export default function HeroSection() {
    return (
        <section className="relative px-6 pt-32 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
                >
                   A bad hire costs $15–20K.
                    <br />
                    <span className="text-muted-foreground font-medium">Most of the cost is finding out too late.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    AI-powered performance tracking for managers who can't afford to find out late. See who's actually improving — before the cost is already paid.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10"
                >
                    <WaitlistButton />
                    <p className="mt-3 text-xs text-muted-foreground">30 days free · Cancel anytime</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                >
                    <ReportWritingAnimation />
                    <AIScoringAnimation />
                </motion.div>
            </div>
        </section>
    );
}
