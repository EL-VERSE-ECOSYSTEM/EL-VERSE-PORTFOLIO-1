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
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
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
                  href="https://elcoders-portfolio-web.vercel.app/"
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
                <a href="#" className="hover:text-primary transition-colors">NEXEL (2026)</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">EL SPACE (2026)</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">ELITES (ACTIVE)</a>
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
          <div>
            <h4 className="font-semibold mb-4">In-App Message Request</h4>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit">Send Message</Button>
              </div>
            </form>
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
