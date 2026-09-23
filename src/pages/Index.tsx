import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import Services from "@/components/Services";
import EcosystemVisualizer from "@/components/EcosystemVisualizer";
import LeadWizard from "@/components/LeadWizard";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
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
      <SEO
        title="EL VERSE ECOSYSTEM - Premier Tech Universe in West Africa | Software Development & Talent"
        description="EL VERSE ECOSYSTEM 🚀 Premier Tech Universe in West Africa. From EL CODERS custom software & AI to ELITES Academy, EL SPACE Freelance, EL ACCESS Talent & NEXEL Labs."
        canonicalUrl="https://el-verse-connect.vercel.app/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EL VERSE ECOSYSTEM",
          "url": "https://el-verse-connect.vercel.app/",
          "logo": "https://el-verse-connect.vercel.app/og-image.png",
          "sameAs": [
            "https://twitter.com/ElVerse27"
          ],
          "description": "Premier tech ecosystem in West Africa providing bespoke software engineering, tech academy bootcamps, and global talent placement."
        }}
      />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Services />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <EcosystemVisualizer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <LeadWizard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <About />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Testimonials />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <FAQ />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
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
