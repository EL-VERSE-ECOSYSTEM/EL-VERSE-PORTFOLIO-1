import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Rocket, Globe, GraduationCap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import elVerseLogo from "@/assets/el-verse-logo-new.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-8">
          <img src={elVerseLogo} alt="EL VERSE" className="w-24 h-24 mr-6" />
          <h1 className="text-6xl md:text-8xl font-black font-display bg-gradient-primary bg-clip-text text-transparent tracking-wider">
            EL VERSE
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto font-medium">
          Welcome to the <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">Tech Universe</span> - 
          Your premier gateway to cutting-edge technology solutions across West Africa
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          From enterprise software development and tech training to revolutionary social platforms and talent networks - 
          we're pioneering the future of African technology innovation.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/20">
            Explore Our Universe <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Meet Our Team
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">70+</div>
            <div className="text-sm text-muted-foreground">Tech Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Tech Divisions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2020</div>
            <div className="text-sm text-muted-foreground">Innovation Year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Code className="w-8 h-8 text-primary/30" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000">
        <Users className="w-6 h-6 text-accent/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
        <Rocket className="w-7 h-7 text-primary/40" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse delay-500">
        <Globe className="w-8 h-8 text-accent/30" />
      </div>
      <div className="absolute top-60 left-1/4 animate-pulse delay-1500">
        <GraduationCap className="w-6 h-6 text-primary/30" />
      </div>
    </section>
  );
};

export default Hero;
