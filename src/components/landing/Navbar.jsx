import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
        >
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <div>
                    <img 
                        src="/Tramsparent-FullLogo-Teal.png" 
                        height="105px" 
                        width="105px" 
                    />   
                </div>
                <a
                    href="#cta"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    Get started
                </a>
            </div>
        </motion.nav>
    );
}