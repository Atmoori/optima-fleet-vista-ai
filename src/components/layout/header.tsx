
import { Bell, Globe, Moon, Search, Sun, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'english' | 'arabic'>('english');

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
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
          <Button variant="ghost" size="icon" className="rounded-full relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
          </Button>

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
