import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Rocket, Globe, GraduationCap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedLogo from "./AnimatedLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hero Background with Parallax effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="mb-6">
            <AnimatedLogo size="lg" />
          </div>
          <h1 className="text-6xl md:text-9xl font-black font-display bg-gradient-primary bg-clip-text text-transparent tracking-tighter leading-none mb-4">
            EL VERSE ECOSYSTEM
          </h1>
          <div className="h-1.5 w-32 bg-gradient-primary rounded-full mb-8" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-foreground mb-6 max-w-4xl mx-auto font-bold tracking-tight"
        >
          Welcome to the <span className="bg-primary/20 text-primary px-3 py-1 rounded-xl">Tech Universe</span>
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Pioneering the future of African technology innovation through enterprise excellence,
          elite talent networks, and revolutionary digital ecosystems.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <Button
            size="lg"
            className="h-16 px-10 text-lg bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30 font-black group"
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            EXPLORE UNIVERSE <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-16 px-10 text-lg border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 active:scale-95 font-bold backdrop-blur-sm"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            OUR LEGACY
          </Button>
        </motion.div>
        
        {/* Animated Badge Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-xs font-black uppercase tracking-widest text-primary shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Unified African Tech Architecture
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto p-8 rounded-[2rem] bg-background/50 backdrop-blur-2xl border border-primary/15 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
          <div className="text-center group cursor-pointer">
            <motion.div whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2">70+</motion.div>
            <div className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest">Expert Developers</div>
          </div>
          <div className="text-center group cursor-pointer">
            <motion.div whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2">5</motion.div>
            <div className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest">Ecosystem Hubs</div>
          </div>
          <div className="text-center group cursor-pointer">
            <motion.div whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2">2020</motion.div>
            <div className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest">Founded</div>
          </div>
          <div className="text-center group cursor-pointer">
            <motion.div whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2">100%</motion.div>
            <div className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest">Quality Guarantee</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements with individual animations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden lg:block opacity-20"
      >
        <Code className="w-16 h-16 text-primary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-20 hidden lg:block opacity-20"
      >
        <Users className="w-12 h-12 text-accent" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 hidden lg:block"
      >
        <Rocket className="w-20 h-20 text-primary" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-1/4 hidden lg:block opacity-10"
      >
        <Globe className="w-32 h-32 text-accent" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Discover More</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
