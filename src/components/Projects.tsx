import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Beaker, Wind, Plane } from "lucide-react";

const projects = [
  {
    title: "Tensegrity Vibration-Isolating ADAS Sensor Test Bench",
    description: "Designed and validated an innovative tensegrity-based vibration isolation system for automotive sensor testing using FEA and transient analysis.",
    icon: Wrench,
    technologies: ["ANSYS", "FEA", "Transient Analysis", "Experimental Validation", "SolidWorks"],
    highlights: [
      "Performed finite element analysis to optimize structural performance",
      "Conducted transient vibration analysis for dynamic response characterization",
      "Validated computational models through rigorous experimental testing"
    ]
  },
  {
    title: "Coca-Cola Equipment R&D Projects",
    description: "Led multiple R&D initiatives improving beverage dispenser reliability, solubility testing protocols, and valve actuation systems.",
    icon: Beaker,
    technologies: ["Reliability Testing", "Data Analysis", "Mechanical Design", "Testing Protocols"],
    highlights: [
      "Designed and executed reliability testing for beverage dispenser components",
      "Developed standardized solubility testing procedures",
      "Engineered improved valve actuation systems for consistent performance"
    ]
  },
  {
    title: "HyTech Racing Aerodynamics Package",
    description: "Developed complete aerodynamics package for Formula SAE electric vehicle including CFD analysis, manufacturing, and composite layups.",
    icon: Wind,
    technologies: ["CFD", "ANSYS Fluent", "Composite Manufacturing", "SolidWorks", "Wind Tunnel Testing"],
    highlights: [
      "Performed computational fluid dynamics analysis for optimal downforce",
      "Manufactured carbon fiber composite components using vacuum bagging",
      "Integrated aerodynamic package with vehicle chassis and suspension"
    ]
  },
  {
    title: "Autonomous Drone Platform",
    description: "Built autonomous drone system integrating PX4 Autopilot, QGroundControl, and custom hardware for navigation and mission planning.",
    icon: Plane,
    technologies: ["PX4 Autopilot", "QGroundControl", "Embedded Systems", "Python", "Hardware Integration"],
    highlights: [
      "Configured PX4 flight controller for autonomous navigation",
      "Implemented mission planning software using QGroundControl",
      "Integrated sensors and actuators for complete autonomous operation"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-foreground/80 flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="bg-muted hover:bg-primary/20 text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
