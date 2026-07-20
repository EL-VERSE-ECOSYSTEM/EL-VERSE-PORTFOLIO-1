import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Layers, ShieldCheck, TrendingUp, Cpu, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { FluidSVGLoader } from "@/components/ui/FluidSVGLoader";

const FAQ = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for dynamic feel
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Structured JSON-LD schema for FAQ page SEO
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the EL VERSE ECOSYSTEM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The EL VERSE ECOSYSTEM is a comprehensive, interconnected platform designed to guide tech talent from learning to earning. Unlike a traditional single-service platform, it functions as a \"skills-to-income\" pipeline, an ecosystem that provides a complete pathway through its five integrated arms. This structure is informed by a key insight in the talent development space: optimizing for \"job readiness\" alone is insufficient when formal employment is constrained. The more effective model is to \"design for income first, not jobs first,\" enabling participants to earn and build careers through ecosystems and new forms of work. EL VERSE is built on this principle."
          }
        },
        {
          "@type": "Question",
          "name": "What are the five arms of EL VERSE and how do they work together?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The EL VERSE ECOSYSTEM is built around its five interconnected arms, creating a user journey from learning to earning: 1. ELITES (Mentorship & Learning): Entry Point: Developers learn and build their foundational skills with mentor guidance. 2. EL ACCESS (Internships): Gain Experience: Place learners into paid internships for real-world professional experience. 3. ELSPACE (Freelance): Earn Independently: Connect skilled talent with freelance gigs to earn and build a portfolio. 4. EL CODERS (Development): Professional Building: Offer a platform to build commercial MVPs and apps for clients. 5. NEXEL (Social Community): Connect & Grow: A social hub for networking, collaboration, and community engagement. The ecosystem functions as a unified pipeline. A user can start by learning on ELITES, then gain experience through EL ACCESS, start earning independently on ELSPACE, build commercial products with EL CODERS, and finally remain connected to the community through NEXEL. This integrated, career-long journey is a key distinction from fragmented alternatives."
          }
        },
        {
          "@type": "Question",
          "name": "What makes EL VERSE ECOSYSTEM different from other platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EL VERSE is set apart by its comprehensive, \"learn-to-earn\" integration and its focus on the creator economy. The platform's key differentiators are: 1. Integrated Pipeline: Instead of offering a single service (e.g., only learning or only freelancing), EL VERSE provides a complete, vertically integrated pipeline for a tech career, connecting all stages from skill development to income generation. 2. Income-First Design: The ecosystem is designed to connect skills directly to income opportunities, moving beyond a traditional \"learn first, hope for a job later\" model to a \"learn and earn\" framework. 3. Creator Economy Focus: The platform is built to support the rise of the digital creator economy, offering a structured pathway to professionalize and monetize skills in this rapidly growing sector."
          }
        }
      ]
    };

    const scriptId = "faq-schema";
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = scriptId;
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schema);

    return () => {
      const scriptElementToRemove = document.getElementById(scriptId);
      if (scriptElementToRemove) {
        scriptElementToRemove.remove();
      }
    };
  }, []);

  const arms = [
    { arm: "ELITES", purpose: "Mentorship & Learning", func: "Entry Point: Developers learn and build their foundational skills with mentor guidance.", bg: "from-green-500/10 to-emerald-500/5", border: "border-green-500/20", text: "text-green-400" },
    { arm: "EL ACCESS", purpose: "Internships", func: "Gain Experience: Place learners into paid internships for real-world professional experience.", bg: "from-purple-500/10 to-pink-500/5", border: "border-purple-500/20", text: "text-purple-400" },
    { arm: "ELSPACE", purpose: "Freelance", func: "Earn Independently: Connect skilled talent with freelance gigs to earn and build a portfolio.", bg: "from-orange-500/10 to-yellow-500/5", border: "border-orange-500/20", text: "text-orange-400" },
    { arm: "EL CODERS", purpose: "Development", func: "Professional Building: Offer a platform to build commercial MVPs and apps for clients.", bg: "from-blue-500/10 to-cyan-500/5", border: "border-blue-500/20", text: "text-blue-400" },
    { arm: "NEXEL", purpose: "Social Community", func: "Connect & Grow: A social hub for networking, collaboration, and community engagement.", bg: "from-indigo-500/10 to-blue-500/5", border: "border-indigo-500/20", text: "text-indigo-400" },
  ];

  return (
    <section id="faq" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <FluidSVGLoader size={64} />
            <p className="text-xs font-black uppercase tracking-widest text-primary animate-pulse">Initializing Knowledge Base...</p>
          </div>
        )}

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <Badge className="mb-6 bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold tracking-widest uppercase">
                Knowledge Hub
              </Badge>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase font-display">
                Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
                Learn more about the EL VERSE ECOSYSTEM, our skills-to-income pipeline, and how we are redefining the tech talent development space.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <Accordion type="single" defaultValue="item-0" collapsible className="w-full space-y-6">

                {/* FAQ 1: What is the EL VERSE ECOSYSTEM? */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <AccordionItem value="item-0" className="border border-primary/10 bg-card/40 backdrop-blur-md rounded-[2rem] px-8 py-4 hover:border-primary/30 transition-all duration-300">
                    <AccordionTrigger className="text-xl md:text-2xl font-black text-left hover:no-underline hover:text-primary transition-colors py-4 uppercase tracking-tight flex gap-4">
                      <div className="flex items-center gap-4">
                        <HelpCircle className="w-7 h-7 text-primary shrink-0" />
                        <span>What is the EL VERSE ECOSYSTEM?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed font-medium pt-4 pb-6 border-t border-primary/5 space-y-6">
                      <p>
                        The <strong className="text-foreground">EL VERSE ECOSYSTEM</strong> is a comprehensive, interconnected platform designed to guide tech talent from learning to earning.
                      </p>
                      <p>
                        Unlike a traditional single-service platform, it functions as a <strong className="text-primary font-bold">"skills-to-income" pipeline</strong>, an ecosystem that provides a complete pathway through its five integrated arms. This structure is informed by a key insight in the talent development space: optimizing for "job readiness" alone is insufficient when formal employment is constrained.
                      </p>
                      <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
                        <TrendingUp className="w-8 h-8 text-primary shrink-0 mt-1" />
                        <p className="text-sm font-bold text-foreground leading-relaxed">
                          The more effective model is to <span className="bg-gradient-primary bg-clip-text text-transparent">"design for income first, not jobs first,"</span> enabling participants to earn and build careers through ecosystems and new forms of work. EL VERSE is built on this principle.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                {/* FAQ 2: What are the five arms of EL VERSE and how do they work together? */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <AccordionItem value="item-1" className="border border-primary/10 bg-card/40 backdrop-blur-md rounded-[2rem] px-8 py-4 hover:border-primary/30 transition-all duration-300">
                    <AccordionTrigger className="text-xl md:text-2xl font-black text-left hover:no-underline hover:text-primary transition-colors py-4 uppercase tracking-tight flex gap-4">
                      <div className="flex items-center gap-4">
                        <Layers className="w-7 h-7 text-primary shrink-0" />
                        <span>What are the five arms of EL VERSE and how do they work together?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed font-medium pt-4 pb-6 border-t border-primary/5 space-y-8">
                      <p>
                        The <strong className="text-foreground">EL VERSE ECOSYSTEM</strong> is built around its five interconnected arms, creating a seamless user journey from learning to earning.
                      </p>

                      {/* Responsive Grid/Table for Arms */}
                      <div className="overflow-hidden border border-primary/10 rounded-2xl bg-background/50">
                        {/* Desktop Table View */}
                        <div className="hidden md:block">
                          <div className="grid grid-cols-3 bg-primary/10 p-5 font-black uppercase text-xs tracking-widest border-b border-primary/10">
                            <div>Arm</div>
                            <div>Purpose</div>
                            <div>Function in the Pipeline</div>
                          </div>
                          <div className="divide-y divide-primary/5">
                            {arms.map((item, index) => (
                              <div key={index} className="grid grid-cols-3 p-5 items-center hover:bg-primary/5 transition-colors">
                                <div className="font-black text-foreground flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full bg-gradient-primary`} />
                                  {item.arm}
                                </div>
                                <div className="font-bold text-primary text-sm">{item.purpose}</div>
                                <div className="text-sm text-muted-foreground font-medium leading-relaxed">{item.func}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden divide-y divide-primary/10">
                          {arms.map((item, index) => (
                            <div key={index} className={`p-6 bg-gradient-to-br ${item.bg} space-y-3`}>
                              <div className="flex items-center justify-between">
                                <span className={`text-xl font-black ${item.text}`}>{item.arm}</span>
                                <Badge variant="outline" className={`${item.border} ${item.text} text-[10px] uppercase font-bold tracking-widest`}>
                                  {item.purpose}
                                </Badge>
                              </div>
                              <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                                {item.func}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                        <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                          The ecosystem functions as a <strong className="text-foreground">unified pipeline</strong>. A user can start by learning on <strong className="text-primary font-bold">ELITES</strong>, then gain experience through <strong className="text-primary font-bold">EL ACCESS</strong>, start earning independently on <strong className="text-primary font-bold">ELSPACE</strong>, build commercial products with <strong className="text-primary font-bold">EL CODERS</strong>, and finally remain connected to the community through <strong className="text-primary font-bold">NEXEL</strong>. This integrated, career-long journey is a key distinction from fragmented alternatives.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                {/* FAQ 3: What makes EL VERSE ECOSYSTEM different from other platforms? */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <AccordionItem value="item-2" className="border border-primary/10 bg-card/40 backdrop-blur-md rounded-[2rem] px-8 py-4 hover:border-primary/30 transition-all duration-300">
                    <AccordionTrigger className="text-xl md:text-2xl font-black text-left hover:no-underline hover:text-primary transition-colors py-4 uppercase tracking-tight flex gap-4">
                      <div className="flex items-center gap-4">
                        <ShieldCheck className="w-7 h-7 text-primary shrink-0" />
                        <span>What makes EL VERSE ECOSYSTEM different from other platforms?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed font-medium pt-4 pb-6 border-t border-primary/5 space-y-6">
                      <p>
                        <strong className="text-foreground">EL VERSE</strong> is set apart by its comprehensive, "learn-to-earn" integration and its focus on the creator economy.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6 pt-4">
                        {[
                          {
                            icon: Cpu,
                            title: "1. Integrated Pipeline",
                            desc: "Instead of offering a single service (e.g., only learning or only freelancing), EL VERSE provides a complete, vertically integrated pipeline for a tech career, connecting all stages from skill development to income generation."
                          },
                          {
                            icon: Award,
                            title: "2. Income-First Design",
                            desc: "The ecosystem is designed to connect skills directly to income opportunities, moving beyond a traditional 'learn first, hope for a job later' model to a 'learn and earn' framework."
                          },
                          {
                            icon: TrendingUp,
                            title: "3. Creator Economy Focus",
                            desc: "The platform is built to support the rise of the digital creator economy, offering a structured pathway to professionalize and monetize skills in this rapidly growing sector."
                          }
                        ].map((diff, index) => (
                          <div key={index} className="p-6 bg-card border border-primary/5 hover:border-primary/25 rounded-2xl transition-all duration-300 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                              <diff.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-base font-black text-foreground uppercase tracking-tight">{diff.title}</h4>
                            <p className="text-sm font-medium text-muted-foreground leading-relaxed">{diff.desc}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

              </Accordion>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
