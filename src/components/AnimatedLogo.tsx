import { motion } from "framer-motion";
import elVerseLogo from "@/assets/el-verse-logo-new.png";

interface AnimatedLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const AnimatedLogo = ({ className = "", size = "md" }: AnimatedLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-32 h-32 md:w-40 md:h-40",
    xl: "w-48 h-48 md:w-64 md:h-64",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={`relative group ${className}`}
    >
      {/* Animated Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-primary/30 blur-2xl rounded-full"
      />

      {/* Floating Animation */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <motion.img
          src={elVerseLogo}
          alt="EL VERSE Logo"
          className={`${sizeClasses[size]} object-contain`}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            filter: "brightness(1.2) drop-shadow(0 0 15px rgba(var(--primary), 0.5))"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      {/* Orbiting particles or ring effect */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-20%] border border-primary/10 rounded-full pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full blur-[1px]" />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;
