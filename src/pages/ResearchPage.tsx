import React from 'react';

const ResearchPage: React.FC = () => {
  const highlights = [
    'Primary interviews with senior high-school and post-secondary students',
    'Insights from music education literature',
    'Direct connections to Ontario curriculum expectations',
    'Consumer behaviour research on music career perceptions',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Grounded in Research. Built for Real Students.
            </h1>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 md:p-10 mb-12 border border-gray-100 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Music Pathways Project draws from comprehensive research on student attitudes toward music careers, perceived risk, and social influences. Our insights come from primary interviews with senior high-school and post-secondary students, analysis of music education literature, and direct connections to Ontario curriculum expectations.
              </p>
            </div>

            {/* Research Highlights */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-6">Research Highlights</h2>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#002A5C] mr-3 font-bold text-xl flex-shrink-0">•</span>
                    <span className="text-gray-700 text-lg leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#002A5C] to-[#001d3f] rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">View Research Details</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Access comprehensive research findings and curriculum connections.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-4 bg-white text-[#002A5C] rounded-xl font-semibold hover:bg-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                View Research Highlights (PDF or Quercus link) →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
