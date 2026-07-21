import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, Sparkles, BookOpen, Cpu, Network, Home, Building2, Atom } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import AnimatedLogo from "./AnimatedLogo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      // Wait for navigation and layout mounting
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToPage = (path: string) => {
    setIsOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const arms = [
    { name: "ELITES Academy", path: "/elites", icon: BookOpen, desc: "Onboarding & mentorship", color: "text-green-400" },
    { name: "EL CODERS Software", path: "/elcoders", icon: Cpu, desc: "Bespoke development", color: "text-blue-400" },
    { name: "EL SPACE Freelance", path: "/elspace", icon: Network, desc: "Global matchmaking", color: "text-orange-400" },
    { name: "EL ACCESS Talent", path: "/elaccess", icon: Building2, desc: "Placement & contracts", color: "text-purple-400" },
    { name: "NEXEL AI Research", path: "/nexel", icon: Atom, desc: "Advanced AI R&D", color: "text-rose-400" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-2xl border-b border-primary/10 py-2.5 shadow-2xl shadow-primary/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigateToPage("/")}
          >
            <AnimatedLogo size="sm" />
            <span className="text-xl md:text-2xl font-black tracking-tighter bg-gradient-primary bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-300 uppercase font-display">
              EL VERSE
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigateToPage("/")}
              className={`group relative transition-all duration-300 font-bold uppercase text-xs tracking-widest flex items-center gap-1.5 ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </button>

            {/* Dropdown for Ecosystem Arms */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 font-bold uppercase text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors focus:outline-none">
                Ecosystem Hubs <ChevronDown className="w-3.5 h-3.5 text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background/95 backdrop-blur-xl border border-primary/10 rounded-2xl p-2 shadow-2xl z-[60]">
                {arms.map((arm) => (
                  <DropdownMenuItem
                    key={arm.path}
                    onClick={() => navigateToPage(arm.path)}
                    className="flex items-start gap-3 p-3 rounded-xl cursor-pointer hover:bg-primary/5 transition-all group focus:bg-primary/5"
                  >
                    <div className={`p-2 bg-card border border-primary/10 rounded-lg shrink-0 ${arm.color}`}>
                      <arm.icon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black uppercase text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {arm.name}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-semibold">
                        {arm.desc}
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {['services', 'about', 'faq', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleNavClick(item)}
                className="group relative text-muted-foreground hover:text-primary transition-all duration-300 font-bold capitalize text-xs tracking-widest"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="sm"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 font-black text-xs uppercase tracking-wider py-5 px-5 rounded-xl text-white"
                onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                GET QUOTE
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 text-foreground relative z-50 rounded-xl bg-card border border-primary/5 hover:bg-primary/5"
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
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 md:hidden bg-background/98 backdrop-blur-3xl flex flex-col justify-center items-center"
            >
              <div className="flex flex-col space-y-6 p-6 text-center w-full max-w-sm">

                {/* Home shortcut */}
                <button
                  onClick={() => navigateToPage("/")}
                  className="text-2xl font-black text-foreground hover:text-primary transition-all duration-300 uppercase tracking-tighter"
                >
                  Home
                </button>

                {/* Subpage Links explicitly stated */}
                <div className="py-4 border-y border-primary/10 space-y-3 max-h-[40vh] overflow-y-auto">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">Ecosystem Hubs</p>
                  {arms.map((arm) => (
                    <button
                      key={arm.path}
                      onClick={() => navigateToPage(arm.path)}
                      className="block w-full text-sm font-black text-foreground hover:text-primary transition-colors uppercase tracking-widest"
                    >
                      {arm.name}
                    </button>
                  ))}
                </div>

                {['services', 'about', 'faq', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="text-xl font-black text-muted-foreground hover:text-foreground transition-all duration-300 capitalize tracking-tight"
                  >
                    {item}
                  </button>
                ))}

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-sm bg-gradient-primary hover:opacity-90 w-full transition-all duration-300 font-black uppercase tracking-widest text-white shadow-2xl shadow-primary/30 rounded-xl"
                    onClick={() => {
                      window.open("https://wa.link/4cwtqf", "_blank");
                      setIsOpen(false);
                    }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    GET QUOTE
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
