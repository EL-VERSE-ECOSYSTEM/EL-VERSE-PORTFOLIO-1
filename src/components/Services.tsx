import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Code2, 
  Users, 
  MessageSquare, 
  Network, 
  GraduationCap,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import elcodersLogo from "@/assets/elcoders-logo.jpg";
import elaccessLogo from "@/assets/el-access-new.jpg";
import nexelLogo from "@/assets/nexel-new.jpg";
import elitesLogo from "@/assets/elites-new.jpg";
import elspaceLogo from "@/assets/el-space-new.jpg";

const Services = () => {
  const services = [
    {
      id: "elcoders",
      icon: Code2,
      title: "ELCODERS",
      description: "Elite software development powerhouse",
      details: "Premier team of 70+ expert developers crafting cutting-edge web applications, mobile solutions, and enterprise-grade software that transforms businesses and accelerates digital innovation across Africa.",
      status: "Active",
      link: "https://elcoders-connect.vercel.app/",
      color: "from-blue-600 to-cyan-500",
      logo: elcodersLogo,
      features: ["Full-Stack Development", "Automations", "AI Development", "Cloud Architecture"]
    },
    {
      id: "elaccess",
      icon: Users,
      title: "EL ACCESS",
      description: "Elite tech talent community",
      details: "An exclusive society connecting ambitious tech students, interns, and emerging professionals with industry leaders. Part of our 70+ professional network providing world-class mentorship and career pathways.",
      status: "Active",
      link: "https://el-access.vercel.app/",
      color: "from-purple-600 to-pink-500",
      logo: elaccessLogo,
      features: ["Elite Mentorship", "Industry Networking", "Career Acceleration", "Leadership Training"]
    },
    {
      id: "elites",
      icon: GraduationCap,
      title: "ELITES",
      description: "West Africa's premier tech academy",
      details: "Revolutionary tech education institute transforming careers across West Africa. Led by our 70+ industry professionals, we provide curriculum and placement programs for the next tech leaders.",
      status: "Active",
      link: "https://elites-connect.vercel.app/",
      color: "from-green-600 to-emerald-500",
      logo: elitesLogo,
      features: ["Intensive Bootcamps", "Industry Certifications", "100% Placement", "Mentorship"]
    },
    {
      id: "elspace",
      icon: Network,
      title: "EL SPACE",
      description: "Freelance arm of EL VERSE TECHNOLOGIES",
      details: "Next-generation platform revolutionizing how tech professionals connect with enterprises. Powered by our ecosystem of 70+ experts, it offers AI-powered matching and seamless project collaboration.",
      status: "Active",
      link: "https://el-space.vercel.app/",
      color: "from-orange-600 to-yellow-500",
      logo: elspaceLogo,
      features: ["AI-Powered Matching", "Blockchain Verification", "Enterprise Portal", "Global Talent"]
    },
    {
      id: "nexel",
      icon: MessageSquare,
      title: "NEXEL",
      description: "Revolutionary social media platform",
      details: "The future of authentic social connection. Developed by our elite 70+ tech team, NEXEL redefines social media with privacy-first design, AI-powered content curation, and meaningful community building.",
      status: "Coming August 2026",
      link: "#",
      color: "from-indigo-600 to-blue-500",
      logo: nexelLogo,
      features: ["Privacy-First Design", "AI Content Curation", "Community Building", "Creator Economy"]
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <Badge className="mb-6 bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold tracking-widest uppercase">
            Our Tech Ecosystem
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black font-display mb-8 tracking-tighter">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Universe</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Discover a comprehensive ecosystem of technology solutions designed to empower
            the next generation of African innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden border-primary/10 bg-card/50 backdrop-blur-md hover:border-primary/40 transition-all duration-500">
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.color}`} />

                  <CardHeader className="pt-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-xl rounded-full`} />
                        <img
                          src={service.logo}
                          alt={service.title}
                          className="w-16 h-16 rounded-2xl object-cover relative z-10 border border-white/10 shadow-2xl"
                        />
                      </div>
                      <Badge variant={service.status === "Active" ? "default" : "secondary"} className="font-bold">
                        {service.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-black tracking-tight mb-2 uppercase">{service.title}</CardTitle>
                    <CardDescription className="text-primary font-bold text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                      {service.details}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-foreground/80">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color}`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      {service.link !== "#" ? (
                        <Button
                          className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-black py-6 rounded-xl transition-all duration-300 group`}
                          onClick={() => window.open(service.link, '_blank')}
                        >
                          EXPLORE PLATFORM <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full py-6 rounded-xl border-primary/20 font-bold hover:bg-primary/5"
                          disabled
                        >
                          LAUNCHING SOON
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Unified Ecosystem CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[2.5rem] bg-gradient-primary relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Ready to Join the Universe?
            </h3>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Whether you're looking for elite software solutions, tech training, or
              exclusive career opportunities, EL VERSE is your destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="h-16 px-10 text-lg font-black bg-white text-primary hover:bg-white/90 rounded-2xl shadow-2xl"
                onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
              >
                START A PROJECT
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-16 px-10 text-lg font-black border-white text-white hover:bg-white/10 rounded-2xl"
                onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
              >
                CONSULTATION
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
