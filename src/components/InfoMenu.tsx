import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, Shield, FileText, AlertTriangle, Mail, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MenuItem {
  path: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

const menuItems: MenuItem[] = [
  { path: '/about', label: 'About', icon: Info, description: 'Learn about the app' },
  { path: '/privacy', label: 'Privacy Policy', icon: Shield, description: 'How we handle your data' },
  { path: '/terms', label: 'Terms of Service', icon: FileText, description: 'Usage terms and conditions' },
  { path: '/disclaimer', label: 'Disclaimer', icon: AlertTriangle, description: 'Important legal information' },
  { path: '/contact', label: 'Contact & Support', icon: Mail, description: 'Get help or send feedback' },
];

export const InfoMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg"
      >
        <Info className="w-5 h-5" />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div className={cn(
        'fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-card border-l border-border shadow-xl',
        'transform transition-transform duration-300 ease-out',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Information</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={cn(
                'w-full flex items-center gap-3 p-3 rounded-lg',
                'bg-background/50 hover:bg-accent/50 border border-border',
                'transition-colors duration-200 text-left'
              )}
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground truncate">{item.description}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          ))}
        </div>

        <div className="absolute bottom-safe left-0 right-0 p-4 border-t border-border bg-card">
          <p className="text-xs text-muted-foreground text-center">
            Crisis Impact Calculator v1.0.0
          </p>
          <p className="text-xs text-muted-foreground text-center mt-1">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};
