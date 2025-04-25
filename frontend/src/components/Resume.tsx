// import { Download } from "lucide-react";
// import { Button } from "./ui/button";

// const Resume = () => {
//   return (
//     <section id="resume" className="bg-gradient-to-b from-background to-background/95 py-16 md:py-20">
//       <div className="section-container">
//         <h2 className="section-title">Resume</h2>

//         <div className="max-w-3xl mx-auto text-center">
//           <p className="text-lg mb-8 text-muted-foreground">
//             Download my resume to learn more about my skills and education.
//           </p>

//           <div className="bg-card border border-border rounded-lg p-8 mb-8 flex flex-col items-center">
//             <h3 className="text-2xl font-semibold mb-2">Abhay Kumar</h3>
//             <p className="text-muted-foreground mb-4">Backend Developer | Coder</p>

//             <a href="/Abhay's resume.pdf" download>
//               <Button variant="default" size="lg" className="group">
//                 <Download className="mr-2 group-hover:animate-bounce" />
//                 Download Full Resume
//               </Button>
//             </a>
//           </div>

// {/*           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-secondary/30 rounded-lg p-6">
//               <h4 className="font-medium mb-2">Languages</h4>
//               <ul className="text-sm text-muted-foreground text-left space-y-1">
//                 <li>C, C++</li>
//                 <li>JavaScript, TypeScript</li>
//               </ul>
//             </div>
//  */}
// {/*             <div className="bg-secondary/30 rounded-lg p-6">
//               <h4 className="font-medium mb-2">DSA & Platforms</h4>
//               <ul className="text-sm text-muted-foreground text-left space-y-1">
//                 <li>Proficient in DSA using C++</li>
//                 <li>Node.js Runtime</li>
//               </ul>
//             </div> */}

//           //   <div className="bg-secondary/30 rounded-lg p-6">
//           //     <h4 className="font-medium mb-2">Frameworks & Databases</h4>
//           //     <ul className="text-sm text-muted-foreground text-left space-y-1">
//           //       <li>React, Express, Next.js</li>
//           //       <li>MongoDB, MySQL</li>
//           //     </ul>
//           //   </div>
//           // </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Resume = () => {
  const handleDownload = async () => {
    const toastId = toast.loading("Downloading resume...");

    try {
      const response = await fetch("/Abhay's resume3.pdf");
      if (!response.ok) throw new Error("Failed to fetch resume");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Abhay_Kumar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      toast.success("Download complete", { id: toastId });
    } catch (error) {
      toast.error("Failed to download resume", { id: toastId });
    }
  };

  return (
    <section
      id="resume"
      className="bg-gradient-to-b from-background to-background/95 py-16 md:py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/0" />
      <div className="section-container">
        <h2 className="section-title">Resume</h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8 text-muted-foreground">
            Download my resume to learn more about my skills and education.
          </p>

          <div className="bg-card border border-border rounded-lg p-8 mb-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Abhay Kumar</h3>
            <p className="text-muted-foreground mb-4">
              Backend Developer | Coder
            </p>

            <Button
              variant="default"
              size="lg"
              className="group"
              onClick={handleDownload}
            >
              <Download className="mr-2 group-hover:animate-bounce" />
              Download Full Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
