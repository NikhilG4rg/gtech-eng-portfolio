import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background section-padding">
      <div className="container-custom text-center animate-fade-in-up">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
            Nikhil Garg
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-6 rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Mechanical Engineering Student
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Georgia Institute of Technology
        </p>
        
        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about hands-on engineering, R&D, and creating innovative solutions 
          in robotics and automation. Bringing ideas from concept to reality through 
          design, analysis, and rigorous testing.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center mb-12">
          <a 
            href="https://www.linkedin.com/in/nikhilgarg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/nikhilgarg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="mailto:nikhil@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
