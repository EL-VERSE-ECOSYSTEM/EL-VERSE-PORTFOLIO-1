import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  Network,
  Code2,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Zap,
  Briefcase,
  Layers,
  HelpCircle
} from "lucide-react";

interface PipelineStep {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  textColor: string;
  bgLight: string;
  metrics: string;
}

const EcosystemVisualizer = () => {
  const [activeTab, setActiveTab] = useState<"talent" | "enterprise">("talent");
  const [selectedStep, setSelectedStep] = useState<string>("elites");

  const talentSteps: PipelineStep[] = [
    {
      id: "elites",
      title: "1. ELITES",
      subtitle: "Academy Onboarding",
      desc: "Learn from top mentors in West Africa. Developers undergo intensive bootcamps and obtain recognized curriculum credentials.",
      icon: GraduationCap,
      color: "from-green-600 to-emerald-500",
      textColor: "text-green-400",
      bgLight: "bg-green-500/10",
      metrics: "100% Onboarding Success Rate"
    },
    {
      id: "el_access",
      title: "2. EL ACCESS",
      subtitle: "Paid Internships",
      desc: "Transition smoothly into real-world workspace assignments. Placing elite learners directly into high-value paid intern roles.",
      icon: Users,
      color: "from-purple-600 to-pink-500",
      textColor: "text-purple-400",
      bgLight: "bg-purple-500/10",
      metrics: "70+ Active Placements"
    },
    {
      id: "el_space",
      title: "3. EL SPACE",
      subtitle: "Freelance Universe",
      desc: "Work independently on enterprise projects. Connect with global opportunities through our AI-powered matchmaking system.",
      icon: Network,
      color: "from-orange-600 to-yellow-500",
      textColor: "text-orange-400",
      bgLight: "bg-orange-500/10",
      metrics: "$12K+ Median Freelancer Earnings"
    },
    {
      id: "el_coders",
      title: "4. EL CODERS",
      subtitle: "Full Development Hub",
      desc: "Earn high-bracket income by engineering premium custom apps, web solutions, and commercial products for enterprise clients.",
      icon: Code2,
      color: "from-blue-600 to-cyan-500",
      textColor: "text-blue-400",
      bgLight: "bg-blue-500/10",
      metrics: "50+ Enterprise MVPs Handled"
    },
    {
      id: "nexel",
      title: "5. NEXEL",
      subtitle: "Social Growth Hub",
      desc: "Never stop networking. Collaborate on new technology stack expansions and social creator opportunities in Africa's tech hub.",
      icon: MessageSquare,
      color: "from-indigo-600 to-blue-500",
      textColor: "text-indigo-400",
      bgLight: "bg-indigo-500/10",
      metrics: "Launching August 2026"
    }
  ];

  const enterpriseSteps: PipelineStep[] = [
    {
      id: "el_coders",
      title: "1. EL CODERS",
      subtitle: "Enterprise MVP Building",
      desc: "Clients outline software goals. Our professional software powerhouse scopes, designs, and builds premium production solutions.",
      icon: Code2,
      color: "from-blue-600 to-cyan-500",
      textColor: "text-blue-400",
      bgLight: "bg-blue-500/10",
      metrics: "70+ Dedicated Software Engineers"
    },
    {
      id: "el_space",
      title: "2. EL SPACE",
      subtitle: "Staff Augmentation",
      desc: "Need immediate, validated developer scale-up? Hire vetted freelance specialists instantly via AI matching system.",
      icon: Network,
      color: "from-orange-600 to-yellow-500",
      textColor: "text-orange-400",
      bgLight: "bg-orange-500/10",
      metrics: "24-Hour Average Matching Speed"
    },
    {
      id: "nexel",
      title: "3. NEXEL",
      subtitle: "Direct Outreach Hub",
      desc: "Engage with custom developer micro-communities. Gain immediate client exposure and run hyper-targeted recruitment drives.",
      icon: MessageSquare,
      color: "from-indigo-600 to-blue-500",
      textColor: "text-indigo-400",
      bgLight: "bg-indigo-500/10",
      metrics: "Comprehensive Creator Economy Support"
    }
  ];

  const stepsToRender = activeTab === "talent" ? talentSteps : enterpriseSteps;
  const currentStepData = stepsToRender.find((s) => s.id === selectedStep) || stepsToRender[0];

  // Auto fallback if step doesn't exist in current tab
  React.useEffect(() => {
    if (!stepsToRender.some((s) => s.id === selectedStep)) {
      setSelectedStep(stepsToRender[0].id);
    }
  }, [activeTab]);

  return (
    <section id="visualizer" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Unified Pipeline Visualizer
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase font-display">
            The <span className="bg-gradient-primary bg-clip-text text-transparent">Skills-To-Income</span> Pipeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Discover how our ecosystem arms interact to build a seamless experience. Toggle between our paths to trace your exact trajectory.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-card border border-primary/15 p-1.5 rounded-2xl flex gap-2">
            <button
              onClick={() => setActiveTab("talent")}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === "talent"
                  ? "bg-gradient-primary text-white shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Zap className="w-4 h-4" /> Talent/Learner Journey
            </button>
            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === "enterprise"
                  ? "bg-gradient-primary text-white shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="w-4 h-4" /> Enterprise/Client Journey
            </button>
          </div>
        </div>

        {/* Pipeline Map & Detail Panel */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">

          {/* Timeline Map Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4 pl-2">
              Pipeline Progression
            </h3>
            <div className="relative pl-6 space-y-6">
              {/* Timeline continuous vertical line */}
              <div className="absolute left-10 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/5 pointer-events-none" />

              {stepsToRender.map((step, idx) => {
                const IconComponent = step.icon;
                const isSelected = selectedStep === step.id;
                return (
                  <motion.div
                    key={step.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedStep(step.id)}
                    className={`relative flex items-center gap-6 p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/5"
                        : "border-primary/5 bg-card/40 hover:border-primary/20"
                    }`}
                  >
                    {/* Icon Container */}
                    <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? `bg-gradient-to-r ${step.color} text-white` : "bg-card border border-primary/20 text-muted-foreground"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Step info */}
                    <div className="text-left flex-1">
                      <h4 className={`text-sm font-black uppercase tracking-wide transition-colors ${
                        isSelected ? "text-primary" : "text-foreground"
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-semibold">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Arrow Right Indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeArrow"
                        className="text-primary mr-2"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <ArrowRight className="w-5 h-5 animate-pulse" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Interactive Showcase Panel Column */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStepData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <Card className={`relative overflow-hidden border-primary/10 bg-gradient-to-br ${currentStepData.bgLight} to-background backdrop-blur-2xl rounded-[2.5rem]`}>
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${currentStepData.color}`} />

                  <CardContent className="p-8 md:p-12 space-y-8">
                    {/* Icon + Title Header */}
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-background shadow-xl border border-primary/10`}>
                        {React.createElement(currentStepData.icon, { className: `w-8 h-8 ${currentStepData.textColor}` })}
                      </div>
                      <div className="text-left">
                        <Badge className="bg-primary/10 text-primary uppercase font-bold tracking-wider mb-1.5">
                          Ecosystem Arm Node
                        </Badge>
                        <h3 className="text-3xl font-black uppercase tracking-tight text-foreground">
                          {currentStepData.title.split(". ")[1]}
                        </h3>
                      </div>
                    </div>

                    {/* Description Block */}
                    <p className="text-muted-foreground text-lg leading-relaxed text-left font-medium">
                      {currentStepData.desc}
                    </p>

                    {/* Core metrics / Highlight */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-background/80 p-5 rounded-2xl border border-primary/10 text-left space-y-1 shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Performance Metric</span>
                        <div className="text-sm font-black text-foreground flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          {currentStepData.metrics}
                        </div>
                      </div>
                      <div className="bg-background/80 p-5 rounded-2xl border border-primary/10 text-left space-y-1 shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Interconnectivity</span>
                        <div className="text-sm font-black text-foreground flex items-center gap-2">
                          <Layers className="w-4 h-4 text-primary" />
                          Fully Integrated Node
                        </div>
                      </div>
                    </div>

                    {/* Bottom Unified CTA Link */}
                    <div className="pt-4 border-t border-primary/5 flex items-center justify-between text-left">
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-wide text-foreground">How this helps conversion</h4>
                        <p className="text-xs text-muted-foreground font-semibold">Every node is directly tied to the primary skills-to-income pipeline</p>
                      </div>
                      <button
                        onClick={() => {
                          document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="h-12 px-5 bg-card hover:bg-primary/5 text-primary border border-primary/20 font-bold uppercase text-xs tracking-wider rounded-xl transition-all duration-300"
                      >
                        Launch Orbit Wizard
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EcosystemVisualizer;
