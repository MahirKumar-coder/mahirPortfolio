import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  Sparkles,
  Send,
  Award,
  Download,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Database,
  Wrench,
  Check,
} from "lucide-react";

// Custom SVG Brand Icons since Lucide v1 removed brand assets
const Github = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import ThreeBg from "./components/ThreeBg";
import Card3D from "./components/Card3D";
import mahirProfileImg from "./assets/mahir_kumar.jpg";

// Animation Variants for Scroll Reveals
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Projects Data Array - Easily append new projects here!
const PROJECTS_DATA = [
  {
    id: 1,
    title: "AI Mock Interview Platform (Intervu)",
    category: "WEB APPLICATION",
    desc: "An interactive, real-time mock interview simulator that uses browser-native Web Speech APIs to conduct voice-spoken questions and answers.",
    tech: ["MERN Stack", "Socket.io", "Web Speech"],
    features: [
      "Real-time voice synthesis and speech recognition for interview simulator.",
      "Smart browser proctoring (tabs-switching and focus tracking) with auto-submission.",
      "Socket.io sync layer for sub-second client-server evaluations.",
      "Responsive glassmorphic UI utilizing secure partitioned cookies (CHIPS).",
    ],
    github: "https://github.com/MahirKumar-coder/intervu",
    demo: "https://intervu-delta.vercel.app/",
    image: "/projects/intervu_showcase.png",
    glowColor: "rgba(34, 211, 238, 0.15)",
  },
  {
    id: 2,
    title: "AI Code Reviewer",
    category: "DEVELOPER TOOL",
    desc: "A full-stack code analysis application providing instantaneous feedback on code bugs, security issues, performance blockages, and refactoring outputs.",
    tech: ["React (Vite)", "Gemini API", "Node / Express"],
    features: [
      "Integrates official Google `@google/genai` SDK for structured feedback.",
      "Features an interactive code editor with live syntax highlighting via Prism.js.",
      "Custom education-first code review structure for helpful suggestions.",
      "CORS middleware config deployed distributed on Vercel and Render.",
    ],
    github: "https://github.com/MahirKumar-coder/code-review",
    demo: "https://code-review-plum-eight.vercel.app/",
    image: "/projects/codereviewer_showcase.png",
    glowColor: "rgba(192, 132, 252, 0.15)",
  },
  {
    id: 3,
    title: "Vingo Food Delivery Platform",
    category: "Full-Stack Web Application",
    desc: "A real-time food ordering and delivery platform featuring dedicated panels for customers, shop owners, and delivery agents with live tracking.",
    tech: [
      "React (Vite)",
      "Socket.io",
      "Node / Express",
      "MongoDB",
      "Redux Toolkit",
    ],
    features: [
      "Real-time order updates and status sync using Socket.io WebSockets.",
      "Proximity-based delivery boy search using MongoDB GeoJSON spatial queries.",
      "Live geolocation tracking of delivery agents on maps during active orders.",
      "Secure delivery validation using custom email-based OTP verification.",
    ],
    github: "https://github.com/MahirKumar-coder/vingo",
    demo: "https://vingo-cyan.vercel.app/",
    image: "/projects/vingo_showcase.png",
    glowColor: "rgba(255, 77, 45, 0.15)", // Matching Vingo's theme color (#ff4d2d)
  },
  {
    id: 4,
    title: "Mystry Message",
    category: "Web Application",
    desc: "A full-stack anonymous feedback platform where users can share a unique profile link to receive anonymous messages and questions.",
    tech: [
      "Next.js (App Router)",
      "TypeScript",
      "MongoDB / Mongoose",
      "NextAuth.js",
      "OpenAI API",
    ],
    features: [
      "Integrates OpenAI API to dynamically generate creative message suggestions for anonymous senders.",
      "Secure user authentication using NextAuth.js with credentials and secure OTP verification via email.",
      "Features a personal dashboard to view, refresh, delete messages, and toggle message acceptance status.",
      "Responsive, interactive user experience built with Tailwind CSS, Shadcn UI, and Sonner toasts.",
    ],
    github: "https://github.com/MahirKumar-coder/mstrymessage",
    demo: "https://mstrymessage-psi.vercel.app/",
    image: "/projects/mstrymessage_showcase.png",
    glowColor: "rgba(244, 63, 94, 0.15)",
  },
  {
    id: 5,
    title: "AI Cold Mail Generator",
    category: "Web Application",
    desc: "A full-stack AI-powered outreach assistant that generates high-converting cold emails and LinkedIn DMs using Llama-3.3-70b-versatile via Groq API, featuring email dispatch capabilities via Brevo/Resend.",
    tech: [
      "React (Vite)",
      "Tailwind CSS v4",
      "Node / Express",
      "MongoDB / Mongoose",
      "Groq API",
    ],
    features: [
      "Integrates Groq API with Llama-3.3-70b-versatile to generate personalized cold emails, LinkedIn DMs, and follow-up sequences from a single prompt.",
      "Implements secure JWT-based user authentication and signup flow with OTP verification sent via Brevo/Resend API.",
      "Saves generated outreach history in a MongoDB database with chronological sorting for easy user retrieval.",
      "Full-stack production deployment with the React frontend hosted on Vercel and the Express backend API hosted on Render.",
    ],
    github: "https://github.com/MahirKumar-coder/ai-cold-mail",
    demo: "https://ai-cold-mail-xi.vercel.app/", // Replace this with your actual live Vercel URL if different
    image: "/projects/aicoldmail_showcase.png",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
  id: 6,
  title: "Ujjwal Iron Digital Portal",
  category: "Web Application",
  desc: "A full-stack industrial steel catalog and lead management system featuring persistent themes, automated email alerts, WhatsApp redirection, and an administrative control panel with cloud image uploads.",
  tech: ["Next.js (App Router)", "MongoDB / Mongoose", "Tailwind CSS", "Cloudinary", "Nodemailer"],
  features: [
    "Dynamic product catalog with category search filtering and custom WhatsApp pricing query links.",
    "Responsive customer inquiry form with automated Gmail SMTP dispatch notifications and direct WhatsApp redirects.",
    "Passcode-protected admin dashboard enabling catalog CRUD operations and lead resolution logging.",
    "Server-side Cloudinary upload API with client-side file inputs and live thumbnail previews.",
    "System-wide persistent Light and Dark theme modes utilizing CSS variables and localStorage."
  ],
  github: "https://github.com/MahirKumar-coder/UjjwalIron",
  demo: "https://ujjwal-iron.vercel.app/",
  image: "/projects/ujjwaliron_showcase.png",
  glowColor: "rgba(37, 99, 235, 0.15)"
}
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Projects filtering and pagination states
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const categoriesList = [
    "All",
    "Web Application",
    "Developer Tool",
    "AI Integration",
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category.toLowerCase() === activeCategory.toLowerCase();
  });

  // Show up to 6 projects by default (two full rows of 3-column layout).
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqpzdkda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#c084fc", "#818cf8", "#22d3ee"],
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Formspree Error: " + (result.error || "Failed to submit message. Please try again."));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <>
      {/* 3D Particle Background */}
      <ThreeBg />

      {/* Floating Glassmorphic Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo-link">
          <img src="/logo.png" alt="M Logo" style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)' }} />
          <span>
            Mahir<span className="gradient-text-purple">.dev</span>
          </span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about" className="nav-link">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="/Mahir_Kumar_Resume.pdf"
          download="Mahir_Kumar_Resume.pdf"
          className="nav-btn"
        >
          <Download
            size={15}
            style={{ marginRight: "6px", display: "inline-vertical" }}
          />
          Resume
        </a>
      </nav>

      <main className="container">
        {/* HERO SECTION */}
        <section id="home" className="section">
          <div className="hero-wrapper">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="hero-tag">
                <Sparkles size={14} />
                <span>Available for Internships & Projects</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="hero-title">
                Hi, I'm <br />
                <span className="gradient-text">Mahir Kumar</span>
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="hero-subtitle">
                B.Tech Computer Science & Engineering
              </motion.h2>

              <motion.p variants={fadeInUp} className="hero-desc">
                An ambitious CSE student specializing in building responsive,
                full-stack web applications, integrating advanced generative AI
                systems, and solving complex algorithmic challenges.
              </motion.p>

              <motion.div variants={fadeInUp} className="hero-buttons">
                <a href="#projects" className="btn-primary">
                  <span>View Projects</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#contact" className="btn-secondary">
                  <span>Get In Touch</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Interactive 3D Card for Profile Picture */}
            <motion.div
              className="hero-image-area"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="portrait-glow-back" />
              <Card3D className="portrait-card" maxRotate={12}>
                <div className="portrait-img-wrapper">
                  <img
                    src={mahirProfileImg}
                    alt="Mahir Kumar Profile"
                    className="portrait-img"
                  />
                </div>
                <div className="portrait-info">
                  <div className="portrait-name">Mahir Kumar</div>
                  <div className="portrait-title">
                    Full Stack & AI Developer
                  </div>
                </div>
              </Card3D>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION TIMELINE */}
        <section id="about" className="section">
          <h2 className="section-title">
            <span className="gradient-text-purple">Education</span> Journey
          </h2>

          <div className="timeline">
            {/* Timeline Item 1 */}
            <motion.div
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="timeline-dot" />
              <div className="timeline-content-wrapper">
                <div className="timeline-card glass-panel">
                  <div className="timeline-meta">
                    <span>Expected 2027</span>
                    <span>Patna, Bihar</span>
                  </div>
                  <div className="timeline-school">Amity University</div>
                  <div className="timeline-degree">
                    Bachelor of Technology in Computer Science & Engineering
                  </div>
                  <div style={{ marginTop: "0.8rem" }}>
                    <span className="timeline-cgpa">CGPA: 6.21 / 10.0</span>
                  </div>
                  <p style={{ marginTop: "0.8rem", fontSize: "0.9rem" }}>
                    <strong>Relevant Coursework:</strong> Data Structures &
                    Algorithms, Database Management Systems (DBMS), Compiler
                    Design, Computer Networks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="timeline-dot" />
              <div className="timeline-content-wrapper">
                <div className="timeline-card glass-panel">
                  <div className="timeline-meta">
                    <span>Graduated 2023</span>
                    <span>Patna, Bihar</span>
                  </div>
                  <div className="timeline-school">
                    KPS Memorial High School
                  </div>
                  <div className="timeline-degree">
                    Intermediate (Class 12th)
                  </div>
                  <div style={{ marginTop: "0.8rem" }}>
                    <span
                      className="timeline-cgpa"
                      style={{
                        background: "rgba(192, 132, 252, 0.1)",
                        borderColor: "rgba(192, 132, 252, 0.25)",
                        color: "var(--color-accent-purple)",
                      }}
                    >
                      Score: 62%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="timeline-dot" />
              <div className="timeline-content-wrapper">
                <div className="timeline-card glass-panel">
                  <div className="timeline-meta">
                    <span>Graduated 2021</span>
                    <span>Patna, Bihar</span>
                  </div>
                  <div className="timeline-school">St. Karen's High School</div>
                  <div className="timeline-degree">
                    Matriculation (Class 10th)
                  </div>
                  <div style={{ marginTop: "0.8rem" }}>
                    <span className="timeline-cgpa">Score: 72%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <h2 className="section-title">
            Core <span className="gradient-text-blue">Competencies</span>
          </h2>

          <div className="skills-layout-grid">
            <motion.div
              className="skills-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Group 1: Languages */}
              <motion.div className="skills-group" variants={fadeInUp}>
                <div className="skills-group-title">
                  <Code2 size={18} className="gradient-text-purple" />
                  <span>Languages</span>
                </div>
                <div className="skills-grid">
                  <div className="skill-chip">JavaScript</div>
                  <div className="skill-chip">Java</div>
                  <div className="skill-chip">Python</div>
                  <div className="skill-chip">HTML5 / CSS3</div>
                </div>
              </motion.div>

              {/* Group 2: Frameworks & Libraries */}
              <motion.div className="skills-group" variants={fadeInUp}>
                <div className="skills-group-title">
                  <Layers size={18} className="gradient-text-blue" />
                  <span>Frameworks & Libraries</span>
                </div>
                <div className="skills-grid">
                  <div className="skill-chip">React.js (Vite)</div>
                  <div className="skill-chip">Node.js</div>
                  <div className="skill-chip">Express.js</div>
                  <div className="skill-chip">Tailwind CSS</div>
                </div>
              </motion.div>

              {/* Group 3: Databases */}
              <motion.div className="skills-group" variants={fadeInUp}>
                <div className="skills-group-title">
                  <Database size={18} className="gradient-text-purple" />
                  <span>Databases</span>
                </div>
                <div className="skills-grid">
                  <div className="skill-chip">MongoDB</div>
                  <div className="skill-chip">Mongoose ORM</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="skills-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Group 4: AI Integration */}
              <motion.div className="skills-group" variants={fadeInUp}>
                <div className="skills-group-title">
                  <Cpu size={18} className="gradient-text-blue" />
                  <span>AI Integration & Engineering</span>
                </div>
                <div className="skills-grid">
                  <div className="skill-chip">Google Gemini API</div>
                  <div className="skill-chip">Groq Cloud API</div>
                  <div className="skill-chip">Llama-3 Integration</div>
                  <div className="skill-chip">AI Prompt Design</div>
                </div>
              </motion.div>

              {/* Group 5: Tools & Deployment */}
              <motion.div className="skills-group" variants={fadeInUp}>
                <div className="skills-group-title">
                  <Wrench size={18} className="gradient-text-purple" />
                  <span>Tools & DevOps</span>
                </div>
                <div className="skills-grid">
                  <div className="skill-chip">Git / GitHub</div>
                  <div className="skill-chip">Docker</div>
                  <div className="skill-chip">Docker Compose</div>
                  <div className="skill-chip">Vercel</div>
                  <div className="skill-chip">Render</div>
                  <div className="skill-chip">Postman</div>
                  <div className="skill-chip">Puppeteer</div>
                  <div className="skill-chip">JWT</div>
                </div>
              </motion.div>

              {/* Group 6: Soft Skills */}
              <motion.div className="skills-group" variants={fadeInUp}>
                <div className="skills-group-title">
                  <Award size={18} className="gradient-text-blue" />
                  <span>Leadership & Management</span>
                </div>
                <div className="skills-grid">
                  <div className="skill-chip">Project Coordination</div>
                  <div className="skill-chip">Event Logistics</div>
                  <div className="skill-chip">Stakeholder Alignment</div>
                  <div className="skill-chip">Technical Documentation</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          {/* Category Filter Tabs */}
          <div className="project-filters">
            {categoriesList.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false); // reset showMore pagination
                }}
                className={`filter-tab ${activeCategory === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  style={{ cursor: "pointer", height: "100%" }}
                >
                  <Card3D
                    className="project-card glass-panel"
                    maxRotate={6}
                    glowColor={project.glowColor}
                  >
                    {project.image && (
                      <div className="project-image-wrapper">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-img"
                        />
                      </div>
                    )}
                    <div className="project-body">
                      <div className="project-header">
                        <div className="project-meta">
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              color: "var(--text-muted)",
                            }}
                          >
                            {project.category}
                          </span>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <div
                          className="project-tech-group"
                          style={{ marginTop: "0.4rem" }}
                        >
                          {project.tech.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="project-tech-tag">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span
                              className="project-tech-tag"
                              style={{
                                background: "rgba(255,255,255,0.02)",
                                color: "var(--text-secondary)",
                              }}
                            >
                              +{project.tech.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <p
                        className="project-desc"
                        style={{
                          fontSize: "0.9rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.desc}
                      </p>

                      <div
                        className="project-view-details"
                        style={{
                          marginTop: "auto",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          color: "var(--color-accent-cyan)",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                        }}
                      >
                        <span>View Details</span>
                        <ArrowRight size={14} className="details-arrow" />
                      </div>
                    </div>
                  </Card3D>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More / See All Button */}
          {filteredProjects.length > 6 && (
            <div className="projects-actions">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn-primary"
              >
                <span>
                  {showAll
                    ? "Show Less"
                    : `View All Projects (${filteredProjects.length})`}
                </span>
              </button>
            </div>
          )}

          {/* GitHub CTA Section */}
          <div className="projects-github-cta" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '500px' }}>
              Want to see more of my code? You can explore all of my repositories and projects on my GitHub profile.
            </p>
            <a 
              href="https://github.com/MahirKumar-coder" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}
            >
              <Github size={18} />
              <span>Explore My GitHub</span>
              <ExternalLink size={14} style={{ opacity: 0.7 }} />
            </a>
          </div>
        </section>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal-content glass-panel"
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 26, stiffness: 340 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="project-modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  &times;
                </button>

                <div className="project-modal-grid">
                  {selectedProject.image && (
                    <div className="project-modal-image-wrapper">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="project-modal-img"
                      />
                    </div>
                  )}

                  <div className="project-modal-body">
                    <div className="project-modal-header">
                      <span className="project-modal-category">
                        {selectedProject.category}
                      </span>
                      <h3 className="project-modal-title">
                        {selectedProject.title}
                      </h3>
                      <div
                        className="project-tech-group"
                        style={{ marginTop: "0.6rem" }}
                      >
                        {selectedProject.tech.map((t, idx) => (
                          <span key={idx} className="project-tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="project-modal-desc">{selectedProject.desc}</p>

                    <div className="project-modal-features-section">
                      <h4
                        style={{
                          marginBottom: "0.6rem",
                          fontSize: "0.95rem",
                          color: "var(--text-primary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Key Implementations
                      </h4>
                      <ul className="project-features">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx} className="project-feature-item">
                            <CheckCircle2
                              size={14}
                              style={{ color: "var(--color-accent-purple)" }}
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="project-links"
                      style={{ marginTop: "1.8rem" }}
                    >
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link-btn outline"
                      >
                        <Github size={16} />
                        <span>GitHub Code</span>
                      </a>
                      <a
                        href={selectedProject.demo}
                        className="project-link-btn primary"
                      >
                        <span>Try Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* EXTRACURRICULARS */}
        <section id="extracurriculars" className="section">
          <h2 className="section-title">
            Achievements &{" "}
            <span className="gradient-text-purple">Activities</span>
          </h2>

          <div className="extras-grid">
            <motion.div
              className="extra-card glass-panel"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="extra-icon-box">
                <Award size={24} />
              </div>
              <div className="extra-body">
                <div className="extra-title">Club AIKYAM</div>
                <div className="extra-subtitle">Core Member</div>
                <p style={{ fontSize: "0.9rem", marginTop: "0.2rem" }}>
                  Spearheaded cross-functional project coordination, end-to-end
                  event logistics, and stakeholder alignments for key
                  departmental gatherings and technical community events at
                  Amity University.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="extra-card glass-panel"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="extra-icon-box">
                <Code2 size={24} />
              </div>
              <div className="extra-body">
                <div className="extra-title">Problem Solving</div>
                <div className="extra-subtitle">Algorithmic Focus</div>
                <p style={{ fontSize: "0.9rem", marginTop: "0.2rem" }}>
                  Consistently engaged in solving complex data structure and
                  algorithm problems, focusing heavily on graph traversal and
                  pathfinding paradigms like Breadth-First Search (BFS),
                  Depth-First Search (DFS), and Graph Theory in Java.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <h2 className="section-title">
            Get in <span className="gradient-text-blue">Touch</span>
          </h2>

          <div className="contact-wrapper">
            <motion.div
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600 }}>
                Let's discuss a project!
              </h3>
              <p className="contact-header-text">
                I'm always excited to work on new projects, integrate smart AI
                functionality into apps, or join forces for hackathons. Feel
                free to shoot me an email or connect with me on socials!
              </p>

              <div className="contact-details">
                <a
                  href="mailto:mahirkumar748@gmail.com"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-text-label">Email Me</div>
                    <div className="contact-text-value">
                      mahirkumar748@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/mahir-kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="contact-text-label">LinkedIn</div>
                    <div className="contact-text-value">
                      linkedin.com/in/mahir-kumar
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/MahirKumar-coder"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="contact-text-label">GitHub</div>
                    <div className="contact-text-value">
                      github.com/MahirKumar-coder
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <form
                onSubmit={handleSubmit}
                className="contact-form glass-panel"
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    className="form-input"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="form-success-msg">
                    <Check size={18} />
                    <span>Message sent successfully! Confetti launched!</span>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © {new Date().getFullYear()} Mahir Kumar. Crafted with{" "}
            <span className="footer-heart">❤</span>, React, and Three.js.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
