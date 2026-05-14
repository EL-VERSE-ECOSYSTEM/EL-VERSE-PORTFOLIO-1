import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Zap, 
  Globe,
  TrendingUp,
  Users
} from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <Badge className="mb-6 bg-primary/10 text-primary">About EL VERSE</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Building the Future of 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> African Tech</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">EL VERSE</strong> is more than a tech company - 
                we're a comprehensive technology universe transforming how businesses and individuals 
                interact with technology across West Africa and beyond.
              </p>
              <p>
                Founded and led by <strong className="text-foreground">Supreme Elyon</strong>, 
                our ecosystem encompasses software development, talent cultivation, 
                innovative social platforms, and comprehensive tech education.
              </p>
              <p>
                With <strong className="text-foreground">70+ dedicated professionals</strong> and
                five distinct tech divisions, we're positioned to be your complete technology partner, 
                whether you're a startup, enterprise, or individual looking to thrive in the digital age.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={teamPhoto} 
              alt="EL VERSE Team" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
          </div>
        </div>
        
        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to cutting-edge technology solutions across Africa, 
                empowering businesses and individuals to achieve digital transformation and innovation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Africa's leading technology ecosystem, where innovation meets opportunity, 
                creating sustainable digital solutions that drive economic growth and social progress.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excellence, Innovation, Integrity, Community Impact, and Continuous Learning drive 
                everything we do as we build technology solutions that matter.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Key Achievements & Stats */}
        <div className="bg-card p-8 md:p-12 rounded-2xl">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">EL VERSE</span>?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2">100%</h4>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-2xl font-bold text-accent mb-2">70+</h4>
              <p className="text-muted-foreground">Tech Professionals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-success" />
              </div>
              <h4 className="text-2xl font-bold text-success mb-2">5</h4>
              <p className="text-muted-foreground">Tech Divisions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-warning" />
              </div>
              <h4 className="text-2xl font-bold text-warning mb-2">3+</h4>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>
        
        {/* Leadership */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Leadership</h3>
          <Card className="max-w-md mx-auto border-border/50">
            <CardContent className="p-8">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">SE</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Supreme Elyon</h4>
              <p className="text-primary font-semibold mb-4">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                Visionary leader driving technological innovation across West Africa, 
                with a passion for creating solutions that empower communities and businesses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
