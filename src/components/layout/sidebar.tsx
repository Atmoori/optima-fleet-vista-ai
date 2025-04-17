
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  MapPinned,
  ActivitySquare,
  Shield,
  Car,
  Truck,
  Bell,
  Settings,
  Calendar,
  FileText,
  Gauge,
  Workflow,
  LogOut,
  Clock,
  Database,
  Lock,
  HelpCircle,
} from "lucide-react";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  path: string;
  isActive?: boolean;
}

// AWR Logo component
const AwrLogo = () => (
  <div className="flex items-center gap-2 px-4 py-5">
    <div className="relative h-8 w-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-sand-gold rounded-full opacity-80"></div>
      <svg
        className="relative z-10 w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L3 20H21L12 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 4L18 12H6L12 4Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div>
      <h1 className="text-lg font-bold text-white">
        Fleet<span className="text-sand-gold">AI</span>Optima
      </h1>
      <p className="text-[10px] text-gray-300 -mt-1">by AWR</p>
    </div>
  </div>
);

// Sidebar item component with animation
const SidebarItem = ({ icon, label, path, isActive }: SidebarItemProps) => (
  <Link
    to={path}
    className={cn(
      "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300",
      isActive
        ? "bg-sidebar-accent text-white"
        : "text-gray-300 hover:bg-sidebar-accent/50 hover:text-white"
    )}
  >
    <div className={cn(
      "w-5 h-5", 
      isActive && "text-sand-gold"
    )}>
      {icon}
    </div>
    <span className="text-sm font-medium">{label}</span>
    {isActive && (
      <motion.div
        layoutId="sidebar-indicator"
        className="ml-auto w-1 h-4 bg-sand-gold rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    )}
  </Link>
);

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const navigationItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/",
    },
    {
      label: "Route Optimization",
      icon: <MapPinned size={18} />,
      path: "/routes",
    },
    {
      label: "Predictive Maintenance",
      icon: <ActivitySquare size={18} />,
      path: "/maintenance",
    },
    {
      label: "Driver Safety",
      icon: <Shield size={18} />,
      path: "/safety",
    },
    {
      label: "Automation",
      icon: <Workflow size={18} />,
      path: "/automation",
    },
    {
      label: "Real-Time Data",
      icon: <Clock size={18} />,
      path: "/data",
    },
    {
      label: "Compliance & Security",
      icon: <Lock size={18} />,
      path: "/compliance",
    },
  ];

  // Additional items for the bottom of the sidebar
  const bottomItems = [
    {
      label: "Settings",
      icon: <Settings size={18} />,
      path: "/settings",
    },
    {
      label: "Help",
      icon: <HelpCircle size={18} />,
      path: "/help",
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-sidebar-background border-r border-sidebar-border w-64 fixed">
      <AwrLogo />
      
      <div className="px-3 py-2">
        <h2 className="text-xs font-semibold text-gray-400 px-4 mb-2 uppercase tracking-wider">
          Main Navigation
        </h2>
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isActive={pathname === item.path}
            />
          ))}
        </nav>
      </div>
      
      <div className="mt-auto px-3 py-4 border-t border-sidebar-border">
        <nav className="space-y-1">
          {bottomItems.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isActive={pathname === item.path}
            />
          ))}
          <button className="flex items-center gap-3 px-4 py-2.5 w-full rounded-lg transition-all duration-300 text-gray-300 hover:bg-sidebar-accent/50 hover:text-white">
            <LogOut size={18} />
            <span className="text-sm font-medium">Log out</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
