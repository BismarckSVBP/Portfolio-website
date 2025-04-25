// import {
//   Database,
//   Cpu,
//   FileCode,
//   Layers,
//   ShieldCheck,
//   Library,
// } from "lucide-react";
// import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

// const About = () => {
//   const skills = [
//     {
//       category: "Languages",
//       items: ["C", "C++", "JavaScript", "TypeScript"],
//       icon: <FileCode className="w-6 h-6 text-primary" />,
//     },
//     {
//       category: "Runtime Environments",
//       items: ["Node.js"],
//       icon: <Cpu className="w-6 h-6 text-primary" />,
//     },
//     {
//       category: "Data Structures & Algorithms",
//       items: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs"],
//       icon: <Layers className="w-6 h-6 text-primary" />,
//     },
//     {
//       category: "Database",
//       items: [
//         "MongoDB",
//         "MySQL",
//         "Mongoose ODM",
//         "Database Design",
//         "Data Modeling",
//       ],
//       icon: <Database className="w-6 h-6 text-primary" />,
//     },
//     {
//       category: "API Development",
//       items: [
//         "RESTful APIs",
//         "JWT Authentication",
//         "API Security",
//         "Documentation",
//       ],
//       icon: <ShieldCheck className="w-6 h-6 text-primary" />,
//     },
//     {
//       category: "Frameworks & Libraries",
//       items: ["Express.js", "React.js", "Next.js", "Tailwind CSS"],
//       icon: <Library className="w-6 h-6 text-primary" />,
//     },
//   ];

//   return (
//     <section id="about" className="bg-background relative py-0">
//       <div className="section-container">
//         <h2 className="section-title">About Me</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           {/* Left Column */}
//           <div className="animate-fade-in space-y-6">
//             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-4">
//               <Avatar className="w-32 h-32 border-4 border-primary/20">
//                 <AvatarImage src="/picture2.jpg" alt="Abhay Kumar" />
//                 <AvatarFallback className="text-2xl bg-primary/10">
//                   JS
//                 </AvatarFallback>
//               </Avatar>
//                     <div className="flex justify-center">
//                 <div className="text-center">
//                   <h3 className="text-2xl font-semibold mb-2">Abhay Kumar</h3>
//                   <p className="text-muted-foreground">
//                     Backend Developer | Coder
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="animate-fade-in">
//               <p className="text-lg mb-6">
//                 I'm a dedicated backend developer specializing in building
//                 robust, scalable server-side applications using the MERN stack.
//                 With a strong foundation in MongoDB, Express.js, React.js, and
//                 Node.js, I craft efficient APIs and database solutions that
//                 power modern web applications.
//               </p>
//               <p className="text-lg mb-6">
//                 My passion lies in designing clean, maintainable code
//                 architectures and optimizing application performance. I excel at
//                 translating business requirements into technical solutions
//                 through thoughtful database design and server-side logic.
//               </p>
//               <p className="text-lg">
//                 When I'm not coding, you'll find me exploring new technologies,
//                 contributing to open-source projects, and writing technical
//                 articles to share my knowledge with the developer community.
//               </p>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div>
//             <h3 className="text-2xl font-semibold mb-6">My Expertise</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {skills.map((skill, index) => (
//                 <div
//                   key={index}
//                   className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all animate-slide-up"
//                   style={{ animationDelay: `${index * 150}ms` }}
//                 >
//                   <div className="flex items-center mb-4">
//                     {skill.icon}
//                     <h4 className="text-lg font-medium ml-2">
//                       {skill.category}
//                     </h4>
//                   </div>
//                   <ul className="space-y-2">
//                     {skill.items.map((item, i) => (
//                       <li key={i} className="text-muted-foreground">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import {
  Database,
  Cpu,
  FileCode,
  Layers,
  ShieldCheck,
  Library,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["C", "C++", "JavaScript", "TypeScript"],
      icon: <FileCode className="w-6 h-6 text-primary" />,
    },
    {
      category: "Runtime Environments",
      items: ["Node.js"],
      icon: <Cpu className="w-6 h-6 text-primary" />,
    },
    {
      category: "Data Structures & Algorithms",
      items: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs"],
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      category: "Database",
      items: [
        "MongoDB",
        "MySQL",
        "Mongoose ODM",
        "Database Design",
        "Data Modeling",
      ],
      icon: <Database className="w-6 h-6 text-primary" />,
    },
    {
      category: "API Development",
      items: [
        "RESTful APIs",
        "JWT Authentication",
        "API Security",
        "Documentation",
      ],
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
    {
      category: "Frameworks & Libraries",
      items: ["Express.js", "React.js", "Next.js", "Tailwind CSS"],
      icon: <Library className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="about" className="bg-background relative py-0">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="animate-fade-in space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-4">
              <Avatar className="w-32 h-32 border-4 border-primary/20">
                <AvatarImage src="/picture2.jpg" alt="Abhay Kumar" />
                <AvatarFallback className="text-2xl bg-primary/10">
                  JS
                </AvatarFallback>
              </Avatar>
                    <div className="flex justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Abhay Kumar</h3>
                  <p className="text-muted-foreground">
                    Backend Developer | Coder
                  </p>
                </div>
              </div>
            </div>





            <div className="animate-fade-in">
              <p className="text-lg mb-6">
                I am a second-year Computer Science and Engineering student at MMMUT Gorakhpur with a strong interest in full-stack web development. I have experience working with the MERN stack, including MongoDB, Express.js, React.js, and Node.js, as well as Tailwind CSS for frontend styling.
              </p>
              <p className="text-lg mb-6">
                I enjoy building real-world applications and have developed projects such as a radar-based object detection system. Despite financial challenges, I remain focused and committed to learning and improving my skills through hands-on practice and participation in college-level competitions.
              </p>
              <p className="text-lg">
                My goal is to become a skilled software developer and contribute to meaningful and impactful technology solutions.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h4 className="text-lg font-medium ml-2">
                      {skill.category}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
