import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, Database, Bell, CheckCircle } from "lucide-react";

const Privacy = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <SEO
        title="Privacy Policy | EL VERSE ECOSYSTEM"
        description="Learn how EL VERSE ECOSYSTEM and its arms (ELCODERS, ELITES, EL SPACE, EL ACCESS, NEXEL) safeguard your privacy, personal information, and data integrity."
        canonicalUrl="https://el-verse-connect.vercel.app/privacy"
      />
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation />

        <main className="container mx-auto px-4 pt-32 pb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Legal & Compliance
            </div>

            <h1 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground font-mono">
              Effective Date: November 2026 · Last Updated: November 2026
            </p>

            <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 text-muted-foreground leading-relaxed text-sm md:text-base space-y-4">
              <p>
                At <span className="text-foreground font-semibold">EL VERSE ECOSYSTEM</span> ("we", "our", or "us"), we prioritize the privacy and digital security of all individuals who access our ecosystem platforms, including <strong>ELCODERS</strong>, <strong>ELITES Academy</strong>, <strong>EL SPACE</strong>, <strong>EL ACCESS</strong>, and <strong>NEXEL Labs</strong>.
              </p>
              <p>
                This Privacy Policy explains how we collect, process, safeguard, and retain your personal information in compliance with the Nigeria Data Protection Act (NDPA), GDPR guidelines, and applicable international privacy frameworks.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 space-y-10"
          >
            {/* Section 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  1. Information We Collect
                </h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We collect personal information necessary to deliver our tailored software engineering, training bootcamps, freelance matching, and talent placement operations:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="p-4 rounded-xl bg-card/40 border border-border/50 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Identity & Contact:</strong> Full name, verified email, telephone number, and regional jurisdiction.</span>
                </li>
                <li className="p-4 rounded-xl bg-card/40 border border-border/50 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Academic & Talent:</strong> Resume, code repositories, ranking assessments, skill proficiencies, and course progress.</span>
                </li>
                <li className="p-4 rounded-xl bg-card/40 border border-border/50 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Technical Logs:</strong> IP address, device fingerprints, browser telemetry, and authentication cookies.</span>
                </li>
                <li className="p-4 rounded-xl bg-card/40 border border-border/50 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Client Project Briefs:</strong> Specifications, architectural requirements, and communications shared during quote requests.</span>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  2. How We Utilize Your Data
                </h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your data is strictly harnessed to fuel ecosystem capabilities, including:
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Delivering mentorship workflows, personalized AI feedback (Menato & Elly), and capstone evaluations in ELITES.</p>
                <p>• Matching enterprise recruiters with verified developers in EL ACCESS and assigning freelance briefs in ELSPACE.</p>
                <p>• Provisioning bespoke software development architectures and managing client milestones in ELCODERS.</p>
                <p>• Preventing malicious activity, fraud, and unauthorized system access across our APIs.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  3. Information Sharing & Third Parties
                </h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We do not sell, rent, or trade your personal data to advertisers. We only disclose information under the following strict circumstances:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li><strong>Verified Client / Talent Matching:</strong> When talent consents to present their verified credentials and portfolio to prospective employers.</li>
                <li><strong>Service Infrastructure:</strong> Secure cloud infrastructure, database hosting, and transactional mail services bound by strict confidentiality and non-disclosure standards.</li>
                <li><strong>Legal Mandates:</strong> Where disclosure is required by statutory regulations, court orders, or law enforcement within competent jurisdictions.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  4. Your Rights & Data Autonomy
                </h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Under relevant data privacy legislation, you have the right to request access to your records, rectify inaccurate data, request erasure, or withdraw prior consent at any time without punitive measures.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  5. Contact Data Protection Officer
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-card/40 border border-primary/20 space-y-2 text-sm">
                <p className="font-semibold text-foreground">EL VERSE ECOSYSTEM - Legal & Compliance Bureau</p>
                <p className="text-muted-foreground">Benin Republic, Côte d'Ivoire & Global Operations</p>
                <p className="text-muted-foreground">
                  Official Email: <a href="mailto:elversetechnologies@gmail.com" className="text-primary hover:underline">elversetechnologies@gmail.com</a>
                </p>
                <p className="text-muted-foreground">
                  Alternative Support: <a href="mailto:elcoderssoftwares12@gmail.com" className="text-primary hover:underline">elcoderssoftwares12@gmail.com</a>
                </p>
              </div>
            </section>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
