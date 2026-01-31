import { Download, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Resume = () => {
  const handleDownload = async () => {
    const toastId = toast.loading("Downloading resume...");

    try {
      const response = await fetch("/Abhay 26.pdf");
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
    <>
      <style>{`
        /* ================= RESUME ANIMATIONS ================= */
        .resume-section {
          position: relative;
          background-color: #0B0F19;
          background-image: radial-gradient(circle at 50% 100%, #172033 0%, #0B0F19 100%);
          overflow: hidden;
        }

        /* CARD STYLE & SCANNER ANIMATION */
        .resume-card {
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          overflow: hidden; /* Essential for containing the scanner line */
          transition: all 0.3s ease;
        }

        .resume-card:hover {
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 0 40px rgba(56, 189, 248, 0.1);
          transform: translateY(-5px);
        }

        /* THE SCANNER LINE */
        .resume-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #38BDF8; /* Cyan Line */
          opacity: 0.5;
          box-shadow: 0 0 10px #38BDF8;
          animation: scan 4s ease-in-out infinite;
        }

        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* GLOW BACKGROUND */
        .resume-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0,0,0,0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* TEXT STYLING */
        .resume-role {
          color: #38BDF8;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 4px 12px;
          border-radius: 99px;
          font-weight: 500;
          display: inline-block;
          margin-bottom: 24px;
        }
      `}</style>

      <section id="resume" className="resume-section py-16 md:py-20">
        {/* Ambient Glow */}
        <div className="resume-glow"></div>

        <div className="section-container relative z-10">
          <h2 className="section-title text-center text-white text-4xl font-bold mb-4">Resume</h2>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8 text-slate-400">
              Download my resume to learn more about my skills and education.
            </p>

            {/* ANIMATED CARD STARTS HERE */}
            <div className="resume-card">
              {/* Icon */}
              <div className="mx-auto w-16 h-16 bg-[#38BDF8]/10 rounded-full flex items-center justify-center mb-6 text-[#38BDF8]">
                <FileText size={32} />
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-bold text-white mb-2">Abhay Kumar</h3>
              <span className="resume-role">Backend Developer | Coder</span>

              {/* Badges */}
              <div className="flex justify-center gap-6 mb-8 text-sm text-slate-400">
                 <div className="flex items-center gap-2">
                   <CheckCircle2 size={16} className="text-[#38BDF8]" /> Full Stack
                 </div>
                 <div className="flex items-center gap-2">
                   <CheckCircle2 size={16} className="text-[#38BDF8]" /> Cloud Native
                 </div>
              </div>

              {/* Download Button */}
              <Button
                variant="default"
                size="lg"
                className="group bg-[#38BDF8] text-[#0B0F19] hover:bg-[#0ea5e9] hover:scale-105 transition-all duration-300 font-semibold"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Full Resume
              </Button>
            </div>
            {/* ANIMATED CARD ENDS HERE */}

          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
