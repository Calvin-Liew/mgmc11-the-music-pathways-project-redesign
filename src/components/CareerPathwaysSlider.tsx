import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CareerPathwaysSliderProps {
  onPathwayClick?: (pathwayId: string) => void;
  disableAutoRotate?: boolean;
  activePathwayId?: string | null;
}

const CareerPathwaysSlider: React.FC<CareerPathwaysSliderProps> = ({ onPathwayClick, disableAutoRotate = false, activePathwayId = null }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(!disableAutoRotate);
  const [userInteracted, setUserInteracted] = useState(false);
  const [progress, setProgress] = useState(0);

  const AUTO_ROTATE_INTERVAL = 8000; // 8 seconds

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
      description: 'The strategic and operational side of the music industry: marketing, management, finance, and leadership.',
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

  // Sync with active pathway from map
  useEffect(() => {
    if (activePathwayId) {
      const index = pathways.findIndex(p => p.id === activePathwayId);
      if (index !== -1 && index !== currentIndex) {
        setCurrentIndex(index);
        setUserInteracted(true);
        setIsAutoRotating(false);
      }
    }
  }, [activePathwayId, currentIndex]);

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
    }, 50);

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
    const nextIndex = (currentIndex + 1) % pathways.length;
    setCurrentIndex(nextIndex);
    // Trigger map update
    if (onPathwayClick) {
      onPathwayClick(pathways[nextIndex].id);
    }
  };

  const goToPrevious = () => {
    setUserInteracted(true);
    setIsAutoRotating(false);
    setProgress(0);
    const prevIndex = (currentIndex - 1 + pathways.length) % pathways.length;
    setCurrentIndex(prevIndex);
    // Trigger map update
    if (onPathwayClick) {
      onPathwayClick(pathways[prevIndex].id);
    }
  };

  const goToSlide = (index: number) => {
    setUserInteracted(true);
    setIsAutoRotating(false);
    setProgress(0);
    setCurrentIndex(index);
    // Trigger map update
    if (onPathwayClick) {
      onPathwayClick(pathways[index].id);
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-white/20 sm:border-2 backdrop-blur-sm" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)' }}>
        <div className="relative h-32 sm:h-40 md:h-48 lg:h-52 w-full overflow-hidden">
          {pathways.map((pathway, index) => (
            <div
              key={pathway.id}
              className={`absolute inset-0 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              style={{ 
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <img
                src={pathway.image}
                alt={pathway.name}
                className="w-full h-full object-cover"
                style={{ 
                  transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              
              <button
                onClick={goToPrevious}
                className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg sm:shadow-xl transition-all hover:scale-110 z-10 backdrop-blur-sm border border-gray-200/50"
                aria-label="Previous pathway"
              >
                <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#002A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg sm:shadow-xl transition-all hover:scale-110 z-10 backdrop-blur-sm border border-gray-200/50"
                aria-label="Next pathway"
              >
                <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#002A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute top-1.5 sm:top-3 right-1.5 sm:right-3 bg-black/70 backdrop-blur-sm text-white px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold border border-white/20">
                {index + 1} / {pathways.length}
              </div>
            </div>
          ))}
        </div>

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

        <div className="p-3 sm:p-5 md:p-6 bg-gradient-to-b from-white to-gray-50/50">
          <div 
            key={currentIndex}
            className="mb-2 sm:mb-4"
            style={{
              animation: 'fadeInUp 0.6s ease-out'
            }}
          >
            <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#002A5C] to-[#002A5C]/60 rounded-full mb-2 sm:mb-4"></div>
            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#002A5C] mb-1.5 sm:mb-3 leading-tight">
              {currentPathway.name}
            </h3>
            <p className="text-gray-700 text-xs sm:text-base leading-relaxed mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-none">
              {currentPathway.description}
            </p>
          </div>

          <div 
            key={`careers-${currentIndex}`}
            className="space-y-2 sm:space-y-3 mb-3 sm:mb-5"
            style={{
              animation: 'fadeInUp 0.7s ease-out'
            }}
          >
            <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Example Careers</p>
            <ul className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2">
              {currentPathway.careers.slice(0, 6).map((career, index) => (
                <li 
                  key={index} 
                  className="text-[10px] sm:text-xs md:text-sm text-gray-700 flex items-center group cursor-default"
                  style={{
                    animation: `fadeInUp 0.7s ease-out ${index * 0.05}s both`
                  }}
                >
                  <span className="text-[#002A5C] mr-1 sm:mr-2 font-bold text-xs sm:text-sm group-hover:scale-125 transition-transform flex-shrink-0">•</span>
                  <span className="group-hover:text-[#002A5C] transition-colors font-medium leading-relaxed truncate">{career}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => {
              if (onPathwayClick) {
                onPathwayClick(currentPathway.id);
              } else {
                navigate('/pathways');
              }
            }}
            className="w-full px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white rounded-lg sm:rounded-xl font-semibold hover:from-[#001d3f] hover:to-[#002A5C] transition-all shadow-md sm:shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-[11px] sm:text-sm"
          >
            <span className="hidden sm:inline">Explore {currentPathway.name} Pathways →</span>
            <span className="sm:hidden">Explore →</span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-1.5 sm:gap-2 pb-3 sm:pb-5 px-3 sm:px-6 bg-gray-50/30">
          <div className="flex justify-center gap-1.5 sm:gap-2.5">
            {pathways.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#002A5C] w-8 sm:w-10 shadow-md'
                    : 'bg-gray-300 w-1.5 sm:w-2 hover:bg-gray-400 hover:w-2 sm:hover:w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {isAutoRotating && !userInteracted && (
            <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-gray-500">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#002A5C] rounded-full animate-pulse"></div>
              <span className="hidden sm:inline">Auto-rotating • Next in {Math.max(1, Math.ceil((AUTO_ROTATE_INTERVAL - (progress / 100) * AUTO_ROTATE_INTERVAL) / 1000))}s</span>
              <span className="sm:hidden">{Math.max(1, Math.ceil((AUTO_ROTATE_INTERVAL - (progress / 100) * AUTO_ROTATE_INTERVAL) / 1000))}s</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerPathwaysSlider;

