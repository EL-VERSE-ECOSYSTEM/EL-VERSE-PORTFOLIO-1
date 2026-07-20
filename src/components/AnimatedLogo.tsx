import { motion } from "framer-motion";
import elVerseLogo from "@/assets/el-verse-logo-new.png";

interface AnimatedLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const AnimatedLogo = ({ className = "", size = "md" }: AnimatedLogoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-36 h-36 md:w-44 md:h-44",
    xl: "w-52 h-52 md:w-72 md:h-72",
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
      {/* Outer Glowing Dynamic Ring */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-secondary blur-md rounded-full p-[3px] shadow-[0_0_30px_rgba(var(--primary),0.3)]"
      />

      {/* Floating & Perfectly Round Inner Container */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 bg-background rounded-full p-1.5 border border-primary/20 aspect-square flex items-center justify-center overflow-hidden"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div className="rounded-full overflow-hidden bg-background w-full h-full flex items-center justify-center">
          <motion.img
            src={elVerseLogo}
            alt="EL VERSE Logo"
            className={`${sizeClasses[size]} rounded-full object-cover aspect-square`}
            whileHover={{
              scale: 1.15,
              rotate: 8,
              filter: "brightness(1.1) contrast(1.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </motion.div>

      {/* Futuristic Orbiting Dot Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-15%] border border-dashed border-primary/20 rounded-full pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent),0.8)]" />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;
