import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Phone,
  Mail,
  MessageSquare,
  Briefcase,
  GraduationCap,
  Cpu,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Question {
  id: string;
  type: "select" | "multi-select" | "text";
  question: string;
  sub: string;
  options?: { label: string; value: string; desc?: string; icon?: React.ComponentType<{ className?: string }> }[];
  placeholder?: string;
}

const LeadWizard = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions: Question[] = [
    {
      id: "role",
      type: "select",
      question: "How would you like to partner with EL VERSE?",
      sub: "Choose the path that best matches your goals",
      options: [
        {
          label: "Enterprise / Client",
          value: "enterprise",
          desc: "I need custom software, AI development, or expert developers to build my product.",
          icon: Briefcase
        },
        {
          label: "Aspiring Tech Professional",
          value: "talent",
          desc: "I want to join the academy, learn high-paying tech skills, or find internships & freelance work.",
          icon: GraduationCap
        },
        {
          label: "Other Partnership / Inquiry",
          value: "partnership",
          desc: "I want to collaborate, sponsor, or have general questions about the ecosystem.",
          icon: Cpu
        }
      ]
    },
    {
      id: "interest",
      type: "multi-select",
      question: "Which arm(s) of our ecosystem are you interested in?",
      sub: "Select all that apply to your current objective",
      options: [
        { label: "ELITES Academy", value: "elites", desc: "For world-class mentor-guided tech training." },
        { label: "EL ACCESS Internships", value: "el_access", desc: "For paid professional internships & experience." },
        { label: "ELSPACE Freelance", value: "el_space", desc: "For connecting skilled talent with global freelance gigs." },
        { label: "EL CODERS software", value: "el_coders", desc: "For bespoke software, apps, and enterprise solutions." },
        { label: "NEXEL Social Media", value: "nexel", desc: "For authentic, privacy-first community connection." }
      ]
    },
    {
      id: "budget_or_skill",
      type: "select",
      question: answers.role === "enterprise"
        ? "What is your estimated project budget?"
        : "What is your current level of experience?",
      sub: answers.role === "enterprise"
        ? "This helps us align the architectural options for your project"
        : "We accommodate everyone from absolute beginners to senior pros",
      options: answers.role === "enterprise"
        ? [
            { label: "Under $5,000", value: "budget_low", desc: "Ideal for fast MVPs and landing designs." },
            { label: "$5,000 - $15,000", value: "budget_mid", desc: "Suitable for custom SaaS or advanced web applications." },
            { label: "$15,000+", value: "budget_high", desc: "For scaling platforms, deep integrations, & enterprise systems." }
          ]
        : [
            { label: "Absolute Beginner", value: "exp_beginner", desc: "No programming background. Ready to learn from scratch." },
            { label: "Intermediate Learner", value: "exp_intermediate", desc: "Some experience. Seeking mentorship and building portfolios." },
            { label: "Professional / Job Ready", value: "exp_pro", desc: "Ready for paid internships, freelance gigs, or full development roles." }
          ]
    },
    {
      id: "description",
      type: "text",
      question: "Briefly tell us what you're hoping to achieve",
      sub: "A sentence or two about your project vision, learning desires, or query",
      placeholder: "e.g., 'I want to build a mobile app for an e-commerce startup' or 'I want to transition into frontend development...'"
    }
  ];

  const currentQuestion = questions[step];

  const handleSelect = (val: string) => {
    if (currentQuestion.type === "select") {
      setAnswers({ ...answers, [currentQuestion.id]: val });
      if (step < questions.length - 1) {
        setStep(step + 1);
      }
    } else if (currentQuestion.type === "multi-select") {
      const currentSelected = (answers[currentQuestion.id] as string[]) || [];
      const updated = currentSelected.includes(val)
        ? currentSelected.filter((v) => v !== val)
        : [...currentSelected, val];
      setAnswers({ ...answers, [currentQuestion.id]: updated });
    }
  };

  const isMultiSelected = (val: string) => {
    const selected = (answers[currentQuestion.id] as string[]) || [];
    return selected.includes(val);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({ ...answers, [currentQuestion.id]: e.target.value });
  };

  const getCustomizedAdvice = () => {
    const role = answers.role as string;
    const desc = (answers.description as string) || "";

    if (role === "enterprise") {
      return {
        title: "Your Custom Enterprise Strategy is Ready!",
        recommendation: "Our EL CODERS and ELSPACE networks are perfectly optimized to handle your project. We have successfully mapped out a preliminary development strategy tailored to your custom requirements.",
        nextSteps: [
          "Technical Consultation with our Elite Solutions Architect.",
          "Custom MVP scope document & development timeline proposal.",
          "Pre-populated proposal details sent directly to our Founder's team."
        ],
        waText: `Hi EL VERSE, I would like to schedule an enterprise consultation. My details are:\nName: ${name}\nRole: Enterprise/Client\nEcosystem Arms: ${((answers.interest as string[]) || []).join(", ")}\nBudget Level: ${answers.budget_or_skill}\nGoal: ${desc}`
      };
    } else if (role === "talent") {
      return {
        title: "Your Personalized Tech Career Roadmap is Ready!",
        recommendation: "Welcome to the skills-to-income pipeline! We recommend starting at ELITES Academy to master technical concepts, then transitioning seamlessly through EL ACCESS Internships to gain real-world pedigree, and launching into ELSPACE freelance roles.",
        nextSteps: [
          "Free onboarding session & technical skill assessment.",
          "Personalized learning syllabus or portfolio review program.",
          "Priority listing for internship placement programs."
        ],
        waText: `Hi EL VERSE, I want to join the skills-to-income pipeline! My details are:\nName: ${name}\nRole: Tech Professional/Learner\nEcosystem Arms: ${((answers.interest as string[]) || []).join(", ")}\nExperience Level: ${answers.budget_or_skill}\nMy Focus: ${desc}`
      };
    } else {
      return {
        title: "Your Ecosystem Collaboration Plan is Ready!",
        recommendation: "We appreciate your interest in building West Africa's tech ecosystem. Our team is ready to review your partnership proposal or general inquiry and connect you with key leads.",
        nextSteps: [
          "Partnership alignment review with Supreme Elyon's core team.",
          "Joint venture discussion or customized sponsorship opportunity.",
          "Direct access to our 70+ professional developer network."
        ],
        waText: `Hi EL VERSE, I'm interested in a partnership/general inquiry. My details are:\nName: ${name}\nRole: Partner/Collaborator\nEcosystem Arms: ${((answers.interest as string[]) || []).join(", ")}\nInquiry details: ${desc}`
      };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="wizard" className="py-24 relative overflow-hidden bg-gradient-to-b from-card/20 via-background to-card/20">
      <div className="absolute inset-0 bg-gradient-primary opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Interactive Onboarding
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase font-display">
            Find Your <span className="bg-gradient-primary bg-clip-text text-transparent">Orbit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
            Take 30 seconds to answer 4 quick questions. We will dynamically construct a custom strategy and connect you directly with the right arm of EL VERSE.
          </p>
        </div>

        {/* Wizard Card */}
        <Card className="border-primary/10 bg-card/45 backdrop-blur-xl shadow-2xl rounded-[2.5rem] overflow-hidden">
          <CardContent className="p-8 md:p-12">

            {/* Progress Bar */}
            {!isSubmitted && (
              <div className="w-full bg-primary/10 h-1.5 rounded-full mb-12 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((step + 1) / (questions.length + 1)) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Question Title */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-2">
                      {currentQuestion.question}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {currentQuestion.sub}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-4">
                    {currentQuestion.type === "select" && currentQuestion.options?.map((opt) => {
                      const Icon = opt.icon;
                      return (
                        <motion.div
                          key={opt.value}
                          whileHover={{ scale: 1.01, x: 4 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => handleSelect(opt.value)}
                          className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all ${
                            answers[currentQuestion.id] === opt.value
                              ? "border-primary bg-primary/5 shadow-lg shadow-primary/5"
                              : "border-primary/10 bg-background/50 hover:border-primary/30"
                          }`}
                        >
                          {Icon && (
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                              <Icon className="w-6 h-6" />
                            </div>
                          )}
                          <div className="text-left">
                            <h4 className="font-black uppercase text-sm tracking-wide text-foreground mb-1">{opt.label}</h4>
                            {opt.desc && <p className="text-xs font-semibold text-muted-foreground leading-relaxed">{opt.desc}</p>}
                          </div>
                        </motion.div>
                      );
                    })}

                    {currentQuestion.type === "multi-select" && currentQuestion.options?.map((opt) => (
                      <motion.div
                        key={opt.value}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => handleSelect(opt.value)}
                        className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer transition-all ${
                          isMultiSelected(opt.value)
                            ? "border-primary bg-primary/5 shadow-lg"
                            : "border-primary/10 bg-background/50 hover:border-primary/30"
                        }`}
                      >
                        <div className="text-left flex-1 pr-4">
                          <h4 className="font-black uppercase text-sm tracking-wide text-foreground mb-1">{opt.label}</h4>
                          {opt.desc && <p className="text-xs font-semibold text-muted-foreground leading-relaxed">{opt.desc}</p>}
                        </div>
                        <div className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 ${
                          isMultiSelected(opt.value) ? "bg-primary border-primary text-white" : "border-primary/20"
                        }`}>
                          {isMultiSelected(opt.value) && <Check className="w-4 h-4" />}
                        </div>
                      </motion.div>
                    ))}

                    {currentQuestion.type === "text" && (
                      <div className="space-y-6">
                        <Input
                          placeholder={currentQuestion.placeholder}
                          value={(answers[currentQuestion.id] as string) || ""}
                          onChange={handleTextChange}
                          className="h-16 text-lg border-primary/20 bg-background/50 rounded-xl focus:border-primary px-6"
                        />

                        {/* Contact Form Details */}
                        <div className="pt-6 border-t border-primary/5 space-y-4 text-left">
                          <h4 className="text-lg font-black uppercase tracking-tight text-foreground">
                            Almost there! Enter your details to reveal recommendation
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</span>
                              <Input
                                placeholder="e.g. John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-12 border-primary/15 bg-background/50 rounded-xl"
                              />
                            </div>
                            <div className="space-y-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</span>
                              <Input
                                type="email"
                                placeholder="e.g. john@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-12 border-primary/15 bg-background/50 rounded-xl"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation Button */}
                  <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                    <Button
                      variant="ghost"
                      onClick={handlePrev}
                      disabled={step === 0}
                      className="h-12 px-6 font-bold uppercase text-xs tracking-wider"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>

                    {currentQuestion.type === "text" ? (
                      <Button
                        onClick={() => {
                          if (name && email) {
                            setIsSubmitted(true);
                          }
                        }}
                        disabled={!name || !email || !answers[currentQuestion.id]}
                        className="h-12 px-8 bg-gradient-primary hover:opacity-90 font-black uppercase text-xs tracking-wider rounded-xl text-white"
                      >
                        Get Recommendations <Sparkles className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleNext}
                        disabled={
                          currentQuestion.type === "multi-select" &&
                          ((answers[currentQuestion.id] as string[]) || []).length === 0
                        }
                        className="h-12 px-8 bg-gradient-primary hover:opacity-90 font-black uppercase text-xs tracking-wider rounded-xl text-white"
                      >
                        Next Step <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                    {getCustomizedAdvice().title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                    {getCustomizedAdvice().recommendation}
                  </p>

                  {/* Custom Roadmap Checklist */}
                  <div className="bg-background/40 border border-primary/10 p-8 rounded-3xl max-w-xl mx-auto text-left space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-2">Recommended Next Actions</h4>
                    {getCustomizedAdvice().nextSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 text-primary rounded-lg shrink-0 mt-0.5">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-sm text-foreground/80">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Engagement */}
                  <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                    <Button
                      size="lg"
                      onClick={() => {
                        const message = encodeURIComponent(getCustomizedAdvice().waText);
                        window.open(`https://wa.me/2348061908715?text=${message}`, "_blank");
                      }}
                      className="h-16 px-8 bg-[#25D366] hover:bg-[#128C7E] text-white font-black rounded-xl uppercase tracking-wider text-xs flex-1 shrink-0"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" /> Submit via WhatsApp
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => {
                        const rec = getCustomizedAdvice();
                        const subject = encodeURIComponent("EL VERSE - Interactive Partnership Strategy");
                        const body = encodeURIComponent(rec.waText);
                        window.open(`mailto:elcoderssoftwares12@gmail.com?subject=${subject}&body=${body}`, "_blank");
                      }}
                      className="h-16 px-8 border-primary/30 hover:bg-primary/5 text-foreground font-black rounded-xl uppercase tracking-wider text-xs flex-1 shrink-0"
                    >
                      <Mail className="w-5 h-5 mr-2" /> Send as Email
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground font-semibold pt-4">
                    Or directly email our solutions team at <span className="text-primary font-bold">elcoderssoftwares12@gmail.com</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadWizard;
