import { motion } from "motion/react";
import {
  Upload,
  Zap,
  Eye,
  Download,
  Settings,
  HelpCircle,
  Home,
  BarChart3,
  FileText,
  Users,
  Bell,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({
  activeSection,
  onSectionChange,
}: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "analyze", label: "Analyze", icon: Zap },
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "reports", label: "Reports", icon: FileText },
  ];

  const secondaryItems = [
    { id: "team", label: "Team", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "help", label: "Help", icon: HelpCircle },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-4"
    >
      <div className="bg-[#012A3A]/95 backdrop-blur-xl border border-[#013D52] rounded-2xl p-2 shadow-2xl">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="w-8 h-8 bg-[#00ED64] rounded-lg flex items-center justify-center">
              <Eye className="w-4 h-4 text-[#001E2B]" />
            </div>
            <span className="text-white font-semibold text-[16px] whitespace-nowrap">UiX Sense</span>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center gap-1 px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-[#00ED64]/20 text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-[#00ED64]/30 rounded-xl"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Secondary Items */}
          <div className="flex items-center gap-1 px-2 border-l border-white/10 ml-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10 relative"
            >
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 bg-[#00ED64] text-[#001E2B] text-xs w-5 h-5 flex items-center justify-center p-0">
                3
              </Badge>
            </Button>

            {secondaryItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onSectionChange(item.id)}
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Icon className="w-4 h-4" />
                </Button>
              );
            })}

            <Avatar className="w-8 h-8 ml-2 border-2 border-[#013D52]">
              <div className="w-full h-full bg-[#00ED64] flex items-center justify-center text-[#001E2B] text-sm">
                U
              </div>
            </Avatar>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}