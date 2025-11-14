import React from 'react';
import CareerPathwaysSlider from '../components/CareerPathwaysSlider';

const PathwaysPage: React.FC = () => {
  const categories = [
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
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Explore Music Career Pathways
            </h1>
            <p className="text-xl text-gray-600">
              More than "perform, teach, or quit."
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <CareerPathwaysSlider />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#002A5C] hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-[#002A5C] mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center">
                      <span className="text-[#002A5C] mr-2 font-bold">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PathwaysPage;

