import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import elVerseLogo from "@/assets/el-verse-logo-new.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
              <img src={elVerseLogo} alt="EL VERSE" className="w-10 h-10 relative z-10" />
            </div>
            <span className="text-2xl font-black font-brand tracking-tighter bg-gradient-primary bg-clip-text text-transparent">
              EL VERSE
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['services', 'about', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item)}
                className="group relative text-muted-foreground hover:text-primary transition-all duration-300 font-bold capitalize text-sm tracking-widest"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="sm"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 font-bold"
                onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
              >
                <Phone className="w-4 h-4 mr-2" />
                GET QUOTE
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-2xl mt-4 rounded-2xl border border-primary/10 shadow-2xl shadow-primary/5"
            >
              <div className="flex flex-col space-y-4 p-6">
                {['services', 'about', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-lg font-bold text-muted-foreground hover:text-primary transition-all duration-300 capitalize py-2 border-b border-primary/5"
                  >
                    {item}
                  </button>
                ))}
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 w-full transition-all duration-300 font-bold shadow-lg shadow-primary/20"
                  onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  GET QUOTE
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
