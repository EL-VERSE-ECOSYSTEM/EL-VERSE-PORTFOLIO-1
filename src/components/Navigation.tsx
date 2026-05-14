import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import elVerseLogo from "@/assets/el-verse-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={elVerseLogo} alt="EL VERSE" className="w-8 h-8" />
            <span className="text-xl font-bold font-brand">EL VERSE</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="group relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium capitalize"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md shadow-primary/20"
              onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
            >
              <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Get Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-64 opacity-100 py-4 border-t border-border' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-4 px-2">
            {['services', 'about', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left text-muted-foreground hover:text-primary transition-all duration-300 font-medium capitalize py-1 px-2 rounded-md hover:bg-primary/5"
              >
                {item}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-gradient-primary hover:opacity-90 w-fit transition-all duration-300 transform hover:scale-[1.02]"
              onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
