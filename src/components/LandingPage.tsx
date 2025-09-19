import { motion } from 'motion/react';
import { useState } from 'react';
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
  Upload
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms analyze your designs against industry best practices and UX principles',
      color: 'from-orange-500 to-pink-500',
      stats: '99.2% accuracy'
    },
    {
      icon: Eye,
      title: 'Visual Issue Detection',
      description: 'Instantly spot contrast issues, alignment problems, and accessibility concerns',
      color: 'from-blue-500 to-purple-500',
      stats: '50+ checks'
    },
    {
      icon: Target,
      title: 'Design System Validation',
      description: 'Ensure consistency with Material Design, Apple HIG, or your custom design system',
      color: 'from-green-500 to-teal-500',
      stats: '15+ systems'
    },
    {
      icon: Zap,
      title: 'Instant Improvements',
      description: 'Get actionable suggestions and auto-fix common design issues in seconds',
      color: 'from-purple-500 to-pink-500',
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
        className="px-6 py-12 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400 border-orange-500/30 mb-6">
              🚀 AI-Powered Design Analysis
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Design with{' '}
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              Automatically analyze, validate, and improve your Figma designs with AI. 
              Ensure perfect usability, accessibility, and visual consistency in seconds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-8 py-4 text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Analyzing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
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

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
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
                  transition={{ delay: 1 + index * 0.2 }}
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  whileHover={{ y: -5 }}
                >
                  <Card className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                      <Badge variant="secondary" className="bg-white/10 text-white/70">
                        {feature.stats}
                      </Badge>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed">{feature.description}</p>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredFeature === index ? '100%' : '0%' }}
                      className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6`}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-white/70">
              Simple, fast, and powerful design analysis in three steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Upload Your Design',
                description: 'Drop your Figma file or connect directly to your workspace',
                icon: Upload
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our AI analyzes every element for usability, accessibility, and best practices',
                icon: Sparkles
              },
              {
                step: '03',
                title: 'Get Improvements',
                description: 'Receive detailed feedback and download your improved design',
                icon: Download
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
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
        transition={{ delay: 1.6 }}
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
                transition={{ delay: 1.8 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
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
        transition={{ delay: 2 }}
        className="px-6 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Card className="backdrop-blur-xl bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Design Better?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of designers who create better, more accessible designs with UiX Sense
            </p>
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-12 py-4 text-lg"
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