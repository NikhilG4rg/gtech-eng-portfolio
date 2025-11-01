import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Hammer, LineChart } from "lucide-react";

const skillCategories = [
  {
    title: "CAD & Design",
    icon: Hammer,
    skills: ["SolidWorks", "CATIA", "AutoCAD", "Fusion 360", "Mechanical Design", "GD&T"]
  },
  {
    title: "Analysis & Simulation",
    icon: LineChart,
    skills: ["ANSYS (FEA, CFD)", "MATLAB", "Simulink", "Vibration Analysis", "Transient Analysis", "Thermal Analysis"]
  },
  {
    title: "Manufacturing & Prototyping",
    icon: Cpu,
    skills: ["Rapid Prototyping", "3D Printing", "CNC Machining", "Composite Layups", "Vacuum Bagging", "Sheet Metal"]
  },
  {
    title: "Programming & Tools",
    icon: Code,
    skills: ["Python", "MATLAB", "C++", "LabVIEW", "Git", "Linux"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-lg hover-lift border border-border/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx}
                    variant="secondary"
                    className="bg-muted hover:bg-primary/20 text-foreground px-3 py-1.5 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in engineering analysis, mechanical design, and bringing concepts from 
            initial design through prototyping to final testing and validation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
