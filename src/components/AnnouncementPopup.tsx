import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Rocket, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const AnnouncementPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenAnnouncement = localStorage.getItem("elites-launch-announcement");
    if (!hasSeenAnnouncement) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("elites-launch-announcement", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) handleClose();
    }}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-2xl border-primary/20 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5 pointer-events-none" />

        <DialogHeader className="relative z-10">
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="w-20 h-20 rounded-3xl bg-gradient-primary p-0.5"
            >
              <div className="w-full h-full bg-card rounded-[inherit] flex items-center justify-center">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 font-black uppercase tracking-widest text-xs">
              New Launch
            </Badge>
          </div>

          <DialogTitle className="text-3xl font-black text-center tracking-tighter uppercase mb-2">
            Successful Launch of <span className="bg-gradient-primary bg-clip-text text-transparent">ELITES</span>
          </DialogTitle>

          <DialogDescription className="text-center text-lg font-medium text-muted-foreground leading-relaxed">
            BY EL VERSE ECOSYSTEM
          </DialogDescription>
        </DialogHeader>

        <div className="relative z-10 mt-6 space-y-4">
          <p className="text-center text-muted-foreground font-medium">
            Join West Africa's premier tech academy and transform your career today.
          </p>

          <div className="flex items-center justify-center gap-2 text-primary font-bold">
            <PartyPopper className="w-5 h-5" />
            <span>Registration is now open!</span>
            <PartyPopper className="w-5 h-5" />
          </div>

          <button
            onClick={() => {
              window.open("https://elites-onboarding.vercel.app/", "_blank");
              handleClose();
            }}
            className="w-full h-14 bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-98 shadow-xl shadow-primary/20 font-black text-white rounded-xl uppercase tracking-widest text-sm"
          >
            Visit ELITES Academy
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementPopup;
