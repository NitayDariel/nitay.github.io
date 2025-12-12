import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Linkedin, Github } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import DarkModeToggle from '../components/DarkModeToggle';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Hide loading screen after app is ready
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.remove();
      }, 400);
    }
  }, []);

  const projects = [
    {
      id: 1,
      slug: "finance-dashboard",
      title: "ETF Correlation Analyzer",
      category: "Quantitative Finance & Research",
      description: "A research-grade ETF correlation discovery system with algorithmic pair selection and statistical validation. The core innovation is detecting lagged correlation clusters between ETFs—identifying time-delayed relationships (±60 days) where one ETF's movement may predict another's. Features Fama-French factor preprocessing, multiple correlation algorithms (Pearson, Spearman, Cross-Correlation), and interactive Streamlit dashboards with lag pattern visualizations, trading intelligence, and risk assessment tools.",
      images: [
        "/nitay.github.io/images/etf-cli.png",
        "/nitay.github.io/images/etf-dashboard.png",
        "/nitay.github.io/images/etf-lag-analysis.png",
        "/nitay.github.io/images/etf-trading.png"
      ],
      technologies: ["Python", "Lagged Correlation Analysis", "Fama-French Factors", "Statistical Validation", "Streamlit Dashboard"],
      github: "https://github.com/NitayDariel/ETFanalyzer"
    },
    {
      id: 2,
      slug: "ai-english-tutor",
      title: "Unseenio - AI English Learning Platform",
      category: "Education Technology",
      description: "A comprehensive AI-powered English learning platform featuring Dr. Jessy, an intelligent AI tutor that provides personalized guidance. Includes reading comprehension exercises (Unseens), essay writing practice, grammar drills, and vocabulary building modules. Students receive instant feedback, adaptive difficulty levels, and progress tracking to master English effectively.",
      images: [
        "/nitay.github.io/images/unseenio-home.png",
        "/nitay.github.io/images/unseenio-reading.png",
        "/nitay.github.io/images/unseenio-questions.png",
        "/nitay.github.io/images/unseenio-tutor.png"
      ],
      technologies: ["AI Tutor", "Reading Comprehension", "Essay Writing", "Grammar & Vocabulary", "Adaptive Learning"],
      link: "https://unseenio.com"
    },
    {
      id: 3,
      slug: "security-framework",
      title: "Cyber Offense Framework",
      category: "Cybersecurity",
      description: "An advanced framework designed to simulate cyber attacks and penetration testing scenarios. Simulate MITRE ATT&CK phishing tactics and variations.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      technologies: ["Penetration Testing", "Threat Simulation", "Security Analysis"]
    }
  ];

  const scrollToProject = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              Nitay's <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="mailto:nitay446@gmail.com" className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-medium">nitay446@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/nitaydariel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl" data-aos="fade-up">
            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-none">
              Nitay's Website
            </h1>
            <div className="space-y-6">
              <p className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Currently interested in <span className="text-blue-600 dark:text-blue-400 font-medium">Research Analyst job, leveraging AI tools.</span>
              </p>
              <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Introduction */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            Those are my latest projects:
          </h2>
          <div 
            className="h-1 w-32 bg-blue-600 dark:bg-blue-400 rounded-full mb-8"
            data-aos="fade-right"
            data-aos-delay="200"
          ></div>
          
          {/* Project Navigation Buttons */}
          <div 
            className="flex flex-wrap gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              onClick={() => scrollToProject('finance-dashboard')}
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-blue-600 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              ETF Analyzer
            </button>
            <button
              onClick={() => scrollToProject('ai-english-tutor')}
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-blue-600 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Unseenio
            </button>
            <button
              onClick={() => scrollToProject('security-framework')}
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-blue-600 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Security Framework
            </button>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 px-6 lg:px-12 mt-32 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-up">
              <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-400 dark:text-slate-500 text-lg mb-6">
                Interested in collaborating? Get in touch.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start md:items-end gap-4" data-aos="fade-up" data-aos-delay="200">
              <a href="mailto:nitay446@gmail.com" className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors text-lg">
                nitay446@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/nitaydariel/" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors text-lg">
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 dark:border-slate-800 text-center text-slate-500 dark:text-slate-600">
            <p>© 2025 Nitay. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

