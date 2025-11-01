import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "R&D Engineering Intern",
    company: "Coca-Cola Equipment",
    period: "Summer 2024",
    responsibilities: [
      "Designed and executed reliability testing protocols for beverage dispenser components",
      "Developed standardized solubility testing procedures for new formulations",
      "Engineered valve actuation systems improving dispensing consistency by 25%",
      "Collaborated with cross-functional teams on product development initiatives"
    ]
  },
  {
    title: "Research Assistant",
    company: "Georgia Tech Manufacturing Institute",
    period: "2023 - 2024",
    responsibilities: [
      "Designed tensegrity-based vibration isolation system for ADAS sensor testing",
      "Performed finite element analysis and transient simulations in ANSYS",
      "Conducted experimental validation of computational models",
      "Published findings on novel vibration isolation methodologies"
    ]
  },
  {
    title: "Aerodynamics Engineer",
    company: "HyTech Racing (Formula SAE)",
    period: "2022 - Present",
    responsibilities: [
      "Developed complete aerodynamics package including front/rear wings and underbody",
      "Performed CFD analysis in ANSYS Fluent for downforce optimization",
      "Manufactured carbon fiber composite components using vacuum bagging techniques",
      "Integrated aerodynamic systems with chassis and suspension components"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-lg hover-lift border border-border/50"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-lg text-primary font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-foreground/80 flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
