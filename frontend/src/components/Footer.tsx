
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary">
            Abhay Kumar
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Full-stack developer specializing in problem-solving, competitive programming, data structures, algorithms, and scalable database solutions with MySQL and MongoDB.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/BismarckSVBP" 
              aria-label="GitHub" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhay-kumar-4aa26b282/" 
              aria-label="LinkedIn" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            {/* <a 
              href="#" 
              aria-label="Twitter" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a> */}
            <a 
              href="mailto:bismarcksvbp@example.com" 
              aria-label="Email" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Abhay's Portfolio. All rights reserved.
          </p>
          
          {/* <div className="mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
