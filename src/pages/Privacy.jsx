import Navbar from '../components/landing/Navbar';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: '"Google Sans", Inter, sans-serif' }}>
            <Navbar />
            <main className="pt-24 pb-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xs text-muted-foreground mb-2">Last updated: April 15, 2026</p>
                    <h1 className="text-3xl font-semibold mb-8">Privacy Policy</h1>

                    <p className="text-muted-foreground mb-8">
                        This Privacy Policy explains how Zevian collects, uses, stores, and protects personal data when you use our platform. We are committed to handling your data responsibly and transparently.
                    </p>
                    <p className="text-muted-foreground mb-10">
                        Zevian is operated by Reza Hassan, a sole proprietor based in Bangladesh. Our platform is available at app.zevian.co. If you have questions about this policy, contact us at{' '}
                        <a href="mailto:hello@zevian.co" className="text-foreground underline underline-offset-4">hello@zevian.co</a>.
                    </p>

                    <div className="space-y-10">

                        <Section title="1. Who This Policy Applies To">
                            <p>This policy applies to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Customers</strong>: Organizations or individuals who subscribe to Zevian</li>
                                <li><strong>Managers</strong>: Users who manage teams within a Customer account</li>
                                <li><strong>Employees</strong>: Team members whose performance data is tracked through the Platform</li>
                            </ul>
                            <p className="mt-3">If you are an Employee, your data is processed on behalf of your employer (the Customer). For questions about how your employer uses your data within Zevian, please contact them directly.</p>
                        </Section>

                        <Section title="2. Data We Collect">
                            <SubSection title="2.1 Account and contact information">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Name and email address (for account registration and login)</li>
                                    <li>Organization name</li>
                                </ul>
                            </SubSection>
                            <SubSection title="2.2 Performance and work data">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Employee-submitted work reports</li>
                                    <li>AI-generated performance scores and coaching notes</li>
                                    <li>Manager feedback and annotations</li>
                                    <li>Performance trend data over time</li>
                                    <li>Goal criteria and scoring configurations set by Managers</li>
                                </ul>
                            </SubSection>
                            <SubSection title="2.3 Usage data">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Log data (IP address, browser type, pages visited, timestamps)</li>
                                    <li>Feature usage patterns (used to improve the Platform)</li>
                                </ul>
                            </SubSection>
                            <SubSection title="2.4 Billing data">
                                <p>Payment is handled entirely by Lemon Squeezy. We do not store credit card numbers or payment details. We receive confirmation of successful transactions and subscription status only.</p>
                            </SubSection>
                        </Section>

                        <Section title="3. How We Use Your Data">
                            <p>We use your data to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Provide and operate the Platform</li>
                                <li>Process and display AI-scored performance reports</li>
                                <li>Enable Managers to track team performance over time</li>
                                <li>Send transactional emails (invitations, report submission confirmations, score notifications)</li>
                                <li>Respond to support requests</li>
                                <li>Detect and prevent fraud or misuse</li>
                                <li>Improve the Platform based on anonymized usage patterns</li>
                            </ul>
                            <p className="mt-3">We do not use your data for advertising. We do not sell your data to third parties.</p>
                        </Section>

                        <Section title="4. AI Processing">
                            <p>Performance reports submitted by Employees are sent to Google's Gemini API for AI-powered scoring. This means report content is transmitted to and processed by Google's infrastructure.</p>
                            <p className="mt-3">Google processes this data as a sub-processor under Zevian's use of their API. Google's data handling practices are governed by their own terms and privacy policies. We do not use report content to train AI models.</p>
                            <p className="mt-3">By using Zevian, Customers acknowledge and consent to this processing on behalf of themselves and their Employees.</p>
                        </Section>

                        <Section title="5. Data Storage and Security">
                            <p>Your data is stored on Supabase (PostgreSQL), a cloud database provider. Data is isolated per organization through row-level security controls.</p>
                            <p className="mt-3">We take reasonable technical and organizational measures to protect your data, including:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Encrypted connections (HTTPS/TLS) for all data in transit</li>
                                <li>Row-level access controls so organizations cannot access each other's data</li>
                                <li>Role-based permissions within each organization</li>
                            </ul>
                            <p className="mt-3">No method of data transmission or storage is completely secure. While we take data security seriously, we cannot guarantee absolute security.</p>
                        </Section>

                        <Section title="6. Third-Party Services">
                            <p>Zevian uses the following third-party services to operate:</p>
                            <div className="mt-4 overflow-hidden rounded-lg border border-border">
                                <table className="w-full text-sm">
                                    <thead className="bg-muted/50">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-medium">Service</th>
                                            <th className="px-4 py-3 text-left font-medium">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {[
                                            ['Supabase', 'Database and authentication'],
                                            ['Google Gemini API', 'AI report scoring'],
                                            ['Netlify', 'Platform hosting'],
                                            ['Resend', 'Transactional email delivery'],
                                            ['Lemon Squeezy', 'Payment processing'],
                                        ].map(([service, purpose]) => (
                                            <tr key={service}>
                                                <td className="px-4 py-3 font-medium">{service}</td>
                                                <td className="px-4 py-3 text-muted-foreground">{purpose}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-3">Each of these providers processes data only as needed to provide their service and are bound by their own privacy and security policies.</p>
                        </Section>

                        <Section title="7. Data Retention">
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Active accounts:</strong> Data is retained for as long as your subscription is active.</li>
                                <li><strong>After cancellation:</strong> Data is retained for 30 days following account cancellation, then permanently deleted unless you request earlier deletion.</li>
                                <li><strong>Employee records:</strong> Employees deactivated within the Platform have their records retained (as inactive) to preserve historical performance data. Customers may request deletion of specific records by contacting us.</li>
                            </ul>
                        </Section>

                        <Section title="8. Your Rights">
                            <p>Depending on where you are located, you may have the following rights regarding your personal data:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li><strong>Access:</strong> Request a copy of the data we hold about you</li>
                                <li><strong>Correction:</strong> Request that inaccurate data be corrected</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations and technical feasibility)</li>
                                <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
                                <li><strong>Objection:</strong> Object to certain types of data processing</li>
                                <li><strong>Restriction:</strong> Request that we limit how we process your data</li>
                            </ul>
                            <p className="mt-3"><strong>For EU/EEA users (GDPR):</strong> You have the right to lodge a complaint with your national data protection authority if you believe your data has been handled unlawfully.</p>
                            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:hello@zevian.co" className="text-foreground underline underline-offset-4">hello@zevian.co</a>. We will respond within 30 days.</p>
                        </Section>

                        <Section title="9. Legal Basis for Processing (GDPR)">
                            <p>For users in the EU/EEA, we process personal data on the following legal bases:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li><strong>Contract performance:</strong> Processing necessary to provide the services you have subscribed to</li>
                                <li><strong>Legitimate interests:</strong> Processing for fraud prevention, security, and Platform improvement</li>
                                <li><strong>Consent:</strong> Where you have given explicit consent (e.g., marketing communications)</li>
                                <li><strong>Legal obligation:</strong> Where processing is required to comply with applicable law</li>
                            </ul>
                        </Section>

                        <Section title="10. International Data Transfers">
                            <p>Zevian is operated from Bangladesh. Data you submit may be processed by our third-party providers in other jurisdictions, including the United States. These transfers are made subject to appropriate safeguards as required by applicable data protection law.</p>
                            <p className="mt-3">If you are located in the EU/EEA and have concerns about international data transfers, please contact us.</p>
                        </Section>

                        <Section title="11. Children's Privacy">
                            <p>Zevian is a business tool intended for use by adults in a professional context. We do not knowingly collect data from individuals under the age of 18. If you believe a minor has provided us with personal data, contact us at <a href="mailto:hello@zevian.co" className="text-foreground underline underline-offset-4">hello@zevian.co</a> and we will delete it promptly.</p>
                        </Section>

                        <Section title="12. Changes to This Policy">
                            <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Material changes will be communicated to active Customers by email at least 7 days before they take effect.</p>
                        </Section>

                        <Section title="13. Contact">
                            <p>For any questions about this Privacy Policy or how your data is handled:</p>
                            <div className="mt-3 space-y-1">
                                <p><strong>Email:</strong> <a href="mailto:hello@zevian.co" className="text-foreground underline underline-offset-4">hello@zevian.co</a></p>
                                <p><strong>Website:</strong> zevian.co</p>
                            </div>
                        </Section>

                    </div>
                </div>
            </main>
            <footer className="py-12 text-center border-t border-border/50">
                <p className="text-xs text-muted-foreground">© 2026 Zevian. All rights reserved.</p>
            </footer>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <section>
            <h2 className="text-lg font-semibold mb-3">{title}</h2>
            <div className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                {children}
            </div>
            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>
    );
}

function SubSection({ title, children }) {
    return (
        <div className="mt-4">
            <h3 className="text-sm font-medium text-foreground mb-2">{title}</h3>
            {children}
        </div>
    );
}
