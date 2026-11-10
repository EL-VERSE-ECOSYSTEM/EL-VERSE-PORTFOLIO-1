import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import { Scale, CheckCircle2, AlertTriangle, ShieldCheck, Terminal, Award } from "lucide-react";

const Terms = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <SEO
        title="Terms & Conditions | EL VERSE ECOSYSTEM"
        description="Official Terms of Service and Conditions governing the use of EL VERSE ECOSYSTEM software, mentorship programs, freelance exchanges, and AI research arms."
        canonicalUrl="https://el-verse-connect.vercel.app/terms"
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
              <Scale className="w-4 h-4" /> Legal Terms
            </div>

            <h1 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-foreground">
              Terms & Conditions
            </h1>
            <p className="text-sm text-muted-foreground font-mono">
              Effective Date: November 2026 · Ecosystem Agreement v2.6
            </p>

            <div className="p-6 md:p-8 rounded-3xl glass-panel-glow text-muted-foreground leading-relaxed text-sm md:text-base space-y-4">
              <p>
                Welcome to <strong>EL VERSE ECOSYSTEM</strong>. By visiting, browsing, registering for, or engaging with our platforms (including ELCODERS, ELITES, EL SPACE, EL ACCESS, NEXEL, and affiliate products like EL Learners), you confirm that you have read, understood, and agreed to be bound by these Terms & Conditions.
              </p>
              <p>
                If you do not agree to all terms outlined herein, you must immediately discontinue use of the ecosystem services.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 space-y-10"
          >
            {/* 1. Ecosystem Scope */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  1. Ecosystem Scope & Services
                </h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                EL VERSE ECOSYSTEM is a premier multi-arm technology conglomerate providing:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="p-4 rounded-xl bg-card/40 border border-border/50">
                  <span className="text-foreground font-bold block mb-1">EL CODERS</span>
                  Bespoke custom software engineering, full-stack systems, mobile applications, and AI integrations.
                </li>
                <li className="p-4 rounded-xl bg-card/40 border border-border/50">
                  <span className="text-foreground font-bold block mb-1">ELITES Academy</span>
                  12-week structured developer mentorship, rank-verified tiers, capstones, and tutor reviews.
                </li>
                <li className="p-4 rounded-xl bg-card/40 border border-border/50">
                  <span className="text-foreground font-bold block mb-1">EL SPACE Freelance</span>
                  Matchmaking verified digital builders with clients for paid deliverables.
                </li>
                <li className="p-4 rounded-xl bg-card/40 border border-border/50">
                  <span className="text-foreground font-bold block mb-1">EL ACCESS Talent & NEXEL</span>
                  Corporate talent pipelines, engineering contract placements, and cutting-edge artificial intelligence R&D.
                </li>
              </ul>
            </section>

            {/* 2. User Responsibilities */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  2. User Conduct & Authenticity
                </h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All platform users, students, freelancers, and commercial clients agree to:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>Submit authentic, verified profile credentials, portfolio repos, and payment details.</li>
                <li>Never reverse-engineer, decompile, launch DDoS attacks, or extract confidential code snippets or intellectual property from EL VERSE tools or simulator environments.</li>
                <li>Respect intellectual property agreements during client sprints and mentor reviews. Plagiarism in ELITES capstones will result in immediate disqualification and revocation of rank.</li>
              </ul>
            </section>

            {/* 3. Intellectual Property */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  3. Intellectual Property & Deliverables
                </h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Software developed under bespoke ELCODERS client contracts shall transfer in full ownership upon complete settlement of invoices according to project scope agreements. The EL VERSE brand identity, trademarks, proprietary codebases, course curricula, Menato/Elly AI models, and design systems remain exclusive property of EL VERSE ECOSYSTEM.
              </p>
            </section>

            {/* 4. Disclaimers & Limitation of Liability */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  4. Limitation of Liability
                </h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                EL VERSE provides platforms on an "as is" and "as available" basis. While we maintain a 99.9% uptime target and enterprise security, we will not be held liable for indirect, incidental, or consequential damages resulting from network interruptions, third-party hosting outages, or unauthorized user credential compromises.
              </p>
            </section>

            {/* 5. Dispute Resolution & Contact */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide">
                  5. Governing Law & Inquiries
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-card/40 border border-primary/20 space-y-2 text-sm">
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws governing digital commerce, commercial contracts, and international technology standards.
                </p>
                <p className="text-muted-foreground">
                  For legal inquiries or dispute mediation, contact: <a href="mailto:elversetechnologies@gmail.com" className="text-primary hover:underline">elversetechnologies@gmail.com</a>
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

export default Terms;
