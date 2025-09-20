import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Eye, 
  Zap, 
  Download, 
  ArrowRight, 
  Play,
  CheckCircle,
  Users,
  Target,
  Palette,
  Upload,
  PlayCircle,
  Monitor,
  Shield,
  Layers
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-guide-section');
    if (videoSection) {
      videoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms analyze your designs against industry best practices and UX principles',
      color: 'bg-[#00ED64]',
      stats: '99.2% accuracy'
    },
    {
      icon: Eye,
      title: 'Visual Issue Detection',
      description: 'Instantly spot contrast issues, alignment problems, and accessibility concerns',
      color: 'bg-[#13C5DD]',
      stats: '50+ checks'
    },
    {
      icon: Target,
      title: 'Design System Validation',
      description: 'Ensure consistency with Material Design, Apple HIG, or your custom design system',
      color: 'bg-[#4FD1C7]',
      stats: '15+ systems'
    },
    {
      icon: Zap,
      title: 'Instant Improvements',
      description: 'Get actionable suggestions and auto-fix common design issues in seconds',
      color: 'bg-[#68D391]',
      stats: 'Real-time'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior UX Designer at Spotify',
      avatar: 'SC',
      quote: 'UiX Sense has revolutionized our design review process. It catches issues we might have missed and saves hours of manual checking.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      role: 'Design Lead at Airbnb',
      avatar: 'MR',
      quote: 'The AI suggestions are incredibly accurate. It\'s like having a design expert reviewing every screen.',
      rating: 5
    },
    {
      name: 'Jessica Park',
      role: 'Product Designer at Discord',
      avatar: 'JP',
      quote: 'Finally, a tool that understands modern design principles. The accessibility checks alone are worth it.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Designs Analyzed', value: '2.3M+' },
    { label: 'Issues Detected', value: '8.7M+' },
    { label: 'Happy Designers', value: '12K+' },
    { label: 'Success Rate', value: '98.5%' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-6 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 -mx-6 -my-12 overflow-hidden pointer-events-none">
              {/* Base Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 237, 100, 0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 237, 100, 0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              ></div>
              
              {/* Animated Light Gradients */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle 600px at 20% 30%, rgba(0, 237, 100, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle 600px at 80% 70%, rgba(19, 197, 221, 0.08) 0%, transparent 50%)',
                    'radial-gradient(circle 600px at 60% 20%, rgba(0, 237, 100, 0.06) 0%, transparent 50%)',
                    'radial-gradient(circle 600px at 40% 80%, rgba(79, 209, 199, 0.08) 0%, transparent 50%)',
                    'radial-gradient(circle 600px at 20% 30%, rgba(0, 237, 100, 0.1) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Floating Light Dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#00ED64] rounded-full opacity-20"
                  initial={{
                    x: Math.random() * 100 + '%',
                    y: Math.random() * 100 + '%',
                  }}
                  animate={{
                    x: [
                      Math.random() * 100 + '%',
                      Math.random() * 100 + '%',
                      Math.random() * 100 + '%',
                    ],
                    y: [
                      Math.random() * 100 + '%',
                      Math.random() * 100 + '%', 
                      Math.random() * 100 + '%',
                    ],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 2,
                  }}
                />
              ))}
              
              {/* Subtle Grid Lines with Animation */}
              <motion.div
                className="absolute inset-0 opacity-[0.02]"
                animate={{
                  backgroundPosition: ['0px 0px', '40px 40px', '0px 0px'],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-[#00ED64]/20 text-[#00ED64] border-[#00ED64]/30 mb-6 text-sm px-3 py-1">
                NEW ✨ AI-Powered Design Analysis
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-normal">
                The design analysis platform for{' '}
                <span className="text-[#00ED64]">
                  dynamic, demanding
                </span>{' '}
                designers
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                AI depends on fluid, instantly accessible design insights, not fragmented analysis. 
                Consolidate structured and unstructured design data—spacing, typography, colors, accessibility, and more—into a single, flexible system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  onClick={onGetStarted}
                  className="bg-[#00ED64] hover:bg-[#00ED64]/90 text-[#001E2B] border-0 px-8 py-4 text-base font-medium"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={scrollToVideo}
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-base"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>Ask UiX Sense Assistant</span>
                <div className="w-8 h-8 bg-[#013D52] rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#00ED64]" />
                </div>
              </div>
            </motion.div>

            {/* Right side - Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <Card className="bg-[#012A3A] border border-[#013D52] p-6 rounded-xl shadow-2xl">
                {/* Mock interface */}
                <div className="bg-[#001E2B] rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-[#00ED64] rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-[#013D52] rounded w-1/3"></div>
                    <div className="h-2 bg-[#013D52] rounded w-2/3"></div>
                    <div className="h-2 bg-[#013D52] rounded w-1/2"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80 text-sm">Visualize Your Design Data</span>
                  <Badge className="bg-[#00ED64]/20 text-[#00ED64] text-xs">
                    Live
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#013D52] p-3 rounded-lg">
                    <div className="text-[#00ED64] text-lg font-bold">94</div>
                    <div className="text-white/60 text-xs">Score</div>
                  </div>
                  <div className="bg-[#013D52] p-3 rounded-lg">
                    <div className="text-[#13C5DD] text-lg font-bold">23</div>
                    <div className="text-white/60 text-xs">Issues</div>
                  </div>
                  <div className="bg-[#013D52] p-3 rounded-lg">
                    <div className="text-[#4FD1C7] text-lg font-bold">A+</div>
                    <div className="text-white/60 text-xs">Grade</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Video Guide Section */}
      <motion.section 
        id="video-guide-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#00ED64]/20 text-[#00ED64] border-[#00ED64]/30 mb-4">
              Platform Guide
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              See UiX Sense in Action
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Watch how our AI-powered platform transforms your design workflow in under 3 minutes
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="relative"
          >
            <Card className="bg-[#012A3A] border border-[#013D52] p-8 rounded-2xl">
              <div className="relative aspect-video bg-[#001E2B] rounded-xl overflow-hidden">
                {!isVideoPlaying ? (
                  // Video Thumbnail
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ED64]/20 to-[#13C5DD]/20"></div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative z-10 w-20 h-20 bg-[#00ED64] rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Play className="w-8 h-8 text-[#001E2B] ml-1" />
                    </motion.button>
                    
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white text-xl font-semibold mb-1">
                        UiX Sense Platform Overview
                      </h3>
                      <p className="text-white/70">3:24 minutes</p>
                    </div>
                    
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-black/50 text-white">HD</Badge>
                    </div>
                  </div>
                ) : (
                  // Mock Video Player
                  <div className="absolute inset-0 bg-[#001E2B] flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-[#00ED64] border-t-transparent rounded-full mx-auto mb-4"
                      ></motion.div>
                      <p className="text-white/70">Video would play here...</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsVideoPlaying(false)}
                        className="mt-4 border-white/20 text-white hover:bg-white/10"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    icon: Monitor,
                    title: 'Live Analysis',
                    description: 'See real-time design analysis as you work'
                  },
                  {
                    icon: Shield,
                    title: 'Accessibility Checks',
                    description: 'Ensure WCAG compliance automatically'
                  },
                  {
                    icon: Layers,
                    title: 'Design Systems',
                    description: 'Convert to any design system instantly'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-[#00ED64]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="w-6 h-6 text-[#00ED64]" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Deploy Your Way Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="px-6 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#00ED64] mb-4">
                Design Your Way
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Choose from industry-leading design systems or create your own. UiX Sense adapts to your preferred design language and workflow.
              </p>
              <Button 
                variant="outline" 
                className="border-[#00ED64]/30 text-[#00ED64] hover:bg-[#00ED64]/10"
              >
                Explore Design Systems →
              </Button>
            </div>

            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <motion.div 
                  className="flex transition-transform duration-500 ease-in-out"
                  animate={{ x: -(currentSlide * 100) + '%' }}
                >
                  {[
                    {
                      name: 'Material Design',
                      description: 'Google\'s comprehensive design system with material theming, elevation, and motion guidelines.',
                      features: ['Material Icons', 'Elevation System', 'Typography Scale', 'Color Theming'],
                      illustration: (
                        <div className="relative w-full h-48 flex items-center justify-center">
                          {/* Material Design 3D illustration */}
                          <div className="relative">
                            <div className="w-20 h-20 bg-blue-500 rounded-lg shadow-2xl transform rotate-12 absolute -top-2 -left-2"></div>
                            <div className="w-16 h-16 bg-green-500 rounded-full shadow-xl transform -rotate-6 absolute top-4 left-8"></div>
                            <div className="w-12 h-20 bg-red-500 rounded-lg shadow-lg transform rotate-45 absolute top-0 left-16"></div>
                            <div className="w-8 h-8 bg-yellow-500 rounded shadow-md absolute bottom-0 right-0"></div>
                          </div>
                        </div>
                      )
                    },
                    {
                      name: 'Apple HIG',
                      description: 'Apple\'s Human Interface Guidelines emphasizing clarity, depth, and intuitive interactions.',
                      features: ['SF Symbols', 'Dynamic Type', 'Focus Engine', 'Accessibility First'],
                      illustration: (
                        <div className="relative w-full h-48 flex items-center justify-center">
                          {/* Apple HIG 3D illustration */}
                          <div className="relative">
                            <div className="w-16 h-24 bg-gray-800 rounded-xl shadow-2xl transform -rotate-12 absolute -top-2 -left-2"></div>
                            <div className="w-20 h-14 bg-gray-200 rounded-lg shadow-xl transform rotate-6 absolute top-4 left-4"></div>
                            <div className="w-6 h-6 bg-blue-500 rounded-full shadow-lg absolute top-8 left-12"></div>
                            <div className="w-4 h-8 bg-gray-400 rounded shadow-md absolute bottom-2 right-2"></div>
                          </div>
                        </div>
                      )
                    },
                    {
                      name: 'Ant Design',
                      description: 'Enterprise-grade UI design language for web applications with rich component library.',
                      features: ['Grid System', 'Design Tokens', 'Component Library', 'Enterprise Ready'],
                      illustration: (
                        <div className="relative w-full h-48 flex items-center justify-center">
                          {/* Ant Design 3D illustration */}
                          <div className="relative">
                            <div className="w-18 h-16 bg-blue-600 rounded shadow-2xl transform rotate-6 absolute -top-2 -left-2"></div>
                            <div className="w-14 h-14 bg-cyan-500 rounded-lg shadow-xl transform -rotate-12 absolute top-2 left-6"></div>
                            <div className="w-10 h-6 bg-orange-500 rounded shadow-lg absolute top-8 left-2"></div>
                            <div className="w-8 h-12 bg-purple-500 rounded-lg shadow-md absolute bottom-0 right-0 transform rotate-12"></div>
                          </div>
                        </div>
                      )
                    },
                    {
                      name: 'Chakra UI',
                      description: 'Simple, modular and accessible component library for React applications.',
                      features: ['Dark Mode', 'Responsive Design', 'Composable', 'TypeScript Ready'],
                      illustration: (
                        <div className="relative w-full h-48 flex items-center justify-center">
                          {/* Chakra UI 3D illustration */}
                          <div className="relative">
                            <div className="w-16 h-16 bg-teal-500 rounded-full shadow-2xl transform rotate-12 absolute -top-1 -left-1"></div>
                            <div className="w-12 h-20 bg-purple-500 rounded-lg shadow-xl transform -rotate-6 absolute top-2 left-8"></div>
                            <div className="w-8 h-8 bg-pink-500 rounded shadow-lg absolute top-6 left-4"></div>
                            <div className="w-6 h-10 bg-green-500 rounded-lg shadow-md absolute bottom-1 right-2 transform rotate-24"></div>
                          </div>
                        </div>
                      )
                    }
                  ].map((system, index) => (
                    <motion.div
                      key={system.name}
                      className="min-w-full px-2"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + index * 0.2 }}
                    >
                      <Card className="bg-white border border-gray-200 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                        {/* Illustration */}
                        {system.illustration}
                        
                        {/* Content */}
                        <div className="text-center">
                          <h3 className="text-gray-900 font-bold text-2xl mb-3">{system.name}</h3>
                          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            {system.description}
                          </p>
                          
                          {/* Features */}
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2 justify-center">
                              {system.features.map((feature, idx) => (
                                <Badge key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-[#00ED64] hover:bg-[#00ED64]/10 font-medium"
                          >
                            Learn more →
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-[#00ED64] scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="px-6 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Designers
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need to create accessible, beautiful, and user-friendly designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.2 }}

                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-white/5 border border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-300">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-[#001E2B]" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                      <Badge variant="secondary" className="bg-white/10 text-white/70">
                        {feature.stats}
                      </Badge>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed">{feature.description}</p>
                    <div className={`h-1 ${feature.color} rounded-full mt-6 opacity-0`} />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="px-6 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by Designers Worldwide
            </h2>
            <p className="text-xl text-white/70">
              Join thousands of designers who trust UiX Sense for their design analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/5 border border-white/10 p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#00ED64] rounded-full flex items-center justify-center text-[#001E2B] font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400">⭐</div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="px-6 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-[#012A3A] border border-[#013D52] p-12 rounded-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Design Better?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of designers who create better, more accessible designs with UiX Sense
            </p>
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-[#00ED64] hover:bg-[#00ED64]/90 text-[#001E2B] border-0 px-12 py-4 text-lg font-medium"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Free Analysis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-white/50 text-sm mt-4">
              No credit card required • Free forever for personal use
            </p>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}