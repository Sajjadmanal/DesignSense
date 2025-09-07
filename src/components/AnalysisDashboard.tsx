import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  Eye, 
  Palette,
  Type,
  Zap,
  Download,
  RefreshCw,
  Target,
  Users,
  Accessibility,
  Smartphone
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { toast } from 'sonner@2.0.3';

interface AnalysisDashboardProps {
  uploadedFile: File | null;
}

export function AnalysisDashboard({ uploadedFile }: AnalysisDashboardProps) {
  const [overallScore, setOverallScore] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);

  // Mock analysis data
  const analysisData = {
    overallScore: 87,
    categories: {
      usability: { score: 92, issues: 2 },
      accessibility: { score: 78, issues: 5 },
      visual: { score: 94, issues: 1 },
      typography: { score: 86, issues: 3 },
      spacing: { score: 89, issues: 2 },
      responsiveness: { score: 83, issues: 4 }
    },
    issues: [
      {
        id: 1,
        type: 'accessibility',
        severity: 'high',
        title: 'Low color contrast',
        description: 'Text color #666666 on background #FFFFFF has contrast ratio 4.54:1, below WCAG AA standard',
        location: { x: 120, y: 340 },
        suggestion: 'Use darker text color like #424242 for better contrast'
      },
      {
        id: 2,
        type: 'spacing',
        severity: 'medium',
        title: 'Inconsistent spacing',
        description: 'Spacing between elements varies (16px, 18px, 20px)',
        location: { x: 250, y: 120 },
        suggestion: 'Use consistent 16px or 24px spacing throughout'
      },
      {
        id: 3,
        type: 'typography',
        severity: 'low',
        title: 'Font hierarchy unclear',
        description: 'H2 and H3 have similar font sizes (18px vs 17px)',
        location: { x: 180, y: 200 },
        suggestion: 'Increase contrast between heading levels'
      },
      {
        id: 4,
        type: 'usability',
        severity: 'high',
        title: 'Button too small for mobile',
        description: 'Button size 32px height is below 44px touch target minimum',
        location: { x: 300, y: 450 },
        suggestion: 'Increase button height to at least 44px'
      },
      {
        id: 5,
        type: 'visual',
        severity: 'medium',
        title: 'Misaligned elements',
        description: 'Icons are 2px off vertical center alignment',
        location: { x: 80, y: 300 },
        suggestion: 'Center align icons with text baseline'
      }
    ]
  };

  useEffect(() => {
    if (uploadedFile) {
      setIsAnalyzing(true);
      
      // Simulate analysis progress
      const interval = setInterval(() => {
        setOverallScore(prev => {
          if (prev >= analysisData.overallScore) {
            clearInterval(interval);
            setIsAnalyzing(false);
            toast.success('Analysis complete! Found areas for improvement.');
            return analysisData.overallScore;
          }
          return prev + Math.random() * 5;
        });
      }, 100);
    }
  }, [uploadedFile]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleExportImproved = () => {
    toast.success('Improved design file exported successfully!');
  };

  const handleReAnalyze = () => {
    setIsAnalyzing(true);
    setOverallScore(0);
    toast.info('Re-analyzing design...');
    
    setTimeout(() => {
      setOverallScore(analysisData.overallScore);
      setIsAnalyzing(false);
      toast.success('Re-analysis complete!');
    }, 3000);
  };

  if (!uploadedFile) {
    return (
      <div className="min-h-screen pt-24 px-6 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
            <Eye className="w-12 h-12 text-white/50" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">No file uploaded</h3>
          <p className="text-white/70">Upload a design file to start analysis</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Analysis Results</h1>
            <p className="text-white/70">File: {uploadedFile.name}</p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handleReAnalyze}
              disabled={isAnalyzing}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isAnalyzing ? 'animate-spin' : ''}`} />
              Re-analyze
            </Button>
            <Button 
              onClick={handleExportImproved}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Improved
            </Button>
          </div>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="backdrop-blur-xl bg-white/5 border border-white/10 p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">Overall Design Score</h2>
                <p className="text-white/70">Based on usability, accessibility, and design principles</p>
              </div>
              <div className="text-right">
                <div className={`text-6xl font-bold ${getScoreColor(overallScore)}`}>
                  {isAnalyzing ? Math.round(overallScore) : overallScore}
                </div>
                <div className="text-white/50 text-lg">/ 100</div>
                {isAnalyzing && (
                  <div className="mt-2">
                    <div className="animate-pulse text-orange-400 text-sm">Analyzing...</div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Design Preview with Issues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card className="backdrop-blur-xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Design Preview with Issues</h3>
            <div className="relative bg-white/10 rounded-lg p-8 min-h-[400px] overflow-hidden">
              {/* Mock design preview */}
              <div className="absolute inset-4 bg-white rounded-lg shadow-lg">
                <div className="p-6">
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3 mb-6"></div>
                  <div className="flex gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-3 bg-gray-400 rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="h-10 bg-blue-500 rounded mb-4"></div>
                </div>
              </div>
              
              {/* Issue markers */}
              {analysisData.issues.map((issue, index) => (
                <motion.div
                  key={issue.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className={`absolute w-6 h-6 rounded-full border-2 cursor-pointer transition-all ${
                    selectedIssue === issue.id 
                      ? 'scale-150 z-10' 
                      : 'hover:scale-125'
                  } ${getSeverityColor(issue.severity)}`}
                  style={{ 
                    left: issue.location.x, 
                    top: issue.location.y 
                  }}
                  onClick={() => setSelectedIssue(selectedIssue === issue.id ? null : issue.id)}
                >
                  <div className="w-full h-full rounded-full bg-current opacity-50 animate-pulse"></div>
                  {selectedIssue === issue.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-8 left-0 w-64 p-3 bg-black/90 backdrop-blur-xl rounded-lg border border-white/20 z-20"
                    >
                      <h4 className="text-white font-semibold text-sm mb-1">{issue.title}</h4>
                      <p className="text-white/70 text-xs mb-2">{issue.description}</p>
                      <p className="text-orange-400 text-xs">{issue.suggestion}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Category Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {Object.entries(analysisData.categories).map(([category, data], index) => {
            const icons = {
              usability: Users,
              accessibility: Accessibility,
              visual: Eye,
              typography: Type,
              spacing: Target,
              responsiveness: Smartphone
            };
            const Icon = icons[category as keyof typeof icons];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold capitalize">{category}</h3>
                        <p className="text-white/50 text-sm">{data.issues} issues</p>
                      </div>
                    </div>
                    <div className={`text-2xl font-bold ${getScoreColor(data.score)}`}>
                      {data.score}
                    </div>
                  </div>
                  <Progress value={data.score} className="w-full" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Issues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
            <Tabs defaultValue="all" className="w-full">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Issues & Suggestions</h3>
                <TabsList className="bg-white/10 border border-white/20">
                  <TabsTrigger value="all" className="data-[state=active]:bg-orange-500">All Issues</TabsTrigger>
                  <TabsTrigger value="high" className="data-[state=active]:bg-red-500">High Priority</TabsTrigger>
                  <TabsTrigger value="medium" className="data-[state=active]:bg-yellow-500">Medium</TabsTrigger>
                  <TabsTrigger value="low" className="data-[state=active]:bg-blue-500">Low Priority</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="p-6">
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {analysisData.issues.map((issue, index) => (
                      <motion.div
                        key={issue.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                        onClick={() => setSelectedIssue(issue.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className={getSeverityColor(issue.severity)}>
                                {issue.severity}
                              </Badge>
                              <h4 className="text-white font-semibold">{issue.title}</h4>
                            </div>
                            <p className="text-white/70 text-sm mb-3">{issue.description}</p>
                            <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                              <p className="text-orange-400 text-sm">
                                💡 {issue.suggestion}
                              </p>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                          >
                            Fix
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Other tab contents would filter issues by severity */}
              <TabsContent value="high" className="p-6">
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {analysisData.issues
                      .filter(issue => issue.severity === 'high')
                      .map((issue, index) => (
                        <div key={issue.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className={getSeverityColor(issue.severity)}>
                              {issue.severity}
                            </Badge>
                            <h4 className="text-white font-semibold">{issue.title}</h4>
                          </div>
                          <p className="text-white/70 text-sm mb-3">{issue.description}</p>
                          <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                            <p className="text-orange-400 text-sm">
                              💡 {issue.suggestion}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}