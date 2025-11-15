import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CareerPathwaysSlider from '../components/CareerPathwaysSlider';

interface Pathway {
  id: string;
  name: string;
  description: string;
  careers: string[];
  image: string;
  color: string;
  x: number;
  y: number;
}

const ExplorePathwaysPage: React.FC = () => {
  const navigate = useNavigate();
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'bot', content: string, pathways?: string[]}>>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activePathway, setActivePathway] = useState<string | null>(null);
  const [highlightedPathways, setHighlightedPathways] = useState<string[]>([]);
  const [currentMapIndex, setCurrentMapIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'browse'>('chat');
  const [timeUntilNextRotation, setTimeUntilNextRotation] = useState(8);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const previousPathwayRef = useRef<string | null>(null);
  const autoRotateIntervalRef = useRef<number | null>(null);
  const countdownIntervalRef = useRef<number | null>(null);

  // Calculate radial positions for pathways
  const calculateRadialPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const centerX = 50;
    const centerY = 50;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const pathways: Pathway[] = [
    {
      id: 'Performance',
      name: 'Performance',
      description: 'Careers centered on creating, performing, and interpreting music in live or recorded settings.',
      careers: ['Performer', 'Studio Musician', 'Conductor', 'Composer', 'Arranger', 'Touring Artist'],
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop&q=80',
      color: '#002A5C',
      x: 0,
      y: 0,
    },
    {
      id: 'Education',
      name: 'Education',
      description: 'Roles focused on teaching, mentoring, and fostering musical growth across ages and settings.',
      careers: ['Music Teacher', 'Private Instructor', 'Ensemble Director', 'Curriculum Developer', 'Music Therapist (educational context)'],
      image: 'https://images.pexels.com/photos/8192085/pexels-photo-8192085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: '#14779B',
      x: 0,
      y: 0,
    },
    {
      id: 'Business',
      name: 'Business',
      description: 'The strategic and operational side of the music industry—marketing, management, finance, and leadership.',
      careers: ['Artist Manager', 'A&R Coordinator', 'Marketing Strategist', 'Label Operations', 'Licensing Manager'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80',
      color: '#002A5C',
      x: 0,
      y: 0,
    },
    {
      id: 'Music Production',
      name: 'Music Production',
      description: 'Technical and creative roles involved in shaping recorded sound and onscreen audio experiences.',
      careers: ['Producer', 'Recording Engineer', 'Mixing Engineer', 'Sound Designer', 'Live Sound Tech'],
      image: 'https://images.pexels.com/photos/3916376/pexels-photo-3916376.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: '#14779B',
      x: 0,
      y: 0,
    },
    {
      id: 'Music Publishing',
      name: 'Music Publishing',
      description: 'Behind-the-scenes roles protecting rights, managing royalties, and supporting songwriters and catalog owners.',
      careers: ['Publishing Administrator', 'Copyright Specialist', 'Sync Licensing Coordinator', 'Royalty Analyst'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80',
      color: '#002A5C',
      x: 0,
      y: 0,
    },
    {
      id: 'Health Sciences',
      name: 'Health Sciences',
      description: 'Careers blending music with health, rehabilitation, and scientific research.',
      careers: ['Music Therapist', 'Audiologist', 'Hearing Scientist', 'Arts & Health Researcher'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80',
      color: '#14779B',
      x: 0,
      y: 0,
    },
    {
      id: 'Entertainment Law',
      name: 'Entertainment Law',
      description: 'Legal professionals who protect creative rights, negotiate contracts, and support artists and companies.',
      careers: ['Entertainment Lawyer', 'Contract Specialist', 'Rights & IP Consultant', 'Artist Advocate'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80',
      color: '#002A5C',
      x: 0,
      y: 0,
    },
    {
      id: 'Media & Entertainment',
      name: 'Media & Entertainment',
      description: 'Creative careers at the intersection of music, storytelling, and digital media.',
      careers: ['Music Supervisor', 'Content Creator', 'Video Editor', 'Broadcaster', 'Social Media Producer'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80',
      color: '#14779B',
      x: 0,
      y: 0,
    },
  ];

  // Calculate positions after array is created
  const pathwaysWithPositions = pathways.map((pathway, index) => {
    const pos = calculateRadialPosition(index, pathways.length, 30);
    return { ...pathway, x: pos.x, y: pos.y };
  });

  const quickStartChips = [
    "I like performing and helping people",
    "I love tech + music",
    "I want a stable career in music",
    "I don't know where to start"
  ];

  // Map career names to Berklee career URLs (using actual Berklee role URLs)
  const getBerkleeCareerUrl = (careerName: string): string => {
    const careerMap: { [key: string]: string } = {
      'Performer': 'performer',
      'Studio Musician': 'studio-musician',
      'Conductor': 'conductor',
      'Composer': 'composer',
      'Arranger': 'arranger',
      'Touring Artist': 'touring-artist',
      'Music Teacher': 'music-teacher',
      'Private Instructor': 'private-instructor',
      'Ensemble Director': 'ensemble-director',
      'Curriculum Developer': 'music-teacher', // Falls back to music-teacher
      'Music Therapist (educational context)': 'music-therapist',
      'Music Therapist': 'music-therapist',
      'Artist Manager': 'artist-manager',
      'A&R Coordinator': 'ar-representative',
      'Marketing Strategist': 'marketing-manager',
      'Label Operations': 'label-manager',
      'Licensing Manager': 'licensing-manager',
      'Producer': 'producer',
      'Recording Engineer': 'recording-engineer',
      'Mixing Engineer': 'mixing-engineer',
      'Sound Designer': 'sound-designer',
      'Live Sound Tech': 'live-sound-engineer',
      'Publishing Administrator': 'publishing-administrator',
      'Copyright Specialist': 'copyright-specialist',
      'Sync Licensing Coordinator': 'sync-licensing-coordinator',
      'Royalty Analyst': 'royalty-analyst',
      'Audiologist': 'audiologist',
      'Hearing Scientist': 'audiologist', // Falls back to audiologist
      'Arts & Health Researcher': 'music-therapist', // Falls back to music-therapist
      'Entertainment Lawyer': 'entertainment-lawyer',
      'Contract Specialist': 'entertainment-lawyer', // Falls back to entertainment-lawyer
      'Rights & IP Consultant': 'entertainment-lawyer', // Falls back to entertainment-lawyer
      'Artist Advocate': 'entertainment-lawyer', // Falls back to entertainment-lawyer
      'Music Supervisor': 'music-supervisor',
      'Content Creator': 'content-creator',
      'Video Editor': 'video-editor',
      'Broadcaster': 'broadcaster',
      'Social Media Producer': 'social-media-manager',
    };

    const roleSlug = careerMap[careerName];
    if (roleSlug) {
      return `https://www.berklee.edu/careers/roles/${roleSlug}`;
    }
    
    // Fallback: try to construct URL from career name
    const normalizedName = careerName.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/&/g, 'and')
      .replace(/\s*\([^)]*\)/g, ''); // Remove parenthetical text
    return `https://www.berklee.edu/careers/roles/${normalizedName}`;
  };

  useEffect(() => {
    // Initial bot message
    if (chatMessages.length === 0) {
      setChatMessages([{
        type: 'bot',
        content: "Hi! I'm Tempo, your guide to music career pathways. Tell me about your interests, strengths, or what you're curious about, and I'll help you discover pathways that might be a great fit! 🎵"
      }]);
    }
  }, [chatMessages.length]);

  // Initialize previous pathway ref
  useEffect(() => {
    if (previousPathwayRef.current === null && pathwaysWithPositions.length > 0) {
      previousPathwayRef.current = pathwaysWithPositions[currentMapIndex]?.id || null;
    }
  }, [currentMapIndex, pathwaysWithPositions]);

  // Countdown timer for auto-rotation
  useEffect(() => {
    if (!isAutoRotating || highlightedPathways.length > 0 || isTransitioning || activePathway) {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
      setTimeUntilNextRotation(8);
      return;
    }

    // Reset countdown when map index changes (rotation happened)
    setTimeUntilNextRotation(8);
    
    countdownIntervalRef.current = setInterval(() => {
      setTimeUntilNextRotation((prev) => {
        if (prev <= 1) {
          return 8; // Reset to 8 when it reaches 0 (rotation will happen)
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
    };
  }, [isAutoRotating, highlightedPathways.length, isTransitioning, activePathway, currentMapIndex]);

  // Auto-rotate map when idle
  useEffect(() => {
    if (!isAutoRotating || highlightedPathways.length > 0 || isTransitioning || activePathway) {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
      return;
    }
    
    autoRotateIntervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeUntilNextRotation(8); // Reset countdown
      setTimeout(() => {
        const nextIndex = (currentMapIndex + 1) % pathwaysWithPositions.length;
        const nextPathwayId = pathwaysWithPositions[nextIndex]?.id;
        setCurrentMapIndex(nextIndex);
        previousPathwayRef.current = nextPathwayId || null;
        setIsTransitioning(false);
      }, 300);
    }, 8000);

    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
    };
  }, [isAutoRotating, highlightedPathways.length, pathwaysWithPositions.length, isTransitioning, activePathway, currentMapIndex]);

  const matchPathways = (input: string): string[] => {
    const lowerInput = input.toLowerCase();
    const matches: { id: string; score: number }[] = [];

    pathwaysWithPositions.forEach(pathway => {
      let score = 0;
      const lowerName = pathway.name.toLowerCase();
      const lowerDesc = pathway.description.toLowerCase();
      const lowerCareers = pathway.careers.join(' ').toLowerCase();

      // Tech + Music specific matching
      if ((lowerInput.includes('tech') || lowerInput.includes('technology') || lowerInput.includes('digital')) && lowerInput.includes('music')) {
        if (lowerName.includes('production') || lowerName.includes('music production')) {
          score += 10; // High priority for Music Production
        }
        if (lowerName.includes('media') || lowerName.includes('entertainment')) {
          score += 8; // High priority for Media & Entertainment
        }
        if (lowerDesc.includes('technology') || lowerDesc.includes('technical') || lowerDesc.includes('digital')) {
          score += 5;
        }
        if (lowerCareers.includes('producer') || lowerCareers.includes('engineer') || lowerCareers.includes('sound designer')) {
          score += 4;
        }
      }

      // General keyword matching
      if (lowerInput.includes('perform') || lowerInput.includes('stage')) {
        if (lowerName.includes('performance')) score += 3;
      }
      if (lowerInput.includes('tech') || lowerInput.includes('technology') || lowerInput.includes('digital')) {
        if (lowerName.includes('production') || lowerName.includes('media')) score += 3;
      }
      if (lowerInput.includes('teach') || lowerInput.includes('help') || lowerInput.includes('educat')) {
        if (lowerName.includes('education')) score += 3;
      }
      if (lowerInput.includes('business') || lowerInput.includes('manage') || lowerInput.includes('marketing')) {
        if (lowerName.includes('business')) score += 3;
      }
      if (lowerInput.includes('health') || lowerInput.includes('science') || lowerInput.includes('therapy')) {
        if (lowerName.includes('health')) score += 3;
      }
      if (lowerInput.includes('law') || lowerInput.includes('legal') || lowerInput.includes('rights')) {
        if (lowerName.includes('law')) score += 3;
      }
      if (lowerInput.includes('media') || lowerInput.includes('content') || lowerInput.includes('video')) {
        if (lowerName.includes('media')) score += 3;
      }
      if (lowerInput.includes('publish') || lowerInput.includes('royalty') || lowerInput.includes('copyright')) {
        if (lowerName.includes('publishing')) score += 3;
      }

      // Direct name/description match
      if (lowerDesc.includes(lowerInput) || lowerCareers.includes(lowerInput)) {
        score += 2;
      }

      if (score > 0) {
        matches.push({ id: pathway.id, score });
      }
    });

    return matches
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(m => m.id);
  };

  const generateBotResponse = (_input: string, matchedPathways: string[]): string => {
    if (matchedPathways.length === 0) {
      return "That's interesting! Let me help you explore. Try telling me more about what you enjoy, or click one of the quick-start options below!";
    }

    const pathwayNames = matchedPathways.map(id => pathwaysWithPositions.find(p => p.id === id)?.name).filter(Boolean);
    
    if (pathwayNames.length === 1) {
      return `Based on what you've shared, you might be interested in **${pathwayNames[0]}**! This pathway focuses on ${pathwaysWithPositions.find(p => p.id === matchedPathways[0])?.description.toLowerCase()}. Click on it in the map to learn more!`;
    } else {
      return `Based on what you've shared, you might be interested in:\n\n${pathwayNames.map((name) => `→ **${name}**`).join('\n')}\n\nCheck out these pathways on the map! They're highlighted for you.`;
    }
  };

  const handleSendMessage = (message?: string) => {
    const userMessage = message || inputValue.trim();
    if (!userMessage) return;

    setIsTyping(true);
    setIsAutoRotating(false);
    setInputValue('');

    // Add user message
    const newMessages = [...chatMessages, { type: 'user' as const, content: userMessage }];
    setChatMessages(newMessages);

    // Match pathways
    const matchedPathways = matchPathways(userMessage);
    
    // Highlight pathways on map
    if (matchedPathways.length > 0) {
      const newPathwayId = matchedPathways[0];
      const isDifferentPathway = previousPathwayRef.current !== newPathwayId;
      
      // Only transition if switching to a different pathway
      if (isDifferentPathway) {
        setIsTransitioning(true);
      }
      
      setTimeout(() => {
        setHighlightedPathways(matchedPathways);
        setActivePathway(newPathwayId);
        // Lock the map index to the first matched pathway
        const matchedIndex = pathwaysWithPositions.findIndex(p => p.id === newPathwayId);
        if (matchedIndex !== -1) {
          setCurrentMapIndex(matchedIndex);
        }
        previousPathwayRef.current = newPathwayId;
        if (isDifferentPathway) {
          setIsTransitioning(false);
        }
        
        // Don't auto-clear highlights or resume auto-rotation after user interaction
      }, 200);
    }

    // Generate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage, matchedPathways);
      setChatMessages([...newMessages, { 
        type: 'bot', 
        content: botResponse,
        pathways: matchedPathways 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handlePathwayClick = (pathwayId: string) => {
    setIsAutoRotating(false);
    
    // Only transition if switching to a different pathway
    const isDifferentPathway = previousPathwayRef.current !== pathwayId;
    if (isDifferentPathway) {
      setIsTransitioning(true);
    }
    
    setTimeout(() => {
      setActivePathway(pathwayId);
      setHighlightedPathways([pathwayId]);
      // Lock the map index to the clicked pathway
      const clickedIndex = pathwaysWithPositions.findIndex(p => p.id === pathwayId);
      if (clickedIndex !== -1) {
        setCurrentMapIndex(clickedIndex);
      }
      previousPathwayRef.current = pathwayId;
      if (isDifferentPathway) {
        setIsTransitioning(false);
      }
    }, 150);
  };

  const currentPathway = activePathway 
    ? pathwaysWithPositions.find(p => p.id === activePathway) 
    : pathwaysWithPositions[currentMapIndex] || pathwaysWithPositions[0];

  // Safety check
  if (!currentPathway || pathwaysWithPositions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#002A5C] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading pathways...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Explore Your Music Pathways</h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl">
            Discover personalized career pathways through conversation with Tempo, your music career guide, and explore an interactive map of opportunities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Tabbed Interface */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-[500px] lg:h-[650px]">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              <button
                onClick={() => {
                  setActiveTab('chat');
                  if (isAutoRotating) {
                    setIsAutoRotating(false); // Stop auto-rotation when switching tabs
                  }
                }}
                className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 font-semibold text-xs sm:text-sm transition-all ${
                  activeTab === 'chat'
                    ? 'bg-white text-[#002A5C] border-b-2 border-[#002A5C]'
                    : 'text-gray-600 hover:text-[#002A5C] hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="hidden sm:inline">Chat with Tempo</span>
                  <span className="sm:hidden">Chat</span>
                </div>
              </button>
              <button
                onClick={() => {
                  setActiveTab('browse');
                  if (isAutoRotating) {
                    setIsAutoRotating(false); // Stop auto-rotation when switching tabs
                  }
                }}
                className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 font-semibold text-xs sm:text-sm transition-all ${
                  activeTab === 'browse'
                    ? 'bg-white text-[#002A5C] border-b-2 border-[#002A5C]'
                    : 'text-gray-600 hover:text-[#002A5C] hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="hidden sm:inline">Browse Pathways</span>
                  <span className="sm:hidden">Browse</span>
                </div>
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-hidden flex flex-col min-h-0">
              {activeTab === 'chat' ? (
                <>
                  {/* Chatbot Panel */}
                  <div className="bg-gradient-to-r from-[#002A5C] to-[#001d3f] p-4 sm:p-6 text-white flex-shrink-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-white/30 ring-2 ring-white/20">
                        <img src="/tempo.png" alt="Tempo" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h2 className="text-base sm:text-lg font-bold">Tempo</h2>
                        <p className="text-xs text-white/80">Your Music Career Guide</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 scroll-smooth min-h-0">
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-300`}
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {msg.type === 'bot' && (
                          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 flex-shrink-0 overflow-hidden shadow-sm">
                            <img src="/tempo.png" alt="Tempo" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div
                          className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl p-3 sm:p-4 ${
                            msg.type === 'user'
                              ? 'bg-[#002A5C] text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="whitespace-pre-line text-sm sm:text-base">{msg.content}</p>
                          {msg.pathways && msg.pathways.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {msg.pathways.map(pathwayId => {
                                const pathway = pathwaysWithPositions.find(p => p.id === pathwayId);
                                return pathway ? (
                                  <button
                                    key={pathwayId}
                                    onClick={() => handlePathwayClick(pathwayId)}
                                    className="block w-full text-left px-3 py-2 bg-white/50 rounded-lg hover:bg-white/80 transition-colors text-sm"
                                  >
                                    <span className="font-semibold">{pathway.name}</span>
                                  </button>
                                ) : null;
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 overflow-hidden shadow-sm">
                          <img src="/tempo.png" alt="Tempo" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-4">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 bg-[#002A5C] rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1s' }}></div>
                            <div className="w-2 h-2 bg-[#002A5C] rounded-full animate-bounce" style={{ animationDelay: '150ms', animationDuration: '1s' }}></div>
                            <div className="w-2 h-2 bg-[#002A5C] rounded-full animate-bounce" style={{ animationDelay: '300ms', animationDuration: '1s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  {/* Quick Start Chips */}
                  {chatMessages.length === 1 && (
                    <div className="px-6 pb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 flex-shrink-0">
                      <p className="text-xs text-gray-500 mb-2 font-medium">Quick start:</p>
                      <div className="flex flex-wrap gap-2">
                        {quickStartChips.map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (isAutoRotating) {
                                setIsAutoRotating(false); // Stop auto-rotation when clicking quick start chips
                              }
                              handleSendMessage(chip);
                            }}
                            className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-[#002A5C] hover:text-white rounded-full transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 sm:p-6 border-t border-gray-200 flex-shrink-0">
                    <div className="flex gap-2 sm:gap-3">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                          if (isAutoRotating) {
                            setIsAutoRotating(false); // Stop auto-rotation when user types
                          }
                        }}
                        onKeyPress={(e) => e.key === 'Enter' && !isTyping && handleSendMessage()}
                        placeholder="Tell me about your interests..."
                        disabled={isTyping}
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-[#002A5C] focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      />
                      <button
                        onClick={() => handleSendMessage()}
                        disabled={isTyping || !inputValue.trim()}
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-[#002A5C] text-white rounded-lg sm:rounded-xl font-semibold hover:bg-[#001d3f] transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-sm hover:shadow-md text-sm sm:text-base"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Browse Pathways Tab */}
                  <div className="flex-1 overflow-y-auto p-6 min-h-0">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[#002A5C] mb-2">Explore All Pathways</h3>
                      <p className="text-sm text-gray-600">Click on any pathway to see it highlighted on the map</p>
                    </div>
                    <CareerPathwaysSlider 
                      onPathwayClick={(pathwayId) => handlePathwayClick(pathwayId)} 
                      disableAutoRotate={true}
                      activePathwayId={activePathway}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Panel - Interactive Map */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative h-[500px] lg:h-[650px]">
            {/* Map Title */}
            <div className="absolute top-2 left-2 right-2 z-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-semibold text-[#002A5C] truncate">Interactive Pathways Map</h3>
                    <p className="text-xs text-gray-600 hidden sm:block">Click bubbles or chat with Tempo to explore</p>
                  </div>
                  {isAutoRotating && !highlightedPathways.length && !activePathway && (
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#002A5C]/10 rounded-lg border border-[#002A5C]/20 flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#002A5C] rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-[#002A5C] hidden sm:inline">
                        Auto-rotating • {timeUntilNextRotation}s
                      </span>
                      <span className="text-xs font-semibold text-[#002A5C] sm:hidden">
                        {timeUntilNextRotation}s
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 p-2 sm:p-4 z-0 pt-10 sm:pt-12">
              <svg viewBox="0 0 100 100" className="w-full h-full">

                {/* Connecting Lines */}
                <g opacity="0.3">
                  {pathwaysWithPositions.map((pathway) => {
                    const centerX = 50;
                    const centerY = 50;
                    const isHighlighted = highlightedPathways.includes(pathway.id);
                    return (
                      <line
                        key={`line-${pathway.id}`}
                        x1={centerX}
                        y1={centerY}
                        x2={pathway.x}
                        y2={pathway.y}
                        stroke={pathway.color}
                        strokeWidth={isHighlighted ? "1" : "0.5"}
                        className={`transition-all duration-500 ${isHighlighted ? 'animate-pulse opacity-60' : ''}`}
                        style={{
                          strokeWidth: isHighlighted ? 1 : 0.5,
                          opacity: isHighlighted ? 0.6 : 0.3,
                        }}
                      />
                    );
                  })}
                </g>

                {/* Pathway Bubbles */}
                {pathwaysWithPositions.map((pathway) => {
                  const isActive = activePathway === pathway.id;
                  const isHighlighted = highlightedPathways.includes(pathway.id);
                  const isCurrent = currentPathway?.id === pathway.id;
                  const bubbleSize = isActive || isHighlighted ? 5 : 3.5;
                  
                  return (
                    <g key={pathway.id}>
                      {/* Glow effect for highlighted/active */}
                      {(isActive || isHighlighted) && (
                        <circle
                          cx={pathway.x}
                          cy={pathway.y}
                          r={bubbleSize + 1}
                          fill={pathway.color}
                          opacity="0.3"
                          className={isHighlighted ? 'animate-pulse' : ''}
                        />
                      )}
                      <circle
                        cx={pathway.x}
                        cy={pathway.y}
                        r={bubbleSize}
                        fill={pathway.color}
                        stroke="white"
                        strokeWidth="0.5"
                        className={`cursor-pointer transition-all duration-300 ease-out ${
                          isHighlighted ? 'animate-pulse' : ''
                        }`}
                        onClick={() => handlePathwayClick(pathway.id)}
                        onMouseEnter={(e) => {
                          if (!isActive && !isHighlighted) {
                            e.currentTarget.style.transform = 'scale(1.2)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                        style={{
                          filter: isHighlighted || isActive ? 'drop-shadow(0 0 16px rgba(0, 42, 92, 0.9))' : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          transform: isActive || isHighlighted ? 'scale(1.15)' : 'scale(1)',
                        }}
                      />
                      {(isActive || isHighlighted || isCurrent) && (
                        <text
                          x={pathway.x}
                          y={pathway.y - 7}
                          textAnchor="middle"
                          fontSize="2.5"
                          fill={pathway.color}
                          fontWeight="bold"
                          className="pointer-events-none"
                          style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}
                        >
                          {pathway.name}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

                {/* Info Card */}
            {currentPathway && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-3 sm:p-4 md:p-6 border-t border-gray-200 z-10">
                <div className="max-w-md mx-auto">
                  <div className={`bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-xl border border-gray-100 transition-all duration-500 ease-out ${
                    isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-[#002A5C] to-[#14779B] rounded-full"></div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#002A5C]">{currentPathway.name}</h3>
                    </div>
                    <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{currentPathway.description}</p>
                    
                    <div className="mb-3 sm:mb-4">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 sm:mb-2">Example Careers</p>
                      <div className="space-y-1.5 sm:space-y-2">
                        {currentPathway.careers.slice(0, 4).map((career, idx) => {
                          const berkleeUrl = getBerkleeCareerUrl(career);
                          return (
                            <a
                              key={idx}
                              href={berkleeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                // Immediate visual feedback
                                e.currentTarget.style.opacity = '0.7';
                                // Open immediately without waiting
                                window.open(berkleeUrl, '_blank', 'noopener,noreferrer');
                                e.preventDefault();
                              }}
                              className="block px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-50 hover:bg-[#002A5C]/10 rounded-lg text-xs text-gray-700 transition-all duration-150 border border-gray-200 hover:border-[#002A5C]/30 group transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                              style={{ animationDelay: `${idx * 50}ms` }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium group-hover:text-[#002A5C] transition-colors truncate pr-2">{career}</span>
                                <svg className="w-3 h-3 text-gray-400 group-hover:text-[#002A5C] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-start gap-2">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#002A5C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-xs text-gray-700">
                          <p className="font-semibold text-[#002A5C] mb-0.5 sm:mb-1">Explore Career Details</p>
                          <p className="hidden sm:block">Click any career above to view detailed information from Berklee College of Music about job descriptions, skills needed, career paths, and more.</p>
                          <p className="sm:hidden">Tap any career to learn more.</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://www.berklee.edu/careers"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        const url = 'https://www.berklee.edu/careers';
                        e.currentTarget.style.opacity = '0.8';
                        window.open(url, '_blank', 'noopener,noreferrer');
                        e.preventDefault();
                      }}
                      className="block w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white rounded-lg font-semibold hover:from-[#001d3f] hover:to-[#002A5C] hover:shadow-lg transition-all duration-150 text-xs sm:text-sm text-center mb-2 active:scale-95 cursor-pointer"
                    >
                      Explore All Careers at Berklee →
                    </a>
                    <button
                      onClick={() => navigate(`/about`)}
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-all text-xs sm:text-sm"
                    >
                      Learn More About TMPP
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePathwaysPage;

