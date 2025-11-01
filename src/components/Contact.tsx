import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl border-border/50">
            <CardContent className="p-8 md:p-12">
              <p className="text-center text-lg text-foreground/80 mb-8">
                I'm always open to discussing new opportunities, collaborations, 
                or engineering challenges. Feel free to reach out!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <a 
                  href="mailto:nikhil@gatech.edu"
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                >
                  <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center">nikhil@gatech.edu</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/nikhilgarg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                >
                  <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center">LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://github.com/nikhilgarg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                >
                  <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center">GitHub Profile</span>
                </a>
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
