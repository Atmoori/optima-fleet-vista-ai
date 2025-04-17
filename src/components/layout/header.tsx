
import { Bell, Globe, Moon, Search, Sun, User, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/sonner";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'english' | 'arabic'>('english');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Maintenance Alert",
      message: "Vehicle DXB-4872 requires immediate maintenance",
      time: "10 minutes ago",
      read: false
    },
    {
      id: 2,
      title: "Route Optimization",
      message: "New route calculated for Vehicle DXB-3241",
      time: "1 hour ago",
      read: false
    },
    {
      id: 3,
      title: "Driver Safety Alert",
      message: "Harsh braking detected for driver Ahmed K.",
      time: "3 hours ago",
      read: false
    }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
    toast.success("All notifications marked as read");
  };

  const dismissNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    toast.success("Notification dismissed");
  };

  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="border-b border-border bg-background backdrop-blur-sm sticky top-0 z-10">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left section - Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Search..."
            className="pl-10 pr-4 py-2 text-sm w-64 rounded-full bg-muted border-none focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Right section - Actions */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                className={language === 'english' ? 'bg-secondary text-secondary-foreground' : ''}
                onClick={() => setLanguage('english')}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                className={language === 'arabic' ? 'bg-secondary text-secondary-foreground' : ''}
                onClick={() => setLanguage('arabic')}
              >
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Notifications */}
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full relative"
              onClick={toggleNotifications}
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-[10px] text-destructive-foreground font-medium">
                  {unreadCount}
                </span>
              )}
            </Button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-background border border-border rounded-md shadow-lg z-50">
                <div className="flex items-center justify-between p-3 border-b">
                  <h3 className="font-medium text-sm">Notifications</h3>
                  {unreadCount > 0 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={markAllAsRead} 
                      className="text-xs h-7 px-2"
                    >
                      Mark all as read
                    </Button>
                  )}
                </div>
                
                <div className="max-h-96 overflow-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-3 border-b flex items-start justify-between ${!notification.read ? 'bg-muted/50' : ''}`}
                      >
                        <div className="flex-1 pr-2">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold">{notification.title}</h4>
                            {!notification.read && (
                              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                            )}
                          </div>
                          <p className="text-xs mt-1 text-muted-foreground">{notification.message}</p>
                          <p className="text-xs mt-1 text-muted-foreground">{notification.time}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6 mt-1" 
                          onClick={() => dismissNotification(notification.id)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-center">
                      <p className="text-sm text-muted-foreground">No notifications</p>
                    </div>
                  )}
                </div>
                
                {notifications.length > 0 && (
                  <div className="p-2 border-t text-center">
                    <Button variant="ghost" size="sm" className="w-full text-xs">
                      View all notifications
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* User profile */}
          <Button variant="ghost" className="rounded-full flex items-center gap-2 p-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <User className="h-5 w-5" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium">Ahmed Khalid</p>
              <p className="text-xs text-muted-foreground">Fleet Manager</p>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
