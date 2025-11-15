import React from 'react';
import { Link } from 'react-router-dom';
import CareerPathwaysSlider from '../components/CareerPathwaysSlider';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#002A5C] overflow-hidden h-screen flex flex-col">
        {/* Decorative SVGs - Hidden on mobile for cleaner look */}
        <div className="hidden md:block absolute bottom-0 left-[40%] -translate-x-1/2 pointer-events-none z-0 opacity-20">
          <img 
            src="/trails.svg" 
            alt="" 
            className="w-auto h-[55vh] lg:h-[60vh] object-contain"
          />
        </div>
        
        <div className="hidden md:block absolute top-0 left-0 pointer-events-none z-0 opacity-20">
          <img 
            src="/line.svg" 
            alt="" 
            className="w-auto h-auto max-h-[400px] lg:max-h-[500px] object-contain"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-10 flex-1 flex flex-col justify-center">
          <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 xl:gap-20 items-center">
            {/* Text Content - First on mobile */}
            <div className="relative flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-8 order-1 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white drop-shadow-lg">
                  Discover where music <span className="text-[#FF3D5C]">can take you.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Explore real music careers across performance, business, technology, health, media, and more.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-1 sm:pt-2">
                <Link
                  to="/pathways"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-[#002A5C] rounded-xl font-semibold hover:bg-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm sm:text-base shadow-lg text-center"
                >
                  Explore Pathways
                </Link>
                <Link
                  to="/about"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#002A5C] hover:shadow-lg transition-all text-sm sm:text-base text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Slider - Second on mobile */}
            <div className="relative flex items-center justify-center order-2 mt-2 sm:mt-0">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none">
                <CareerPathwaysSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Visual Bar Style */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#002A5C] mb-2 sm:mb-3">30+</div>
                <div className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">Career Pathways</div>
                <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-[#002A5C] to-[#14779B] mx-auto rounded-full"></div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#002A5C] mb-2 sm:mb-3">100%</div>
                <div className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">Research-Informed</div>
                <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-[#002A5C] to-[#14779B] mx-auto rounded-full"></div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#002A5C] mb-2 sm:mb-3">✓</div>
                <div className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">Curriculum-Aligned</div>
                <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-[#002A5C] to-[#14779B] mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 sm:mb-6">
                  What Is The Music Pathways Project?
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  The Music Pathways Project (TMPP) based at the University of Toronto Scarborough is a research-informed initiative responding to the disconnect between student perceptions of music careers and the realities of a rapidly evolving music industry.
                </p>
                <Link
                  to="/about"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#002A5C] text-white rounded-xl font-semibold hover:bg-[#001d3f] hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  Learn More About TMPP →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-xl border-l-4 border-[#002A5C]">
                  <div className="w-12 h-12 bg-[#002A5C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#002A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002A5C] mb-2">Research-Informed</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Uses primary + secondary research on attitudes and behaviours toward music careers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-xl border-l-4 border-[#14779B]">
                  <div className="w-12 h-12 bg-[#14779B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#14779B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002A5C] mb-2">Curriculum-Connected</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Connects directly to Ontario Ministry of Education documents, including Grade 10 Career Studies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-xl border-l-4 border-[#FF3D5C]">
                  <div className="w-12 h-12 bg-[#FF3D5C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FF3D5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002A5C] mb-2">Student-Centered</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Designed for students, families, and educators to imagine diverse, viable music futures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Section - Visual Emphasis */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#002A5C] to-[#001d3f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#14779B] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 backdrop-blur-sm">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Explore Music Career Pathways
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-3 sm:mb-4 font-medium">
              More than "perform, teach, or quit."
            </p>
            <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Discover diverse career pathways across performance, business, technology, education, health sciences, and more. Each pathway connects directly to the Ontario curriculum and real-world opportunities.
            </p>
            <Link
              to="/pathways"
              className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-[#002A5C] rounded-xl font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1 text-base sm:text-lg shadow-xl"
            >
              Explore All Pathways →
            </Link>
          </div>
        </div>
      </section>

      {/* Audience Section - Side by Side Cards */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-3 sm:mb-4">
                For Students, Educators, Families
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Resources tailored to your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-white p-10 border-2 border-gray-100 hover:border-[#002A5C]/30 transition-all hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#14779B]/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-[#14779B]/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#14779B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002A5C] mb-4">For Students</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    Thinking about next steps as you head towards graduation? Explore the full range of ways you can continue to grow your passion for music.
                  </p>
                  <Link
                    to="/for-students"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#14779B] text-white rounded-xl font-semibold hover:bg-[#0f5f7a] hover:shadow-xl transition-all group-hover:translate-x-1"
                  >
                    Resources for Students
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-white p-10 border-2 border-gray-100 hover:border-[#002A5C]/30 transition-all hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#14779B]/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-[#14779B]/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#14779B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002A5C] mb-4">For Educators</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    Access relevant resources to share with your students to ignite their imaginations. Together, explore the diversity of music pathways, for career and for life.
                  </p>
                  <Link
                    to="/for-educators"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#14779B] text-white rounded-xl font-semibold hover:bg-[#0f5f7a] hover:shadow-xl transition-all group-hover:translate-x-1"
                  >
                    Resources for Educators
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Horizontal Flow */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-3 sm:mb-4">
                How It Works
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Three simple steps to discover your music career pathway
              </p>
            </div>
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#002A5C] via-[#14779B] to-[#002A5C]"></div>
              
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#002A5C] to-[#001d3f] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002A5C] mb-4 text-center">Explore Pathways</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Browse diverse music career categories and discover roles you never knew existed.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#002A5C] to-[#001d3f] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002A5C] mb-4 text-center">Connect to Programs</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Find post-secondary programs and educational pathways that align with your interests.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#002A5C] to-[#001d3f] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002A5C] mb-4 text-center">Plan Next Steps</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Access resources and guidance to help you take concrete steps toward your music career goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section - Split with Visual */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div>
                <div className="inline-block w-16 h-16 bg-[#002A5C]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#002A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                  Grounded in Research. Built for Real Students.
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The Music Pathways Project draws from comprehensive research on student attitudes toward music careers, perceived risk, and social influences. Our insights come from primary interviews with senior high-school and post-secondary students, analysis of music education literature, and direct connections to Ontario curriculum expectations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-10 border-2 border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#002A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Primary interviews with senior high-school and post-secondary students</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#14779B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Insights from music education literature</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#002A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Direct connections to Ontario curriculum expectations</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#FF3D5C] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Consumer behaviour research on music career perceptions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Full Width Accent */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-r from-[#FF3D5C]/10 via-[#14779B]/10 to-[#002A5C]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#FF3D5C] mx-auto mb-6 sm:mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-4 sm:mb-6 px-4">
                "I always thought music meant becoming a performer or teacher. TMPP showed me there are so many other ways to build a career in music that I never considered."
              </blockquote>
              <p className="text-base sm:text-lg text-gray-600 font-semibold">— Student Participant</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#002A5C] to-[#001d3f] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Explore?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Start discovering music career pathways today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/pathways"
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-[#002A5C] rounded-xl font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1 text-base sm:text-lg shadow-xl"
            >
              Start Exploring Pathways
            </Link>
            <Link
              to="/contact"
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#14779B] text-white rounded-xl font-semibold hover:bg-[#0f5f7a] hover:shadow-2xl transition-all transform hover:-translate-y-1 text-base sm:text-lg shadow-xl"
            >
              Contact the TMPP Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
