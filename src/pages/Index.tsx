import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingSupport from "@/components/FloatingSupport";
import AnimatedBackground from "@/components/AnimatedBackground";
import AnnouncementPopup from "@/components/AnnouncementPopup";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <AnimatedBackground />
      <AnnouncementPopup />

      <div className="relative z-10">
        <Navigation />

        <main>
          <Hero />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Services />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <About />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </main>

        <Footer />
        <FloatingSupport />
      </div>
    </div>
  );
};

export default Index;
