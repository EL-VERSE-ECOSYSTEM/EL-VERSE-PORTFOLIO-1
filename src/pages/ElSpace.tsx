import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Network,
  Sparkles,
  Search,
  ShieldCheck,
  Coins,
  ArrowRight,
  Globe,
  Briefcase
} from "lucide-react";

const ElSpace = () => {
  const categories = [
    { title: "Frontend Experts", skills: "React, Vue, Next.js, Tailwind, TypeScript" },
    { title: "Backend Specialists", skills: "Node.js, Python, PostgreSQL, AWS, Serverless" },
    { title: "Full-Stack Pioneers", skills: "SaaS execution, full database integration, custom portals" },
    { title: "AI Integration Leads", skills: "LLM integration, smart automation pathways, AI workflows" }
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />

        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <Badge className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/25 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                Freelance Arm of EL VERSE ECOSYSTEM
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase font-display">
                Empower Gigs with <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">EL SPACE</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                Connect vetted, high-pedigree African tech talent directly with global enterprise needs. We professionalize the creator and freelance economy using AI-powered matching and standard milestone protection.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const message = encodeURIComponent("Hi EL SPACE, I'd like to hire remote tech freelancers or get more info.");
                    window.open(`https://wa.me/2348061908715?text=${message}`, "_blank");
                  }}
                  className="h-14 px-8 bg-gradient-to-r from-orange-600 to-yellow-500 hover:opacity-90 text-white font-black rounded-xl uppercase tracking-wider text-xs shadow-lg shadow-orange-500/20"
                >
                  Hire Verified Tech Talent <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Core Pillars */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {[
                { icon: Search, title: "AI-Powered Matching", desc: "Instantly locate the ideal frontend or backend engineer for your project scope.", text: "text-orange-400" },
                { icon: ShieldCheck, title: "Vetted Pedigree", desc: "Every developer undergoes deep code architecture tests before listing.", text: "text-amber-400" },
                { icon: Coins, title: "Milestone Protection", desc: "Seamless project milestone monitoring ensuring premium project delivery.", text: "text-yellow-400" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-orange-500/10 bg-card/40 backdrop-blur-md hover:border-orange-500/30 transition-all rounded-[2rem]">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto text-orange-400">
                        {React.createElement(item.icon, { className: "w-6 h-6" })}
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Talent Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12 mb-24"
            >
              <div className="text-center">
                <Badge className="bg-primary/10 text-primary uppercase font-bold tracking-widest px-3 py-1 text-[10px]">Talent Hub</Badge>
                <h2 className="text-3xl md:text-5xl font-black uppercase mt-4 tracking-tight">Vetted Developer Skillsets</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {categories.map((item, index) => (
                  <Card key={index} className="border-primary/10 bg-card/30 backdrop-blur-md rounded-2xl p-6 text-left hover:border-primary/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 mt-1">
                        <Network className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-black text-lg text-foreground uppercase tracking-tight mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-3">Vetted freelance specialists experienced in: </p>
                        <Badge variant="outline" className="text-primary border-primary/25 text-[10px] font-bold px-2.5 py-0.5">{item.skills}</Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* CTA Box */}
            <Card className="border-orange-500/10 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 mb-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Join as a Vetted Creator?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
                If you are a high-level developer from West Africa seeking elite global assignments, complete our developer questionnaire inside the onboarding wizard.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('visualizer')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-16 px-10 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-xl uppercase tracking-wider text-xs shadow-2xl"
              >
                Launch Onboarding Wizard
              </Button>
            </Card>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ElSpace;
