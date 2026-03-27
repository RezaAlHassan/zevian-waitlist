import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
    {
        initials: "UK",
        role: "Product Manager",
        firm: "200+ Employees Agency",
        quote: "It would be great addition and would save a lot of time. The employees will also like it because they are being judged based on their own work reports."
    },
    {
        initials: "KS",
        role: "Founder",
        firm: "VC Funded Startup",
        quote: "That would just make our lives easier and help us focus on other areas."
    },
    {
        initials: "FL",
        role: "Operations Manager",
        firm: "100+ Employees Tech Firm",
        quote: "It would take away the humane aspects of assessment",
        supportingText: "Zevian scores the work. You still know the person"
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
