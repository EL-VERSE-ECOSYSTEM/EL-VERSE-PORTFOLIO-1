import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Heart, Code2 } from "lucide-react";
import elVerseLogo from "@/assets/el-verse-logo.png";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import React from "react";
import { toast } from "sonner";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [formState, setFormState] = React.useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Logic to send to elcoderssoftwares12@gmail.com
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          to: "elcoderssoftwares12@gmail.com",
          subject: `New App Message Request from ${formState.fullName}`
        }),
      });

      if (response.ok) {
        setIsSent(true);
        toast.success("Message sent successfully!");
        setFormState({ fullName: "", email: "", phoneNumber: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={elVerseLogo} alt="EL VERSE" className="w-10 h-10" />
              <span className="text-2xl font-bold font-brand">EL VERSE</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Building the future of African technology through comprehensive solutions,
              training, and innovation. Your gateway to the tech universe.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Software Development</Badge>
              <Badge variant="secondary">Tech Training</Badge>
              <Badge variant="secondary">Social Innovation</Badge>
              <Badge variant="secondary">Talent Connection</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Our Universe</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://elcoders-devs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  ELCODERS
                </a>
              </li>
              <li>
                <a
                  href="https://el-access-2-registration.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  EL ACCESS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">NEXEL (Aug 2026)</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">EL SPACE (July 2026)</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">ELITES (June 2026)</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="https://wa.link/4cwtqf" className="hover:text-primary transition-colors">
                  WhatsApp(NGN): +234 806 190 8715
                </a>
              </li>
              <li>
                <a href="mailto:elcoderssoftwares12@gmail.com" className="hover:text-primary transition-colors">
                  elcoderssoftwares12@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ElVerse27"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter: @ElVerse27
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/el_verse1"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram: el_verse1
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative overflow-hidden p-6 rounded-2xl bg-card/50 border border-primary/20 shadow-xl transition-all duration-500 hover:shadow-primary/10">
            <h4 className="font-bold text-xl mb-6 bg-gradient-primary bg-clip-text text-transparent">
              App Message Request
            </h4>

            {isSent ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-8 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center text-success">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold text-success text-center">Request Sent Successfully!</p>
                <p className="text-xs text-muted-foreground text-center">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-500">
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formState.fullName}
                  onChange={handleInputChange}
                  className="bg-background/50 border-primary/20 focus:border-primary transition-all duration-300"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="bg-background/50 border-primary/20 focus:border-primary transition-all duration-300"
                  required
                />
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formState.phoneNumber}
                  onChange={handleInputChange}
                  className="bg-background/50 border-primary/20 focus:border-primary transition-all duration-300"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Project Idea or Message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 min-h-[100px]"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md shadow-primary/20"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : "Send Request"}
                </Button>
              </form>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} EL VERSE. All rights reserved. Benin Republic, Côte d'Ivoire, EU & Remote.
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and
            <Code2 className="w-4 h-4 text-primary" /> by ELCODERS, The Development Arm, Sub Startup of EL VERSE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
