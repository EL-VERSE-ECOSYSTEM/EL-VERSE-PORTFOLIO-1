import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FluidSVGLoader } from "@/components/ui/FluidSVGLoader";
import {
  Building2,
  Search,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Cpu,
  GraduationCap,
  Sparkles,
  Layers,
  Network,
  Users2
} from "lucide-react";

const ElAccess = () => {
  const [syncing, setSyncing] = useState(true);
  const [placementsCount, setPlacementsCount] = useState(240);

  // Simulate active placement syncing using FluidSVGLoader
  useEffect(() => {
    const timer = setTimeout(() => {
      setSyncing(false);
    }, 2500);

    const interval = setInterval(() => {
      setPlacementsCount(prev => prev + (Math.random() > 0.6 ? 1 : 0));
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const ecosystemLinks = [
    { name: "EL CODERS", desc: "Bespoke Enterprise Software & AI", url: "https://elcoders-devs.vercel.app/", icon: Cpu, badge: "Production-ready", color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400" },
    { name: "EL ACCESS", desc: "Premium Talent Placement Gateway", url: "https://el-access.vercel.app/", icon: Building2, badge: "Official App", color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400" },
    { name: "ELITES", desc: "West Africa's Top Tech Academy", url: "https://elites-onboarding.vercel.app/", icon: GraduationCap, badge: "Onboarding Open", color: "from-green-500/20 to-emerald-500/10 border-green-500/30 text-green-400" },
    { name: "EL SPACE", desc: "Global Freelance Matchmaking Grid", url: "https://el-space.vercel.app/", icon: Network, badge: "Direct Matching", color: "from-orange-500/20 to-yellow-500/10 border-orange-500/30 text-orange-400" },
    { name: "NEXEL", desc: "Advanced AI & Quantum Incubation R&D", url: "#", icon: Sparkles, badge: "August 2026 Launch", color: "from-rose-500/20 to-purple-500/10 border-rose-500/30 text-rose-400" }
  ];

  const features = [
    { title: "Pre-Vetted Cohorts", desc: "Skip tedious interview rounds. Access developers vetted through intensive simulation modules.", icon: ShieldCheck },
    { title: "Direct Placement Pipelines", desc: "Deploy entire pods of full-stack engineers trained directly on enterprise-grade code repositories.", icon: Layers },
    { title: "Accelerated Upskilling", desc: "We align incoming engineers directly to your specific technical specifications on demand.", icon: TrendingUp }
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
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/25 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                Enterprise Talent Placement Arm
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase font-display">
                Bridge Gaps with <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">EL ACCESS</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                We connect top-tier African tech professionals directly into premium global remote teams, corporate internships, and immediate enterprise contracts.
              </p>

              {/* Dynamic SVGLoader System Sync Indicator */}
              <div className="mt-10 inline-flex items-center gap-3 bg-card/60 backdrop-blur-xl border border-primary/10 px-6 py-3 rounded-2xl shadow-xl">
                {syncing ? (
                  <FluidSVGLoader size={24} className="shrink-0" />
                ) : (
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                )}
                <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                  {syncing ? "Syncing Talent Placement Databases..." : `Active Placements Live: ${placementsCount} Developers`}
                </span>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => window.open("https://el-access.vercel.app/", "_blank")}
                  className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white font-black rounded-xl uppercase tracking-wider text-xs shadow-lg shadow-purple-500/20"
                >
                  Enter Placement Portal <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Core Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-purple-500/10 bg-card/40 backdrop-blur-md hover:border-purple-500/30 transition-all rounded-[2rem] h-full flex flex-col justify-between">
                    <CardContent className="p-8 space-y-4 text-center flex-grow">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto text-purple-400">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-semibold">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Ecosystem Gateway Directory (The Unified Arm Gateway Requested) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12 mb-24"
            >
              <div className="text-center">
                <Badge className="bg-primary/10 text-primary uppercase font-bold tracking-widest px-3 py-1 text-[10px]">
                  Unified Connection Portal
                </Badge>
                <h2 className="text-3xl md:text-5xl font-black uppercase mt-4 tracking-tight">
                  Ecosystem Hubs Gateway
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto font-semibold text-sm mt-3 leading-relaxed">
                  Navigate seamlessly across the five interconnected arms of the EL VERSE ECOSYSTEM. Direct platforms connect you with specialized hubs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ecosystemLinks.map((arm, index) => {
                  const isNexel = arm.name === "NEXEL";
                  return (
                    <motion.div
                      key={arm.name}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className={`h-full border bg-gradient-to-br ${arm.color} backdrop-blur-md rounded-2xl overflow-hidden p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300`}>
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="p-2 bg-background/50 border border-white/5 rounded-xl text-foreground">
                              <arm.icon className="w-5 h-5" />
                            </div>
                            <Badge variant="outline" className="border-white/10 text-[9px] uppercase font-black tracking-widest px-2 py-0.5">
                              {arm.badge}
                            </Badge>
                          </div>
                          <div>
                            <h3 className="font-black text-xl text-foreground tracking-tight">{arm.name}</h3>
                            <p className="text-xs text-muted-foreground font-semibold leading-relaxed mt-1">{arm.desc}</p>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5">
                          {isNexel ? (
                            <Button
                              disabled
                              className="w-full h-10 bg-white/5 text-muted-foreground text-xs font-bold uppercase tracking-wider rounded-lg"
                            >
                              Incubating System
                            </Button>
                          ) : (
                            <Button
                              onClick={() => window.open(arm.url, "_blank")}
                              className="w-full h-10 bg-white/10 hover:bg-white/20 text-foreground text-xs font-black uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5"
                            >
                              Launch Platform <ExternalLink className="w-3.5 h-3.5" />
                            </Button>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Placements Stats CTA */}
            <Card className="border-purple-500/10 bg-gradient-to-br from-purple-500/10 to-indigo-500/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 mb-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Need On-Demand Professional Talent?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
                Connect directly with the EL ACCESS matching engine. We arrange vetted profiles, process milestone compliance, and sync contractors seamlessly into your Slack or Teams workspaces.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => window.open("https://el-access.vercel.app/", "_blank")}
                  className="h-16 px-10 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-xl uppercase tracking-wider text-xs shadow-2xl shadow-purple-500/20"
                >
                  Direct Client Portal
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const message = encodeURIComponent("Hi EL ACCESS, I'm a developer interested in remote corporate placements.");
                    window.open(`https://wa.me/2348061908715?text=${message}`, "_blank");
                  }}
                  className="h-16 px-10 border-purple-500/20 hover:bg-purple-500/5 font-black rounded-xl uppercase tracking-wider text-xs"
                >
                  Request Onboarding Sync
                </Button>
              </div>
            </Card>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ElAccess;
