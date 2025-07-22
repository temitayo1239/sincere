import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
      ]
    },
    {
      title: "Design & Styling",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "CSS Animation", level: 80 },
      ]
    },
    {
      title: "Tools & Workflow",
      icon: Zap,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 75 },
        { name: "npm/yarn", level: 80 },
      ]
    },
    {
      title: "Mobile & Performance",
      icon: Smartphone,
      skills: [
        { name: "Mobile-First Design", level: 90 },
        { name: "Performance Optimization", level: 75 },
        { name: "Cross-Browser Testing", level: 85 },
        { name: "Accessibility", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's a breakdown of my technical skills and proficiency levels across different areas of frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "TypeScript", "Sass/SCSS", "Webpack", "Vite", "ESLint", "Prettier",
              "REST APIs", "JSON", "Local Storage", "Progressive Web Apps"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 glass-card rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;