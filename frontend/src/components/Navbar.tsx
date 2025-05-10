// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Profiles", href: "#coding-profiles" }, // Fixed href
//     { name: "Resume", href: "#resume" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/90 backdrop-blur-sm shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <a href="#home" className="text-2xl font-bold text-primary">
//             Abhay Kumar
//           </a>

//           {/* Desktop menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-card/95 backdrop-blur-sm">
//           <div className="px-4 pt-4 pb-3 space-y-1">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// index.js or App.js
import "../index.css"; // or './global.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Profiles", href: "#coding-profiles" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Efficient scroll background effect with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Debounced scroll-spy effect with intersection observer
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Top & bottom threshold
      threshold: 0,
    };

    let timeoutId = null;

    const observerCallback = (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

      if (visibleSections.length > 0) {
        const activeId = visibleSections[0].target.id;
        // Debounce update slightly to avoid excessive re-renders
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setActiveLink(`#${activeId}`);
        }, 50); // Delay update for smoother transition
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      clearTimeout(timeoutId);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [navLinks]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold text-primary">
            Abhay Kumar
          </a>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ease-in-out ${
                    activeLink === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-card/95 backdrop-blur-sm transition-all ease-in-out"
          style={{
            animation: isMenuOpen
              ? "menuOpen 0.3s ease-out"
              : "menuClose 0.3s ease-in",
          }}
        >
          <div className="px-4 pt-4 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ease-in-out ${
                  activeLink === link.href
                    ? "text-primary bg-secondary/50"
                    : "text-foreground hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
