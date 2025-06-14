"use client"
import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, Code, Database, Globe, Server, Smartphone, ArrowUpRight, Menu, X, Phone } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsContactModalOpen(false);
      }
    };
    
    if (isContactModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen]);

  const skills = [
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'PowerShell', level: 75 },
    { name: 'Active Directory', level: 80 },
    { name: 'Linux & Git', level: 70 },
    { name: 'Azure VM & RDP', level: 75 }
  ];

  const projects = [
    {
      title: 'IT Infrastructure Simulation',
      description: 'Windows Server VM in Azure simulating real-world help desk tasks like password resets and troubleshooting.',
      tech: ['Azure', 'Windows Server', 'DNS', 'DHCP'],

      year: '2024'
    },
    {
      title: 'Help Desk Ticketing System     (in progress)',
      description: 'Full-stack web app for simulating IT support ticket workflows with user/admin login and status tracking.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'JavaScript'],

      year: '2024'
    }
  ];

  const experiences = [
    {
      company: 'Southern New Hampshire University',
      position: 'BS Computer Science Student',
      period: '2024 - 2027',
      description: 'Pursuing Bachelor of Science in Computer Science with focus on IT infrastructure and cybersecurity.'
    },
    {
      company: 'Self-Directed Learning',
      position: 'CompTIA Certification Candidate',
      period: '2024 - Present',
      description: 'Currently pursuing CompTIA Security+ and Network+ certifications to strengthen cybersecurity knowledge.'
    },
    {
      company: 'Personal Projects',
      position: 'IT Lab Administrator',
      period: '2024 - Present',
      description: 'Building and maintaining home lab environments for hands-on experience with enterprise IT systems.'
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here if desired
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const BrutalCard = ({ children, className = "", hover = true, ...props }) => (
    <div
      className={`bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] ${
        hover ? 'hover:shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]' : ''
      } transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );

  const BrutalButton = ({ children, variant = "primary", className = "", ...props }) => {
    const variants = {
      primary: "bg-black text-white hover:bg-gray-800",
      secondary: "bg-white text-black border-black hover:bg-gray-50",
      accent: "bg-yellow-400 text-black hover:bg-yellow-300"
    };

    return (
      <button
        className={`px-6 py-3 border-2 border-black font-medium transition-all duration-200 hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Contact Modal Component
  const ContactModal = () => {
    if (!isContactModalOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeContactModal}
        />
        
        {/* Modal */}
        <div className="relative z-10 w-full max-w-md">
          <BrutalCard className="p-6 bg-white" hover={false}>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">GET IN TOUCH</h3>
              <button
                onClick={closeContactModal}
                className="p-2 border-2 border-black bg-white hover:bg-gray-50 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
              >
                <X size={16} />
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {/* Email */}
              <BrutalCard className="p-4" hover={false}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-black text-white">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 mb-1">EMAIL</div>
                      <div className="font-mono text-sm">alisameerawad123@gmail.com</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('alisameerawad123@gmail.com', 'email')}
                    className="p-2 border border-gray-300 hover:border-black hover:bg-gray-50 transition-colors"
                    title="Copy email"
                  >
                    <ExternalLink size={14} />
                  </button>
                </div>
              </BrutalCard>

              {/* Phone */}
              <BrutalCard className="p-4" hover={false}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-black text-white">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 mb-1">PHONE</div>
                      <div className="font-mono text-sm">(312) 826-0482</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('(312) 826-0482', 'phone')}
                    className="p-2 border border-gray-300 hover:border-black hover:bg-gray-50 transition-colors"
                    title="Copy phone"
                  >
                    <ExternalLink size={14} />
                  </button>
                </div>
              </BrutalCard>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="mailto:alisameerawad123@gmail.com"
                className="flex-1 bg-yellow-400 text-black border-2 border-black px-4 py-3 font-medium text-center hover:bg-yellow-300 hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
              >
                SEND EMAIL
              </a>
              <a
                href="tel:(312) 826-0482"
                className="flex-1 bg-black text-white border-2 border-black px-4 py-3 font-medium text-center hover:bg-gray-800 hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
              >
                CALL NOW
              </a>
            </div>

            {/* Footer Note */}
            <div className="mt-4 text-center">
              <div className="bg-gray-100 border border-gray-300 px-3 py-2 text-xs text-gray-600">
                Available for IT & Development Projects
              </div>
            </div>
          </BrutalCard>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-mono">
      {/* Contact Modal */}
      <ContactModal />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b-2 border-black z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold tracking-tight">
              <span className="bg-black text-white px-3 py-1">ALI AL EZAIREJ</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['HOME', 'ABOUT', 'WORK', 'CONTACT'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium tracking-wide hover:text-gray-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  {item}
                </button>
              ))}
              <BrutalButton variant="primary" className="text-sm" onClick={openContactModal}>
                HIRE ME
              </BrutalButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 border-2 border-black bg-white hover:bg-gray-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t-2 border-black bg-white">
              <div className="py-4 space-y-2">
                {['HOME', 'ABOUT', 'WORK', 'CONTACT'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50"
                  >
                    {item}
                  </button>
                ))}
                <div className="px-4 pt-2">
                  <BrutalButton variant="primary" className="text-sm w-full" onClick={openContactModal}>
                    HIRE ME
                  </BrutalButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Compact */}
      <section id="home" className="py-20 px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(236, 72, 153, 0.1) 100%)`
          }}
        />
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10 mt-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="block">IT Infrastructure</span>
              <span className="block">& Development</span>
            </h1>
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
            <p className="text-lg text-gray-600 mb-6">
              Computer Science student with hands-on experience in Active Directory, Windows Server, 
              and cloud-based lab environments. Building tools for IT support operations.
            </p>
            <div className="flex items-center space-x-4">
              <BrutalButton variant="accent" onClick={openContactModal}>Get in touch</BrutalButton>
              <button 
                className="p-3 border-2 border-black bg-white hover:bg-gray-50 hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
                onClick={openContactModal}
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <BrutalCard className="p-6 bg-gradient-to-br from-white to-gray-50">
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-black bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400">
        
                </div>
                <div className="absolute top-2 right-2 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Code className="text-white" size={20} />
                </div>
                <div className="absolute -bottom-2 -left-2 bg-yellow-400 px-3 py-1 border-2 border-black font-bold text-xs">
                  CS STUDENT
                </div>
              </div>
            </BrutalCard>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-8">
        
        {/* About Section - Grid Item */}
        <section id="about" className="lg:col-span-5">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">About Me</h2>
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
          </div>
          
          <BrutalCard className="p-6 mb-6">
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm a Computer Science student at Southern New Hampshire University with hands-on experience 
              in Active Directory, Windows Server, and cloud-based lab environments. Currently pursuing 
              CompTIA Security+ and Network+ certifications.
            </p>
            <p className="text-gray-600 text-sm">
              Skilled in full-stack web development with a focus on building tools for IT support operations. 
              Committed to continuous learning and solving real-world technical issues.
            </p>
          </BrutalCard>

          <div className="grid grid-cols-3 gap-3">
            <BrutalCard className="p-4 text-center">
              <div className="text-xl font-bold mb-1">2027</div>
              <div className="text-xs text-gray-600">Graduation</div>
            </BrutalCard>
            <BrutalCard className="p-4 text-center">
              <div className="text-xl font-bold mb-1">3.3</div>
              <div className="text-xs text-gray-600">GPA</div>
            </BrutalCard>
            <BrutalCard className="p-4 text-center">
              <div className="text-xl font-bold mb-1">2+</div>
              <div className="text-xs text-gray-600">Projects</div>
            </BrutalCard>
          </div>
        </section>

        {/* Skills Section - Grid Item */}
        <section className="lg:col-span-7">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Skills & Technologies</h2>
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <BrutalCard key={skill.name} className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                  <span className="text-xs font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 border border-gray-300">
                  <div
                    className="bg-black h-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </BrutalCard>
            ))}
          </div>
        </section>

        {/* Projects Section - Full Width */}
        <section id="work" className="lg:col-span-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Featured Work</h2>
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <BrutalCard key={project.title} className="overflow-hidden">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center border-b-2 border-black">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Code className="text-white" size={20} />
                    </div>
                    <div className="bg-yellow-400 px-2 py-1 border-2 border-black text-xs font-bold">
                      {project.year}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-100 px-2 py-1 border border-gray-300 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    
                  </div>
                </div>
              </BrutalCard>
            ))}
          </div>
        </section>

        {/* Experience Section - Grid Item */}
        <section className="lg:col-span-7">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Experience</h2>
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <BrutalCard key={exp.company} className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="bg-black text-white px-2 py-1 text-xs font-bold inline-block">
                    {exp.period}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{exp.position}</h3>
                    <h4 className="text-gray-600 mb-2">{exp.company}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </BrutalCard>
            ))}
          </div>
        </section>

        {/* Contact Section - Grid Item */}
        <section id="contact" className="lg:col-span-5">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Let's work together</h2>
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
          </div>
          
          <p className="text-gray-600 mb-6">
            Interested in IT infrastructure, cybersecurity, or development projects? 
            Let's connect and discuss opportunities for collaboration.
          </p>
          
          <BrutalCard className="p-5 mb-6">
            <div className="flex items-center space-x-3">
              <Mail size={18} />
              <span className="font-medium">alisameerawad123@gmail.com</span>
            </div>
          </BrutalCard>

          <BrutalCard className="p-4 mb-6">
            <div className="text-center">
              <div className="text-sm font-medium mb-2">Arlington, TX</div>
              <div className="text-sm text-gray-600">(312) 826-0482</div>
            </div>
          </BrutalCard>

          <div className="space-y-4">
            
            <div className="flex space-x-2">
              
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            © 2025 Ali Al Ezairej. Built with Next.js & Tailwind CSS.
          </div>
          <div className="bg-yellow-400 text-black px-3 py-1 text-sm font-bold">
            PURSUING CERTIFICATIONS
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;