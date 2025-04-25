// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Projects from "@/components/Projects";
// //import Blog from '@/components/Blog';
// import Resume from "@/components/Resume";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background text-foreground flex flex-col">
//       <Navbar />
//       <div className="flex-1 flex flex-col">
//         <Hero />
//         <About />
//         <Projects />
//         {/* <Blog /> */}
//         <Resume/>
//         <Contact />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Index;
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
//import Blog from '@/components/Blog';
import CodingProfiles from "@/components/CodingProfiles";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <CodingProfiles />
        {/* <Blog /> */}
        <Resume/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
