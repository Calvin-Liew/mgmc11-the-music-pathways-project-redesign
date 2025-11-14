import React from 'react';
import { Link } from 'react-router-dom';

const ForEducatorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              For Educators
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Support your students in discovering meaningful, modern careers in music.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 md:p-10 mb-12 border border-gray-100 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Music Pathways Project offers curriculum-aligned resources, pathways maps, student stories, and tools that make teaching career exploration easier.
              </p>
            </div>

            {/* Curriculum Connections */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-4">
                Curriculum Connections
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The Ontario Ministry of Education includes career-related expectations in Grades 9–12 Music.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We help bridge these expectations with clear examples, real roles, and updated industry insight.
              </p>
            </div>

            {/* Resources to Use in Class */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-8 text-center">
                Resources to Use in Class
              </h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Music Career Resources */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#002A5C]/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#002A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#002A5C] mb-3">Music Career Resources</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    A curated set of international and Canadian materials to broaden students' understanding of what music careers look like today.
                  </p>
                  <a
                    href="#"
                    className="text-[#002A5C] font-semibold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Explore Resources →
                  </a>
                </div>

                {/* Ontario Post-Secondary Programs */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#002A5C]/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#002A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#002A5C] mb-3">Ontario Post-Secondary Programs</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    An organized list of music-related and music-adjacent programs available across the province.
                  </p>
                  <a
                    href="#"
                    className="text-[#002A5C] font-semibold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    View Programs →
                  </a>
                </div>

                {/* Pathways Map + Chatbot */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#002A5C]/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#002A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#002A5C] mb-3">Pathways Map + Chatbot</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Use our interactive tool to support career exploration activities during lessons or workshops.
                  </p>
                  <Link
                    to="/pathways"
                    className="text-[#002A5C] font-semibold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Try Interactive Tool →
                  </Link>
                </div>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="bg-gradient-to-br from-[#002A5C] to-[#001d3f] rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Want to collaborate or share feedback? We welcome educator insights.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-[#002A5C] rounded-xl font-semibold hover:bg-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForEducatorsPage;
