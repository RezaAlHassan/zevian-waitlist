import { motion } from 'framer-motion';
import GoalCriteriaAnimation from './GoalCriteriaAnimation';
import ReportWritingAnimation from './ReportWritingAnimation';
import AIScoringAnimation from './AIScoringAnimation';

const steps = [
    {
        number: "01",
        label: "Define what good looks like.",
        description: "Set the criteria that matter to your motion: pitch quality, objection handling, follow-up consistency. Weight what matters most.",
        animation: "goal"
    },
    {
        number: "02",
        label: "Reps submit a weekly report.",
        description: "What they worked on. What they said. Where they struggled. It takes five minutes and fits into the tools they already use.",
        animation: "report"
    },
    {
        number: "03",
        label: "AI scores the work and tracks trajectory.",
        description: "Every report is evaluated against your criteria. You see who's improving, who's flat, and who's slipping by week 3-4.",
        animation: "scoring"
    }
];

function StepAnimation({ type }) {
    if (type === "goal") return <GoalCriteriaAnimation />;
    if (type === "report") return <ReportWritingAnimation />;
    if (type === "scoring") return <AIScoringAnimation />;
    return null;
}

export default function SolutionSection() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto space-y-28">
                {steps.map((step, i) => {
                    const isEven = i % 2 === 0;
                    return (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5 }}
                            className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Text block */}
                            <div className="flex-1 text-left">
                                <span className="text-xs font-semibold text-primary tracking-widest uppercase">Step {step.number}</span>
                                <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">{step.label}</h3>
                                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                                    {step.description}
                                </p>
                            </div>

                            {/* Animation block */}
                            <div className="flex-1 w-full">
                                <StepAnimation type={step.animation} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
