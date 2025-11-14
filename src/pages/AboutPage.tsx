import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Meet the educators, researchers, and students powering The Music Pathways Project.
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
                The Music Pathways Project is powered by educators, researchers, and students at the University of Toronto Scarborough.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Together, we aim to make music careers visible, accessible, and inspiring for learners across Ontario and beyond.
              </p>
            </div>

            {/* Team Leads */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-8 text-center">
              Team Leads
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Lynn Tucker */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#002A5C]/10 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" 
                    alt="Lynn Tucker" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#002A5C] mb-1">Lynn Tucker</h3>
                <p className="text-sm text-gray-600">Team Lead</p>
              </div>

              {/* Laura Jane Menard */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#002A5C]/10 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" 
                    alt="Laura Jane Menard" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#002A5C] mb-1">Laura Jane Menard</h3>
                <p className="text-sm text-gray-600">Team Lead</p>
              </div>

              {/* Kyle Zavitz */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#002A5C]/10 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Kyle Zavitz" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#002A5C] mb-1">Kyle Zavitz</h3>
                <p className="text-sm text-gray-600">Team Lead</p>
              </div>
            </div>
            </div>

            {/* Current Team */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-8 text-center">
              Current Team
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#14779B]/20 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-[#002A5C] mb-1">Team Member</h3>
                <p className="text-xs text-gray-600">Role</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#14779B]/20 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-[#002A5C] mb-1">Team Member</h3>
                <p className="text-xs text-gray-600">Role</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#14779B]/20 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-[#002A5C] mb-1">Team Member</h3>
                <p className="text-xs text-gray-600">Role</p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#14779B]/20 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-[#002A5C] mb-1">Team Member</h3>
                <p className="text-xs text-gray-600">Role</p>
              </div>
            </div>
            </div>

            {/* Legacy Team */}
            <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-4">
              Legacy Team: "The Music and…" Project (2015)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The foundation of TMPP began with a passionate student volunteer group who shared their lived experiences navigating music in post-secondary education. Their perspectives shaped early understandings of the barriers and opportunities in music pathways.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              We honour their work as we continue expanding TMPP's research, resources, and tools.
            </p>
            </div>

            {/* Community Partners */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002A5C] mb-4">
              Community Partners
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TMPP is informed by the work of SoundLife Scarborough and connected initiatives at UTSC, including recent forums focused on accessible music pathways.
            </p>
            </div>

            {/* Get in Touch */}
            <div className="bg-gradient-to-br from-[#002A5C] to-[#001d3f] rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                We welcome collaboration, questions, and feedback.
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

export default AboutPage;
