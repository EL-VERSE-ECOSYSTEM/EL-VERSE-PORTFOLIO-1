import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Trophy,
  Users,
  BookOpen,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";

const Elites = () => {
  const syllabus = [
    { module: "Module 1", title: "Web Crafting & Architecture", desc: "HTML5, CSS3, Modern ES6+ JavaScript, Tailwind CSS, and Figma-to-Code flows." },
    { module: "Module 2", title: "Premium Frontend Ecosystems", desc: "React, TypeScript, state management, and highly immersive Framer Motion animations." },
    { module: "Module 3", title: "Robust Enterprise Backend Systems", desc: "Node.js, Express, databases (SQL/NoSQL), RESTful/GraphQL APIs, and security best practices." },
    { module: "Module 4", title: "Cloud Scale & Workspace Deployment", desc: "Docker, CI/CD pipelines, AWS/Vercel scaling, and collaborative Git strategies." }
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
              <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/25 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                West Africa's Premier Tech Academy
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase font-display">
                Welcome to <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">ELITES</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                Empowering emerging talent with world-class mentor-guided technical bootcamps. Transition from a total beginner to a production-ready software expert in West Africa.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => window.open("https://elites-onboarding.vercel.app/", "_blank")}
                  className="h-14 px-8 bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90 text-white font-black rounded-xl uppercase tracking-wider text-xs shadow-lg shadow-green-500/20"
                >
                  Apply to Academy <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Grid of Perks */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {[
                { icon: BookOpen, title: "Curriculum Excellence", desc: "Up-to-date courses aligned with direct global workspace requirements.", text: "text-green-400" },
                { icon: Users, title: "1-on-1 Mentorship", desc: "Guided by our team of 70+ professional engineers and architects.", text: "text-emerald-400" },
                { icon: Trophy, title: "Internship Pipeline", desc: "Successful graduates gain priority placement into paid EL ACCESS assignments.", text: "text-teal-400" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-green-500/10 bg-card/40 backdrop-blur-md hover:border-green-500/30 transition-all rounded-[2rem]">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto text-green-400">
                        {React.createElement(item.icon, { className: "w-6 h-6" })}
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Syllabus Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12 mb-24"
            >
              <div className="text-center">
                <Badge className="bg-primary/10 text-primary uppercase font-bold tracking-widest px-3 py-1 text-[10px]">Academic Curriculum</Badge>
                <h2 className="text-3xl md:text-5xl font-black uppercase mt-4 tracking-tight">Our Modern Syllabus</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {syllabus.map((item, index) => (
                  <Card key={index} className="border-primary/10 bg-card/30 backdrop-blur-md rounded-2xl p-6 text-left hover:border-primary/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary text-xs font-black shrink-0 mt-1">
                        {item.module}
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

            {/* Impact Highlights */}
            <Card className="border-green-500/10 bg-gradient-to-br from-green-500/10 to-teal-500/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 mb-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Designed For Income First</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
                Rather than optimizing solely for traditional jobs in limited spaces, we construct skill sets that enable high-end global remote freelancing and digital product launching.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-6 border-t border-green-500/15">
                <div>
                  <div className="text-3xl font-black text-green-400">100%</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Mentorship Guidance</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-400">70+</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Expert Advisors</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-400">3 Months</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Typical Career Entry</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-400">Paid</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Internship Pathways</p>
                </div>
              </div>
            </Card>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Elites;
