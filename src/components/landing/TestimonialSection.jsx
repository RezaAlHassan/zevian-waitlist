import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
    {
        initials: "PM",
        role: "Product Manager",
        firm: "200+ person outbound team",
        quote: "It would save a lot of time. Reps would like it too because they're being judged on their own work, not someone's impression of them."
    },
    {
        initials: "FS",
        role: "Founder",
        firm: "VC-backed B2B startup",
        quote: "That would make our lives easier and help us focus on other areas."
    },
    {
        initials: "SC",
        role: "Founder & B2B Sales Coach",
        firm: "B2B outreach agency",
        quote: "You only understand whether someone is improving after six months. By then you've already lost money."
    }
];

export default function TestimonialsSection() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">Social proof</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                        What managers told us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.quote}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={cn(
                                "flex flex-col text-center p-6 rounded-xl border transition-all duration-300",
                                i === testimonials.length - 1
                                    ? "bg-primary/5 border-primary/20 shadow-lg shadow-primary/5 scale-105 z-10"
                                    : "border-border/50 bg-card/50"
                            )}
                        >
                            <div className="flex-1">
                                <p className="text-sm text-muted-foreground leading-relaxed italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </div>

                            <div className="mt-8 pt-4 border-t border-border/10 flex flex-col items-center gap-2">
                                <Avatar className="h-10 w-10 border border-border/50 mb-1">
                                    <AvatarFallback className="bg-secondary text-xs font-semibold">
                                        {t.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col items-center space-y-0.5">
                                    <p className="text-xs font-semibold text-foreground leading-tight">
                                        {t.role}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground font-medium leading-tight">
                                        {t.firm}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
