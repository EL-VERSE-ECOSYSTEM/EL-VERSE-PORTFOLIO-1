import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Sparkles, Trophy, Heart } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  arm: string;
  feedback: string;
  metric: string;
  avatar: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ousmane Diallo",
      role: "Frontend Engineer",
      arm: "ELITES Academy & EL ACCESS",
      feedback: "Before EL VERSE, I was self-learning with zero guidance. The intense mentorship at ELITES gave me high-level skills, and within 3 months, EL ACCESS placed me in a high-paying internship. The skills-to-income pipeline is real!",
      metric: "Placed in Paid Internship",
      avatar: "OD"
    },
    {
      name: "Chinedu Okafor",
      role: "SaaS Founder",
      arm: "EL CODERS software client",
      feedback: "We hired EL CODERS to build our multi-tenant SaaS MVP. The professional development team engineered a scalable, premium product in record time. Their 70+ professional network is the best in West Africa.",
      metric: "Built scalable MVP in 6 Weeks",
      avatar: "CO"
    },
    {
      name: "Aisha Kamara",
      role: "Full-Stack Freelancer",
      arm: "ELSPACE Freelancer",
      feedback: "ELSPACE completely revolutionized how I work as a freelancer. Their AI matching system connected me with high-ticket enterprise projects in Europe. I've tripled my freelance earnings since joining the ecosystem.",
      metric: "Tripled Freelance Earnings",
      avatar: "AK"
    },
    {
      name: "Koffi Mensah",
      role: "Mobile App Architect",
      arm: "ELITES Alumni",
      feedback: "The foundational infrastructure provided by Supreme Elyon and the mentors at ELITES is world-class. It doesn't just prepare you for jobs; it teaches you how to create digital value and capture global opportunities.",
      metric: "100% Placement Success",
      avatar: "KM"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-card/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Ecosystem Impact
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase font-display">
            Success <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Hear from developers, learners, and enterprise clients who have unlocked unprecedented growth within the EL VERSE ECOSYSTEM.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/10 bg-card/40 backdrop-blur-md hover:border-primary/35 transition-all duration-300 rounded-[2rem] overflow-hidden group">
                <CardContent className="p-8 md:p-10 flex flex-col justify-between h-full space-y-6">

                  {/* Feedback quote */}
                  <div className="space-y-4 text-left">
                    <div className="flex items-center justify-between">
                      <Quote className="w-10 h-10 text-primary/20 shrink-0" />
                      <div className="flex gap-1 text-yellow-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium italic">
                      "{test.feedback}"
                    </p>
                  </div>

                  {/* Profile + Metrics */}
                  <div className="pt-6 border-t border-primary/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
                    <div className="flex items-center gap-4">
                      {/* Avatar initials with glowing ring */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
                        <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-black text-sm">
                          {test.avatar}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-foreground uppercase tracking-tight text-sm">{test.name}</h4>
                        <p className="text-xs text-muted-foreground font-bold">{test.role}</p>
                        <Badge variant="outline" className="mt-1 border-primary/20 text-primary text-[9px] uppercase font-bold tracking-widest px-2 py-0.5">
                          {test.arm}
                        </Badge>
                      </div>
                    </div>

                    {/* Impact Metric tag */}
                    <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-2 flex items-center gap-2 self-start sm:self-center shrink-0">
                      <Trophy className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-[10px] font-black text-foreground uppercase tracking-wide">
                        {test.metric}
                      </span>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Global Ecosystem Metric Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-background to-accent/10 border border-primary/15 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-black uppercase tracking-tight text-foreground text-sm">EL VERSE Ecosystem Impact</h4>
              <p className="text-xs text-muted-foreground font-semibold">Bridging talent & tech enterprise throughout West Africa and beyond.</p>
            </div>
          </div>

          <div className="flex gap-8 items-center text-left">
            <div>
              <div className="text-2xl font-black text-primary">70+</div>
              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Active Developers</p>
            </div>
            <div className="h-8 w-px bg-primary/10" />
            <div>
              <div className="text-2xl font-black text-primary">100%</div>
              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Placement Rate</p>
            </div>
            <div className="h-8 w-px bg-primary/10" />
            <div>
              <div className="text-2xl font-black text-primary">5</div>
              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Integrated Arms</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
