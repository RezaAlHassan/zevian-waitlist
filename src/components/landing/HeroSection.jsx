import { motion } from 'framer-motion';
import ReportWritingAnimation from './ReportWritingAnimation';
import TrendComparisonAnimation from './TrendComparisonAnimation';
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
                    Your numbers look fine for 90 days.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-5 text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground max-w-2xl mx-auto leading-snug tracking-tight"
                >
                    Zevian scores the work behind them every week.
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
                    <TrendComparisonAnimation />
                </motion.div>
            </div>
        </section>
    );
}
