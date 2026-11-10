import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedBackground from "@/components/AnimatedBackground";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, Tag, BookOpen, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => post.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <SEO
        title="Blog & Insights | EL VERSE ECOSYSTEM"
        description="Explore in-depth articles, case studies, product updates, and thought leadership from EL VERSE ECOSYSTEM, EL Learners, ELITES, and tech innovators across Africa."
        canonicalUrl="https://el-verse-connect.vercel.app/blog"
      />
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation />

        <main className="container mx-auto px-4 pt-32 pb-24 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> The EL VERSE Chronicle
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight">
              Stories, Insights & <span className="bg-gradient-primary bg-clip-text text-transparent">Innovations</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Discover how EL VERSE ECOSYSTEM is reshaping technology education, computer-based testing, and developer mentorship throughout Africa and beyond.
            </p>

            {/* Search bar */}
            <div className="relative max-w-md mx-auto pt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles, topics, stacks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-12 bg-card/60 backdrop-blur-xl border-primary/15 rounded-2xl focus:border-primary/40 transition-all text-sm"
              />
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <Badge
                variant={selectedTag === null ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedTag === null ? "bg-primary text-primary-foreground" : "hover:border-primary/40"
                }`}
                onClick={() => setSelectedTag(null)}
              >
                All Topics
              </Badge>
              {allTags.slice(0, 8).map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedTag === tag ? "bg-primary text-primary-foreground" : "hover:border-primary/40"
                  }`}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative flex flex-col rounded-3xl bg-card/40 backdrop-blur-2xl border border-primary/10 overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
              >
                {/* Image */}
                <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden bg-black/40">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-background/80 backdrop-blur-md text-primary border border-primary/20">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" /> {post.readTime}
                      </span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <div className="text-xs">
                      <span className="font-bold text-foreground block">{post.author.name}</span>
                      <span className="text-muted-foreground">{post.author.role}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary group-hover:translate-x-1 transition-transform"
                    >
                      Read Story <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 space-y-3">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto opacity-50" />
              <h3 className="text-lg font-bold">No articles found</h3>
              <p className="text-sm text-muted-foreground">Try clearing your search query or filter tags.</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Blog;
