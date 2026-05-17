import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

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
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <AnimatedLogo size="sm" />
            <span className="text-2xl font-black font-brand tracking-tighter bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              EL VERSE ECOSYSTEM
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
            className="md:hidden p-2 text-foreground relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-8 h-8" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-8 h-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 md:hidden bg-background/98 backdrop-blur-3xl flex flex-col justify-center items-center"
            >
              <div className="flex flex-col space-y-8 p-6 text-center">
                {['services', 'about', 'contact'].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => scrollToSection(item)}
                    className="text-4xl font-black text-foreground hover:text-primary transition-all duration-300 capitalize tracking-tighter"
                  >
                    {item}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="h-16 px-10 text-xl bg-gradient-primary hover:opacity-90 w-full transition-all duration-300 font-black shadow-2xl shadow-primary/30"
                    onClick={() => {
                      window.open("https://wa.link/4cwtqf", "_blank");
                      setIsOpen(false);
                    }}
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    GET QUOTE
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
