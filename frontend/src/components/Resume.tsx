import { Download } from "lucide-react";
import { Button } from "./ui/button";

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-gradient-to-b from-background to-background/95 py-16 md:py-20"
    >
      <div className="section-container">
        <h2 className="section-title">Resume</h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8 text-muted-foreground">
            Download my resume to learn more about my skills, and education.
          </p>

          <div className="bg-card border border-border rounded-lg p-8 mb-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Abhay Kumar</h3>
            <p className="text-muted-foreground mb-4">
              Backend Developer | Coder
            </p>

            {/* <div className="grid grid-cols-2 gap-8 mb-8 w-full max-w-lg">
              <div>
                <h4 className="font-medium mb-2">Experience</h4>
                <ul className="text-sm text-muted-foreground text-left space-y-1">
                  <li>Senior Backend Developer at Tech Corp (2020-Present)</li>
                  <li>Backend Developer at DevCo (2018-2020)</li>
                  <li>Junior Developer at StartupX (2016-2018)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Education</h4>
                <ul className="text-sm text-muted-foreground text-left space-y-1">
                  <li>M.S. Computer Science, Tech University (2016)</li>
                  <li>B.S. Computer Science, State University (2014)</li>
                </ul>
              </div>
            </div> */}

            <a href="/Abhay's resume.pdf" download>
              <Button variant="default" size="lg" className="group">
                <Download className="mr-2 group-hover:animate-bounce" />
                Download Full Resume
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary/30 rounded-lg p-6">
              <h4 className="font-medium mb-2">Languages</h4>
              <ul className="text-sm text-muted-foreground text-left">
                <li>C, C++</li>
                <li>JavaScript, TypeScript</li>
              </ul>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6">
              <h4 className="font-medium mb-2">DSA & Platforms</h4>
              <ul className="text-sm text-muted-foreground text-left">
                <li>Proficient in DSA using C++</li>
                <li>Node.js Runtime</li>
              </ul>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6">
              <h4 className="font-medium mb-2">Frameworks & Databases</h4>
              <ul className="text-sm text-muted-foreground text-left">
                <li>React, Express, Next.js</li>
                <li>MongoDB, MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
