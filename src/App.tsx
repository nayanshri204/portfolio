import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

const PortfolioNayanShriMishra = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  const fullName = "Nayan shri mishra";
  const jobTitle = "Full-Stack Web Developer";
  const specializations = "React, Node.js & Databases";

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const projectsData: Project[] = [
    {
      id: 1,
      title: "Dynamic E-commerce Hub",
      description: "A comprehensive e-commerce platform built with React and Node.js, featuring product catalogs, user authentication, shopping cart, and a Stripe-integrated checkout process. Powered by a MongoDB database.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe API"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 2,
      title: "Real-time Collaborative Planner",
      description: "A task management application enabling real-time collaboration using WebSockets. Features include task assignment, progress tracking, and notifications. Backend powered by Node.js with PostgreSQL.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Next.js"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 3,
      title: "Developer Portfolio API",
      description: "A robust RESTful API designed to serve data for portfolio websites. Includes secure endpoints for managing projects, skills, and contact information, built with Node.js and Express.",
      technologies: ["Node.js", "Express.js", "JWT", "Swagger", "SQL (SQLite)"],
      repoLink: "#",
    },
     {
      id: 4,
      title: "Cloud Storage Manager",
      description: "A web application for managing files on a cloud storage service (e.g., AWS S3). Features include file upload, download, folder creation, and sharing options, built with React for the frontend and Node.js for backend operations.",
      technologies: ["React", "Node.js", "AWS SDK", "Express.js", "Ant Design"],
      liveLink: "#",
    },
  ];

  const skillsData: Skill[] = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript (ES6+)", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Redux", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "RESTful APIs", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Firebase", category: "Database" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "Jest & RTL", category: "Tools" },
    { name: "CI/CD", category: "Tools" },
    { name: "Netlify", category: "Tools" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log("Form Data Submitted:", formData); // Simulate submission
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert("Please fill in all fields.");
    }
  };
  
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-sky-400">{children}</h2>
  );

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col">
      <div className="bg-slate-700 border-2 border-dashed border-slate-600 rounded-t-lg w-full h-48 flex items-center justify-center">
        <span className="text-slate-500 text-sm p-4 text-center">Project: {project.title}</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-slate-100">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-300 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-sky-700 text-sky-100 px-2 py-1 text-xs rounded-full">{tech}</span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-3">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors duration-300 text-sm font-medium">
              Live Demo
            </a>
          )}
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors duration-300 text-sm font-medium">
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans leading-relaxed antialiased">
      {/* Navbar */}
      <nav className="bg-slate-800/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
              {fullName}
            </a>
            <div className="hidden md:flex space-x-6">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} className="text-slate-300 hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setActiveNav(!activeNav)}
                className="text-slate-300 hover:text-sky-400 focus:outline-none focus:text-sky-400 p-2"
                aria-label="Toggle navigation"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {activeNav ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {activeNav && (
          <div className="md:hidden border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveNav(false)}
                  className="text-slate-300 hover:bg-slate-700 hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{backgroundImage: "linear-gradient(rgba(14, 20, 39, 0.8), rgba(14, 20, 39, 0.9)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80')"}}>
        <div className="absolute inset-0 bg-slate-900 opacity-50"></div>
        <div className="text-center z-10 p-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
            Hi, I'm <span className="text-sky-400">{fullName}</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-2">{jobTitle}</p>
          <p className="text-lg sm:text-xl md:text-2xl text-sky-500 font-semibold mb-8">{specializations}</p>
          <div className="space-x-4">
            <a
              href="#projects"
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 text-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent hover:bg-sky-500 text-sky-400 font-semibold hover:text-white py-3 px-8 border border-sky-400 hover:border-transparent rounded-lg shadow-md transition-all duration-300 text-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 md:py-24 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle>About Me</SectionTitle>
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-700 border-4 border-sky-500 flex items-center justify-center overflow-hidden shadow-xl shrink-0">

              {/* Placeholder for an image of Nayan */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-lg text-slate-300 space-y-4">
              <p>
                Hello! I'm {fullName}, a passionate and dedicated Full-Stack Web Developer with a strong focus on creating efficient, scalable, and user-friendly web applications. My expertise lies in leveraging modern technologies like <strong className="text-sky-400">React</strong> for dynamic frontends, <strong className="text-sky-400">Node.js</strong> for robust backends, and various <strong className="text-sky-400">SQL & NoSQL databases</strong> to manage data effectively.
              </p>
              <p>
                I thrive on solving complex problems and continuously learning new technologies to enhance my skill set. My goal is to contribute to meaningful projects that make a positive impact, delivering high-quality code and exceptional user experiences.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new tech trends, contributing to open-source projects, and staying active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>My Tech Stack</SectionTitle>
          <div className="space-y-10">
            {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-slate-200 mb-6 text-center md:text-left">{category}</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                  {skillsInCategory.map(skill => (
                    <div key={skill.name} className="bg-slate-800 text-slate-300 hover:text-sky-300 py-2 px-4 rounded-lg shadow-md text-sm sm:text-base font-medium cursor-default transition-colors duration-300 hover:shadow-sky-500/30">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Get In Touch</SectionTitle>
          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 md:p-10 rounded-xl shadow-2xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 text-lg"
            >
              Send Message
            </button>
            {isSubmitted && (
              <p className="text-center text-emerald-400 mt-4 p-3 bg-emerald-900/50 rounded-lg">
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
          </form>
          <div className="mt-12 text-center text-slate-400">
            <p className="mb-2">You can also reach me via:</p>
            <p>Email: <a href="mishranancy204@gmail.com" className="text-sky-400 hover:text-sky-300">mishranancy204@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/nayanshri-mishra-38b2592ba" className="text-sky-400 hover:text-sky-300">linkedin.com/in/nayanmishra</a> </p>
            <p>GitHub: <a href="https://github.com/nayanshri204" className="text-sky-400 hover:text-sky-300">github.com/nayanmishra</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs mt-1">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default PortfolioNayanShriMishra;