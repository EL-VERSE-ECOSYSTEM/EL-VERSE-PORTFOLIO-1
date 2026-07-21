import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Workflow,
  Layers,
  Zap,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldAlert,
  Server
} from "lucide-react";

const ElCoders = () => {
  const offerings = [
    { title: "Bespoke Web Applications", desc: "React/TypeScript premium systems tailored for massive user onboarding and reliable digital scale-ups." },
    { title: "AI & Smart Automations", desc: "Automate core client management operations using modern language models and streamlined flowcharts." },
    { title: "Cloud Architecture & APIs", desc: "High-performance Serverless backend systems, robust API structures, and scale-tested security protocols." },
    { title: "B2B Enterprise Software", desc: "Multi-tenant CRM systems, customized payment logic portals, and detailed administrative dashboards." }
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
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/25 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                Elite Software Development Powerhouse
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase font-display">
                Engineered with <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">EL CODERS</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                The technical core of the EL VERSE ECOSYSTEM. A premier software engineering powerhouse comprising 70+ expert developers delivering premium commercial software, AI automations, and scalable enterprise portals.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const message = encodeURIComponent("Hi EL CODERS, I'd like to consult on an enterprise software project.");
                    window.open(`https://wa.me/2348061908715?text=${message}`, "_blank");
                  }}
                  className="h-14 px-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-black rounded-xl uppercase tracking-wider text-xs shadow-lg shadow-blue-500/20"
                >
                  Consult Solutions Architect <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Grid of Perks */}
            <div className="grid md:grid-cols-4 gap-6 mb-24">
              {[
                { icon: Server, title: "Robust Stack", desc: "Scale-ready production setups using TypeScript, Node, and secure cloud setups." },
                { icon: Cpu, title: "Deep AI Tuning", desc: "Integrate LLM nodes, cognitive task handlers, and advanced data engines." },
                { icon: Workflow, title: "Premium UI/UX", desc: "Sleek, fluid, and conversion-optimized web designs built using Tailwind and motion." },
                { icon: Layers, title: "100% Pedigree", desc: "Tested across multiple high-traffic West African and international startups." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-blue-500/10 bg-card/40 backdrop-blur-md hover:border-blue-500/30 transition-all rounded-2xl h-full">
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto text-blue-400">
                        {React.createElement(item.icon, { className: "w-5 h-5" })}
                      </div>
                      <h4 className="text-base font-black uppercase tracking-tight text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed font-semibold">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Offerings Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12 mb-24"
            >
              <div className="text-center">
                <Badge className="bg-primary/10 text-primary uppercase font-bold tracking-widest px-3 py-1 text-[10px]">What We Build</Badge>
                <h2 className="text-3xl md:text-5xl font-black uppercase mt-4 tracking-tight">Our Enterprise Offerings</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {offerings.map((item, index) => (
                  <Card key={index} className="border-primary/10 bg-card/30 backdrop-blur-md rounded-2xl p-6 text-left hover:border-primary/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 mt-1">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-black text-lg text-foreground uppercase tracking-tight mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* CTA Box */}
            <Card className="border-blue-500/10 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 mb-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Need Vetted Enterprise Scalability?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
                Connect with supreme developer guilds. We design, execute, and deliver standard code repositories ready for immediate deployment.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent("Hi EL CODERS, I'd like to get a quote for a custom software project.");
                  window.open(`https://wa.me/2348061908715?text=${message}`, "_blank");
                }}
                className="h-16 px-10 bg-white text-blue-600 hover:bg-white/90 font-black rounded-xl uppercase tracking-wider text-xs shadow-2xl"
              >
                Launch Custom Quote Flow
              </Button>
            </Card>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ElCoders;
