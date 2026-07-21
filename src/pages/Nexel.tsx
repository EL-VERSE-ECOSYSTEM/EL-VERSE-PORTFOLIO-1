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
  Sparkles,
  Atom,
  Cpu,
  Clock,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Network,
  Building2,
  Hourglass,
  Binary,
  Microscope,
  Database
} from "lucide-react";

const Nexel = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [simulatedNodes, setSimulatedNodes] = useState(14);
  const [computingPower, setComputingPower] = useState(94.2);

  // Future countdown to August 1, 2026
  useEffect(() => {
    const launchDate = new Date("2026-08-01T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    // Node simulations
    const nodesInterval = setInterval(() => {
      setSimulatedNodes(prev => prev + (Math.random() > 0.7 ? 1 : Math.random() > 0.85 ? -1 : 0));
      setComputingPower(prev => +(prev + (Math.random() - 0.5) * 0.4).toFixed(2));
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(nodesInterval);
    };
  }, []);

  const ecosystemLinks = [
    { name: "EL CODERS", desc: "Bespoke Enterprise Software & AI", url: "https://elcoders-devs.vercel.app/", icon: Cpu, badge: "Production-ready", color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400" },
    { name: "EL ACCESS", desc: "Premium Talent Placement Gateway", url: "https://el-access.vercel.app/", icon: Building2, badge: "Official App", color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400" },
    { name: "ELITES", desc: "West Africa's Top Tech Academy", url: "https://elites-onboarding.vercel.app/", icon: GraduationCap, badge: "Onboarding Open", color: "from-green-500/20 to-emerald-500/10 border-green-500/30 text-green-400" },
    { name: "EL SPACE", desc: "Global Freelance Matchmaking Grid", url: "https://el-space.vercel.app/", icon: Network, badge: "Direct Matching", color: "from-orange-500/20 to-yellow-500/10 border-orange-500/30 text-orange-400" },
    { name: "NEXEL", desc: "Advanced AI & Quantum Incubation R&D", url: "#", icon: Sparkles, badge: "August 2026 Launch", color: "from-rose-500/20 to-purple-500/10 border-rose-500/30 text-rose-400" }
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
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
              <Badge className="mb-4 bg-rose-500/10 text-rose-400 border-rose-500/25 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                Advanced AI & Incubation R&D Arm
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase font-display">
                Foresight with <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-purple-500 bg-clip-text text-transparent">NEXEL</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                The experimental innovation core of the EL VERSE ECOSYSTEM. Incubating high-performance decentralized computing protocols, custom micro-SaaS networks, and cognitive AI model tuning.
              </p>

              {/* Dynamic SVGLoader R&D Status Panel */}
              <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-6 bg-card/60 backdrop-blur-xl border border-primary/10 px-8 py-4 rounded-[2rem] shadow-2xl">
                <div className="flex items-center gap-3">
                  <FluidSVGLoader size={28} className="text-rose-400" />
                  <div className="text-left">
                    <div className="text-xs font-black uppercase text-foreground">R&D GRID ONLINE</div>
                    <div className="text-[10px] text-rose-400 font-bold tracking-widest">{simulatedNodes} active cognitive nodes</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-primary/10 hidden sm:block" />
                <div className="text-left">
                  <div className="text-xs font-black uppercase text-foreground">COMPUTATIONAL MASS</div>
                  <div className="text-[10px] text-muted-foreground font-bold">{computingPower} TFLOPS synthetic flow</div>
                </div>
              </div>
            </motion.div>

            {/* Countdown Clock Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-md border border-rose-500/10 rounded-[3rem] p-8 md:p-12 mb-24 relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="flex justify-center items-center gap-2">
                  <Hourglass className="w-5 h-5 text-rose-400 animate-spin" />
                  <span className="text-xs font-black uppercase tracking-widest text-rose-400">COUNTDOWN TO GENESIS</span>
                </div>

                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                  Official Release Launch: August 2026
                </h2>

                <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto pt-6">
                  {[
                    { val: timeLeft.days, label: "Days" },
                    { val: timeLeft.hours, label: "Hours" },
                    { val: timeLeft.minutes, label: "Mins" },
                    { val: timeLeft.seconds, label: "Secs" }
                  ].map((unit, idx) => (
                    <div key={idx} className="bg-background/80 border border-primary/5 rounded-2xl p-4">
                      <div className="text-2xl md:text-4xl font-black text-rose-400 tracking-tight">{unit.val}</div>
                      <div className="text-[9px] uppercase font-black text-muted-foreground tracking-widest mt-1">{unit.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Future Lab Incubations */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {[
                { icon: Binary, title: "Autonomous Agents", desc: "Incubating dynamic multi-agent system graphs that process standard B2B work flows seamlessly." },
                { icon: Microscope, title: "Micro-SaaS Incubator", desc: "Assisting emerging product engineers to code, secure, deploy, and scale microservices globally." },
                { icon: Database, title: "Distributed Computing", desc: "Harnessing unused processing nodes across West Africa to handle distributed deep-learning cycles." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-rose-500/10 bg-card/40 backdrop-blur-md hover:border-rose-500/30 transition-all rounded-[2rem] h-full">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mx-auto text-rose-400">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-semibold">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Ecosystem Gateway Directory */}
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

            {/* CTA Box */}
            <Card className="border-rose-500/10 bg-gradient-to-br from-rose-500/10 to-purple-500/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 mb-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-3xl rounded-full" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Want to Partner with NEXEL Labs?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
                We accept selective institutional pilot programs, hardware sponsors, and researchers interested in building computing grids within West Africa.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent("Hi NEXEL team, I'm interested in R&D partnership opportunities.");
                  window.open(`https://wa.me/2348061908715?text=${message}`, "_blank");
                }}
                className="h-16 px-10 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-xl uppercase tracking-wider text-xs shadow-2xl"
              >
                Inquire Partnership Gateway
              </Button>
            </Card>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Nexel;
