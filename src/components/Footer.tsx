import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Heart, Code2 } from "lucide-react";
import elVerseLogo from "@/assets/el-verse-logo.png";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import React from "react";
import { toast } from "sonner";

import { motion } from "framer-motion";

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

    // Construct the mailto link as a fallback
    const subject = encodeURIComponent(`New App Message Request from ${formState.fullName}`);
    const body = encodeURIComponent(
      `Full Name: ${formState.fullName}\n` +
      `Email: ${formState.email}\n` +
      `Phone: ${formState.phoneNumber}\n\n` +
      `Message:\n${formState.message}`
    );
    const mailtoUrl = `mailto:elcoderssoftwares12@gmail.com?subject=${subject}&body=${body}`;

    try {
      // Attempt to send via API first
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
        // If API fails, fallback to mailto
        window.location.href = mailtoUrl;
        setIsSent(true);
        toast.success("Opening your email client...");
        setFormState({ fullName: "", email: "", phoneNumber: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
      }
    } catch (error) {
      console.error(error);
      // Fallback to mailto on network error
      window.location.href = mailtoUrl;
      setIsSent(true);
      toast.success("Opening your email client...");
      setFormState({ fullName: "", email: "", phoneNumber: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-background/50 backdrop-blur-xl border-t border-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-500">
                <img src={elVerseLogo} alt="EL VERSE" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-3xl font-black tracking-tighter font-brand">EL VERSE</span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed font-medium">
              Architecting the digital future of Africa. We bridge global innovation with local excellence.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Software", "Training", "Innovation", "Talent"].map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/5 hover:bg-primary/10 text-[10px] font-bold uppercase tracking-widest border-primary/10 px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-foreground/70">Our Universe</h4>
            <ul className="space-y-4 text-sm font-bold">
              {[
                { name: "ELCODERS", url: "https://elcoders-connect.vercel.app/" },
                { name: "EL ACCESS", url: "https://el-access.vercel.app/" },
                { name: "ELITES", url: "https://elites-connect.vercel.app/" },
                { name: "EL SPACE", url: "https://el-space.vercel.app/" },
                { name: "NEXEL", url: "#", note: "Aug 2026" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {link.name} {link.note && <span className="text-[10px] opacity-50">({link.note})</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-foreground/70">Connect</h4>
            <ul className="space-y-4 text-sm font-bold">
              {[
                { label: "WhatsApp", val: "+234 806 190 8715", href: "https://wa.link/4cwtqf" },
                { label: "Email", val: "support@elverse.com", href: "mailto:elcoderssoftwares12@gmail.com" },
                { label: "Twitter", val: "@ElVerse27", href: "https://twitter.com/ElVerse27" },
                { label: "Instagram", val: "el_verse1", href: "https://instagram.com/el_verse1" }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors flex flex-col">
                    <span className="text-[10px] uppercase text-muted-foreground/50 tracking-widest">{item.label}</span>
                    <span>{item.val}</span>
                  </a>
                </li>
              ))}
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
