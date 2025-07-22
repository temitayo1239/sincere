import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and hands-on experience in frontend development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 relative">
            {/* Timeline Indicator */}
            <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold gradient-text">
                    New Horizons ICT Resource Center
                  </h3>
                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Frontend Intern</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Jan 2025 – April 2025</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Remote</span>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold mb-4">Key Responsibilities & Achievements</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Built multiple real-world projects using modern frontend technologies including HTML5, CSS3, JavaScript, and responsive design principles
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Collaborated effectively with the frontend development team on various client projects and internal tools
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Implemented responsive web designs ensuring optimal user experience across desktop, tablet, and mobile devices
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Gained hands-on experience with version control (Git), code reviews, and agile development practices
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Developed strong problem-solving skills while debugging and optimizing frontend applications for performance
                  </li>
                </ul>

                {/* Technologies Used */}
                <div className="mt-6">
                  <h5 className="font-semibold mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", 
                      "Git", "Responsive Design", "Cross-browser Testing"
                    ].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="glass-card p-6 rounded-xl inline-block">
              <h4 className="text-lg font-semibold mb-2">Ready for the Next Challenge</h4>
              <p className="text-muted-foreground">
                Looking to bring my skills and fresh perspective to a dynamic development team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;