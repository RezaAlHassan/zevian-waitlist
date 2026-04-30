import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import PivotLine from '../components/landing/PivotLine';
import SolutionSection from '../components/landing/SolutionSection';
import ROIStrip from '../components/landing/ROIStrip';
import BenefitLines from '../components/landing/BenefitLines';
import TestimonialSection from '../components/landing/TestimonialSection';

import CTASection from '../components/landing/CTASection';

export default function Landing() {
    return (
        <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: '"Google Sans", Inter, sans-serif' }}>
            <Navbar />
            <main>
                <HeroSection />
                <div className="max-w-4xl mx-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                <ProblemSection />
                <PivotLine />
                <div className="max-w-4xl mx-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                <SolutionSection />
                <div className="max-w-4xl mx-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                <ROIStrip />
                <BenefitLines />
                <TestimonialSection />

                <div id="waitlist">
                    <CTASection />
                </div>
                <footer className="py-12 text-center space-y-3">
                    <p className="text-xs text-muted-foreground">© 2026 Zevian. All rights reserved.</p>
                    <div className="flex items-center justify-center gap-4">
                        <a href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
                        <span className="text-xs text-muted-foreground/40">·</span>
                        <a href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms and Conditions</a>
                    </div>
                </footer>
            </main>
        </div>
    );
}