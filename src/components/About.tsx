import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Zap, 
  Globe,
  Users,
  Sparkles
} from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold tracking-widest uppercase">
              Our Legacy
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              Building the <span className="bg-gradient-primary bg-clip-text text-transparent">Future</span> of African Tech
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-medium">
              <p>
                <strong className="text-foreground">EL VERSE</strong> is a premier technology powerhouse
                dedicated to revolutionizing the digital landscape of West Africa.
              </p>
              <p>
                Founded by <strong className="text-foreground text-primary">Supreme Elyon</strong>,
                our mission is to bridge the gap between African talent and global opportunities
                through a unified ecosystem of excellence.
              </p>
              <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                <p className="text-sm font-bold text-foreground italic">
                  "We don't just build software; we build the infrastructure for Africa's digital tomorrow."
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 scale-110" />
            <img 
              src={teamPhoto} 
              alt="EL VERSE Team" 
              className="w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl relative z-10 border border-primary/10"
            />
            <div className="absolute -bottom-6 -right-6 bg-background p-8 rounded-3xl border border-primary/10 shadow-2xl z-20 hidden md:block">
              <div className="text-4xl font-black text-primary mb-1">70+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Expert Engineers</div>
            </div>
          </motion.div>
        </div>
        
        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Target,
              title: "Mission",
              desc: "To democratize access to world-class technology solutions across the African continent.",
              bgColor: "bg-primary/10",
              textColor: "text-primary"
            },
            {
              icon: Eye,
              title: "Vision",
              desc: "To become the definitive technology ecosystem where innovation meets unprecedented opportunity.",
              bgColor: "bg-accent/10",
              textColor: "text-accent"
            },
            {
              icon: Heart,
              title: "Values",
              desc: "Excellence, Integrity, and Community Impact are the core pillars of everything we create.",
              bgColor: "bg-success/10",
              textColor: "text-success"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-md hover:border-primary/30 transition-all duration-500 group rounded-[2rem]">
                <CardContent className="p-10 text-center">
                  <div className={`${item.bgColor} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <item.icon className={`w-10 h-10 ${item.textColor}`} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur-md border border-primary/10 p-12 rounded-[3rem] mb-32"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Award, label: "Success Rate", value: "100%", bgColor: "bg-primary/10", textColor: "text-primary" },
              { icon: Users, label: "Professionals", value: "70+", bgColor: "bg-accent/10", textColor: "text-accent" },
              { icon: Zap, label: "Tech Divisions", value: "5", bgColor: "bg-success/10", textColor: "text-success" },
              { icon: Globe, label: "Countries", value: "3+", bgColor: "bg-warning/10", textColor: "text-warning" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-8 h-8 ${stat.textColor}`} />
                </div>
                <div className="text-4xl font-black text-foreground mb-2">{stat.value}</div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-4xl font-black mb-12 tracking-tight uppercase">The Visionary</h3>
          <Card className="max-w-xl mx-auto border-primary/10 bg-card/50 backdrop-blur-md rounded-[2.5rem] overflow-hidden group">
            <CardContent className="p-12">
              <div className="w-32 h-32 bg-gradient-primary rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <span className="text-4xl font-black text-white">SE</span>
              </div>
              <h4 className="text-3xl font-black mb-2 uppercase tracking-tight">Supreme Elyon</h4>
              <p className="text-primary font-black text-sm tracking-[0.2em] mb-6 uppercase">Founder & CEO</p>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                A pioneering force in the African tech ecosystem, dedicated to creating
                sustainable digital solutions that empower millions across the continent.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
