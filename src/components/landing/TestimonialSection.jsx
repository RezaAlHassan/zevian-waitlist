import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
    {
        initials: "UK",
        role: "Product Manager",
        firm: "200+ Person Outbound Team",
        quote: "It would save a lot of time. Reps will also like it — they're being judged on their own work, not someone's impression of them."
    },
    {
        initials: "KS",
        role: "Founder",
        firm: "VC-Funded B2B Startup",
        quote: "That would just make our lives easier and help us focus on other areas."
    },
    {
        initials: "AK",
        role: "Founder & B2B Sales Coach",
        firm: "B2B Outreach Agency, 10+ Years in Sales",
        quote: "It is incredibly difficult to find a good hire in any industry. It's only after 6 months or more you understand if they are improving — and by that time you've already lost a lot of money"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
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
                                    "{t.quote}."
                                </p>
                                
                                {t.supportingText && (
                                    <div className="mt-6 p-3 rounded-md bg-primary/10 border border-primary/20">
                                        <p className="text-xs font-medium text-primary leading-relaxed">
                                            {t.supportingText}
                                        </p>
                                    </div>
                                )}
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
