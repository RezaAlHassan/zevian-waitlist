import { motion } from 'framer-motion';
import GoalCriteriaAnimation from './GoalCriteriaAnimation';
import ReportWritingAnimation from './ReportWritingAnimation';
import TrendComparisonAnimation from './TrendComparisonAnimation';

const steps = [
    {
        number: "01",
        label: "Set the standards.",
        description: "Choose what good performance looks like for your team. Define the criteria and how much each one matters.",
        animation: "goal"
    },
    {
        number: "02",
        label: "Your team submits a weekly report.",
        description: "Each report takes a few minutes. Reps add their activity, results, and context from the week. Zevian evaluates the report against the standards you set.",
        animation: "report"
    },
    {
        number: "03",
        label: "See what is improving.",
        description: "Every week, Zevian shows each criterion score, what changed, the evidence behind the score, suggested coaching notes, and patterns developing over time.",
        coda: "So a manager can see who needs help, where, and why.",
        animation: "scoring"
    }
];

function StepAnimation({ type }) {
    if (type === "goal") return <GoalCriteriaAnimation />;
    if (type === "report") return <ReportWritingAnimation />;
    if (type === "scoring") return <TrendComparisonAnimation />;
    return null;
}

export default function SolutionSection() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-3xl mx-auto text-center mb-20">
                <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">How it works</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                    Your tools track activity. Zevian tracks improvement.
                </h2>
            </div>

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
                            <div className="flex-1 text-left">
                                <span className="text-xs font-semibold text-primary tracking-widest uppercase">Step {step.number}</span>
                                <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">{step.label}</h3>
                                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                                    {step.description}
                                </p>
                                {step.coda && (
                                    <p className="mt-4 text-base md:text-lg font-medium text-foreground leading-relaxed max-w-md">
                                        {step.coda}
                                    </p>
                                )}
                            </div>

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
