const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg hover-lift">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I'm a Mechanical Engineering student at Georgia Institute of Technology with a passion 
              for solving complex engineering challenges through hands-on experimentation and rigorous analysis.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              My experience spans across <span className="text-primary font-semibold">robotics</span>, 
              <span className="text-primary font-semibold"> automation</span>, and 
              <span className="text-primary font-semibold"> R&D</span>, where I've developed expertise 
              in mechanical design, finite element analysis, computational fluid dynamics, and experimental validation.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              From designing vibration-isolating test benches to optimizing aerodynamic packages for 
              Formula SAE racing, I thrive on projects that bridge theoretical analysis with real-world 
              implementation. I'm particularly interested in roles that involve product development, 
              testing, and bringing innovative engineering solutions from concept to production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
