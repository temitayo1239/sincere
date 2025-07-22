import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Rock Paper Scissors Game",
      description: "An interactive Rock Paper Scissors game built with vanilla JavaScript, featuring smooth animations, score tracking, and responsive design. Includes sound effects and elegant UI transitions.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Color Flipper App",
      description: "A dynamic color generator application that creates random hex colors with smooth transitions. Features copy-to-clipboard functionality and color history tracking for designers and developers.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{project.id}</span>
                    </div>
                    <p className="text-muted-foreground">Project Preview</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;