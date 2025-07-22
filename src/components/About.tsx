import { Code, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-8">
              I'm a passionate Frontend Developer with a deep love for creating beautiful, functional, and user-friendly web experiences. My journey in web development has been driven by curiosity, creativity, and a constant desire to learn and grow.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              As I prepare for the next step in my career, I'm excited to bring my skills, enthusiasm, and fresh perspective to a dynamic development team. I believe in writing clean, maintainable code and creating interfaces that not only look great but provide exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-muted-foreground">
                I write maintainable, efficient code following best practices and modern standards.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                Every project is an opportunity to create something amazing and meaningful.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Goal-Oriented</h3>
              <p className="text-muted-foreground">
                I focus on delivering results that exceed expectations and drive business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;