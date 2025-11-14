import React, { useState, useEffect } from 'react';

// Brand Colors
const COLORS = {
  primary: '#002A5C',
  accent: '#D12A2A',
  secondary: '#14779B', // Complementary teal-blue
  neutralLight: '#F8FAFC',
  neutralGray: '#E5E7EB',
  textDark: '#0F172A',
  white: '#FFFFFF',
};

// Copy Constants
const COPY = {
  siteName: 'The Music Pathways Project',
  siteSubtitle: 'University of Toronto Scarborough',
  hero: {
    title: 'Discover where music can take you.',
    subtitle: "Explore real music careers across performance, business, technology, health, media, and more. TMPP helps students find pathways grounded in today's evolving industry.",
    ctaPrimary: 'Explore Pathways',
    ctaSecondary: 'How TMPP Works',
  },
  about: {
    title: 'What Is The Music Pathways Project?',
    description: 'The Music Pathways Project (TMPP) based at the University of Toronto Scarborough is a research-informed initiative responding to the disconnect between student perceptions of music careers and the realities of a rapidly evolving music industry. TMPP grew out of classroom experiences and student inquiries that revealed a significant gap: students, families, and even educators often lack access to clear, up-to-date information about viable music-related career pathways and resources that connect directly to the Ontario Ministry of Education curriculum documents.',
    features: [
      {
        title: 'Research-Informed',
        description: 'Uses primary + secondary research on attitudes and behaviours toward music careers, including insights from consumer behaviour research.',
      },
      {
        title: 'Curriculum-Connected',
        description: 'Connects directly to Ontario Ministry of Education documents, including Grade 10 Career Studies expectations.',
      },
      {
        title: 'Student-Centered',
        description: 'Designed for students, families, and educators to imagine diverse, viable music futures beyond traditional paths.',
      },
    ],
  },
  pathways: {
    title: 'Explore Music Career Pathways',
    subtitle: 'More than "perform, teach, or quit."',
    categories: [
      {
        title: 'Performance & Creation',
        examples: ['Performer', 'Songwriter', 'Composer', 'Arranger'],
      },
      {
        title: 'Business & Management',
        examples: ['Artist Manager', 'Label Marketer', 'Promoter', 'Licensing'],
      },
      {
        title: 'Technology & Production',
        examples: ['Sound Engineer', 'Producer', 'Game Audio', 'Live Sound'],
      },
      {
        title: 'Education & Community',
        examples: ['Music Educator', 'Community Arts Coordinator'],
      },
      {
        title: 'Media & Storytelling',
        examples: ['Music Journalist', 'Content Creator', 'Sync Supervisor'],
      },
      {
        title: 'Interdisciplinary & Emerging',
        examples: ['Music + Tech', 'Music Therapy', 'Music Data', 'Music UX'],
      },
    ],
  },
  audience: {
    intro: 'We invite you to explore and connect!',
    students: {
      title: 'For Students',
      description: 'Thinking about next steps as you head towards graduation? Explore the full range of ways you can continue to grow your passion for music.',
      cta: 'Resources for Students',
      points: [
        'Discover diverse music career options beyond performance',
        'See real stories and pathways from industry professionals',
        'Reduce perceived risk by understanding viable career paths',
        'Connect to post-secondary programs that align with your interests',
      ],
    },
    educators: {
      title: 'For Educators',
      description: 'Access relevant resources to share with your students to ignite their imaginations. Together, explore the diversity of music pathways, for career and for life.',
      cta: 'Resources for Educators',
      points: [
        'Access curriculum-aligned resources and classroom modules',
        'Use research-backed activities to engage students',
        'Link to TMPP research and evidence-based insights',
        'Support students in exploring music career pathways',
      ],
    },
    families: {
      title: 'For Families & Guardians',
      points: [
        'Demystify music careers and understand diverse pathways',
        'Learn about financial and educational pathways in music',
        'Support informed choices with research-backed information',
        'Explore how music careers connect to Ontario curriculum',
      ],
    },
  },
  research: {
    title: 'Grounded in Research. Built for Real Students.',
    description: 'The Music Pathways Project draws from comprehensive research on student attitudes toward music careers, perceived risk, and social influences. Our insights come from primary interviews with senior high-school and post-secondary students, analysis of music education literature, and direct connections to Ontario curriculum expectations.',
    highlights: [
      'Primary interviews with senior high-school and post-secondary students',
      'Insights from music education literature',
      'Direct connections to Ontario curriculum expectations',
      'Consumer behaviour research on music career perceptions',
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      {
        title: 'Explore Pathways',
        description: 'Browse diverse music career categories and discover roles you never knew existed.',
      },
      {
        title: 'Connect to Programs',
        description: 'Find post-secondary programs and educational pathways that align with your interests.',
      },
      {
        title: 'Plan Next Steps',
        description: 'Access resources and guidance to help you take concrete steps toward your music career goals.',
      },
    ],
  },
  testimonial: {
    quote: 'I always thought music meant becoming a performer or teacher. TMPP showed me there are so many other ways to build a career in music that I never considered.',
    author: '— Student Participant',
  },
  cta: {
    title: 'Get in Touch',
    subtitle: 'Got questions about the Project? Feedback? A resource you think should be added? Let us know!',
    primary: 'Contact Us',
    secondary: 'Explore Pathways',
  },
};

// Career Pathways Slider Component
const CareerPathwaysSlider: React.FC<{ onPathwayClick?: (pathwayId: string) => void }> = ({ onPathwayClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [progress, setProgress] = useState(0);

  const AUTO_ROTATE_INTERVAL = 6000; // 6 seconds

  const pathways = [
    {
      id: 'Performance',
      name: 'Performance',
      description: 'Careers centered on creating, performing, and interpreting music in live or recorded settings.',
      careers: ['Performer', 'Studio Musician', 'Conductor', 'Composer', 'Arranger', 'Touring Artist'],
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 'Education',
      name: 'Education',
      description: 'Roles focused on teaching, mentoring, and fostering musical growth across ages and settings.',
      careers: ['Music Teacher', 'Private Instructor', 'Ensemble Director', 'Curriculum Developer', 'Music Therapist (educational context)'],
      image: 'https://images.pexels.com/photos/8192085/pexels-photo-8192085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      id: 'Business',
      name: 'Business',
      description: 'The strategic and operational side of the music industry—marketing, management, finance, and leadership.',
      careers: ['Artist Manager', 'A&R Coordinator', 'Marketing Strategist', 'Label Operations', 'Licensing Manager'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 'Music Production',
      name: 'Music Production',
      description: 'Technical and creative roles involved in shaping recorded sound and onscreen audio experiences.',
      careers: ['Producer', 'Recording Engineer', 'Mixing Engineer', 'Sound Designer', 'Live Sound Tech'],
      image: 'https://images.pexels.com/photos/3916376/pexels-photo-3916376.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      id: 'Music Publishing',
      name: 'Music Publishing',
      description: 'Behind-the-scenes roles protecting rights, managing royalties, and supporting songwriters and catalog owners.',
      careers: ['Publishing Administrator', 'Copyright Specialist', 'Sync Licensing Coordinator', 'Royalty Analyst'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 'Health Sciences',
      name: 'Health Sciences',
      description: 'Careers blending music with health, rehabilitation, and scientific research.',
      careers: ['Music Therapist', 'Audiologist', 'Hearing Scientist', 'Arts & Health Researcher'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 'Entertainment Law',
      name: 'Entertainment Law',
      description: 'Legal professionals who protect creative rights, negotiate contracts, and support artists and companies.',
      careers: ['Entertainment Lawyer', 'Contract Specialist', 'Rights & IP Consultant', 'Artist Advocate'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 'Media & Entertainment',
      name: 'Media & Entertainment',
      description: 'Creative careers at the intersection of music, storytelling, and digital media.',
      careers: ['Music Supervisor', 'Content Creator', 'Video Editor', 'Broadcaster', 'Social Media Producer'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80',
    },
  ];

  const currentPathway = pathways[currentIndex];

  // Progress bar animation
  useEffect(() => {
    if (userInteracted || !isAutoRotating) {
      setProgress(0);
      return;
    }

    setProgress(0);
    const startTime = Date.now();
    
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / AUTO_ROTATE_INTERVAL) * 100, 100);
      setProgress(newProgress);
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(progressInterval);
  }, [currentIndex, userInteracted, isAutoRotating]);

  // Auto-rotation
  useEffect(() => {
    if (userInteracted || !isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pathways.length);
      setProgress(0);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [userInteracted, isAutoRotating, pathways.length]);

  const goToNext = () => {
    setUserInteracted(true);
    setIsAutoRotating(false);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % pathways.length);
  };

  const goToPrevious = () => {
    setUserInteracted(true);
    setIsAutoRotating(false);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + pathways.length) % pathways.length);
  };

  const goToSlide = (index: number) => {
    setUserInteracted(true);
    setIsAutoRotating(false);
    setProgress(0);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Main Card: Image + Info Combined - More Compact */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)' }}>
        {/* Image Section - Reduced Height */}
        <div className="relative h-40 md:h-48 lg:h-52 w-full overflow-hidden">
          {pathways.map((pathway, index) => (
            <div
              key={pathway.id}
              className={`absolute inset-0 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transition: 'opacity 1.5s ease-in-out' }}
            >
              <img
                src={pathway.image}
                alt={pathway.name}
                className="w-full h-full object-cover scale-105"
                style={{ transition: 'transform 1.5s ease-in-out' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              
              {/* Navigation Arrows - Smaller */}
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 z-10 backdrop-blur-sm border border-gray-200/50"
                aria-label="Previous pathway"
              >
                <svg className="w-5 h-5 text-[#002A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 z-10 backdrop-blur-sm border border-gray-200/50"
                aria-label="Next pathway"
              >
                <svg className="w-5 h-5 text-[#002A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Counter - Smaller */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20">
                {index + 1} / {pathways.length}
              </div>
            </div>
          ))}
        </div>

        {/* Auto-rotate Progress Bar */}
        {isAutoRotating && !userInteracted && (
          <div className="absolute top-0 left-0 right-0 z-20">
            <div className="h-1.5 bg-gray-200/50">
              <div
                className="h-full bg-gradient-to-r from-[#002A5C] to-[#001d3f] transition-all duration-75 ease-linear shadow-sm"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Info Section - More Compact */}
        <div className="p-5 md:p-6 bg-gradient-to-b from-white to-gray-50/50">
          <div className="mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-[#002A5C] to-[#002A5C]/60 rounded-full mb-4"></div>
            <h3 className="text-xl md:text-2xl font-bold text-[#002A5C] mb-3 leading-tight">
              {currentPathway.name}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
              {currentPathway.description}
            </p>
          </div>

          <div className="space-y-3 mb-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Example Careers</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentPathway.careers.map((career, index) => (
                <li key={index} className="text-xs md:text-sm text-gray-700 flex items-center group cursor-default">
                  <span className="text-[#002A5C] mr-2 font-bold text-sm group-hover:scale-125 transition-transform flex-shrink-0">•</span>
                  <span className="group-hover:text-[#002A5C] transition-colors font-medium leading-relaxed">{career}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => {
              if (onPathwayClick) {
                onPathwayClick(currentPathway.id);
              }
            }}
            className="w-full px-6 py-3 bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white rounded-xl font-semibold hover:from-[#001d3f] hover:to-[#002A5C] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
          >
            Explore {currentPathway.name} Pathways →
          </button>
        </div>

        {/* Bottom Indicator Dots */}
        <div className="flex flex-col items-center gap-2 pb-5 px-6 bg-gray-50/30">
          <div className="flex justify-center gap-2.5">
            {pathways.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#002A5C] w-10 shadow-md'
                    : 'bg-gray-300 w-2 hover:bg-gray-400 hover:w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {isAutoRotating && !userInteracted && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 bg-[#002A5C] rounded-full animate-pulse"></div>
              <span>Auto-rotating • Next in {Math.max(1, Math.ceil((AUTO_ROTATE_INTERVAL - (progress / 100) * AUTO_ROTATE_INTERVAL) / 1000))}s</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MusicPathwaysLandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'students' | 'educators' | 'families'>('students');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userType: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend API
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      userType: '',
      message: '',
    });
    // Reset submitted state after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/MPP.png" 
                alt="The Music Pathways Project" 
                className="h-8 md:h-10 w-auto object-contain"
                style={{ display: 'block' }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-gray-700 hover:text-[#002A5C] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('pathways')}
                className="text-sm font-medium text-gray-700 hover:text-[#002A5C] transition-colors"
              >
                Pathways
              </button>
              <button
                onClick={() => scrollToSection('audience')}
                className="text-sm font-medium text-gray-700 hover:text-[#002A5C] transition-colors"
              >
                For Students
              </button>
              <button
                onClick={() => scrollToSection('audience')}
                className="text-sm font-medium text-gray-700 hover:text-[#002A5C] transition-colors"
              >
                For Educators
              </button>
              <button
                onClick={() => scrollToSection('research')}
                className="text-sm font-medium text-gray-700 hover:text-[#002A5C] transition-colors"
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-gray-700 hover:text-[#002A5C] transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('pathways')}
                className="px-4 py-2 bg-[#002A5C] text-white rounded-lg font-medium hover:bg-[#001d3f] hover:shadow-md transition-all"
              >
                Explore Pathways
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('pathways')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Pathways
              </button>
              <button
                onClick={() => scrollToSection('audience')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                For Students
              </button>
              <button
                onClick={() => scrollToSection('audience')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                For Educators
              </button>
              <button
                onClick={() => scrollToSection('research')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('pathways')}
                className="block w-full mx-4 px-4 py-2 bg-[#002A5C] text-white rounded-lg font-medium"
              >
                Explore Pathways
              </button>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full bg-[#002A5C] overflow-hidden">
          {/* Trails SVG - Bottom Left */}
          <div className="absolute bottom-0 left-[40%] -translate-x-1/2 pointer-events-none z-0 opacity-20">
            <img 
              src="/trails.svg" 
              alt="" 
              className="w-auto h-[50vh] md:h-[55vh] lg:h-[60vh] object-contain"
            />
          </div>
          
          {/* Line SVG - Top Left */}
          <div className="absolute top-0 left-0 pointer-events-none z-0 opacity-20">
            <img 
              src="/line.svg" 
              alt="" 
              className="w-auto h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-contain"
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            {/* Left Column - Centered */}
            <div className="relative flex flex-col justify-center space-y-5 lg:space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-5 text-white drop-shadow-lg">
                  {COPY.hero.title}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-md">
                  {COPY.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => scrollToSection('pathways')}
                  className="px-6 py-3 bg-white text-[#002A5C] rounded-xl font-semibold hover:bg-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm md:text-base shadow-lg"
                >
                  {COPY.hero.ctaPrimary}
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#002A5C] hover:shadow-lg transition-all text-sm md:text-base"
                >
                  {COPY.hero.ctaSecondary}
                </button>
              </div>
            </div>

            {/* Right Column - Career Pathways Slider - More Compact */}
            <div className="relative flex items-center">
              <CareerPathwaysSlider onPathwayClick={() => scrollToSection('pathways')} />
            </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-[#F8FAFC] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 text-center">
              {COPY.about.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center leading-relaxed">
              {COPY.about.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {COPY.about.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-[#002A5C] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pathways Section */}
        <section id="pathways" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 text-center">
              {COPY.pathways.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              {COPY.pathways.subtitle}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COPY.pathways.categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#002A5C] hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#F8FAFC] text-gray-700 rounded-full text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section id="audience" className="bg-[#F8FAFC] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 text-center">
              For Students, Educators, Families
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              {COPY.audience.intro}
            </p>
            {/* Tabs */}
            <div className="flex justify-center mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('students')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'students'
                    ? 'text-[#002A5C] border-b-2 border-[#002A5C]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Students
              </button>
              <button
                onClick={() => setActiveTab('educators')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'educators'
                    ? 'text-[#002A5C] border-b-2 border-[#002A5C]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Educators
              </button>
              <button
                onClick={() => setActiveTab('families')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'families'
                    ? 'text-[#002A5C] border-b-2 border-[#002A5C]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Families
              </button>
            </div>
            {/* Tab Content */}
            <div className="max-w-3xl mx-auto">
              {activeTab === 'students' && (
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-[#002A5C] mb-4">
                    {COPY.audience.students.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {COPY.audience.students.description}
                  </p>
                  <ul className="space-y-4 mb-6">
                    {COPY.audience.students.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#002A5C] mr-3 mt-1">•</span>
                        <span className="text-gray-700 text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 bg-[#14779B] text-white rounded-xl font-semibold hover:bg-[#0f5f7a] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {COPY.audience.students.cta}
                  </button>
                </div>
              )}
              {activeTab === 'educators' && (
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-[#002A5C] mb-4">
                    {COPY.audience.educators.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {COPY.audience.educators.description}
                  </p>
                  <ul className="space-y-4 mb-6">
                    {COPY.audience.educators.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#002A5C] mr-3 mt-1">•</span>
                        <span className="text-gray-700 text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 bg-[#14779B] text-white rounded-xl font-semibold hover:bg-[#0f5f7a] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {COPY.audience.educators.cta}
                  </button>
                </div>
              )}
              {activeTab === 'families' && (
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-[#002A5C] mb-6">
                    {COPY.audience.families.title}
                  </h3>
                  <ul className="space-y-4">
                    {COPY.audience.families.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#002A5C] mr-3 mt-1">•</span>
                        <span className="text-gray-700 text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12 text-center">
              {COPY.research.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {COPY.research.description}
                </p>
                <a
                  href="#"
                  className="inline-block text-[#002A5C] font-medium hover:underline"
                >
                  View research highlights (PDF or Quercus link) →
                </a>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-6 space-y-4">
                {COPY.research.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#002A5C] rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-[#F8FAFC] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12 text-center">
              {COPY.howItWorks.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {COPY.howItWorks.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#002A5C] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#002A5C]/5 to-[#D12A2A]/5 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D12A2A]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <blockquote className="text-xl md:text-2xl text-gray-800 italic max-w-3xl mx-auto text-center">
              "{COPY.testimonial.quote}"
            </blockquote>
            <p className="text-center text-gray-600 mt-4">{COPY.testimonial.author}</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="bg-[#F8FAFC] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 text-center">
                {COPY.cta.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                {COPY.cta.subtitle}
              </p>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#002A5C] mb-2">Thank you!</h3>
                    <p className="text-gray-600">Your message has been submitted successfully.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name <span className="text-[#D12A2A]">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First"
                          value={formData.firstName}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last"
                          value={formData.lastName}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-[#D12A2A]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Help us learn more about you */}
                    <div>
                      <label htmlFor="userType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Help us learn more about you <span className="text-[#D12A2A]">*</span>
                      </label>
                      <p className="text-sm text-gray-500 mb-3">To help us improve our resources, we would love to know more about our users.</p>
                      <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Select an option</option>
                        <option value="teacher-primary">Teacher, Primary</option>
                        <option value="teacher-intermediate">Teacher, Intermediate</option>
                        <option value="teacher-secondary">Teacher, Secondary</option>
                        <option value="instructor-college">Instructor or Professor, College</option>
                        <option value="instructor-university">Instructor or Professor, University</option>
                        <option value="private-instructor">Private Instructor</option>
                        <option value="guidance-counselor">Guidance Counselor</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">I prefer not to say</option>
                      </select>
                    </div>

                    {/* Comment/Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Comment or Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors resize-none"
                        placeholder="Do you have questions or comments? Did you find other resources you think we should add to the roster?"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-[#002A5C] text-white rounded-xl font-semibold hover:bg-[#001d3f] hover:shadow-xl transition-all transform hover:-translate-y-1 text-base md:text-lg"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-xl font-bold mb-2">{COPY.siteName}</div>
              <div className="text-sm text-gray-400 mb-4">{COPY.siteSubtitle}</div>
              <p className="text-sm text-gray-400">
                The Music Pathways Project (TMPP) based at the University of Toronto Scarborough is a research-informed initiative responding to the disconnect between student perceptions of music careers and the realities of a rapidly evolving music industry.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">IMPORTANT LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('educators');
                      scrollToSection('audience');
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    For Educators
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('students');
                      scrollToSection('audience');
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    For Students
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} The Music Pathways Project
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MusicPathwaysLandingPage;

