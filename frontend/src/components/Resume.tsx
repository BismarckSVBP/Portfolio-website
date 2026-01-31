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
        /* ================= RESUME SECTION THEME ================= */
        .resume-section {
          position: relative;
          background-color: #0B0F19; /* Void Blue */
          background-image: radial-gradient(circle at 50% 100%, #172033 0%, #0B0F19 100%);
          color: #e5e7eb;
          padding: 100px 0;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        /* AMBIENT GLOW */
        .resume-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0,0,0,0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        /* RESUME CARD */
        .resume-card {
          background: rgba(30, 41, 59, 0.4); /* Glass Slate */
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .resume-card:hover {
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 0 40px rgba(56, 189, 248, 0.1);
          transform: translateY(-5px);
        }

        /* SCANNER LINE ANIMATION */
        .resume-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #38BDF8;
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

        /* TEXT STYLES */
        .resume-name {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .resume-role {
          font-size: 16px;
          color: #38BDF8; /* Cyan */
          font-weight: 500;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
          display: inline-block;
          padding: 4px 12px;
          background: rgba(56, 189, 248, 0.1);
          border-radius: 99px;
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .resume-desc {
          color: #94a3b8;
          margin-bottom: 32px;
          font-size: 16px;
          line-height: 1.6;
        }

        /* CUSTOM BUTTON STYLE OVERRIDE */
        .download-btn-wrapper button {
          background-color: #38BDF8;
          color: #0B0F19;
          font-weight: 600;
          border: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
        }

        .download-btn-wrapper button:hover {
          background-color: #0ea5e9;
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.6);
          transform: scale(1.05);
        }
      `}</style>

      <section id="resume" className="resume-section">
        {/* Ambient Background Glow */}
        <div className="resume-glow"></div>

        <div className="section-container">
          <h2 className="section-title text-4xl font-bold text-center mb-4 text-white">
            Resume
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to collaborate? Download my resume to explore my full professional background and technical skillset.
          </p>

          <div className="resume-card">
            {/* Decorative Icon */}
            <div className="mx-auto w-16 h-16 bg-[#38BDF8]/10 rounded-full flex items-center justify-center mb-6 text-[#38BDF8]">
              <FileText size={32} />
            </div>

            <h3 className="resume-name">Abhay Kumar</h3>
            <span className="resume-role">Backend Developer & Coder</span>

            <div className="flex justify-center gap-6 mb-8 text-sm text-slate-400">
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-[#38BDF8]" /> Full Stack
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-[#38BDF8]" /> Cloud Native
               </div>
            </div>

            <div className="download-btn-wrapper">
              <Button
                variant="default"
                size="lg"
                className="group w-full sm:w-auto px-8"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
