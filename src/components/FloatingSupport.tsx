import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingSupport = () => {
  const openWhatsApp = () => {
    window.open("https://wa.link/4cwtqf", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="bg-card/90 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-2xl mb-2 max-w-[200px] hidden md:block">
        <p className="text-sm font-medium">Need help or a consultation? Chat with us!</p>
      </div>
      <Button
        onClick={openWhatsApp}
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="h-8 w-8 text-white group-hover:animate-pulse" />
      </Button>
    </div>
  );
};

export default FloatingSupport;
