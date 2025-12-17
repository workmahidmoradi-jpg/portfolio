import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-6sovak61ez";
import profileImage from "figma:asset/1c4d4a5c9b2a34b9b30e7f9ead415e0682d30cc4.png";

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contacts', label: 'Contacts' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f1f1f]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Poppins:Regular',_sans-serif] text-[18px] transition-colors duration-200 ${
                  activeSection === item.id ? 'text-[#f8f7f9]' : 'text-[#f8f7f9]/70 hover:text-[#f8f7f9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <div className="h-11 w-px bg-[#f8f7f9]" />
            <div className="flex gap-6">
              <a 
                href="https://instagram.com/Povmahdi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#f8f7f9] hover:text-[#f8f7f9]/80 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path
                    d={svgPaths.p4fdb300}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.p39557800}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 6.5H17.51"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[905px] h-[897px]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1417 1409">
              <defs>
                <filter id="blur" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="128" />
                </filter>
              </defs>
              <ellipse
                cx="708.5"
                cy="704.5"
                rx="452.5"
                ry="448.5"
                fill="#f8f7f9"
                filter="url(#blur)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9]">
              MEHDI MORADI
            </h2>
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[64px] lg:text-[96px] leading-[0.9] text-[#f8f7f9]">
              UI/UX<br />DESIGNER
            </h1>
          </div>
          
          <button 
            onClick={scrollToProjects}
            className="group border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9] hover:text-[#1f1f1f]"
          >
            <span className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
              VIEW MY PROJECTS
            </span>
          </button>
        </div>

        {/* Right content - Profile image */}
        <div className="relative">
          <div
            className="w-full aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-3xl grayscale"
            style={{ backgroundImage: `url('${profileImage}')` }}
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          About me
        </h2>
        
        <div className="max-w-4xl">
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5] mb-8">
            I am a UI/UX Designer with a strong visual and cinematic background, focused on designing meaningful digital experiences for websites, applications, and Windows-based software. My journey started in animation and visual storytelling and evolved into interface design, where structure, usability, and emotion meet.
          </p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
            With hands-on experience in Figma, Adobe Photoshop, Premiere Pro, and After Effects, I approach design not only as a functional process, but as a narrative — guiding users through screens the way a director guides an audience through a story. I believe great interfaces are invisible, intuitive, and emotionally engaging.
          </p>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            EDUCATION
          </h3>
          <div className="max-w-4xl space-y-8">
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                Bachelor's Degree – Film Directing (In Progress)
              </h4>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                Academic background focused on storytelling, visual composition, and audience perception.
              </p>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                Associate Degree – Graphic Design
              </h4>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                Built strong foundations in visual hierarchy, typography, color theory, and design principles.
              </p>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                Diploma – Animation
              </h4>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                Developed skills in motion, timing, visual rhythm, and narrative thinking.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            SKILLS & TOOLS
          </h3>
          <div className="max-w-4xl">
            <ul className="space-y-2">
              <li className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                • UI/UX Design for Web, Mobile & Windows Software
              </li>
              <li className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                • User Flow & Information Architecture
              </li>
              <li className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                • Wireframing & Prototyping (Figma)
              </li>
              <li className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                • Visual Design & Design Systems
              </li>
              <li className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                • Adobe Photoshop
              </li>
              <li className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                • Adobe Premiere Pro
              </li>
              <li className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                • After Effects (Basic)
              </li>
              <li className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                • Photography & Videography
              </li>
              <li className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                • Visual Storytelling & Cinematic Thinking
              </li>
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            EXPERIENCE
          </h3>
          <div className="max-w-4xl">
            <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
              UI/UX Designer
            </h4>
            <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
              I design interfaces that balance clarity, aesthetics, and usability, with a strong focus on real user needs. My work involves transforming complex ideas into clean, structured, and user-friendly interfaces — especially for software and application-based products. I collaborate closely with developers and stakeholders to ensure design consistency, feasibility, and a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "UI/UX Design for Websites & Applications",
      description: "Designing intuitive and visually consistent interfaces with a strong emphasis on usability, scalability, and clean interaction patterns."
    },
    {
      title: "Windows Software Interface Design",
      description: "Focused on designing structured, efficient, and user-centered interfaces for desktop software, prioritizing workflow clarity and functional simplicity."
    },
    {
      title: "Visual & Motion-Based Projects",
      description: "Combining UI/UX with cinematic visuals, motion principles, and storytelling techniques to enhance user engagement and brand identity."
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="max-w-4xl relative">
              <div className="pl-8 relative">
                <div className="absolute left-[-9px] top-[12px] w-[15px] h-[15px] bg-white/80 rounded-full backdrop-blur-sm" 
                     style={{ filter: 'blur(0.5px)' }} />
                <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
                  {project.title}
                </h3>
                <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Contact
        </h2>
        
        <div className="space-y-4 max-w-4xl">
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              📧 Email: 
            </span>
            <span className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              {' '}Work.mahidmoradi@gmail.com
            </span>
          </div>
          <div>
            <span className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              📍 Open to freelance & collaborative projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-[#1f1f1f] min-h-screen text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
    </div>
  );
}