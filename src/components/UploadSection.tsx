import { motion } from 'motion/react';
import { useState, useCallback } from 'react';
import { Upload, FileImage, Sparkles, Settings, Plus, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { toast } from 'sonner@2.0.3';

interface UploadSectionProps {
  onFileUpload: (file: File) => void;
  onAnalysisStart: () => void;
}

export function UploadSection({ onFileUpload, onAnalysisStart }: UploadSectionProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [detectedDesignSystem, setDetectedDesignSystem] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const figmaFile = files.find(file => 
      file.name.endsWith('.fig') || 
      file.type.includes('figma') ||
      file.name.endsWith('.sketch')
    );
    
    if (figmaFile) {
      // Use requestAnimationFrame to ensure this happens after the current render cycle
      requestAnimationFrame(() => {
        handleFileUpload(figmaFile);
      });
    } else {
      toast.error('Please upload a Figma (.fig) or Sketch file');
    }
  }, []);

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // Simulate design system detection
          const systems = ['Material Design', 'Apple HIG', 'Ant Design', 'Custom System', null];
          const detected = systems[Math.floor(Math.random() * systems.length)];
          setDetectedDesignSystem(detected);
          
          // Use requestAnimationFrame to ensure state updates happen after render
          requestAnimationFrame(() => {
            onFileUpload(file);
            toast.success('Design file uploaded successfully!');
            
            // Auto-start analysis after 1 second
            setTimeout(() => {
              requestAnimationFrame(() => {
                onAnalysisStart();
                toast.info('Starting AI-powered design analysis...');
              });
            }, 1000);
          });
          
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Use requestAnimationFrame to ensure this happens after the current render cycle
      requestAnimationFrame(() => {
        handleFileUpload(file);
      });
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Analyze Your Designs
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Upload your Figma files and get AI-powered insights on usability, accessibility, and design best practices
          </p>
        </motion.div>

        {/* Design System Detection */}
        {detectedDesignSystem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Card className="backdrop-blur-xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-orange-400" />
                  <div>
                    <h3 className="text-white text-lg font-semibold">Detected Design System</h3>
                    <p className="text-white/70">{detectedDesignSystem}</p>
                  </div>
                </div>
                <Button variant="outline" className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Main Upload Zone */}
          <div className="lg:col-span-2">
            <Card 
              className={`backdrop-blur-xl bg-white/5 border-2 border-dashed transition-all duration-300 ${
                isDragging 
                  ? 'border-orange-400 bg-orange-500/10' 
                  : 'border-white/20 hover:border-white/40'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="p-12 text-center">
                <motion.div
                  animate={{ 
                    scale: isDragging ? 1.1 : 1,
                    rotate: isDragging ? 5 : 0
                  }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center"
                >
                  <Upload className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Drop your Figma file here
                </h3>
                <p className="text-white/70 mb-6">
                  or click to browse your files
                </p>
                
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".fig,.sketch"
                  onChange={handleFileSelect}
                />
                
                <label htmlFor="file-upload">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0"
                    asChild
                  >
                    <span className="cursor-pointer">
                      <FileImage className="w-5 h-5 mr-2" />
                      Choose File
                    </span>
                  </Button>
                </label>
                
                <p className="text-sm text-white/50 mt-4">
                  Supports: .fig, .sketch files up to 50MB
                </p>
                
                {isUploading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6"
                  >
                    <Progress value={uploadProgress} className="w-full mb-2" />
                    <p className="text-sm text-white/70">Uploading... {Math.round(uploadProgress)}%</p>
                  </motion.div>
                )}
              </div>
            </Card>
          </div>

          {/* Upload Options */}
          <div className="space-y-6">
            {/* Design System Upload */}
            <Card className="backdrop-blur-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Upload Design System</h3>
              <p className="text-white/70 text-sm mb-4">
                Upload your custom design system for better analysis accuracy
              </p>
              <Button 
                variant="outline" 
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Design System
              </Button>
            </Card>

            {/* Recent Files */}
            <Card className="backdrop-blur-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Recent Files</h3>
              <div className="space-y-3">
                {[
                  { name: 'Mobile App Design.fig', score: 92, time: '2 hours ago' },
                  { name: 'Dashboard UI.fig', score: 87, time: '1 day ago' },
                  { name: 'Landing Page.fig', score: 94, time: '3 days ago' }
                ].map((file, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <FileImage className="w-4 h-4 text-orange-400" />
                      <div>
                        <p className="text-white text-sm font-medium">{file.name}</p>
                        <p className="text-white/50 text-xs">{file.time}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        file.score >= 90 ? 'bg-green-500/20 text-green-400' :
                        file.score >= 80 ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {file.score}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Sparkles,
              title: 'AI Analysis',
              description: 'Smart design validation using advanced AI',
              color: 'from-orange-500 to-pink-500'
            },
            {
              icon: Eye,
              title: 'Visual Issues',
              description: 'Highlight problems directly on your design',
              color: 'from-blue-500 to-purple-500'
            },
            {
              icon: Settings,
              title: 'Auto-fix',
              description: 'Automatic corrections for common issues',
              color: 'from-green-500 to-teal-500'
            },
            {
              icon: FileImage,
              title: 'Export Ready',
              description: 'Download improved designs instantly',
              color: 'from-purple-500 to-pink-500'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 h-full hover:bg-white/10 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}