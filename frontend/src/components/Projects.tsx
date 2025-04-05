import { Github, ExternalLink } from "lucide-react";

// Mock data - this would come from the backend in the real implementation
const projects = [
  {
    id: 1,
    title: "Train Tracker Website",
    description:
      "Implemented real-time train tracking using live location APIs, a feedback form, and mock interfaces for PNR status and coach layout. Designed full frontend/backend flow for future API integration.",
    image: "train-tracker.png",
    tags: ["JavaScript", "TypeScript", "NodeJS", "React"],
    githubUrl:
      "https://github.com/BismarckSVBP/Train-Running-Status-and-PNR-Checker-FullStack-Project-in-MERN", // Replace with actual link
    liveUrl: "https://train-tracker-ashy.vercel.app/", // Replace with actual link
  },
  {
    id: 2,
    title: "Authentication through OTP Verification",
    description:
      "Secure signup and login system with email OTP verification, password reset functionality, and protected routes. Includes a responsive contact form with backend integration.",
    image: "authentication.png",
    tags: ["JavaScript", "NodeJS", "React", "MongoDB"],
    githubUrl:
      "https://github.com/BismarckSVBP/Authentication-and-contactUs-template-MERN-project", // Replace with actual link
    liveUrl: "https://authentication-frontend-khaki-eta.vercel.app/login", // Replace with actual link
  },
   {
    id: 3,
    title: "Abhay's Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and achievements. Built with modern web technologies and responsive design for an engaging user experience.",
    image:
      "portfolio.png",
    tags: ["React", "TailwindCSS", "TypeScript", "NodeJS"],
    githubUrl: "https://github.com/BismarckSVBP/Portfolio-website", // Replace with actual link
    liveUrl: "https://abhay-portfolio.vercel.app/", // Replace with actual link or leave it blank
  },
  {
    id: 4,
    title: "URL Shortener Website",
    description:
      "Developed a secure URL shortener using JWT, short-id for unique links, and MongoDB for storage. Tracked analytics like click events and dynamically rendered data using EJS.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    tags: ["JavaScript", "EJS", "NodeJS", "MongoDB"],
    githubUrl: "https://github.com/BismarckSVBP/Url-shortner-Project-with-auth", // Replace with actual link
    // liveUrl: '#',   // Replace with actual link (or leave blank if no live demo)
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-background to-background/95 py-0"
    >
      <div className="section-container ">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-xs rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
