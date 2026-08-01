import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Check } from 'lucide-react';

const reportLines = [
    "Lost two deals on pricing, didn't handle the objection well.",
    "Need help tightening the pitch for mid-market prospects."
];

const parsedColumns = [
    { label: "Dials", value: "67" },
    { label: "Meetings", value: "4" },
    { label: "Pipeline", value: "$48K" },
];

export default function ReportWritingAnimation() {
    const [visibleLines, setVisibleLines] = useState([]);
    const [currentTyping, setCurrentTyping] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex >= reportLines.length) {
            const timeout = setTimeout(() => {
                setVisibleLines([]);
                setCurrentTyping("");
                setLineIndex(0);
                setCharIndex(0);
            }, 3000);
            return () => clearTimeout(timeout);
        }

        if (charIndex <= reportLines[lineIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentTyping(reportLines[lineIndex].slice(0, charIndex));
                setCharIndex(charIndex + 1);
            }, 25);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setVisibleLines(prev => [...prev, reportLines[lineIndex]]);
                setCurrentTyping("");
                setLineIndex(lineIndex + 1);
                setCharIndex(0);
            }, 400);
            return () => clearTimeout(timeout);
        }
    }, [lineIndex, charIndex]);

    return (
        <div className="w-full">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-primary/5">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="ml-2 text-xs text-muted-foreground font-medium">Weekly Report · Mar 15, 2026</span>
                </div>
                <div className="p-5 h-[300px] flex flex-col text-left">
                    {/* Written notes */}
                    <div className="flex-1 min-h-0 overflow-hidden space-y-2">
                        <AnimatePresence>
                            {visibleLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-sm text-foreground/80 leading-relaxed"
                                >
                                    <span className="text-muted-foreground mr-2">•</span>
                                    {line}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {currentTyping && (
                            <div className="text-sm text-foreground/80 leading-relaxed">
                                <span className="text-muted-foreground mr-2">•</span>
                                {currentTyping}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.7 }}
                                    className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                                />
                            </div>
                        )}
                    </div>

                    {/* Attached spreadsheet */}
                    <div className="shrink-0 mt-4 rounded-lg border border-border/60 bg-secondary/40 p-3">
                        <div className="flex items-center gap-2.5">
                            <FileSpreadsheet className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-xs text-foreground/90 font-medium truncate">week-11-metrics.csv</span>
                            <Check className="w-3.5 h-3.5 text-primary ml-auto shrink-0" />
                        </div>

                        <div className="mt-2.5 flex items-center gap-2">
                            {parsedColumns.map((col) => (
                                <div
                                    key={col.label}
                                    className="flex-1 rounded-md bg-background/60 border border-border/50 px-2 py-1.5"
                                >
                                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider truncate">{col.label}</div>
                                    <div className="text-xs font-semibold text-foreground/90">{col.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
