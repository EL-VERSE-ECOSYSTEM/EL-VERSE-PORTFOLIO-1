import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Users, 
  MessageSquare, 
  Network, 
  GraduationCap,
  ExternalLink,
  Calendar,
  MapPin
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
      link: "https://elcoders-devs.vercel.app/",
      color: "bg-primary",
      logo: elcodersLogo,
      features: ["Full-Stack Development", "Automations", "Mobile Applications", "Enterprise Solutions", "AI Development", "Blockchain", "Backend and Frontend Development", "Cloud Architecture", "DevOps & Azure Deployment", "API Integration"]
    },
    {
      id: "elaccess",
      icon: Users,
      title: "EL ACCESS",
      description: "Elite tech talent community",
      details: "An exclusive society connecting ambitious tech students, interns, and emerging professionals with industry leaders. Part of our 70+ professional network providing world-class mentorship and career pathways.",
      status: "Active",
      link: "https://el-accsess-2-registration.netlify.app/",
      color: "bg-accent",
      logo: elaccessLogo,
      features: ["Elite Mentorship", "Industry Networking", "Advanced Skill Development", "Career Acceleration", "Project Collaboration", "Leadership Training"]
    },
    {
      id: "nexel",
      icon: MessageSquare,
      title: "NEXEL",
      description: "Revolutionary social media platform",
      details: "The future of authentic social connection. Developed by our elite 70+ tech team, NEXEL redefines social media with privacy-first design, AI-powered content curation, and meaningful community building.",
      status: "Coming August 2026",
      link: "#",
      color: "bg-success",
      logo: nexelLogo,
      features: ["Privacy-First Design", "AI Content Curation", "Community Building", "Authentic Connections", "Creator Economy", "Cross-Platform Sync", "Content Earning and Marketplace"]
    },
    {
      id: "elspace",
      icon: Network,
      title: "EL SPACE",
      description: "Freelance arm of EL VERSE TECHNOLOGIES",
      details: "Next-generation platform revolutionizing how tech professionals connect with enterprises. Powered by our ecosystem of 70+ experts, it offers AI-powered matching and seamless project collaboration.",
      status: "Coming July 2026",
      link: "#",
      color: "bg-warning",
      logo: elspaceLogo,
      features: ["AI-Powered Matching", "Blockchain Verification", "Enterprise Portal", "Global Talent Pool", "Smart Contracts", "Real-time Collaboration"]
    },
    {
      id: "elites",
      icon: GraduationCap,
      title: "ELITES",
      description: "West Africa's premier tech academy",
      details: "Revolutionary tech education institute transforming careers across West Africa. Led by our 70+ industry professionals, we provide curriculum and placement programs for the next tech leaders.",
      status: "Coming June 2026",
      link: "#",
      color: "bg-success",
      logo: elitesLogo,
      features: ["Intensive Bootcamps", "Industry Certifications", "100% Placement Guarantee", "Corporate Partnerships", "Mentorship Programs", "Continuous Learning"]
    }
  ];

  const getStatusColor = (status: string) => {
    if (status === "Active") return "bg-success text-success-foreground";
    if (status.includes("2026")) return "bg-primary text-primary-foreground";
    return "bg-warning text-warning-foreground";
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-card via-card/95 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,153,225,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Our Tech Ecosystem
          </div>
          <h2 className="text-5xl md:text-6xl font-black font-display mb-8 tracking-wide">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Universe</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive ecosystem of technology solutions, 
            from enterprise software development to revolutionary social platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {service.logo ? (
                        <img src={service.logo} alt={`${service.title} logo`} className="w-12 h-12 rounded-lg object-cover" />
                      ) : (
                        <div className={`p-3 rounded-lg ${service.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <Badge className={getStatusColor(service.status)}>
                      {service.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold font-display tracking-wide">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.details}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    {service.link !== "#" ? (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1 bg-gradient-primary hover:opacity-90 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
                        onClick={() => window.open(service.link, '_blank')}
                      >
                        Explore Now <ExternalLink className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                      </Button>
                    ) : (
                      <div className="flex gap-2 w-full">
                        <Button variant="outline" size="sm" className="flex-1 border-primary/50 hover:bg-primary/10 transition-colors" disabled>
                          {service.status.includes("Coming") ? "Coming Soon" : "Learn More"}
                        </Button>
                        <Button size="sm" className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
                          Notify Me
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 100+ satisfied clients who trust EL VERSE for their technology needs. 
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8"
                onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/50 hover:bg-primary/10 px-8"
                onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Location & Timeline Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-muted/50 p-6 rounded-2xl backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Benin Republic, Côte d'Ivoire, EU & Remote</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-medium">Expanding Across West Africa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
