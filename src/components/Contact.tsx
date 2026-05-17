import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  ExternalLink,
  Clock,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+234 806 190 8715",
      action: () => window.open("https://wa.link/4cwtqf", "_blank"),
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Mail,
      label: "Email",
      value: "elcoderssoftwares12@gmail.com",
      action: () => window.open("mailto:elcoderssoftwares12@gmail.com", "_blank"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Benin Republic, Côte d'Ivoire, EU & Remote",
      action: null,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const socialLinks = [
    {
      icon: Twitter,
      platform: "Twitter",
      handle: "@ElVerse27",
      link: "https://twitter.com/ElVerse27",
      color: "text-blue-400"
    },
    {
      icon: Instagram,
      platform: "Instagram",
      handle: "el_verse1",
      link: "https://instagram.com/el_verse1",
      color: "text-pink-500"
    },
    {
      icon: Github,
      platform: "GitHub",
      handle: "ELVERSE",
      link: "https://github.com/elverse-technologies",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      platform: "LinkedIn",
      handle: "EL VERSE",
      link: "https://linkedin.com/company/el-verse",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <Badge className="mb-6 bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold tracking-widest uppercase">
            Get In Touch
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
            Let's Build Something <span className="bg-gradient-primary bg-clip-text text-transparent italic">Legendary</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Ready to scale your business or launch the next big thing?
            Our elite team is ready to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black mb-10 uppercase tracking-tight">Direct Channels</h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 rounded-[2rem] bg-card border border-primary/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className={`${info.bgColor} p-5 rounded-2xl`}>
                      <IconComponent className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-lg font-bold text-foreground">{info.value}</p>
                    </div>
                    {info.action && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={info.action}
                        className="rounded-xl hover:bg-primary/10 text-primary"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card className="border-primary/10 bg-card/50 backdrop-blur-md rounded-[2.5rem] overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-primary/5">
                <CardTitle className="flex items-center gap-3 uppercase text-sm font-black tracking-[0.2em]">
                  <Clock className="w-5 h-5 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4 font-bold text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span className="uppercase text-xs tracking-widest">Mon - Fri</span>
                    <span className="text-foreground">8:00 AM - 6:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="uppercase text-xs tracking-widest">Saturday</span>
                    <span className="text-foreground">9:00 AM - 4:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between items-center text-primary/50">
                    <span className="uppercase text-xs tracking-widest">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social & Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black mb-10 uppercase tracking-tight">Ecosystem Pulse</h3>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-8 rounded-[2rem] bg-card border border-primary/5 hover:border-primary/20 transition-all duration-300 group"
                    onClick={() => window.open(social.link, "_blank")}
                  >
                    <IconComponent className={`w-8 h-8 mb-4 ${social.color} transition-transform duration-500 group-hover:rotate-12`} />
                    <span className="text-xs font-black uppercase tracking-widest mb-1">{social.platform}</span>
                    <span className="text-[10px] text-muted-foreground font-bold">{social.handle}</span>
                  </motion.button>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-primary to-accent p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <h4 className="text-3xl font-black mb-4 uppercase tracking-tight leading-none">Ready for Liftoff?</h4>
                <p className="text-white/80 font-medium mb-8 leading-relaxed">
                  Start your transformation today. Whether it's a new product or scaling your current stack,
                  EL VERSE is your elite partner.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
                  className="w-full h-16 text-lg font-black bg-white text-primary hover:bg-white/90 rounded-2xl group"
                >
                  START WHATSAPP CHAT <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <p className="text-muted-foreground font-bold text-sm tracking-widest uppercase">
            Part of the <span className="text-primary">EL VERSE TECHNOLOGIES</span> Universe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
