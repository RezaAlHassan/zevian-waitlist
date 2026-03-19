import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

export default function WaitlistButton() {
    const [email, setEmail] = useState('');

    return (
        <form 
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto"
        >
            <input type="hidden" name="access_key" value="73e81c20-e404-4263-a816-b37dfe988984" />
            
            <Input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground text-sm"
                required
            />
            <Button
                type="submit"
                className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm whitespace-nowrap w-full sm:w-auto"
            >
                <span className="flex items-center gap-2">
                    Join the waitlist <ArrowRight className="w-4 h-4" />
                </span>
            </Button>
        </form>
    );
}