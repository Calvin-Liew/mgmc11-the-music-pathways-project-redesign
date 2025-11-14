import React from 'react';
import { Link } from 'react-router-dom';

const ForStudentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              For Students
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover where your passion for music can take you.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 md:p-10 mb-12 border border-gray-100 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-4">
                What can you do with music?
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-[#002A5C] mb-4">
                What CAN'T you!
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Music in Canada is a $10.9B industry employing over 100,000 people across performance, production, health sciences, media, law, technology, business, education, and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 font-semibold">
                Start exploring where you might fit.
              </p>
            </div>

            {/* Explore Your Pathways */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-4">Explore Your Pathways</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Use the animated pathways map + chatbot to match your interests, strengths, and goals to real music careers.
              </p>
              <Link
                to="/pathways"
                className="inline-block px-6 py-3 bg-[#002A5C] text-white rounded-xl font-semibold hover:bg-[#001d3f] hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Launch Music Pathways Finder →
              </Link>
            </div>

            {/* Explore Programs */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-4">Explore Programs</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Music-related opportunities exist across many Ontario institutions — from degrees to certificates to interdisciplinary options.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-[#14779B] text-white rounded-xl font-semibold hover:bg-[#0f5f7a] hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Ontario Programs in Music →
              </a>
            </div>

            {/* Global Resources */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-4">Global Resources</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dive into videos, tools, and guides that showcase music careers around the world.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-[#14779B] text-white rounded-xl font-semibold hover:bg-[#0f5f7a] hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Music Career Resources →
              </a>
            </div>

            {/* Hear From Students */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-4">Hear From Students</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Learn from real post-secondary students who found their own unique paths in music. What inspired them? What challenges did they face? What advice do they have?
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-[#14779B] text-white rounded-xl font-semibold hover:bg-[#0f5f7a] hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Hear from Students →
              </a>
            </div>

            {/* Get in Touch */}
            <div className="bg-gradient-to-br from-[#002A5C] to-[#001d3f] rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Have questions or need help finding information?
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

export default ForStudentsPage;
