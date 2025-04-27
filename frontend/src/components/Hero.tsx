
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="flex items-center relative bg-background py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/70 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span>Backend Developer</span>
            <span className="block mt-2 gradient-text">Coder</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Problem-solving full-stack developer skilled in competitive programming, data structures, algorithms, and database management with MySQL and MongoDB
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
          
          {/* <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="text-muted-foreground mb-1">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                <div className="p-2 bg-card rounded-md">MongoDB</div>
                <div className="p-2 bg-card rounded-md">Express</div>
                <div className="p-2 bg-card rounded-md">React</div>
                <div className="p-2 bg-card rounded-md">Node.js</div>
              </div>
            </div>
          </div> */}
        </div>
        
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/70 animate-bounce">
          <a href="#about" className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

