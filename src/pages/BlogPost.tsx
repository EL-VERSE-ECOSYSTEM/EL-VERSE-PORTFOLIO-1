import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedBackground from "@/components/AnimatedBackground";
import { blogPosts } from "@/data/blogPosts";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Tag, Check, ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center p-4">
        <SEO title="Article Not Found | EL VERSE" description="Article not found." />
        <h1 className="text-3xl font-black mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">The story you're looking for doesn't exist or has moved.</p>
        <Button onClick={() => navigate("/blog")} className="bg-primary text-primary-foreground">
          Back to Blog
        </Button>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Article link copied to clipboard!");
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Helper to render markdown-like content cleanly
  const renderFormattedContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];

    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = (key: number) => {
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const bodyRows = tableRows.slice(2); // Skip separator row
        elements.push(
          <div key={`table-${key}`} className="my-8 overflow-x-auto rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary/10 border-b border-primary/20 text-xs font-black uppercase tracking-wider text-primary">
                <tr>
                  {headers.map((h, i) => (
                    <th key={i} className="p-4">{h.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-primary/5 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-4 text-muted-foreground font-medium">
                        {cell.trim().startsWith("**") && cell.trim().endsWith("**") ? (
                          <strong className="text-foreground">{cell.trim().slice(2, -2)}</strong>
                        ) : (
                          cell.trim()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
      inTable = false;
    };

    lines.forEach((rawLine, idx) => {
      const line = rawLine.trim();

      if (line.startsWith("|") && line.endsWith("|")) {
        inTable = true;
        const cols = line.split("|").slice(1, -1);
        tableRows.push(cols);
        return;
      } else if (inTable) {
        flushTable(idx);
      }

      if (line === "---") {
        elements.push(<hr key={idx} className="my-8 border-border/40" />);
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={idx} className="text-2xl font-bold font-display uppercase tracking-tight text-foreground mt-8 mb-4">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("#### ")) {
        elements.push(
          <h4 key={idx} className="text-lg font-bold font-display uppercase tracking-tight text-primary mt-6 mb-2">
            {line.replace("#### ", "")}
          </h4>
        );
      } else if (line.startsWith("- ")) {
        const itemText = line.replace("- ", "");
        elements.push(
          <li key={idx} className="ml-4 list-disc text-muted-foreground leading-relaxed text-base my-1">
            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(itemText) }} />
          </li>
        );
      } else if (line.length > 0) {
        elements.push(
          <p key={idx} className="text-muted-foreground leading-relaxed text-base md:text-lg my-4">
            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line) }} />
          </p>
        );
      }
    });

    if (inTable) {
      flushTable(lines.length);
    }

    return elements;
  };

  const formatInlineMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-foreground/90 italic">$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline font-medium hover:text-primary/80 transition-colors">$1</a>');
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-sky-400 origin-left z-50 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />

      <SEO
        title={`${post.title} | EL VERSE Blog`}
        description={post.summary}
        canonicalUrl={`https://el-verse-connect.vercel.app/blog/${post.slug}`}
      />
      <AnimatedBackground />

      {/* Floating scroll to top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all shadow-xl hover:shadow-primary/30"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      <div className="relative z-10">
        <Navigation />

        <main className="container mx-auto px-4 pt-32 pb-24 max-w-4xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span>·</span>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-foreground leading-[1.15]">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              {post.subtitle}
            </p>

            {/* Author info & Share */}
            <div className="p-4 rounded-2xl bg-card/40 border border-primary/10 flex items-center justify-between">
              <div>
                <p className="font-bold text-sm text-foreground">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={handleShare}
                className="gap-2 border-primary/20 hover:bg-primary/10 text-xs font-bold uppercase tracking-wider"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Share"}
              </Button>
            </div>
          </motion.div>

          {/* Featured Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 rounded-3xl overflow-hidden border border-primary/20 bg-black/50 shadow-2xl p-4 md:p-8 flex items-center justify-center"
          >
            <img
              src={post.featuredImage}
              alt={post.title}
              className="max-h-[460px] w-auto object-contain rounded-2xl"
            />
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 space-y-4"
          >
            {renderFormattedContent(post.content)}
          </motion.div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border/40">
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-primary" /> Story Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-primary/15 text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card/60 to-accent/10 border border-primary/20 backdrop-blur-2xl text-center space-y-4">
            <h3 className="text-2xl font-black font-display uppercase tracking-tight">
              Ready to Experience the EL VERSE Advantage?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Partner with West Africa's leading technology ecosystem for bespoke software engineering, world-class developer bootcamps, and global talent.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.open("https://wa.link/4cwtqf", "_blank")}
                className="bg-gradient-primary text-white font-black uppercase tracking-wider text-xs px-6 py-5 rounded-xl shadow-lg shadow-primary/25"
              >
                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link to="/blog">
                <Button variant="outline" className="border-primary/20 font-black uppercase tracking-wider text-xs px-6 py-5 rounded-xl">
                  More Stories
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;
